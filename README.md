Dưới đây là nội dung bạn có thể dùng làm `README.md` cho dự án (chỉ cần copy nguyên văn):

---

# Trắc nghiệm Holland RIASEC cho học sinh THPT (Online)

Website trắc nghiệm Holland RIASEC được thiết kế dành riêng cho **học sinh lớp 10–11**, giúp các em khám phá nhóm tính cách nghề nghiệp của bản thân, làm cơ sở định hướng chọn **khối – ngành – nghề** trong tương lai.

Dự án này chạy hoàn toàn trên **trình duyệt**, có thể deploy lên **GitHub Pages (free)**, phù hợp cho các trường THPT triển khai trong các tiết **Hướng nghiệp / Sinh hoạt chủ nhiệm / Tư vấn tuyển sinh**.

---

## 1. Mục tiêu dự án

* Giúp học sinh:

  * Hiểu hơn về **xu hướng tính cách nghề nghiệp** của bản thân theo mô hình Holland RIASEC.
  * Có thêm gợi ý về **ngành học / nghề nghiệp** phù hợp để tìm hiểu sâu hơn.
* Giúp giáo viên / bộ phận hướng nghiệp:

  * Có một **công cụ trắc nghiệm online** dễ dùng, thân thiện, chạy trên mọi thiết bị.
  * Thu thập kết quả theo **Họ tên – Lớp – Mã học sinh – Email**, xuất **CSV** để thống kê và phân tích.

---

## 2. Đối tượng sử dụng

* Học sinh:

  * Lớp 10–11 (cũng có thể dùng cho lớp 12 hoặc sinh viên năm 1).
* Giáo viên:

  * Giáo viên chủ nhiệm, giáo viên hướng nghiệp, cố vấn học đường, bộ phận tuyển sinh, tư vấn tâm lý – hướng nghiệp.

---

## 3. Các tính năng chính

### 3.1. Bài trắc nghiệm RIASEC

* **60 câu hỏi** chia đều cho 6 nhóm tính cách:

  * **R** – Realistic (Thực tế)
  * **I** – Investigative (Nghiên cứu)
  * **A** – Artistic (Nghệ thuật)
  * **S** – Social (Xã hội)
  * **E** – Enterprising (Doanh nghiệp)
  * **C** – Conventional (Truyền thống)
* Mỗi câu có **5 mức độ trả lời**:

  * 1 – Hoàn toàn không đồng ý
  * 2 – Không đồng ý
  * 3 – Phân vân / Không chắc
  * 4 – Đồng ý
  * 5 – Rất đồng ý
* Có **thanh tiến trình** hiển thị số câu đã làm và % hoàn thành.

### 3.2. Giao diện & trải nghiệm

* Giao diện **gradient xanh + cam** hiện đại, thân thiện với học sinh.
* **Responsive**: hỗ trợ PC, laptop, tablet, smartphone.
* Chia thành **4 tab rõ ràng**:

  1. Giới thiệu & Hướng dẫn
  2. Làm bài trắc nghiệm
  3. Kết quả RIASEC
  4. Admin (Lịch sử)

### 3.3. Kết quả chi tiết

Sau khi hoàn thành bài test, học sinh xem:

* Điểm 6 nhóm R–I–A–S–E–C.
* **Top 3 nhóm nổi bật** (mã RIASEC, ví dụ: ISA, SEC…).
* **Biểu đồ cột** và **biểu đồ radar** trực quan (Chart.js).
* Mô tả ngắn gọn từng nhóm tính cách.
* Danh sách **ngành học / nghề nghiệp gợi ý** cho từng nhóm (theo bối cảnh Việt Nam).

Học sinh có thể:

* **Lưu kết quả vào lịch sử (localStorage)** – gắn với Họ tên / Lớp / Mã HS / Email.
* **Tải file .txt** chứa toàn bộ kết quả, điểm, mô tả, gợi ý nghề.
* Sử dụng chức năng **In / Lưu PDF** (trình duyệt).

### 3.4. Thông tin học sinh

Trước khi làm bài, học sinh nhập:

* Họ và tên
* Lớp
* Mã học sinh
* Email

Thông tin này được gắn với kết quả trong:

* Lịch sử (trình duyệt giáo viên).
* File TXT cá nhân.
* File CSV xuất từ tab Admin.

### 3.5. Tab Admin (Lịch sử + Lọc + Export CSV)

Dành cho giáo viên:

* **Bảo vệ bằng mật khẩu đơn giản** (đặt trong file `script.js` – biến `ADMIN_PASSWORD`).
* Xem toàn bộ lịch sử kết quả đã được lưu trên máy:

  * Thời gian
  * Họ tên
  * Lớp
  * Mã học sinh
  * Email
  * Mã RIASEC
* **Bộ lọc**:

  * Lọc theo **Lớp** (VD: `10A1`, `11D2`…)
  * Lọc theo **Từ ngày** – **Đến ngày**
* **Xuất CSV**:

  * Chứa đầy đủ: thời gian, thông tin học sinh, mã RIASEC, điểm R–I–A–S–E–C.
  * Có thể mở bằng Excel/Google Sheets để thống kê, phân tích.

> ⚠️ Lưu ý: Lịch sử lưu bằng **localStorage**, chỉ tồn tại trên **máy / trình duyệt đó**, không đồng bộ giữa các máy.

---

## 4. Cách triển khai (deploy) nhanh

### 4.1. Cấu trúc dự án

Đặt 3 file ở thư mục gốc:

* `index.html`
* `styles.css`
* `script.js`
* (kèm logo trường, ví dụ: `logo-CBB.png`)

### 4.2. Chỉnh brand theo từng trường

Trong `script.js`, sửa:

```js
const brandConfig = {
    logoSrc: "logo-CBB.png",              // Đổi sang logo trường: "logo-thpt-abc.png"
    name: "CBB / School Career Center",   // Tên trường/đơn vị
    sub: "Trắc nghiệm tính cách nghề nghiệp Holland RIASEC" // Tagline
};
```

### 4.3. Đặt mật khẩu Admin

Trong `script.js`, sửa:

```js
const ADMIN_PASSWORD = "giaovien2025";
```

Giáo viên chỉ cần chia sẻ mật khẩu này với nhóm người phụ trách tab Admin.

### 4.4. Deploy GitHub Pages (tóm tắt)

1. Tạo repo public trên GitHub (VD: `riasec-test`).
2. Upload 3 file + logo.
3. Vào **Settings → Pages**:

   * Source: `Deploy from a branch`
   * Branch: `main` / `master`, folder: `/ (root)`
4. Lấy link dạng:
   `https://<username>.github.io/riasec-test/`
   và gửi cho giáo viên/học sinh.

---

## 5. Hướng dẫn giáo viên: Cách trao đổi với học sinh khi làm bài test

Phần này dùng như một **script/kịch bản gợi ý** cho giáo viên khi triển khai trên lớp.

### 5.1. Thời lượng gợi ý cho 1 buổi

* Tổng: **45–60 phút**, ví dụ:

  * 5–10 phút: Giới thiệu RIASEC & mục tiêu buổi học
  * 10–15 phút: Học sinh làm bài test (60 câu)
  * 15–25 phút: Xem kết quả, giải thích, thảo luận

### 5.2. Kịch bản giới thiệu (trước khi test)

**Mục tiêu**: giúp học sinh hiểu đây **không phải bài kiểm tra điểm số**, mà là công cụ để hiểu bản thân.

Ví dụ lời giới thiệu (giáo viên có thể nói, điều chỉnh theo phong cách cá nhân):

> “Hôm nay cô/thầy sẽ cùng các em làm một bài **trắc nghiệm tính cách nghề nghiệp** theo mô hình **Holland RIASEC**.
>
> Bài này **không phải bài kiểm tra**, không có điểm 10 hay điểm 0, không ai đúng – ai sai.
>
> Mục đích là giúp mỗi bạn hiểu hơn:
>
> * Mình thuộc nhóm tính cách nào,
> * Mình hợp với kiểu công việc nào,
> * Và có thể tham khảo khi chọn **khối, ngành, trường** sau này.
>
> Kết quả chỉ là **gợi ý tham khảo**, không quyết định tương lai của các em, nhưng sẽ là một **tấm gương** để các em nhìn lại bản thân rõ hơn.”

Nhấn mạnh thêm 3 điểm:

* “Trả lời **theo đúng bản thân mình**, không phải theo ý bố mẹ, thầy cô hay bạn bè.”
* “Không cần suy nghĩ quá lâu. Ấn vào đáp án **gần với mình nhất**.”
* “Không cần so sánh với bạn ngồi cạnh. Mỗi người có một cấu trúc tính cách riêng.”

### 5.3. Hướng dẫn thao tác làm bài trên web

Giáo viên có thể chiếu màn hình `page-intro` và `page-quiz` lên máy chiếu, hướng dẫn:

1. Mở link website (hoặc quét QR do giáo viên cung cấp).
2. Điền **Họ tên – Lớp – Mã học sinh – Email** ở phần “Thông tin học sinh”.
3. Chuyển sang tab **“Làm bài trắc nghiệm”**.
4. Mỗi câu chọn 1 trong 5 mức độ:

   * 1 – Hoàn toàn không đồng ý
   * 2 – Không đồng ý
   * 3 – Phân vân / Không chắc
   * 4 – Đồng ý
   * 5 – Rất đồng ý
5. Theo dõi **thanh tiến trình** và số câu đã hoàn thành.
6. Khi trả lời xong 60/60 câu, nút **“Xem kết quả RIASEC”** sẽ sáng lên → bấm để xem.

Có thể nhắc nhẹ:

> “Nếu câu nào các em phân vân, chọn mức **3 – Phân vân / Không chắc**.
> Nếu thấy rất giống mình thì chọn **4 hoặc 5**.
> Cố gắng trả lời đúng với bản thân hiện tại, không phải ‘con người lý tưởng’ mà em muốn trở thành.”

### 5.4. Trao đổi sau khi xem kết quả

Sau khi học sinh làm xong, giáo viên hướng dẫn sang tab **“Kết quả RIASEC”**:

* Giải thích **mã Top 3**:

  * Ví dụ: `ISA` = Investigative – Social – Artistic.
* Hỏi học sinh:

  * “Các em thấy kết quả có giống mình không?”
  * “Điều gì làm em bất ngờ nhất trong kết quả?”
  * “Trong danh sách ngành nghề gợi ý, em thấy ngành nào mình muốn tìm hiểu thêm?”

Gợi ý một số câu hỏi thảo luận nhóm:

* “Bạn thấy nhóm tính cách nào của mình đúng nhất? Vì sao?”
* “Có ngành nào trong gợi ý bạn đã từng nghĩ tới chưa?”
* “Bạn có muốn tìm thêm thông tin về 1–2 ngành nổi bật trong kết quả không?”

Nhắc lại:

> “Kết quả RIASEC là **một nguồn tham khảo**, không bắt buộc các em phải chọn đúng y như vậy.
> Nhưng nếu các em thấy ‘đúng khá nhiều’, thì đó là một tín hiệu tốt để các em **tìm hiểu sâu hơn** về những ngành đó.”

### 5.5. Hướng dẫn lưu/xuất kết quả

* Học sinh:

  * Bấm **“Lưu vào lịch sử trên máy”** → giúp lưu kết quả (đặc biệt nếu học sinh dùng chung 1 máy phòng máy).
  * Bấm **“Tải file kết quả (.txt)”** → file cá nhân, có thể gửi cho phụ huynh, giáo viên, hoặc lưu trong Google Drive.
* Giáo viên:

  * Vào tab **Admin** (nhập mật khẩu).
  * Lọc theo **Lớp** (VD: `10A1`) và **khoảng ngày** (VD: từ ngày tổ chức buổi hướng nghiệp).
  * Bấm **“Xuất toàn bộ lịch sử (.csv)”** để tải file dữ liệu → mở bằng Excel để thống kê, làm báo cáo, hoặc theo dõi.

---

## 6. Gợi ý nâng cấp trong tương lai

* Thêm **bản rút gọn 30–36 câu** dùng cho workshop nhanh 20–30 phút.
* Hỗ trợ **nhiều ngôn ngữ** (Việt – Anh).
* Thêm **mã QR riêng cho từng trường** (pre-config brand).
* Kết nối với hệ thống tư vấn/hồ sơ học sinh (nếu có backend riêng).

---

Nếu bạn triển khai ở nhiều trường THPT khác nhau, có thể tạo một repo template, mỗi trường fork về và chỉ cần:

* Thay logo + tên trường trong `brandConfig`.
* Đổi mật khẩu `ADMIN_PASSWORD`.

Là đã có một “cổng trắc nghiệm hướng nghiệp” mang thương hiệu riêng của từng trường.
