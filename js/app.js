/* 尖山埤植物導覽 — 主程式（不需建置工具，直接放上 GitHub Pages 即可） */
(function () {
  "use strict";

  const PLANTS = window.PLANTS, ZONES = window.ZONES, POINTS = window.POINTS, SITE = window.SITE;
  const byId = Object.fromEntries(PLANTS.map(p => [p.id, p]));
  const zoneById = Object.fromEntries(ZONES.map(z => [z.id, z]));

  const TAGS = {
    food: { label: "食用", color: "var(--t-food)", hex: "#c97a00" },
    med: { label: "藥用", color: "var(--t-med)", hex: "#7a5aa6" },
    use: { label: "實用", color: "var(--t-use)", hex: "#8a6a3b" },
    view: { label: "景觀", color: "var(--t-view)", hex: "#2b7a86" },
    invasive: { label: "外來入侵", color: "var(--t-invasive)", hex: "#b8352a" },
    toxic: { label: "有毒注意", color: "var(--t-toxic)", hex: "#3b3b3b" }
  };
  const TAG_ORDER = ["food", "med", "use", "view", "invasive", "toxic"];
  // 地圖點的顏色：依用途優先序選一個代表色
  const markerColor = p => TAGS[["invasive", "food", "med", "use", "view"].find(t => p.tags.includes(t)) || "view"].hex;

  // 每種植物出現在哪些點位、哪些分區
  const pointsOf = {};
  POINTS.forEach(pt => { (pointsOf[pt.plant] = pointsOf[pt.plant] || []).push(pt); });
  const zonesOf = id => [...new Set((pointsOf[id] || []).map(pt => pt.zone))].sort();

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = sel => document.querySelector(sel);
  const view = $("#view"), panel = $("#panel");

  /* ---------------- 地圖 ---------------- */
  const map = L.map("map", { zoomControl: false, maxZoom: 20 }).setView(SITE.center, 17);
  L.control.zoom({ position: "topright" }).addTo(map);

  const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20, maxNativeZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者'
  }).addTo(map);
  const sat = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 20, maxNativeZoom: 19, attribution: "影像 &copy; Esri"
  });
  L.control.layers({ "地圖": osm, "衛星影像": sat }, null, { position: "topright" }).addTo(map);
  L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);

  const zoneLayers = {};
  ZONES.forEach(z => {
    const poly = L.polygon(z.polygon, { color: "#1d4a37", weight: 1.5, fillColor: "#2c6a50", fillOpacity: .08, dashArray: "4 4" })
      .addTo(map)
      .on("click", () => { location.hash = "#/zone/" + z.id; });
    poly.bindTooltip(z.id + " " + z.name, { permanent: true, direction: "center", className: "zone-label" });
    zoneLayers[z.id] = poly;
  });

  // 縮小時隱藏分區名稱，避免文字重疊
  const syncLabels = () => map.getContainer().classList.toggle("far", map.getZoom() < 17);
  map.on("zoomend", syncLabels); syncLabels();

  L.marker(SITE.center_point, {
    icon: L.divIcon({ className: "edu-pin", html: SITE.center_label, iconSize: null, iconAnchor: [40, 10] }),
    keyboard: false
  }).addTo(map);

  const markers = {};
  POINTS.forEach(pt => {
    const p = byId[pt.plant];
    if (!p) { console.warn("點位對應不到植物：", pt); return; }
    const m = L.circleMarker([pt.lat, pt.lng], {
      radius: 7, weight: 2, color: "#fff", fillColor: markerColor(p), fillOpacity: 1
    }).addTo(map);
    m.bindTooltip(p.name, { className: "ptip", direction: "top", offset: [0, -6] });
    m.on("click", () => { location.hash = "#/plant/" + p.id; });
    markers[pt.id] = m;
  });

  function highlight(ids) {
    POINTS.forEach(pt => {
      const m = markers[pt.id]; if (!m) return;
      const on = !ids || ids.includes(pt.id);
      m.setStyle({ fillOpacity: on ? 1 : .25, opacity: on ? 1 : .35, radius: ids && on ? 10 : 7 });
      if (ids && on) m.bringToFront();
    });
  }
  function fitPoints(pts) {
    if (!pts.length) return;
    const b = L.latLngBounds(pts.map(pt => [pt.lat, pt.lng]));
    map.flyToBounds(b, { padding: [60, 60], maxZoom: 19, duration: .6, ...mapPadding() });
  }
  // 手機版下方有抽屜，飛到某點時要把中心往上推
  function mapPadding() {
    if (innerWidth > 760 || panel.classList.contains("collapsed")) return {};
    return { paddingBottomRight: [20, panel.offsetHeight + 20] };
  }

  /* ---------------- 定位 ---------------- */
  let me = null, meMarker = null, meCircle = null, watchId = null, firstFix = true;
  const locBtn = $("#locate"), locText = $("#locate-text");
  const distM = (a, b) => map.distance(a, b);

  function startLocate() {
    if (!("geolocation" in navigator)) { locText.textContent = "此裝置不支援定位"; return; }
    locText.textContent = "定位中…";
    locBtn.setAttribute("aria-pressed", "true");
    watchId = navigator.geolocation.watchPosition(onPos, onPosErr, { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 });
  }
  function stopLocate() {
    if (watchId != null) navigator.geolocation.clearWatch(watchId);
    watchId = null; firstFix = true;
    locBtn.setAttribute("aria-pressed", "false");
    locText.textContent = "顯示我的位置";
  }
  function onPos(pos) {
    me = [pos.coords.latitude, pos.coords.longitude];
    const acc = Math.round(pos.coords.accuracy);
    if (!meMarker) {
      meCircle = L.circle(me, { radius: acc, color: "#f0b323", weight: 1, fillColor: "#f0b323", fillOpacity: .15, interactive: false }).addTo(map);
      meMarker = L.circleMarker(me, { radius: 9, color: "#18261f", weight: 3, fillColor: "#f0b323", fillOpacity: 1, interactive: false }).addTo(map);
    } else { meMarker.setLatLng(me); meCircle.setLatLng(me).setRadius(acc); }
    locText.textContent = "定位中（±" + acc + " 公尺）";
    if (firstFix) {
      firstFix = false;
      if (distM(me, SITE.center) < 2000) map.flyTo(me, 18, { duration: .6, ...mapPadding() });
    }
    if (route.name === "nearby") renderNearby();
  }
  function onPosErr(err) {
    stopLocate();
    locText.textContent = err.code === 1 ? "請允許網站使用定位" : "無法取得位置，請再試一次";
    if (route.name === "nearby") renderNearby(err);
  }
  locBtn.addEventListener("click", () => {
    if (watchId == null) { startLocate(); if (route.name !== "nearby") location.hash = "#/nearby"; }
    else stopLocate();
  });

  /* ---------------- 手機抽屜 ---------------- */
  const grip = $("#grip");
  function setCollapsed(c) { panel.classList.toggle("collapsed", c); grip.setAttribute("aria-expanded", String(!c)); setTimeout(() => map.invalidateSize(), 260); }
  grip.addEventListener("click", () => setCollapsed(!panel.classList.contains("collapsed")));

  /* ---------------- 共用片段 ---------------- */
  const dotHtml = p => '<span class="dots" aria-hidden="true">' + p.tags.map(t => '<i style="background:' + TAGS[t].color + '"></i>').join("") + "</span>";
  const thumbSrc = p => { const ph = typeof p.photo === "string" ? { src: p.photo } : p.photo; return ph ? ph.src.replace(/\/960px-/, "/120px-") : ""; };
  function plantRow(p, right) {
    const t = thumbSrc(p);
    return '<li><a class="prow' + (t ? "" : " nothumb") + '" href="#/plant/' + p.id + '">' + (t ? '<img class="pthumb" src="' + esc(t) + '" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">' : '<span class="pthumb"></span>') + '<span class="pname">' + esc(p.name) + dotHtml(p) + '</span>' +
      '<span class="psci">' + esc(p.sci) + '</span><span class="pmeta">' + right + "</span></a></li>";
  }
  let activeTag = null;
  function chipsHtml() {
    return '<div class="chips" role="group" aria-label="依用途篩選">' +
      '<button class="chip" data-tag="" aria-pressed="' + (!activeTag) + '">全部</button>' +
      TAG_ORDER.map(t => '<button class="chip" data-tag="' + t + '" aria-pressed="' + (activeTag === t) + '"><i style="background:' + TAGS[t].color + '"></i>' + TAGS[t].label + "</button>").join("") +
      "</div>";
  }
  function bindChips(rerender) {
    view.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => { activeTag = b.dataset.tag || null; rerender(); }));
  }
  const matchTag = p => !activeTag || p.tags.includes(activeTag);
  const norm = s => s.toLowerCase().replace(/\s+/g, "");
  function matchQuery(p, q) {
    if (!q) return true;
    q = norm(q);
    return [p.name, ...p.alias, p.sci, p.family].some(s => norm(s).includes(q));
  }

  /* ---------------- 各頁面 ---------------- */
  function renderList() {
    const q = $("#q").value.trim();
    const list = PLANTS.filter(p => matchTag(p) && matchQuery(p, q));
    view.innerHTML =
      "<h2>植物圖鑑</h2><p class=\"lead\">園區調查記錄的 " + PLANTS.length + " 種植物。點選名稱看介紹與位置。</p>" + chipsHtml() +
      (list.length ? '<ul class="plist">' + list.map(p => {
        const zs = zonesOf(p.id);
        return plantRow(p, zs.length ? zs.join("、") + " 區" : "未標位置");
      }).join("") + "</ul>" : '<p class="empty">找不到符合的植物。試試別名，或清除篩選條件。</p>');
    bindChips(renderList);
    highlight(activeTag || q ? POINTS.filter(pt => list.some(p => p.id === pt.plant)).map(pt => pt.id) : null);
  }

  function renderZones() {
    view.innerHTML = "<h2>園區分區</h2><p class=\"lead\">依調查點位把園區分成 " + ZONES.length + " 區。點選分區或地圖上的範圍，看那裡有哪些植物。</p>" +
      '<ul class="zlist">' + ZONES.map(z => {
        const n = new Set(POINTS.filter(pt => pt.zone === z.id).map(pt => pt.plant)).size;
        return '<li><a class="zcard" href="#/zone/' + z.id + '"><span class="zletter">' + z.id + '</span><span class="zname">' + esc(z.name) + "（" + n + " 種）</span><span class=\"zdesc\">" + esc(z.desc) + "</span></a></li>";
      }).join("") + "</ul>";
    highlight(null);
    map.flyToBounds(L.featureGroup(Object.values(zoneLayers)).getBounds(), { padding: [30, 30], duration: .6, ...mapPadding() });
  }

  function renderZone(id) {
    const z = zoneById[id];
    if (!z) return renderNotFound();
    const pts = POINTS.filter(pt => pt.zone === id);
    const ids = [...new Set(pts.map(pt => pt.plant))].map(i => byId[i]).filter(matchTag);
    view.innerHTML = '<a class="back" href="#/zones">← 所有分區</a><h2>' + z.id + " " + esc(z.name) + '</h2><p class="lead">' + esc(z.desc) + "</p>" + chipsHtml() +
      (ids.length ? '<ul class="plist">' + ids.map(p => plantRow(p, pts.filter(pt => pt.plant === p.id).length + " 處")).join("") + "</ul>" : '<p class="empty">這一區沒有符合篩選的植物。</p>');
    bindChips(() => renderZone(id));
    highlight(pts.filter(pt => matchTag(byId[pt.plant])).map(pt => pt.id));
    map.flyToBounds(zoneLayers[id].getBounds(), { padding: [40, 40], maxZoom: 19, duration: .6, ...mapPadding() });
  }

  function renderPlant(id) {
    const p = byId[id];
    if (!p) return renderNotFound();
    const pts = pointsOf[id] || [];
    const zs = zonesOf(id);
    const ph = typeof p.photo === "string" ? { src: p.photo } : p.photo;
    const photo = ph ? '<figure class="sign-photo"><img src="' + esc(ph.src) + '" alt="' + esc(p.name) + '的照片" loading="lazy" onerror="this.parentNode.remove()">' +
      (ph.author ? '<figcaption>照片：' + (ph.page ? '<a href="' + esc(ph.page) + '" target="_blank" rel="noopener">' + esc(ph.author) + "</a>" : esc(ph.author)) + "，" + esc(ph.license || "") + (ph.page ? "，Wikimedia Commons" : "") + "</figcaption>" : "") +
      "</figure>" : "";
    let near = "";
    if (me && pts.length) {
      const d = Math.min(...pts.map(pt => distM(me, [pt.lat, pt.lng])));
      near = "，離你最近的一株約 " + Math.round(d) + " 公尺";
    }
    view.innerHTML =
      '<a class="back" href="javascript:history.back()">← 返回</a>' +
      '<article class="detail">' +
      '<div class="sign">' + photo + '<span class="status">' + esc(p.status) + "</span>" +
      "<h2>" + esc(p.name) + "</h2>" +
      (p.alias.length ? '<p class="alias">別名：' + p.alias.map(esc).join("、") + "</p>" : "") +
      '<p class="sci">' + esc(p.sci) + '</p><p class="family">' + esc(p.family) + "</p>" +
      '<ul class="tags">' + p.tags.map(t => '<li><i style="background:' + TAGS[t].color + '"></i>' + TAGS[t].label + "</li>").join("") + "</ul>" +
      "</div>" +
      "<h3>認識它</h3><p>" + esc(p.intro) + "</p>" +
      "<h3>用途</h3><ul class=\"uses\">" + p.uses.map(u => "<li>" + esc(u) + "</li>").join("") + "</ul>" +
      (p.caution ? '<div class="caution"><strong>注意：</strong>' + esc(p.caution) + "</div>" : "") +
      "<h3>在園區哪裡</h3>" +
      (pts.length
        ? "<p>共 " + pts.length + " 處，位於 " + zs.map(z => '<a href="#/zone/' + z + '">' + z + " " + esc(zoneById[z].name) + "</a>").join("、") + near + "。</p>" +
          '<div class="where"><button class="btn primary" id="show-on-map">在地圖上顯示</button></div>'
        : "<p>調查有記錄這種植物，但還沒有標註位置。</p>") +
      (p.note ? '<p class="note">備註：' + esc(p.note) + "</p>" : "") +
      "</article>";
    highlight(pts.length ? pts.map(pt => pt.id) : []);
    if (pts.length) {
      fitPoints(pts);
      $("#show-on-map").addEventListener("click", () => { fitPoints(pts); if (innerWidth <= 760) setCollapsed(true); });
    }
  }

  function renderNearby(err) {
    let html = "<h2>我附近的植物</h2>";
    if (!me) {
      html += '<p class="lead">開啟定位後，這裡會依距離列出你身邊的植物。</p>' +
        (err ? '<div class="notice warn">' + (err.code === 1
          ? "瀏覽器拒絕了定位權限。請到瀏覽器設定中允許此網站使用位置，再按一次「顯示我的位置」。"
          : "暫時取得不到位置。請確認手機已開啟定位，或到空曠處再試。") + "</div>" : "") +
        (watchId == null ? '<button class="btn primary" id="start-loc">顯示我的位置</button>' : '<div class="notice">定位中…</div>') +
        '<p class="lead" style="margin-top:18px">也可以直接點地圖上的分區或圓點。</p>';
      view.innerHTML = html;
      const b = $("#start-loc"); if (b) b.addEventListener("click", startLocate);
      highlight(null);
      return;
    }
    const fromCenter = distM(me, SITE.center);
    const ranked = POINTS.map(pt => ({ pt, d: distM(me, [pt.lat, pt.lng]) })).sort((a, b) => a.d - b.d);
    const seen = new Set(), rows = [];
    for (const r of ranked) {
      if (seen.has(r.pt.plant)) continue;
      seen.add(r.pt.plant); rows.push(r);
      if (rows.length >= 15) break;
    }
    if (fromCenter > 1500) {
      html += '<div class="notice warn">你目前不在尖山埤園區內（距離約 ' + (fromCenter / 1000).toFixed(1) + " 公里）。下面仍依距離排序，到園區後會更準確。</div>";
    } else {
      html += '<p class="lead">依直線距離排序，最近的 ' + rows.length + " 種。點位為調查時的大致位置。</p>";
    }
    html += '<ul class="plist">' + rows.map(r => plantRow(byId[r.pt.plant], '<span class="dist">' + fmtDist(r.d) + "</span>")).join("") + "</ul>";
    view.innerHTML = html;
    highlight(rows.filter(r => r.d < 150).map(r => r.pt.id).concat());
  }
  const fmtDist = d => d < 1000 ? Math.round(d) + " 公尺" : (d / 1000).toFixed(1) + " 公里";

  function renderAbout() {
    view.innerHTML = '<div class="about"><h2>關於這個網站</h2>' +
      "<p>尖山埤渡假村原為日治時期興建、供應新營糖廠製糖用水的尖山埤水庫，2003 年轉型為渡假村，2015 年成立環境學習中心。這個網站把園區的植物解說「線上化」：不必維護日曬雨淋的立牌，遊客用手機就能知道自己在哪裡、身邊是什麼植物、它有什麼用途。</p>" +
      "<h3>地圖上的顏色</h3><ul class=\"legend\">" +
      ["food", "med", "use", "view", "invasive"].map(t => '<li><i style="background:' + TAGS[t].color + '"></i>' + TAGS[t].label + "</li>").join("") +
      '<li><i style="background:var(--sun)"></i>你的位置</li></ul>' +
      "<p>一種植物有多種用途時，圓點顏色依「外來入侵 → 食用 → 藥用 → 實用 → 景觀」的順序取第一個。</p>" +
      "<h3>資料來源</h3><ul>" +
      "<li>植物名錄與點位：國立臺南大學 生態暨環境資源學系〈生態調查－台糖柳營尖山埤渡假村〉第二組（114 年 6 月，指導教授 謝宗欣）。</li>" +
      "<li>學名、科別與用途：依臺灣植物資訊整合查詢系統、農業部農業知識入口網等資料核對。</li>" +
      "<li>底圖：OpenStreetMap 貢獻者；衛星影像：Esri。</li></ul>" +
      "<h3>使用提醒</h3><ul>" +
      "<li>點位是調查時的大致位置（誤差約 10–20 公尺），植物也可能因修剪、季節而改變。</li>" +
      "<li>網站上的食用、藥用資訊僅供環境教育參考。園區植物請勿任意採摘；野外植物務必確認種類，藥用請諮詢專業醫師。</li></ul>" +
      '<p><a href="signs.html">列印植物 QR Code 牌卡</a>：可貼在現場，掃描直接開啟該植物的介紹。</p>' +
      "</div>";
    highlight(null);
  }

  function renderNotFound() {
    view.innerHTML = '<h2>找不到這個頁面</h2><p class="lead">連結可能已更改。<a href="#/list">回到植物圖鑑</a></p>';
  }

  /* ---------------- 路由 ---------------- */
  let route = { name: "list" };
  function parse() {
    const h = location.hash.replace(/^#\/?/, "").split("/");
    switch (h[0]) {
      case "plant": return { name: "plant", id: decodeURIComponent(h[1] || "") };
      case "zone": return { name: "zone", id: decodeURIComponent(h[1] || "") };
      case "zones": return { name: "zones" };
      case "nearby": return { name: "nearby" };
      case "about": return { name: "about" };
      default: return { name: "list" };
    }
  }
  function render() {
    route = parse();
    const tab = route.name === "plant" ? null : route.name === "zone" ? "zones" : route.name;
    document.querySelectorAll(".tabs a").forEach(a => a.setAttribute("aria-selected", String(a.dataset.tab === tab)));
    ({ plant: () => renderPlant(route.id), zone: () => renderZone(route.id), zones: renderZones, nearby: () => renderNearby(), about: renderAbout, list: renderList })[route.name]();
    view.scrollTop = 0;
    if (innerWidth <= 760 && panel.classList.contains("collapsed") && route.name !== "plant") setCollapsed(false);
    if (innerWidth <= 760 && route.name === "plant") setCollapsed(false);
    const title = route.name === "plant" && byId[route.id] ? byId[route.id].name + "｜" : "";
    document.title = title + "尖山埤植物導覽";
  }
  window.addEventListener("hashchange", render);

  $("#q").addEventListener("input", () => {
    if (route.name !== "list") location.hash = "#/list"; else renderList();
  });

  render();
  if (route.name === "list") map.fitBounds(L.featureGroup(Object.values(zoneLayers)).getBounds(), { padding: [20, 20], ...mapPadding() });
})();
