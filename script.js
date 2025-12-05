// ==============================
// Brand & Admin config
// ==============================
const BRAND_CONFIG = {
    name: "CBB & Family",
    tagline: "Cùng con định hướng tương lai",
    logo: "logo-cbb.png"
};

// Đổi mật khẩu admin tại đây
const ADMIN_PASSWORD = "cbbadmin123";

// Keys localStorage
const LS_RESULTS_KEY = "riasecResults";
const LS_DRAFT_KEY = "riasecDraft";
const LS_GH_CONFIG_KEY = "riasecGithubConfig";
const LS_THEME_KEY = "riasecTheme";

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
            "Nhà nghiên cứu AI"
        ]
    },
    A: {
        name: "Artistic – Nghệ thuật",
        desc: "Thích sáng tạo, tưởng tượng, tự do, nghệ thuật, thiết kế, nội dung.",
        careers: [
            "Nhà thiết kế đồ họa",
            "Kiến trúc sư",
            "Nhà thiết kế web (UI/UX)",
            "Copywriter",
            "Nhà thiết kế game (game designer)"
        ]
    },
    S: {
        name: "Social – Xã hội",
        desc: "Thích giúp đỡ người khác, giao tiếp, giảng dạy, chăm sóc, làm việc nhóm.",
        careers: [
            "Giáo viên",
            "Y tá",
            "Cố vấn tâm lý",
            "Nhà tư vấn nghề nghiệp",
            "Huấn luyện viên thể thao"
        ]
    },
    E: {
        name: "Enterprising – Doanh nghiệp",
        desc: "Thích kinh doanh, lãnh đạo, thuyết phục, quản lý dự án, chịu trách nhiệm.",
        careers: [
            "Doanh nhân",
            "Chuyên viên marketing",
            "Quản lý bán hàng",
            "Quản lý sản phẩm (Product Manager)",
            "Nhà báo"
        ]
    },
    C: {
        name: "Conventional – Truyền thống",
        desc: "Thích cấu trúc rõ ràng, số liệu, quy trình, giấy tờ, tính chính xác.",
        careers: [
            "Kế toán",
            "Chuyên viên tài chính",
            "Nhân viên ngân hàng",
            "Kiểm thử viên phần mềm (QA tester)",
            "Chuyên viên thống kê"
        ]
    }
};

// ==============================
// Extended careers for pills (đã cho sẵn)
// ==============================
const riasecExtendedCareers = {
    R: [
        "Kỹ sư cơ khí",
        "Thợ sửa chữa ô tô",
        "Nông dân",
        "Thợ điện",
        "Kiến trúc sư xây dựng",
        "Thợ mộc",
        "Kỹ thuật viên máy tính (hardware)",
        "Phi công",
        "Thợ hàn",
        "Nhà địa chất",
        "Thợ sửa ống nước",
        "Kỹ sư điện",
        "Nhà sinh học thực địa",
        "Vận động viên chuyên nghiệp",
        "Nhà thiết kế sản phẩm công nghiệp",
        "Kỹ sư phần cứng (hardware engineer)",
        "Kỹ thuật viên mạng (network technician)",
        "Kỹ sư vi mạch (chip designer)",
        "Kỹ sư robot (robotics engineer)",
        "Kỹ sư hệ thống nhúng (embedded systems engineer)"
    ],
    I: [
        "Bác sĩ",
        "Nhà khoa học dữ liệu",
        "Lập trình viên",
        "Nhà hóa học",
        "Nhà vật lý",
        "Kỹ sư phần mềm",
        "Nhà toán học",
        "Nhà sinh học",
        "Bác sĩ thú y",
        "Nhà tâm lý học",
        "Kỹ sư mạng",
        "Nhà nghiên cứu AI",
        "Nhà dược sĩ",
        "Nhà thiên văn học",
        "Data analyst",
        "Kỹ sư trí tuệ nhân tạo (AI engineer)",
        "Kỹ sư học máy (machine learning engineer)",
        "Quản trị cơ sở dữ liệu (database administrator)",
        "Kỹ sư dữ liệu (data engineer)",
        "Kỹ sư bảo mật (security engineer)",
        "Nhà phân tích hệ thống (systems analyst)",
        "Kỹ sư đám mây (cloud engineer)",
        "Nhà nghiên cứu blockchain",
        "Kỹ sư thiết kế vi mạch (semiconductor engineer)",
        "DevOps engineer"
    ],
    A: [
        "Nghệ sĩ hội họa",
        "Nhà thiết kế đồ họa",
        "Nhạc sĩ",
        "Nhà văn",
        "Đạo diễn phim",
        "Nhiếp ảnh gia",
        "Nhà thiết kế thời trang",
        "Kiến trúc sư",
        "Diễn viên",
        "Nhà thơ",
        "Nhà thiết kế web (UI/UX)",
        "Nhà soạn nhạc",
        "Họa sĩ minh họa",
        "Nhà thiết kế nội thất",
        "Copywriter",
        "Nhà thiết kế trải nghiệm người dùng (UX designer)",
        "Nhà thiết kế giao diện (UI designer)",
        "Nhà thiết kế game (game designer)",
        "Nghệ sĩ kỹ thuật số (digital artist)",
        "Nhà thiết kế VR/AR (virtual/augmented reality designer)"
    ],
    S: [
        "Giáo viên",
        "Y tá",
        "Cố vấn tâm lý",
        "Nhà xã hội học",
        "Nhân viên xã hội",
        "Huấn luyện viên thể thao",
        "Bác sĩ tâm thần",
        "Nhà trị liệu",
        "Nhà hoạt động cộng đồng",
        "Nhà giáo dục đặc biệt",
        "Nhân viên hỗ trợ khách hàng (IT support)",
        "Huấn luyện viên cá nhân",
        "Nhà tư vấn nghề nghiệp",
        "Nhà hoạt động nhân quyền",
        "Giảng viên đại học",
        "Chuyên viên hỗ trợ kỹ thuật (technical support specialist)",
        "Huấn luyện viên công nghệ (tech trainer)",
        "Nhà tư vấn IT (IT consultant)",
        "Quản lý cộng đồng trực tuyến (community manager)",
        "Chuyên viên giáo dục trực tuyến (e-learning specialist)"
    ],
    E: [
        "Doanh nhân",
        "Luật sư",
        "Quản lý bán hàng",
        "Nhà quản lý dự án",
        "Chuyên viên marketing",
        "Nhà đầu tư",
        "Chính trị gia",
        "Giám đốc điều hành (CEO)",
        "Môi giới bất động sản",
        "Nhà báo",
        "Quản lý sản phẩm (Product Manager)",
        "Nhà đàm phán",
        "Chuyên viên PR",
        "Nhà quản lý nhân sự",
        "Sales engineer",
        "Doanh nhân công nghệ (tech entrepreneur)",
        "Quản lý dự án IT (IT project manager)",
        "Chuyên viên bán hàng công nghệ (tech sales specialist)",
        "Giám đốc công nghệ (CTO)",
        "Quản lý startup AI (AI startup manager)"
    ],
    C: [
        "Kế toán",
        "Thư ký hành chính",
        "Nhân viên ngân hàng",
        "Chuyên viên tài chính",
        "Nhân viên thư viện",
        "Quản trị viên cơ sở dữ liệu (DBA)",
        "Nhân viên thuế vụ",
        "Thẩm phán viên",
        "Nhân viên hành chính",
        "Chuyên viên thống kê",
        "Nhân viên kho vận",
        "Bookkeeper",
        "Nhân viên bảo hiểm",
        "Chuyên viên tuân thủ (Compliance officer)",
        "Data entry specialist",
        "Kiểm thử viên phần mềm (QA tester)",
        "Chuyên viên vận hành hệ thống (systems operator)",
        "Quản lý dữ liệu (data manager)",
        "Chuyên viên tuân thủ bảo mật (security compliance specialist)",
        "Nhân viên hỗ trợ hành chính IT (IT admin assistant)"
    ]
};

// ==============================
// Career details cho modal
// (rất dài – giữ nguyên như đã gửi, không cắt bớt)
// ==============================
const careerDetails = {
    // ===== R – Realistic =====
    "Kỹ sư cơ khí": {
        desc: "Thiết kế, chế tạo, vận hành và bảo trì máy móc, dây chuyền sản xuất. Làm việc nhiều với bản vẽ kỹ thuật, vật liệu, xưởng thực hành.",
        majors: ["Kỹ thuật cơ khí", "Cơ điện tử"],
        schools: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Sư phạm Kỹ thuật TP.HCM"]
    },
    "Thợ sửa chữa ô tô": {
        desc: "Chẩn đoán, sửa chữa, bảo dưỡng các hệ thống động cơ, điện, thân vỏ ô tô. Thích hợp với người thích làm việc tay chân, máy móc.",
        majors: ["Công nghệ ô tô", "Cơ khí động lực"],
        schools: ["CĐ Nghề Công nghệ cao HN", "ĐH Công nghiệp HN", "ĐH Sư phạm Kỹ thuật TP.HCM"]
    },
    "Nông dân": {
        desc: "Trồng trọt, chăn nuôi, ứng dụng công nghệ vào sản xuất nông nghiệp. Từ nông nghiệp truyền thống đến nông nghiệp thông minh, nhà kính.",
        majors: ["Nông học", "Khoa học cây trồng", "Chăn nuôi"],
        schools: ["Học viện Nông nghiệp VN", "ĐH Nông Lâm TP.HCM", "ĐH Cần Thơ"]
    },
    "Thợ điện": {
        desc: "Thi công, lắp đặt, bảo trì hệ thống điện dân dụng & công nghiệp. Công việc đòi hỏi cẩn thận, tuân thủ an toàn điện.",
        majors: ["Điện dân dụng", "Điện công nghiệp"],
        schools: ["Các trường CĐ/TC nghề", "ĐH Sư phạm Kỹ thuật", "ĐH Công nghiệp địa phương"]
    },
    "Kiến trúc sư xây dựng": {
        desc: "Thiết kế không gian sống, công trình kiến trúc, phối hợp giữa thẩm mỹ và kỹ thuật xây dựng.",
        majors: ["Kiến trúc", "Kiến trúc nội thất"],
        schools: ["ĐH Kiến trúc HN", "ĐH Kiến trúc TP.HCM", "ĐH Xây dựng HN"]
    },
    "Thợ mộc": {
        desc: "Gia công, sản xuất, lắp đặt đồ nội thất gỗ, trang trí nội thất. Đòi hỏi sự khéo tay và cảm nhận thẩm mỹ.",
        majors: ["Cơ khí chế tạo", "Công nghệ gỗ & nội thất"],
        schools: ["Các trường CĐ/TC nghề kỹ thuật", "ĐH Lâm nghiệp", "ĐH Nông Lâm TP.HCM"]
    },
    "Kỹ thuật viên máy tính (hardware)": {
        desc: "Lắp ráp, cài đặt, sửa chữa máy tính, thiết bị phần cứng. Thích hợp với người thích mày mò máy móc.",
        majors: ["Công nghệ thông tin", "Kỹ thuật máy tính"],
        schools: ["CĐ FPT Polytechnic", "ĐH CNTT – ĐHQG HCM", "ĐH Công nghiệp HN"]
    },
    "Phi công": {
        desc: "Điều khiển máy bay, đảm bảo an toàn chuyến bay. Nghề có yêu cầu rất cao về sức khỏe, kỷ luật và ngoại ngữ.",
        majors: ["Đào tạo phi công dân dụng", "Hàng không"],
        schools: ["Vietnam Airlines Training Center", "Bamboo Airways Training", "Các học viện hàng không quốc tế"]
    },
    "Thợ hàn": {
        desc: "Gia công, lắp ráp kết cấu kim loại, đường ống, chi tiết cơ khí bằng kỹ thuật hàn. Nhu cầu cao trong công nghiệp.",
        majors: ["Công nghệ hàn", "Cơ khí chế tạo"],
        schools: ["Các trường CĐ/TC nghề", "CĐ Nghề Lilama", "CĐ Nghề Công nghệ cao HN"]
    },
    "Nhà địa chất": {
        desc: "Khảo sát cấu trúc đất đá, khoáng sản, tài nguyên dưới lòng đất. Thường làm việc ngoài thực địa.",
        majors: ["Địa chất học", "Kỹ thuật dầu khí"],
        schools: ["ĐH Mỏ – Địa chất", "ĐH Bách Khoa", "ĐH Khoa học Tự nhiên"]
    },
    "Thợ sửa ống nước": {
        desc: "Lắp đặt, sửa chữa hệ thống ống nước, cấp thoát nước trong nhà ở, công trình.",
        majors: ["Cấp thoát nước", "Xây dựng dân dụng"],
        schools: ["Các trường CĐ/TC nghề xây dựng", "ĐH Xây dựng HN", "ĐH Kiến trúc"]
    },
    "Kỹ sư điện": {
        desc: "Thiết kế, vận hành hệ thống điện, lưới điện, nhà máy điện. Công việc quan trọng trong hạ tầng quốc gia.",
        majors: ["Kỹ thuật điện", "Hệ thống điện"],
        schools: ["ĐH Bách Khoa", "ĐH Điện lực", "ĐH Sư phạm Kỹ thuật"]
    },
    "Nhà sinh học thực địa": {
        desc: "Nghiên cứu hệ sinh thái, động vật, thực vật ngoài tự nhiên. Thường đi khảo sát, dã ngoại, thu mẫu.",
        majors: ["Sinh học", "Sinh thái học"],
        schools: ["ĐH KHTN – ĐHQG HN/HCM", "ĐH Sư phạm", "ĐH Nông Lâm"]
    },
    "Vận động viên chuyên nghiệp": {
        desc: "Tập luyện, thi đấu thể thao ở trình độ cao, đại diện câu lạc bộ hoặc đội tuyển quốc gia.",
        majors: ["Giáo dục thể chất", "Huấn luyện thể thao"],
        schools: ["ĐH Thể dục Thể thao", "Học viện Bóng đá", "Các CLB đào tạo trẻ"]
    },
    "Nhà thiết kế sản phẩm công nghiệp": {
        desc: "Thiết kế hình dạng, chức năng, trải nghiệm sử dụng của sản phẩm vật lý (ghế, chai, thiết bị...).",
        majors: ["Thiết kế công nghiệp", "Thiết kế sản phẩm"],
        schools: ["ĐH Mỹ thuật CN", "ĐH Kiến trúc", "RMIT (Design)"]
    },
    "Kỹ sư phần cứng (hardware engineer)": {
        desc: "Thiết kế, kiểm thử bo mạch, thiết bị phần cứng như mainboard, router, thiết bị IoT.",
        majors: ["Kỹ thuật máy tính", "Điện tử – Viễn thông"],
        schools: ["ĐH Bách Khoa", "ĐH Bưu chính Viễn thông", "ĐH CNTT – ĐHQG HCM"]
    },
    "Kỹ thuật viên mạng (network technician)": {
        desc: "Lắp đặt, cấu hình, bảo trì mạng LAN/WAN, thiết bị router, switch, wifi.",
        majors: ["Mạng máy tính", "An ninh mạng"],
        schools: ["CĐ FPT Polytechnic", "CĐ CNTT", "ĐH CNTT – ĐHQG HCM"]
    },
    "Kỹ sư vi mạch (chip designer)": {
        desc: "Thiết kế, mô phỏng, kiểm thử vi mạch (IC) cho thiết bị điện tử, chip bán dẫn.",
        majors: ["Điện tử – Viễn thông", "Kỹ thuật máy tính"],
        schools: ["ĐH Bách Khoa HN/HCM", "ĐH Công nghệ – ĐHQG HN", "ĐH CNTT – ĐHQG HCM"]
    },
    "Kỹ sư robot (robotics engineer)": {
        desc: "Thiết kế, lập trình, vận hành hệ thống robot trong công nghiệp, dịch vụ, y tế.",
        majors: ["Cơ điện tử", "Tự động hóa", "Robot & AI"],
        schools: ["ĐH Bách Khoa", "ĐH Công nghiệp HN", "Một số chương trình liên kết quốc tế"]
    },
    "Kỹ sư hệ thống nhúng (embedded systems engineer)": {
        desc: "Phát triển phần mềm & phần cứng nhúng cho thiết bị IoT, thiết bị thông minh.",
        majors: ["Kỹ thuật máy tính", "Điện tử – Viễn thông"],
        schools: ["ĐH Công nghệ – ĐHQG HN", "ĐH Bách Khoa", "ĐH CNTT – ĐHQG HCM"]
    },

    // ===== I – Investigative =====
    "Bác sĩ": {
        desc: "Khám, chẩn đoán, điều trị bệnh cho bệnh nhân. Nghề có trách nhiệm rất lớn và yêu cầu học tập lâu dài.",
        majors: ["Y khoa"],
        schools: ["ĐH Y Hà Nội", "ĐH Y Dược TP.HCM", "ĐH Y Dược Huế"]
    },
    "Nhà khoa học dữ liệu": {
        desc: "Phân tích dữ liệu lớn, xây dựng mô hình dự đoán để hỗ trợ ra quyết định trong doanh nghiệp.",
        majors: ["Khoa học dữ liệu", "Toán – Tin ứng dụng"],
        schools: ["ĐH Bách Khoa", "ĐH CNTT – ĐHQG HCM", "RMIT VN"]
    },
    "Lập trình viên": {
        desc: "Phát triển phần mềm, ứng dụng web/mobile, hệ thống backend/frontend.",
        majors: ["Khoa học máy tính", "Kỹ thuật phần mềm"],
        schools: ["ĐH CNTT – ĐHQG HCM", "ĐH Công nghệ – ĐHQG HN", "ĐH FPT"]
    },
    "Nhà hóa học": {
        desc: "Nghiên cứu, phân tích, phát triển vật liệu, hợp chất, sản phẩm hóa học.",
        majors: ["Hóa học", "Công nghệ hóa học"],
        schools: ["ĐH KHTN", "ĐH Bách Khoa", "ĐH Công nghiệp HN"]
    },
    "Nhà vật lý": {
        desc: "Nghiên cứu các hiện tượng tự nhiên, từ cơ học, quang học đến vật lý hạt. Cơ sở nền tảng cho công nghệ.",
        majors: ["Vật lý học", "Vật lý kỹ thuật"],
        schools: ["ĐH KHTN", "ĐH Sư phạm", "ĐH Bách Khoa"]
    },
    "Kỹ sư phần mềm": {
        desc: "Thiết kế, xây dựng, bảo trì hệ thống phần mềm quy mô lớn, làm việc theo nhóm phát triển.",
        majors: ["Kỹ thuật phần mềm"],
        schools: ["ĐH FPT", "ĐH CNTT – ĐHQG HCM", "ĐH Công nghệ – ĐHQG HN"]
    },
    "Nhà toán học": {
        desc: "Nghiên cứu lý thuyết toán học hoặc ứng dụng toán trong tài chính, công nghệ, tối ưu hóa.",
        majors: ["Toán học", "Toán ứng dụng"],
        schools: ["ĐH KHTN", "ĐH Sư phạm", "ĐH Kinh tế quốc dân (Toán kinh tế)"]
    },
    "Nhà sinh học": {
        desc: "Nghiên cứu thế giới sinh vật từ cấp độ tế bào đến hệ sinh thái.",
        majors: ["Sinh học", "Công nghệ sinh học"],
        schools: ["ĐH KHTN", "ĐH Nông Lâm", "ĐH Y Dược (liên quan)"]
    },
    "Bác sĩ thú y": {
        desc: "Chẩn đoán, điều trị bệnh cho động vật, đảm bảo sức khỏe vật nuôi và an toàn thực phẩm.",
        majors: ["Thú y"],
        schools: ["ĐH Nông Lâm", "Học viện Nông nghiệp VN"]
    },
    "Nhà tâm lý học": {
        desc: "Nghiên cứu tâm lý con người, đánh giá và hỗ trợ các vấn đề tâm lý.",
        majors: ["Tâm lý học"],
        schools: ["ĐH KHXH&NV", "ĐH Sư phạm", "Một số trường đào tạo chuyên ngành Tâm lý"]
    },
    "Kỹ sư mạng": {
        desc: "Thiết kế, xây dựng và bảo mật hệ thống mạng máy tính của doanh nghiệp.",
        majors: ["Mạng máy tính & truyền thông", "An ninh mạng"],
        schools: ["ĐH CNTT – ĐHQG HCM", "HV Kỹ thuật Mật mã", "CĐ/ĐH CNTT khác"]
    },
    "Nhà nghiên cứu AI": {
        desc: "Phát triển thuật toán trí tuệ nhân tạo, mô hình học máy, xử lý ngôn ngữ, thị giác máy.",
        majors: ["Khoa học máy tính", "AI & Data Science"],
        schools: ["ĐH Bách Khoa", "ĐH CNTT – ĐHQG HCM", "Một số chương trình quốc tế"]
    },
    "Nhà dược sĩ": {
        desc: "Nghiên cứu, sản xuất, kiểm nghiệm thuốc, tư vấn sử dụng thuốc an toàn.",
        majors: ["Dược học"],
        schools: ["ĐH Dược HN", "ĐH Y Dược TP.HCM", "ĐH Y Dược Cần Thơ"]
    },
    "Nhà thiên văn học": {
        desc: "Nghiên cứu vũ trụ, sao, hành tinh, hiện tượng thiên văn.",
        majors: ["Vật lý thiên văn", "Vật lý"],
        schools: ["Một số chương trình quốc tế, học bổng nước ngoài", "Khoa Vật lý – ĐH KHTN"]
    },
    "Data analyst": {
        desc: "Phân tích dữ liệu, xây dashboard, báo cáo để hỗ trợ ra quyết định trong doanh nghiệp.",
        majors: ["Khoa học dữ liệu", "Thống kê", "Toán – Tin"],
        schools: ["ĐH Kinh tế", "ĐH Bách Khoa", "RMIT VN"]
    },
    "Kỹ sư trí tuệ nhân tạo (AI engineer)": {
        desc: "Ứng dụng mô hình AI vào sản phẩm thực tế: đề xuất, chatbot, nhận diện hình ảnh, giọng nói.",
        majors: ["AI & Data Science", "Khoa học máy tính"],
        schools: ["ĐH Bách Khoa", "ĐH CNTT – ĐHQG HCM", "ĐH FPT"]
    },
    "Kỹ sư học máy (machine learning engineer)": {
        desc: "Xây dựng pipeline ML, huấn luyện, tối ưu mô hình, triển khai vào hệ thống.",
        majors: ["Khoa học dữ liệu", "Khoa học máy tính"],
        schools: ["ĐH CNTT – ĐHQG HCM", "ĐH Bách Khoa", "Một số chương trình quốc tế"]
    },
    "Quản trị cơ sở dữ liệu (database administrator)": {
        desc: "Quản lý, tối ưu, sao lưu, bảo mật hệ thống database (SQL/NoSQL).",
        majors: ["Hệ thống thông tin", "Công nghệ thông tin"],
        schools: ["ĐH CNTT – ĐHQG HCM", "ĐH Công nghệ – ĐHQG HN", "Các ĐH CNTT khác"]
    },
    "Kỹ sư dữ liệu (data engineer)": {
        desc: "Xây dựng hạ tầng dữ liệu, ETL, data warehouse, data lake cho doanh nghiệp.",
        majors: ["Khoa học dữ liệu", "Hệ thống thông tin"],
        schools: ["ĐH Bách Khoa", "ĐH CNTT – ĐHQG HCM", "RMIT VN"]
    },
    "Kỹ sư bảo mật (security engineer)": {
        desc: "Thiết kế, vận hành các giải pháp bảo mật hệ thống, ứng phó tấn công mạng.",
        majors: ["An ninh mạng", "ATTT"],
        schools: ["HV Kỹ thuật Mật mã", "HV An ninh Nhân dân", "ĐH CNTT – ĐHQG HCM"]
    },
    "Nhà phân tích hệ thống (systems analyst)": {
        desc: "Phân tích yêu cầu nghiệp vụ, thiết kế hệ thống CNTT phù hợp cho doanh nghiệp.",
        majors: ["Hệ thống thông tin", "Công nghệ thông tin"],
        schools: ["ĐH Kinh tế & CNTT", "ĐH CNTT – ĐHQG HCM", "ĐH Công nghệ – ĐHQG HN"]
    },
    "Kỹ sư đám mây (cloud engineer)": {
        desc: "Xây dựng, vận hành hệ thống trên hạ tầng cloud (AWS, Azure, GCP).",
        majors: ["Công nghệ thông tin", "Hệ thống thông tin"],
        schools: ["ĐH CNTT – ĐHQG HCM", "ĐH FPT", "Các ĐH CNTT khác"]
    },
    "Nhà nghiên cứu blockchain": {
        desc: "Nghiên cứu, xây dựng giải pháp dựa trên blockchain, smart contract, crypto.",
        majors: ["Khoa học máy tính", "Fintech"],
        schools: ["Một số chương trình quốc tế, bootcamp", "ĐH CNTT – ĐHQG HCM (hướng nghiên cứu)"]
    },
    "Kỹ sư thiết kế vi mạch (semiconductor engineer)": {
        desc: "Thiết kế, kiểm thử chip, tham gia chuỗi giá trị ngành bán dẫn.",
        majors: ["Điện tử – Viễn thông", "Kỹ thuật máy tính"],
        schools: ["ĐH Bách Khoa", "ĐH Công nghệ – ĐHQG HN", "ĐH CNTT – ĐHQG HCM"]
    },
    "DevOps engineer": {
        desc: "Kết nối dev & ops, tự động hóa build, test, deploy, monitoring hệ thống.",
        majors: ["Công nghệ thông tin", "Hệ thống thông tin"],
        schools: ["ĐH CNTT – ĐHQG HCM", "ĐH FPT", "Các ĐH CNTT khác"]
    },

    // ===== A – Artistic =====
    "Nghệ sĩ hội họa": {
        desc: "Sáng tác tranh, tác phẩm nghệ thuật, có thể làm tự do hoặc cho studio, agency.",
        majors: ["Hội họa", "Mỹ thuật"],
        schools: ["ĐH Mỹ thuật VN", "ĐH Mỹ thuật TP.HCM"]
    },
    "Nhà thiết kế đồ họa": {
        desc: "Thiết kế logo, poster, ấn phẩm, brand identity cho doanh nghiệp, sản phẩm.",
        majors: ["Thiết kế đồ họa"],
        schools: ["ĐH Mỹ thuật CN", "Arena Multimedia", "ĐH FPT (Thiết kế)"]
    },
    "Nhạc sĩ": {
        desc: "Sáng tác, hòa âm, phối khí ca khúc, nhạc phim, nhạc quảng cáo.",
        majors: ["Âm nhạc", "Sáng tác âm nhạc"],
        schools: ["Nhạc viện TP.HCM", "Học viện Âm nhạc QG VN"]
    },
    "Nhà văn": {
        desc: "Viết truyện, tiểu thuyết, kịch bản, nội dung sáng tạo cho nhiều nền tảng.",
        majors: ["Văn học", "Báo chí", "Ngôn ngữ & sáng tác"],
        schools: ["ĐH KHXH&NV", "ĐH Văn hóa", "MFA quốc tế"]
    },
    "Đạo diễn phim": {
        desc: "Xây dựng kịch bản, dàn dựng, chỉ đạo quay phim, làm việc với ê-kíp sản xuất.",
        majors: ["Đạo diễn điện ảnh", "Điện ảnh – Truyền hình"],
        schools: ["ĐH Sân khấu Điện ảnh HN/TP.HCM"]
    },
    "Nhiếp ảnh gia": {
        desc: "Chụp ảnh chân dung, sự kiện, sản phẩm, thời trang, nghệ thuật.",
        majors: ["Nhiếp ảnh", "Truyền thông đa phương tiện"],
        schools: ["ĐH Sân khấu Điện ảnh", "Arena Multimedia", "Một số khóa chuyên sâu"]
    },
    "Nhà thiết kế thời trang": {
        desc: "Thiết kế trang phục, BST thời trang, làm việc với thương hiệu hoặc tự xây dựng brand.",
        majors: ["Thiết kế thời trang"],
        schools: ["ĐH Mỹ thuật CN", "ĐH Kiến trúc", "RMIT VN"]
    },
    "Kiến trúc sư": {
        desc: "Thiết kế không gian sống, nội thất, cảnh quan, cân bằng giữa thẩm mỹ & công năng.",
        majors: ["Kiến trúc", "Kiến trúc nội thất"],
        schools: ["ĐH Kiến trúc HN/TP.HCM", "ĐH Xây dựng HN"]
    },
    "Diễn viên": {
        desc: "Thể hiện nhân vật trên sân khấu, phim, TV show, quảng cáo.",
        majors: ["Diễn viên kịch – điện ảnh"],
        schools: ["ĐH Sân khấu Điện ảnh", "Các lớp đào tạo diễn xuất"]
    },
    "Nhà thơ": {
        desc: "Sáng tác thơ, thường song song với các công việc viết lách, xuất bản.",
        majors: ["Văn học", "Ngữ văn"],
        schools: ["ĐH KHXH&NV", "ĐH Sư phạm"]
    },
    "Nhà thiết kế web (UI/UX)": {
        desc: "Thiết kế giao diện, trải nghiệm cho website & ứng dụng, đảm bảo dễ dùng và đẹp.",
        majors: ["Thiết kế UX/UI", "Truyền thông đa phương tiện"],
        schools: ["ĐH FPT", "RMIT VN", "Arena Multimedia"]
    },
    "Nhà soạn nhạc": {
        desc: "Viết nhạc cho ca sĩ, phim, game, quảng cáo, thường làm việc với phòng thu.",
        majors: ["Sáng tác âm nhạc"],
        schools: ["Nhạc viện", "Học viện Âm nhạc QG VN"]
    },
    "Họa sĩ minh họa": {
        desc: "Vẽ minh họa sách, báo, game, animation, concept art.",
        majors: ["Mỹ thuật đa phương tiện", "Hội họa"],
        schools: ["ĐH Mỹ thuật CN", "Arena Multimedia"]
    },
    "Nhà thiết kế nội thất": {
        desc: "Thiết kế không gian bên trong nhà ở, văn phòng, showroom, khách sạn.",
        majors: ["Thiết kế nội thất"],
        schools: ["ĐH Kiến trúc", "ĐH Mỹ thuật CN", "ĐH Hoa Sen"]
    },
    "Copywriter": {
        desc: "Viết nội dung quảng cáo, slogan, kịch bản video, nội dung social media.",
        majors: ["Marketing", "Báo chí – Truyền thông"],
        schools: ["ĐH Kinh tế", "ĐH KHXH&NV", "ĐH FPT"]
    },
    "Nhà thiết kế trải nghiệm người dùng (UX designer)": {
        desc: "Nghiên cứu hành vi người dùng, thiết kế flow, wireframe, prototype cho sản phẩm số.",
        majors: ["Thiết kế UX/UI", "HCI"],
        schools: ["RMIT VN", "ĐH FPT", "Các bootcamp UX/UI"]
    },
    "Nhà thiết kế giao diện (UI designer)": {
        desc: "Thiết kế màu sắc, font, layout, icon cho app/web.",
        majors: ["Thiết kế đồ họa", "Thiết kế UI/UX"],
        schools: ["ĐH Mỹ thuật CN", "Arena Multimedia", "ĐH FPT"]
    },
    "Nhà thiết kế game (game designer)": {
        desc: "Thiết kế gameplay, cơ chế, level, cốt truyện cho trò chơi điện tử.",
        majors: ["Thiết kế game", "Truyền thông đa phương tiện"],
        schools: ["ĐH FPT", "Một số chương trình quốc tế", "VTC Academy"]
    },
    "Nghệ sĩ kỹ thuật số (digital artist)": {
        desc: "Vẽ, dựng hình, làm concept, 3D, motion cho phim, game, quảng cáo.",
        majors: ["Mỹ thuật đa phương tiện", "Animation"],
        schools: ["Arena Multimedia", "VTC Academy", "ĐH Mỹ thuật CN"]
    },
    "Nhà thiết kế VR/AR (virtual/augmented reality designer)": {
        desc: "Thiết kế trải nghiệm ảo cho kính VR/AR, game, mô phỏng.",
        majors: ["Thiết kế game", "CNTT (VR/AR)"],
        schools: ["Một số chương trình quốc tế", "Một số ĐH CNTT có hướng VR/AR"]
    },

    // ===== S – Social =====
    "Giáo viên": {
        desc: "Giảng dạy, hướng dẫn học sinh, xây dựng bài giảng, đồng hành trong quá trình học tập.",
        majors: ["Sư phạm (Toán, Văn, Anh, Lý, Hóa...)", "Giáo dục tiểu học"],
        schools: ["ĐH Sư phạm HN", "ĐH Sư phạm TP.HCM", "ĐH Giáo dục – ĐHQG HN"]
    },
    "Y tá": {
        desc: "Chăm sóc, hỗ trợ bác sĩ và bệnh nhân trong bệnh viện, phòng khám.",
        majors: ["Điều dưỡng"],
        schools: ["ĐH Điều dưỡng Nam Định", "ĐH Y Dược", "Các trường CĐ Điều dưỡng"]
    },
    "Cố vấn tâm lý": {
        desc: "Lắng nghe, tham vấn, hỗ trợ người gặp khó khăn tâm lý, học đường, hôn nhân.",
        majors: ["Tâm lý học", "Tham vấn học đường"],
        schools: ["ĐH KHXH&NV", "ĐH Sư phạm", "Một số chương trình chuyên sâu"]
    },
    "Nhà xã hội học": {
        desc: "Nghiên cứu về xã hội, cộng đồng, vấn đề xã hội, chính sách công.",
        majors: ["Xã hội học"],
        schools: ["ĐH KHXH&NV", "ĐH Công đoàn"]
    },
    "Nhân viên xã hội": {
        desc: "Làm việc với nhóm yếu thế (trẻ em, người khuyết tật...), kết nối nguồn lực hỗ trợ.",
        majors: ["Công tác xã hội"],
        schools: ["ĐH KHXH&NV", "Học viện Phụ nữ VN"]
    },
    "Huấn luyện viên thể thao": {
        desc: "Đào tạo kỹ năng, chiến thuật cho VĐV, học viên, từ phong trào đến chuyên nghiệp.",
        majors: ["Giáo dục thể chất", "Huấn luyện thể thao"],
        schools: ["ĐH TDTT", "ĐH Sư phạm TDTT"]
    },
    "Bác sĩ tâm thần": {
        desc: "Chẩn đoán, điều trị các rối loạn tâm thần, kết hợp thuốc và trị liệu.",
        majors: ["Y khoa", "Chuyên khoa Tâm thần"],
        schools: ["ĐH Y", "Bệnh viện chuyên khoa"]
    },
    "Nhà trị liệu": {
        desc: "Thực hiện các liệu pháp tâm lý, vật lý trị liệu, ngôn ngữ trị liệu... tùy chuyên ngành.",
        majors: ["Tâm lý trị liệu", "Vật lý trị liệu", "Ngôn ngữ trị liệu"],
        schools: ["Một số ĐH Y, ĐH KHXH&NV", "Chương trình quốc tế"]
    },
    "Nhà hoạt động cộng đồng": {
        desc: "Tổ chức chiến dịch, dự án vì cộng đồng, môi trường, giáo dục.",
        majors: ["Xã hội học", "Công tác xã hội", "Quan hệ công chúng"],
        schools: ["ĐH KHXH&NV", "ĐH Kinh tế", "Các tổ chức phi lợi nhuận"]
    },
    "Nhà giáo dục đặc biệt": {
        desc: "Dạy trẻ khuyết tật, trẻ có nhu cầu đặc biệt, xây dựng chương trình phù hợp.",
        majors: ["Giáo dục đặc biệt"],
        schools: ["ĐH Sư phạm", "Một số trường chuyên ngành GDĐB"]
    },
    "Nhân viên hỗ trợ khách hàng (IT support)": {
        desc: "Giải đáp, hỗ trợ kỹ thuật cho khách hàng sử dụng sản phẩm công nghệ.",
        majors: ["CNTT", "Mạng máy tính"],
        schools: ["CĐ/ĐH CNTT", "CĐ FPT Polytechnic"]
    },
    "Huấn luyện viên cá nhân": {
        desc: "Lập kế hoạch tập luyện, dinh dưỡng cho khách hàng tại phòng gym, trung tâm thể thao.",
        majors: ["Giáo dục thể chất", "Dinh dưỡng", "Huấn luyện thể thao"],
        schools: ["ĐH TDTT", "Các chứng chỉ PT quốc tế"]
    },
    "Nhà tư vấn nghề nghiệp": {
        desc: "Định hướng nghề cho học sinh, sinh viên, người đi làm, phân tích điểm mạnh-yếu.",
        majors: ["Tâm lý học", "Giáo dục học", "Quản lý giáo dục"],
        schools: ["ĐH KHXH&NV", "ĐH Sư phạm", "Các trung tâm hướng nghiệp"]
    },
    "Nhà hoạt động nhân quyền": {
        desc: "Bảo vệ quyền con người, làm việc trong tổ chức quốc tế, NGO.",
        majors: ["Luật", "Quan hệ quốc tế", "Xã hội học"],
        schools: ["Học viện Ngoại giao", "ĐH Luật", "ĐH KHXH&NV"]
    },
    "Giảng viên đại học": {
        desc: "Giảng dạy, nghiên cứu tại trường đại học, cao đẳng.",
        majors: ["Các ngành chuyên môn + Sau ĐH"],
        schools: ["Các trường ĐH (yêu cầu thạc sĩ/tiến sĩ)"]
    },
    "Chuyên viên hỗ trợ kỹ thuật (technical support specialist)": {
        desc: "Hỗ trợ doanh nghiệp sử dụng hệ thống, phần mềm, xử lý sự cố kỹ thuật.",
        majors: ["CNTT", "Hệ thống thông tin"],
        schools: ["ĐH CNTT", "ĐH Công nghiệp", "CĐ CNTT"]
    },
    "Huấn luyện viên công nghệ (tech trainer)": {
        desc: "Đào tạo sử dụng phần mềm, hệ thống cho nhân viên, khách hàng.",
        majors: ["CNTT", "Sư phạm kỹ thuật"],
        schools: ["ĐH Sư phạm kỹ thuật", "ĐH CNTT – ĐHQG HCM"]
    },
    "Nhà tư vấn IT (IT consultant)": {
        desc: "Phân tích nhu cầu, tư vấn giải pháp CNTT cho doanh nghiệp.",
        majors: ["Hệ thống thông tin", "CNTT", "Quản trị kinh doanh"],
        schools: ["ĐH CNTT – ĐHQG HCM", "ĐH Kinh tế", "ĐH FPT"]
    },
    "Quản lý cộng đồng trực tuyến (community manager)": {
        desc: "Quản lý group, fanpage, cộng đồng người dùng sản phẩm/dịch vụ.",
        majors: ["Marketing", "Truyền thông", "Quan hệ công chúng"],
        schools: ["ĐH Kinh tế", "ĐH KHXH&NV", "ĐH FPT"]
    },
    "Chuyên viên giáo dục trực tuyến (e-learning specialist)": {
        desc: "Thiết kế khóa học online, nội dung e-learning, LMS.",
        majors: ["Công nghệ giáo dục", "CNTT trong giáo dục"],
        schools: ["ĐH Sư phạm", "ĐH Giáo dục – ĐHQG HN", "Một số trường tư thục"]
    },

    // ===== E – Enterprising =====
    "Doanh nhân": {
        desc: "Khởi nghiệp, xây dựng và điều hành doanh nghiệp, chịu trách nhiệm về chiến lược và tài chính.",
        majors: ["Quản trị kinh doanh", "Khởi nghiệp"],
        schools: ["ĐH Kinh tế", "FTU", "ĐH FPT"]
    },
    "Luật sư": {
        desc: "Tư vấn, bảo vệ quyền lợi cho cá nhân, tổ chức trong các vụ việc pháp lý.",
        majors: ["Luật học"],
        schools: ["ĐH Luật HN", "ĐH Luật TP.HCM", "Khoa Luật – ĐHQG HN"]
    },
    "Quản lý bán hàng": {
        desc: "Điều hành đội sales, xây dựng chiến lược bán hàng, đạt chỉ tiêu doanh số.",
        majors: ["Quản trị kinh doanh", "Marketing"],
        schools: ["ĐH Kinh tế", "ĐH Thương mại", "ĐH Ngoại thương"]
    },
    "Nhà quản lý dự án": {
        desc: "Lập kế hoạch, điều phối nguồn lực, giám sát tiến độ các dự án trong doanh nghiệp.",
        majors: ["Quản trị dự án", "Quản trị kinh doanh", "IT (PM)"],
        schools: ["ĐH Kinh tế", "RMIT VN", "ĐH FPT"]
    },
    "Chuyên viên marketing": {
        desc: "Nghiên cứu thị trường, xây dựng chiến dịch, nội dung truyền thông cho sản phẩm.",
        majors: ["Marketing", "Truyền thông"],
        schools: ["ĐH Kinh tế", "ĐH Thương mại", "ĐH FPT"]
    },
    "Nhà đầu tư": {
        desc: "Phân tích, ra quyết định đầu tư chứng khoán, bất động sản, startup...",
        majors: ["Tài chính", "Ngân hàng", "Kinh tế"],
        schools: ["NEU", "UEH", "FTU"]
    },
    "Chính trị gia": {
        desc: "Tham gia hoạch định chính sách, quản lý nhà nước, hoạt động cộng đồng.",
        majors: ["Khoa học chính trị", "Quan hệ quốc tế", "Luật"],
        schools: ["Học viện Chính trị", "Học viện Ngoại giao"]
    },
    "Giám đốc điều hành (CEO)": {
        desc: "Lãnh đạo cao nhất trong doanh nghiệp, chịu trách nhiệm toàn bộ hoạt động.",
        majors: ["Quản trị kinh doanh", "MBA"],
        schools: ["Các ĐH Kinh tế", "Chương trình MBA quốc tế"]
    },
    "Môi giới bất động sản": {
        desc: "Tư vấn mua bán, cho thuê nhà đất, dự án, làm việc với khách hàng & chủ đầu tư.",
        majors: ["Bất động sản", "Kinh doanh"],
        schools: ["ĐH Kinh tế", "Các khóa chứng chỉ môi giới"]
    },
    "Nhà báo": {
        desc: "Thu thập thông tin, viết bài, làm phóng sự, sản xuất nội dung báo chí.",
        majors: ["Báo chí", "Truyền thông"],
        schools: ["ĐH KHXH&NV", "HV Báo chí – Tuyên truyền"]
    },
    "Quản lý sản phẩm (Product Manager)": {
        desc: "Chịu trách nhiệm về 'sản phẩm' trong công ty, từ ý tưởng đến triển khai.",
        majors: ["Quản trị kinh doanh", "CNTT + Kinh doanh"],
        schools: ["ĐH Kinh tế", "ĐH FPT", "RMIT VN"]
    },
    "Nhà đàm phán": {
        desc: "Tham gia thương lượng, đàm phán hợp đồng, điều khoản hợp tác.",
        majors: ["Kinh tế", "Luật", "Thương mại"],
        schools: ["ĐH Ngoại thương", "ĐH Kinh tế", "ĐH Luật"]
    },
    "Chuyên viên PR": {
        desc: "Xây dựng hình ảnh, quan hệ báo chí, tổ chức sự kiện cho doanh nghiệp.",
        majors: ["Quan hệ công chúng", "Truyền thông"],
        schools: ["ĐH KHXH&NV", "ĐH FPT", "Học viện Báo chí – Tuyên truyền"]
    },
    "Nhà quản lý nhân sự": {
        desc: "Tuyển dụng, đào tạo, xây dựng chế độ, văn hóa doanh nghiệp.",
        majors: ["Quản trị nhân lực", "Quản trị kinh doanh"],
        schools: ["ĐH Kinh tế", "ĐH Lao động – Xã hội"]
    },
    "Sales engineer": {
        desc: "Bán các sản phẩm kỹ thuật/công nghệ, cần hiểu sâu về kỹ thuật & kinh doanh.",
        majors: ["Kỹ thuật", "Kinh doanh"],
        schools: ["ĐH Bách Khoa", "ĐH Kinh tế", "ĐH FPT"]
    },
    "Doanh nhân công nghệ (tech entrepreneur)": {
        desc: "Sáng lập startup công nghệ, kết hợp kỹ thuật và kinh doanh.",
        majors: ["CNTT", "Quản trị kinh doanh", "Khởi nghiệp"],
        schools: ["ĐH FPT", "RMIT VN", "Các chương trình ươm tạo startup"]
    },
    "Quản lý dự án IT (IT project manager)": {
        desc: "Điều phối dự án phần mềm/hệ thống, làm việc với khách hàng & team kỹ thuật.",
        majors: ["CNTT", "Quản trị dự án"],
        schools: ["ĐH CNTT", "ĐH FPT", "Các chứng chỉ PMP, Agile"]
    },
    "Chuyên viên bán hàng công nghệ (tech sales specialist)": {
        desc: "Tư vấn và bán giải pháp công nghệ cho doanh nghiệp.",
        majors: ["CNTT", "Kinh doanh"],
        schools: ["ĐH CNTT", "ĐH Kinh tế", "CĐ/ĐH CNTT khác"]
    },
    "Giám đốc công nghệ (CTO)": {
        desc: "Phụ trách chiến lược công nghệ, định hướng kỹ thuật của công ty.",
        majors: ["CNTT", "Hệ thống thông tin", "Kinh doanh (MBA)"],
        schools: ["Các ĐH CNTT + kinh nghiệm thực tế cao"]
    },
    "Quản lý startup AI (AI startup manager)": {
        desc: "Điều hành startup trong lĩnh vực AI, kết hợp kỹ thuật, kinh doanh và sản phẩm.",
        majors: ["AI & Data Science", "Quản trị kinh doanh"],
        schools: ["ĐH CNTT", "ĐH FPT", "Các chương trình khởi nghiệp"]
    },

    // ===== C – Conventional =====
    "Kế toán": {
        desc: "Ghi chép, tổng hợp, báo cáo tình hình tài chính của doanh nghiệp.",
        majors: ["Kế toán", "Kiểm toán"],
        schools: ["NEU", "HV Tài chính", "UEH"]
    },
    "Thư ký hành chính": {
        desc: "Hỗ trợ giấy tờ, lịch làm việc, hội họp, giao tiếp nội bộ trong công ty.",
        majors: ["Quản trị văn phòng", "Hành chính văn phòng"],
        schools: ["ĐH Nội vụ", "ĐH Kinh tế", "CĐ nghề liên quan"]
    },
    "Nhân viên ngân hàng": {
        desc: "Làm giao dịch viên, tín dụng, dịch vụ khách hàng tại ngân hàng.",
        majors: ["Tài chính – Ngân hàng"],
        schools: ["HV Ngân hàng", "NEU", "UEH"]
    },
    "Chuyên viên tài chính": {
        desc: "Phân tích tài chính, lập kế hoạch, quản lý dòng tiền doanh nghiệp.",
        majors: ["Tài chính", "Kinh tế", "Ngân hàng"],
        schools: ["NEU", "UEH", "FTU"]
    },
    "Nhân viên thư viện": {
        desc: "Quản lý sách, tài liệu, hỗ trợ bạn đọc tìm kiếm thông tin.",
        majors: ["Khoa học thư viện", "Thông tin – Thư viện"],
        schools: ["ĐH Văn hóa", "ĐH KHXH&NV"]
    },
    "Quản trị viên cơ sở dữ liệu (DBA)": {
        desc: "Quản lý vận hành, backup, tối ưu hệ thống cơ sở dữ liệu.",
        majors: ["CNTT", "Hệ thống thông tin"],
        schools: ["ĐH CNTT – ĐHQG HCM", "ĐH Công nghệ – ĐHQG HN"]
    },
    "Nhân viên thuế vụ": {
        desc: "Thực hiện khai báo, quyết toán thuế, tư vấn các vấn đề về thuế.",
        majors: ["Thuế", "Kế toán", "Tài chính"],
        schools: ["HV Tài chính", "NEU", "UEH"]
    },
    "Thẩm phán viên": {
        desc: "Xem xét hồ sơ, tham gia quá trình xét xử vụ án (ở một số vị trí chuyên môn).",
        majors: ["Luật học"],
        schools: ["ĐH Luật", "Học viện Tư pháp"]
    },
    "Nhân viên hành chính": {
        desc: "Quản lý hồ sơ, văn bản, công văn, hỗ trợ vận hành văn phòng.",
        majors: ["Quản trị văn phòng", "Hành chính"],
        schools: ["ĐH Nội vụ", "ĐH Lao động – Xã hội"]
    },
    "Chuyên viên thống kê": {
        desc: "Thu thập, xử lý số liệu thống kê trong kinh tế, xã hội, y tế.",
        majors: ["Thống kê", "Toán – Tin"],
        schools: ["ĐH Thống kê", "NEU", "ĐH KHTN"]
    },
    "Nhân viên kho vận": {
        desc: "Quản lý hàng tồn kho, nhập – xuất, logistics trong kho bãi.",
        majors: ["Logistics & Quản lý chuỗi cung ứng"],
        schools: ["ĐH Giao thông Vận tải", "ĐH Hàng hải", "UEH"]
    },
    "Bookkeeper": {
        desc: "Ghi chép sổ sách kế toán, hóa đơn, chứng từ ở doanh nghiệp nhỏ.",
        majors: ["Kế toán"],
        schools: ["Các trường CĐ/ĐH Kinh tế, Tài chính"]
    },
    "Nhân viên bảo hiểm": {
        desc: "Tư vấn, chăm sóc khách hàng, xử lý hồ sơ bảo hiểm.",
        majors: ["Bảo hiểm", "Tài chính – Ngân hàng"],
        schools: ["NEU", "UEH", "HV Tài chính"]
    },
    "Chuyên viên tuân thủ (Compliance officer)": {
        desc: "Đảm bảo công ty tuân thủ quy định pháp luật và quy định nội bộ.",
        majors: ["Luật", "Tài chính", "Kế toán"],
        schools: ["ĐH Luật", "NEU", "UEH"]
    },
    "Data entry specialist": {
        desc: "Nhập liệu, cập nhật thông tin vào hệ thống, database.",
        majors: ["Tin học văn phòng", "CNTT cơ bản"],
        schools: ["Các trường CĐ/TC nghề", "CĐ CNTT"]
    },
    "Kiểm thử viên phần mềm (QA tester)": {
        desc: "Kiểm tra, phát hiện lỗi phần mềm, đảm bảo chất lượng sản phẩm trước khi phát hành.",
        majors: ["CNTT", "Kỹ thuật phần mềm"],
        schools: ["ĐH CNTT", "ĐH FPT", "Các khóa QA chuyên sâu"]
    },
    "Chuyên viên vận hành hệ thống (systems operator)": {
        desc: "Theo dõi, vận hành hệ thống CNTT, server, đảm bảo hoạt động ổn định.",
        majors: ["CNTT", "Mạng máy tính"],
        schools: ["ĐH CNTT", "ĐH Công nghiệp", "CĐ CNTT"]
    },
    "Quản lý dữ liệu (data manager)": {
        desc: "Quản lý vòng đời dữ liệu, chính sách truy cập, chất lượng dữ liệu.",
        majors: ["Hệ thống thông tin", "Khoa học dữ liệu"],
        schools: ["ĐH CNTT", "ĐH Kinh tế", "ĐH Bách Khoa"]
    },
    "Chuyên viên tuân thủ bảo mật (security compliance specialist)": {
        desc: "Đảm bảo hệ thống CNTT tuân thủ tiêu chuẩn bảo mật (ISO, PCI-DSS...).",
        majors: ["An ninh mạng", "Hệ thống thông tin"],
        schools: ["HV Kỹ thuật Mật mã", "ĐH CNTT", "ĐH Công nghệ – ĐHQG HN"]
    },
    "Nhân viên hỗ trợ hành chính IT (IT admin assistant)": {
        desc: "Quản lý hồ sơ, thiết bị, tài liệu trong phòng IT, hỗ trợ điều phối công việc.",
        majors: ["Quản trị văn phòng", "CNTT cơ bản"],
        schools: ["ĐH Nội vụ", "CĐ CNTT", "CĐ Nghề"]
    }
};

// ==============================
// Câu hỏi (60 câu, mỗi câu thuộc 1 nhóm R/I/A/S/E/C)
// 10 câu mỗi nhóm (chỉ là ví dụ cơ bản, bạn có thể chỉnh sửa nội dung sau)
// ==============================
const questions = [
    // R
    { id: 1, code: "R", text: "Em thích lắp ráp, sửa chữa các đồ vật, máy móc trong nhà." },
    { id: 2, code: "R", text: "Em muốn làm việc ở xưởng, nhà máy hơn là văn phòng." },
    { id: 3, code: "R", text: "Em không ngại bẩn tay khi làm việc." },
    { id: 4, code: "R", text: "Em thích sử dụng dụng cụ như búa, tua vít, máy khoan." },
    { id: 5, code: "R", text: "Em thích các môn học có thực hành như Vật lý, Công nghệ." },
    { id: 6, code: "R", text: "Em thích làm việc ngoài trời hơn là ngồi trong phòng." },
    { id: 7, code: "R", text: "Em cảm thấy thoải mái khi làm các việc tay chân." },
    { id: 8, code: "R", text: "Em thích tìm hiểu về ô tô, xe máy, máy móc." },
    { id: 9, code: "R", text: "Em thích xem video về chế tạo, DIY, sửa chữa." },
    { id: 10, code: "R", text: "Em thích tham gia các hoạt động thể thao, vận động." },

    // I
    { id: 11, code: "I", text: "Em thích đặt câu hỏi 'tại sao' về mọi thứ xung quanh." },
    { id: 12, code: "I", text: "Em thích giải các bài toán logic hoặc câu đố suy luận." },
    { id: 13, code: "I", text: "Em hứng thú với các môn như Toán, Lý, Hóa, Sinh." },
    { id: 14, code: "I", text: "Em thích đọc sách, xem video khoa học, khám phá công nghệ mới." },
    { id: 15, code: "I", text: "Em thích phân tích dữ liệu, bảng số liệu, biểu đồ." },
    { id: 16, code: "I", text: "Em cảm thấy vui khi tự tìm ra lời giải cho một vấn đề khó." },
    { id: 17, code: "I", text: "Em thích các hoạt động nghiên cứu, thí nghiệm." },
    { id: 18, code: "I", text: "Em thường tìm hiểu sâu một chủ đề mà em quan tâm." },
    { id: 19, code: "I", text: "Em thích học lập trình hoặc muốn thử lập trình." },
    { id: 20, code: "I", text: "Em thích xem các kênh YouTube/Podcast về khoa học – công nghệ." },

    // A
    { id: 21, code: "A", text: "Em thích vẽ, tô màu, thiết kế, làm đồ handmade." },
    { id: 22, code: "A", text: "Em yêu thích âm nhạc, hát, chơi nhạc cụ hoặc nghe nhạc." },
    { id: 23, code: "A", text: "Em thường tưởng tượng ra câu chuyện, thế giới riêng của mình." },
    { id: 24, code: "A", text: "Em thích chụp ảnh, quay video, dựng clip." },
    { id: 25, code: "A", text: "Em thích thiết kế slide, poster, banner, avatar đẹp." },
    { id: 26, code: "A", text: "Em thích viết truyện, làm thơ, viết nhật ký hoặc blog." },
    { id: 27, code: "A", text: "Em muốn công việc của mình có yếu tố sáng tạo, không bị gò bó." },
    { id: 28, code: "A", text: "Em thích thời trang, trang trí phòng, phối đồ." },
    { id: 29, code: "A", text: "Em quan tâm đến mỹ thuật, kiến trúc, thiết kế nội thất." },
    { id: 30, code: "A", text: "Em thường chú ý nhiều tới màu sắc, bố cục, cái đẹp xung quanh." },

    // S
    { id: 31, code: "S", text: "Em thích giúp đỡ bạn bè khi họ gặp khó khăn." },
    { id: 32, code: "S", text: "Em cảm thấy vui khi giải thích bài cho bạn hiểu." },
    { id: 33, code: "S", text: "Em dễ đồng cảm với cảm xúc của người khác." },
    { id: 34, code: "S", text: "Em thích làm việc nhóm, sinh hoạt câu lạc bộ, đoàn đội." },
    { id: 35, code: "S", text: "Em quan tâm đến các vấn đề xã hội, cộng đồng." },
    { id: 36, code: "S", text: "Em muốn công việc sau này có ý nghĩa, giúp ích cho người khác." },
    { id: 37, code: "S", text: "Em thấy mình giao tiếp ổn, hoặc muốn rèn luyện giao tiếp." },
    { id: 38, code: "S", text: "Em thích tổ chức hoạt động cho lớp, cho nhóm." },
    { id: 39, code: "S", text: "Em dễ nói chuyện với người lạ sau một thời gian ngắn." },
    { id: 40, code: "S", text: "Em quan tâm đến nghề giáo viên, bác sĩ, tư vấn, huấn luyện." },

    // E
    { id: 41, code: "E", text: "Em thích thuyết trình trước đám đông (hoặc muốn thử)." },
    { id: 42, code: "E", text: "Em thích đứng ra lãnh đạo nhóm, phân công công việc." },
    { id: 43, code: "E", text: "Em quan tâm đến kinh doanh, khởi nghiệp, bán hàng." },
    { id: 44, code: "E", text: "Em muốn thu nhập cao và sẵn sàng chịu trách nhiệm lớn." },
    { id: 45, code: "E", text: "Em thích thương lượng, đàm phán, bảo vệ ý kiến của mình." },
    { id: 46, code: "E", text: "Em theo dõi tin tức về kinh tế, tài chính, thị trường." },
    { id: 47, code: "E", text: "Em dễ thuyết phục người khác bằng lời nói hoặc lập luận." },
    { id: 48, code: "E", text: "Em thích tham gia tranh biện, hùng biện, MC, dẫn chương trình." },
    { id: 49, code: "E", text: "Em muốn xây dựng thương hiệu cá nhân hoặc doanh nghiệp của mình." },
    { id: 50, code: "E", text: "Em thích lên kế hoạch và điều phối để hoàn thành mục tiêu." },

    // C
    { id: 51, code: "C", text: "Em thích mọi thứ rõ ràng, có kế hoạch, có quy trình." },
    { id: 52, code: "C", text: "Em cảm thấy hài lòng khi sắp xếp đồ đạc, tài liệu gọn gàng." },
    { id: 53, code: "C", text: "Em thích làm việc với số liệu, bảng tính, danh sách." },
    { id: 54, code: "C", text: "Em thường tuân thủ quy định, nội quy, hướng dẫn." },
    { id: 55, code: "C", text: "Em chú ý đến chi tiết, ít bỏ sót lỗi nhỏ." },
    { id: 56, code: "C", text: "Em thích ghi chép, lưu trữ thông tin đầy đủ." },
    { id: 57, code: "C", text: "Em muốn công việc ổn định, ít thay đổi, rõ ràng." },
    { id: 58, code: "C", text: "Em cảm thấy tự tin khi làm việc hành chính, giấy tờ, sổ sách." },
    { id: 59, code: "C", text: "Em thích các môn có tính hệ thống như Tin học văn phòng, Kinh tế." },
    { id: 60, code: "C", text: "Em thường lên kế hoạch chi tiết trước khi làm việc gì đó." }
];

// ==============================
// DOM helpers
// ==============================
const brandNameEl = document.getElementById("brand-name");
const brandTaglineEl = document.getElementById("brand-tagline");
const brandLogoEl = document.getElementById("brand-logo");
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
const studentEmailInput = document.getElementById("student-email");

const submitTestBtn = document.getElementById("submit-test-btn");
const resetTestBtn = document.getElementById("reset-test-btn");

const barCanvas = document.getElementById("barChart");
const radarCanvas = document.getElementById("radarChart");
const top3Box = document.getElementById("top3-codes");
const resultDetailBox = document.getElementById("result-detail");
const downloadTxtBtn = document.getElementById("download-txt-btn");

// Admin DOM
const adminPasswordInput = document.getElementById("admin-password-input");
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminLoginSection = document.getElementById("admin-login-section");
const adminContent = document.getElementById("admin-content");

const filterClassInput = document.getElementById("filter-class");
const filterDateInput = document.getElementById("filter-date");
const applyFilterBtn = document.getElementById("apply-filter-btn");
const clearFilterBtn = document.getElementById("clear-filter-btn");
const exportCsvBtn = document.getElementById("export-csv-btn");
const syncGithubBtn = document.getElementById("sync-github-btn");
const adminResultsTable = document.getElementById("admin-results-table").querySelector("tbody");

const ghOwnerInput = document.getElementById("gh-owner");
const ghRepoInput = document.getElementById("gh-repo");
const ghPathInput = document.getElementById("gh-path");
const ghTokenInput = document.getElementById("gh-token");
const ghSecretInput = document.getElementById("gh-secret");
const saveGhConfigBtn = document.getElementById("save-gh-config-btn");

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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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

function calculateConfidence(scores) {
    const values = Object.values(scores);
    const sorted = values.slice().sort((a, b) => b - a);
    if (sorted.length < 2) return "Không xác định";
    const gap = sorted[0] - sorted[1];
    if (gap > 10) return "Cao";
    if (gap > 5) return "Trung bình";
    return "Thấp";
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
    if (!saved) {
        // Default: dark
        applyTheme("dark");
    } else {
        applyTheme(saved);
    }
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

// GitHub config
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
function encryptText(text, secret) {
    return CryptoJS.AES.encrypt(text, secret).toString();
}

function decryptText(cipher, secret) {
    try {
        const bytes = CryptoJS.AES.decrypt(cipher, secret);
        const plain = bytes.toString(CryptoJS.enc.Utf8);
        return plain || null;
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

    if (res.status === 404) {
        return { exists: false };
    }

    if (!res.ok) {
        throw new Error(`GitHub GET failed: ${res.status}`);
    }

    const data = await res.json();
    return {
        exists: true,
        sha: data.sha,
        contentBase64: data.content
    };
}

async function githubPutFile(owner, repo, path, token, contentBase64, shaPrev) {
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(
        repo
    )}/contents/${encodeURIComponent(path)}`;

    const body = {
        message: "Update RIASEC results from CBB & Family",
        content: contentBase64
    };
    if (shaPrev) {
        body.sha = shaPrev;
    }

    const maxRetries = 3;
    for (let i = 0; i < maxRetries; i++) {
        try {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `token ${token}`
                },
                body: JSON.stringify(body)
            });

            if (res.status === 403) {
                const resetTime = res.headers.get("X-RateLimit-Reset");
                console.warn(
                    "GitHub rate limit hit, reset at:",
                    resetTime ? new Date(parseInt(resetTime, 10) * 1000) : "unknown"
                );
            }

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`GitHub PUT failed: ${res.status} – ${text}`);
            }
            return await res.json();
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

    const localResults = loadLocalResults();
    if (!localResults.length) {
        alert("Chưa có kết quả nào trên máy này để đồng bộ.");
        return;
    }

    const { owner, repo, path, token, secret } = cfg;

    // Lấy file hiện tại (nếu có)
    let remoteResults = [];
    let prevSha = null;
    try {
        const file = await githubGetFile(owner, repo, path, token);
        if (file.exists) {
            prevSha = file.sha;
            const decoded = atob(file.contentBase64.replace(/\n/g, ""));
            // Giải mã AES
            const plain = decryptText(decoded, secret);
            if (plain) {
                const parsed = JSON.parse(plain);
                if (Array.isArray(parsed.results)) {
                    remoteResults = parsed.results;
                }
            }
        }
    } catch (err) {
        console.warn("Không đọc được dữ liệu từ GitHub, sẽ tạo mới:", err);
    }

    // Merge theo id, tránh trùng
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
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Không tải được Chart.js"));
        document.head.appendChild(script);
    });
}

// ==============================
// Render & logic
// ==============================
function initBrand() {
    if (brandNameEl) brandNameEl.textContent = BRAND_CONFIG.name;
    if (brandTaglineEl) brandTaglineEl.textContent = BRAND_CONFIG.tagline;
    if (brandLogoEl) brandLogoEl.src = BRAND_CONFIG.logo;
}

function buildQuestions() {
    questionsContainer.innerHTML = "";
    const draft = loadDraft();

    questions.forEach((q) => {
        const wrapper = document.createElement("div");
        wrapper.className = "question-item";

        const header = document.createElement("div");
        header.className = "question-header";
        const title = document.createElement("span");
        title.textContent = `${q.id}. ${q.text}`;
        const code = document.createElement("span");
        code.className = "question-code";
        code.textContent = q.code;
        header.appendChild(title);
        header.appendChild(code);

        const options = document.createElement("div");
        options.className = "question-options";

        for (let v = 1; v <= 5; v++) {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${q.id}`;
            input.value = v.toString();

            if (draft[q.id] && String(draft[q.id]) === String(v)) {
                input.checked = true;
            }

            const span = document.createElement("span");
            span.textContent = v;

            label.appendChild(input);
            label.appendChild(span);
            options.appendChild(label);
        }

        wrapper.appendChild(header);
        wrapper.appendChild(options);
        questionsContainer.appendChild(wrapper);
    });

    updateProgress();
}

function getAnswers() {
    const answers = {};
    questions.forEach((q) => {
        const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
        answers[q.id] = checked ? parseInt(checked.value, 10) : null;
    });
    return answers;
}

function updateProgress() {
    const answers = getAnswers();
    const total = questions.length;
    let answered = 0;
    Object.values(answers).forEach((v) => {
        if (v !== null) answered++;
    });
    const percent = Math.round((answered / total) * 100);
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressBar) progressBar.setAttribute("aria-valuenow", String(percent));
    if (progressText) {
        progressText.textContent = `${answered} / ${total} câu (${percent}%)`;
    }
}

function calculateScores() {
    const answers = getAnswers();
    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    questions.forEach((q) => {
        const v = answers[q.id];
        if (v !== null) {
            scores[q.code] += v;
        }
    });

    return scores;
}

function getTop3Codes(scores) {
    return Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([code]) => code);
}

function openCareerModal(careerName, code) {
    const meta = riasecMeta[code];
    const detail = careerDetails[careerName];

    const parts = [];

    parts.push(`<strong>${careerName}</strong>`);
    if (meta) {
        parts.push(
            `<div class="small-muted">Nhóm tính cách liên quan: ${meta.name} (${code})</div>`
        );
    }

    if (detail) {
        parts.push("<br>");
        parts.push(`<div>${detail.desc}</div>`);

        if (detail.majors && detail.majors.length) {
            parts.push("<br><strong>Ngành học phù hợp:</strong>");
            parts.push('<ul class="checklist">');
            detail.majors.forEach((m) => {
                parts.push(`<li>${m}</li>`);
            });
            parts.push("</ul>");
        }

        if (detail.schools && detail.schools.length) {
            parts.push("<strong>Một số trường tiêu biểu:</strong>");
            parts.push('<ul class="checklist">');
            detail.schools.forEach((s) => {
                parts.push(`<li>${s}</li>`);
            });
            parts.push("</ul>");
        }
    } else {
        parts.push("<br>");
        parts.push(
            '<div class="small-muted">Nghề này liên quan đến nhóm tính cách trên. Em có thể tự tìm hiểu thêm trên internet hoặc hỏi thầy cô.</div>'
        );
    }

    parts.push("<br>");
    parts.push("<strong>Gợi ý để em tự tìm hiểu thêm:</strong>");
    parts.push('<ul class="checklist">');
    parts.push("<li>Công việc này hằng ngày thường làm những gì?</li>");
    parts.push("<li>Cần học ngành/chuyên ngành nào? Thi khối/môn gì?</li>");
    parts.push("<li>Cần những kỹ năng và tính cách nào để phù hợp?</li>");
    parts.push("<li>Cơ hội việc làm, mức thu nhập và xu hướng tương lai ra sao?</li>");
    parts.push("</ul>");
    parts.push(
        '<p class="small-muted">Hãy ghi lại điều em tìm được và trao đổi thêm với ba mẹ, thầy cô hoặc CBB &amp; Family.</p>'
    );

    careerModalTitle.textContent = careerName;
    careerModalBody.innerHTML = parts.join("");
    careerModalBackdrop.classList.remove("hidden");
    careerModalBackdrop.setAttribute("aria-hidden", "false");
}

function closeCareerModal() {
    if (!careerModalBackdrop) return;
    careerModalBackdrop.classList.add("hidden");
    careerModalBackdrop.setAttribute("aria-hidden", "true");
}

// Render UI kết quả + chart
async function renderResultUI(result) {
    if (!result) {
        top3Box.textContent = "Chưa có kết quả. Hãy làm bài ở tab Bài trắc nghiệm.";
        resultDetailBox.innerHTML = "";
        return;
    }

    const scores = result.scores;
    const labels = ["R", "I", "A", "S", "E", "C"];
    const data = labels.map((c) => scores[c]);
    const top3 = getTop3Codes(scores);
    const confidence = calculateConfidence(scores);

    // Top3
    top3Box.innerHTML = `
        <div><strong>Top 3 nhóm nổi bật:</strong> ${top3.join(" – ")} (Độ phân biệt: ${confidence})</div>
    `;

    // Chi tiết mô tả + nghề
    const parts = [];
    parts.push("<h3>Giải thích nhóm tính cách & nghề gợi ý</h3>");
    top3.forEach((code) => {
        const meta = riasecMeta[code];
        if (!meta) return;
        parts.push(`<div style="margin-top:6px;"><strong>${code} – ${meta.name}</strong></div>`);
        parts.push(`<div class="small-muted">${meta.desc}</div>`);

        const careersTitle = document.createElement("div");
        parts.push('<div style="margin-top:4px;"><strong>Ngành nghề gợi ý:</strong></div>');
        parts.push(
            '<div class="small-muted">Bấm vào từng nghề để xem gợi ý tự tìm hiểu chi tiết.</div>'
        );

        // Placeholder, sẽ render bằng DOM phía dưới
    });
    resultDetailBox.innerHTML = parts.join("");

    // Sau khi inject text, thêm block cho từng nhóm với career pills
    // Để đơn giản, append phía dưới:
    const container = document.createElement("div");
    top3.forEach((code) => {
        const meta = riasecMeta[code];
        if (!meta) return;
        const block = document.createElement("div");
        block.style.marginTop = "6px";

        const title = document.createElement("div");
        title.innerHTML = `<strong>${code} – ${meta.name}</strong>`;
        block.appendChild(title);

        const desc = document.createElement("div");
        desc.className = "small-muted";
        desc.textContent = meta.desc;
        block.appendChild(desc);

        const hint = document.createElement("div");
        hint.className = "small-muted";
        hint.style.marginTop = "2px";
        hint.textContent = "Bấm vào từng nghề để xem gợi ý câu hỏi tự tìm hiểu.";
        block.appendChild(hint);

        const careersListDiv = document.createElement("div");
        careersListDiv.className = "career-list";

        const source =
            (riasecExtendedCareers[code] && riasecExtendedCareers[code].length
                ? riasecExtendedCareers[code]
                : meta.careers || []);

        source.forEach((career) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "career-pill";
            btn.textContent = career;
            btn.addEventListener("click", () => openCareerModal(career, code));
            careersListDiv.appendChild(btn);
        });

        block.appendChild(careersListDiv);
        container.appendChild(block);
    });
    resultDetailBox.appendChild(container);

    // Charts
    try {
        await loadChartJsIfNeeded();

        if (barChartInstance) barChartInstance.destroy();
        if (radarChartInstance) radarChartInstance.destroy();

        const ctxBar = barCanvas.getContext("2d");
        barChartInstance = new Chart(ctxBar, {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Điểm RIASEC",
                        data,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctxRadar = radarCanvas.getContext("2d");
        radarChartInstance = new Chart(ctxRadar, {
            type: "radar",
            data: {
                labels,
                datasets: [
                    {
                        label: "RIASEC",
                        data,
                        borderWidth: 1
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
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (err) {
        console.error("Lỗi khi vẽ biểu đồ:", err);
    }
}

// ==============================
// Events
// ==============================
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
    // Autosave mỗi 30 giây
    setInterval(() => {
        const draft = {};
        questions.forEach((q) => {
            const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
            if (checked) draft[q.id] = checked.value;
        });
        saveDraft(draft);
    }, 30000);
}

function initQuestionChangeListener() {
    questionsContainer.addEventListener("change", (e) => {
        if (e.target && e.target.name && e.target.name.startsWith("q")) {
            updateProgress();
        }
    });
}

async function handleSubmitTest() {
    if (!ensureStudentInfo()) return;

    const answers = getAnswers();
    const total = questions.length;
    const answered = Object.values(answers).filter((v) => v !== null).length;
    if (answered < total) {
        alert("Vui lòng trả lời đầy đủ 60 câu.");
        return;
    }

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
            email: sanitizeInput(studentEmailInput.value)
        },
        scores,
        top3
    };

    const results = loadLocalResults();
    results.push(result);
    saveLocalResults(results);

    // Clear draft
    saveDraft({});

    // Hiển thị kết quả
    await renderResultUI(result);

    // Switch sang tab kết quả
    tabButtons.forEach((btn) => {
        if (btn.getAttribute("data-tab") === "tab-result") {
            btn.click();
        }
    });

    // Tự động cố gắng sync GitHub (không bắt buộc must success)
    syncAllLocalToGithub().catch((err) => {
        console.warn("Không đồng bộ được GitHub (tự động, có thể bỏ qua):", err);
    });

    // Cập nhật bảng admin nếu đang mở
    refreshAdminTable();
}

function handleResetTest() {
    if (!confirm("Bạn có chắc muốn làm lại từ đầu? Tất cả lựa chọn hiện tại sẽ mất.")) return;
    localStorage.removeItem(LS_DRAFT_KEY);
    buildQuestions();
}

function handleDownloadTxt() {
    const results = loadLocalResults();
    if (!results.length) {
        alert("Chưa có kết quả nào để tải.");
        return;
    }
    const latest = results[results.length - 1];
    const { student, scores, top3, timestamp } = latest;
    const lines = [];

    lines.push("KẾT QUẢ TRẮC NGHIỆM HOLLAND RIASEC");
    lines.push("CBB & Family Career Center");
    lines.push("");
    lines.push(`Họ tên: ${student.name || ""}`);
    lines.push(`Mã HS: ${student.id || ""}`);
    lines.push(`Lớp: ${student.class || ""}`);
    lines.push(`Email: ${student.email || ""}`);
    lines.push(`Thời gian: ${timestamp}`);
    lines.push("");
    lines.push("Điểm RIASEC:");
    Object.entries(scores).forEach(([code, val]) => {
        lines.push(`- ${code}: ${val}`);
    });
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
}

// Admin

function handleAdminLogin() {
    const pw = adminPasswordInput.value;
    if (pw === ADMIN_PASSWORD) {
        adminContent.classList.remove("hidden");
        adminLoginSection.classList.add("hidden");
        refreshAdminTable();
        loadGithubConfigToForm();
    } else {
        alert("Mật khẩu admin không đúng.");
    }
}

function refreshAdminTable(filters = {}) {
    const results = loadLocalResults();
    adminResultsTable.innerHTML = "";

    const { classFilter, dateFilter } = filters;

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
            <td>${r.student.email || ""}</td>
            <td>${riasecStr}</td>
        `;
        adminResultsTable.appendChild(tr);
    });
}

function handleApplyFilter() {
    const cls = sanitizeInput(filterClassInput.value);
    const date = filterDateInput.value || "";
    refreshAdminTable({
        classFilter: cls || null,
        dateFilter: date || null
    });
}

function handleClearFilter() {
    filterClassInput.value = "";
    filterDateInput.value = "";
    refreshAdminTable();
}

function handleExportCsv() {
    const results = loadLocalResults();
    if (!results.length) {
        alert("Chưa có dữ liệu để export.");
        return;
    }
    const rows = [];
    rows.push([
        "timestamp",
        "name",
        "student_id",
        "class",
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
    const owner = sanitizeInput(ghOwnerInput.value);
    const repo = sanitizeInput(ghRepoInput.value);
    const path = sanitizeInput(ghPathInput.value || "data/results.enc.json");
    const token = ghTokenInput.value.trim();
    const secret = ghSecretInput.value.trim();

    if (!owner || !repo || !path || !token || !secret) {
        alert("Vui lòng điền đầy đủ Owner, Repo, Path, Token và khóa mã hóa.");
        return;
    }
    saveGithubConfig({ owner, repo, path, token, secret });
    alert("Đã lưu cấu hình GitHub & mã hóa.");
}

// Modal events
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

    // Restore last result vào tab kết quả
    const results = loadLocalResults();
    if (results.length) {
        renderResultUI(results[results.length - 1]);
    }

    // Events
    if (themeToggle) {
        themeToggle.addEventListener("change", () => {
            applyTheme(themeToggle.checked ? "dark" : "light");
        });
    }

    submitTestBtn.addEventListener("click", () => {
        submitTestBtn.disabled = true;
        submitTestBtn.textContent = "Đang xử lý...";
        handleSubmitTest()
            .catch((err) => {
                console.error(err);
                alert("Có lỗi xảy ra khi xử lý kết quả.");
            })
            .finally(() => {
                submitTestBtn.disabled = false;
                submitTestBtn.textContent = "Xem kết quả";
            });
    });

    resetTestBtn.addEventListener("click", handleResetTest);
    downloadTxtBtn.addEventListener("click", handleDownloadTxt);

    adminLoginBtn.addEventListener("click", handleAdminLogin);

    applyFilterBtn.addEventListener("click", handleApplyFilter);
    clearFilterBtn.addEventListener("click", handleClearFilter);
    exportCsvBtn.addEventListener("click", handleExportCsv);

    syncGithubBtn.addEventListener("click", () => {
        syncGithubBtn.disabled = true;
        syncGithubBtn.textContent = "⏳ Đang đồng bộ...";
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

document.addEventListener("DOMContentLoaded", init);
