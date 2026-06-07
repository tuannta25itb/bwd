const products = [
  // NIKE TF
  {
    id: 1,
    name: "NIKE ZOOM MERCURIAL VAPOR 16 PRO TF - VÀNG CHANH/ ĐEN",
    type: "TF",
    brand: "NIKE",
    price: 2100000,
    oldPrice: 2500000,

    thumbnail: "images/nikevapor16protf.png",

    stock: 12,

    images: [
      "images/nikevapor16protf.png",
      "images/nikevapor16protf2.png",
      "images/nikevapor16protf3.png",
      "images/nikevapor16protf4.png",
    ],

    desc: "Dòng giày nổi tiếng dành cho tốc độ với thiết kế siêu nhẹ và form gọn chân. Mercurial hỗ trợ bứt tốc, di chuyển linh hoạt và xử lý bóng ở tốc độ cao, rất phù hợp cho tiền đạo và cầu thủ chạy cánh. Theo nhiều bài đánh giá bóng đá hiện nay, Mercurial vẫn là một trong những dòng giày tốc độ nổi bật nhất của Nike.",
  },

  {
    id: 2,

    name: "NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY KM TF - CAM ĐÀO/XANH NGỌC",
    type: "TF",
    brand: "NIKE",
    price: 2790000,
    oldPrice: 3200000,

    thumbnail: "images/nikevp16aca1.png",
    stock: 11,

    images: [
      "images/nikevp16aca1.png",
      "images/nikevp16aca2.png",
      "images/nikevp16aca3.png",
      "images/nikevp16aca4.png",
    ],

    desc: "Dòng giày nổi tiếng dành cho tốc độ với thiết kế siêu nhẹ và form gọn chân. Mercurial hỗ trợ bứt tốc, di chuyển linh hoạt và xử lý bóng ở tốc độ cao, rất phù hợp cho tiền đạo và cầu thủ chạy cánh. Theo nhiều bài đánh giá bóng đá hiện nay, Mercurial vẫn là một trong những dòng giày tốc độ nổi bật nhất của Nike.",
  },

  {
    id: 3,
    name: "Nike ZOOM VAPOR 15 PRO TF - XANH",
    type: "TF",
    brand: "NIKE",
    price: 2850000,
    oldPrice: 3400000,

    thumbnail: "images/nikevp15protf5.png",
    stock: 24,

    images: [
      "images/nikevp15protf5.png",
      "images/nikevp15protf2.png",
      "images/nikevp15protf3.png",
      "images/nikevp15protf4.png",
    ],

    desc: "Nike Vapor là dòng giày đá bóng nổi tiếng thiên về tốc độ, được thiết kế dành cho người chơi thích bứt tốc, rê bóng và xử lý nhanh trong không gian hẹp. Form giày gọn chân cùng trọng lượng nhẹ giúp tạo cảm giác linh hoạt khi di chuyển trên sân. Nike cho biết Mercurial Vapor sử dụng upper Flyknit kết hợp Gripknit nhằm tăng cảm giác bóng và giữ độ ổn định ở tốc độ cao.",
  },

  {
    id: 4,
    name: "Nike Mercurial Vapor 16 Pro TF - TÍM",
    type: "TF",
    brand: "NIKE",
    price: 2150000,
    oldPrice: 3450000,

    thumbnail: "images/n1.png",
    stock: 42,

    images: [
      "images/n1.png",
      "images/n2.png",
      "images/n3.png",
      "images/n4.png",
    ],

    desc: "Nike Vapor là dòng giày đá bóng nổi tiếng thiên về tốc độ, được thiết kế dành cho người chơi thích bứt tốc, rê bóng và xử lý nhanh trong không gian hẹp. Form giày gọn chân cùng trọng lượng nhẹ giúp tạo cảm giác linh hoạt khi di chuyển trên sân. Nike cho biết Mercurial Vapor sử dụng upper Flyknit kết hợp Gripknit nhằm tăng cảm giác bóng và giữ độ ổn định ở tốc độ cao.",
  },

  {
    id: 5,
    name: "Nike Tiempo Ligeria Pro TF IB4477-106 - Trắng/Đen",
    type: "TF",
    brand: "NIKE",
    price: 1850000,
    oldPrice: 2800000,

    thumbnail: "images/n5.png",
    stock: 53,

    images: [
      "images/n5.png",
      "images/n6.png",
      "images/n7.png",
      "images/n8.png",
    ],

    desc: "Tiempo là dòng giày thiên về cảm giác bóng và sự thoải mái với upper mềm, form dễ mang và độ ổn định cao. Đây là dòng giày phù hợp cho người thích chuyền bóng, kiểm soát và thi đấu lâu mà vẫn êm chân.",
  },

  {
    id: 6,
    name: "Nike Tiempo Legend 10 Academy Max Volyage Xanh Chuối DV4342-701",
    type: "TF",
    brand: "NIKE",
    price: 2690000,
    oldPrice: 4109000,

    thumbnail: "images/n9.png",
    stock: 12,

    images: [
      "images/n9.png",
      "images/n10.png",
      "images/n11.png",
      "images/n12.png",
    ],

    desc: "Tiempo là dòng giày thiên về cảm giác bóng và sự thoải mái với upper mềm, form dễ mang và độ ổn định cao. Đây là dòng giày phù hợp cho người thích chuyền bóng, kiểm soát và thi đấu lâu mà vẫn êm chân.",
  },

  {
    id: 7,
    name: "Nike Phantom 6 Low Pro TF Max Voltage HJ4123-800 Xanh Chuối",
    type: "TF",
    brand: "NIKE",
    price: 2650000,
    oldPrice: 3300000,

    thumbnail: "images/n13.png",
    stock: 15,

    images: [
      "images/n13.png",
      "images/n14.png",
      "images/n15.png",
      "images/n16.png",
    ],

    desc: "Nike Phantom tập trung vào khả năng kiểm soát bóng và xử lý kỹ thuật. Upper có độ bám bóng tốt giúp chuyền, rê và dứt điểm chính xác hơn. Dòng Phantom được nhiều tiền vệ và cầu thủ thiên kỹ thuật lựa chọn.",
  },

  {
    id: 8,
    name: "Nike Phantom 6 High Academy TF Attack HQ2277-446",
    type: "TF",
    brand: "NIKE",
    price: 1850000,
    oldPrice: 2629000,

    thumbnail: "images/n17.png",
    stock: 1,

    images: [
      "images/n17.png",
      "images/n18.png",
      "images/n19.png",
      "images/n20.png",
    ],

    desc: "Nike Phantom tập trung vào khả năng kiểm soát bóng và xử lý kỹ thuật. Upper có độ bám bóng tốt giúp chuyền, rê và dứt điểm chính xác hơn. Dòng Phantom được nhiều tiền vệ và cầu thủ thiên kỹ thuật lựa chọn.",
  },

  {
    id: 9,
    name: "Nike Mercurial Vapor 16 Academy TF United Pack HF1606-500",
    type: "TF",
    brand: "NIKE",
    price: 1850000,
    oldPrice: 2629000,

    thumbnail: "images/n21.png",
    stock: 33,

    images: [
      "images/n21.png",
      "images/n22.png",
      "images/n23.png",
      "images/n24.png",
    ],

    desc: "Nike Vapor là dòng giày đá bóng nổi tiếng thiên về tốc độ, được thiết kế dành cho người chơi thích bứt tốc, rê bóng và xử lý nhanh trong không gian hẹp. Form giày gọn chân cùng trọng lượng nhẹ giúp tạo cảm giác linh hoạt khi di chuyển trên sân. Nike cho biết Mercurial Vapor sử dụng upper Flyknit kết hợp Gripknit nhằm tăng cảm giác bóng và giữ độ ổn định ở tốc độ cao.",
  },

  {
    id: 10,
    name: "Nike Air Zoom Mercurial Vapor 16 Pro TF Mad Ambition Pack FQ8687-400",
    type: "TF",
    brand: "NIKE",
    price: 2450000,
    oldPrice: 3719000,

    thumbnail: "images/n25.png",
    stock: 4,

    images: [
      "images/n25.png",
      "images/n26.png",
      "images/n27.png",
      "images/n28.png",
    ],

    desc: "Nike Vapor là dòng giày đá bóng nổi tiếng thiên về tốc độ, được thiết kế dành cho người chơi thích bứt tốc, rê bóng và xử lý nhanh trong không gian hẹp. Form giày gọn chân cùng trọng lượng nhẹ giúp tạo cảm giác linh hoạt khi di chuyển trên sân. Nike cho biết Mercurial Vapor sử dụng upper Flyknit kết hợp Gripknit nhằm tăng cảm giác bóng và giữ độ ổn định ở tốc độ cao.",
  },

  {
    id: 11,
    name: "Nike Vapor 16 Academy Mercurial Dream Speed FZ1386-300",
    type: "TF",
    brand: "NIKE",
    price: 1850000,
    oldPrice: 3060000,

    thumbnail: "images/n29.png",
    stock: 5,

    images: [
      "images/n29.png",
      "images/n30.png",
      "images/n31.png",
      "images/n32.png",
    ],

    desc: "Nike Vapor là dòng giày đá bóng nổi tiếng thiên về tốc độ, được thiết kế dành cho người chơi thích bứt tốc, rê bóng và xử lý nhanh trong không gian hẹp. Form giày gọn chân cùng trọng lượng nhẹ giúp tạo cảm giác linh hoạt khi di chuyển trên sân. Nike cho biết Mercurial Vapor sử dụng upper Flyknit kết hợp Gripknit nhằm tăng cảm giác bóng và giữ độ ổn định ở tốc độ cao.",
  },

  {
    id: 12,
    name: "Nike Tiempo Legend 10 Academy Prism/Refresh Pack TF DV4342-401 Xanh Ngọc",
    type: "TF",
    brand: "NIKE",
    price: 1650000,
    oldPrice: 3060000,

    thumbnail: "images/n33.png",
    stock: 21,

    images: [
      "images/n33.png",
      "images/n34.png",
      "images/n35.png",
      "images/n36.png",
    ],

    desc: "Tiempo là dòng giày thiên về cảm giác bóng và sự thoải mái với upper mềm, form dễ mang và độ ổn định cao. Đây là dòng giày phù hợp cho người thích chuyền bóng, kiểm soát và thi đấu lâu mà vẫn êm chân.",
  },

  // NIKE FG

  {
    id: 13,
    name: "Nike Tiempo Legend 10 Pro AG Mad Energy DV4334-800 - Đỏ/Cam",
    type: "AG",
    brand: "NIKE",
    price: 2550000,
    oldPrice: 3719000,

    thumbnail: "images/n37.png",
    stock: 31,

    images: [
      "images/n37.png",
      "images/n38.png",
      "images/n39.png",
      "images/n40.png",
    ],

    desc: "Tiempo là dòng giày thiên về cảm giác bóng và sự thoải mái với upper mềm, form dễ mang và độ ổn định cao. Đây là dòng giày phù hợp cho người thích chuyền bóng, kiểm soát và thi đấu lâu mà vẫn êm chân.",
  },

  {
    id: 14,
    name: "Nike Phantom 6 Low Pro AG Scary Good Đỏ",
    type: "AG",
    brand: "NIKE",
    price: 2650000,
    oldPrice: 3000000,

    thumbnail: "images/n41.png",
    stock: 23,
    type: "AG",

    images: [
      "images/n41.png",
      "images/n42.png",
      "images/n43.png",
      "images/n44.png",
    ],

    desc: "Nike Phantom tập trung vào khả năng kiểm soát bóng và xử lý kỹ thuật. Upper có độ bám bóng tốt giúp chuyền, rê và dứt điểm chính xác hơn. Dòng Phantom được nhiều tiền vệ và cầu thủ thiên kỹ thuật lựa chọn.",
  },

  {
    id: 15,
    name: "Nike Mercurial Vapor 16 Pro AG Max Voltage FQ8684-300 Xanh Cốm",
    type: "AG",
    brand: "NIKE",
    price: 2650000,
    oldPrice: 3719000,

    thumbnail: "images/n45.png",
    stock: 12,

    images: [
      "images/n45.png",
      "images/n46.png",
      "images/n47.png",
      "images/n48.png",
    ],

    desc: "Dòng giày nổi tiếng dành cho tốc độ với thiết kế siêu nhẹ và form gọn chân. Mercurial hỗ trợ bứt tốc, di chuyển linh hoạt và xử lý bóng ở tốc độ cao, rất phù hợp cho tiền đạo và cầu thủ chạy cánh. Theo nhiều bài đánh giá bóng đá hiện nay, Mercurial vẫn là một trong những dòng giày tốc độ nổi bật nhất của Nike.",
  },

  {
    id: 16,
    name: "Nike Mercurial Vapor 16 Pro AG Scary Good FQ8684-600",
    type: "AG",
    brand: "NIKE",
    price: 2650000,
    oldPrice: 3719000,

    thumbnail: "images/n49.png",
    stock: 14,

    images: [
      "images/n49.png",
      "images/n50.png",
      "images/n51.png",
      "images/n52.png",
    ],

    desc: "Dòng giày nổi tiếng dành cho tốc độ với thiết kế siêu nhẹ và form gọn chân. Mercurial hỗ trợ bứt tốc, di chuyển linh hoạt và xử lý bóng ở tốc độ cao, rất phù hợp cho tiền đạo và cầu thủ chạy cánh. Theo nhiều bài đánh giá bóng đá hiện nay, Mercurial vẫn là một trong những dòng giày tốc độ nổi bật nhất của Nike.",
  },

  //ADIDAS TF
  {
    id: 17,
    name: "Adidas F50 Pro TF Born for Goals JR8943",
    type: "TF",
    brand: "ADIDAS",
    price: 2750000,
    oldPrice: 3719000,

    thumbnail: "images/ad1.png",
    stock: 14,

    images: [
      "images/ad1.png",
      "images/ad2.png",
      "images/ad3.png",
      "images/ad4.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 18,
    name: "Adidas F50 Pro TF Ice Cold Precesion JR8942",
    type: "TF",
    brand: "ADIDAS",
    price: 2750000,
    oldPrice: 3500000,

    thumbnail: "images/ad5.png",
    stock: 22,

    images: [
      "images/ad5.png",
      "images/ad6.png",
      "images/ad7.png",
      "images/ad8.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 19,
    name: "Adidas F50 League TF IF1336 - Xanh/Hồng",
    type: "TF",
    brand: "ADIDAS",
    price: 1490000,
    oldPrice: 2400000,

    thumbnail: "images/ad9.png",
    stock: 22,

    images: [
      "images/ad9.png",
      "images/ad10.png",
      "images/ad11.png",
      "images/ad12.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 20,
    name: "Adidas F50 Messi League TF JQ0937 - Trắng/Xanh Ngọc",
    type: "TF",
    brand: "ADIDAS",
    price: 1400000,
    oldPrice: 2400000,

    thumbnail: "images/ad13.png",
    stock: 13,

    images: [
      "images/ad13.png",
      "images/ad14.png",
      "images/ad15.png",
      "images/ad16.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 21,
    name: "Adidas F50 League TF Black Pack JR8977 - Đen",
    type: "TF",
    brand: "ADIDAS",
    price: 1850000,
    oldPrice: 2400000,

    thumbnail: "images/ad17.png",
    stock: 13,

    images: [
      "images/ad17.png",
      "images/ad18.png",
      "images/ad19.png",
      "images/ad20.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 22,
    name: "Adidas F50 Pro TF Radiant Blaze JH7665 Tím",
    type: "TF",
    brand: "ADIDAS",
    price: 2750000,
    oldPrice: 3500000,

    thumbnail: "images/ad21.png",
    stock: 33,

    images: [
      "images/ad21.png",
      "images/ad22.png",
      "images/ad23.png",
      "images/ad24.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 23,
    name: "Adidas F50 Pro TF Coral Blaze JH7664 Cam",
    type: "TF",
    brand: "ADIDAS",
    price: 2750000,
    oldPrice: 3500000,

    thumbnail: "images/ad25.png",
    stock: 23,

    images: [
      "images/ad25.png",
      "images/ad26.png",
      "images/ad27.png",
      "images/ad28.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 24,
    name: "Adidas F50 League TF Advancement IF1343",
    type: "TF",
    brand: "ADIDAS",
    price: 1650000,
    oldPrice: 2400000,

    thumbnail: "images/ad29.png",
    stock: 28,

    images: [
      "images/ad29.png",
      "images/ad30.png",
      "images/ad31.png",
      "images/ad32.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 25,
    name: "Adidas Predator 26 Pro TF JR7866 2026- Born For Goals",
    type: "TF",
    brand: "ADIDAS",
    price: 2650000,
    oldPrice: 3400000,

    thumbnail: "images/ad33.png",
    stock: 28,

    images: [
      "images/ad33.png",
      "images/ad34.png",
      "images/ad35.png",
      "images/ad36.png",
    ],

    desc: "Dòng giày nổi tiếng với khả năng kiểm soát bóng và hỗ trợ sút tốt. Thiết kế upper có vân nổi giúp tăng cảm giác bóng khi chuyền, rê và dứt điểm. Form ôm chân cùng đế bám sân ổn định giúp người chơi tự tin hơn trong các pha xử lý kỹ thuật.",
  },

  {
    id: 26,
    name: "Adidas Predator 26 League TF - Xám",
    type: "TF",
    brand: "ADIDAS",
    price: 1990000,
    oldPrice: 2500000,

    thumbnail: "images/ad37.png",
    stock: 28,

    images: [
      "images/ad37.png",
      "images/ad38.png",
      "images/ad39.png",
      "images/ad40.png",
    ],

    desc: "Dòng giày nổi tiếng với khả năng kiểm soát bóng và hỗ trợ sút tốt. Thiết kế upper có vân nổi giúp tăng cảm giác bóng khi chuyền, rê và dứt điểm. Form ôm chân cùng đế bám sân ổn định giúp người chơi tự tin hơn trong các pha xử lý kỹ thuật.",
  },

  {
    id: 27,
    name: "Adidas Predator 26 League TF - Xám",
    type: "TF",
    brand: "ADIDAS",
    price: 1990000,
    oldPrice: 2500000,

    thumbnail: "images/ad41.png",
    stock: 21,

    images: [
      "images/ad41.png",
      "images/ad42.png",
      "images/ad43.png",
      "images/ad44.png",
    ],

    desc: "Dòng giày nổi tiếng với khả năng kiểm soát bóng và hỗ trợ sút tốt. Thiết kế upper có vân nổi giúp tăng cảm giác bóng khi chuyền, rê và dứt điểm. Form ôm chân cùng đế bám sân ổn định giúp người chơi tự tin hơn trong các pha xử lý kỹ thuật.",
  },

  {
    id: 28,
    name: "ADIDAS COPA PURE 3 LEAGUE TF - ID9044 - TRẮNG/ĐỎ",
    type: "TF",
    brand: "ADIDAS",
    price: 1850000,
    oldPrice: 2500000,

    thumbnail: "images/ad45.png",
    stock: 21,

    images: [
      "images/ad45.png",
      "images/ad46.png",
      "images/ad47.png",
      "images/ad48.png",
    ],

    desc: "Dòng giày thiên về cảm giác bóng và sự thoải mái với upper da mềm đặc trưng. Copa mang phong cách cổ điển nhưng vẫn được nâng cấp hiện đại để phù hợp với sân cỏ nhân tạo và thi đấu tốc độ cao.",
  },

  // ADIDAS FG
  {
    id: 29,
    name: "Adidas F50 league FG/MG Coral Blaze Cam",
    type: "AG",
    brand: "ADIDAS",
    price: 1950000,
    oldPrice: 2500000,

    thumbnail: "images/ad49.png",
    stock: 11,

    images: [
      "images/ad49.png",
      "images/ad50.png",
      "images/ad51.png",
      "images/ad52.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 30,
    name: "Adidas F50 league FG/MG Radiant Balze Tím",
    type: "AG",
    brand: "ADIDAS",
    price: 1950000,
    oldPrice: 2500000,

    thumbnail: "images/ad53.png",
    stock: 11,

    images: [
      "images/ad53.png",
      "images/ad54.png",
      "images/ad55.png",
      "images/ad56.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  {
    id: 31,
    name: "Adidas Predator 25 FG/MG Radiant Blaze JI1111",
    type: "AG",
    brand: "ADIDAS",
    price: 1950000,
    oldPrice: 2500000,

    thumbnail: "images/ad57.png",
    stock: 15,

    images: [
      "images/ad57.png",
      "images/ad58.png",
      "images/ad59.png",
      "images/ad60.png",
    ],

    desc: "Dòng giày nổi tiếng với khả năng kiểm soát bóng và hỗ trợ sút tốt. Thiết kế upper có vân nổi giúp tăng cảm giác bóng khi chuyền, rê và dứt điểm. Form ôm chân cùng đế bám sân ổn định giúp người chơi tự tin hơn trong các pha xử lý kỹ thuật.",
  },

  {
    id: 32,
    name: "Adidas F50 League FG Pure Victory IE1290 -Trắng/Đỏ",
    type: "AG",
    brand: "ADIDAS",
    price: 1850000,
    oldPrice: 2500000,

    thumbnail: "images/ad61.png",
    stock: 15,

    images: [
      "images/ad61.png",
      "images/ad62.png",
      "images/ad63.png",
      "images/ad64.png",
    ],

    desc: "Dòng giày thiên về tốc độ với trọng lượng nhẹ và thiết kế tối ưu cho các pha bứt tốc. Form gọn chân cùng upper mỏng giúp tăng cảm giác bóng ở tốc độ cao, phù hợp cho cầu thủ chạy cánh hoặc tiền đạo thích di chuyển nhanh.",
  },

  // PUMA TF

  {
    id: 33,
    name: "Puma Unisex FUTURE 8 PRO Cage",
    type: "TF",
    brand: "PUMA",
    price: 1950000,
    oldPrice: 3000000,

    thumbnail: "images/p1.png",
    stock: 34,

    images: [
      "images/p1.png",
      "images/p2.png",
      "images/p3.png",
      "images/p4.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 34,
    name: "Puma ULTRA 6 MATCH TT Unisex",
    type: "TF",
    brand: "PUMA",
    price: 2100000,
    oldPrice: 3000000,

    thumbnail: "images/p5.png",
    stock: 23,

    images: [
      "images/p5.png",
      "images/p6.png",
      "images/p7.png",
      "images/p8.png",
    ],

    desc: "Mẫu giày dành cho tốc độ với trọng lượng nhẹ và form gọn chân. Phù hợp cho người chơi thích bứt tốc, di chuyển nhanh và xử lý bóng ở tốc độ cao.",
  },

  {
    id: 35,
    name: "Puma Unisex ULTRA 6 PRO CAGE TT",
    type: "TF",
    brand: "PUMA",
    price: 2100000,
    oldPrice: 3000000,

    thumbnail: "images/p9.png",
    stock: 23,

    images: [
      "images/p9.png",
      "images/p10.png",
      "images/p11.png",
      "images/p12.png",
    ],

    desc: "Mẫu giày dành cho tốc độ với trọng lượng nhẹ và form gọn chân. Phù hợp cho người chơi thích bứt tốc, di chuyển nhanh và xử lý bóng ở tốc độ cao.",
  },

  {
    id: 36,
    name: "Puma Unisex FUTURE 8 PRO Cage",
    type: "TF",
    brand: "PUMA",
    price: 3100000,
    oldPrice: 4000000,

    thumbnail: "images/p13.png",
    stock: 22,

    images: [
      "images/p13.png",
      "images/p14.png",
      "images/p15.png",
      "images/p16.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 41,
    name: "Puma Unisex ULTRA 6 MATCH RE-CHARGE TT",
    type: "TF",
    brand: "PUMA",
    price: 2100000,
    oldPrice: 3100000,

    thumbnail: "images/p33.png",
    stock: 33,

    images: [
      "images/p33.png",
      "images/p34.png",
      "images/p35.png",
      "images/p36.png",
    ],

    desc: "Mẫu giày dành cho tốc độ với trọng lượng nhẹ và form gọn chân. Phù hợp cho người chơi thích bứt tốc, di chuyển nhanh và xử lý bóng ở tốc độ cao.",
  },

  {
    id: 42,
    name: "Puma Unisex FUTURE 8 MATCH RE-CHARGE TT",
    type: "TF",
    brand: "PUMA",
    price: 2100000,
    oldPrice: 3100000,

    thumbnail: "images/p37.png",
    stock: 33,

    images: [
      "images/p37.png",
      "images/p38.png",
      "images/p39.png",
      "images/p40.png",
    ],

    desc: "Mẫu giày dành cho tốc độ với trọng lượng nhẹ và form gọn chân. Phù hợp cho người chơi thích bứt tốc, di chuyển nhanh và xử lý bóng ở tốc độ cao.",
  },

  {
    id: 43,
    name: "Puma FUTURE 9 MATCH TT Unisex",
    type: "TF",
    brand: "PUMA",
    price: 2100000,
    oldPrice: 3100000,

    thumbnail: "images/p41.png",
    stock: 13,

    images: [
      "images/p41.png",
      "images/p42.png",
      "images/p43.png",
      "images/p44.png",
    ],

    desc: "Mẫu giày dành cho tốc độ với trọng lượng nhẹ và form gọn chân. Phù hợp cho người chơi thích bứt tốc, di chuyển nhanh và xử lý bóng ở tốc độ cao.",
  },

  {
    id: 44,
    name: "Puma ULTRA 6 PLAY TT Unisex",
    type: "TF",
    brand: "PUMA",
    price: 1500000,
    oldPrice: 2100000,

    thumbnail: "images/p45.png",
    stock: 54,

    images: [
      "images/p45.png",
      "images/p46.png",
      "images/p47.png",
      "images/p48.png",
    ],

    desc: "Mẫu giày dành cho tốc độ với trọng lượng nhẹ và form gọn chân. Phù hợp cho người chơi thích bứt tốc, di chuyển nhanh và xử lý bóng ở tốc độ cao.",
  },

  // PUMA FG
  {
    id: 37,
    name: "Puma FUTURE 9 MATCH FG/AG Unisex",
    type: "AG",
    brand: "PUMA",
    price: 2100000,
    oldPrice: 3000000,

    thumbnail: "images/p17.png",
    stock: 22,

    images: [
      "images/p17.png",
      "images/p18.png",
      "images/p19.png",
      "images/p20.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 38,
    name: "Puma FUTURE 9 PLAY FG/AG Unisex",
    type: "AG",
    brand: "PUMA",
    price: 1500000,
    oldPrice: 3000000,

    thumbnail: "images/p21.png",
    stock: 12,

    images: [
      "images/p21.png",
      "images/p22.png",
      "images/p23.png",
      "images/p24.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 39,
    name: "Puma FUTURE 6 ULTIMATE FG Unisex",
    type: "AG",
    brand: "PUMA",
    price: 5300000,
    oldPrice: 6000000,

    thumbnail: "images/p25.png",
    stock: 10,

    images: [
      "images/p25.png",
      "images/p26.png",
      "images/p27.png",
      "images/p28.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 40,
    name: "Puma FUTURE 9 ULTIMATE FG Unisex",
    type: "AG",
    brand: "PUMA",
    price: 5300000,
    oldPrice: 6000000,

    thumbnail: "images/p29.png",
    stock: 10,

    images: [
      "images/p29.png",
      "images/p30.png",
      "images/p31.png",
      "images/p32.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 45,
    name: "Puma ULTRA 6 ULTIMATE AG unisex",
    type: "AG",
    brand: "PUMA",
    price: 5200000,
    oldPrice: 6000000,

    thumbnail: "images/p49.png",
    stock: 19,

    images: [
      "images/p49.png",
      "images/p50.png",
      "images/p51.png",
      "images/p52.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 46,
    name: "Puma FUTURE 8 ULTIMATE FG Unisex",
    type: "AG",
    brand: "PUMA",
    price: 5200000,
    oldPrice: 6000000,

    thumbnail: "images/p53.png",
    stock: 9,

    images: [
      "images/p53.png",
      "images/p54.png",
      "images/p55.png",
      "images/p56.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 47,
    name: "Puma ULTRA 5 ULTIMATE FG",
    type: "AG",
    brand: "PUMA",
    price: 4200000,
    oldPrice: 5500000,

    thumbnail: "images/p57.png",
    stock: 29,

    images: [
      "images/p57.png",
      "images/p58.png",
      "images/p59.png",
      "images/p60.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  {
    id: 48,
    name: "Puma FUTURE 8 MATCH FG/AG",
    type: "AG",
    brand: "PUMA",
    price: 1785000,
    oldPrice: 2100000,

    thumbnail: "images/p61.png",
    stock: 32,

    images: [
      "images/p61.png",
      "images/p62.png",
      "images/p63.png",
      "images/p64.png",
    ],

    desc: "Dòng giày thiên về kiểm soát bóng và rê dắt, thiết kế ôm chân giúp di chuyển linh hoạt hơn trên sân cỏ nhân tạo. Upper mềm kết hợp form hiện đại mang lại cảm giác bóng tốt và thoải mái khi thi đấu.",
  },

  // MIZUNO TF
  {
    id: 49,
    name: "Mizuno Alpha III Elite TF P1GD266201 Đen",
    type: "TF",
    brand: "MIZUNO",
    price: 3200000,
    oldPrice: 3600000,

    thumbnail: "images/m1.png",
    stock: 12,

    images: [
      "images/m1.png",
      "images/m2.png",
      "images/m3.png",
      "images/m4.png",
    ],

    desc: "Mẫu giày thiên về tốc độ với form gọn, trọng lượng nhẹ và khả năng bứt tốc tốt. Phù hợp cho người chơi yêu thích lối đá nhanh và di chuyển liên tục.",
  },

  {
    id: 50,
    name: "Mizuno Alpha III Pro AS P1GD266464 - Hồng/Trắng",
    type: "TF",
    brand: "MIZUNO",
    price: 2550000,
    oldPrice: 3000000,

    thumbnail: "images/m5.png",
    stock: 5,

    images: [
      "images/m5.png",
      "images/m6.png",
      "images/m7.png",
      "images/m8.png",
    ],

    desc: "Mẫu giày thiên về tốc độ với form gọn, trọng lượng nhẹ và khả năng bứt tốc tốt. Phù hợp cho người chơi yêu thích lối đá nhanh và di chuyển liên tục.",
  },

  {
    id: 51,
    name: "Giày bóng đá sân cỏ nhân tạo Mizuno Alpha III Elite TF Unity Sky P1GD266225",
    type: "TF",
    brand: "MIZUNO",
    price: 3200000,
    oldPrice: 4000000,

    thumbnail: "images/m9.png",
    stock: 15,

    images: [
      "images/m9.png",
      "images/m10.png",
      "images/m11.png",
      "images/m12.png",
    ],

    desc: "Mẫu giày thiên về tốc độ với form gọn, trọng lượng nhẹ và khả năng bứt tốc tốt. Phù hợp cho người chơi yêu thích lối đá nhanh và di chuyển liên tục.",
  },

  {
    id: 52,
    name: "Mizuno Alpha III Select AS TF Unity Sky P1GD266525",
    type: "TF",
    brand: "MIZUNO",
    price: 1650000,
    oldPrice: 2000000,

    thumbnail: "images/m13.png",
    stock: 15,

    images: [
      "images/m13.png",
      "images/m14.png",
      "images/m15.png",
      "images/m16.png",
    ],

    desc: "Mẫu giày thiên về tốc độ với form gọn, trọng lượng nhẹ và khả năng bứt tốc tốt. Phù hợp cho người chơi yêu thích lối đá nhanh và di chuyển liên tục.",
  },

  //MIZUNO FG
  {
    id: 53,
    name: "Mizuno Morelia II Pro Ag P1GA231465",
    type: "AG",
    brand: "MIZUNO",
    price: 1290000,
    oldPrice: 2000000,

    thumbnail: "images/m17.png",
    stock: 15,

    images: ["images/m17.png"],

    desc: "Mẫu giày thiên về tốc độ với form gọn, trọng lượng nhẹ và khả năng bứt tốc tốt. Phù hợp cho người chơi yêu thích lối đá nhanh và di chuyển liên tục.",
  },

  {
    id: 54,
    name: "Mizuno Monarcida Neo III Pro Mugen Pack Xanh/Trắng P1GA242227",
    type: "AG",
    brand: "MIZUNO",
    price: 1990000,
    oldPrice: 3000000,

    thumbnail: "images/m18.png",
    stock: 15,

    images: ["images/m18.png", "images/m19.png"],

    desc: "Thiết kế cân bằng giữa độ êm và độ bền, phù hợp cho sân cỏ nhân tạo và đá phủi hằng ngày. Form dễ mang, hỗ trợ cảm giác bóng ổn định và thoải mái khi thi đấu lâu.",
  },

  {
    id: 55,
    name: "Mizuno Morelia Neo IV Pro FG Trắng/Xanh P1GA243425",
    type: "AG",
    brand: "MIZUNO",
    price: 1990000,
    oldPrice: 3000000,

    thumbnail: "images/m20.png",
    stock: 15,

    images: ["images/m20.png", "images/m21.png"],

    desc: "Thiết kế cân bằng giữa độ êm và độ bền, phù hợp cho sân cỏ nhân tạo và đá phủi hằng ngày. Form dễ mang, hỗ trợ cảm giác bóng ổn định và thoải mái khi thi đấu lâu.",
  },

  {
    id: 56,
    name: "Mizuno Morelia Neo IV Pro FG P1GA243445 - Xanh Chuối",
    type: "AG",
    brand: "MIZUNO",
    price: 1990000,
    oldPrice: 3000000,

    thumbnail: "images/m22.png",
    stock: 15,

    images: ["images/m22.png", "images/m23.png"],

    desc: "Thiết kế cân bằng giữa độ êm và độ bền, phù hợp cho sân cỏ nhân tạo và đá phủi hằng ngày. Form dễ mang, hỗ trợ cảm giác bóng ổn định và thoải mái khi thi đấu lâu.",
  },

  {
    id: 57,
    name: "Mizuno Morelia Neo IV Pro FG PGA233464 - Đỏ/Vàng",
    type: "AG",
    brand: "MIZUNO",
    price: 1990000,
    oldPrice: 3000000,

    thumbnail: "images/m24.png",
    stock: 15,

    images: ["images/m24.png", "images/m25.png"],

    desc: "Thiết kế cân bằng giữa độ êm và độ bền, phù hợp cho sân cỏ nhân tạo và đá phủi hằng ngày. Form dễ mang, hỗ trợ cảm giác bóng ổn định và thoải mái khi thi đấu lâu.",
  },

  {
    id: 58,
    name: "Mizuno Monarcida Neo III Select FG P1GA242527 - Xanh/Trắng",
    type: "AG",
    brand: "MIZUNO",
    price: 1390000,
    oldPrice: 2000000,

    thumbnail: "images/m26.png",
    stock: 23,

    images: ["images/m26.png", "images/m27.png"],

    desc: "Thiết kế cân bằng giữa độ êm và độ bền, phù hợp cho sân cỏ nhân tạo và đá phủi hằng ngày. Form dễ mang, hỗ trợ cảm giác bóng ổn định và thoải mái khi thi đấu lâu.",
  },

  {
    id: 59,
    name: "Mizuno Monarcida Neo III Select AS FG P1GA242525 - Trắng/Xanh",
    type: "AG",
    brand: "MIZUNO",
    price: 1390000,
    oldPrice: 2000000,

    thumbnail: "images/m28.png",
    stock: 13,

    images: ["images/m28.png", "images/m29.png"],

    desc: "Thiết kế cân bằng giữa độ êm và độ bền, phù hợp cho sân cỏ nhân tạo và đá phủi hằng ngày. Form dễ mang, hỗ trợ cảm giác bóng ổn định và thoải mái khi thi đấu lâu.",
  },

  {
    id: 60,
    name: "Mizuno Monarcida Neo III Select FG - P1GA252504",
    type: "AG",
    brand: "MIZUNO",
    price: 1650000,
    oldPrice: 2500000,

    thumbnail: "images/m30.png",
    stock: 13,

    images: ["images/m30.png", "images/m31.png"],

    desc: "Thiết kế cân bằng giữa độ êm và độ bền, phù hợp cho sân cỏ nhân tạo và đá phủi hằng ngày. Form dễ mang, hỗ trợ cảm giác bóng ổn định và thoải mái khi thi đấu lâu.",
  },

  // AKKA TF
  {
    id: 61,
    name: "AKKA Touch 1 - Xanh navy",
    type: "TF",
    brand: "AKKA",
    price: 590000,
    oldPrice: 650000,

    thumbnail: "images/ak1.png",
    stock: 13,

    images: ["images/ak1.png", "images/ak2.png"],

    desc: "Dòng giày thiên về kiểm soát bóng với upper mềm và form ôm chân. Hỗ trợ rê bóng, chuyền bóng và xử lý trong không gian hẹp khá ổn định.",
  },

  {
    id: 62,
    name: "AKKA Touch 1 - Bạc",
    type: "TF",
    brand: "AKKA",
    price: 590000,
    oldPrice: 650000,

    thumbnail: "images/ak4.png",
    stock: 13,

    images: ["images/ak4.png"],

    desc: "Dòng giày thiên về kiểm soát bóng với upper mềm và form ôm chân. Hỗ trợ rê bóng, chuyền bóng và xử lý trong không gian hẹp khá ổn định.",
  },

  {
    id: 63,
    name: "AKKA Touch 1 - Cam",
    type: "TF",
    brand: "AKKA",
    price: 590000,
    oldPrice: 650000,

    thumbnail: "images/ak3.png",
    stock: 5,

    images: ["images/ak3.png"],

    desc: "Dòng giày thiên về kiểm soát bóng với upper mềm và form ôm chân. Hỗ trợ rê bóng, chuyền bóng và xử lý trong không gian hẹp khá ổn định.",
  },

  {
    id: 64,
    name: "AKKA Touch 1 - Xanh trời",
    type: "TF",
    brand: "AKKA",
    price: 590000,
    oldPrice: 650000,

    thumbnail: "images/ak5.png",
    stock: 4,

    images: ["images/ak5.png"],

    desc: "Dòng giày thiên về kiểm soát bóng với upper mềm và form ôm chân. Hỗ trợ rê bóng, chuyền bóng và xử lý trong không gian hẹp khá ổn định.",
  },

  {
    id: 65,
    name: "Akka Speed 2 Xanh Ngọc",
    type: "TF",
    brand: "AKKA",
    price: 540000,
    oldPrice: 600000,

    thumbnail: "images/ak6.png",
    stock: 23,

    images: ["images/ak6.png"],

    desc: "Thiết kế hướng đến tốc độ với trọng lượng nhẹ và form gọn. Phù hợp cho người chơi thích bứt tốc và di chuyển linh hoạt trên sân cỏ nhân tạo.",
  },

  {
    id: 66,
    name: "AKKA Speed2 - Trắng/Đồng",
    type: "TF",
    brand: "AKKA",
    price: 540000,
    oldPrice: 600000,

    thumbnail: "images/ak7.png",
    stock: 11,

    images: ["images/ak7.png"],

    desc: "Thiết kế hướng đến tốc độ với trọng lượng nhẹ và form gọn. Phù hợp cho người chơi thích bứt tốc và di chuyển linh hoạt trên sân cỏ nhân tạo.",
  },

  {
    id: 67,
    name: "Akka Speed 2 Màu Cam Bạc",
    type: "TF",
    brand: "AKKA",
    price: 540000,
    oldPrice: 600000,

    thumbnail: "images/ak8.png",
    stock: 1,

    images: ["images/ak8.png"],

    desc: "Thiết kế hướng đến tốc độ với trọng lượng nhẹ và form gọn. Phù hợp cho người chơi thích bứt tốc và di chuyển linh hoạt trên sân cỏ nhân tạo.",
  },

  {
    id: 68,
    name: "Akka Speed 2 Màu Xanh Trắng",
    type: "TF",
    brand: "AKKA",
    price: 540000,
    oldPrice: 600000,

    thumbnail: "images/ak9.png",
    stock: 1,

    images: ["images/ak9.png"],

    desc: "Thiết kế hướng đến tốc độ với trọng lượng nhẹ và form gọn. Phù hợp cho người chơi thích bứt tốc và di chuyển linh hoạt trên sân cỏ nhân tạo.",
  },

  {
    id: 69,
    name: "Akka Speed 2 Màu Xanh Trắng",
    type: "TF",
    brand: "AKKA",
    price: 690000,
    oldPrice: 750000,

    thumbnail: "images/ak10.png",
    stock: 12,

    images: ["images/ak10.png"],

    desc: "Dòng giày tập trung vào cảm giác bóng và sự thoải mái khi thi đấu. Thiết kế upper mềm giúp chạm bóng êm chân, hỗ trợ rê dắt và kiểm soát bóng tốt trên sân cỏ nhân tạo.",
  },

  {
    id: 70,
    name: "AKKA Power 4 - Trắng",
    type: "TF",
    brand: "AKKA",
    price: 690000,
    oldPrice: 750000,

    thumbnail: "images/ak11.png",
    stock: 12,

    images: ["images/ak11.png"],

    desc: "Dòng giày tập trung vào cảm giác bóng và sự thoải mái khi thi đấu. Thiết kế upper mềm giúp chạm bóng êm chân, hỗ trợ rê dắt và kiểm soát bóng tốt trên sân cỏ nhân tạo.",
  },

  {
    id: 71,
    name: "AKKA Power 4 - Đỏ",
    type: "TF",
    brand: "AKKA",
    price: 690000,
    oldPrice: 750000,

    thumbnail: "images/ak12.png",
    stock: 14,

    images: ["images/ak12.png"],

    desc: "Dòng giày tập trung vào cảm giác bóng và sự thoải mái khi thi đấu. Thiết kế upper mềm giúp chạm bóng êm chân, hỗ trợ rê dắt và kiểm soát bóng tốt trên sân cỏ nhân tạo.",
  },

  {
    id: 72,
    name: "AKKA Power 4 - Xanh Ngọc",
    type: "TF",
    brand: "AKKA",
    price: 690000,
    oldPrice: 750000,

    thumbnail: "images/ak13.png",
    stock: 14,

    images: ["images/ak13.png"],

    desc: "Dòng giày tập trung vào cảm giác bóng và sự thoải mái khi thi đấu. Thiết kế upper mềm giúp chạm bóng êm chân, hỗ trợ rê dắt và kiểm soát bóng tốt trên sân cỏ nhân tạo.",
  },

  // WIKA TF
  {
    id: 73,
    name: "Wika TH10 Tuấn Hải trắng premium (da thật)",
    type: "TF",
    brand: "WIKA",
    price: 1200000,
    oldPrice: 1350000,

    thumbnail: "images/w1.png",
    stock: 14,

    images: [
      "images/w1.png",
      "images/w2.png",
      "images/w3.png",
      "images/w4.png",
    ],

    desc: "Mẫu giày đá bóng được thiết kế cho sân cỏ nhân tạo với form ôm chân, cảm giác mang êm và độ bám sân ổn định. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho người chơi thích rê bóng và thi đấu linh hoạt.",
  },

  {
    id: 74,
    name: "Wika TH10 Tuấn Hải xanh ngọc",
    type: "TF",
    brand: "WIKA",
    price: 690000,
    oldPrice: 749000,

    thumbnail: "images/w5.png",
    stock: 5,

    images: [
      "images/w5.png",
      "images/w6.png",
      "images/w7.png",
      "images/w8.png",
    ],

    desc: "Mẫu giày đá bóng được thiết kế cho sân cỏ nhân tạo với form ôm chân, cảm giác mang êm và độ bám sân ổn định. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho người chơi thích rê bóng và thi đấu linh hoạt.",
  },

  {
    id: 75,
    name: "Wika TH10 Tuấn Hải kem",
    type: "TF",
    brand: "WIKA",
    price: 690000,
    oldPrice: 749000,

    thumbnail: "images/w9.png",
    stock: 5,

    images: [
      "images/w9.png",
      "images/w10.png",
      "images/w11.png",
      "images/w12.png",
    ],

    desc: "Mẫu giày đá bóng được thiết kế cho sân cỏ nhân tạo với form ôm chân, cảm giác mang êm và độ bám sân ổn định. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho người chơi thích rê bóng và thi đấu linh hoạt.",
  },

  {
    id: 76,
    name: "Wika QH19 Z-Vol Quang Hải xám hồng",
    type: "TF",
    brand: "WIKA",
    price: 690000,
    oldPrice: 749000,

    thumbnail: "images/w13.png",
    stock: 11,

    images: [
      "images/w13.png",
      "images/w14.png",
      "images/w15.png",
      "images/w16.png",
    ],

    desc: "Mẫu giày đá bóng dành cho sân cỏ nhân tạo với thiết kế hiện đại, form ôm chân và cảm giác mang khá thoải mái. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho đá phủi và thi đấu phong trào.",
  },

  {
    id: 77,
    name: "Wika QH19 Z-Vol Quang Hải xanh ngọc cam",
    type: "TF",
    brand: "WIKA",
    price: 690000,
    oldPrice: 749000,

    thumbnail: "images/w17.png",
    stock: 11,

    images: [
      "images/w17.png",
      "images/w18.png",
      "images/w19.png",
      "images/w20.png",
    ],

    desc: "Mẫu giày đá bóng dành cho sân cỏ nhân tạo với thiết kế hiện đại, form ôm chân và cảm giác mang khá thoải mái. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho đá phủi và thi đấu phong trào.",
  },

  {
    id: 78,
    name: "Wika VH5 Đoàn Văn Hậu cam",
    type: "TF",
    brand: "WIKA",
    price: 599000,
    oldPrice: 610000,

    thumbnail: "images/w21.png",
    stock: 21,

    images: [
      "images/w21.png",
      "images/w22.png",
      "images/w23.png",
      "images/w24.png",
    ],

    desc: "Mẫu giày đá bóng dành cho sân cỏ nhân tạo với thiết kế hiện đại, form ôm chân và cảm giác mang khá thoải mái. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho đá phủi và thi đấu phong trào.",
  },

  {
    id: 79,
    name: "Wika VH5 Đoàn Văn Hậu navy",
    type: "TF",
    brand: "WIKA",
    price: 599000,
    oldPrice: 610000,

    thumbnail: "images/w25.png",
    stock: 21,

    images: [
      "images/w25.png",
      "images/w26.png",
      "images/w27.png",
      "images/w28.png",
    ],

    desc: "Mẫu giày đá bóng dành cho sân cỏ nhân tạo với thiết kế hiện đại, form ôm chân và cảm giác mang khá thoải mái. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho đá phủi và thi đấu phong trào.",
  },

  {
    id: 80,
    name: "Wika HD14 Elite màu chuối",
    type: "TF",
    brand: "WIKA",
    price: 569000,
    oldPrice: 610000,

    thumbnail: "images/w29.png",
    stock: 31,

    images: [
      "images/w29.png",
      "images/w30.png",
      "images/w31.png",
      "images/w32.png",
    ],

    desc: "Mẫu giày đá bóng sân cỏ nhân tạo với thiết kế thể thao hiện đại, form ôm chân và cảm giác mang khá êm. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho người chơi đá phủi và thi đấu phong trào.",
  },

  {
    id: 81,
    name: "Wika HD14 Elite màu kem",
    type: "TF",
    brand: "WIKA",
    price: 569000,
    oldPrice: 610000,

    thumbnail: "images/w33.png",
    stock: 31,

    images: [
      "images/w33.png",
      "images/w34.png",
      "images/w35.png",
      "images/w36.png",
    ],

    desc: "Mẫu giày đá bóng sân cỏ nhân tạo với thiết kế thể thao hiện đại, form ôm chân và cảm giác mang khá êm. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho người chơi đá phủi và thi đấu phong trào.",
  },

  {
    id: 82,
    name: "Wika Thunder màu xanh cam",
    type: "TF",
    brand: "WIKA",
    price: 529000,
    oldPrice: 599000,

    thumbnail: "images/w37.png",
    stock: 23,

    images: [
      "images/w37.png",
      "images/w38.png",
      "images/w39.png",
      "images/w40.png",
    ],

    desc: "Mẫu giày đá bóng sân cỏ nhân tạo với thiết kế thể thao hiện đại, form ôm chân và cảm giác mang khá êm. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho người chơi đá phủi và thi đấu phong trào.",
  },

  {
    id: 83,
    name: "Wika Fancy màu xanh ya",
    type: "TF",
    brand: "WIKA",
    price: 529000,
    oldPrice: 599000,

    thumbnail: "images/w41.png",
    stock: 24,

    images: [
      "images/w41.png",
      "images/w42.png",
      "images/w43.png",
      "images/w44.png",
    ],

    desc: "Mẫu giày đá bóng sân cỏ nhân tạo với thiết kế thể thao hiện đại, form ôm chân và cảm giác mang khá êm. Upper mềm hỗ trợ chạm bóng tốt, phù hợp cho người chơi đá phủi và thi đấu phong trào.",
  },

  {
    id: 84,
    name: "Wika HĐ14 Hoàng Đức hồng",
    type: "TF",
    brand: "WIKA",
    price: 499000,
    oldPrice: 510000,

    thumbnail: "images/w45.png",
    stock: 8,

    images: [
      "images/w45.png",
      "images/w46.png",
      "images/w47.png",
      "images/w48.png",
    ],

    desc: "Wika HD14 được thiết kế hướng đến sự ổn định và thoải mái khi thi đấu. Phần upper mềm giúp giảm cảm giác cấn chân, trong khi đế TF hỗ trợ độ bám sân tốt trên mặt sân cỏ nhân tạo. Mẫu giày phù hợp cho đá phủi, luyện tập hằng ngày và các trận đấu phong trào cường độ cao.",
  },

  {
    id: 85,
    name: "Wika Galaxy Light xanh ngọc",
    type: "TF",
    brand: "WIKA",
    price: 499000,
    oldPrice: 510000,

    thumbnail: "images/w49.png",
    stock: 18,

    images: [
      "images/w49.png",
      "images/w50.png",
      "images/w51.png",
      "images/w52.png",
    ],

    desc: "Wika Galaxy là mẫu giày đá bóng sân cỏ nhân tạo nổi bật với thiết kế hiện đại, form ôm chân và cảm giác mang khá thoải mái. Upper mềm hỗ trợ chạm bóng tốt, giúp người chơi dễ kiểm soát bóng hơn trong các tình huống rê dắt và xử lý kỹ thuật. Phần đế TF được thiết kế bám sân ổn định, hỗ trợ di chuyển linh hoạt và đổi hướng nhanh trên sân phủi.",
  },

  {
    id: 86,
    name: "Wika Blade đỏ vàng",
    type: "TF",
    brand: "WIKA",
    price: 469000,
    oldPrice: 510000,

    thumbnail: "images/w53.png",
    stock: 18,

    images: [
      "images/w53.png",
      "images/w54.png",
      "images/w55.png",
      "images/w56.png",
    ],

    desc: "Hoạ tiết lấy cảm hứng từ những vết gươm sắc gọn – tạo nên diện mạo mạnh mẽ, tốc độ và những pha bóng bùng nổ sân đấu.",
  },

  {
    id: 87,
    name: "Wika DragonX Hoàng Đức navy",
    type: "TF",
    brand: "WIKA",
    price: 459000,
    oldPrice: 510000,

    thumbnail: "images/w57.png",
    stock: 11,

    images: [
      "images/w57.png",
      "images/w58.png",
      "images/w59.png",
      "images/w60.png",
    ],

    desc: "Wika DragonX là mẫu giày đá bóng sân cỏ nhân tạo được thiết kế theo phong cách mạnh mẽ và hiện đại, phù hợp cho người chơi yêu thích tốc độ và sự linh hoạt. Upper mềm kết hợp form ôm chân giúp mang lại cảm giác bóng ổn định, hỗ trợ rê bóng và xử lý kỹ thuật hiệu quả hơn trong thi đấu.",
  },

  {
    id: 88,
    name: "Wika DragonX Hoàng Đức đồng",
    type: "TF",
    brand: "WIKA",
    price: 459000,
    oldPrice: 510000,

    thumbnail: "images/w61.png",
    stock: 11,

    images: [
      "images/w61.png",
      "images/w62.png",
      "images/w63.png",
      "images/w64.png",
    ],

    desc: "Wika DragonX là mẫu giày đá bóng sân cỏ nhân tạo được thiết kế theo phong cách mạnh mẽ và hiện đại, phù hợp cho người chơi yêu thích tốc độ và sự linh hoạt. Upper mềm kết hợp form ôm chân giúp mang lại cảm giác bóng ổn định, hỗ trợ rê bóng và xử lý kỹ thuật hiệu quả hơn trong thi đấu.",
  },

  //kamito TF
  {
    id: 89,
    name: "Kamito Artista KL TF - Dark Red/White/Gold",
    type: "TF",
    brand: "KAMITO",
    price: 1299000,
    oldPrice: 1599000,

    thumbnail: "images/k1.png",
    stock: 11,

    images: [
      "images/k1.png",
      "images/k2.png",
      "images/k3.png",
      "images/k4.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 90,
    name: "Kamito Artista KL TF - Sky Blue/White/Gold",
    type: "TF",
    brand: "KAMITO",
    price: 1299000,
    oldPrice: 1599000,

    thumbnail: "images/k5.png",
    stock: 15,

    images: [
      "images/k5.png",
      "images/k6.png",
      "images/k7.png",
      "images/k8.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 91,
    name: "Kamito Artista Pro TF - White/Green KMTF240356",
    type: "TF",
    brand: "KAMITO",
    price: 639000,
    oldPrice: 799000,

    thumbnail: "images/k9.png",
    stock: 25,

    images: [
      "images/k9.png",
      "images/k10.png",
      "images/k11.png",
      "images/k12.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 92,
    name: "Kamito Artista Pro TF - Red/White/Black KMTF240314",
    type: "TF",
    brand: "KAMITO",
    price: 639000,
    oldPrice: 799000,

    thumbnail: "images/k13.png",
    stock: 25,

    images: [
      "images/k13.png",
      "images/k14.png",
      "images/k15.png",
      "images/k16.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 93,
    name: "Kamito Velocidad Fire Back TF - Teal Blue/White KMTF240129",
    type: "TF",
    brand: "KAMITO",
    price: 499000,
    oldPrice: 599000,

    thumbnail: "images/k17.png",
    stock: 22,

    images: [
      "images/k17.png",
      "images/k18.png",
      "images/k19.png",
      "images/k20.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 94,
    name: "Kamito Velocidad Fire Back TF - Violet/White KMTF240180",
    type: "TF",
    brand: "KAMITO",
    price: 499000,
    oldPrice: 599000,

    thumbnail: "images/k21.png",
    stock: 12,

    images: [
      "images/k21.png",
      "images/k22.png",
      "images/k23.png",
      "images/k24.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 95,
    name: "KAMITO TA11 Woncup - Mint Green/White",
    type: "TF",
    brand: "KAMITO",
    price: 499000,
    oldPrice: 599000,

    thumbnail: "images/k25.png",
    stock: 21,

    images: [
      "images/k25.png",
      "images/k26.png",
      "images/k27.png",
      "images/k28.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 96,
    name: "KAMITO TA11 TF TOUCH OF MAGIC - PINK/GOLD",
    type: "TF",
    brand: "KAMITO",
    price: 499000,
    oldPrice: 599000,

    thumbnail: "images/k29.png",
    stock: 28,

    images: [
      "images/k29.png",
      "images/k30.png",
      "images/k31.png",
      "images/k32.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 97,
    name: "Kamito Velocidad Attack TF - Xanh chanh/Vàng",
    type: "TF",
    brand: "KAMITO",
    price: 499000,
    oldPrice: 599000,

    thumbnail: "images/k33.png",
    stock: 18,

    images: [
      "images/k33.png",
      "images/k34.png",
      "images/k35.png",
      "images/k36.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 98,
    name: "Kamito Velocidad Attack TF - Trắng/Xanh Ngọc",
    type: "TF",
    brand: "KAMITO",
    price: 499000,
    oldPrice: 599000,

    thumbnail: "images/k37.png",
    stock: 18,

    images: [
      "images/k37.png",
      "images/k38.png",
      "images/k39.png",
      "images/k40.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 101,
    name: "Kamito President đỏ (TF – Cỏ nhân tạo)",
    type: "TF",
    brand: "KAMITO",
    price: 1499000,
    oldPrice: 1599000,

    thumbnail: "images/k49.png",
    stock: 18,

    images: [
      "images/k49.png",
      "images/k50.png",
      "images/k51.png",
      "images/k52.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 102,
    name: "Kamito President trắng (TF – Cỏ nhân tạo)",
    type: "TF",
    brand: "KAMITO",
    price: 1499000,
    oldPrice: 1599000,

    thumbnail: "images/k53.png",
    stock: 18,

    images: [
      "images/k53.png",
      "images/k54.png",
      "images/k55.png",
      "images/k56.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 103,
    name: "Kamito Assassin trắng hồng (TF – Cỏ nhân tạo)",
    type: "TF",
    brand: "KAMITO",
    price: 699000,
    oldPrice: 720000,

    thumbnail: "images/k57.png",
    stock: 11,

    images: [
      "images/k57.png",
      "images/k58.png",
      "images/k59.png",
      "images/k60.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 104,
    name: "Kamito Assassin đen xanh chuối (TF – Cỏ nhân tạo)",
    type: "TF",
    brand: "KAMITO",
    price: 699000,
    oldPrice: 720000,

    thumbnail: "images/k61.png",
    stock: 11,

    images: [
      "images/k61.png",
      "images/k62.png",
      "images/k63.png",
      "images/k64.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  //KAMITO FG
  {
    id: 99,
    name: "Kamito Velocidad trắng đỏ (FG – Cỏ tự nhiên)",
    type: "AG",
    brand: "KAMITO",
    price: 599000,
    oldPrice: 699000,

    thumbnail: "images/k41.png",
    stock: 15,

    images: [
      "images/k41.png",
      "images/k42.png",
      "images/k43.png",
      "images/k44.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  {
    id: 100,
    name: "Kamito TA11 Pro hồng xanh ngọc (FG – Cỏ tự nhiên)",
    type: "AG",
    brand: "KAMITO",
    price: 1099000,
    oldPrice: 1200000,

    thumbnail: "images/k45.png",
    stock: 10,

    images: [
      "images/k45.png",
      "images/k46.png",
      "images/k47.png",
      "images/k48.png",
    ],

    desc: "Kamito là thương hiệu thể thao được phát triển tại Việt Nam, nổi bật trong lĩnh vực giày đá bóng và dụng cụ bóng đá. Kamito hướng đến việc tạo ra những sản phẩm phù hợp với bàn chân người Việt, đặc biệt là khi thi đấu trên sân cỏ nhân tạo – môi trường phổ biến hiện nay.",
  },

  // ZOCKER TF
  {
    id: 105,
    name: "Zocker Inspire Pro Gen 2 Tím",
    type: "TF",
    brand: "ZOCKER",
    price: 779000,
    oldPrice: 8900000,

    thumbnail: "images/z1.png",
    stock: 10,

    images: [
      "images/z1.png",
      "images/z2.png",
      "images/z3.png",
      "images/z4.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 106,
    name: "Zocker Inspire Pro Gen 2 Xanh",
    type: "TF",
    brand: "ZOCKER",
    price: 779000,
    oldPrice: 8900000,

    thumbnail: "images/z5.png",
    stock: 10,

    images: [
      "images/z5.png",
      "images/z6.png",
      "images/z7.png",
      "images/z8.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 107,
    name: "Zocker Pioneer Đen",
    type: "TF",
    brand: "ZOCKER",
    price: 1390000,
    oldPrice: 1450000,

    thumbnail: "images/z9.png",
    stock: 5,

    images: [
      "images/z9.png",
      "images/z10.png",
      "images/z11.png",
      "images/z12.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 108,
    name: "Zocker Pioneer Trắng",
    type: "TF",
    brand: "ZOCKER",
    price: 1390000,
    oldPrice: 1450000,

    thumbnail: "images/z13.png",
    stock: 5,

    images: [
      "images/z13.png",
      "images/z14.png",
      "images/z15.png",
      "images/z16.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 109,
    name: "Zocker Inspire PRO Cam",
    type: "TF",
    brand: "ZOCKER",
    price: 729000,
    oldPrice: 800000,

    thumbnail: "images/z17.png",
    stock: 25,

    images: [
      "images/z17.png",
      "images/z18.png",
      "images/z19.png",
      "images/z20.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 110,
    name: "Zocker Inspire PRO Rose Red/Green",
    type: "TF",
    brand: "ZOCKER",
    price: 729000,
    oldPrice: 800000,

    thumbnail: "images/z21.png",
    stock: 25,

    images: [
      "images/z21.png",
      "images/z22.png",
      "images/z23.png",
      "images/z24.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 111,
    name: "Zocker Winner Energy - Cam",
    type: "TF",
    brand: "ZOCKER",
    price: 659000,
    oldPrice: 700000,

    thumbnail: "images/z25.png",
    stock: 32,

    images: [
      "images/z25.png",
      "images/z26.png",
      "images/z27.png",
      "images/z28.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 112,
    name: "Zocker Winner Energy - Xanh Nhạt/Trắng",
    type: "TF",
    brand: "ZOCKER",
    price: 659000,
    oldPrice: 700000,

    thumbnail: "images/z29.png",
    stock: 32,

    images: [
      "images/z29.png",
      "images/z30.png",
      "images/z31.png",
      "images/z32.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 113,
    name: "Zocker Inspire Trắng",
    type: "TF",
    brand: "ZOCKER",
    price: 659000,
    oldPrice: 700000,

    thumbnail: "images/z33.png",
    stock: 11,

    images: [
      "images/z33.png",
      "images/z34.png",
      "images/z35.png",
      "images/z36.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 114,
    name: "Zocker Inspire Xanh Chuối",
    type: "TF",
    brand: "ZOCKER",
    price: 659000,
    oldPrice: 700000,

    thumbnail: "images/z37.png",
    stock: 11,

    images: [
      "images/z37.png",
      "images/z38.png",
      "images/z39.png",
      "images/z40.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 115,
    name: "Zocker Space Xanh",
    type: "TF",
    brand: "ZOCKER",
    price: 569000,
    oldPrice: 600000,

    thumbnail: "images/z41.png",
    stock: 19,

    images: [
      "images/z41.png",
      "images/z42.png",
      "images/z43.png",
      "images/z44.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 116,
    name: "Zocker Space Trắng",
    type: "TF",
    brand: "ZOCKER",
    price: 569000,
    oldPrice: 600000,

    thumbnail: "images/z45.png",
    stock: 19,

    images: [
      "images/z45.png",
      "images/z46.png",
      "images/z47.png",
      "images/z48.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 117,
    name: "Zocker 1902 Đen Xanh",
    type: "TF",
    brand: "ZOCKER",
    price: 499000,
    oldPrice: 600000,

    thumbnail: "images/z49.png",
    stock: 27,

    images: [
      "images/z49.png",
      "images/z50.png",
      "images/z51.png",
      "images/z52.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },

  {
    id: 118,
    name: "Zocker 1902 Trắng",
    type: "TF",
    brand: "ZOCKER",
    price: 499000,
    oldPrice: 600000,

    thumbnail: "images/z53.png",
    stock: 27,

    images: [
      "images/z53.png",
      "images/z54.png",
      "images/z55.png",
      "images/z56.png",
    ],

    desc: "Zocker là thương hiệu thể thao được nhiều người chơi bóng đá phong trào tại Việt Nam lựa chọn nhờ mức giá dễ tiếp cận cùng thiết kế hiện đại, mạnh mẽ. Các dòng giày đá bóng Zocker hướng đến sự cân bằng giữa độ bền, cảm giác bóng và sự thoải mái khi thi đấu trên sân cỏ nhân tạo.",
  },
];

// CHỈ SET 1 LẦN
localStorage.setItem("Products", JSON.stringify(products));

// LUÔN LẤY TỪ LOCALSTORAGE
window.products = JSON.parse(localStorage.getItem("Products"));
