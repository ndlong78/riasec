// ==============================
// Brand & Admin config (từ config.js)
// ==============================

const BRAND_CONFIG = (window.RIASEC_CONFIG && window.RIASEC_CONFIG.brand) || {
name: "CBB & Family",
tagline: "Cùng con định hướng tương lai",
logo: "logo-cbb.png",
};

const ADMIN_PASSWORD =
(window.RIASEC_CONFIG && window.RIASEC_CONFIG.adminPassword) || "cbbadmin123";

// ==============================
// LocalStorage keys
// ==============================
const LS_RESULTS_KEY = "riasecResults";
const LS_DRAFT_KEY = "riasecDraft";
const LS_THEME_KEY = "riasecTheme";

let isAdminLoggedIn = false;

// ==============================
// RIASEC meta
// ==============================
const riasecMeta = {
R: {
name: "Realistic – Thực tế",
desc: "Thích hoạt động tay chân, máy móc, kỹ thuật, môi trường thực tế hơn là ngồi bàn giấy.",
careers: [
"Kỹ sư cơ khí",
"Thợ sửa chữa ô tô",
"Thợ điện",
"Kỹ thuật viên máy tính (hardware)",
"Kỹ sư điện",
],
},
I: {
name: "Investigative – Nghiên cứu",
desc: "Thích suy nghĩ, phân tích, tìm hiểu nguyên lý, đặt câu hỏi 'vì sao'.",
careers: [
"Nhà khoa học dữ liệu",
"Lập trình viên",
"Kỹ sư phần mềm",
"Nhà sinh học",
"Nhà nghiên cứu hóa học",
],
},
A: {
name: "Artistic – Nghệ thuật",
desc: "Thích sáng tạo, nghệ thuật, thiết kế, thể hiện ý tưởng theo cách riêng.",
careers: [
"Nhà thiết kế đồ họa",
"Nhạc sĩ / Ca sĩ",
"Nhà làm phim",
"Kiến trúc sư",
"Nhà thiết kế thời trang",
],
},
S: {
name: "Social – Xã hội",
desc: "Thích giúp đỡ, hướng dẫn, làm việc với con người, quan tâm đến cảm xúc của người khác.",
careers: [
"Giáo viên",
"Cố vấn tâm lý",
"Nhân viên công tác xã hội",
"Điều dưỡng",
"Chuyên viên đào tạo",
],
},
E: {
name: "Enterprising – Doanh nghiệp",
desc: "Thích lãnh đạo, kinh doanh, thuyết phục, chịu trách nhiệm và chấp nhận rủi ro.",
careers: [
"Doanh nhân",
"Quản lý kinh doanh",
"Chuyên viên marketing",
"Nhân viên bán hàng",
"Chuyên viên tài chính",
],
},
C: {
name: "Conventional – Quy ước",
desc: "Thích công việc có cấu trúc rõ ràng, dữ liệu, sổ sách, quy trình cụ thể.",
careers: [
"Kế toán",
"Nhân viên hành chính",
"Chuyên viên dữ liệu",
"Thư ký văn phòng",
"Nhân viên ngân hàng",
],
},
};

// ==============================
// Câu hỏi RIASEC
// ==============================
const questions = [
{ id: 1, code: "R", text: "Em thích sửa chữa, lắp ráp các đồ vật, máy móc trong nhà." },
{
id: 2,
code: "R",
text: "Em thích làm những hoạt động ngoài trời, vận động tay chân hơn là ngồi một chỗ.",
},
{
id: 3,
code: "R",
text: "Em thấy hứng thú với các dụng cụ, thiết bị kỹ thuật (máy tính, máy móc, công cụ...).",
},
{
id: 4,
code: "R",
text: "Em thích làm các công việc cần sức khỏe, sự dẻo dai (thể thao, lao động tay chân...).",
},
{
id: 5,
code: "R",
text: "Em cảm thấy thoải mái khi làm việc trong môi trường nhà xưởng, công trường, phòng thí nghiệm hơn là văn phòng.",
},
{
id: 6,
code: "R",
text: "Em thích sử dụng, điều khiển các loại máy móc, thiết bị.",
},
{
id: 7,
code: "I",
text: "Em thích tìm hiểu nguyên nhân, cách thức hoạt động của sự vật, hiện tượng.",
},
{
id: 8,
code: "I",
text: "Em thích đọc các tài liệu khoa học, khám phá, nghiên cứu.",
},
{
id: 9,
code: "I",
text: "Em hay đặt câu hỏi 'vì sao?', 'tại sao?', thích đào sâu vấn đề.",
},
{
id: 10,
code: "I",
text: "Em thích làm các bài toán khó, câu đố logic, thử thách trí tuệ.",
},
{
id: 11,
code: "I",
text: "Em quan tâm đến các ngành như khoa học, kỹ thuật, y khoa, công nghệ.",
},
{
id: 12,
code: "I",
text: "Em thích thu thập, phân tích dữ liệu để rút ra kết luận.",
},
{
id: 13,
code: "A",
text: "Em thích vẽ tranh, thiết kế, trang trí, chụp ảnh hoặc các hoạt động nghệ thuật khác.",
},
{
id: 14,
code: "A",
text: "Em thích nghe nhạc, chơi nhạc cụ, hát hoặc sáng tác.",
},
{
id: 15,
code: "A",
text: "Em thích viết lách (truyện, thơ, nhật ký, blog...).",
},
{
id: 16,
code: "A",
text: "Em thích tham gia các hoạt động biểu diễn (kịch, múa, diễn xuất...).",
},
{
id: 17,
code: "A",
text: "Em thấy mình khá sáng tạo, hay nghĩ ra ý tưởng mới lạ.",
},
{
id: 18,
code: "A",
text: "Em thích môi trường làm việc tự do, không quá gò bó theo khuôn mẫu.",
},
{
id: 19,
code: "S",
text: "Em thích giúp đỡ người khác khi họ gặp khó khăn.",
},
{
id: 20,
code: "S",
text: "Em hay lắng nghe tâm sự của bạn bè, người thân.",
},
{
id: 21,
code: "S",
text: "Em thích tham gia các hoạt động tình nguyện, hoạt động cộng đồng.",
},
{
id: 22,
code: "S",
text: "Em thích hướng dẫn, giảng giải cho người khác hiểu một vấn đề.",
},
{
id: 23,
code: "S",
text: "Em quan tâm đến cảm xúc, suy nghĩ của người khác.",
},
{
id: 24,
code: "S",
text: "Em muốn làm việc trong môi trường có nhiều sự tương tác, giao tiếp với con người.",
},
{
id: 25,
code: "E",
text: "Em thích đứng ra tổ chức hoạt động, sự kiện cho nhóm / lớp.",
},
{
id: 26,
code: "E",
text: "Em tự tin khi thuyết trình, nói chuyện trước đám đông.",
},
{
id: 27,
code: "E",
text: "Em thích thuyết phục người khác làm theo ý tưởng của mình.",
},
{
id: 28,
code: "E",
text: "Em quan tâm đến kinh doanh, khởi nghiệp, bán hàng.",
},
{
id: 29,
code: "E",
text: "Em sẵn sàng chấp nhận rủi ro để thử một cơ hội mới.",
},
{
id: 30,
code: "E",
text: "Em thích được lãnh đạo, dẫn dắt một nhóm người.",
},
{
id: 31,
code: "C",
text: "Em thích làm việc với giấy tờ, số liệu, bảng biểu.",
},
{
id: 32,
code: "C",
text: "Em cẩn thận, tỉ mỉ, thích mọi thứ rõ ràng, ngăn nắp.",
},
{
id: 33,
code: "C",
text: "Em thích tuân thủ quy trình, nội quy, hướng dẫn cụ thể.",
},
{
id: 34,
code: "C",
text: "Em thấy mình phù hợp với các công việc văn phòng, hành chính.",
},
{
id: 35,
code: "C",
text: "Em thích nhập liệu, xử lý thông tin trên máy tính.",
},
{
id: 36,
code: "C",
text: "Em thường sắp xếp công việc / đồ dùng theo trật tự cố định.",
},
{
id: 37,
code: "R",
text: "Em thích các môn học liên quan đến công nghệ, kỹ thuật, kỹ năng thực hành.",
},
{
id: 38,
code: "I",
text: "Em thích các môn học đòi hỏi suy luận, tính toán, phân tích (Toán, Lý, Hóa...).",
},
{
id: 39,
code: "A",
text: "Em thích các môn học liên quan đến nghệ thuật, mỹ thuật, âm nhạc, văn học.",
},
{
id: 40,
code: "S",
text: "Em thích các hoạt động nhóm, làm việc với nhiều người.",
},
{
id: 41,
code: "E",
text: "Em thích tham gia các cuộc thi, tranh luận, hùng biện.",
},
{
id: 42,
code: "C",
text: "Em thích làm các bài tập cần ghi nhớ, sắp xếp thông tin có trình tự.",
},
{
id: 43,
code: "R",
text: "Em thích sửa chữa các thiết bị điện tử, máy tính, điện thoại.",
},
{
id: 44,
code: "I",
text: "Em thích tự tìm hiểu, mày mò kiến thức mới qua sách, internet.",
},
{
id: 45,
code: "A",
text: "Em thích tự thiết kế poster, slide, bài trình bày đẹp mắt.",
},
{
id: 46,
code: "S",
text: "Em thích hỗ trợ bạn bè trong học tập hoặc trong công việc nhóm.",
},
{
id: 47,
code: "E",
text: "Em thích tham gia các CLB lãnh đạo, kinh doanh, khởi nghiệp.",
},
{
id: 48,
code: "C",
text: "Em thích ghi chép, lưu trữ, quản lý thông tin cẩn thận.",
},
{
id: 49,
code: "R",
text: "Em thích các nghề liên quan đến kỹ thuật, công nghệ, xây dựng, cơ khí.",
},
{
id: 50,
code: "I",
text: "Em thích các nghề liên quan đến nghiên cứu khoa học, y tế, công nghệ cao.",
},
{
id: 51,
code: "A",
text: "Em thích các nghề liên quan đến sáng tạo nội dung, thiết kế, nghệ thuật.",
},
{
id: 52,
code: "S",
text: "Em thích các nghề liên quan đến giáo dục, tâm lý, y tế cộng đồng, xã hội.",
},
{
id: 53,
code: "E",
text: "Em thích các nghề liên quan đến kinh doanh, quản lý, marketing, tài chính.",
},
{
id: 54,
code: "C",
text: "Em thích các nghề liên quan đến kế toán, kiểm toán, hành chính, văn phòng.",
},
{
id: 55,
code: "R",
text: "Em thích sử dụng các công cụ, máy móc để tạo ra hoặc sửa chữa sản phẩm.",
},
{
id: 56,
code: "I",
text: "Em thích phân tích số liệu, biểu đồ, báo cáo để hiểu sâu vấn đề.",
},
{
id: 57,
code: "A",
text: "Em thích thể hiện bản thân qua phong cách, sản phẩm sáng tạo của mình.",
},
{
id: 58,
code: "S",
text: "Em thấy mình dễ đồng cảm, thấu hiểu cảm xúc của người khác.",
},
{
id: 59,
code: "E",
text: "Em thích đặt mục tiêu lớn và nỗ lực để đạt được, thích cảm giác chinh phục.",
},
{
id: 60,
code: "C",
text: "Em thấy yên tâm khi công việc có quy trình rõ ràng, ít thay đổi, ít rủi ro.",
},
];

// ==============================
// DOM references
// ==============================

// Theme & tabs
const themeToggle = document.getElementById("theme-toggle");
const tabButtons = document.querySelectorAll(".nav-tab");
const tabPanels = document.querySelectorAll(".tab-panel");

// Questions & progress
const questionsContainer = document.getElementById("questions-container");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const progressPercentEl = document.getElementById("progress-percent");

// Student info
const studentNameInput = document.getElementById("student-name");
const studentIdInput = document.getElementById("student-id");
const studentClassInput = document.getElementById("student-class");
const studentSchoolInput = document.getElementById("student-school");
const studentEmailInput = document.getElementById("student-email");

// Buttons
const submitTestBtn = document.getElementById("submit-test-btn");
const resetTestBtn = document.getElementById("reset-test-btn");
const backToTestBtn = document.getElementById("back-to-test-btn");
const exportTxtBtn = document.getElementById("export-txt-btn");

// Result UI
const resultTop3El = document.getElementById("result-top3");
const resultConfidenceEl = document.getElementById("result-confidence");
const scoreREl = document.getElementById("score-R");
const scoreIEl = document.getElementById("score-I");
const scoreAEl = document.getElementById("score-A");
const scoreSEl = document.getElementById("score-S");
const scoreEEl = document.getElementById("score-E");
const scoreCEl = document.getElementById("score-C");
const resultSuggestionsEl = document.getElementById("result-suggestions");

// Admin
const adminPasswordInput = document.getElementById("admin-password");
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminLoginSection = document.getElementById("admin-login-section");
const adminContent = document.getElementById("admin-content");
const filterClassInput = document.getElementById("filter-class");
const filterDateInput = document.getElementById("filter-date");
const applyFilterBtn = document.getElementById("apply-filter-btn");
const exportCsvBtn = document.getElementById("export-csv-btn");
const adminResultsTable = document.getElementById("admin-results-table");

// Admin dashboard stats
const statTotalTestsEl = document.getElementById("stat-total-tests");
const statTotalClassesEl = document.getElementById("stat-total-classes");
const statTotalSchoolsEl = document.getElementById("stat-total-schools");
const adminClassStatsTable = document.getElementById("admin-class-stats-table");

// Modal nghề
const careerModalBackdrop = document.getElementById("career-modal-backdrop");
const careerModalTitle = document.getElementById("career-modal-title");
const careerModalBody = document.getElementById("career-modal-body");
const careerModalCloseBtn = document.getElementById("career-modal-close");

// Chart instances
let barChartInstance = null;
let radarChartInstance = null;

// ==============================
// Utils
// ==============================
function sanitizeInput(str) {
return (str || "").trim().replace(/[<>]/g, "");
}

function validateEmail(email) {
if (!email) return true;
return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
}

// LocalStorage
function loadLocalResults() {
try {
const raw = localStorage.getItem(LS_RESULTS_KEY);
if (!raw) return [];
return JSON.parse(raw);
} catch {
return [];
}
}

function saveLocalResults(results) {
localStorage.setItem(LS_RESULTS_KEY, JSON.stringify(results));
}

function loadDraft() {
try {
const raw = localStorage.getItem(LS_DRAFT_KEY);
if (!raw) return {};
return JSON.parse(raw);
} catch {
return {};
}
}

function saveDraft(draft) {
localStorage.setItem(LS_DRAFT_KEY, JSON.stringify(draft));
}

// Theme
function applyTheme(theme) {
if (theme === "light") {
document.documentElement.setAttribute("data-theme", "light");
if (themeToggle) themeToggle.checked = false;
} else {
document.documentElement.removeAttribute("data-theme");
if (themeToggle) themeToggle.checked = true;
}
localStorage.setItem(LS_THEME_KEY, theme);
}

function initTheme() {
const saved = localStorage.getItem(LS_THEME_KEY);
if (saved === "light" || saved === "dark") {
applyTheme(saved);
} else {
const prefersDark =
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(prefersDark ? "dark" : "light");
}
}

// ==============================
// Chart.js lazy load
// ==============================
function loadChartJsIfNeeded() {
return new Promise(function (resolve, reject) {
if (typeof Chart !== "undefined") {
resolve();
return;
}
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
script.onload = function () {
resolve();
};
script.onerror = function () {
reject(new Error("Không tải được Chart.js"));
};
document.body.appendChild(script);
});
}

// ==============================
// UI render & logic
// ==============================

function initBrand() {
const brandNameEl = document.getElementById("brand-name");
const brandTaglineEl = document.getElementById("brand-tagline");
const brandLogoEl = document.getElementById("brand-logo");

if (brandNameEl) brandNameEl.textContent = BRAND_CONFIG.name;
if (brandTaglineEl) brandTaglineEl.textContent = BRAND_CONFIG.tagline;
if (brandLogoEl) brandLogoEl.src = BRAND_CONFIG.logo;

}

function buildQuestions() {
if (!questionsContainer) return;

questionsContainer.innerHTML = "";
const draft = loadDraft();

questions.forEach(function (q) {
    const wrapper = document.createElement("div");
    wrapper.className = "question-item";

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.textContent = "Câu " + q.id + " – Nhóm " + q.code;

    const text = document.createElement("div");
    text.className = "question-text";
    text.textContent = q.text;

    const actions = document.createElement("div");
    actions.className = "question-actions";

    const yesBtn = document.createElement("button");
    yesBtn.className = "answer-pill";
    yesBtn.dataset.qid = q.id;
    yesBtn.dataset.value = "yes";
    yesBtn.innerHTML = "<span>✅</span> Đúng";

    const noBtn = document.createElement("button");
    noBtn.className = "answer-pill";
    noBtn.dataset.qid = q.id;
    noBtn.dataset.value = "no";
    noBtn.innerHTML = "<span>❌</span> Sai";

    const saved = draft[q.id];
    if (saved === true) yesBtn.classList.add("selected-yes");
    if (saved === false) noBtn.classList.add("selected-no");

    actions.appendChild(yesBtn);
    actions.appendChild(noBtn);

    wrapper.appendChild(meta);
    wrapper.appendChild(text);
    wrapper.appendChild(actions);

    questionsContainer.appendChild(wrapper);
});

updateProgress();

}

function updateProgress() {
if (!questionsContainer || !progressBar || !progressFill || !progressText) return;

const answered = {};
const pills = questionsContainer.querySelectorAll(".answer-pill");
pills.forEach(function (pill) {
    const qid = Number(pill.dataset.qid);
    const isYes = pill.classList.contains("selected-yes");
    const isNo = pill.classList.contains("selected-no");
    if (isYes || isNo) answered[qid] = true;
});

const count = Object.keys(answered).length;
const total = questions.length;
const percent = total ? Math.round((count / total) * 100) : 0;

progressText.textContent = count + " / " + total + " câu hỏi";
progressFill.style.width = percent + "%";
progressBar.setAttribute("aria-valuenow", String(percent));
if (progressPercentEl) progressPercentEl.textContent = percent + "%";

}

// handle click Đúng/Sai
function handleQuestionClick(e) {
const pill = e.target.closest(".answer-pill");
if (!pill || !questionsContainer.contains(pill)) return;

const qid = Number(pill.dataset.qid);
const value = pill.dataset.value;

const parent = pill.parentElement;
const yes = parent.querySelector('.answer-pill[data-value="yes"]');
const no = parent.querySelector('.answer-pill[data-value="no"]');

yes.classList.remove("selected-yes");
no.classList.remove("selected-no");

const draft = loadDraft();

if (value === "yes") {
    yes.classList.add("selected-yes");
    draft[qid] = true;
} else {
    no.classList.add("selected-no");
    draft[qid] = false;
}

saveDraft(draft);
updateProgress();

}

function calculateScores() {
const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
const draft = loadDraft();

Object.keys(draft).forEach(function (qidStr) {
    const value = draft[qidStr];
    const qid = Number(qidStr);
    const q = questions.find(function (qq) {
        return qq.id === qid;
    });
    if (!q) return;
    if (value === true) scores[q.code] = (scores[q.code] || 0) + 1;
});

return scores;

}

function getTop3Codes(scores) {
const entries = Object.entries(scores);
entries.sort(function (a, b) {
return b[1] - a[1];
});
return entries.slice(0, 3).map(function (e) {
return e[0];
});
}

function calculateConfidence(scores) {
const values = Object.values(scores).sort(function (a, b) {
return b - a;
});
if (values.length < 2) return "Chưa đủ dữ liệu";
const gap = values[0] - values[1];
if (gap >= 5) return "Rõ ràng";
if (gap >= 3) return "Tương đối rõ";
return "Cần xem thêm";
}

function renderResultSuggestions(top3) {
if (!resultSuggestionsEl) return;

if (!top3 || !top3.length) {
    resultSuggestionsEl.innerHTML =
        "<p>Chưa có dữ liệu. Hãy làm bài trắc nghiệm trước.</p>";
    return;
}

const container = document.createElement("div");

top3.forEach(function (code) {
    const meta = riasecMeta[code];
    if (!meta) return;

    const block = document.createElement("div");
    block.className = "suggest-block";

    const title = document.createElement("h4");
    title.textContent = code + " – " + meta.name;
    block.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = meta.desc;
    block.appendChild(desc);

    const careersWrap = document.createElement("div");
    meta.careers.forEach(function (career) {
        const tag = document.createElement("button");
        tag.type = "button";
        tag.className = "career-tag";
        tag.textContent = career;
        tag.addEventListener("click", function () {
            openCareerModal(code, career);
        });
        careersWrap.appendChild(tag);
    });

    block.appendChild(careersWrap);
    container.appendChild(block);
});

resultSuggestionsEl.innerHTML = "";
resultSuggestionsEl.appendChild(container);

}

function openCareerModal(code, career) {
if (!careerModalBackdrop) return;
const meta = riasecMeta[code];

careerModalTitle.textContent = career;

const ul = document.createElement("ul");
ul.className = "checklist";

const items = [
    "Thuộc nhóm " + code + " – " + (meta ? meta.name : ""),
    "Tìm hiểu các trường đào tạo ngành liên quan",
    "Tìm hiểu nhu cầu việc làm trong 5–10 năm tới",
    "Trao đổi thêm với giáo viên, phụ huynh về lựa chọn này",
];

items.forEach(function (txt) {
    const li = document.createElement("li");
    li.textContent = txt;
    ul.appendChild(li);
});

careerModalBody.innerHTML = "";
careerModalBody.appendChild(ul);
careerModalBackdrop.classList.add("visible");

}

function closeCareerModal() {
if (!careerModalBackdrop) return;
careerModalBackdrop.classList.remove("visible");
}

// Charts
async function renderCharts(scores) {
await loadChartJsIfNeeded();

const barCanvas = document.getElementById("bar-chart");
const radarCanvas = document.getElementById("radar-chart");
if (!barCanvas || !radarCanvas) return;

const labels = ["R", "I", "A", "S", "E", "C"];
const data = labels.map(function (code) {
    return scores[code] || 0;
});

const ctxBar = barCanvas.getContext("2d");
const ctxRadar = radarCanvas.getContext("2d");

if (barChartInstance) barChartInstance.destroy();
if (radarChartInstance) radarChartInstance.destroy();

barChartInstance = new Chart(ctxBar, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Điểm RIASEC",
                data: data,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    },
});

radarChartInstance = new Chart(ctxRadar, {
    type: "radar",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Điểm RIASEC",
                data: data,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    },
});

}

// Result UI
async function renderResultUI(result) {
if (!result || !result.scores) return;

const scores = result.scores;
const top3 = result.top3 || getTop3Codes(scores);

if (resultTop3El) resultTop3El.textContent = top3.join("");
if (resultConfidenceEl) resultConfidenceEl.textContent = calculateConfidence(scores);
if (scoreREl) scoreREl.textContent = scores.R;
if (scoreIEl) scoreIEl.textContent = scores.I;
if (scoreAEl) scoreAEl.textContent = scores.A;
if (scoreSEl) scoreSEl.textContent = scores.S;
if (scoreEEl) scoreEEl.textContent = scores.E;
if (scoreCEl) scoreCEl.textContent = scores.C;

renderResultSuggestions(top3);
await renderCharts(scores);

}

// Export TXT
function exportResultTxt(result) {
if (!result) return;
const scores = result.scores;
const top3 = result.top3;
const student = result.student;
const timestamp = result.timestamp;

const lines = [];
lines.push("KẾT QUẢ TRẮC NGHIỆM HOLLAND RIASEC");
lines.push("----------------------------------");
lines.push("Thời gian: " + timestamp);
lines.push("Họ tên: " + (student.name || ""));
lines.push("Mã HS: " + (student.id || ""));
lines.push("Lớp: " + (student.class || ""));
lines.push("Trường học / Khối lớp: " + (student.school || ""));
lines.push("Email: " + (student.email || ""));
lines.push("");
lines.push("Điểm từng nhóm:");
lines.push("R (Thực tế): " + scores.R);
lines.push("I (Nghiên cứu): " + scores.I);
lines.push("A (Nghệ thuật): " + scores.A);
lines.push("S (Xã hội): " + scores.S);
lines.push("E (Doanh nghiệp): " + scores.E);
lines.push("C (Quy ước): " + scores.C);
lines.push("");
lines.push("Top 3 nhóm nổi bật: " + top3.join(" – "));
lines.push("Độ phân biệt: " + calculateConfidence(scores));
lines.push("");
lines.push(
    "Lưu ý: Đây chỉ là công cụ tham khảo. Em nên trao đổi thêm với gia đình và thầy cô."
);

const blob = new Blob([lines.join("\n")], {
    type: "text/plain;charset=utf-8",
});
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download =
    "riasec_" +
    (student.class || "hoc_sinh") +
    "_" +
    (student.name || "ket_qua") +
    ".txt";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

}

// ==============================
// Admin table & dashboard
// ==============================
function refreshAdminTable(filters) {
if (!adminResultsTable) return;
filters = filters || {};

const results = loadLocalResults();
adminResultsTable.innerHTML = "";

const classFilter = filters.classFilter;
const dateFilter = filters.dateFilter;
let rendered = 0;

results.forEach(function (r) {
    const d = new Date(r.timestamp);
    const dateStr = d.toISOString().slice(0, 10);

    if (classFilter && r.student.class !== classFilter) return;
    if (dateFilter && dateStr !== dateFilter) return;

    const tr = document.createElement("tr");
    const riasecStr =
        r.scores.R +
        "/" +
        r.scores.I +
        "/" +
        r.scores.A +
        "/" +
        r.scores.S +
        "/" +
        r.scores.E +
        "/" +
        r.scores.C;

    tr.innerHTML =
        "<td>" +
        dateStr +
        "</td>" +
        "<td>" +
        (r.student.name || "") +
        "</td>" +
        "<td>" +
        (r.student.id || "") +
        "</td>" +
        "<td>" +
        (r.student.class || "") +
        "</td>" +
        "<td>" +
        (r.student.school || "") +
        "</td>" +
        "<td>" +
        (r.student.email || "") +
        "</td>" +
        "<td>" +
        riasecStr +
        "</td>";

    adminResultsTable.appendChild(tr);
    rendered++;
});

if (rendered === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML =
        '<td colspan="7" class="admin-empty-row">Không có kết quả phù hợp.</td>';
    adminResultsTable.appendChild(tr);
}

updateAdminStats();

}

function updateAdminStats() {
if (
!statTotalTestsEl ||
!statTotalClassesEl ||
!statTotalSchoolsEl ||
!adminClassStatsTable
)
return;

const results = loadLocalResults();
const total = results.length;

const classSet = new Set();
const schoolSet = new Set();
const countsByClass = {};

results.forEach(function (r) {
    const cls = (r.student.class || "").trim();
    const school = (r.student.school || "").trim();
    if (cls) {
        classSet.add(cls);
        countsByClass[cls] = (countsByClass[cls] || 0) + 1;
    }
    if (school) {
        schoolSet.add(school);
    }
});

statTotalTestsEl.textContent = String(total);
statTotalClassesEl.textContent = String(classSet.size);
statTotalSchoolsEl.textContent = String(schoolSet.size);

const tbody = adminClassStatsTable.querySelector("tbody");
if (!tbody) return;
tbody.innerHTML = "";

const entries = Object.entries(countsByClass).sort(function (a, b) {
    return b[1] - a[1];
});

if (!entries.length) {
    const tr = document.createElement("tr");
    tr.innerHTML =
        '<td colspan="2" class="admin-empty-row">Chưa có dữ liệu.</td>';
    tbody.appendChild(tr);
    return;
}

entries.forEach(function (entry) {
    const cls = entry[0];
    const count = entry[1];
    const tr = document.createElement("tr");
    tr.innerHTML = "<td>" + cls + "</td><td>" + count + "</td>";
    tbody.appendChild(tr);
});

}

function handleApplyFilter() {
const cls = sanitizeInput(filterClassInput.value);
const date = filterDateInput.value || "";
refreshAdminTable({
classFilter: cls || null,
dateFilter: date || null,
});
}

function exportAllToCsv() {
const results = loadLocalResults();
if (!results.length) {
alert("Chưa có dữ liệu để xuất CSV.");
return;
}

const rows = [];
rows.push([
    "timestamp",
    "name",
    "id",
    "class",
    "school",
    "email",
    "R",
    "I",
    "A",
    "S",
    "E",
    "C",
    "top3",
]);

results.forEach(function (r) {
    rows.push([
        r.timestamp,
        r.student.name || "",
        r.student.id || "",
        r.student.class || "",
        r.student.school || "",
        r.student.email || "",
        r.scores.R,
        r.scores.I,
        r.scores.A,
        r.scores.S,
        r.scores.E,
        r.scores.C,
        (r.top3 || []).join(""),
    ]);
});

const csv = rows
    .map(function (row) {
        return row
            .map(function (cell) {
                const v = String(cell || "");
                if (v.includes(",") || v.includes('"')) {
                    return '"' + v.replace(/"/g, '""') + '"';
                }
                return v;
            })
            .join(",");
    })
    .join("\n");

const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8",
});
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "riasec_results.csv";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

}

// ==============================
// Submit / Reset
// ==============================
function ensureStudentInfo() {
const name = sanitizeInput(studentNameInput.value);
const cls = sanitizeInput(studentClassInput.value);
const email = studentEmailInput.value.trim();

if (!name) {
    alert("Vui lòng nhập Họ và tên.");
    studentNameInput.focus();
    return false;
}
if (!cls) {
    alert("Vui lòng nhập Lớp.");
    studentClassInput.focus();
    return false;
}
if (email && !validateEmail(email)) {
    alert("Email không hợp lệ.");
    studentEmailInput.focus();
    return false;
}
return true;

}

async function handleSubmitTest() {
if (!ensureStudentInfo()) return;

const scores = calculateScores();
const top3 = getTop3Codes(scores);
const now = new Date();

const result = {
    id:
        Date.now().toString() +
        "-" +
        Math.random().toString(36).slice(2, 8),
    timestamp: now.toISOString(),
    student: {
        name: sanitizeInput(studentNameInput.value),
        id: sanitizeInput(studentIdInput.value),
        class: sanitizeInput(studentClassInput.value),
        school: sanitizeInput(studentSchoolInput.value),
        email: sanitizeInput(studentEmailInput.value),
    },
    scores: scores,
    top3: top3,
};

const results = loadLocalResults();
results.push(result);
saveLocalResults(results);

saveDraft({});

await renderResultUI(result);

// chuyển sang tab kết quả
tabButtons.forEach(function (btn) {
    if (btn.getAttribute("data-tab") === "tab-result") {
        btn.click();
    }
});

if (isAdminLoggedIn) {
    refreshAdminTable();
}

}

function handleResetTest() {
if (!confirm("Bạn có chắc muốn làm lại từ đầu?")) return;
localStorage.removeItem(LS_DRAFT_KEY);
saveDraft({});
buildQuestions();
}

// ==============================
// Tabs, autosave, admin login
// ==============================
function initTabs() {
tabButtons.forEach(function (btn) {
btn.addEventListener("click", function () {
const tabId = btn.getAttribute("data-tab");
tabButtons.forEach(function (b) {
b.classList.remove("active");
});
tabPanels.forEach(function (p) {
p.classList.remove("active");
});
btn.classList.add("active");
const panel = document.getElementById(tabId);
if (panel) panel.classList.add("active");
});
});
}

function initAutosave() {
if (!questionsContainer) return;
setInterval(function () {
const draft = {};
const pills = questionsContainer.querySelectorAll(".answer-pill");
pills.forEach(function (pill) {
const qid = Number(pill.dataset.qid);
if (pill.classList.contains("selected-yes")) {
draft[qid] = true;
} else if (pill.classList.contains("selected-no")) {
draft[qid] = false;
}
});
saveDraft(draft);
}, 30000);
}

function handleAdminLogin() {
const pw = adminPasswordInput.value;
if (pw === ADMIN_PASSWORD) {
isAdminLoggedIn = true;
adminContent.classList.remove("hidden");
adminLoginSection.classList.add("hidden");
refreshAdminTable();
} else {
alert("Mật khẩu admin không đúng.");
}
}

// ==============================
// Init
// ==============================
function init() {
initBrand();
initTheme();
buildQuestions();
initTabs();
initAutosave();

// load kết quả gần nhất nếu có
const results = loadLocalResults();
if (results.length) {
    renderResultUI(results[results.length - 1]);
}

if (questionsContainer) {
    questionsContainer.addEventListener("click", handleQuestionClick);
}

if (themeToggle) {
    themeToggle.addEventListener("change", function () {
        applyTheme(themeToggle.checked ? "dark" : "light");
    });
}

if (submitTestBtn) {
    submitTestBtn.addEventListener("click", function () {
        submitTestBtn.disabled = true;
        handleSubmitTest()
            .catch(function (err) {
                console.error(err);
                alert("Có lỗi xảy ra khi xử lý kết quả. Vui lòng thử lại.");
            })
            .finally(function () {
                submitTestBtn.disabled = false;
            });
    });
}

if (resetTestBtn) {
    resetTestBtn.addEventListener("click", handleResetTest);
}

if (backToTestBtn) {
    backToTestBtn.addEventListener("click", function () {
        tabButtons.forEach(function (btn) {
            if (btn.getAttribute("data-tab") === "tab-test") {
                btn.click();
            }
        });
    });
}

if (exportTxtBtn) {
    exportTxtBtn.addEventListener("click", function () {
        const results = loadLocalResults();
        if (!results.length) {
            alert("Chưa có kết quả nào để xuất.");
            return;
        }
        exportResultTxt(results[results.length - 1]);
    });
}

if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", handleAdminLogin);
}
if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", handleApplyFilter);
}
if (exportCsvBtn) {
    exportCsvBtn.addEventListener("click", exportAllToCsv);
}

if (careerModalCloseBtn) {
    careerModalCloseBtn.addEventListener("click", closeCareerModal);
}
if (careerModalBackdrop) {
    careerModalBackdrop.addEventListener("click", function (e) {
        if (e.target === careerModalBackdrop) {
            closeCareerModal();
        }
    });
}
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeCareerModal();
    }
});

}

document.addEventListener("DOMContentLoaded", init);
