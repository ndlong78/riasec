document.addEventListener("DOMContentLoaded", () => {
    // ================ BRAND CONFIG (tuỳ chỉnh theo từng trường) =================
    const brandConfig = {
        logoSrc: "logo-CBB & Family.png", // đổi sang logo trường, ví dụ: "logo-thpt-abc.png"
        name: "CBB & Family / School Career Center", // tên trường / đơn vị
        sub: "Trắc nghiệm tính cách nghề nghiệp Holland RIASEC" // tagline dưới logo
    };

    const brandLogoEl = document.getElementById("brand-logo");
    const brandNameEl = document.getElementById("brand-name");
    const brandSubEl = document.getElementById("brand-sub");

    if (brandLogoEl && brandConfig.logoSrc) {
        brandLogoEl.src = brandConfig.logoSrc;
    }
    if (brandNameEl && brandConfig.name) {
        brandNameEl.textContent = brandConfig.name;
    }
    if (brandSubEl && brandConfig.sub) {
        brandSubEl.textContent = brandConfig.sub;
    }

    // ================ ADMIN PASSWORD =================
    // Giáo viên có thể đổi mật khẩu Admin ở đây
    const ADMIN_PASSWORD = "giaovien2025"; // đổi tuỳ ý
    let adminUnlocked = false;

    // ===================== DATA ============================
    const riasecMeta = {
        R: {
            code: "R",
            name: "Realistic – Thực tế",
            shortName: "Realistic",
            desc: "Thích làm việc với tay chân, máy móc, dụng cụ, thích hoạt động ngoài trời hơn là ngồi văn phòng.",
            careers: [
                "Kỹ thuật cơ khí, cơ điện tử",
                "Kỹ thuật điện, điện tử, điện lạnh",
                "Kỹ thuật ô tô, công nghệ ô tô, chuẩn đoán & sửa chữa ô tô",
                "Kỹ thuật xây dựng dân dụng, công trình giao thông",
                "Kỹ thuật điều khiển và tự động hóa",
                "Công nghệ kỹ thuật công nghiệp, bảo trì thiết bị",
                "Công nghệ nông nghiệp, chăn nuôi, trồng trọt công nghệ cao",
                "Kỹ thuật viên lắp đặt – bảo trì mạng viễn thông, Internet",
                "Kỹ thuật viên vận hành nhà máy, khu công nghiệp",
                "Ngành Logistics kho bãi, quản lý vận hành thiết bị"
            ]
        },
        I: {
            code: "I",
            name: "Investigative – Nghiên cứu",
            shortName: "Investigative",
            desc: "Thích tìm hiểu, phân tích, giải quyết vấn đề, yêu thích khoa học, công nghệ và dữ liệu.",
            careers: [
                "Khoa học máy tính, Kỹ thuật phần mềm",
                "Khoa học dữ liệu, Trí tuệ nhân tạo (AI)",
                "An toàn thông tin, An ninh mạng",
                "Y khoa, Răng – Hàm – Mặt, Dược học",
                "Sinh học, Công nghệ sinh học, Vi sinh",
                "Toán học, Toán ứng dụng, Thống kê",
                "Vật lý kỹ thuật, Hóa học, Công nghệ hóa học",
                "Kỹ thuật môi trường, Khoa học trái đất",
                "Nghiên cứu & phát triển (R&D) trong doanh nghiệp",
                "Phân tích dữ liệu kinh doanh, Business Intelligence"
            ]
        },
        A: {
            code: "A",
            name: "Artistic – Nghệ thuật",
            shortName: "Artistic",
            desc: "Thích sáng tạo, tự do, nghệ thuật, thiết kế, ít thích sự gò bó theo quy tắc cứng nhắc.",
            careers: [
                "Thiết kế đồ họa, Thiết kế thương hiệu (Branding)",
                "Thiết kế UX/UI cho sản phẩm số, ứng dụng, website",
                "Kiến trúc, Thiết kế nội thất, Quy hoạch đô thị",
                "Truyền thông đa phương tiện, Sản xuất video, Motion graphic",
                "Nhiếp ảnh, Quay phim, Dựng phim",
                "Âm nhạc, Thanh nhạc, Nhạc công, Sản xuất âm nhạc",
                "Biên kịch, Đạo diễn, Diễn viên sân khấu – điện ảnh",
                "Thiết kế thời trang, Stylist, Thiết kế phụ kiện",
                "Ngôn ngữ & Viết: Copywriter, Content Creator, Biên tập viên",
                "Thiết kế game, Thiết kế nhân vật – bối cảnh trong game"
            ]
        },
        S: {
            code: "S",
            name: "Social – Xã hội",
            shortName: "Social",
            desc: "Thích giúp đỡ người khác, làm việc với con người, dạy học, chăm sóc, lắng nghe.",
            careers: [
                "Sư phạm (Giáo viên tiểu học, THCS, THPT)",
                "Giáo dục mầm non, Giáo dục đặc biệt",
                "Tâm lý học, Tâm lý học giáo dục, Tham vấn học đường",
                "Y tá, Điều dưỡng, Kỹ thuật viên y tế, Hộ sinh",
                "Công tác xã hội, Phát triển cộng đồng",
                "Chuyên viên nhân sự (HR), Đào tạo & Phát triển",
                "Tư vấn viên hướng nghiệp, Tư vấn tuyển sinh",
                "Hướng dẫn viên du lịch, Điều hành tour",
                "Huấn luyện viên thể thao, Fitness, Coach kỹ năng mềm",
                "Chăm sóc khách hàng, CSKH cao cấp"
            ]
        },
        E: {
            code: "E",
            name: "Enterprising – Doanh nghiệp",
            shortName: "Enterprising",
            desc: "Thích lãnh đạo, kinh doanh, thuyết phục, bán hàng, khởi nghiệp, thích thử thách.",
            careers: [
                "Quản trị kinh doanh, Quản trị doanh nghiệp",
                "Marketing, Digital Marketing, Truyền thông thương hiệu",
                "Kinh doanh quốc tế, Thương mại điện tử",
                "Tài chính – Ngân hàng, Đầu tư chứng khoán",
                "Quản trị du lịch, Nhà hàng – Khách sạn, Resort",
                "Chuyên viên bán hàng (Sales), Tư vấn tài chính, BĐS",
                "Quản trị chuỗi cung ứng, Quản trị Logistics",
                "Khởi nghiệp Startup, Chủ doanh nghiệp nhỏ",
                "Quản trị dự án, Quản lý sản phẩm (Product Manager)",
                "MC, Host chương trình, KOL/Influencer kinh doanh"
            ]
        },
        C: {
            code: "C",
            name: "Conventional – Truyền thống",
            shortName: "Conventional",
            desc: "Thích công việc gọn gàng, có quy trình rõ ràng, làm việc với số liệu, văn bản, hệ thống.",
            careers: [
                "Kế toán, Kiểm toán, Tài chính doanh nghiệp",
                "Nhân viên hành chính – văn phòng, Thư ký, Trợ lý",
                "Quản trị văn phòng, Quản trị nhân sự vận hành",
                "Thống kê, Phân tích dữ liệu nghiệp vụ",
                "Ngân hàng – giao dịch viên, hỗ trợ tín dụng",
                "Quản trị hệ thống thông tin quản lý (MIS)",
                "Nhân viên hồ sơ, chứng từ, xuất nhập khẩu",
                "Chuyên viên quản lý chất lượng (QA/QC)",
                "Thư viện, Lưu trữ, Văn thư",
                "Nhân viên vận hành hệ thống ERP, CRM trong doanh nghiệp"
            ]
        }
    };

    const evalByType = {
        R: "Bạn thiên về nhóm Thực tế (Realistic): hợp môi trường thực hành, máy móc, kỹ thuật, hoạt động cụ thể hơn là ngồi bàn giấy quá nhiều.",
        I: "Bạn thiên về nhóm Nghiên cứu (Investigative): hợp phân tích, tư duy logic, khoa học – công nghệ, dữ liệu và những vấn đề cần đào sâu.",
        A: "Bạn thiên về nhóm Nghệ thuật (Artistic): hợp công việc sáng tạo, thẩm mỹ, thiết kế, nội dung – nơi bạn được thể hiện cá tính và ý tưởng.",
        S: "Bạn thiên về nhóm Xã hội (Social): hợp môi trường làm việc với con người, giúp đỡ, giảng dạy, lắng nghe và hỗ trợ người khác.",
        E: "Bạn thiên về nhóm Doanh nghiệp (Enterprising): hợp kinh doanh, lãnh đạo, thuyết phục, nơi có mục tiêu, thành tích và cơ hội thăng tiến.",
        C: "Bạn thiên về nhóm Truyền thống (Conventional): hợp công việc ổn định, có quy trình, số liệu rõ ràng, ít rủi ro và có trật tự."
    };

    const questions = [
        // (Giữ nguyên 60 câu như phiên bản trước – mình không rút gọn ở đây)
        // R - Realistic
        { id: 1, type: "R", text: "Tôi thích sửa chữa hoặc lắp ráp các thiết bị (xe, máy móc, đồ điện...)."},
        { id: 2, type: "R", text: "Tôi thích làm việc bằng tay hơn là chỉ ngồi bàn giấy."},
        { id: 3, type: "R", text: "Tôi cảm thấy thú vị khi sử dụng dụng cụ như búa, tua-vít, kìm..."},
        { id: 4, type: "R", text: "Tôi thích các hoạt động ngoài trời như trồng cây, làm vườn, cắm trại."},
        { id: 5, type: "R", text: "Tôi thấy quen thuộc và thoải mái trong môi trường xưởng, kho hoặc công trường."},
        { id: 6, type: "R", text: "Tôi thích lắp ráp mô hình, robot hoặc LEGO."},
        { id: 7, type: "R", text: "Tôi muốn hiểu cách vận hành của các máy móc, thiết bị kỹ thuật."},
        { id: 8, type: "R", text: "Khi đồ trong nhà hỏng, tôi thường muốn tự mày mò sửa trước."},
        { id: 9, type: "R", text: "Tôi thấy hài lòng khi hoàn thành một việc mang tính “tay chân” cụ thể."},
        { id: 10, type: "R", text: "Tôi không ngại bị bẩn tay khi làm việc nếu đó là việc mình thích."},

        // I - Investigative
        { id: 11, type: "I", text: "Tôi thích tìm hiểu nguyên nhân phía sau một hiện tượng (vì sao lại xảy ra như vậy)."},
        { id: 12, type: "I", text: "Tôi hứng thú với việc đọc sách/website về khoa học, công nghệ hoặc kiến thức mới."},
        { id: 13, type: "I", text: "Tôi thích giải những bài toán khó hoặc câu đố logic, tư duy."},
        { id: 14, type: "I", text: "Tôi thường đặt nhiều câu hỏi “vì sao” khi học một khái niệm mới."},
        { id: 15, type: "I", text: "Tôi thích phân tích số liệu, biểu đồ hoặc thông tin để tìm ra kết luận."},
        { id: 16, type: "I", text: "Tôi cảm thấy thích thú khi thử nghiệm, làm thí nghiệm, kiểm chứng ý tưởng."},
        { id: 17, type: "I", text: "Tôi quan tâm đến các ngành như y khoa, công nghệ, khoa học dữ liệu hoặc nghiên cứu."},
        { id: 18, type: "I", text: "Tôi có xu hướng tra cứu thêm thông tin ngoài sách giáo khoa khi tò mò về một chủ đề."},
        { id: 19, type: "I", text: "Tôi thích làm việc độc lập, tập trung suy nghĩ hơn là phải giao tiếp liên tục."},
        { id: 20, type: "I", text: "Khi gặp một vấn đề, tôi thích phân tích từng bước và tìm giải pháp hợp lý."},

        // A - Artistic
        { id: 21, type: "A", text: "Tôi thích vẽ, thiết kế, chụp ảnh hoặc tạo nội dung sáng tạo."},
        { id: 22, type: "A", text: "Tôi thường để ý đến màu sắc, bố cục, thẩm mỹ xung quanh."},
        { id: 23, type: "A", text: "Tôi thích nghe nhạc, chơi nhạc cụ, hát hoặc các hoạt động nghệ thuật biểu diễn."},
        { id: 24, type: "A", text: "Tôi muốn công việc tương lai có yếu tố sáng tạo, không quá gò bó."},
        { id: 25, type: "A", text: "Tôi hay nghĩ ra ý tưởng mới, cách thể hiện mới cho bài thuyết trình hoặc bài tập."},
        { id: 26, type: "A", text: "Tôi thích viết: nhật ký, truyện ngắn, thơ hoặc nội dung cho mạng xã hội."},
        { id: 27, type: "A", text: "Tôi cảm thấy hứng thú với các ngành như thiết kế đồ họa, kiến trúc, media, phim ảnh."},
        { id: 28, type: "A", text: "Tôi thích không gian học tập/làm việc được trang trí đẹp và có cá tính."},
        { id: 29, type: "A", text: "Tôi không thích các công việc lặp lại, ít ý tưởng mới."},
        { id: 30, type: "A", text: "Tôi dễ bị thu hút bởi những sản phẩm/chiến dịch có thiết kế hoặc câu chuyện sáng tạo."},

        // S - Social
        { id: 31, type: "S", text: "Tôi thích giúp đỡ, lắng nghe và hỗ trợ bạn bè khi họ gặp khó khăn."},
        { id: 32, type: "S", text: "Tôi thấy thoải mái khi làm việc nhóm, trao đổi với người khác."},
        { id: 33, type: "S", text: "Tôi quan tâm đến cảm xúc và suy nghĩ của người xung quanh."},
        { id: 34, type: "S", text: "Tôi thích tham gia các hoạt động câu lạc bộ, tình nguyện, hỗ trợ cộng đồng."},
        { id: 35, type: "S", text: "Tôi sẵn sàng dành thời gian giải thích, hướng dẫn cho bạn bè khi họ chưa hiểu bài."},
        { id: 36, type: "S", text: "Tôi thích những nghề được tiếp xúc nhiều với con người (học sinh, bệnh nhân, khách hàng...)."},
        { id: 37, type: "S", text: "Tôi cảm thấy vui khi thấy người khác tiến bộ nhờ sự hỗ trợ của mình."},
        { id: 38, type: "S", text: "Mọi người thường tìm đến tôi để tâm sự hoặc xin lời khuyên."},
        { id: 39, type: "S", text: "Tôi quan tâm đến môi trường học đường tích cực, thân thiện."},
        { id: 40, type: "S", text: "Tôi muốn công việc tương lai có ý nghĩa với cộng đồng, xã hội."},

        // E - Enterprising
        { id: 41, type: "E", text: "Tôi thích thuyết trình, thảo luận trước lớp hoặc đám đông."},
        { id: 42, type: "E", text: "Tôi cảm thấy hứng thú với ý tưởng kinh doanh, khởi nghiệp hoặc làm dự án riêng."},
        { id: 43, type: "E", text: "Tôi thích đặt mục tiêu rõ ràng và cố gắng đạt được (điểm số, cuộc thi, doanh thu...)."},
        { id: 44, type: "E", text: "Tôi không ngại nói chuyện, thương lượng hoặc thuyết phục người khác."},
        { id: 45, type: "E", text: "Tôi quan tâm đến các ngành như kinh doanh, marketing, tài chính, quản lý."},
        { id: 46, type: "E", text: "Tôi thích đóng vai trò “leader” (trưởng nhóm, lớp trưởng, điều phối hoạt động...)."},
        { id: 47, type: "E", text: "Tôi muốn công việc có cơ hội thăng tiến, thu nhập cao nếu nỗ lực tốt."},
        { id: 48, type: "E", text: "Tôi thích tìm cách “bán” ý tưởng của mình cho người khác."},
        { id: 49, type: "E", text: "Tôi sẵn sàng chấp nhận rủi ro hợp lý để theo đuổi cơ hội mới."},
        { id: 50, type: "E", text: "Tôi cảm thấy hứng khởi trong môi trường năng động, cạnh tranh."},

        // C - Conventional
        { id: 51, type: "C", text: "Tôi thích công việc rõ ràng, có quy trình, có hướng dẫn cụ thể."},
        { id: 52, type: "C", text: "Tôi cảm thấy thoải mái khi làm việc với bảng tính, số liệu hoặc hồ sơ, giấy tờ."},
        { id: 53, type: "C", text: "Tôi thích sắp xếp, tổ chức lại đồ đạc, tài liệu, thư mục máy tính cho ngăn nắp."},
        { id: 54, type: "C", text: "Tôi chú ý các chi tiết nhỏ, ít khi bỏ sót thông tin quan trọng."},
        { id: 55, type: "C", text: "Tôi thấy ổn khi làm những công việc lặp lại nhưng rõ ràng, dễ theo dõi."},
        { id: 56, type: "C", text: "Tôi thích ghi chép, lập danh sách việc cần làm và tick dần từng mục."},
        { id: 57, type: "C", text: "Tôi quan tâm đến các ngành như kế toán, hành chính, quản lý hồ sơ, dữ liệu."},
        { id: 58, type: "C", text: "Tôi ít thích sự mơ hồ, thích biết rõ mình phải làm gì, deadline khi nào."},
        { id: 59, type: "C", text: "Tôi làm việc tốt hơn khi có quy định, quy trình được xây dựng sẵn."},
        { id: 60, type: "C", text: "Tôi thích cảm giác “mọi thứ gọn gàng, có trật tự” trong công việc và cuộc sống."}
    ];

    // ===================== DOM ============================
    const questionsContainer = document.getElementById("questions-container");
    const progressText = document.getElementById("progress-text");
    const progressPercent = document.getElementById("progress-percent");
    const progressBar = document.getElementById("progress-bar");
    const submitBtn = document.getElementById("submit-btn");
    const warningText = document.getElementById("warning-text");
    const resetBtn = document.getElementById("reset-btn");
    const resultCodePill = document.getElementById("result-code-pill");
    const top3Container = document.getElementById("top3-container");
    const careersContainer = document.getElementById("careers-container");
    const riasecDetailGrid = document.getElementById("riasec-detail-grid");
    const overallEval = document.getElementById("overall-eval");
    const retakeBtn = document.getElementById("retake-btn");
    const backToQuizBtn = document.getElementById("back-to-quiz-btn");
    const saveLocalBtn = document.getElementById("save-local-btn");
    const downloadTxtBtn = document.getElementById("download-txt-btn");
    const printBtn = document.getElementById("print-btn");
    const historyBody = document.getElementById("history-body");
    const summaryStudentInfo = document.getElementById("summary-student-info");
    const exportCsvBtn = document.getElementById("export-csv-btn");
    const sendGithubBtn = document.getElementById("send-github-btn");

    const studentNameInput = document.getElementById("student-name");
    const studentClassInput = document.getElementById("student-class");
    const studentIdInput = document.getElementById("student-id");
    const studentEmailInput = document.getElementById("student-email");

    const navIntro = document.getElementById("nav-intro");
    const navQuiz = document.getElementById("nav-quiz");
    const navResults = document.getElementById("nav-results");
    const navAdmin = document.getElementById("nav-admin");

    const pages = document.querySelectorAll(".page");
    const tabButtons = document.querySelectorAll(".tab-btn");

    // Admin GitHub config inputs
    const ghOwnerInput = document.getElementById("gh-owner");
    const ghRepoInput = document.getElementById("gh-repo");
    const ghTokenInput = document.getElementById("gh-token");
    const ghPassphraseInput = document.getElementById("gh-passphrase");
    const ghSaveConfigBtn = document.getElementById("gh-save-config-btn");
    const ghClearConfigBtn = document.getElementById("gh-clear-config-btn");

    // Ô lọc trong Admin
    const filterClassInput = document.getElementById("filter-class");
    const filterFromDateInput = document.getElementById("filter-from-date");
    const filterToDateInput = document.getElementById("filter-to-date");
    const filterApplyBtn = document.getElementById("filter-apply-btn");
    const filterResetBtn = document.getElementById("filter-reset-btn");

    let barChart = null;
    let radarChart = null;
    let lastResult = null;

    // ===================== NAV ============================
    function showPage(pageId) {
        pages.forEach(p => p.classList.toggle("active", p.id === pageId));
        tabButtons.forEach(btn => {
            const target = btn.dataset.target;
            btn.classList.toggle("active", target === pageId);
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.target;
            if (btn.disabled) return;

            // Nếu là tab Admin thì hỏi mật khẩu
            if (target === "page-admin" && !adminUnlocked) {
                const pwd = prompt("Nhập mật khẩu Admin (do giáo viên cung cấp):");
                if (pwd !== ADMIN_PASSWORD) {
                    alert("Mật khẩu không đúng. Vui lòng liên hệ giáo viên phụ trách.");
                    return;
                }
                adminUnlocked = true;
            }

            showPage(target);
        });
    });

    // ===================== RENDER QUESTIONS ============================
    function getTypeLabel(type) {
        const meta = riasecMeta[type];
        return `${meta.code} – ${meta.shortName}`;
    }

    function renderQuestions() {
        questions.forEach(q => {
            const wrapper = document.createElement("div");
            wrapper.className = "question-item";
            wrapper.dataset.questionId = q.id.toString();
            wrapper.dataset.type = q.type;

            const optionsHtml = [1, 2, 3, 4, 5].map(v => {
                const id = `q${q.id}_opt${v}`;
                let labelText, labelShort;
                if (v === 1) { labelText = "Hoàn toàn không đồng ý"; labelShort = "1"; }
                else if (v === 2) { labelText = "Không đồng ý"; labelShort = "2"; }
                else if (v === 3) { labelText = "Phân vân"; labelShort = "3"; }
                else if (v === 4) { labelText = "Đồng ý"; labelShort = "4"; }
                else { labelText = "Rất đồng ý"; labelShort = "5"; }
                return `
                    <div class="option-pill">
                        <input type="radio" id="${id}" name="q${q.id}" value="${v}">
                        <label for="${id}">
                            ${labelShort}
                            <small>${labelText}</small>
                        </label>
                    </div>
                `;
            }).join("");

            wrapper.innerHTML = `
                <div class="question-top">
                    <div>
                        <div class="question-label">Câu ${q.id}</div>
                        <div class="question-text">${q.text}</div>
                    </div>
                    <div class="question-tag">${getTypeLabel(q.type)}</div>
                </div>
                <div class="options-row">
                    ${optionsHtml}
                </div>
            `;
            questionsContainer.appendChild(wrapper);
        });
    }

    renderQuestions();

    // ===================== PROGRESS ============================
    function getAnsweredCount() {
        let count = 0;
        for (const q of questions) {
            const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
            if (checked) count++;
        }
        return count;
    }

    function updateProgress() {
        const answered = getAnsweredCount();
        const total = questions.length;
        const percent = Math.round((answered / total) * 100);

        progressText.textContent = `Đã hoàn thành: ${answered}/${total} câu`;
        progressPercent.textContent = `${percent}%`;
        progressBar.style.width = `${percent}%`;

        questions.forEach(q => {
            const block = document.querySelector(`.question-item[data-question-id="${q.id}"]`);
            const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
            if (block) {
                block.classList.toggle("answered", !!checked);
            }
        });

        if (answered === total) {
            submitBtn.disabled = false;
            warningText.style.display = "none";
        } else {
            submitBtn.disabled = true;
        }
    }

    questionsContainer.addEventListener("change", (e) => {
        if (e.target && e.target.matches("input[type='radio']")) {
            updateProgress();
        }
    });

    // ===================== SCORE & CHARTS ============================
    function computeScores() {
        const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
        for (const q of questions) {
            const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
            if (checked) {
                const value = parseInt(checked.value, 10) || 0;
                scores[q.type] += value;
            }
        }
        return scores;
    }

    function renderCharts(scores) {
        const labels = ["R", "I", "A", "S", "E", "C"];
        const data = labels.map(code => scores[code]);

        const barCtx = document.getElementById("barChart").getContext("2d");
        const radarCtx = document.getElementById("radarChart").getContext("2d");

        if (barChart) barChart.destroy();
        if (radarChart) radarChart.destroy();

        barChart = new Chart(barCtx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Điểm từng nhóm",
                    data: data
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 50
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });

        radarChart = new Chart(radarCtx, {
            type: "radar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Hồ sơ RIASEC",
                    data: data
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        suggestedMax: 50
                    }
                }
            }
        });
    }

    function renderTop3AndCareers(scores) {
        const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const top3 = entries.slice(0, 3);

        const codeString = top3.map(([code]) => code).join("");
        resultCodePill.textContent = `Mã nổi bật (Top 3): ${codeString}`;

        top3Container.innerHTML = "";
        top3.forEach(([code, score], index) => {
            const meta = riasecMeta[code];
            const div = document.createElement("div");
            const rankIcon = index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉";
            div.className = "top3-item";
            div.innerHTML = `
                <div><strong>${rankIcon} ${meta.name}</strong> (mã: ${meta.code}) – Điểm: ${score}</div>
                <div class="small-muted">${meta.desc}</div>
            `;
            top3Container.appendChild(div);
        });

        careersContainer.innerHTML = "";
        const careersBlock = document.createElement("div");
        careersBlock.innerHTML = `<strong>Gợi ý ngành học & nghề nghiệp theo top 3 nhóm:</strong>`;
        top3.forEach(([code]) => {
            const meta = riasecMeta[code];
            const title = document.createElement("div");
            title.style.marginTop = "8px";
            title.innerHTML = `<em>${meta.name}:</em>`;
            const list = document.createElement("ul");
            meta.careers.forEach(c => {
                const li = document.createElement("li");
                li.textContent = c;
                list.appendChild(li);
            });
            careersBlock.appendChild(title);
            careersBlock.appendChild(list);
        });
        careersContainer.appendChild(careersBlock);

        const topCodes = top3.map(([c]) => c);
        riasecDetailGrid.innerHTML = "";
        ["R", "I", "A", "S", "E", "C"].forEach(code => {
            const meta = riasecMeta[code];
            const card = document.createElement("div");
            card.className = "riasec-detail-card";
            if (topCodes.includes(code)) {
                card.classList.add("highlight");
            }
            card.innerHTML = `
                <h4><span class="riasec-code">${meta.code}</span><span class="riasec-name">${meta.shortName}</span></h4>
                <p class="riasec-desc">${meta.desc}</p>
            `;
            riasecDetailGrid.appendChild(card);
        });

        const top1Code = top3[0][0];
        const mainEval = evalByType[top1Code] || "";
        const comboCodes = top3.map(([c]) => c).join(" – ");
        overallEval.textContent =
            mainEval +
            ` Nhìn chung, mã RIASEC nổi bật của bạn là ${codeString} (${comboCodes}). Hãy ưu tiên tìm hiểu kỹ các ngành thuộc những nhóm này khi chọn khối, chọn ngành học.`;

        const sName = studentNameInput.value.trim() || "Chưa rõ họ tên";
        const sClass = studentClassInput.value.trim() || "Chưa rõ lớp";
        const sId = studentIdInput.value.trim() || "Chưa rõ mã HS";
        const sEmail = studentEmailInput.value.trim() || "Chưa rõ email";
        summaryStudentInfo.textContent = `${sName} – Lớp: ${sClass} – Mã HS: ${sId} – Mã RIASEC: ${codeString}`;

        lastResult = {
            timestamp: new Date().toISOString(),
            studentName: sName,
            studentClass: sClass,
            studentId: sId,
            studentEmail: sEmail,
            scores,
            top3,
            codeString
        };
    }

    function ensureStudentInfo() {
        const name = studentNameInput.value.trim();
        const cls = studentClassInput.value.trim();
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
        return true;
    }

    function showResultsPage() {
        const scores = computeScores();
        renderCharts(scores);
        renderTop3AndCareers(scores);
        navResults.disabled = false;
        showPage("page-results");
        refreshHistoryTable();
    }

    submitBtn.addEventListener("click", () => {
        const answered = getAnsweredCount();
        if (answered !== questions.length) {
            warningText.style.display = "block";
            return;
        }
        warningText.style.display = "none";

        if (!ensureStudentInfo()) return;
        showResultsPage();
    });

    // ===================== RESET / RETAKE ============================
    function resetAnswers() {
        const radios = document.querySelectorAll("#quiz-form input[type='radio']");
        radios.forEach(r => { r.checked = false; });
        const questionBlocks = document.querySelectorAll(".question-item");
        questionBlocks.forEach(q => q.classList.remove("answered"));
        updateProgress();
        lastResult = null;
        resultCodePill.textContent = "Mã nổi bật (Top 3): —";
        top3Container.innerHTML = "";
        careersContainer.innerHTML = "";
        riasecDetailGrid.innerHTML = "";
        overallEval.textContent = "Bạn hãy hoàn thành bài trắc nghiệm để xem phần đánh giá tổng quan.";
        summaryStudentInfo.textContent = "Chưa có họ tên/lớp";
    }

    resetBtn.addEventListener("click", () => {
        resetAnswers();
        showPage("page-quiz");
    });

    retakeBtn.addEventListener("click", () => {
        resetAnswers();
        showPage("page-quiz");
    });

    backToQuizBtn.addEventListener("click", () => {
        showPage("page-quiz");
    });

    // ===================== LOCAL STORAGE HISTORY ============================
    const STORAGE_KEY = "riasecResults";

    function loadHistory() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return [];
            return JSON.parse(raw) || [];
        } catch (e) {
            console.error("Error reading history:", e);
            return [];
        }
    }

    function saveHistory(arr) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
        } catch (e) {
            console.error("Error saving history:", e);
        }
    }

    function getFilteredHistory() {
        const history = loadHistory();
        const classFilter = (filterClassInput?.value || "").trim().toLowerCase();
        const fromDateStr = filterFromDateInput?.value || "";
        const toDateStr = filterToDateInput?.value || "";

        if (!filterClassInput && !filterFromDateInput && !filterToDateInput) {
            return history;
        }

        return history.filter(item => {
            let ok = true;

            if (classFilter) {
                const cls = (item.studentClass || "").toLowerCase();
                if (!cls.includes(classFilter)) ok = false;
            }

            if (fromDateStr) {
                const from = new Date(fromDateStr);
                const t = new Date(item.timestamp);
                if (t < from) ok = false;
            }

            if (toDateStr) {
                const to = new Date(toDateStr);
                to.setDate(to.getDate() + 1);
                const t = new Date(item.timestamp);
                if (t >= to) ok = false;
            }

            return ok;
        });
    }

    function refreshHistoryTable() {
        const history = getFilteredHistory();
        historyBody.innerHTML = "";

        if (!history.length) {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td colspan="6">Không có dữ liệu lịch sử phù hợp với điều kiện lọc.</td>`;
            historyBody.appendChild(tr);
            return;
        }

        history.forEach(item => {
            const tr = document.createElement("tr");
            const dateStr = new Date(item.timestamp).toLocaleString("vi-VN");
            tr.innerHTML = `
                <td>${dateStr}</td>
                <td>${item.studentName || ""}</td>
                <td>${item.studentClass || ""}</td>
                <td>${item.studentId || ""}</td>
                <td>${item.studentEmail || ""}</td>
                <td>${item.codeString || ""}</td>
            `;
            historyBody.appendChild(tr);
        });
    }

    saveLocalBtn.addEventListener("click", () => {
        if (!lastResult) {
            alert("Bạn cần hoàn thành bài test và xem kết quả trước khi lưu.");
            return;
        }
        const history = loadHistory();
        history.unshift(lastResult);
        saveHistory(history);
        refreshHistoryTable();
        alert("Đã lưu kết quả vào lịch sử trên máy.");
    });

    // ===================== DOWNLOAD TXT ============================
    function buildResultText(result) {
        const { studentName, studentClass, studentId, studentEmail, codeString, scores, top3 } = result;
        const dateStr = new Date(result.timestamp).toLocaleString("vi-VN");

        let text = "";
        text += "KẾT QUẢ TRẮC NGHIỆM HOLLAND RIASEC\n";
        text += "-----------------------------------\n";
        text += `Họ tên: ${studentName}\n`;
        text += `Lớp: ${studentClass}\n`;
        text += `Mã học sinh: ${studentId}\n`;
        text += `Email: ${studentEmail}\n`;
        text += `Thời gian: ${dateStr}\n\n`;
        text += `Mã RIASEC nổi bật (Top 3): ${codeString}\n\n`;
        text += "Điểm từng nhóm:\n";
        text += `R (Realistic – Thực tế): ${scores.R}\n`;
        text += `I (Investigative – Nghiên cứu): ${scores.I}\n`;
        text += `A (Artistic – Nghệ thuật): ${scores.A}\n`;
        text += `S (Social – Xã hội): ${scores.S}\n`;
        text += `E (Enterprising – Doanh nghiệp): ${scores.E}\n`;
        text += `C (Conventional – Truyền thống): ${scores.C}\n\n`;

        const top1 = top3[0][0];
        text += "Đánh giá tổng quan:\n";
        text += `${evalByType[top1] || ""}\n\n`;

        text += "Gợi ý ngành học / nghề nghiệp nên tìm hiểu thêm:\n\n";
        top3.forEach(([code]) => {
            const meta = riasecMeta[code];
            text += `- ${meta.name} (${meta.code}):\n`;
            meta.careers.forEach(c => {
                text += `  • ${c}\n`;
            });
            text += "\n";
        });

        text += "Lưu ý: Kết quả chỉ mang tính tham khảo. Hãy trao đổi thêm với phụ huynh, thầy cô hoặc chuyên gia hướng nghiệp.\n";
        return text;
    }

    downloadTxtBtn.addEventListener("click", () => {
        if (!lastResult) {
            alert("Bạn cần hoàn thành bài test và xem kết quả trước khi tải file.");
            return;
        }
        const text = buildResultText(lastResult);
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const sName = (lastResult.studentName || "hoc_sinh").replace(/\s+/g, "_");
        const fileName = `RIASEC_${sName}_${lastResult.codeString}.txt`;

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // ===================== PRINT / PDF ============================
    printBtn.addEventListener("click", () => {
        if (!lastResult) {
            alert("Bạn cần hoàn thành bài test và xem kết quả trước khi in.");
            return;
        }
        window.print();
    });

    // ===================== EXPORT CSV (ADMIN) ======================
    function buildCsv(history) {
        const header = [
            "Thời gian",
            "Họ tên",
            "Lớp",
            "Mã_HS",
            "Email",
            "Mã_RIASEC",
            "R",
            "I",
            "A",
            "S",
            "E",
            "C"
        ];
        let csv = header.join(",") + "\n";

        history.forEach(item => {
            const scores = item.scores || {};
            const row = [
                new Date(item.timestamp).toLocaleString("vi-VN"),
                item.studentName || "",
                item.studentClass || "",
                item.studentId || "",
                item.studentEmail || "",
                item.codeString || "",
                scores.R ?? "",
                scores.I ?? "",
                scores.A ?? "",
                scores.S ?? "",
                scores.E ?? "",
                scores.C ?? ""
            ];
            csv += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
        });

        return csv;
    }

    exportCsvBtn.addEventListener("click", () => {
        const history = loadHistory();
        if (!history.length) {
            alert("Chưa có dữ liệu lịch sử để xuất.");
            return;
        }

        const csv = buildCsv(history);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "riasec_history.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // ===================== FILTER BUTTONS ==========================
    filterApplyBtn?.addEventListener("click", () => {
        refreshHistoryTable();
    });

    filterResetBtn?.addEventListener("click", () => {
        if (filterClassInput) filterClassInput.value = "";
        if (filterFromDateInput) filterFromDateInput.value = "";
        if (filterToDateInput) filterToDateInput.value = "";
        refreshHistoryTable();
    });

    // ===================== GITHUB CONFIG (SESSION) ====================
    const GH_CONFIG_KEY = "riasecGithubConfig";

    function loadGhConfig() {
        try {
            const raw = sessionStorage.getItem(GH_CONFIG_KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            console.error("Error reading GH config:", e);
            return null;
        }
    }

    function saveGhConfig(cfg) {
        try {
            sessionStorage.setItem(GH_CONFIG_KEY, JSON.stringify(cfg));
        } catch (e) {
            console.error("Error saving GH config:", e);
        }
    }

    function applyGhConfigToForm() {
        const cfg = loadGhConfig();
        if (!cfg) return;
        if (ghOwnerInput) ghOwnerInput.value = cfg.owner || "";
        if (ghRepoInput) ghRepoInput.value = cfg.repo || "riasec-data-storage";
        if (ghTokenInput) ghTokenInput.value = cfg.token || "";
        if (ghPassphraseInput) ghPassphraseInput.value = cfg.passphrase || "";
    }

    ghSaveConfigBtn?.addEventListener("click", () => {
        const owner = ghOwnerInput.value.trim();
        const repo = ghRepoInput.value.trim();
        const token = ghTokenInput.value.trim();
        const passphrase = ghPassphraseInput.value.trim();

        if (!owner || !repo || !token || !passphrase) {
            alert("Vui lòng nhập đầy đủ Owner, Repo, Token và Passphrase.");
            return;
        }

        saveGhConfig({ owner, repo, token, passphrase });
        alert("Đã lưu cấu hình GitHub vào session (chỉ trên máy này).");
    });

    ghClearConfigBtn?.addEventListener("click", () => {
        sessionStorage.removeItem(GH_CONFIG_KEY);
        if (ghOwnerInput) ghOwnerInput.value = "";
        if (ghRepoInput) ghRepoInput.value = "riasec-data-storage";
        if (ghTokenInput) ghTokenInput.value = "";
        if (ghPassphraseInput) ghPassphraseInput.value = "";
        alert("Đã xóa cấu hình GitHub khỏi session.");
    });

    // ===================== BASE64 HELPER =============================
    function encodeBase64(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }

    function decodeBase64(b64) {
        try {
            return decodeURIComponent(escape(atob(b64)));
        } catch (e) {
            console.error("Error decoding base64:", e);
            return "";
        }
    }

    // ===================== ENCRYPT RESULT (CryptoJS AES) =============
    function encryptResultWithPassphrase(result, passphrase) {
        const json = JSON.stringify(result);
        const cipher = CryptoJS.AES.encrypt(json, passphrase).toString();
        return cipher;
    }

    // ===================== GITHUB API (CONTENTS) =====================
    async function githubGetFile(owner, repo, path, token) {
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const res = await fetch(url, {
            headers: {
                "Accept": "application/vnd.github+json",
                "Authorization": `Bearer ${token}`,
                "X-GitHub-Api-Version": "2022-11-28"
            }
        });

        if (res.status === 404) {
            return { exists: false, content: "", sha: null };
        }

        if (!res.ok) {
            throw new Error(`GitHub GET failed: ${res.status}`);
        }

        const data = await res.json();
        const text = data.content ? decodeBase64(data.content) : "";
        return { exists: true, content: text, sha: data.sha };
    }

    async function githubPutFile(owner, repo, path, token, contentText, shaPrev) {
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const body = {
            message: "Append RIASEC result",
            content: encodeBase64(contentText),
        };
        if (shaPrev) {
            body.sha = shaPrev;
        }

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

        if (!res.ok) {
            const txt = await res.text();
            throw new Error(`GitHub PUT failed: ${res.status} - ${txt}`);
        }

        return await res.json();
    }

    // ===================== SEND RESULT TO GITHUB ======================
    async function sendResultToGithub() {
        if (!lastResult) {
            alert("Bạn cần hoàn thành bài test và xem kết quả trước khi gửi lên GitHub.");
            return;
        }

        const cfg = loadGhConfig();
        if (!cfg || !cfg.owner || !cfg.repo || !cfg.token || !cfg.passphrase) {
            alert("Chưa có cấu hình GitHub. Vào tab Admin → Cấu hình GitHub để nhập Owner, Repo, Token, Passphrase.");
            return;
        }

        const payload = {
            timestamp: lastResult.timestamp,
            studentName: lastResult.studentName,
            studentClass: lastResult.studentClass,
            studentId: lastResult.studentId,
            studentEmail: lastResult.studentEmail,
            codeString: lastResult.codeString,
            scores: lastResult.scores
        };

        const cipher = encryptResultWithPassphrase(payload, cfg.passphrase);

        const dateStr = (lastResult.timestamp || new Date().toISOString()).slice(0, 10);
        const path = `data/riasec-${dateStr}.jsonl`;

        try {
            const { exists, content, sha } = await githubGetFile(cfg.owner, cfg.repo, path, cfg.token);

            let newContent = content || "";
            const lineObj = {
                ts: lastResult.timestamp,
                cipher: cipher
            };
            const line = JSON.stringify(lineObj);

            if (newContent && !newContent.endsWith("\n")) {
                newContent += "\n";
            }
            newContent += line + "\n";

            await githubPutFile(cfg.owner, cfg.repo, path, cfg.token, newContent, exists ? sha : null);

            alert(`Đã gửi kết quả lên GitHub (file: ${path}).`);
        } catch (e) {
            console.error(e);
            alert("Gửi dữ liệu lên GitHub thất bại. Kiểm tra lại Token / quyền repo / mạng.");
        }
    }

    sendGithubBtn?.addEventListener("click", () => {
        sendResultToGithub();
    });

    // Init
    updateProgress();
    refreshHistoryTable();
    applyGhConfigToForm();
});
