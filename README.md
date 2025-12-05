# 🌱 Trắc nghiệm Holland RIASEC – CBB & Family Career Center

Dự án này là một **website trắc nghiệm tính cách nghề nghiệp Holland RIASEC** dành cho học sinh THPT (đặc biệt là lớp 10–11), được phát triển cho môi trường gia đình & học đường với brand:

> **CBB & Family Career Center**

Website chạy hoàn toàn **client-side (HTML/CSS/JS)**, dễ dàng triển khai miễn phí trên **GitHub Pages**, không cần backend/server riêng.  
Ngoài việc hiển thị kết quả trực tiếp cho từng học sinh, hệ thống còn hỗ trợ **lưu dữ liệu lên GitHub** (mã hóa AES) để giáo viên/cha mẹ có thể thống kê và theo dõi.

---

## 1. Đối tượng & Mục tiêu

- **Đối tượng chính**: Học sinh THPT (lớp 10–11), đang trong giai đoạn:
  - Chọn ban, chọn khối thi
  - Định hướng ngành học & nghề nghiệp
- **Người sử dụng hệ thống**:
  - Học sinh
  - Phụ huynh (Family)
  - Giáo viên chủ nhiệm / Giáo viên hướng nghiệp / Tư vấn viên

**Mục tiêu**:

1. Giúp học sinh hiểu rõ hơn về bản thân qua 6 nhóm tính cách RIASEC.
2. Gợi ý ngành học – nghề nghiệp phù hợp tại Việt Nam.
3. Cung cấp công cụ cho giáo viên/cha mẹ theo dõi, thống kê kết quả (local + GitHub).

---

## 2. Tính năng chính

### 2.1. Bài test RIASEC (60 câu hỏi)

- 60 câu hỏi phân bổ đều 6 nhóm:
  - **R** – Realistic (Thực tế)
  - **I** – Investigative (Nghiên cứu)
  - **A** – Artistic (Nghệ thuật)
  - **S** – Social (Xã hội)
  - **E** – Enterprising (Doanh nghiệp)
  - **C** – Conventional (Truyền thống)
- Mỗi câu có 5 mức độ:
  - 1 – Hoàn toàn không đồng ý  
  - 2 – Không đồng ý  
  - 3 – Phân vân / Không chắc  
  - 4 – Đồng ý  
  - 5 – Rất đồng ý  
- Thanh **tiến trình (%)** hiển thị số câu đã trả lời / 60.

### 2.2. Thông tin học sinh

Form đầu trang (bắt buộc trước khi xem kết quả):

- Họ và tên  
- Lớp  
- Mã học sinh  
- Email  

→ Giúp:

- Lưu & export kết quả chuẩn cho từng học sinh.
- Hạn chế trùng lặp / nhầm lẫn khi thống kê.

### 2.3. Giao diện & trải nghiệm

- Giao diện **gradient xanh – tối**, hiện đại, phù hợp Gen Z.
- **Responsive**: chạy tốt trên PC / laptop / tablet / mobile.
- Cấu trúc trang rõ ràng:
  - **Giới thiệu & Hướng dẫn**
  - **Làm bài trắc nghiệm**
  - **Kết quả RIASEC**
  - **Admin (Lịch sử & GitHub)**

### 2.4. Kết quả RIASEC

Sau khi học sinh hoàn thành bài test:

- Tính điểm 6 nhóm R/I/A/S/E/C.
- Tạo **mã RIASEC Top 3** (VD: `ISA`, `SEC`, …).
- Hiển thị:
  - **Biểu đồ cột (Bar)**: điểm từng nhóm.
  - **Biểu đồ Radar**: “hồ sơ RIASEC” tổng thể.
  - Top 3 nhóm tính cách nổi bật + mô tả.
  - Gợi ý ngành học/ nghề nghiệp chi tiết cho từng nhóm **được bản địa hóa theo bối cảnh Việt Nam**.
  - Mô tả chi tiết 6 nhóm tính cách.

Học sinh có thể:

- **Lưu kết quả vào lịch sử local** (trình duyệt hiện tại).
- **Tải file TXT** chứa toàn bộ kết quả.
- **In hoặc lưu PDF** (dùng chức năng Print của trình duyệt).

### 2.5. Trang Admin (cho giáo viên / cha mẹ)

Tab **Admin** (có mật khẩu): `giaovien2025` (có thể chỉnh trong `script.js`).

Bao gồm:

1. **Lịch sử kết quả (localStorage)**:
   - Bảng lịch sử: thời gian, họ tên, lớp, mã HS, email, mã RIASEC.
   - Lọc theo:
     - Lớp
     - Khoảng ngày (Từ ngày – Đến ngày)
   - Nút: **Xuất CSV** toàn bộ lịch sử.

2. **Cấu hình GitHub** (chỉ trên máy hiện tại):

   - GitHub Owner
   - Repository (mặc định: `riasec-data-storage`)
   - GitHub Token (PAT)
   - Passphrase mã hóa (AES)

   Các thông tin này được lưu **cục bộ trên trình duyệt** (localStorage), không commit lên GitHub và không chia sẻ với ai khác.

3. Khi cấu hình GitHub hợp lệ:

   - Mỗi lần có kết quả mới, hệ thống sẽ **auto-save**:
     - Mã hóa dữ liệu bằng **CryptoJS AES** với passphrase bạn nhập.
     - Gửi lên repo GitHub `riasec-data-storage` dưới dạng file:
       - `data/riasec-YYYY-MM-DD.jsonl`  
       - Mỗi dòng: `{ "ts": "...", "cipher": "<chuỗi_mã_hóa>" }`
   - Có nút **“Gửi lại lên GitHub (thủ công)”** ở trang Kết quả (phòng trường hợp lần auto-save bị lỗi mạng).

---

## 3. Cấu trúc dự án

Repo **website chính** (ví dụ: `cbb-riasec-test`):

```text
cbb-riasec-test/
├─ index.html       # Trang chính
├─ styles.css       # Toàn bộ CSS
├─ script.js        # Logic JS (trắc nghiệm, biểu đồ, GitHub API, mã hóa)
└─ logo-cbb.png     # Logo CBB & Family
