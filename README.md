# CỔNG DỊCH VỤ & HỖ TRỢ SINH VIÊN
**TRƯỜNG ĐẠI HỌC BÁCH KHOA — ĐẠI HỌC ĐÀ NẴNG (DUT)**

---

## 1. Giới thiệu tổng quan
Hệ thống nguyên mẫu giao diện đã được chuẩn hóa toàn diện theo nhận diện và quy định thực tế của **Trường Đại học Bách khoa - Đại học Đà Nẵng (DUT)**:
- **Tích hợp 3 Văn bản Gốc (Thư mục `tai-lieu-riel/`):**
  1. `QD_1414_DHBK.pdf`: Quyết định số 1414/QĐ-ĐHBK (24/5/2021) của Hiệu trưởng Trường ĐHBK - ĐHĐN về việc xét, cấp học bổng cho sinh viên hệ ĐH chính quy.
  2. `VBHN_28_BGDDT.pdf`: Văn bản hợp nhất số 28/VBHN-BGDĐT của Bộ GD&ĐT về học bổng khuyến khích học tập.
  3. `TT_35_2011_BGDDT.pdf`: Thông tư số 35/2011/TT-BGDĐT của Bộ GD&ĐT về trao nhận học bổng.
- **Tính năng Preview Văn bản Trực tiếp (Bôi Vàng Điều Khoản Trọng Tâm):**
  * Tích hợp Cửa sổ xem trước văn bản quy chuẩn dạng Giấy tờ hành chính.
  * Các điều khoản cốt lõi (Điều 5: Tiêu chuẩn điểm thang 10 $\ge 7.00$, ĐRL $\ge 65$, tín chỉ $\ge 15$; Điều 6: Mức học bổng A-B-C tương ứng 140%, 120%, 100% học phí; Điều 7: Trình tự công bố) đều được **bôi vàng nổi bật (`.doc-highlight`)**.
- **Giải quyết triệt để lỗi "Quá nhiều chữ / Rối mắt":**
  * Cắt giảm 60% mật độ văn bản mô tả lan man.
  * Thay thế khối chữ dài bằng **Bảng so sánh 3 cột Mức học bổng Loại A - Loại B - Loại C** và hệ thống thẻ thông số quét nhanh trong 3 giây.
- **Tích hợp Liên kết Ngoại vi (Web Gốc):**
  * Nút mở trực tiếp tab mới sang [Cổng sinh viên DUT: sv.dut.udn.vn](https://sv.dut.udn.vn/).
  * Nút mở trực tiếp trang [Văn bản Pháp quy DUT: dut.udn.vn/VanBanPhapQuy/page/1](https://dut.udn.vn/VanBanPhapQuy/page/1).
  * Chuẩn hóa Header & Footer với địa chỉ: *54 Nguyễn Lương Bằng, P. Hòa Khánh Bắc, Q. Liên Chiểu, TP. Đà Nẵng*.

---

## 2. Cấu trúc thư mục

```
stitch_student_portal_wireframe_prototype/
├── index.html                   # ⭐ BẢN TỔNG HỢP MASTER SPA (Khuyên dùng: Click đúp mở ngay trên trình duyệt)
│                                # Tích hợp Tab Switching, Modal Preview bôi vàng, Chat AI, Live Filter
├── tai-lieu-riel/               # 📂 THƯ MỤC CHỨA 3 TỆP PDF GỐC
│   ├── QD_1414_DHBK.pdf         # QĐ 1414/QĐ-ĐHBK (ĐHBK Đà Nẵng)
│   ├── VBHN_28_BGDDT.pdf        # VBHN 28/VBHN-BGDĐT (Bộ GD&ĐT)
│   └── TT_35_2011_BGDDT.pdf     # TT 35/2011/TT-BGDĐT (Bộ GD&ĐT)
├── screens/                     # Các trang màn hình độc lập
│   ├── screen_1_catalog.html    # Màn hình 1: Tra cứu & Danh mục quy chế DUT
│   ├── screen_2_procedure.html  # Màn hình 2: Bảng mức học bổng A-B-C & Tải văn bản gốc
│   ├── screen_3_ai_chat.html    # Màn hình 3: Trợ lý AI giải đáp theo QĐ 1414
│   └── screen_4_calendar.html   # Màn hình 4: Lịch hạn chót công bố danh sách HB
├── assets/
│   ├── css/style.css            # Định kiểu bôi vàng (.doc-highlight), animation, scrollbar
│   └── js/app.js                # Document Previewer, Chat engine tra cứu QĐ 1414, Router
└── README.md                    # Tài liệu hướng dẫn sử dụng
```

---

## 3. Cách mở và trải nghiệm
1. Mở trực tiếp file [`index.html`](index.html) bằng bất kỳ trình duyệt nào.
2. Thử nghiệm các tính năng:
   - Bấm nút **"Xem trích dẫn bôi vàng (Điều 5, 6)"** trên thẻ QĐ 1414 để mở cửa sổ Preview xem các điều khoản được highlight màu vàng.
   - Bấm các câu hỏi mẫu ở tab **Trợ lý học vụ AI** để xem AI trích dẫn căn cứ QĐ 1414 và mở văn bản bôi vàng tương ứng.
   - Bấm các liên kết mở tab mới sang `sv.dut.udn.vn` và `dut.udn.vn/VanBanPhapQuy`.
