// ==============================
// Constants & Global State
// ==============================

const ADMIN_PASSWORD = "giaovien2025";

const STORAGE_KEYS = {
    HISTORY: "riasecHistory_v1",
    DRAFT: "riasecDraft_v1",
    GH_CONFIG: "riasecGhConfig_v1"
};

let lastResult = null;
let barChart = null;
let radarChart = null;

// ==============================
// Data: Questions & Meta
// ==============================

/**
 * 60 câu hỏi – 10 câu cho mỗi nhóm R, I, A, S, E, C
 * id: 1..60, type: "R" | "I" | ...
 */
const questions = [
    // R – Realistic
    { id: 1, type: "R", text: "Tôi thích sửa chữa hoặc lắp ráp các thiết bị, đồ vật." },
    { id: 2, type: "R", text: "Tôi thích tham gia các hoạt động ngoài trời, vận động tay chân." },
    { id: 3, type: "R", text: "Tôi cảm thấy hứng thú với máy móc, công cụ hoặc thiết bị kỹ thuật." },
    { id: 4, type: "R", text: "Tôi thích làm việc bằng tay hơn là chỉ ngồi trước bàn giấy." },
    { id: 5, type: "R", text: "Tôi thấy việc sửa chữa, bảo trì thiết bị là rất thú vị." },
    { id: 6, type: "R", text: "Tôi thích các môn học liên quan đến công nghệ, kỹ thuật, thực hành." },
    { id: 7, type: "R", text: "Tôi thích quan sát cách máy móc hoạt động và tìm hiểu cấu tạo của chúng." },
    { id: 8, type: "R", text: "Tôi không ngại bẩn tay khi làm việc hoặc tham gia các hoạt động thực tế." },
    { id: 9, type: "R", text: "Tôi thường là người chủ động giúp sửa đồ trong gia đình hoặc lớp học." },
    { id: 10, type: "R", text: "Tôi muốn làm việc trong môi trường có công cụ, máy móc, thiết bị." },

    // I – Investigative
    { id: 11, type: "I", text: "Tôi thích suy nghĩ, phân tích và tìm lời giải cho các vấn đề khó." },
    { id: 12, type: "I", text: "Tôi hứng thú với khoa học, công nghệ hoặc nghiên cứu." },
    { id: 13, type: "I", text: "Tôi thường đặt câu hỏi “tại sao?” và muốn hiểu bản chất vấn đề." },
    { id: 14, type: "I", text: "Tôi thích làm việc với số liệu, biểu đồ, dữ liệu." },
    { id: 15, type: "I", text: "Tôi thích các môn như Toán, Lý, Hóa, Tin học hoặc Sinh (tùy sở thích)." },
    { id: 16, type: "I", text: "Tôi cảm thấy hứng thú khi đọc hoặc xem tài liệu khoa học, khám phá." },
    { id: 17, type: "I", text: "Tôi muốn hiểu nguyên lý hoạt động của mọi thứ xung quanh mình." },
    { id: 18, type: "I", text: "Tôi thích làm thí nghiệm hoặc thực hiện các dự án nghiên cứu nhỏ." },
    { id: 19, type: "I", text: "Tôi thường suy nghĩ rất kỹ trước khi đưa ra kết luận." },
    { id: 20, type: "I", text: "Tôi muốn làm việc trong lĩnh vực có tính logic và phân tích cao." },

    // A – Artistic
    { id: 21, type: "A", text: "Tôi thích vẽ, thiết kế, dựng hình, chụp ảnh hoặc quay video." },
    { id: 22, type: "A", text: "Tôi yêu thích âm nhạc, phim ảnh, văn học hoặc nghệ thuật biểu diễn." },
    { id: 23, type: "A", text: "Tôi thích tạo ra điều gì đó mới mẻ, độc đáo theo phong cách riêng của mình." },
    { id: 24, type: "A", text: "Tôi không thích bị gò bó trong các quy tắc quá cứng nhắc." },
    { id: 25, type: "A", text: "Tôi thích viết lách, làm thơ, viết truyện hoặc sáng tác nội dung." },
    { id: 26, type: "A", text: "Tôi thường để ý đến màu sắc, bố cục, thiết kế của mọi thứ xung quanh." },
    { id: 27, type: "A", text: "Tôi muốn thể hiện cảm xúc và ý tưởng của mình qua nghệ thuật." },
    { id: 28, type: "A", text: "Tôi thích thử những cách làm mới thay vì làm theo lối mòn." },
    { id: 29, type: "A", text: "Tôi thấy hứng thú với các công việc tự do, sáng tạo nội dung." },
    { id: 30, type: "A", text: "Tôi muốn làm việc trong môi trường năng động, sáng tạo." },

    // S – Social
    { id: 31, type: "S", text: "Tôi thích giúp đỡ, hỗ trợ hoặc lắng nghe người khác." },
    { id: 32, type: "S", text: "Tôi cảm thấy vui khi người khác hiểu bài nhờ tôi giảng lại." },
    { id: 33, type: "S", text: "Tôi dễ đồng cảm với cảm xúc, khó khăn của người khác." },
    { id: 34, type: "S", text: "Tôi thích tham gia các hoạt động tình nguyện, cộng đồng." },
    { id: 35, type: "S", text: "Tôi thường là người mà bạn bè hay tìm đến để tâm sự, xin lời khuyên." },
    { id: 36, type: "S", text: "Tôi thích làm việc nhóm và cùng nhau đạt được mục tiêu chung." },
    { id: 37, type: "S", text: "Tôi quan tâm đến những ngành giúp cải thiện cuộc sống người khác." },
    { id: 38, type: "S", text: "Tôi muốn hiểu tâm lý, suy nghĩ và hành vi của con người." },
    { id: 39, type: "S", text: "Tôi thấy mình kiên nhẫn khi giải thích hoặc hướng dẫn cho người khác." },
    { id: 40, type: "S", text: "Tôi muốn làm việc trong môi trường có nhiều sự tương tác giữa con người với con người." },

    // E – Enterprising
    { id: 41, type: "E", text: "Tôi thích thuyết trình, nói trước đám đông hoặc dẫn dắt nhóm." },
    { id: 42, type: "E", text: "Tôi quan tâm đến kinh doanh, khởi nghiệp hoặc tạo ra dự án riêng." },
    { id: 43, type: "E", text: "Tôi thích đưa ra ý tưởng mới và thuyết phục người khác làm theo." },
    { id: 44, type: "E", text: "Tôi sẵn sàng chấp nhận rủi ro có tính toán để đạt mục tiêu." },
    { id: 45, type: "E", text: "Tôi thích làm việc trong môi trường cạnh tranh, năng động." },
    { id: 46, type: "E", text: "Tôi thấy mình có khả năng lãnh đạo hoặc điều phối công việc." },
    { id: 47, type: "E", text: "Tôi quan tâm đến các ngành như kinh doanh, marketing, quản trị." },
    { id: 48, type: "E", text: "Tôi thích thương lượng, đàm phán hoặc “chốt deal”." },
    { id: 49, type: "E", text: "Tôi không ngại đứng ra chịu trách nhiệm cho quyết định của mình." },
    { id: 50, type: "E", text: "Tôi muốn công việc của mình tạo ra ảnh hưởng rộng, tác động đến nhiều người." },

    // C – Conventional
    { id: 51, type: "C", text: "Tôi thích sự gọn gàng, ngăn nắp và có trật tự." },
    { id: 52, type: "C", text: "Tôi cảm thấy yên tâm khi công việc có quy trình, hướng dẫn rõ ràng." },
    { id: 53, type: "C", text: "Tôi thích làm việc với số liệu, bảng biểu hoặc hồ sơ giấy tờ." },
    { id: 54, type: "C", text: "Tôi thường lập kế hoạch, to-do list để quản lý việc cần làm." },
    { id: 55, type: "C", text: "Tôi chú ý đến chi tiết và ít khi bỏ sót thông tin quan trọng." },
    { id: 56, type: "C", text: "Tôi thấy thoải mái khi làm những công việc đều đặn, ổn định." },
    { id: 57, type: "C", text: "Tôi thích các công việc liên quan đến quản lý hồ sơ, tài chính, dữ liệu." },
    { id: 58, type: "C", text: "Tôi thường là người giữ gìn kỷ luật, nội quy trong nhóm/lớp." },
    { id: 59, type: "C", text: "Tôi cảm thấy khó chịu khi mọi thứ quá lộn xộn, thiếu tổ chức." },
    { id: 60, type: "C", text: "Tôi muốn làm việc trong môi trường văn phòng, có hệ thống rõ ràng." }
];

// Meta cho từng nhóm
const riasecMeta = {
    R: {
        code: "R",
        name: "Realistic – Thực tế",
        desc: "Nhóm R yêu thích hoạt động thực tế, máy móc, kỹ thuật, thích “làm” hơn là chỉ nói.",
        traits: [
            "Thích sửa chữa, lắp ráp, vận hành thiết bị",
            "Ưa chuộng môi trường làm việc thực tế, ít giấy tờ",
            "Thường kiên nhẫn, tỉ mỉ khi thao tác trên vật dụng, máy móc"
        ],
        careers: [
            "Kỹ thuật cơ khí",
            "Kỹ thuật điện – điện tử",
            "Công nghệ ô tô",
            "Kỹ thuật xây dựng",
            "Kỹ thuật điều khiển & tự động hóa",
            "Kỹ thuật viễn thông",
            "Kỹ thuật công trình giao thông",
            "Kỹ thuật năng lượng",
            "Quản lý công nghiệp (hướng kỹ thuật)",
            "Kỹ thuật môi trường"
        ],
        pathways: [
            {
                track: "Khối A / A1",
                majors: ["Kỹ thuật cơ khí", "Kỹ thuật điện – điện tử", "Công nghệ ô tô"],
                schools: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Giao thông Vận tải"]
            }
        ]
    },
    I: {
        code: "I",
        name: "Investigative – Nghiên cứu",
        desc: "Nhóm I thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật, sự việc.",
        traits: [
            "Thích đặt câu hỏi “vì sao?”, “như thế nào?”",
            "Ưa suy luận logic, làm việc với số liệu, mô hình",
            "Thường kiên trì trong việc tìm lời giải cho vấn đề khó"
        ],
        careers: [
            "Khoa học máy tính",
            "Kỹ thuật phần mềm",
            "Khoa học dữ liệu",
            "Khoa học vật liệu",
            "Công nghệ sinh học",
            "Y khoa, Dược học",
            "Toán ứng dụng",
            "Vật lý kỹ thuật",
            "Phân tích dữ liệu (Data Analyst)",
            "Trí tuệ nhân tạo (AI Engineer – lộ trình dài hạn)"
        ],
        pathways: [
            {
                track: "Khối A / A1 / D",
                majors: ["Khoa học máy tính", "Khoa học dữ liệu", "Kỹ thuật phần mềm"],
                schools: ["ĐH Công nghệ – ĐHQG HN", "ĐH CNTT – ĐHQG HCM", "ĐH FPT"]
            }
        ]
    },
    A: {
        code: "A",
        name: "Artistic – Nghệ thuật",
        desc: "Nhóm A yêu thích sự sáng tạo, tự do thể hiện ý tưởng, cảm xúc qua nhiều hình thức.",
        traits: [
            "Nhạy cảm với màu sắc, âm thanh, hình ảnh, ngôn từ",
            "Không thích bị bó buộc bởi quy tắc cứng nhắc",
            "Thường có nhiều ý tưởng mới, độc đáo"
        ],
        careers: [
            "Thiết kế đồ họa",
            "Thiết kế thời trang",
            "Kiến trúc",
            "Truyền thông đa phương tiện",
            "Marketing sáng tạo",
            "Sản xuất nội dung (Content Creator)",
            "Đạo diễn, dựng phim",
            "Âm nhạc, biểu diễn nghệ thuật",
            "Thiết kế UI/UX",
            "Copywriter"
        ],
        pathways: [
            {
                track: "Khối V / H / D",
                majors: ["Kiến trúc", "Thiết kế đồ họa", "Truyền thông đa phương tiện"],
                schools: ["ĐH Kiến trúc HN/HCM", "ĐH Mỹ thuật CN", "ĐH Văn Lang", "RMIT (Design)"]
            }
        ]
    },
    S: {
        code: "S",
        name: "Social – Xã hội",
        desc: "Nhóm S yêu thích làm việc với con người, giúp đỡ, hỗ trợ và kết nối cộng đồng.",
        traits: [
            "Dễ đồng cảm, biết lắng nghe và chia sẻ",
            "Thích giảng giải, hướng dẫn, hỗ trợ người khác",
            "Thường tham gia các hoạt động đội nhóm, tình nguyện"
        ],
        careers: [
            "Giáo viên, giảng viên",
            "Tâm lý học, tham vấn học đường",
            "Công tác xã hội",
            "Quản lý giáo dục",
            "Điều dưỡng, y tá",
            "Nhân sự (HR)",
            "Đào tạo & phát triển (L&D)",
            "Tư vấn viên giáo dục, hướng nghiệp",
            "Chuyên viên dịch vụ khách hàng",
            "Huấn luyện viên, coach"
        ],
        pathways: [
            {
                track: "Khối C / D / B",
                majors: ["Tâm lý học", "Công tác xã hội", "Sư phạm"],
                schools: ["ĐH KHXH&NV", "ĐH Sư phạm", "Học viện Phụ nữ VN"]
            }
        ]
    },
    E: {
        code: "E",
        name: "Enterprising – Doanh nghiệp",
        desc: "Nhóm E thích lãnh đạo, kinh doanh, thuyết phục và tạo ảnh hưởng.",
        traits: [
            "Tự tin, dám đứng ra chịu trách nhiệm",
            "Thích thuyết trình, đàm phán, thương lượng",
            "Hứng thú với kinh doanh, khởi nghiệp, quản lý"
        ],
        careers: [
            "Quản trị kinh doanh",
            "Marketing",
            "Tài chính – Ngân hàng",
            "Kinh doanh quốc tế",
            "Logistics & Supply Chain",
            "Quản trị nhân lực",
            "Bất động sản",
            "Sales B2B/B2C",
            "Khởi nghiệp (Startup)",
            "Quản lý dự án"
        ],
        pathways: [
            {
                track: "Khối A / D",
                majors: ["Quản trị kinh doanh", "Marketing", "Tài chính – Ngân hàng"],
                schools: ["ĐH Kinh tế Quốc dân", "FTU", "UEH", "NEU", "ĐH Kinh tế – ĐHQG HCM"]
            }
        ]
    },
    C: {
        code: "C",
        name: "Conventional – Truyền thống",
        desc: "Nhóm C yêu thích sự ổn định, trật tự, quy trình và công việc có cấu trúc rõ ràng.",
        traits: [
            "Chú trọng chi tiết, cẩn thận, chính xác",
            "Thích làm việc với số liệu, hồ sơ, hệ thống",
            "Ưa môi trường có quy định, quy trình ổn định"
        ],
        careers: [
            "Kế toán – Kiểm toán",
            "Tài chính – Thuế",
            "Ngân hàng (nghiệp vụ)",
            "Thư ký, trợ lý",
            "Quản trị văn phòng",
            "Chuyên viên hành chính – nhân sự",
            "Chuyên viên dữ liệu, quản trị hệ thống",
            "Thống kê",
            "Phân tích nghiệp vụ (Business Analyst – lộ trình dài hạn)",
            "Quản lý hồ sơ, lưu trữ"
        ],
        pathways: [
            {
                track: "Khối A / D",
                majors: ["Kế toán", "Tài chính – Ngân hàng", "Quản trị văn phòng"],
                schools: ["Học viện Tài chính", "HV Ngân hàng", "UEH", "NEU"]
            }
        ]
    }
};

// ==============================
// DOM Helpers & Initialization
// ==============================

const navTabs = document.querySelectorAll(".nav-tab");
const sections = document.querySelectorAll(".section");

const studentNameInput = document.getElementById("student-name");
const studentClassInput = document.getElementById("student-class");
const studentIdInput = document.getElementById("student-id");
const studentEmailInput = document.getElementById("student-email");

const questionsContainer = document.getElementById("questions-container");
const progressCount = document.getElementById("progress-count");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const progressBarBg = document.getElementById("progress-bar-bg");

const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");

const noResultMessage = document.getElementById("no-result-message");
const resultContent = document.getElementById("result-content");
const resultStudentInfo = document.getElementById("result-student-info");
const resultCodeEl = document.getElementById("result-code");
const resultOverallEl = document.getElementById("result-overall");
const top3Container = document.getElementById("top3-container");
const riasecDetails = document.getElementById("riasec-details");

const saveLocalBtn = document.getElementById("save-local-btn");
const downloadTxtBtn = document.getElementById("download-txt-btn");
const sendGithubBtn = document.getElementById("send-github-btn");

const adminLocked = document.getElementById("admin-locked");
const adminContent = document.getElementById("admin-content");
const adminPwInput = document.getElementById("admin-password-input");
const adminLoginBtn = document.getElementById("admin-login-btn");

const historyTableBody = document.getElementById("history-table-body");
const filterClassInput = document.getElementById("filter-class");
const filterFromInput = document.getElementById("filter-from");
const filterToInput = document.getElementById("filter-to");
const applyFilterBtn = document.getElementById("apply-filter-btn");
const clearFilterBtn = document.getElementById("clear-filter-btn");
const exportCsvBtn = document.getElementById("export-csv-btn");
const clearHistoryBtn = document.getElementById("clear-history-btn");

const ghOwnerInput = document.getElementById("gh-owner");
const ghRepoInput = document.getElementById("gh-repo");
const ghTokenInput = document.getElementById("gh-token");
const ghPassphraseInput = document.getElementById("gh-passphrase");
const saveGhConfigBtn = document.getElementById("save-gh-config-btn");
const clearGhConfigBtn = document.getElementById("clear-gh-config-btn");
const ghConfigStatus = document.getElementById("gh-config-status");

// ==============================
// Utility Functions
// ==============================

function sanitizeInput(str) {
    if (!str) return "";
    return str.trim().replace(/[<>]/g, "").slice(0, 200);
}

function validateEmail(email) {
    if (!email) return true; // cho phép bỏ trống
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ensureStudentInfo() {
    const name = studentNameInput.value.trim();
    const cls = studentClassInput.value.trim();
    const email = studentEmailInput.value.trim();

    if (!name) {
        alert("Vui lòng nhập Họ và tên trước khi xem kết quả.");
        studentNameInput.focus();
        return false;
    }
    if (!cls) {
        alert("Vui lòng nhập Lớp trước khi xem kết quả.");
        studentClassInput.focus();
        return false;
    }
    if (email && !validateEmail(email)) {
        alert("Email không hợp lệ. Vui lòng kiểm tra lại.");
        studentEmailInput.focus();
        return false;
    }
    return true;
}

function getAnsweredCount() {
    let count = 0;
    questions.forEach(q => {
        const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
        if (checked) count++;
    });
    return count;
}

function encodeBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

function decodeBase64(str) {
    return decodeURIComponent(escape(atob(str)));
}

function formatDateTime(dtStr) {
    const dt = new Date(dtStr);
    if (Number.isNaN(dt.getTime())) return dtStr;
    return dt.toLocaleString("vi-VN");
}

// ==============================
// Draft Autosave
// ==============================

function saveDraft() {
    const draft = {};
    questions.forEach(q => {
        const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
        if (checked) draft[q.id] = checked.value;
    });
    try {
        localStorage.setItem(STORAGE_KEYS.DRAFT, JSON.stringify(draft));
    } catch (e) {
        console.error("Không thể lưu bản nháp:", e);
    }
}

function loadDraft() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.DRAFT);
        if (!raw) return;
        const draft = JSON.parse(raw);
        Object.entries(draft).forEach(([id, val]) => {
            const radio = document.querySelector(`input[name="q${id}"][value="${val}"]`);
            if (radio) radio.checked = true;
        });
        updateProgress();
    } catch (e) {
        console.error("Không thể tải bản nháp:", e);
    }
}

function clearDraft() {
    try {
        localStorage.removeItem(STORAGE_KEYS.DRAFT);
    } catch (e) {
        console.error("Không thể xóa draft:", e);
    }
}

// ==============================
// Rendering: Questions & Progress
// ==============================

function renderQuestions() {
    questionsContainer.innerHTML = "";
    questions.forEach(q => {
        const wrapper = document.createElement("div");
        wrapper.className = "question-item";

        const textEl = document.createElement("div");
        textEl.className = "question-text";
        textEl.textContent = `${q.id}. ${q.text}`;
        wrapper.appendChild(textEl);

        const optionsRow = document.createElement("div");
        optionsRow.className = "options-row";

        const labels = [
            "Hoàn toàn không đồng ý",
            "Không đồng ý",
            "Phân vân",
            "Đồng ý",
            "Rất đồng ý"
        ];

        for (let value = 1; value <= 5; value++) {
            const pill = document.createElement("label");
            pill.className = "option-pill";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${q.id}`;
            input.value = String(value);

            input.addEventListener("change", () => {
                updateProgress();
                saveDraft();
            });

            pill.appendChild(input);
            const span = document.createElement("span");
            span.textContent = `${value} – ${labels[value - 1]}`;
            pill.appendChild(span);

            optionsRow.appendChild(pill);
        }

        wrapper.appendChild(optionsRow);
        questionsContainer.appendChild(wrapper);
    });
}

function updateProgress() {
    const answered = getAnsweredCount();
    const total = questions.length;
    const percent = Math.round((answered / total) * 100);

    progressCount.textContent = `Đã hoàn thành: ${answered}/${total} câu`;
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    if (progressBarBg) {
        progressBarBg.setAttribute("aria-valuenow", String(percent));
    }

    submitBtn.disabled = answered < total;
}

// ==============================
// Scoring & Results
// ==============================

function calculateScores() {
    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    questions.forEach(q => {
        const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
        if (checked) {
            const v = parseInt(checked.value, 10) || 0;
            scores[q.type] += v;
        }
    });
    return scores;
}

function calculateConfidence(scores) {
    const values = Object.values(scores).sort((a, b) => b - a);
    if (values.length < 2) return { level: "Không xác định", note: "" };
    const gap = values[0] - values[1];

    if (gap > 10) {
        return {
            level: "Cao",
            note: "Nhóm tính cách nổi bật khá rõ ràng so với nhóm đứng thứ 2."
        };
    }
    if (gap > 5) {
        return {
            level: "Trung bình",
            note: "Có xu hướng nổi bật nhưng vẫn gần với nhóm đứng thứ 2."
        };
    }
    return {
        level: "Thấp",
        note: "Các nhóm tính cách khá cân bằng, nên kết hợp thêm quan sát thực tế & trao đổi với thầy cô, phụ huynh."
    };
}

function buildResultObject(scores) {
    const now = new Date().toISOString();

    // Sắp xếp nhóm theo điểm
    const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top3 = entries.slice(0, 3);
    const codeTop3 = top3.map(([k]) => k).join("");
    const confidence = calculateConfidence(scores);

    const name = sanitizeInput(studentNameInput.value);
    const cls = sanitizeInput(studentClassInput.value);
    const sid = sanitizeInput(studentIdInput.value);
    const email = sanitizeInput(studentEmailInput.value);

    return {
        timestamp: now,
        student: {
            name,
            class: cls,
            id: sid,
            email
        },
        scores,
        top3,
        codeTop3,
        confidence
    };
}

function renderCharts(scores) {
    const ctxBar = document.getElementById("bar-chart");
    const ctxRadar = document.getElementById("radar-chart");

    const labels = ["R", "I", "A", "S", "E", "C"];
    const data = labels.map(k => scores[k]);

    if (barChart) barChart.destroy();
    if (radarChart) radarChart.destroy();

    barChart = new Chart(ctxBar, {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "Điểm RIASEC",
                data
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    radarChart = new Chart(ctxRadar, {
        type: "radar",
        data: {
            labels,
            datasets: [{
                label: "Hồ sơ RIASEC",
                data
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: { beginAtZero: true }
            }
        }
    });
}

function renderResultUI(result) {
    const { student, scores, top3, codeTop3, confidence } = result;

    noResultMessage.classList.add("hidden");
    resultContent.classList.remove("hidden");

    const infoParts = [];
    if (student.name) infoParts.push(student.name);
    if (student.class) infoParts.push(`Lớp ${student.class}`);
    if (student.id) infoParts.push(`Mã HS: ${student.id}`);
    if (student.email) infoParts.push(student.email);

    resultStudentInfo.textContent = infoParts.join(" · ") || "Thông tin học sinh chưa được điền đầy đủ.";

    const codeReadable = top3.map(([k]) => riasecMeta[k].name.split("–")[0].trim()).join(" – ");
    resultCodeEl.textContent = `Mã RIASEC nổi bật: ${codeTop3} (${codeReadable})`;

    const scoresText = Object.entries(scores)
        .map(([k, v]) => `${k}: ${v}`)
        .join(" · ");
    resultOverallEl.textContent =
        `Tổng điểm các nhóm: ${scoresText}. ` +
        `Độ phân biệt kết quả: ${confidence.level}. ${confidence.note}`;

    renderCharts(scores);

    // Top 3 chi tiết
    top3Container.innerHTML = "";
    top3.forEach(([k, v], idx) => {
        const meta = riasecMeta[k];
        const item = document.createElement("div");
        item.className = "top3-item";
        item.innerHTML = `
            <div class="top3-item-title">#${idx + 1} – ${meta.name} (${k}) – ${v} điểm</div>
            <div class="small-muted">${meta.desc}</div>
        `;
        top3Container.appendChild(item);
    });

    // Mô tả đầy đủ 6 nhóm
    riasecDetails.innerHTML = "";
    ["R", "I", "A", "S", "E", "C"].forEach(code => {
        const meta = riasecMeta[code];
        const block = document.createElement("div");
        block.className = "riasec-detail-block";

        const title = document.createElement("div");
        title.innerHTML = `<span class="riasec-code-tag">${code}</span> <strong>${meta.name}</strong>`;
        block.appendChild(title);

        const desc = document.createElement("div");
        desc.className = "small-muted";
        desc.textContent = meta.desc;
        block.appendChild(desc);

        const traits = document.createElement("ul");
        traits.className = "checklist";
        meta.traits.forEach(t => {
            const li = document.createElement("li");
            li.textContent = t;
            traits.appendChild(li);
        });
        block.appendChild(traits);

        const careersTitle = document.createElement("div");
        careersTitle.style.marginTop = "4px";
        careersTitle.innerHTML = "<strong>Ngành nghề gợi ý:</strong>";
        block.appendChild(careersTitle);

        const careersList = document.createElement("div");
        careersList.className = "small-muted";
        careersList.textContent = meta.careers.join(", ");
        block.appendChild(careersList);

        if (meta.pathways && meta.pathways.length) {
            const pwTitle = document.createElement("div");
            pwTitle.style.marginTop = "4px";
            pwTitle.innerHTML = "<strong>Lộ trình tham khảo:</strong>";
            block.appendChild(pwTitle);

            meta.pathways.forEach(pw => {
                const div = document.createElement("div");
                div.className = "small-muted";
                div.textContent =
                    `• ${pw.track}: ${pw.majors.join(", ")} – trường gợi ý: ${pw.schools.join(", ")}`;
                block.appendChild(div);
            });
        }

        riasecDetails.appendChild(block);
    });
}

// ==============================
// History (localStorage)
// ==============================

function loadHistory() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch (e) {
        console.error("Không thể tải lịch sử:", e);
        return [];
    }
}

function saveHistoryList(list) {
    try {
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(list));
    } catch (e) {
        console.error("Không thể lưu lịch sử:", e);
    }
}

function appendHistory(result) {
    const list = loadHistory();
    list.push(result);
    saveHistoryList(list);
    renderHistoryTable(list);
}

function renderHistoryTable(list) {
    historyTableBody.innerHTML = "";
    list.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${formatDateTime(item.timestamp)}</td>
            <td>${item.student?.name || ""}</td>
            <td>${item.student?.class || ""}</td>
            <td>${item.student?.id || ""}</td>
            <td>${item.student?.email || ""}</td>
            <td>${item.codeTop3 || ""}</td>
        `;
        historyTableBody.appendChild(tr);
    });
}

function applyHistoryFilter() {
    const list = loadHistory();
    const cls = filterClassInput.value.trim().toLowerCase();
    const from = filterFromInput.value;
    const to = filterToInput.value;

    const filtered = list.filter(item => {
        let ok = true;
        if (cls) {
            ok = ok && (item.student?.class || "").toLowerCase().includes(cls);
        }
        if (from) {
            ok = ok && item.timestamp >= from;
        }
        if (to) {
            // include the whole day by adding 'T23:59:59'
            ok = ok && item.timestamp <= `${to}T23:59:59`;
        }
        return ok;
    });

    renderHistoryTable(filtered);
}

function exportHistoryToCsv() {
    const list = loadHistory();
    if (!list.length) {
        alert("Chưa có dữ liệu lịch sử để xuất.");
        return;
    }

    const header = [
        "timestamp",
        "name",
        "class",
        "id",
        "email",
        "codeTop3",
        "scores_R",
        "scores_I",
        "scores_A",
        "scores_S",
        "scores_E",
        "scores_C"
    ];

    const rows = list.map(item => [
        item.timestamp,
        item.student?.name || "",
        item.student?.class || "",
        item.student?.id || "",
        item.student?.email || "",
        item.codeTop3 || "",
        item.scores?.R ?? "",
        item.scores?.I ?? "",
        item.scores?.A ?? "",
        item.scores?.S ?? "",
        item.scores?.E ?? "",
        item.scores?.C ?? ""
    ]);

    const lines = [header.join(",")].concat(rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")));
    const csv = lines.join("\r\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `riasec_history_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ==============================
// Download TXT
// ==============================

function buildResultText(result) {
    const { student, scores, top3, codeTop3, confidence } = result;
    const lines = [];

    lines.push("KẾT QUẢ TRẮC NGHIỆM HOLLAND RIASEC");
    lines.push("CBB & Family Career Center");
    lines.push("----------------------------------------");
    lines.push(`Thời gian: ${formatDateTime(result.timestamp)}`);
    lines.push(`Họ tên: ${student.name || ""}`);
    lines.push(`Lớp: ${student.class || ""}`);
    lines.push(`Mã HS: ${student.id || ""}`);
    lines.push(`Email: ${student.email || ""}`);
    lines.push("");

    lines.push(`Mã RIASEC nổi bật: ${codeTop3}`);
    const scoresText = Object.entries(scores).map(([k, v]) => `${k}: ${v}`).join(" | ");
    lines.push(`Tổng điểm các nhóm: ${scoresText}`);
    lines.push(`Độ phân biệt kết quả: ${confidence.level} – ${confidence.note}`);
    lines.push("");

    lines.push("Top 3 nhóm tính cách:");
    top3.forEach(([k, v], idx) => {
        const meta = riasecMeta[k];
        lines.push(`#${idx + 1} – ${meta.name} (${k}) – ${v} điểm`);
        lines.push(`  Mô tả: ${meta.desc}`);
        lines.push("");
    });

    lines.push("Mô tả chi tiết 6 nhóm RIASEC và ngành nghề gợi ý:");
    ["R", "I", "A", "S", "E", "C"].forEach(code => {
        const meta = riasecMeta[code];
        lines.push(`--- ${meta.name} (${code}) ---`);
        lines.push(`Mô tả: ${meta.desc}`);
        lines.push("Đặc điểm nổi bật:");
        meta.traits.forEach(t => lines.push(`- ${t}`));
        lines.push("Ngành nghề tham khảo:");
        meta.careers.forEach(c => lines.push(`- ${c}`));
        lines.push("");
    });

    lines.push("Lưu ý: Kết quả chỉ mang tính tham khảo định hướng. Hãy kết hợp với kết quả học tập, điều kiện gia đình");
    lines.push("và trao đổi thêm với phụ huynh, giáo viên để đưa ra quyết định phù hợp.");
    return lines.join("\r\n");
}

function downloadResultTxt(result) {
    const text = buildResultText(result);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    const safeName = (result.student.name || "riasec")
        .replace(/[^\w\-]+/g, "_")
        .slice(0, 40);

    a.href = url;
    a.download = `riasec_${safeName}_${result.timestamp.slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ==============================
// GitHub Config & Upload
// ==============================

function loadGhConfig() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.GH_CONFIG);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        console.error("Không thể tải cấu hình GitHub:", e);
        return null;
    }
}

function saveGhConfig(cfg) {
    try {
        localStorage.setItem(STORAGE_KEYS.GH_CONFIG, JSON.stringify(cfg));
        ghConfigStatus.textContent = "Đã lưu cấu hình GitHub trên máy này.";
    } catch (e) {
        console.error("Không thể lưu cấu hình GitHub:", e);
        ghConfigStatus.textContent = "Không thể lưu cấu hình (localStorage lỗi).";
    }
}

async function githubGetContent(owner, repo, path, token) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const res = await fetch(url, {
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer ${token}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });

    if (res.status === 404) {
        return null; // file chưa tồn tại
    }

    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`GitHub GET failed: ${res.status} - ${txt}`);
    }

    return res.json();
}

async function githubPutFile(owner, repo, path, token, contentText, shaPrev) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const maxRetries = 3;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        const body = {
            message: "Append RIASEC result " + new Date().toISOString(),
            content: encodeBase64(contentText)
        };
        if (shaPrev) body.sha = shaPrev;

        try {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": `Bearer ${token}`,
                    "X-GitHub-Api-Version": "2022-11-28",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const remaining = res.headers.get("X-RateLimit-Remaining");
            const resetTs = res.headers.get("X-RateLimit-Reset");

            if (res.status === 403 && remaining === "0") {
                console.warn(
                    "[RIASEC] Hit GitHub rate limit. Reset at:",
                    resetTs ? new Date(+resetTs * 1000).toLocaleString("vi-VN") : "unknown"
                );
                throw new Error("GitHub rate limit exceeded");
            }

            if (!res.ok) {
                const txt = await res.text();
                throw new Error(`GitHub PUT failed: ${res.status} - ${txt}`);
            }

            return await res.json();
        } catch (e) {
            if (attempt === maxRetries - 1) {
                throw e;
            }
            await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
        }
    }
}

function encryptResultForGitHub(result, passphrase) {
    const plain = JSON.stringify(result);
    const cipher = CryptoJS.AES.encrypt(plain, passphrase).toString();
    return cipher;
}

async function sendResultToGithub({ silentIfNoConfig = true, silentOnSuccess = true } = {}) {
    const cfg = loadGhConfig();
    if (!cfg || !cfg.owner || !cfg.repo || !cfg.token || !cfg.passphrase) {
        if (!silentIfNoConfig) {
            alert("Chưa cấu hình GitHub đầy đủ trong tab Admin (owner, repo, token, passphrase).");
        }
        return;
    }
    if (!lastResult) {
        if (!silentIfNoConfig) {
            alert("Chưa có kết quả để gửi lên GitHub.");
        }
        return;
    }

    const owner = cfg.owner;
    const repo = cfg.repo;
    const token = cfg.token;
    const passphrase = cfg.passphrase;

    const today = new Date().toISOString().slice(0, 10);
    const path = `data/riasec-${today}.jsonl`;

    const cipher = encryptResultForGitHub(lastResult, passphrase);
    const line = JSON.stringify({ ts: lastResult.timestamp, cipher }) + "\n";

    // Đọc file hiện tại (nếu có) → append
    let prevSha = null;
    let newContentText = line;

    try {
        const existing = await githubGetContent(owner, repo, path, token);
        if (existing && existing.content) {
            const oldText = decodeBase64(existing.content);
            newContentText = oldText + line;
            prevSha = existing.sha;
        }
        await githubPutFile(owner, repo, path, token, newContentText, prevSha);
        if (!silentOnSuccess) {
            alert("Đã gửi kết quả lên GitHub (đã mã hóa).");
        }
    } catch (e) {
        console.error("Lỗi khi gửi lên GitHub:", e);
        if (!silentIfNoConfig) {
            alert("Không thể gửi lên GitHub: " + e.message);
        }
    }
}

// ==============================
// Navigation & Admin
// ==============================

navTabs.forEach(btn => {
    btn.addEventListener("click", () => {
        navTabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const targetId = btn.dataset.target;
        sections.forEach(sec => {
            if (sec.id === targetId) sec.classList.add("visible");
            else sec.classList.remove("visible");
        });
    });
});

adminLoginBtn.addEventListener("click", () => {
    const pw = adminPwInput.value;
    if (pw === ADMIN_PASSWORD) {
        adminLocked.classList.add("hidden");
        adminContent.classList.remove("hidden");
    } else {
        alert("Mật khẩu Admin không đúng.");
    }
});

// History buttons
applyFilterBtn.addEventListener("click", applyHistoryFilter);
clearFilterBtn.addEventListener("click", () => {
    filterClassInput.value = "";
    filterFromInput.value = "";
    filterToInput.value = "";
    renderHistoryTable(loadHistory());
});

exportCsvBtn.addEventListener("click", exportHistoryToCsv);
clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Bạn chắc chắn muốn xóa toàn bộ lịch sử trên máy này?")) {
        saveHistoryList([]);
        renderHistoryTable([]);
    }
});

// GitHub config buttons
saveGhConfigBtn.addEventListener("click", () => {
    const cfg = {
        owner: ghOwnerInput.value.trim(),
        repo: ghRepoInput.value.trim() || "riasec-data-storage",
        token: ghTokenInput.value.trim(),
        passphrase: ghPassphraseInput.value.trim()
    };
    if (!cfg.owner || !cfg.repo || !cfg.token || !cfg.passphrase) {
        ghConfigStatus.textContent = "Vui lòng điền đầy đủ Owner, Repo, Token và Passphrase.";
        return;
    }
    saveGhConfig(cfg);
});

clearGhConfigBtn.addEventListener("click", () => {
    if (!confirm("Xóa toàn bộ cấu hình GitHub trên máy này?")) return;
    localStorage.removeItem(STORAGE_KEYS.GH_CONFIG);
    ghOwnerInput.value = "";
    ghRepoInput.value = "";
    ghTokenInput.value = "";
    ghPassphraseInput.value = "";
    ghConfigStatus.textContent = "Đã xóa cấu hình GitHub trên máy này.";
});

// ==============================
// Submit & Reset
// ==============================

submitBtn.addEventListener("click", async () => {
    if (!ensureStudentInfo()) return;

    const answered = getAnsweredCount();
    if (answered < questions.length) {
        const ok = confirm("Bạn chưa trả lời hết 60 câu. Bạn có chắc muốn xem kết quả luôn?");
        if (!ok) return;
    }

    const scores = calculateScores();
    lastResult = buildResultObject(scores);
    renderResultUI(lastResult);

    // Clear draft sau khi hoàn thành
    clearDraft();

    // Lưu vào lịch sử luôn (dành cho giáo viên)
    appendHistory(lastResult);

    // Tự động gửi lên GitHub nếu đã cấu hình
    try {
        await sendResultToGithub({ silentIfNoConfig: true, silentOnSuccess: true });
    } catch (e) {
        console.warn("Tự động gửi GitHub thất bại:", e);
    }

    // Chuyển sang tab Kết quả
    navTabs.forEach(btn => {
        if (btn.dataset.target === "result-section") {
            btn.click();
        }
    });
});

resetBtn.addEventListener("click", () => {
    if (!confirm("Bạn có chắc muốn làm lại từ đầu? Toàn bộ lựa chọn hiện tại sẽ bị xóa.")) return;
    questions.forEach(q => {
        const radios = document.querySelectorAll(`input[name="q${q.id}"]`);
        radios.forEach(r => {
            r.checked = false;
        });
    });
    clearDraft();
    updateProgress();
    lastResult = null;
    noResultMessage.classList.remove("hidden");
    resultContent.classList.add("hidden");
});

// Save local history button
saveLocalBtn.addEventListener("click", () => {
    if (!lastResult) {
        alert("Chưa có kết quả để lưu.");
        return;
    }
    appendHistory(lastResult);
    alert("Đã lưu kết quả vào lịch sử trên máy này.");
});

// Download txt button
downloadTxtBtn.addEventListener("click", () => {
    if (!lastResult) {
        alert("Chưa có kết quả để tải.");
        return;
    }
    downloadResultTxt(lastResult);
});

// Send GitHub button with loading state
if (sendGithubBtn) {
    sendGithubBtn.addEventListener("click", async () => {
        if (!lastResult) {
            alert("Chưa có kết quả để gửi lên GitHub.");
            return;
        }
        const originalHtml = sendGithubBtn.innerHTML;
        sendGithubBtn.disabled = true;
        sendGithubBtn.innerHTML = "⏳ Đang gửi...";

        try {
            await sendResultToGithub({ silentIfNoConfig: false, silentOnSuccess: false });
        } finally {
            sendGithubBtn.disabled = false;
            sendGithubBtn.innerHTML = originalHtml;
        }
    });
}

// ==============================
// Init
// ==============================

function initGhConfigForm() {
    const cfg = loadGhConfig();
    if (!cfg) return;
    ghOwnerInput.value = cfg.owner || "";
    ghRepoInput.value = cfg.repo || "";
    ghTokenInput.value = cfg.token || "";
    ghPassphraseInput.value = cfg.passphrase || "";
    if (cfg.owner && cfg.repo) {
        ghConfigStatus.textContent = `Đang dùng repo: ${cfg.owner}/${cfg.repo}`;
    }
}

function init() {
    renderQuestions();
    updateProgress();
    loadDraft();
    // autosave mỗi 30s
    setInterval(saveDraft, 30000);

    // render history ban đầu
    renderHistoryTable(loadHistory());
    initGhConfigForm();
}

document.addEventListener("DOMContentLoaded", init);
