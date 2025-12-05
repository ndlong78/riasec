
````markdown
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
````

Repo **lưu dữ liệu** (ví dụ: `riasec-data-storage`):

```text
riasec-data-storage/
└─ data/
   ├─ riasec-2025-12-05.jsonl
   ├─ riasec-2025-12-06.jsonl
   └─ ...
```

> 🔐 File `riasec-YYYY-MM-DD.jsonl` chứa **các dòng JSON đã mã hóa**, không đọc được nếu không có passphrase.

---

## 4. Hướng dẫn triển khai trên GitHub Pages

### 4.1. Tạo repo web

1. Vào GitHub → `New Repository`.
2. Đặt tên (ví dụ): `cbb-riasec-test`.
3. Chọn:

   * Public / Private đều được (Public dễ dùng cho học sinh).
4. Bấm **Create repository**.
5. Upload các file:

   * `index.html`
   * `styles.css`
   * `script.js`
   * `logo-cbb.png`
6. Commit & push.

### 4.2. Bật GitHub Pages

1. Trong repo `cbb-riasec-test` → **Settings** → **Pages**.

2. Mục **Source**:

   * Chọn **Deploy from a branch**.
   * Chọn branch: `main` (hoặc `master`).
   * Chọn folder: `/ (root)`.

3. Bấm **Save**.

4. GitHub sẽ cấp URL dạng:

   ```text
   https://<username>.github.io/cbb-riasec-test/
   ```

5. Kiểm tra: mở link → website hoạt động.

---

## 5. Hướng dẫn tạo repo lưu dữ liệu trên GitHub

### 5.1. Tạo repo `riasec-data-storage`

1. Vào GitHub → `New Repository`.
2. Đặt tên: **`riasec-data-storage`**.
3. Có thể chọn **Private** (khuyến nghị) để không ai xem được dữ liệu, dù đã mã hóa.
4. Bấm **Create repository**.

> Không cần tạo sẵn thư mục `data/`. Script sẽ tự tạo file `data/riasec-YYYY-MM-DD.jsonl` khi lần đầu ghi.

### 5.2. Tạo GitHub Token (PAT) giới hạn

1. Vào GitHub → **Settings** (cá nhân) → **Developer settings** → **Fine-grained personal access tokens** (hoặc Classic PAT).
2. Tạo token mới:

   * Chọn repository: **riasec-data-storage**.
   * Quyền tối thiểu: **`contents: read & write`**.
3. Copy token (chỉ hiện 1 lần).

> ⚠️ Không nên dùng token full quyền cho toàn bộ account.

### 5.3. Cấu hình trên trang Admin

Trên máy giáo viên (hoặc máy nào cần auto-save GitHub):

1. Mở website (GitHub Pages).
2. Nhấn tab **Admin** → nhập mật khẩu: `giaovien2025`.
3. Mục **Cấu hình GitHub**:

   * **GitHub Owner**: tên tài khoản hoặc tổ chức (VD: `cbb-family`).
   * **Repository**: `riasec-data-storage`.
   * **GitHub Token (PAT)**: dán token vừa tạo.
   * **Passphrase mã hóa (AES)**: nhập một mật khẩu bí mật (VD: `cbb-riasec-2025`).
4. Nhấn **“Lưu cấu hình (trên máy này)”**.

Từ bây giờ:

* Mỗi khi học sinh làm xong bài test trên **máy này**, hệ thống sẽ:

  * Tự mã hóa kết quả.
  * Tự động gửi lên repo `riasec-data-storage` → file `data/riasec-YYYY-MM-DD.jsonl`.

Cấu hình này được lưu bằng **localStorage**, nên:

* Tắt/mở lại trình duyệt vẫn còn.
* Chỉ có hiệu lực **trên máy và trình duyệt đó**.
* Máy khác muốn dùng cũng cần **nhập lại** Owner/Repo/Token/Passphrase.

---

## 6. Kịch bản sử dụng trong 1 buổi hướng nghiệp

### 6.1. Trước buổi học

Giáo viên / phụ huynh:

1. Đã triển khai website trên GitHub Pages.
2. Đã tạo repo `riasec-data-storage` & token.
3. Đã **cấu hình GitHub** trên máy trình chiếu (hoặc từng máy phòng máy).
4. Chuẩn bị:

   * Tài liệu giới thiệu sơ lược về Holland RIASEC.
   * Hướng dẫn đăng nhập Wi-Fi / truy cập link GitHub Pages cho HS.

### 6.2. Cách trao đổi với học sinh (gợi ý lời thoại)

**Phần mở đầu (5 phút)**

> “Hôm nay, chúng ta sẽ làm một bài **trắc nghiệm tính cách nghề nghiệp** theo lý thuyết Holland RIASEC.
> Mục đích không phải là dán nhãn hay ‘phán’ tương lai của em, mà là giúp em hiểu rõ hơn mình hợp với môi trường và công việc như thế nào.”

Giải thích ngắn gọn:

* Có 6 nhóm tính cách chính: **R – I – A – S – E – C**.
* Mỗi người thường có **3 nhóm nổi trội** → tạo thành mã như: `RIA`, `SEC`, `ISA`, …

**Hướng dẫn cách làm (3–5 phút)**

1. Mỗi bạn mở link:
   → *ghi link GitHub Pages lên bảng / chiếu slide*.
2. Điền **Họ tên, Lớp, Mã HS, Email**.
3. Chuyển sang tab **“Làm bài trắc nghiệm”**.
4. Mỗi câu hãy trả lời theo mức độ **giống bản thân**, không cần suy nghĩ đúng/sai.
5. Nhấn **“Xem kết quả RIASEC”** sau khi trả lời xong.

**Trong khi làm bài (10–15 phút)**

* Giáo viên đi xung quanh, giải thích thêm nếu HS hỏi.
* Nhắc HS:

  > “Đừng chọn theo mong muốn của bố mẹ, thầy cô hay bạn bè. Hãy chọn theo đúng cảm nhận của chính mình.”

**Sau khi xem kết quả (10–15 phút)**

Gợi ý câu hỏi thảo luận:

* Em thấy mã RIASEC của mình là gì? Có bất ngờ không?
* Em có nhận thấy những điểm này trong bản thân từ trước không?
* Các gợi ý ngành nghề có trùng với suy nghĩ hiện tại của em không?
* Em muốn tìm hiểu thêm ngành nào trong list gợi ý?

Giáo viên có thể:

* Yêu cầu HS **tải file TXT** và gửi qua email / Google Classroom / LMS.
* Sử dụng **CSV từ trang Admin** để thống kê:

  * Lớp 10A1 thiên về nhóm nào?
  * Lớp 11D2 có bao nhiêu bạn thiên về I (Investigative)?

---

## 7. Bảo mật & Giới hạn

### 7.1. Về GitHub Token & passphrase

* **Token** không được ghi trong code, không đẩy lên GitHub – chỉ nhập ở tab Admin.
* Token được lưu trong **localStorage** trên máy đó:

  * Máy khác không đọc được.
  * Nếu dùng máy chung, nên **xóa cấu hình GitHub** sau buổi học (nút “Xóa cấu hình”).

### 7.2. Về dữ liệu trên GitHub

* Dữ liệu được mã hóa AES bằng passphrase (do giáo viên chọn).
* File trên GitHub là dạng `.jsonl` với từng dòng `{ "ts": "...", "cipher": "<chuỗi_mã_hóa>" }`.
* Không ai (kể cả người có quyền access repo) đọc được nội dung nếu không có passphrase.

> ❗ Tuy nhiên đây **không phải** là giải pháp bảo mật tuyệt đối như hệ thống y tế / tài chính, mà chỉ là mức bảo vệ hợp lý cho môi trường giáo dục phổ thông.

### 7.3. Giới hạn kiến trúc

* Website là **static** (không backend) → không thể:

  * Ẩn hoàn toàn logic khỏi “View Source”.
  * Thực hiện xác thực phức tạp như hệ thống có server riêng.
* Nếu cần mức bảo mật và phân quyền cao hơn, có thể phát triển thêm backend riêng (Node.js, Python, v.v.) trong tương lai.

---

## 8. Lộ trình phát triển (Roadmap)

**Version hiện tại**:

* ✔ 60 câu hỏi RIASEC full.
* ✔ Biểu đồ cột + radar (Chart.js).
* ✔ Gợi ý ngành nghề bản địa hóa Việt Nam.
* ✔ Lưu lịch sử local + export CSV.
* ✔ Lưu dữ liệu lên GitHub (JSONL) với mã hóa AES (CryptoJS).
* ✔ Brand **CBB & Family** với logo `logo-cbb.png`.

**Ý tưởng phiên bản tiếp theo**:

* [ ] Dark mode toggle.
* [ ] Bản rút gọn 30 câu cho workshop 30 phút.
* [ ] Dashboard thống kê theo lớp / khối trực tiếp từ GitHub dữ liệu.
* [ ] Đa ngôn ngữ: Việt / Anh.
* [ ] Tích hợp chatbot tư vấn hướng nghiệp (dùng API GPT/Claude…).

---

## 9. Tuỳ biến cho trường khác

Dự án có thể **fork** và chỉnh lại brand cho từng trường:

* Đổi logo → thay file `logo-cbb.png` bằng logo trường.
* Trong `script.js`, sửa:

```javascript
const brandConfig = {
    logoSrc: "logo-truong.png",
    name: "Trường THPT XYZ",
    sub: "Trắc nghiệm tính cách nghề nghiệp Holland RIASEC"
};
```

* Đổi mật khẩu Admin trong `script.js`:

```javascript
const ADMIN_PASSWORD = "matkhau_moi";
```

---

## 10. Liên hệ & Góp ý

Nếu bạn là giáo viên, phụ huynh hoặc học sinh muốn đóng góp thêm:

* Cập nhật danh sách ngành nghề.
* Bổ sung link tham khảo (trang tuyển sinh, cẩm nang ngành nghề).
* Đề xuất cải tiến UI/UX, tính năng.

Hãy tạo **Issue** hoặc **Pull Request** trong repo.

---

> ⚠️ **Lưu ý quan trọng:**
> Bài trắc nghiệm chỉ mang tính chất **tham khảo định hướng**, không phải là “bản án nghề nghiệp” cố định.
> Quyết định cuối cùng nên dựa trên:
>
> * Kết quả học tập (GPA, năng lực môn học)
> * Điều kiện gia đình
> * Cơ hội nghề nghiệp thực tế
> * Và đặc biệt: sự trao đổi kỹ lưỡng giữa học sinh – phụ huynh – thầy cô.

```

```
