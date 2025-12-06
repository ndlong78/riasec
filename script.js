// ==============================
// Brand & Admin config
// ==============================

// Lấy cấu hình từ config.js (nếu có), nếu không dùng giá trị mặc định
const BRAND_CONFIG = (window.RIASEC_CONFIG && window.RIASEC_CONFIG.brand) || {
name: "CBB & Family",
tagline: "Cùng con định hướng tương lai",
logo: "logo-cbb.png"
};

const ADMIN_PASSWORD = (window.RIASEC_CONFIG && window.RIASEC_CONFIG.adminPassword) || "cbbadmin123";

// Keys localStorage
const LS_RESULTS_KEY = "riasecResults";
const LS_DRAFT_KEY = "riasecDraft";
const LS_GH_CONFIG_KEY = "riasecGithubConfig";
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
"Kỹ sư điện"
]
},
I: {
name: "Investigative – Nghiên cứu",
desc: "Thích suy nghĩ, phân tích, tìm hiểu nguyên lý, đặt câu hỏi 'vì sao'.",
careers: [
"Nhà khoa học dữ liệu",
"Lập trình viên",
"Kỹ sư phần mềm",
"Nhà sinh học",
"Nhà nghiên cứu hóa học"
]
},
A: {
name: "Artistic – Nghệ thuật",
desc: "Thích sáng tạo, nghệ thuật, thiết kế, thể hiện ý tưởng theo cách riêng.",
careers: [
"Nhà thiết kế đồ họa",
"Nhạc sĩ / Ca sĩ",
"Nhà làm phim",
"Kiến trúc sư",
"Nhà thiết kế thời trang"
]
},
S: {
name: "Social – Xã hội",
desc: "Thích giúp đỡ, hướng dẫn, làm việc với con người, quan tâm đến cảm xúc của người khác.",
careers: [
"Giáo viên",
"Cố vấn tâm lý",
"Nhân viên công tác xã hội",
"Điều dưỡng",
"Chuyên viên đào tạo"
]
},
E: {
name: "Enterprising – Doanh nghiệp",
desc: "Thích lãnh đạo, kinh doanh, thuyết phục, chịu trách nhiệm và chấp nhận rủi ro.",
careers: [
"Doanh nhân",
"Quản lý kinh doanh",
"Chuyên viên marketing",
"Nhân viên bán hàng",
"Chuyên viên tài chính"
]
},
C: {
name: "Conventional – Quy ước",
desc: "Thích công việc có cấu trúc rõ ràng, dữ liệu, sổ sách, quy trình cụ thể.",
careers: [
"Kế toán",
"Nhân viên hành chính",
"Chuyên viên dữ liệu",
"Thư ký văn phòng",
"Nhân viên ngân hàng"
]
}
};

// ==============================
// Câu hỏi RIASEC
// ==============================
const questions = [
{ id: 1, code: "R", text: "Em thích sửa chữa, lắp ráp các đồ vật, máy móc trong nhà." },
{ id: 2, code: "R", text: "Em thích làm những hoạt động ngoài trời, vận động tay chân hơn là ngồi một chỗ." },
{ id: 3, code: "R", text: "Em thấy hứng thú với các dụng cụ, thiết bị kỹ thuật (máy tính, máy móc, công cụ...)." },
{ id: 4, code: "R", text: "Em thích làm các công việc cần sức khỏe, sự dẻo dai (thể thao, lao động tay chân...)."},
{ id: 5, code: "R", text: "Em cảm thấy thoải mái khi làm việc trong môi trường nhà xưởng, công trường, phòng thí nghiệm hơn là văn phòng." },
{ id: 6, code: "R", text: "Em thích sử dụng, điều khiển các loại máy móc, thiết bị." },
{ id: 7, code: "I", text: "Em thích tìm hiểu nguyên nhân, cách thức hoạt động của sự vật, hiện tượng." },
{ id: 8, code: "I", text: "Em thích đọc các tài liệu khoa học, khám phá, nghiên cứu." },
{ id: 9, code: "I", text: "Em hay đặt câu hỏi 'vì sao?', 'tại sao?', thích đào sâu vấn đề." },
{ id: 10, code: "I", text: "Em thích làm các bài toán khó, câu đố logic, thử thách trí tuệ." },
{ id: 11, code: "I", text: "Em quan tâm đến các ngành như khoa học, kỹ thuật, y khoa, công nghệ." },
{ id: 12, code: "I", text: "Em thích thu thập, phân tích dữ liệu để rút ra kết luận." },
{ id: 13, code: "A", text: "Em thích vẽ tranh, thiết kế, trang trí, chụp ảnh hoặc các hoạt động nghệ thuật khác." },
{ id: 14, code: "A", text: "Em thích nghe nhạc, chơi nhạc cụ, hát hoặc sáng tác." },
{ id: 15, code: "A", text: "Em thích viết lách (truyện, thơ, nhật ký, blog...)."},
{ id: 16, code: "A", text: "Em thích tham gia các hoạt động biểu diễn (kịch, múa, diễn xuất...)."},
{ id: 17, code: "A", text: "Em thấy mình khá sáng tạo, hay nghĩ ra ý tưởng mới lạ." },
{ id: 18, code: "A", text: "Em thích môi trường làm việc tự do, không quá gò bó theo khuôn mẫu." },
{ id: 19, code: "S", text: "Em thích giúp đỡ người khác khi họ gặp khó khăn." },
{ id: 20, code: "S", text: "Em hay lắng nghe tâm sự của bạn bè, người thân." },
{ id: 21, code: "S", text: "Em thích tham gia các hoạt động tình nguyện, hoạt động cộng đồng." },
{ id: 22, code: "S", text: "Em thích hướng dẫn, giảng giải cho người khác hiểu một vấn đề." },
{ id: 23, code: "S", text: "Em quan tâm đến cảm xúc, suy nghĩ của người khác." },
{ id: 24, code: "S", text: "Em muốn làm việc trong môi trường có nhiều sự tương tác, giao tiếp với con người." },
{ id: 25, code: "E", text: "Em thích đứng ra tổ chức hoạt động, sự kiện cho nhóm / lớp." },
{ id: 26, code: "E", text: "Em tự tin khi thuyết trình, nói chuyện trước đám đông." },
{ id: 27, code: "E", text: "Em thích thuyết phục người khác làm theo ý tưởng của mình." },
{ id: 28, code: "E", text: "Em quan tâm đến kinh doanh, khởi nghiệp, bán hàng." },
{ id: 29, code: "E", text: "Em sẵn sàng chấp nhận rủi ro để thử một cơ hội mới." },
{ id: 30, code: "E", text: "Em thích được lãnh đạo, dẫn dắt một nhóm người." },
{ id: 31, code: "C", text: "Em thích làm việc với giấy tờ, số liệu, bảng biểu." },
{ id: 32, code: "C", text: "Em cẩn thận, tỉ mỉ, thích mọi thứ rõ ràng, ngăn nắp." },
{ id: 33, code: "C", text: "Em thích tuân thủ quy trình, nội quy, hướng dẫn cụ thể." },
{ id: 34, code: "C", text: "Em thấy mình phù hợp với các công việc văn phòng, hành chính." },
{ id: 35, code: "C", text: "Em thích nhập liệu, xử lý thông tin trên máy tính." },
{ id: 36, code: "C", text: "Em thường sắp xếp công việc / đồ dùng theo trật tự cố định." },
{ id: 37, code: "R", text: "Em thích các môn học liên quan đến công nghệ, kỹ thuật, kỹ năng thực hành." },
{ id: 38, code: "I", text: "Em thích các môn học đòi hỏi suy luận, tính toán, phân tích (Toán, Lý, Hóa...)."},
{ id: 39, code: "A", text: "Em thích các môn học liên quan đến nghệ thuật, mỹ thuật, âm nhạc, văn học." },
{ id: 40, code: "S", text: "Em thích các hoạt động nhóm, làm việc với nhiều người." },
{ id: 41, code: "E", text: "Em thích tham gia các cuộc thi, tranh luận, hùng biện." },
{ id: 42, code: "C", text: "Em thích làm các bài tập cần ghi nhớ, sắp xếp thông tin có trình tự." },
{ id: 43, code: "R", text: "Em thích sửa chữa các thiết bị điện tử, máy tính, điện thoại." },
{ id: 44, code: "I", text: "Em thích tự tìm hiểu, mày mò kiến thức mới qua sách, internet." },
{ id: 45, code: "A", text: "Em thích tự thiết kế poster, slide, bài trình bày đẹp mắt." },
{ id: 46, code: "S", text: "Em thích hỗ trợ bạn bè trong học tập hoặc trong công việc nhóm." },
{ id: 47, code: "E", text: "Em thích tham gia các CLB lãnh đạo, kinh doanh, khởi nghiệp." },
{ id: 48, code: "C", text: "Em thích ghi chép, lưu trữ, quản lý thông tin cẩn thận." },
{ id: 49, code: "R", text: "Em thích các nghề liên quan đến kỹ thuật, công nghệ, xây dựng, cơ khí." },
{ id: 50, code: "I", text: "Em thích các nghề liên quan đến nghiên cứu khoa học, y tế, công nghệ cao." },
{ id: 51, code: "A", text: "Em thích các nghề liên quan đến sáng tạo nội dung, thiết kế, nghệ thuật." },
{ id: 52, code: "S", text: "Em thích các nghề liên quan đến giáo dục, tâm lý, y tế cộng đồng, xã hội." },
{ id: 53, code: "E", text: "Em thích các nghề liên quan đến kinh doanh, quản lý, marketing, tài chính." },
{ id: 54, code: "C", text: "Em thích các nghề liên quan đến kế toán, kiểm toán, hành chính, văn phòng." },
{ id: 55, code: "R", text: "Em thích sử dụng các công cụ, máy móc để tạo ra hoặc sửa chữa sản phẩm." },
{ id: 56, code: "I", text: "Em thích phân tích số liệu, biểu đồ, báo cáo để hiểu sâu vấn đề." },
{ id: 57, code: "A", text: "Em thích thể hiện bản thân qua phong cách, sản phẩm sáng tạo của mình." },
{ id: 58, code: "S", text: "Em thấy mình dễ đồng cảm, thấu hiểu cảm xúc của người khác." },
{ id: 59, code: "E", text: "Em thích đặt mục tiêu lớn và nỗ lực để đạt được, thích cảm giác chinh phục." },
{ id: 60, code: "C", text: "Em thấy yên tâm khi công việc có quy trình rõ ràng, ít thay đổi, ít rủi ro." }
];

// ==============================
// DOM references
// ==============================
const themeToggle = document.getElementById("theme-toggle");

const tabButtons = document.querySelectorAll(".nav-tab");
const tabPanels = document.querySelectorAll(".tab-panel");

const questionsContainer = document.getElementById("questions-container");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const studentNameInput = document.getElementById("student-name");
const studentIdInput = document.getElementById("student-id");
const studentClassInput = document.getElementById("student-class");
const studentSchoolInput = document.getElementById("student-school");
const studentEmailInput = document.getElementById("student-email");

const submitTestBtn = document.getElementById("submit-test-btn");
const resetTestBtn = document.getElementById("reset-test-btn");
const backToTestBtn = document.getElementById("back-to-test-btn");
const exportTxtBtn = document.getElementById("export-txt-btn");

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

// Admin stats
const statTotalTestsEl = document.getElementById("stat-total-tests");
const statTotalClassesEl = document.getElementById("stat-total-classes");
const statTotalSchoolsEl = document.getElementById("stat-total-schools");
const adminClassStatsTable = document.getElementById("admin-class-stats-table");

// GitHub config
const ghOwnerInput = document.getElementById("gh-owner");
const ghRepoInput = document.getElementById("gh-repo");
const ghPathInput = document.getElementById("gh-path");
const ghTokenInput = document.getElementById("gh-token");
const ghSecretInput = document.getElementById("gh-secret");
const saveGhConfigBtn = document.getElementById("save-gh-config-btn");
const syncGithubBtn = document.getElementById("sync-github-btn");

// Modal DOM
const careerModalBackdrop = document.getElementById("career-modal-backdrop");
const careerModalTitle = document.getElementById("career-modal-title");
const careerModalBody = document.getElementById("career-modal-body");
const careerModalCloseBtn = document.getElementById("career-modal-close");

// Chart references
let barChartInstance = null;
let radarChartInstance = null;

// ==============================
// Utility functions
// ==============================
function sanitizeInput(str) {
return str.trim().replace(/[<>]/g, "");
}

function validateEmail(email) {
if (!email) return true;
return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
}

function ensureStudentInfo() {
const name = sanitizeInput(studentNameInput.value);
const cls = sanitizeInput(studentClassInput.value);
const email = studentEmailInput.value.trim();

```
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
```

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
return;
}
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(prefersDark ? "dark" : "light");
}

// LocalStorage helpers
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

// Draft autosave khi trả lời
function initQuestionChangeListener() {
questionsContainer.addEventListener("click", (e) => {
const btn = e.target.closest(".answer-pill");
if (!btn) return;
const qId = Number(btn.dataset.qid);
const value = btn.dataset.value === "yes";

```
    const draft = loadDraft();
    draft[qId] = value;
    saveDraft(draft);
});
```

}

// Github config
function loadGithubConfig() {
try {
const raw = localStorage.getItem(LS_GH_CONFIG_KEY);
if (!raw) return null;
return JSON.parse(raw);
} catch {
return null;
}
}

function saveGithubConfig(cfg) {
localStorage.setItem(LS_GH_CONFIG_KEY, JSON.stringify(cfg));
}

// AES encrypt/decrypt
function encryptText(plainText, secret) {
try {
const cipher = CryptoJS.AES.encrypt(plainText, secret);
return cipher.toString();
} catch {
return null;
}
}

function decryptText(cipherText, secret) {
try {
const bytes = CryptoJS.AES.decrypt(cipherText, secret);
return bytes.toString(CryptoJS.enc.Utf8);
} catch {
return null;
}
}

// ==============================
// GitHub API helpers (Contents API)
// ==============================
async function githubGetFile(owner, repo, path, token) {
const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(
        repo
    )}/contents/${encodeURIComponent(path)}`;
const res = await fetch(url, {
headers: {
Accept: "application/vnd.github+json",
Authorization: `token ${token}`
}
});
if (!res.ok) {
throw new Error(`GitHub GET failed: ${res.status}`);
}
return res.json();
}

async function githubPutFile(owner, repo, path, token, contentBase64, sha) {
const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(
        repo
    )}/contents/${encodeURIComponent(path)}`;
const body = {
message: "Update RIASEC results",
content: contentBase64
};
if (sha) body.sha = sha;

```
const res = await fetch(url, {
    method: "PUT",
    headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${token}`
    },
    body: JSON.stringify(body)
});

if (!res.ok) {
    throw new Error(`GitHub PUT failed: ${res.status}`);
}
return res.json();
```

}

async function githubFetchWithRetry(fn, maxRetries = 3) {
for (let i = 0; i < maxRetries; i++) {
try {
return await fn();
} catch (e) {
if (i === maxRetries - 1) throw e;
await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
}
}
}

// Merge & sync results lên GitHub
async function syncAllLocalToGithub() {
const cfg = loadGithubConfig();
if (!cfg || !cfg.owner || !cfg.repo || !cfg.path || !cfg.token || !cfg.secret) {
alert("Chưa cấu hình đủ thông tin GitHub & khóa mã hóa (tab Admin).");
return;
}

```
const localResults = loadLocalResults();
if (!localResults.length) {
    alert("Chưa có kết quả nào trong máy để đồng bộ.");
    return;
}

const { owner, repo, path, token, secret } = cfg;

let remoteResults = [];
let prevSha = undefined;

try {
    const fileData = await githubFetchWithRetry(() => githubGetFile(owner, repo, path, token));
    prevSha = fileData.sha;

    const decoded = atob(fileData.content.replace(/\n/g, ""));
    const decrypted = decryptText(decoded, secret);
    if (decrypted) {
        const parsed = JSON.parse(decrypted);
        if (Array.isArray(parsed.results)) {
            remoteResults = parsed.results;
        }
    }
} catch (err) {
    console.warn("Không đọc được dữ liệu từ GitHub, sẽ tạo mới:", err);
}

const existingIds = new Set(remoteResults.map((r) => r.id));
localResults.forEach((r) => {
    if (!existingIds.has(r.id)) {
        remoteResults.push(r);
        existingIds.add(r.id);
    }
});

const payload = { results: remoteResults };
const plainText = JSON.stringify(payload, null, 2);
const cipher = encryptText(plainText, secret);
const base64 = btoa(cipher);

await githubPutFile(owner, repo, path, token, base64, prevSha);
alert("Đã đồng bộ dữ liệu lên GitHub thành công.");
```

}

// ==============================
// Chart.js lazy-load
// ==============================
function loadChartJsIfNeeded() {
return new Promise((resolve, reject) => {
if (typeof Chart !== "undefined") {
resolve();
return;
}
const script = document.createElement("script");
script.src = "[https://cdn.jsdelivr.net/npm/chart.js](https://cdn.jsdelivr.net/npm/chart.js)";
script.onload = () => resolve();
script.onerror = () => reject(new Error("Không tải được Chart.js"));
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

```
if (brandNameEl) brandNameEl.textContent = BRAND_CONFIG.name;
if (brandTaglineEl) brandTaglineEl.textContent = BRAND_CONFIG.tagline;
if (brandLogoEl) brandLogoEl.src = BRAND_CONFIG.logo;
```

}

function buildQuestions() {
questionsContainer.innerHTML = "";
const draft = loadDraft();

```
questions.forEach((q) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question-item";

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.textContent = `Câu ${q.id} – Nhóm ${q.code}`;

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
    if (saved === true) {
        yesBtn.classList.add("selected-yes");
    } else if (saved === false) {
        noBtn.classList.add("selected-no");
    }

    actions.appendChild(yesBtn);
    actions.appendChild(noBtn);

    wrapper.appendChild(meta);
    wrapper.appendChild(text);
    wrapper.appendChild(actions);

    questionsContainer.appendChild(wrapper);
});

questionsContainer.addEventListener("click", (e) => {
    const pill = e.target.closest(".answer-pill");
    if (!pill) return;
    const qid = Number(pill.dataset.qid);
    const value = pill.dataset.value;

    const parent = pill.parentElement;
    const yes = parent.querySelector('.answer-pill[data-value="yes"]');
    const no = parent.querySelector('.answer-pill[data-value="no"]');

    yes.classList.remove("selected-yes");
    no.classList.remove("selected-no");

    if (value === "yes") {
        yes.classList.add("selected-yes");
    } else {
        no.classList.add("selected-no");
    }

    updateProgress();
});

updateProgress();
```

}

function updateProgress() {
const answered = {};
const pills = questionsContainer.querySelectorAll(".answer-pill");
pills.forEach((pill) => {
const qid = Number(pill.dataset.qid);
const isYes = pill.classList.contains("selected-yes");
const isNo = pill.classList.contains("selected-no");
if (isYes || isNo) {
answered[qid] = true;
}
});

```
const count = Object.keys(answered).length;
const total = questions.length;
const percent = total ? Math.round((count / total) * 100) : 0;

progressText.textContent = `${count} / ${total} câu hỏi`;
progressFill.style.width = `${percent}%`;
progressBar.setAttribute("aria-valuenow", String(percent));
const percentEl = document.getElementById("progress-percent");
if (percentEl) percentEl.textContent = `${percent}%`;
```

}

function calculateScores() {
const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
const draft = loadDraft();

```
Object.entries(draft).forEach(([qidStr, value]) => {
    const qid = Number(qidStr);
    const q = questions.find((qq) => qq.id === qid);
    if (!q) return;
    if (value === true) {
        scores[q.code] = (scores[q.code] || 0) + 1;
    }
});

return scores;
```

}

function getTop3Codes(scores) {
const entries = Object.entries(scores);
entries.sort((a, b) => b[1] - a[1]);
return entries.slice(0, 3).map((e) => e[0]);
}

function calculateConfidence(scores) {
const values = Object.values(scores).sort((a, b) => b - a);
if (values.length < 2) return "Chưa đủ dữ liệu";
const gap = values[0] - values[1];
if (gap >= 5) return "Rõ ràng";
if (gap >= 3) return "Tương đối rõ";
return "Cần xem thêm";
}

function renderResultSuggestions(top3) {
if (!top3 || !top3.length) {
resultSuggestionsEl.innerHTML = "<p>Chưa có dữ liệu. Hãy làm bài trắc nghiệm trước.</p>";
return;
}

```
const [c1, c2, c3] = top3;
const list = document.createElement("div");

[c1, c2, c3].forEach((code) => {
    const meta = riasecMeta[code];
    if (!meta) return;
    const block = document.createElement("div");
    block.className = "suggest-block";

    const title = document.createElement("h4");
    title.textContent = `${code} – ${meta.name}`;
    block.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = meta.desc;
    block.appendChild(desc);

    const careersWrap = document.createElement("div");
    meta.careers.forEach((career) => {
        const tag = document.createElement("button");
        tag.className = "career-tag";
        tag.type = "button";
        tag.textContent = career;
        tag.addEventListener("click", () => {
            openCareerModal(code, career);
        });
        careersWrap.appendChild(tag);
    });

    block.appendChild(careersWrap);
    list.appendChild(block);
});

resultSuggestionsEl.innerHTML = "";
resultSuggestionsEl.appendChild(list);
```

}

function openCareerModal(code, career) {
if (!careerModalBackdrop) return;
const meta = riasecMeta[code];

```
careerModalTitle.textContent = career;
const ul = document.createElement("ul");
ul.className = "checklist";

const items = [
    `Thuộc nhóm ${code} – ${meta ? meta.name : ""}`,
    "Tìm hiểu các trường đào tạo ngành liên quan",
    "Tìm hiểu nhu cầu việc làm trong 5–10 năm tới",
    "Trao đổi thêm với giáo viên, phụ huynh về lựa chọn này"
];

items.forEach((txt) => {
    const li = document.createElement("li");
    li.textContent = txt;
    ul.appendChild(li);
});

careerModalBody.innerHTML = "";
careerModalBody.appendChild(ul);
careerModalBackdrop.classList.add("visible");
```

}

function closeCareerModal() {
if (!careerModalBackdrop) return;
careerModalBackdrop.classList.remove("visible");
}

// Charts
async function renderCharts(scores) {
await loadChartJsIfNeeded();

```
const ctxBar = document.getElementById("bar-chart").getContext("2d");
const ctxRadar = document.getElementById("radar-chart").getContext("2d");

const labels = ["R", "I", "A", "S", "E", "C"];
const data = labels.map((code) => scores[code] || 0);

if (barChartInstance) {
    barChartInstance.destroy();
}
if (radarChartInstance) {
    radarChartInstance.destroy();
}

barChartInstance = new Chart(ctxBar, {
    type: "bar",
    data: {
        labels,
        datasets: [
            {
                label: "Điểm RIASEC",
                data
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.label}: ${ctx.raw} điểm`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                precision: 0,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

radarChartInstance = new Chart(ctxRadar, {
    type: "radar",
    data: {
        labels,
        datasets: [
            {
                label: "Điểm RIASEC",
                data
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});
```

}

// Result UI
async function renderResultUI(result) {
if (!result || !result.scores) {
resultTop3El.textContent = "—";
resultConfidenceEl.textContent = "Chưa có dữ liệu";
scoreREl.textContent = "0";
scoreIEl.textContent = "0";
scoreAEl.textContent = "0";
scoreSEl.textContent = "0";
scoreEEl.textContent = "0";
scoreCEl.textContent = "0";
resultSuggestionsEl.innerHTML = "<p>Chưa có dữ liệu. Hãy làm bài trắc nghiệm trước.</p>";
return;
}

```
const scores = result.scores;
const top3 = result.top3 || getTop3Codes(scores);

resultTop3El.textContent = top3.join("");
resultConfidenceEl.textContent = calculateConfidence(scores);
scoreREl.textContent = scores.R;
scoreIEl.textContent = scores.I;
scoreAEl.textContent = scores.A;
scoreSEl.textContent = scores.S;
scoreEEl.textContent = scores.E;
scoreCEl.textContent = scores.C;

renderResultSuggestions(top3);
await renderCharts(scores);
```

}

// Export TXT
function exportResultTxt(result) {
if (!result) return;
const { scores, top3, student, timestamp } = result;
const lines = [];

```
lines.push("KẾT QUẢ TRẮC NGHIỆM HOLLAND RIASEC");
lines.push("----------------------------------");
lines.push(`Thời gian: ${timestamp}`);
lines.push(`Họ tên: ${student.name || ""}`);
lines.push(`Mã HS: ${student.id || ""}`);
lines.push(`Lớp: ${student.class || ""}`);
lines.push(`Trường học / Khối lớp: ${student.school || ""}`);
lines.push(`Email: ${student.email || ""}`);
lines.push("");
lines.push("Điểm từng nhóm:");
lines.push(`R (Thực tế): ${scores.R}`);
lines.push(`I (Nghiên cứu): ${scores.I}`);
lines.push(`A (Nghệ thuật): ${scores.A}`);
lines.push(`S (Xã hội): ${scores.S}`);
lines.push(`E (Doanh nghiệp): ${scores.E}`);
lines.push(`C (Quy ước): ${scores.C}`);
lines.push("");
lines.push(`Top 3 nhóm nổi bật: ${top3.join(" – ")}`);
lines.push(`Độ phân biệt: ${calculateConfidence(scores)}`);
lines.push("");
lines.push("Lưu ý: Đây chỉ là công cụ tham khảo. Em nên trao đổi thêm với gia đình và thầy cô.");

const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = `riasec_${student.class || "hoc_sinh"}_${student.name || "ket_qua"}.txt`;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
```

}

// Admin table & CSV
function refreshAdminTable(filters = {}) {
const results = loadLocalResults();
adminResultsTable.innerHTML = "";

```
const { classFilter, dateFilter } = filters;

let rendered = 0;

results.forEach((r) => {
    const d = new Date(r.timestamp);
    const dateStr = d.toISOString().slice(0, 10);
    if (classFilter && r.student.class !== classFilter) return;
    if (dateFilter && dateStr !== dateFilter) return;

    const tr = document.createElement("tr");
    const riasecStr = `${r.scores.R}/${r.scores.I}/${r.scores.A}/${r.scores.S}/${r.scores.E}/${r.scores.C}`;

    tr.innerHTML = `
        <td>${dateStr}</td>
        <td>${r.student.name || ""}</td>
        <td>${r.student.id || ""}</td>
        <td>${r.student.class || ""}</td>
        <td>${r.student.school || ""}</td>
        <td>${r.student.email || ""}</td>
        <td>${riasecStr}</td>
    `;
    adminResultsTable.appendChild(tr);
    rendered++;
});

if (rendered === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="7" class="admin-empty-row">Không có kết quả phù hợp.</td>`;
    adminResultsTable.appendChild(tr);
}

updateAdminStats();
```

}

function updateAdminStats() {
if (!statTotalTestsEl || !statTotalClassesEl || !statTotalSchoolsEl || !adminClassStatsTable) {
return;
}

```
const results = loadLocalResults();
const total = results.length;

const classSet = new Set();
const schoolSet = new Set();
const countsByClass = {};

results.forEach((r) => {
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

const entries = Object.entries(countsByClass).sort((a, b) => b[1] - a[1]);
if (!entries.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="2" class="admin-empty-row">Chưa có dữ liệu.</td>`;
    tbody.appendChild(tr);
    return;
}

entries.forEach(([cls, count]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${cls}</td><td>${count}</td>`;
    tbody.appendChild(tr);
});
```

}

function handleApplyFilter() {
const cls = sanitizeInput(filterClassInput.value);
const date = filterDateInput.value || "";
refreshAdminTable({
classFilter: cls || null,
dateFilter: date || null
});
}

function exportAllToCsv() {
const results = loadLocalResults();
if (!results.length) {
alert("Chưa có dữ liệu để xuất CSV.");
return;
}

```
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
    "top3"
]);

results.forEach((r) => {
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
        (r.top3 || []).join("")
    ]);
});

const csv = rows
    .map((row) =>
        row
            .map((cell) => {
                const v = String(cell || "");
                if (v.includes(",") || v.includes('"')) {
                    return `"${v.replace(/"/g, '""')}"`;
                }
                return v;
            })
            .join(",")
    )
    .join("\n");

const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "riasec_results.csv";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
```

}

// Admin login
function handleAdminLogin() {
const pw = adminPasswordInput.value;
if (pw === ADMIN_PASSWORD) {
isAdminLoggedIn = true;
adminContent.classList.remove("hidden");
adminLoginSection.classList.add("hidden");
refreshAdminTable();
loadGithubConfigToForm();
} else {
alert("Mật khẩu admin không đúng.");
}
}

function loadGithubConfigToForm() {
const cfg = loadGithubConfig();
if (!cfg) return;
ghOwnerInput.value = cfg.owner || "";
ghRepoInput.value = cfg.repo || "";
ghPathInput.value = cfg.path || "";
ghTokenInput.value = cfg.token || "";
ghSecretInput.value = cfg.secret || "";
}

function handleSaveGithubConfig() {
const owner = ghOwnerInput.value.trim();
const repo = ghRepoInput.value.trim();
const path = ghPathInput.value.trim();
const token = ghTokenInput.value.trim();
const secret = ghSecretInput.value.trim();

```
if (!owner || !repo || !path || !token || !secret) {
    alert("Vui lòng nhập đầy đủ Owner, Repo, Path, Token và Secret.");
    return;
}

saveGithubConfig({ owner, repo, path, token, secret });
alert("Đã lưu cấu hình GitHub & mã hóa.");
```

}

// Tabs
function initTabs() {
tabButtons.forEach((btn) => {
btn.addEventListener("click", () => {
const tabId = btn.getAttribute("data-tab");
tabButtons.forEach((b) => b.classList.remove("active"));
tabPanels.forEach((p) => p.classList.remove("active"));
btn.classList.add("active");
const panel = document.getElementById(tabId);
if (panel) panel.classList.add("active");
});
});
}

function initAutosave() {
setInterval(() => {
const draft = {};
const pills = questionsContainer.querySelectorAll(".answer-pill");
pills.forEach((pill) => {
const qid = Number(pill.dataset.qid);
if (!draft[qid]) draft[qid] = null;
if (pill.classList.contains("selected-yes")) {
draft[qid] = true;
} else if (pill.classList.contains("selected-no")) {
draft[qid] = false;
}
});
saveDraft(draft);
}, 30000);
}

// Submit test
async function handleSubmitTest() {
if (!ensureStudentInfo()) return;

```
const scores = calculateScores();
const top3 = getTop3Codes(scores);
const now = new Date();

const result = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: now.toISOString(),
    student: {
        name: sanitizeInput(studentNameInput.value),
        id: sanitizeInput(studentIdInput.value),
        class: sanitizeInput(studentClassInput.value),
        school: sanitizeInput(studentSchoolInput.value),
        email: sanitizeInput(studentEmailInput.value)
    },
    scores,
    top3
};

const results = loadLocalResults();
results.push(result);
saveLocalResults(results);

saveDraft({});

await renderResultUI(result);

tabButtons.forEach((btn) => {
    if (btn.getAttribute("data-tab") === "tab-result") {
        btn.click();
    }
});

const ghConfig = loadGithubConfig();
if (isAdminLoggedIn && ghConfig && ghConfig.owner && ghConfig.repo && ghConfig.path && ghConfig.token && ghConfig.secret) {
    syncAllLocalToGithub().catch((err) => {
        console.warn("Không đồng bộ được GitHub (tự động, có thể bỏ qua):", err);
    });
}

refreshAdminTable();
```

}

function handleResetTest() {
if (!confirm("Bạn có chắc muốn làm lại từ đầu? Tất cả lựa chọn hiện tại sẽ mất.")) return;
localStorage.removeItem(LS_DRAFT_KEY);
saveDraft({});
buildQuestions();
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
initQuestionChangeListener();

```
const results = loadLocalResults();
if (results.length) {
    renderResultUI(results[results.length - 1]);
}

if (themeToggle) {
    themeToggle.addEventListener("change", () => {
        applyTheme(themeToggle.checked ? "dark" : "light");
    });
}

submitTestBtn.addEventListener("click", () => {
    submitTestBtn.disabled = true;
    handleSubmitTest()
        .catch((err) => {
            console.error(err);
            alert("Có lỗi xảy ra khi xử lý kết quả. Vui lòng thử lại.");
        })
        .finally(() => {
            submitTestBtn.disabled = false;
        });
});

resetTestBtn.addEventListener("click", handleResetTest);
backToTestBtn.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
        if (btn.getAttribute("data-tab") === "tab-test") {
            btn.click();
        }
    });
});

exportTxtBtn.addEventListener("click", () => {
    const results = loadLocalResults();
    if (!results.length) {
        alert("Chưa có kết quả nào để xuất.");
        return;
    }
    exportResultTxt(results[results.length - 1]);
});

if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", handleAdminLogin);
}
if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", handleApplyFilter);
}
if (exportCsvBtn) {
    exportCsvBtn.addEventListener("click", exportAllToCsv);
}
if (syncGithubBtn) {
    syncGithubBtn.addEventListener("click", () => {
        syncGithubBtn.disabled = true;
        syncGithubBtn.textContent = "Đang đồng bộ...";
        syncAllLocalToGithub()
            .catch((err) => {
                console.error(err);
                alert("Không đồng bộ được lên GitHub. Vui lòng kiểm tra cấu hình & Token.");
            })
            .finally(() => {
                syncGithubBtn.disabled = false;
                syncGithubBtn.textContent = "☁️ Đồng bộ toàn bộ lên GitHub";
            });
    });

    saveGhConfigBtn.addEventListener("click", handleSaveGithubConfig);
}

if (careerModalCloseBtn) {
    careerModalCloseBtn.addEventListener("click", closeCareerModal);
}
if (careerModalBackdrop) {
    careerModalBackdrop.addEventListener("click", (e) => {
        if (e.target === careerModalBackdrop) {
            closeCareerModal();
        }
    });
}
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeCareerModal();
    }
});
```

}

document.addEventListener("DOMContentLoaded", init);
