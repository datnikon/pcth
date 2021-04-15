import { Drink } from '../models/drink';

export const drinks: Drink[] = [
    // truyền thống
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/cf-den-sg.jpg',
        materials: ['20->25g cà phê (~50ml)', '8 -> 10g đường', 'Đá bi'],
        steps: ['Dùng ly đế bằng, thể tích từ 345-> 355ml (Highball)', 'Đánh đều cà phê và đường để tạo bọt', 'Cho đá bi đầy, ống hút'],
        type: 'Truyền thống',
        name: 'Cà phê đen Sài Gòn',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/cf-sua-sg.jpg',
        materials: ['20->25g cà phê (~50ml)', '30ml sữa đặc', 'Đá bi'],
        steps: ['Dùng ly đế bằng, thể tích từ 345-> 355ml (Highball)', 'Đánh đều cà phê với sữa -> Shaker', 'Cho ống hút/muỗng'],
        type: 'Truyền thống',
        name: 'Cà phê sữa Sài Gòn',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['15 -> 20ml cà phê', 'Bột ca cao 6g (~2 muỗng)', 'Sữa đặc 30ml', 'Sữa tươi 50ml', 'Nước sôi 50ml', 'Đá bi'],
        steps: ['Đánh đều ca cao cùng nước sôi', 'Cho sữa đặc vào đánh đều', 'Cho đá bi gần đầy -> sữa tươi lên trên cùng', 'Cho ống hút/muỗng'],
        type: 'Truyền thống',
        name: 'Cà phê ca cao sữa đá',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/bac-siu.jpg',
        materials: ['15 -> 20ml cà phê', '40 -> 50ml sữa đặc', 'Sữa tươi 50ml', 'Đá bi'],
        steps: ['Cho sữa đặc vào ly highball', 'Cho sữa tươi, đá bi vào gần đầy ly', 'Shaker cà phê để tạo bọt rồi để lên trên cùng', 'Cho ống hút/muỗng'],
        type: 'Truyền thống',
        name: 'Bạc xỉu đá',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['15 -> 20ml cà phê', '40 -> 50ml sữa đặc', 'Sữa tươi 100ml'],
        steps: ['Cho sữa đặc vào ly Irish (cốc sứ)', 'Làm nóng sữa tươi rồi cho vào ly', 'Cho cà phê vào'],
        type: 'Truyền thống',
        name: 'Bạc xỉu nóng',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/ca-cao-da.jpg',
        materials: ['Bột cacao 6g', '60ml nước sôi', 'Sữa dừa 40ml', 'Syrup đường 40ml (có thể thay bằng 30ml sữa)'],
        steps: ['Shaker'],
        type: 'Truyền thống',
        name: 'Ca cao đá',
    },
    // Trà
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Chanh 1 quả (20ml)', 'Trà lipton 1 túi', '60ml nước sôi', 'Syrup đường 50ml', 'Mật ông 15 -> 20ml (tùi chọn)'],
        steps: ['Ngâm trà 3-5 phút', 'Cho syrup đường, chanh, đá bi vào rồi shaker', 'Cho ống hút và decor'],
        type: 'Trà',
        name: 'Lipton chanh đá',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Chanh 10ml', 'Trà dâu 2 túi', '60ml nước sôi', 'Syrup dâu 20ml', 'Dâu tây 3 quả', 'Đường 30ml'],
        steps: ['Ngâm trà 3-5 phút', 'Shaker toàn bộ'],
        type: 'Trà',
        name: 'Trà dâu',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà 1 túi', 'Đường 35ml', 'Chanh 15ml', 'Xí muội 2 viên', 'Nước sôi 60ml'],
        steps: ['Cắt nhỏ xí muội rồi ngâm cùng trà 3-5 phút', 'Shaker toàn bộ', 'Decor'],
        type: 'Trà',
        name: 'Lipton xí muội đá',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà 1 túi', 'Syrup blue curacao 30ml', 'Sữa tươi 80ml', 'Nước sôi 60ml'],
        steps: ['Ngâm trà 3-5 phút', 'Chọn ly đế nhọn, cho syrup vào ly', 'Shaker sữa tươi rồi cho vào ly', 'Cho trà vào ly', 'Decor'],
        type: 'Trà',
        name: 'Lipton Romance',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Bột matcha 1 muỗng (~3g)', 'Syrup trà xanh 30ml', 'Sữa tươi 80ml', 'Nước sôi 60ml'],
        steps: ['Cho bột trà vào ly cùng nước rồi khuấy đều', 'Chọn ly đế nhọn, cho syrup vào ly rồi cho đá đầy', 'Shaker sữa tươi rồi cho vào ly', 'Cho trà vào ly', 'Decor'],
        type: 'Trà',
        name: 'Matcha latte nóng',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà thái 1,5g (4g)', 'Sữa đặc 20ml', 'Syrup đường 15ml', 'Nước sôi 80-100ml'],
        steps: ['Ngâm trà rồi lọc trà', 'Shaker toàn bộ', 'Decor'],
        type: 'Trà',
        name: 'Trà thái sữa (đá)',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà đào 2 túi (trà cozy)', 'Syrup đào 20ml',
            'Syrup đường 30ml', 'Đào lon 1 miếng', 'Nước chanh 15ml', 'Nước sôi 60ml'],
        steps: ['Ngâm trà rồi lọc trà', 'Cắt đào', 'Shaker toàn bộ', 'Decor'],
        type: 'Trà',
        name: 'Trà đào (đá)',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà đào 1 túi (trà cozy)', 'Syrup đào 20ml', 'Sữa rich 40ml', 'Syrup đường 20ml', 'Đào lon 1 miếng', 'Nước sôi 80ml'],
        steps: ['Ngâm trà', 'Cho 1/2 nước trà cùng với đường vào đá', 'Cho sữa rich cùng syrup trà và trà cùng với đá vào shaker', 'Decor'],
        type: 'Trà',
        name: 'Trà sữa đào (*)',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà vải 2 túi', 'Syrup vải 20ml', 'Syrup đường 30ml', 'Nước chanh 10ml', 'Vải lon 3 quả', 'Nước sôi 60ml'],
        steps: ['Ngâm trà', 'Shaker toàn bộ', 'Decor'],
        type: 'Trà',
        name: 'Trà vải đá',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà đào 2 túi', 'Syrup đào 20ml', 'Syrup sả 30ml', 'Nước chanh 10ml', 'Vải lon 3 quả', 'Nước sôi 60ml', 'Đào lon 1 miếng'],
        steps: ['Ngâm trà', 'Cắt đào miếng nhỏ', 'Shaker toàn bộ', 'Decor'],
        type: 'Trà',
        name: 'Trà đào sả',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Trà đào 2 túi', 'Syrup đào 20ml', 'Syrup sả 30ml', 'Nước chanh 10ml', 'Vải lon 3 quả', 'Nước sôi 60ml', 'Đào lon 1 miếng', '3 quả tắc'],
        steps: ['Ngâm trà', 'Cắt đào miếng nhỏ', 'Shaker toàn bộ', 'Decor'],
        type: 'Trà',
        name: 'Trà đào sả tắc',
    },
    // Nước ép
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Táo xanh 1 quả', 'Syrup đường 40ml', 'Muối'],
        steps: ['Cắt decor trước khi làm', 'Cho đá và muối vào ca để chứa nước ép', 'Ép táo', 'Cho đường vào khuấy', 'Kiểm tra và decor'],
        type: 'Nước ép',
        name: 'Nước ép táo',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Dâu 8-10 quả', 'Syrup đường 40ml', 'Nước lọc 30ml'],
        steps: ['Cắt decor trước khi làm', 'Ép dâu', 'Cho đường vào khuấy', 'Kiểm tra và decor'],
        type: 'Nước ép',
        name: 'Nước ép dâu',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Bưởi 3 múi', 'Syrup đường 30ml', 'Muối', 'Nước 30ml'],
        steps: ['Bí mật :D'],
        type: 'Nước ép',
        name: 'Nước bưởi',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Nước ép ổi 120ml (chọn ổi da xần, màu đậm)', 'Syrup đường 20ml', 'Muối'],
        steps: ['Ép ổi lấy nước', 'Cho đá và ít muối vào', 'Cho đường vào', 'Khuấy', 'Decor'],
        type: 'Nước ép',
        name: 'Nước ổi',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Chanh 3 quả (chanh Sài Gòn, mùa vàng, da căng, bóng)', 'Syrup đường 65-75ml', 'Nước lọc 30ml', 'Muối'],
        steps: ['Cắt chanh làm 3 vắt lấy nước (vắt 1 lần duy nhất)', 'Shaker tất cả', 'Khuấy', 'Decor'],
        type: 'Nước ép',
        name: 'Nước chanh',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Nước ép cà rốt 120ml (200g 1 quả)', 'Syrup đường 30ml'],
        steps: ['Sơ chế cà rốt', 'Cho 2 quả cà rốt nhỏ ép lấy 120ml', 'Cho đường, đá vào ly rồi khuấy', 'Decor'],
        type: 'Nước ép',
        name: 'Nước cà rốt',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Cà chua 3 quả (120ml)', 'Syrup đường 30ml'],
        steps: ['Sơ chế cà chua', 'Ép lấy 120ml', 'Cho đường, đá vào ly rồi khuấy', 'Decor'],
        type: 'Nước ép',
        name: 'Nước cà chua',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Cam 2 quả (120ml)', 'Syrup đường 30-40ml'],
        steps: ['Cắt đôi quả cam vắt lấy 120ml', 'Cho đường, đá vào ly rồi khuấy', 'Decor'],
        type: 'Nước ép',
        name: 'Nước cam',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Chanh dây 80-90ml', 'Nước lọc 20ml', 'Syrup đường 55ml'],
        steps: ['Cho chanh dây vào ly', 'Cho đường, đá vào ly rồi khuấy', 'Decor'],
        type: 'Nước ép',
        name: 'Nước chanh dây',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Chanh dây 60ml', 'Syrup blue curacao 30ml', 'Syrup đường 30ml'],
        steps: ['Cho syrup blue curacao vào ly', 'Shaker các thành phần còn lại rồi cho vào ly', 'Decor'],
        type: 'Nước ép',
        name: 'Blue passion (đa tầng)',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Cam 1 quả (70ml)', 'Cà rốt 1 quả (70ml)', 'Syrup đường 40ml'],
        steps: ['Cắt cam làm đôi rồi vắt', 'Sơ chế và ép cà rốt', 'Cho nước cam, đường, đá vào ly', 'Cho đá gần đầy', 'Cho nước ép cà rốt', 'Decor'],
        type: 'Nước ép',
        name: 'Cam và cà rốt (đa tầng)',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Ép cam 90ml', 'mật ong 15ml', 'Syrup đường 20ml'],
        steps: ['Cho cam, mật ông -> đường -> đá vào ly', 'Decor'],
        type: 'Nước ép',
        name: 'Cam và mật ong (đa tầng)',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Cam 1 quả (70ml)', 'Dâu tây 5 quả (70ml)', 'Syrup đường 40ml'],
        steps: ['Cắt cam làm đôi rồi vắt', 'Sơ chế và ép dâu', 'Cho nước cam, đường, đá vào ly', 'Cho đá gần đầy', 'Cho nước ép dâu', 'Decor'],
        type: 'Nước ép',
        name: 'Dâu và cam (đa tầng)',
    },
    // Sinh tố
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Chanh 70-80ml', 'Sữa đặc 40ml', 'Syrup đường 30ml', 'Bột frapp 10g', '20ml nước lọc'],
        steps: ['Sơ chế chanh dây rồi lọc lấy nước', 'Cho tất cả vào xay', 'Decor'],
        type: 'Sinh tố',
        name: 'Sinh tố chanh dây',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Chuối chín 1 quả', 'Sữa đặc 30ml', 'Syrup đường 10ml', 'Sữa tươi 50ml', 'Bột frapp 10g'],
        steps: ['Chọn chuối chính đều, bóc vỏ', 'Cho tất cả vào xay', 'Decor'],
        type: 'Sinh tố',
        name: 'Sinh tố chuối',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['bơ chín 100g (bơ sáp, chín mềm, màu xanh)', 'Sữa đặc 30ml', 'Syrup đường 30ml', 'Sữa tươi 80ml'],
        steps: ['Tách bơ', 'Cho tất cả vào xay', 'Decor'],
        type: 'Sinh tố',
        name: 'Sinh tố bơ',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Đu đủ chín 100g', 'Sữa đặc 30ml', 'Syrup đường 30ml', 'Sữa tươi 80ml'],
        steps: ['Sơ chế đu đủ', 'Cho tất cả vào xay', 'Decor'],
        type: 'Sinh tố',
        name: 'Sinh tố đu đủ',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Xoài chín 1/2 quả (xoài chín gọt vỏ - xoài cát Hòa Lộc)', 'Sữa đặc 30ml', 'Syrup đường 15ml', 'Sữa tươi 60ml'],
        steps: ['Sơ chế xoài', 'Cho tất cả vào xay', 'Decor'],
        type: 'Sinh tố',
        name: 'Sinh tố xoài',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['Dâu 10 quả', 'Sữa đặc 30ml', 'Syrup đường 15ml', 'Sữa tươi 40ml', 'Bột frapp 10g', 'Sốt dâu 30ml'],
        steps: ['Sơ chế dâu', 'Cho tất cả vào xay', 'Decor'],
        type: 'Sinh tố',
        name: 'Sinh tố dâu',
    },
    // Mojito
    {
        img: 'https://www.cairowestmag.com/wp-content/uploads/2018/02/vmojito3-1.jpg',
        materials: ['Chanh 1 quả', 'Nước chanh 10ml', 'Đường cát 10g', 'Soda', 'Rau húng'],
        steps: ['Chọn chanh vỏ mỏng cắt làm 4', 'Cho chanh đã cắt vào ly -> cho đường cát vào dầm -> đập rau húng cho vào ly'
            , 'Cho đá gần đầy ly -> rót soda vào đầy ly -> khuấy đều'],
        type: 'Virgin Mojito',
        name: 'Virgin Mojito',
    },
    {
        img: 'https://pizzacavicent.es/345-large_default/caipiroska-de-fresa.jpg',
        materials: ['Chanh 1 quả', 'Syrup chanh dây 30ml', 'Chanh dây 20ml (có hạt, tầm 1 quả)', 'Đường cát 2 muỗng', 'Soda', 'Rau húng'],
        steps: ['Chọn chanh vỏ mỏng cắt làm 4', 'Cho chanh đã cắt vào ly -> cho đường cát vào dầm -> đập rau húng cho vào ly'
            , 'Cho đá gần đầy ly -> rót soda vào đầy ly -> khuấy đều'],
        type: 'Virgin Mojito',
        name: 'Virgin Pasion Mojito',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/virgin-strawberry-mojito.jpg',
        materials: ['Chanh 1 quả', 'Syrup dâu 30ml', '2 quả dâu', 'Đường cát 2 muỗng', 'Soda', 'Rau húng'],
        steps: ['Chọn chanh vỏ mỏng cắt làm 4', 'Cho chanh đã cắt vào ly -> cho đường cát vào dầm -> cho dâu, rau húng vào ly'
            , 'Cho đá gần đầy ly -> rót soda vào đầy ly -> khuấy đều'],
        type: 'Virgin Mojito',
        name: 'Virgin Strawberry Mojito',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/virgin-pina-colada-mojito.jpg',
        materials: ['Chanh 1 quả', '90ml nước thơm', 'Syrup đường 10ml', 'Coconut cream 30ml', 'Syrup Coconut 15ml', 'Soda'],
        steps: ['Sơ chế thơm và ép lấy nước', 'Shaker tất cả'],
        type: 'Virgin Mojito',
        name: 'Virgin Pina Colada Mojito',
    },
    // Trà sữa
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/tra_sua.jpg',
        materials: ['Trà olong/trà đen số 9 100 -> 120g', 'Sữa đặc 350ml', 'Đường 350ml', 'Bột B-one 400-500g', 'Nước 3 lít', 'Muối 3g'],
        steps: ['Cho trà vào đun sôi 10 phút, tắt bếp sau đó ủ trà 20-30 phút', 'Trộn các thành phần còn lại', 'Cho vào trà nấu tiếp (vừa khuấy) cho đến khi tan'],
        type: 'Trà sữa',
        name: 'Trà sữa truyền thống'
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/tran_chau.png',
        materials: ['200g trân châu đen đài loan', '2 lít nước sôi', 'Đường/mật ong'],
        steps: [
            'Nấu nước cho thật sôi', 'Cho trân châu đen vào nấu (vừa khuấy)',
            'Nấu trong 10 phút, sau đó ủ trong 30 phút',
            'Vớt ra rồi trộn đường, mật ong để không bị dính'],
        type: 'Trà sữa',
        name: 'Nấu trân châu'
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/khuc_bach.jpg',
        materials: ['10 lá galentin', 'Kem béo 300ml', '100g đường', '300 ml sữa tươi không đường'],
        steps: [
            'Ngâm lá galentin vào nước mát cho mềm',
            'Cho tất cả vào nấu (khuấy đều)',
            'Bắt đầu sôi thì tắt bếp (không để sôi), vớt bọt'
        ],
        type: 'Trà sữa',
        name: 'Thạch khúc bạch'
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/pudding.png',
        materials: ['6g thạch rau câu dẻo', '2g thạch rau câu agar', '100-120g đường', '1 lít nước lọc', '100-120g rau câu hương vị (sô cô la/dâu/khoai môn)'],
        steps: ['Trộn đều hỗn hợp rau câu', 'Nấu nước gần sôi', 'Cho hôn hợp vào khuấy đều, để lửa nhỏ đến khi sủi tăm, vớt bọt, tắt bếp', 'Để nguội rồi bảo quản ngăn mát'],
        type: 'Trà sữa',
        name: 'Thạch pudding'
    }
];
