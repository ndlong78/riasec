# 🧭 CBB & Family – Trắc nghiệm Holland RIASEC cho học sinh THPT

Dự án này là một **website trắc nghiệm Holland RIASEC** dành cho học sinh cấp 3, được tối ưu cho:
- Học sinh lớp **10–11** định hướng nghề nghiệp
- Giáo viên/nhà trường/cố vấn hướng nghiệp
- Phụ huynh muốn đồng hành cùng con

Toàn bộ hệ thống:
- Chạy **100% trên trình duyệt** (static site, không cần server backend)
- Lưu kết quả **cục bộ** bằng `localStorage`
- Có thể **đồng bộ hóa và mã hóa dữ liệu** lên GitHub thông qua repo `riasec-data-storage` + AES (CryptoJS)

---

## 1. 🎯 Mục tiêu dự án

1. Giúp học sinh:
   - Hiểu rõ hơn về **6 nhóm tính cách Holland RIASEC**
   - Nhận diện **top 3 nhóm nổi bật** của bản thân
   - Có danh sách **ngành nghề gợi ý**, kèm gợi ý tự tìm hiểu tiếp

2. Giúp giáo viên & nhà trường:
   - Có **công cụ miễn phí**, dễ triển khai qua GitHub Pages
   - Theo dõi kết quả qua **tab Admin + export CSV**
   - (Tuỳ chọn) **Đồng bộ dữ liệu lên GitHub** để tập trung dữ liệu nhiều máy

3. Giúp gia đình (CBB & Family):
   - Có một “cửa sổ” để **lắng nghe và trao đổi với con** về nghề nghiệp tương lai
   - Không áp đặt, mà cùng con **khám phá & thảo luận**

---

## 2. 🧱 Cấu trúc & Kiến trúc kỹ thuật

Dự án gồm 3 file chính:

- `index.html` – Giao diện chính, layout 4 tab:
  - **Bài trắc nghiệm**
  - **Giới thiệu RIASEC**
  - **Kết quả & Gợi ý**
  - **Admin (giáo viên)**
- `styles.css` – Toàn bộ UI:
  - Gradient xanh – navy theo brand **CBB & Family**
  - Responsive cho PC / tablet / mobile
  - Dark mode / Light mode (toggle)
- `script.js` – Logic:
  - Render 60 câu hỏi
  - Tính điểm RIASEC
  - Vẽ biểu đồ (Chart.js – lazy load)
  - Lưu kết quả vào `localStorage`
  - Đồng bộ & mã hóa dữ liệu lên GitHub
  - Tab Admin: lọc, export, sync, cấu hình GitHub

Ngoài ra có:
- `logo-cbb.png` – Logo thương hiệu (CBB & Family)

---

## 3. 🔑 Các tính năng chính

### 3.1. Bài trắc nghiệm (Tab **Bài trắc nghiệm**)

- **60 câu hỏi** chia đều 6 nhóm:
  - R – Realistic
  - I – Investigative
  - A – Artistic
  - S – Social
  - E – Enterprising
  - C – Conventional
- Mỗi câu có **5 mức độ trả lời**:
  1. Hoàn toàn không đồng ý  
  2. Không đồng ý  
  3. Phân vân / Bình thường  
  4. Đồng ý  
  5. Rất đồng ý
- Có **thanh tiến trình**: hiển thị số câu đã trả lời & % hoàn thành
- Tự động **autosave nháp** mỗi 30s vào `localStorage`  
  → Học sinh lỡ F5 trang vẫn không mất toàn bộ câu trả lời.

### 3.2. Kết quả & Gợi ý (Tab **Kết quả & Gợi ý**)

Sau khi hoàn thành bài test:

- Hệ thống tính tổng điểm cho 6 nhóm R/I/A/S/E/C
- Xác định **Top 3 nhóm nổi bật**
- Tính thêm **“Độ phân biệt” (Confidence score)**:
  - Cao / Trung bình / Thấp – dựa trên khoảng cách điểm giữa top 1 & top 2
- Hiển thị:
  - **Biểu đồ cột** (Bar chart)
  - **Biểu đồ radar**
- Mỗi nhóm có:
  - Tên & mô tả (tiếng Việt, dễ hiểu)
  - Danh sách **nghề nghiệp gợi ý dạng pill**  
    → Bấm vào từng nghề sẽ mở **modal chi tiết**:

#### 📌 Modal chi tiết ngành nghề

Mỗi nghề có:

- Mô tả 2–3 dòng:  
  → Công việc này làm gì? Phong cách làm việc?
- Một số **ngành học tiêu biểu** phù hợp
- Một số **trường đại học/cao đẳng tiêu biểu** ở Việt Nam
- Gợi ý câu hỏi để học sinh tự tìm hiểu thêm:
  - Công việc hằng ngày ra sao?
  - Học khối/thi môn nào?
  - Kỹ năng & tính cách cần có?
  - Cơ hội việc làm & xu hướng tương lai?

### 3.3. Khu vực Admin (Tab **Admin**)

Dành cho giáo viên/CBB:

- Bảo vệ bằng **mật khẩu đơn giản**: `cbbadmin123` (có thể đổi trong `script.js`)
- Xem **danh sách kết quả** đã được lưu trên máy:
  - Thời gian làm bài
  - Họ tên
  - Mã học sinh
  - Lớp
  - Email
  - Điểm R/I/A/S/E/C
- **Lọc theo lớp** (ví dụ: 10A1)
- **Lọc theo ngày** (YYYY-MM-DD)
- Nút **Export CSV**:
  - Xuất toàn bộ lịch sử trên máy thành file `riasec_results.csv`
- Cấu hình **GitHub + AES**:
  - GitHub Owner
  - Repository (ví dụ: `riasec-data-storage`)
  - File path (ví dụ: `data/results.enc.json`)
  - GitHub Token (PAT)
  - Khóa mã hóa AES (secret do giáo viên đặt)
- Nút **“Đồng bộ toàn bộ lên GitHub”**:
  - Đọc dữ liệu encrypted từ GitHub (nếu có)
  - Giải mã AES
  - Gộp với dữ liệu cục bộ (local)
  - Mã hóa AES lại
  - Ghi ngược lên GitHub (contents API)

---

## 4. 🧬 Bảo mật & Lưu trữ dữ liệu

### 4.1. Lưu trên máy học sinh

- Mỗi kết quả sau khi hoàn thành:
  - Lưu vào `localStorage` với key `riasecResults`
- Nhược điểm:
  - Học sinh đổi máy / đổi trình duyệt → không thấy kết quả cũ
  - Giáo viên muốn xem tổng quan cả lớp → phải thu lại file CSV hoặc sync lên GitHub

### 4.2. Lưu trên GitHub (riasec-data-storage)

Để **lưu giữ kết quả tập trung** từ nhiều máy/một hoặc nhiều trường, dự án hỗ trợ:

1. Tạo repo riêng trên GitHub, ví dụ:  
   `riasec-data-storage`

2. Trong tab Admin, cấu hình:
   - Owner: tên account/tổ chức (VD: `cbb-family`)
   - Repo: `riasec-data-storage`
   - Path: `data/results.enc.json` (có thể đổi)
   - GitHub Token (PAT)
   - Khóa AES secret (VD: `cbb-2025-super-secret`)

3. Dữ liệu được lưu trên GitHub như sau:
   - Nội dung JSON (`{ "results": [...] }`) được **mã hóa AES** bằng `CryptoJS`
   - Sau đó kết quả mã hóa tiếp tục được **Base64** rồi ghi bằng GitHub Contents API
   - Người ngoài nếu không có **secret AES** sẽ không giải mã được nội dung

### 4.3. Quyền của GitHub Token (PAT)

Để an toàn:

- Nên dùng **Fine-grained PAT** (Personal Access Token) mới của GitHub.
- Chỉ cấp quyền cho **1 repository**: `riasec-data-storage`.
- Phần “Repository permissions”:
  - **Contents: Read and write** (bắt buộc)
- Không cần:
  - Actions, Environments, Pull requests,… nếu chỉ dùng để đọc/ghi file JSON.

> ⚠️ Lưu ý:
> - Token được lưu trong `localStorage` của trình duyệt máy giáo viên.
> - Không nên dùng token có quyền `repo` full cho tất cả repo quan trọng.
> - Đây **không phải** giải pháp bảo mật cấp doanh nghiệp, mà phù hợp cho:
>   - Trường THPT
>   - Workshop hướng nghiệp
>   - Môi trường demo/giáo dục

---

## 5. 🚀 Hướng dẫn triển khai trên GitHub Pages

### Bước 1 – Tạo repository giao diện

1. Vào GitHub → `New repository`
2. Đặt tên, ví dụ: `cbb-riasec-test`
3. Chọn:
   - ✅ Public
   - ❌ Không cần README (có thể thêm sau)
4. Sau khi tạo xong, upload các file:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `logo-cbb.png`
   - `README.md` (file này)

### Bước 2 – Bật GitHub Pages

1. Vào **Settings** → **Pages**
2. Phần **Source**:
   - Chọn: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Save.  
4. Sau vài phút, GitHub sẽ cấp link:
   - `https://<username>.github.io/cbb-riasec-test/`

### Bước 3 – Tạo repository lưu data (tuỳ chọn)

1. Tạo repo mới:
   - Tên: `riasec-data-storage`
   - Public hoặc Private đều được
2. Không cần file gì bên trong (có thể để trống)
3. Tạo **Fine-grained PAT**:
   - Giới hạn cho repo: `riasec-data-storage`
   - Permissions:
     - Contents: Read and write
4. Vào website trắc nghiệm → Tab **Admin**:
   - Login: `cbbadmin123`
   - Nhập Owner, Repo, Path, PAT, Secret
   - Bấm **Lưu cấu hình**

Từ lúc này:
- Mỗi khi học sinh làm xong bài, hệ thống sẽ **cố gắng** sync dữ liệu lên GitHub (nếu cấu hình đúng).
- Giáo viên có thể bấm **“Đồng bộ toàn bộ lên GitHub”** để đảm bảo dữ liệu đã lên.

---

## 6. 📚 Hướng dẫn sử dụng trong lớp (cho giáo viên)

### 6.1. Trước buổi học

- Chuẩn bị:
  - Phòng máy, hoặc cho học sinh dùng điện thoại (wi-fi đủ mạnh)
  - Link truy cập:  
    `https://<username>.github.io/cbb-riasec-test/`
  - Một vài ví dụ về ngành nghề phổ biến: Bác sĩ, Kỹ sư, Lập trình viên, Giáo viên, Thiết kế đồ họa,…

### 6.2. Cách giới thiệu với học sinh

> Gợi ý kịch bản nói (có thể đọc gần như nguyên văn, hoặc tùy chỉnh):

> “Hôm nay, chúng ta sẽ làm một bài trắc nghiệm **Holland RIASEC**, đây là công cụ rất nổi tiếng trên thế giới để giúp các bạn hiểu rõ hơn về **tính cách nghề nghiệp** của mình.
>
> Bài test này **không phải** để chọn đúng 1 nghề cho bạn, cũng **không phải** là điểm số xếp hạng ai hơn ai.  
> Mà mục tiêu là:
> - Giúp bạn hiểu: mình phù hợp kiểu môi trường nào?  
> - Bạn mạnh ở nhóm nào: Thực tế (R), Nghiên cứu (I), Nghệ thuật (A), Xã hội (S), Kinh doanh (E), Hay Truyền thống (C)?
>
> Kết quả chỉ là **một góc nhìn tham khảo** – quyết định cuối cùng vẫn là của các bạn, cùng với gia đình và thầy cô.
>
> Vậy nên, cách làm bài tốt nhất là:
> - Trả lời **thật với bản thân** (không phải theo ý thầy cô, bố mẹ, hay bạn bè).
> - Không có câu đúng/sai, không có “điểm đẹp” để khoe.
> - Nếu phân vân, hãy chọn mức gần với cảm nhận của mình nhất.”

### 6.3. Thời lượng gợi ý

- Giới thiệu & hướng dẫn: **10 phút**
- Học sinh làm bài: **15–20 phút**
- Hướng dẫn đọc kết quả & xem nghề gợi ý: **15 phút**
- Thảo luận, hỏi – đáp: **10–15 phút**

Tổng: ~**45–60 phút** cho 1 tiết hướng nghiệp.

### 6.4. Gợi ý thảo luận sau khi làm bài

Một vài câu hỏi để học sinh suy nghĩ & chia sẻ:

- Em có bất ngờ với kết quả **Top 3 nhóm RIASEC** không?
- Kết quả này **giống hay khác** với nghề em đang nghĩ đến?
- Trong các nghề được gợi ý, em thấy **tò mò** về nghề nào nhất? Vì sao?
- Em có sẵn sàng tự lên mạng tìm hiểu thêm về **3–5 nghề** không?
- Em muốn trao đổi thêm với ai về kết quả này? (Ba mẹ, thầy cô, anh chị, CBB & Family…)

---

## 7. 🛠 Tuỳ chỉnh theo từng trường

Mặc định brand là:

- Tên: `CBB & Family`
- Tagline: `Cùng con định hướng tương lai`
- Logo: `logo-cbb.png`

Nếu muốn fork cho từng trường THPT:

- Mở `script.js`, phần đầu:

```javascript
const BRAND_CONFIG = {
    name: "CBB & Family",
    tagline: "Cùng con định hướng tương lai",
    logo: "logo-cbb.png"
};
