/*
 * 尖山埤渡假村 植物資料
 * ------------------------------------------------------------
 * 來源：國立臺南大學 生態暨環境資源學系 生態調查（第二組，114 年 6 月）現地調查名錄，
 *       學名、科別與用途依臺灣植物誌、農業部農業知識入口網等資料核對。
 *
 * 欄位說明
 *   id       英文代碼（網址與地圖點位會用到，請勿重複）
 *   name     中文名
 *   alias    別名（陣列）
 *   sci      學名
 *   family   科名（APG 分類）
 *   status   原生 / 台灣特有 / 外來栽培 / 外來歸化 / 外來入侵
 *   tags     類別：food 食用、med 藥用、use 實用、view 景觀、invasive 入侵、toxic 有毒注意
 *   intro    一兩句簡介
 *   uses     用途（陣列，每項一句）
 *   caution  注意事項（可省略）
 *   note     調查備註（可省略）
 *   photo    照片：{ src 圖片網址或 images/plants/ 內的路徑, page 出處頁, author 作者, license 授權 }（可省略）
 */
window.PLANTS = [
  {
    id: "yuetao", name: "月桃", alias: ["艷山薑"],
    sci: "Alpinia zerumbet (Pers.) B.L.Burtt & R.M.Sm.", family: "薑科 Zingiberaceae",
    status: "原生", tags: ["food", "med", "use"],
    intro: "低海拔山區常見的大型多年生草本，葉片長大、搓揉有清香，初夏開出下垂的白色帶粉紅花串。",
    uses: [
      "葉片寬大有香氣，傳統用來包粽子、墊蒸粿。",
      "葉鞘曬乾後可撕成纖維，編織草蓆、籃子與繩子。",
      "葉與根莖可煮成月桃茶；種子為傳統藥材「月桃子」。"
    ],
    caution: "種子與根莖入藥須經專業炮製，不宜自行大量食用。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/200410_Alpinia_zerumbet_1.JPG/960px-200410_Alpinia_zerumbet_1.JPG", "page": "https://commons.wikimedia.org/wiki/File:200410_Alpinia_zerumbet_1.JPG", "author": "Semnoz", "license": "CC BY-SA 3.0"}
  },
  {
    id: "mango", name: "芒果", alias: ["檨仔", "樣仔"],
    sci: "Mangifera indica L.", family: "漆樹科 Anacardiaceae",
    status: "外來栽培", tags: ["food", "view"],
    intro: "原產印度至東南亞的常綠喬木，荷蘭時期引進臺灣，是南部常見的庭園樹與果樹。",
    uses: [
      "成熟果實可生食，也能製成果乾、果汁與冰品；青果可醃成「情人果」。",
      "樹冠濃密，常作遮蔭樹。"
    ],
    caution: "屬漆樹科，樹汁與果皮含漆酚類物質，敏感體質碰觸後可能紅腫發癢。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Paitan_Sabah_Common-mango-Mangifera-indica-01.jpg/960px-Paitan_Sabah_Common-mango-Mangifera-indica-01.jpg", "page": "https://commons.wikimedia.org/wiki/File:Paitan_Sabah_Common-mango-Mangifera-indica-01.jpg", "author": "CEphoto, Uwe Aranas", "license": "CC BY-SA 3.0"}
  },
  {
    id: "taro", name: "芋頭", alias: ["芋"],
    sci: "Colocasia esculenta (L.) Schott", family: "天南星科 Araceae",
    status: "外來栽培", tags: ["food"],
    intro: "古老的塊莖作物，葉片盾狀、表面有蠟質會讓水珠滾動。",
    uses: [
      "地下球莖煮熟後可煮湯、蒸食或做成芋泥、芋頭甜湯等點心。",
      "部分品種的葉柄（芋梗）也可煮食。"
    ],
    caution: "生芋含草酸鈣針晶，生食或汁液沾手會刺癢，務必煮熟。外形與有毒的「姑婆芋」相似，請參考姑婆芋的辨識重點。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/%28MHNT%29_Colocasia_esculenta_-_Les_Martels%2C_Giroussens_Tarn.jpg/960px-%28MHNT%29_Colocasia_esculenta_-_Les_Martels%2C_Giroussens_Tarn.jpg", "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Colocasia_esculenta_-_Les_Martels,_Giroussens_Tarn.jpg", "author": "Didier Descouens", "license": "CC BY-SA 4.0"}
  },
  {
    id: "gupoyu", name: "姑婆芋", alias: ["山芋", "觀音蓮"],
    sci: "Alocasia odora (Lindl.) K.Koch", family: "天南星科 Araceae",
    status: "原生", tags: ["use", "toxic"],
    intro: "林下與陰濕處常見的大型草本，葉片寬大、葉面有光澤，常被誤認成芋頭。",
    uses: [
      "早期傳統市場用寬大的葉片包裹豬肉、魚貨。",
      "耐陰、葉形醒目，可作庭園觀葉植物。"
    ],
    caution: "全株有毒，汁液含草酸鈣針晶，誤食會造成口腔、喉嚨灼痛腫脹，汁液碰到皮膚也會刺癢。辨識：姑婆芋葉柄著生在葉片邊緣缺口處、葉面光亮；芋頭葉柄著生在葉片中間偏內（盾狀）、葉面有絨質感會讓水珠滾動。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Alocasia_odora1.jpg/960px-Alocasia_odora1.jpg", "page": "https://commons.wikimedia.org/wiki/File:Alocasia_odora1.jpg", "author": "KENPEI", "license": "CC BY-SA 3.0"}
  },
  {
    id: "spathiphyllum", name: "白鶴芋", alias: ["白掌", "苞葉芋"],
    sci: "Spathiphyllum sp.", family: "天南星科 Araceae",
    status: "外來栽培", tags: ["view", "toxic"],
    intro: "原產熱帶美洲的觀葉植物，白色的「花」其實是佛焰苞，中間棒狀的才是花序。",
    uses: ["耐陰、好照顧，常作庭園地被或室內盆栽。"],
    caution: "植株含草酸鈣，不可食用；寵物誤食也會不適。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/960px-Spathiphyllum_cochlearispathum_RTBG.jpg", "page": "https://commons.wikimedia.org/wiki/File:Spathiphyllum_cochlearispathum_RTBG.jpg", "author": "JJ Harrison", "license": "CC BY-SA 3.0"}
  },
  {
    id: "hydrocotyle", name: "銅錢草", alias: ["香菇草", "南美天胡荽"],
    sci: "Hydrocotyle verticillata Thunb.", family: "五加科 Araliaceae",
    status: "外來栽培", tags: ["view"],
    intro: "葉片圓形、葉柄著生在葉片正中央，像一枚枚銅錢，常種在水邊或盆栽中。",
    uses: ["生長快、耐濕，常用於水生景觀、濕地綠化與盆栽。"],
    caution: "庭園常見的香菇草屬觀賞植物，不建議食用。傳統可食的「雷公根（積雪草 Centella asiatica）」葉柄生在葉片基部缺口，外形不同，採食前務必確認種類。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Starr_980601-1501_Hydrocotyle_verticillata.jpg/960px-Starr_980601-1501_Hydrocotyle_verticillata.jpg", "page": "https://commons.wikimedia.org/wiki/File:Starr_980601-1501_Hydrocotyle_verticillata.jpg", "author": "Forest & Kim Starr", "license": "CC BY 3.0"}
  },
  {
    id: "blumea_axillaris", name: "柔毛艾納香", alias: ["毛艾納香"],
    sci: "Blumea axillaris (Lam.) DC.", family: "菊科 Asteraceae",
    status: "原生", tags: ["med"],
    intro: "路旁、荒地常見的一年生草本，全株密被柔毛，開紫紅色小頭狀花。",
    uses: ["民間把全草當作青草藥使用。"],
    caution: "藥用請遵循專業中醫師指示。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Blumea_axillaris_%2816296598647%29.jpg/960px-Blumea_axillaris_%2816296598647%29.jpg", "page": "https://commons.wikimedia.org/wiki/File:Blumea_axillaris_(16296598647).jpg", "author": "Dinesh Valke", "license": "CC BY-SA 2.0"}
  },
  {
    id: "cizhu", name: "刺竹", alias: ["莿竹"],
    sci: "Bambusa stenostachya Hack.", family: "禾本科 Poaceae",
    status: "原生", tags: ["food", "use"],
    intro: "成叢生長的大型竹子，竹枝節上有銳利的硬刺，是臺灣平原地區的代表竹種。",
    uses: [
      "早期聚落以刺竹圍成「竹圍」，作為防風、防盜的天然圍籬。",
      "竹稈堅韌，可作建材、竹器；竹筍可食但口感較苦，需處理後烹煮。"
    ],
    caution: "枝條有尖刺，靠近時請小心。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bambus_blumean_160603-59102_ponr.JPG/960px-Bambus_blumean_160603-59102_ponr.JPG", "page": "https://commons.wikimedia.org/wiki/File:Bambus_blumean_160603-59102_ponr.JPG", "author": "Wibowo Djatmiko", "license": "CC BY-SA 4.0"}
  },
  {
    id: "blumea_lacera", name: "生毛將軍", alias: ["見霜黃"],
    sci: "Blumea lacera (Burm.f.) DC.", family: "菊科 Asteraceae",
    status: "原生", tags: ["med"],
    intro: "低海拔荒地常見的草本，全株有毛、搓揉有氣味，開黃色小頭狀花。",
    uses: ["為民間常見的青草藥，傳統上取全草使用。"],
    caution: "藥用請遵循專業中醫師指示。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Blumea_lacera_14.JPG/960px-Blumea_lacera_14.JPG", "page": "https://commons.wikimedia.org/wiki/File:Blumea_lacera_14.JPG", "author": "Vinayaraj", "license": "CC BY-SA 4.0"}
  },
  {
    id: "guomao", name: "過溝菜蕨", alias: ["過貓", "蕨貓"],
    sci: "Diplazium esculentum (Retz.) Sw.", family: "蹄蓋蕨科 Athyriaceae",
    status: "原生", tags: ["food"],
    intro: "生長在溝渠、溪邊等潮濕環境的大型蕨類，捲曲的嫩芽就是市場上的野菜「過貓」。",
    uses: ["嫩芽（捲旋的幼葉）可清炒、汆燙涼拌或煮湯，是臺灣最常見的食用蕨類。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Starr_030807-8009_Diplazium_esculentum.jpg/960px-Starr_030807-8009_Diplazium_esculentum.jpg", "page": "https://commons.wikimedia.org/wiki/File:Starr_030807-8009_Diplazium_esculentum.jpg", "author": "Forest & Kim Starr", "license": "CC BY 3.0"}
  },
  {
    id: "sambucus", name: "冇骨消", alias: ["有骨消", "臺灣蒴藋"],
    sci: "Sambucus chinensis Lindl.", family: "五福花科 Adoxaceae",
    status: "原生", tags: ["med", "view"],
    intro: "常見的多年生大型草本至灌木，莖中空（冇＝空），夏季開白色繖房花序，其中的黃色杯狀蜜腺吸引大量昆蟲。",
    uses: [
      "根、莖、葉為民間青草藥。",
      "花期蜜源豐富，是觀察蝴蝶、蜂類的好植物。"
    ],
    caution: "接骨木屬植物的生葉、生果含氰苷類成分，不宜生食。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sambucus_chinensis_1.JPG/960px-Sambucus_chinensis_1.JPG", "page": "https://commons.wikimedia.org/wiki/File:Sambucus_chinensis_1.JPG", "author": "Qwert1234", "license": "CC BY-SA 3.0"}
  },
  {
    id: "wisteria", name: "紫藤", alias: [],
    sci: "Wisteria sinensis (Sims) DC.", family: "豆科 Fabaceae",
    status: "外來栽培", tags: ["view", "toxic"],
    intro: "落葉木質藤本，春季開出成串下垂的淡紫色花，常搭棚架栽種。",
    uses: ["花序優美，適合搭配棚架、花廊作景觀。"],
    caution: "種子與豆莢有毒，請勿食用。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Wisteria_sinensis%2C_Gibraltar.JPG/960px-Wisteria_sinensis%2C_Gibraltar.JPG", "page": "https://commons.wikimedia.org/wiki/File:Wisteria_sinensis,_Gibraltar.JPG", "author": "RedCoat", "license": "CC BY-SA 2.0"}
  },
  {
    id: "youngia", name: "黃鵪菜", alias: [],
    sci: "Youngia japonica (L.) DC.", family: "菊科 Asteraceae",
    status: "原生", tags: ["food", "med"],
    intro: "到處可見的小型草本，葉片貼地成蓮座狀，抽出細長花莖開黃色小花，果實帶白色冠毛隨風飛散。",
    uses: ["嫩葉可汆燙食用，略帶苦味；民間也當作青草藥。"],
    note: "調查原始紀錄寫作「黃鶴菜」，正名為黃鵪菜。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youngja_japonica2.jpg", "page": "https://commons.wikimedia.org/wiki/File:Youngja_japonica2.jpg", "author": "Sphl", "license": "CC BY-SA 3.0"}
  },
  {
    id: "longkui", name: "龍葵", alias: ["烏甜仔菜", "黑點仔菜"],
    sci: "Solanum nigrum L.", family: "茄科 Solanaceae",
    status: "原生", tags: ["food", "med", "toxic"],
    intro: "常見的一年生草本，開白色小花，果實成熟時由綠轉黑。",
    uses: ["嫩莖葉煮熟後是傳統野菜「烏甜仔菜」，可煮湯、炒食；全草也作民間藥。"],
    caution: "未成熟的綠色果實含龍葵鹼，有毒，請勿食用；嫩葉也必須煮熟。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Solanum_nigrum_01.JPG/960px-Solanum_nigrum_01.JPG", "page": "https://commons.wikimedia.org/wiki/File:Solanum_nigrum_01.JPG", "author": "Dalgial", "license": "CC BY-SA 3.0"}
  },
  {
    id: "solanum_am", name: "光果龍葵", alias: ["烏甜仔菜"],
    sci: "Solanum americanum Mill.", family: "茄科 Solanaceae",
    status: "原生", tags: ["food", "toxic"],
    intro: "與龍葵非常相似，果實較小且表面有光澤；臺灣市面所稱的「烏甜仔菜」多屬此種。",
    uses: ["嫩莖葉煮熟後可食用，常煮成蛋花湯或清炒。"],
    caution: "未成熟的綠色果實含龍葵鹼，請勿食用；嫩葉必須煮熟。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solanum_americanum_%28Solanaceae%29.jpg/960px-Solanum_americanum_%28Solanaceae%29.jpg", "page": "https://commons.wikimedia.org/wiki/File:Solanum_americanum_(Solanaceae).jpg", "author": "Juan Carlos Fonseca Mata", "license": "CC BY-SA 4.0"}
  },
  {
    id: "dichondra", name: "馬蹄金", alias: ["小金錢草"],
    sci: "Dichondra micrantha Urb.", family: "旋花科 Convolvulaceae",
    status: "原生", tags: ["med", "view"],
    intro: "匍匐貼地的小草本，腎形小葉像馬蹄印，能長成一片綠毯。",
    uses: [
      "耐踩踏，常作草坪與地被植物。",
      "全草為民間藥。"
    ],
    note: "調查名錄記為可入菜；但一般文獻以藥用、地被為主，不是常見野菜。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Starr_080415-4017_Dichondra_micrantha.jpg/960px-Starr_080415-4017_Dichondra_micrantha.jpg", "page": "https://commons.wikimedia.org/wiki/File:Starr_080415-4017_Dichondra_micrantha.jpg", "author": "Forest & Kim Starr", "license": "CC BY 3.0"}
  },
  {
    id: "tagetes", name: "芳香萬壽菊", alias: ["檸檬萬壽菊", "墨西哥萬壽菊"],
    sci: "Tagetes lemmonii A.Gray", family: "菊科 Asteraceae",
    status: "外來栽培", tags: ["food", "view"],
    intro: "原產北美西南部的香草灌木，葉片搓揉後有濃烈的百香果般香氣，秋冬開滿金黃色花朵。",
    uses: [
      "新鮮嫩葉可沖泡成香草茶。",
      "花朵與嫩葉可少量作料理、甜點裝飾。",
      "香氣濃，種在步道旁可帶入嗅覺體驗。"
    ],
    caution: "對貓、狗、馬等動物具輕微毒性，請避免寵物啃食。",
    note: "調查表記「葉片可調味（類似龍蒿）」，具龍蒿風味、可代替龍蒿入菜的是另一種「香葉萬壽菊（Tagetes lucida）」，兩者不同。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tagetes_lemmonii_4.jpg/960px-Tagetes_lemmonii_4.jpg", "page": "https://commons.wikimedia.org/wiki/File:Tagetes_lemmonii_4.jpg", "author": "Stan Shebs", "license": "CC BY-SA 3.0"}
  },
  {
    id: "persicaria", name: "絨毛蓼", alias: [],
    sci: "Persicaria pulchra Soják", family: "蓼科 Polygonaceae",
    status: "原生", tags: ["view"],
    intro: "低海拔濕地、水溝旁可見的一年生草本，莖葉密被絨毛，開白色穗狀小花。",
    uses: ["濕地常見植物，適合用來介紹水邊植群。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/9/96/Persicaria_attenuata_subsp._pulchra_in_Thailand.jpg", "page": "https://commons.wikimedia.org/wiki/File:Persicaria_attenuata_subsp._pulchra_in_Thailand.jpg", "author": "Ito Y, Barfod A", "license": "CC BY 4.0"}
  },
  {
    id: "callistemon", name: "串錢柳", alias: ["垂枝紅千層"],
    sci: "Melaleuca viminalis (Sol. ex Gaertn.) Byrnes", family: "桃金孃科 Myrtaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產澳洲，枝條下垂如柳，春季開出像試管刷的紅色花序。",
    uses: ["常見景觀樹與行道樹，花蜜吸引綠繡眼等鳥類。"],
    note: "舊學名 Callistemon viminalis。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Melaleuca_viminalis.jpg/960px-Melaleuca_viminalis.jpg", "page": "https://commons.wikimedia.org/wiki/File:Melaleuca_viminalis.jpg", "author": "Geoff Fox", "license": "CC BY 3.0"}
  },
  {
    id: "gardenia", name: "山黃梔", alias: ["梔子", "黃枝"],
    sci: "Gardenia jasminoides J.Ellis", family: "茜草科 Rubiaceae",
    status: "原生", tags: ["med", "use", "view"],
    intro: "常綠灌木，初夏開白色香花，秋冬結出帶稜的橙黃色果實。",
    uses: [
      "果實是傳統的天然黃色染料，可染布，也用於食品著色——很適合搭配植物染課程介紹。",
      "果實是中藥材「梔子」。",
      "花香濃郁，常作庭園植物。"
    ],
    caution: "藥用請遵循專業中醫師指示。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gardenia_jasminoides_in_Mount_Yagi_2008-06-13.jpg/960px-Gardenia_jasminoides_in_Mount_Yagi_2008-06-13.jpg", "page": "https://commons.wikimedia.org/wiki/File:Gardenia_jasminoides_in_Mount_Yagi_2008-06-13.jpg", "author": "Alpsdake", "license": "CC BY-SA 3.0"}
  },
  {
    id: "handroanthus", name: "黃金風鈴木", alias: [],
    sci: "Handroanthus chrysanthus (Jacq.) S.O.Grose", family: "紫葳科 Bignoniaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產中南美洲的落葉喬木，春天（約 3 月）先開花後長葉，整樹金黃。",
    uses: ["著名的賞花景觀樹，花期短而集中。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/7/74/Araguaney.jpg", "page": "https://commons.wikimedia.org/wiki/File:Araguaney.jpg", "author": "Fev", "license": "公有領域"}
  },
  {
    id: "terminalia", name: "菲律賓欖仁", alias: [],
    sci: "Terminalia calamansanai Rolfe", family: "使君子科 Combretaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產菲律賓等地的大喬木，樹幹通直、枝條層層水平展開，樹形優美。",
    uses: ["常作行道樹與景觀樹，提供遮蔭。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Gardenology.org-IMG_8217_qsbg11mar.jpg", "page": "https://commons.wikimedia.org/wiki/File:Gardenology.org-IMG_8217_qsbg11mar.jpg", "author": "Raffi Kojian", "license": "CC BY-SA 3.0"}
  },
  {
    id: "jaboticaba", name: "樹葡萄", alias: ["嘉寶果"],
    sci: "Plinia cauliflora (Mart.) Kausel", family: "桃金孃科 Myrtaceae",
    status: "外來栽培", tags: ["food", "view"],
    intro: "原產巴西，花和果實直接長在樹幹上（幹生花），成熟果實紫黑色，像一串串葡萄貼在樹幹。",
    uses: ["果實可鮮食，也能做果醬、果汁或釀酒。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Jabuticaba_fruto.jpg/960px-Jabuticaba_fruto.jpg", "page": "https://commons.wikimedia.org/wiki/File:Jabuticaba_fruto.jpg", "author": "Alexandre Campolina", "license": "CC BY 3.0"}
  },
  {
    id: "murraya", name: "七里香", alias: ["月橘", "十里香"],
    sci: "Murraya paniculata (L.) Jack", family: "芸香科 Rutaceae",
    status: "原生", tags: ["view", "use"],
    intro: "常綠灌木，白色小花香氣濃郁，果實成熟轉紅。",
    uses: ["耐修剪，是最常見的綠籬植物；花香也吸引蜂蝶。"],
    caution: "七里香是柑橘木蝨的寄主植物，種植於柑橘園附近時需留意。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Starr_070906-8477_Murraya_paniculata.jpg/960px-Starr_070906-8477_Murraya_paniculata.jpg", "page": "https://commons.wikimedia.org/wiki/File:Starr_070906-8477_Murraya_paniculata.jpg", "author": "Forest & Kim Starr", "license": "CC BY 3.0"}
  },
  {
    id: "senna", name: "金葉黃槐", alias: ["黃槐"],
    sci: "Senna surattensis (Burm.f.) H.S.Irwin & Barneby", family: "豆科 Fabaceae",
    status: "外來栽培", tags: ["view"],
    intro: "決明屬小喬木，偶數羽狀複葉，幾乎全年都能開出鮮黃色花朵。",
    uses: ["花期長、色彩明亮，常作庭園與行道樹。"],
    note: "依調查名稱記錄，屬黃槐類，品系名稱待確認。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Starr_080314-3425_Senna_surattensis.jpg/960px-Starr_080314-3425_Senna_surattensis.jpg", "page": "https://commons.wikimedia.org/wiki/File:Starr_080314-3425_Senna_surattensis.jpg", "author": "Forest & Kim Starr", "license": "CC BY 3.0"}
  },
  {
    id: "bidens", name: "大花咸豐草", alias: ["白花鬼針草", "恰查某"],
    sci: "Bidens alba (L.) DC.", family: "菊科 Asteraceae",
    status: "外來入侵", tags: ["food", "med", "invasive"],
    intro: "白色舌狀花、黃色中心的菊科草本，瘦果末端有倒鉤刺，會黏在衣服上傳播，幾乎全年開花。",
    uses: [
      "嫩莖葉可汆燙食用，也是青草茶的常見原料。",
      "全年開花，是重要的蜜源植物。"
    ],
    caution: "生長、繁殖力極強，會排擠原生植物，是臺灣最常見的外來入侵植物之一，適合列為移除對象。",
    note: "亦常寫作 Bidens pilosa var. radiata。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bidens_alba_%28Spanish_needle%29_%286946051637%29.jpg/960px-Bidens_alba_%28Spanish_needle%29_%286946051637%29.jpg", "page": "https://commons.wikimedia.org/wiki/File:Bidens_alba_(Spanish_needle)_(6946051637).jpg", "author": "Bob Peterson", "license": "CC BY-SA 2.0"}
  },
  {
    id: "alstonia", name: "黑板樹", alias: ["乳木", "燈架樹"],
    sci: "Alstonia scholaris (L.) R.Br.", family: "夾竹桃科 Apocynaceae",
    status: "外來栽培", tags: ["view", "toxic"],
    intro: "生長快速的高大喬木，枝條與葉片輪生、層層像燈架；秋季開花，香味濃烈。",
    uses: ["木材早年用來製作黑板、鉛筆，因此得名；常作行道樹。"],
    caution: "全株有白色乳汁，具毒性，避免接觸眼口；花期氣味濃，部分人會不適。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Alstonia_scholaris_at_Sungai_Berang_valley%2C_Kampung_Gunung_20240225_164615.jpg/960px-Alstonia_scholaris_at_Sungai_Berang_valley%2C_Kampung_Gunung_20240225_164615.jpg", "page": "https://commons.wikimedia.org/wiki/File:Alstonia_scholaris_at_Sungai_Berang_valley,_Kampung_Gunung_20240225_164615.jpg", "author": "Wiki Farazi", "license": "CC0"}
  },
  {
    id: "lygodium", name: "海金沙", alias: [],
    sci: "Lygodium japonicum (Thunb.) Sw.", family: "海金沙科 Lygodiaceae",
    status: "原生", tags: ["med"],
    intro: "看起來像藤蔓的蕨類——會攀爬的其實是一片不斷延長的葉子。",
    uses: ["孢子為中藥材「海金沙」，全草也作民間藥。"],
    caution: "藥用請遵循專業中醫師指示。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Japanese_Climbing_Fern_%28Lygodium_japonicum%29_%2816328738786%29.jpg/960px-Japanese_Climbing_Fern_%28Lygodium_japonicum%29_%2816328738786%29.jpg", "page": "https://commons.wikimedia.org/wiki/File:Japanese_Climbing_Fern_(Lygodium_japonicum)_(16328738786).jpg", "author": "harum.koh", "license": "CC BY-SA 2.0"}
  },
  {
    id: "qingfeng", name: "青楓", alias: ["中原氏掌葉槭"],
    sci: "Acer serrulatum Hayata", family: "無患子科 Sapindaceae",
    status: "台灣特有", tags: ["view"],
    intro: "臺灣特有的落葉喬木，葉片掌狀五裂，秋冬轉紅黃，果實是成對的「翅果」，會像竹蜻蜓般旋轉落下。",
    uses: ["著名的賞楓樹種，也常作行道樹。"],
    note: "舊分類屬槭樹科。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/1/14/Acer_Serrulatum_%28Taiwan%29.JPG", "page": "https://commons.wikimedia.org/wiki/File:Acer_Serrulatum_(Taiwan).JPG", "author": "Philippe Giabbanelli", "license": "CC BY 3.0"}
  },
  {
    id: "fengxiang", name: "楓香", alias: ["楓仔"],
    sci: "Liquidambar formosana Hance", family: "蕈樹科 Altingiaceae",
    status: "原生", tags: ["med", "view"],
    intro: "落葉大喬木，葉片掌狀三裂、搓揉有香氣（與五裂、對生的青楓不同），秋冬轉黃轉紅。",
    uses: [
      "刺球狀的果實是中藥材「路路通」，樹脂為「楓香脂」。",
      "秋色美麗，是低海拔重要的景觀與造林樹種。"
    ],
    note: "楓香葉片互生、3 裂；青楓葉片對生、5 裂，可現場比較。舊分類屬金縷梅科。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Liquidambar_formosana_01.jpg", "page": "https://commons.wikimedia.org/wiki/File:Liquidambar_formosana_01.jpg", "author": "Yoiyoi_kancho", "license": "公有領域"}
  },
  {
    id: "parkinsonia", name: "扁軸木", alias: ["巴基斯坦扁軸木"],
    sci: "Parkinsonia aculeata L.", family: "豆科 Fabaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產熱帶美洲的小喬木，枝條綠色、具刺，羽狀複葉的葉軸扁平而細長，開黃色花。",
    uses: ["耐旱、耐鹽，常作庭園樹與綠籬。"],
    caution: "枝條有刺；在澳洲等地已成為嚴重的入侵植物，種植時應避免擴散。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/ParkinsoniaAculeata.jpg/960px-ParkinsoniaAculeata.jpg", "page": "https://commons.wikimedia.org/wiki/File:ParkinsoniaAculeata.jpg", "author": "Neelix", "license": "公有領域"}
  },
  {
    id: "sugarcane", name: "甘蔗", alias: ["秀貴甘蔗"],
    sci: "Saccharum officinarum L.", family: "禾本科 Poaceae",
    status: "外來栽培", tags: ["food", "use"],
    intro: "高大的多年生禾草，莖中儲存大量蔗糖。尖山埤水庫在日治時期興建，就是為了供應新營糖廠製糖用水，甘蔗是園區最有故事的植物。",
    uses: [
      "莖可直接啃食或榨汁飲用。",
      "製糖原料；蔗渣可再利用製成紙漿、燃料。"
    ],
    note: "調查名稱記為「秀貴甘蔗」，品種名稱待確認。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/1/11/Saccharum_officinarum%2C_Mozambique.jpg", "page": "https://commons.wikimedia.org/wiki/File:Saccharum_officinarum,_Mozambique.jpg", "author": "Ton Rulkens", "license": "CC BY-SA 2.0"}
  },
  {
    id: "angelonia", name: "天使花", alias: ["香彩雀"],
    sci: "Angelonia angustifolia Benth.", family: "車前科 Plantaginaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產中南美洲的草花，耐熱、花期長，紫、粉、白色小花排成穗狀。",
    uses: ["夏季花壇常用草花。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Maypurpleflower.jpg/960px-Maypurpleflower.jpg", "page": "https://commons.wikimedia.org/wiki/File:Maypurpleflower.jpg", "author": "Thegreenj", "license": "CC BY-SA 3.0"}
  },
  {
    id: "pandanus", name: "紅刺露兜樹", alias: ["紅刺林投"],
    sci: "Pandanus utilis Bory", family: "露兜樹科 Pandanaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產馬達加斯加，葉片螺旋狀排列在莖頂，葉緣與背脊有紅色銳刺，基部會長出支柱根。",
    uses: ["造型特殊，常作熱帶風情的景觀植物。"],
    caution: "葉緣有刺，請勿觸摸。",
    note: "調查原始紀錄寫作「紅翅露兜樹」，正名為紅刺露兜樹。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandanusutilisfruit.JPG/960px-Pandanusutilisfruit.JPG", "page": "https://commons.wikimedia.org/wiki/File:Pandanusutilisfruit.JPG", "author": "Jayen466", "license": "公有領域"}
  },
  {
    id: "cassia", name: "阿勃勒", alias: ["波斯皂莢", "金急雨"],
    sci: "Cassia fistula L.", family: "豆科 Fabaceae",
    status: "外來栽培", tags: ["med", "view"],
    intro: "原產印度的落葉喬木，約 5–6 月開出成串下垂的金黃色花，有「黃金雨」之稱；長條形莢果可達數十公分。",
    uses: [
      "著名的夏季賞花樹，也是泰國國花。",
      "莢果果肉為傳統藥材，具緩瀉作用。"
    ],
    caution: "果肉有瀉下作用，請勿自行食用。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Cassia_fistula_%281%29.JPG/960px-Cassia_fistula_%281%29.JPG", "page": "https://commons.wikimedia.org/wiki/File:Cassia_fistula_(1).JPG", "author": "Delonix", "license": "CC BY-SA 3.0"}
  },
  {
    id: "lily", name: "百合", alias: ["百合花"],
    sci: "Lilium sp.", family: "百合科 Liliaceae",
    status: "原生", tags: ["view"],
    intro: "具地下鱗莖的草本，開喇叭狀大花。臺灣原生的台灣百合常見於低至中海拔向陽地。",
    uses: ["花大而香，可作觀賞；食用的「百合」是特定品種的鱗莖，可煮湯、做甜點。"],
    caution: "園區植株種類未確認，請勿採挖食用；百合全株對貓有毒。",
    note: "調查未記錄種名，「原生」為暫定，請以現場照片確認種類。"
  },
  {
    id: "zhumuru", name: "水珠母乳（待確認）", alias: [],
    sci: "待確認", family: "待確認",
    status: "原生", tags: ["food"],
    intro: "調查表記為「水珠母乳，可食用野菜」，名稱可能有誤寫，需要現場確認。",
    uses: [
      "若為「豬母乳」（馬齒莧 Portulaca oleracea），嫩莖葉是常見野菜，可炒食。",
      "若為「水豬母乳」（圓葉節節菜 Rotala rotundifolia），則是水生植物，多作水景觀賞。"
    ],
    note: "兩種植物外觀不同：馬齒莧肉質、匍匐於地面；圓葉節節菜生於水邊或淺水。確認後請修改本筆資料。"
  },
  {
    id: "samanea", name: "雨豆樹", alias: ["雨樹"],
    sci: "Samanea saman (Jacq.) Merr.", family: "豆科 Fabaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產熱帶美洲的大喬木，樹冠可展開成巨大的傘形；小葉在夜晚或陰雨前會閉合，因此得名。",
    uses: ["樹冠寬廣，是很好的遮蔭樹。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg/960px-Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg", "page": "https://commons.wikimedia.org/wiki/File:Flooded_Albizia_Saman_(rain_tree)_in_the_Mekong.jpg", "author": "Basile Morin", "license": "CC BY-SA 4.0"}
  },
  {
    id: "lactuca", name: "山萵苣", alias: ["鵝仔草"],
    sci: "Lactuca indica L.", family: "菊科 Asteraceae",
    status: "原生", tags: ["food"],
    intro: "荒地、路旁常見的一至二年生草本，葉片折斷會流出白色乳汁，秋季開淡黃色小花。",
    uses: ["嫩葉可炒食或汆燙涼拌，略帶苦味；早期也是養鵝的飼料，因此俗稱鵝仔草。"],
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Akinonogeshi.JPG/960px-Akinonogeshi.JPG", "page": "https://commons.wikimedia.org/wiki/File:Akinonogeshi.JPG", "author": "Σ64", "license": "CC BY-SA 3.0"}
  },

  /* ---------- 以下為調查有記錄、但未標註點位的植物 ---------- */
  {
    id: "coffee", name: "咖啡樹", alias: ["阿拉比卡咖啡"],
    sci: "Coffea arabica L.", family: "茜草科 Rubiaceae",
    status: "外來栽培", tags: ["food"],
    intro: "原產衣索比亞的常綠灌木，開白色香花，果實成熟轉紅，俗稱「咖啡櫻桃」。",
    uses: ["種子（咖啡豆）經發酵、乾燥、烘焙後可沖煮咖啡。"],
    note: "調查有記錄，地圖點位尚未標註。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coffee_Flowers.JPG/960px-Coffee_Flowers.JPG", "page": "https://commons.wikimedia.org/wiki/File:Coffee_Flowers.JPG", "author": "Marcelo Corrêa", "license": "CC BY-SA 3.0"}
  },
  {
    id: "reed", name: "蘆葦", alias: [],
    sci: "Phragmites australis (Cav.) Trin. ex Steud.", family: "禾本科 Poaceae",
    status: "原生", tags: ["food", "med", "use"],
    intro: "水邊常見的高大禾草，秋季抽出蓬鬆的花穗，是濕地的重要植物，可提供鳥類棲息。",
    uses: [
      "嫩芽可食；地下莖為中藥材「蘆根」，民間也煮成飲料。",
      "莖稈可編織草蓆、簾子。"
    ],
    note: "調查有記錄，地圖點位尚未標註。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Phragmites_australis_Schilfrohr.jpg", "page": "https://commons.wikimedia.org/wiki/File:Phragmites_australis_Schilfrohr.jpg", "author": "Darkone", "license": "CC BY-SA 2.0"}
  },
  {
    id: "bauhinia", name: "洋紫荊", alias: ["宮粉羊蹄甲"],
    sci: "Bauhinia variegata L.", family: "豆科 Fabaceae",
    status: "外來栽培", tags: ["view"],
    intro: "葉片前端二裂像羊蹄印，春季盛開粉紫色大花。常與羊蹄甲、艷紫荊混淆。",
    uses: ["常見的春季賞花行道樹。"],
    note: "調查有記錄，地圖點位尚未標註。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bauhinia_variegata_flower.jpg/960px-Bauhinia_variegata_flower.jpg", "page": "https://commons.wikimedia.org/wiki/File:Bauhinia_variegata_flower.jpg", "author": "Peter1968", "license": "CC BY 2.5"}
  },
  {
    id: "spathodea", name: "火焰木", alias: ["火焰樹", "火燄木"],
    sci: "Spathodea campanulata P.Beauv.", family: "紫葳科 Bignoniaceae",
    status: "外來栽培", tags: ["view"],
    intro: "原產熱帶非洲的常綠喬木，冬春季在樹冠頂端開出橘紅色大花，遠看像火焰。",
    uses: ["花色鮮豔的景觀樹；花苞內含水，吸引鳥類取食花蜜。"],
    note: "調查有記錄，地圖點位尚未標註。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Spathodea_campanulata_3.jpg/960px-Spathodea_campanulata_3.jpg", "page": "https://commons.wikimedia.org/wiki/File:Spathodea_campanulata_3.jpg", "author": "Steven Haw", "license": "CC BY 2.0"}
  },
  {
    id: "osmanthus", name: "桂花", alias: ["木樨"],
    sci: "Osmanthus fragrans Lour.", family: "木樨科 Oleaceae",
    status: "外來栽培", tags: ["food", "view"],
    intro: "常綠灌木或小喬木，葉腋開出細小的白色或淡黃色花，香氣甜而濃。",
    uses: ["花可製成桂花釀、桂花茶與糕點。", "花香宜人，常作庭園植物。"],
    note: "調查有記錄，地圖點位尚未標註。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Osmanthus_fragrans_%28orange_flowers%29.jpg/960px-Osmanthus_fragrans_%28orange_flowers%29.jpg", "page": "https://commons.wikimedia.org/wiki/File:Osmanthus_fragrans_(orange_flowers).jpg", "author": "Laitr Keiows", "license": "CC BY-SA 3.0"}
  },
  {
    id: "mikania", name: "小花蔓澤蘭", alias: ["綠色癌症"],
    sci: "Mikania micrantha Kunth", family: "菊科 Asteraceae",
    status: "外來入侵", tags: ["invasive"],
    intro: "原產中南美洲的多年生蔓性藤本，生長極快，會爬滿樹冠、遮住陽光，讓被覆蓋的植物衰弱死亡。",
    uses: ["移除後的藤莖可作為編織、手作的材料（本課程「再利用創作」單元）。"],
    caution: "秋冬開花，大量結出可隨風飄散的種子，應在開花結籽前移除；莖節碰到土壤會再生根，移除的藤蔓請裝袋或曬乾處理，不要留在地面。",
    note: "調查有記錄，地圖點位尚未標註。",
    photo: {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mikania_micrantha_129.jpg/960px-Mikania_micrantha_129.jpg", "page": "https://commons.wikimedia.org/wiki/File:Mikania_micrantha_129.jpg", "author": "Vengolis", "license": "CC BY 4.0"}
  }
];
