import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory',
  template: `<div class="theory-content" style="padding: 0.5rem" [innerText]="theoryContent"></div>`
})
export class TheoryComponent implements OnInit {
  public theoryContent = `Lịch sử cà phê:
  - 1671 được anh chăn dê tên Kaldi vùng Kaffa (ethiopia ngày nay) phát hiện
  - 1857 Tu sĩ người Pháp mang hạt Arabica vào trồng ở nhà thờ Hà Nam, Quảng Bình
  - 1996-2000 phổ biến ở Tây Nguyên
  - 1908 hạt Robica được trồng ở Việt Nam

  Các loại hạt:
  - Arabica (cà phê chè):
  + Hạt dài, dẹp, công
  + Vị chua hậu ngọt
  + Cafein thấp (0.9 -> 1.4%)
  + Thơm
  + Trồng ở độ cao >= 600m
  + Trồng nhiều ở Cầu Đất, Lâm Đồng, Lâm Hà
  - Robusta (cà phê vối):
  + Hạt tròn, nhân thẳng
  + Đậm, đắng
  + Cafein cao (1.8 -> 4%)
  + Trồng ở độ cao < 600m
  + Trồng nhiều ở Kontum, Đắk Lắk
  + Việt Nam xuất khẩu hạt Robusta 1/3 thế giới
  - Chery (cà phê mít)
  + Năng xuất cao, chống sâu bọ tốt
  + Nồng độ cafein không ổn đinh
  + Dùng để trộn với các loại khác
  Culi: hạt đột biến của Arabica (culy A) và Robusta (Culy Rô)

  Syrup (si rô): là một chất lỏng đậm đặc được làm ra từ đường, nước và các chất phụ gia khác dùng để làm nguyên liêu pha chế, có nhiều vị khác nhau.
  Các hãng syrup: Monin (từ Pháp, có nhiều loại nhất), Torani (từ Mỹ, do 2 người Ý sáng tạo, Davinci (từ Úc), Teisseire (từ Pháp)

  Liqueure (rượu mùi): là một loại thức uống có cồn được chưng cất, cho thêm những vị trái cây, kem, dược thảo, gia vị, bông hoa hay các loại hạch, có thêm đường hoặc các chất tạo ra vị ngọt. Là thức uống cũng là nguyên liệu để pha chế cocktail.Độ cồn 15-60%, có 2 loại chính theo độ ngọt, độ cồn.

  Spirit: Là một loại rượu mạnh, được lên men từ trái cây và ngũ cốc, có độ cồn từ 40 -50%. Gồm các loại: Whisky (lên men từ ngũ cốc độ cồn 40-45%), Brandy (lên men từ trái cây), Vodka, Rhum (độ cồn 40%), Tequila (độ cồn 40%), Gin (độ cồn 40-43%).

  Yếu tố làm nên ly cà phê truyền thống ngon
  + Chọn cà phê thơm, đậm, có hậu vị
  + Trộn hạt với tỉ lệ thích hợp
  + Ủ (phin nhôm, 20ml nước sôi (trên 10ml, dưới 10ml), 22-25g/phin)
  + Chế (6-7 phút và không quá 4h, chế 50 ml, nhiệt độ nước 90-96 độ C)

  Cà phê máy
  - Espresso là một loại thức uống được làm ra nhờ vào một áp lực nước cho chảy qua một lượng cà phê với độ mịn phù hợp để chiết xuất hết mùi vị cà phê (Sản phẩm dùng liền sau khi chế biến).

  Yếu tố tạo ra một ly espressco hoàn hảo:
  + Chọn hạt cà phê phù hợp với đối tượng khách hàng
  + Kiểm tra hạt cà phê có màu đều, bóng, kích thước đồng đều, hạt cứng, chắc.
  + Độ rang hạt cà phê đậm vừa (không quá cháy cũng không qua non)
  + Độ mịn của hạt cà phê
  + Lượng cà phê vừa đủ (8-10g/shot)
  + Áp lực nước máy cà phê 0.9 - 1.3 bar
  + Nhiệt độ nước 90 - 96 độ
  + Thời gian chiết xuất 22-25 giây/shot
  + Lực nén 14-15kg
  * Cà phê ngon sau khi chiết xuất xong có lớp creama ở trên, dùng ly sứ hoặc đá để giữ nhiệt (thể tích ~70ml), nước sôi từ 25-30ml (1shot)

  Cappuccino vs Latte
  - Dùng 220ml sữa, 8-10g cà phê (~30ml)
  - Cappuccino form sữa dày (di chuyển nhiều khi đánh), dùng ly có thể tích 220ml
  - Latte form sữa mỏng (di chuyển ít khi đánh), dùng ly có thể tích 280ml
  - Cappuccino có vị đậm hơn
  - Cappuccino có lượng sữa ít hơn latte

  Trà:
  - Ngâm 3-5 phút (không quá 1h)
  - Nóng thì không cho chanh trực tiếp

  Nước ép:
  - Táo, lê, cốc thì thêm muối vào đá khi ép để đỡ mất màu
  - Bưởi, chanh hay các loại bị nhẵn thì thêm ít muối để đỡ đắng
  - Đơn tầng 120ml 1 ly
  - Đa tầng 140ml/ly

  Sinh tố
  - Nguyên liệu: Trái cây, sữa đặc, sữa tươi, nước đường, phụ gia
  - Có 3 loại: Béo (Không bột phụ gia), Ngọt (cho hoặc không cho), chua (cho phụ gia)
  - Dâu thì thêm mứt hoặc syrup

  Lassi: có nguồn gốc từ ấn độ

  Yoghurt: Gồm sữa chua 1 hộp, trái cây,...

  Số đa Ý: Nguồn gốc từ Mỹ (2 anh em người Ý sáng tạo ra Syrup Torani)

  Ví dụ tính cost: Chưa cập nhật :D

  * Lưu ý trước và trong khi thi:
  - Cắt móng tay, đóng thùng áo
  - Khi rót nhớ đưa thương hiệu ra ngoài
  - Để khăn lau vòi sữa trên máy (không để dưới sàn)
  - Giới thiệu ấn tượng, vui vẻ khi làm
  - Cắt decor trước

  Ôn công thức và cách làm các món trong đề cương tại: http://pcth.datnikon.com/pha-che
  Làm bài kiểm tra lsy thuyết tại: http://pcth.datnikon.com/kiem-tra
  Ôn kiến thức pha chế: http://pcth.datnikon.com

  Chúc mọi người thi tốt, cố lên nhé!
  [From Đạt with s2]

  Note: Website có nội dung gì chưa đúng thì imbox Đạt cập nhật lại với nhé. Fb: https://www.facebook.com/datnikon/
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
