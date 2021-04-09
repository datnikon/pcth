import { Drink } from '../models/drink';

export const drinks: Drink[] = [
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/cf-den-sg.jpg',
        materials: ['20->25g cà phê (~50ml)', '8 -> 10g đường', 'Đá bi'],
        steps: ['Dùng ly đế bằng, thể tích từ 345-> 355ml (Highball)', 'Đánh đều cà phê và đường để tạo bọt', 'Cho đá bi đầy, ống hút'],
        type: 'Thức uống truyền thống',
        name: 'Cà phê đen Sài Gòn',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/cf-sua-sg.jpg',
        materials: ['20->25g cà phê (~50ml)', '30ml sữa đặc', 'Đá bi'],
        steps: ['Dùng ly đế bằng, thể tích từ 345-> 355ml (Highball)', 'Đánh đều cà phê với sữa -> Shaker', 'Cho ống hút/muỗng'],
        type: 'Thức uống truyền thống',
        name: 'Cà phê sữa Sài Gòn',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['15 -> 20ml cà phê', 'Bột ca cao 6g (~2 muỗng)', 'Sữa đặc 30ml', 'Sữa tươi 50ml', 'Nước sôi 50ml', 'Đá bi'],
        steps: ['Đánh đều ca cao cùng nước sôi', 'Cho sữa đặc vào đánh đều', 'Cho đá bi gần đầy -> sữa tươi lên trên cùng', 'Cho ống hút/muỗng'],
        type: 'Thức uống truyền thống',
        name: 'Cà phê ca cao sữa đá',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/bac-siu.jpg',
        materials: ['15 -> 20ml cà phê', '40 -> 50ml sữa đặc', 'Sữa tươi 50ml', 'Đá bi'],
        steps: ['Cho sữa đặc vào ly highball', 'Cho sữa tươi, đá bi vào gần đầy ly', 'Shaker cà phê để tạo bọt rồi để lên trên cùng', 'Cho ống hút/muỗng'],
        type: 'Thức uống truyền thống',
        name: 'Bạc xỉu đá',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/default.jpg',
        materials: ['15 -> 20ml cà phê', '40 -> 50ml sữa đặc', 'Sữa tươi 100ml'],
        steps: ['Cho sữa đặc vào ly Irish (cốc sứ)', 'Làm nóng sữa tươi rồi cho vào ly', 'Cho cà phê vào'],
        type: 'Thức uống truyền thống',
        name: 'Bạc xỉu nóng',
    },
    {
        img: 'https://pcth.s3-ap-southeast-1.amazonaws.com/drinks/ca-cao-da.jpg',
        materials: ['Bột cacao 6g', '60ml nước sôi', 'Sữa dừa 40ml', 'Syrup đường 40ml (có thể thay bằng 30ml sữa)'],
        steps: ['Shaker'],
        type: 'Thức uống truyền thống',
        name: 'Ca cao đá',
    },
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
