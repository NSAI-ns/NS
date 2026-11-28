/**
 * ============================================================================
 * NS AI — BỘ DỮ LIỆU TRI THỨC NGHỀ NGHIỆP DÙNG CHUNG (CAREER INSIGHTS DATA)
 * Cung cấp thông tin chuẩn hóa 5 khối cho 24 nhóm ngành đào tạo chính quy:
 *   1. Khối xét tuyển & Cảnh báo môn học cốt lõi
 *   2. Trường đào tạo thế mạnh & Lời khuyên đề án tuyển sinh
 *   3. Bản chất đào tạo, tiến trình năm học, công cụ thực tế & kỹ năng trọng tâm
 *   4. Cái giá phải trả (Đúng 3 áp lực / mặt trái thực tế không né tránh)
 *   5. Mức lương tham khảo (Mới ra trường vs Sau 5-8 năm) & Hệ số tăng trưởng
 *
 * Tương thích 100% giữa Giao diện Kết quả (UI) và Chatbot Hướng nghiệp (NS AI).
 * Gán vào window.CAREER_INSIGHTS_DATA để tương thích với chế độ chạy trực tiếp file://.
 * ============================================================================
 */

(function () {
    'use strict';

    const CAREER_INSIGHTS = {
        "Công nghệ thông tin & Lập trình phần mềm": {
            id: "cntt",
            name: "Công nghệ thông tin & Lập trình phần mềm",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất (70% chỉ tiêu)", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên xét tuyển quốc tế", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số trường ĐH mở rộng", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Tổ hợp dự phòng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên xét tuyển quốc tế", isPopular: true },
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số trường", isPopular: false },
                { combo: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Tổ hợp dự phòng", isPopular: false }
            ],
            coreSubjectWarning: "Toán học & Tư duy logic — Học sâu Toán cao cấp, Giải thuật và Cấu trúc dữ liệu. Cần rèn tư duy logic mỗi ngày.",
            coreSubjectAlert: {
                subject: "Toán học (Tư duy logic & Giải thuật)",
                reason: "Nền tảng Toán rời rạc và Giải thuật rất nặng. Học yếu Toán sẽ khó tiếp cận lập trình nâng cao và tối ưu hệ thống."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Ưu tiên trường có điểm chuẩn thấp hơn điểm thi thử 1.0 – 1.5 điểm để an toàn nguyện vọng.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Chú ý quy đổi IELTS, tiêu chí phụ môn Toán và phân bổ chỉ tiêu ĐGNL/ĐGTD của từng trường."
            },
            curriculum: {
                duration: "4 – 4.5 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Nhập môn", desc: "Toán cao cấp, Nhập môn lập trình (C/C++), Tiếng Anh chuyên ngành." },
                    { year: "Năm 2", stage: "Cơ sở ngành & Công cụ", desc: "Cấu trúc dữ liệu & Giải thuật, OOP, Cơ sở dữ liệu SQL, Mạng máy tính." },
                    { year: "Năm 3", stage: "Chuyên sâu & Đồ án", desc: "Phát triển Web/Mobile, Kiến trúc phần mềm, DevOps, Đồ án nhóm." },
                    { year: "Năm 4-5", stage: "Thực tập & Khóa luận", desc: "Thực tập doanh nghiệp (OJT 6 tháng), Khóa luận tốt nghiệp và đi làm." }
                ],
                plainExplanation: "Xây dựng giải pháp công nghệ số: lập trình web/app, quản trị dữ liệu lớn, bảo mật hệ thống và tự động hóa quy trình.",
                tools: ["VS Code", "Git/GitHub", "Python", "JavaScript/TypeScript", "Docker", "PostgreSQL", "React/Node.js", "Postman"],
                skills: [
                    { icon: "🧩", name: "Tư duy giải thuật & Tối ưu", desc: "Phân tích và biến bài toán đời thực thành các thuật toán xử lý tối ưu" },
                    { icon: "💻", name: "Lập trình & Clean Code", desc: "Viết mã nguồn chuẩn mực, dễ đọc, dễ bảo trì và mở rộng" },
                    { icon: "🤝", name: "Làm việc nhóm Agile/Scrum", desc: "Phối hợp nhịp nhàng theo sprint, quản lý task trên Jira và review code" },
                    { icon: "🌐", name: "Tiếng Anh chuyên ngành", desc: "Đọc hiểu tài liệu kỹ thuật tiếng Anh, tự cập nhật công nghệ mới trên GitHub." }
                ]
            },
            harshRealities: [
                { icon: "⏰", title: "OT cày đêm fix bug & chạy dự án", desc: "Áp lực OT cày đêm sửa lỗi khi hệ thống gặp sự cố server hoặc sắp đến hạn release." },
                { icon: "🔄", title: "Tốc độ đào thải cao — Tự học suốt đời", desc: "Công nghệ đổi mới sau 2–3 năm. Ngừng tự học 1 năm là tụt hậu so với thị trường." },
                { icon: "🩺", title: "Bệnh văn phòng & Căng thẳng tinh thần", desc: "Ngồi máy tính 8–12 tiếng/ngày dễ mắc bệnh cột sống, cận thị và kiệt sức tinh thần." }
            ],
            salary: {
                entry: "9 – 15 Triệu / tháng",
                experienced: "30 – 50 Triệu / tháng",
                multiplier: "×3.2",
                note: "Tham khảo: Lương kỹ sư làm remote cho doanh nghiệp nước ngoài có thể đạt $2,000 – $3,500/tháng.",
                entryBarPercent: 35,
                expBarPercent: 90
            },
            closingQuestion: "Điểm Toán và tư duy logic của bạn hiện có đạt từ 7.5 trở lên để tự tin cày thuật toán mỗi ngày không?"
        },

        "Khoa học máy tính & Trí tuệ nhân tạo (AI)": {
            id: "cs_ai",
            name: "Khoa học máy tính & Trí tuệ nhân tạo (AI)",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất (70% chỉ tiêu)", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên xét tuyển quốc tế", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số trường ĐH mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên xét tuyển quốc tế", isPopular: true },
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Toán cao cấp & Đại số tuyến tính — Trọng tâm là Xác suất thống kê, Đại số ma trận và Giải tích đa biến.",
            coreSubjectAlert: {
                subject: "Toán cao cấp (Đại số tuyến tính & Xác suất)",
                reason: "Mô hình Machine Learning và Deep Learning xây dựng trên ma trận. Hổng Toán chỉ dừng ở mức cài thư viện có sẵn."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Ngành AI trường top lấy điểm rất cao (27–29đ); nên đặt nguyện vọng dự phòng ngành CNTT.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Ưu tiên điểm thi ĐGNL ĐHQG và chứng chỉ tiếng Anh (IELTS từ 6.5 trở lên) được quy đổi hệ số cao."
            },
            curriculum: {
                duration: "4 – 5 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Toán nâng cao", desc: "Đại số tuyến tính, Giải tích đa biến, Xác suất thống kê, Python căn bản." },
                    { year: "Năm 2", stage: "Cơ sở KHMT & Dữ liệu", desc: "Cấu trúc dữ liệu nâng cao, Toán rời rạc, Cơ sở dữ liệu NoSQL, Xử lý dữ liệu lớn." },
                    { year: "Năm 3", stage: "Chuyên sâu AI & Học máy", desc: "Machine Learning, Deep Learning, Xử lý ảnh số (CV), Xử lý ngôn ngữ tự nhiên (NLP)." },
                    { year: "Năm 4-5", stage: "Nghiên cứu & Khóa luận", desc: "Huấn luyện mô hình LLM/GenAI, Nghiên cứu R&D, Viết bài báo khoa học và thực tập." }
                ],
                plainExplanation: "Nghiên cứu dạy máy tính tự học: thị giác máy tính, xử lý ngôn ngữ tự nhiên (NLP) và mô hình AI tạo sinh.",
                tools: ["Python", "PyTorch", "TensorFlow", "Jupyter", "Scikit-Learn", "HuggingFace", "CUDA", "Pandas/NumPy"],
                skills: [
                    { icon: "🧠", name: "Toán mô hình & Đại số ma trận", desc: "Hiểu sâu bản chất toán học đằng sau các thuật toán tối ưu Gradient Descent" },
                    { icon: "🤖", name: "Huấn luyện mô hình Deep Learning", desc: "Thiết kế, tinh chỉnh (fine-tuning) và đánh giá các mô hình nơ-ron nhân tạo" },
                    { icon: "📊", name: "Khai phá dữ liệu lớn (Big Data)", desc: "Thu thập, làm sạch và trích xuất đặc trưng từ hàng triệu bản ghi dữ liệu" },
                    { icon: "🔬", name: "Tư duy nghiên cứu khoa học R&D", desc: "Đọc hiểu các bài báo ArXiv, thử nghiệm thuật toán mới và viết báo cáo khoa học" }
                ]
            },
            harshRealities: [
                { icon: "📈", title: "Nền tảng Toán học cực nặng & trừu tượng", desc: "Khối lượng lý thuyết Toán giải tích, ma trận không gian đa chiều cực khó và trừu tượng." },
                { icon: "⚔️", title: "Cạnh tranh khốc liệt bằng công bố & năng lực R&D", desc: "Thị trường AI tuyển chọn khắt khe; cử nhân cần có bài báo hoặc sản phẩm thực chiến nổi bật." },
                { icon: "💥", title: "Rủi ro dự án R&D thất bại cao", desc: "Dự án R&D huấn luyện mô hình tốn hàng trăm giờ GPU nhưng vẫn có thể không đạt độ chính xác." }
            ],
            salary: {
                entry: "12 – 20 Triệu / tháng",
                experienced: "45 – 80 Triệu / tháng",
                multiplier: "×3.8",
                note: "Tham khảo: Kỹ sư AI / MLOps giỏi có thể nhận mức đãi ngộ trên 60–80 triệu/tháng tại các tập đoàn lớn.",
                entryBarPercent: 40,
                expBarPercent: 95
            },
            closingQuestion: "Điểm Toán và tư duy Đại số/Xác suất của bạn có đủ vững (trên 8.0) để theo đuổi giải thuật AI không?"
        },

        "Kinh tế / Quản trị kinh doanh & Marketing": {
            id: "qtkd_mkt",
            name: "Kinh tế / Quản trị kinh doanh & Marketing",
            combos: [
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất (75% chỉ tiêu)", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Nhiều trường ĐH Kinh tế", isPrimary: false },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Khối truyền thống", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên khối Kinh tế", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Tiếng Anh & Toán tư duy số liệu — Kinh doanh hiện đại vận hành bằng phân tích dữ liệu và tài liệu quốc tế.",
            coreSubjectAlert: {
                subject: "Tiếng Anh & Tư duy phân tích số liệu",
                reason: "Chiến dịch tiếp thị số và case study quốc tế đều bằng tiếng Anh; thiếu ngoại ngữ sẽ rất khó thăng tiến quản lý."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Trường top 1 (FTU, NEU, UEH) lấy 26.5–28đ; cân nhắc thêm Thương mại, HV Ngân hàng.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Chú ý phương thức xét tuyển kết hợp chứng chỉ IELTS với điểm học bạ hoặc điểm tốt nghiệp THPT."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Kinh tế vi mô", desc: "Kinh tế vi mô, vĩ mô, Pháp luật đại cương, Tiếng Anh thương mại." },
                    { year: "Năm 2", stage: "Cơ sở ngành & Marketing", desc: "Nguyên lý Marketing, Quản trị học, Hành vi người tiêu dùng, Nghiên cứu thị trường." },
                    { year: "Năm 3", stage: "Chuyên sâu & Chiến dịch", desc: "Digital Marketing, Quản trị chuỗi giá trị, Brand Management, Chạy chiến dịch giả lập." },
                    { year: "Năm 4", stage: "Thực tập & Khóa luận", desc: "Thực tập tại phòng Marketing/Sales doanh nghiệp, Đồ án kinh doanh tốt nghiệp." }
                ],
                plainExplanation: "Nghiên cứu thị trường, phát triển sản phẩm giải quyết nhu cầu khách hàng, chạy tiếp thị và vận hành sinh lời.",
                tools: ["Excel nâng cao", "PowerBI", "Google Analytics", "Meta Ads Manager", "Canva", "HubSpot CRM", "TikTok Ads"],
                skills: [
                    { icon: "📊", name: "Phân tích số liệu thị trường", desc: "Đọc hiểu báo cáo nghiên cứu thị trường và đo lường chỉ số ROI chiến dịch" },
                    { icon: "🗣️", name: "Giao tiếp, thuyết phục & Bán hàng", desc: "Trình bày ý tưởng mạch lạc, đàm phán hợp đồng và xây dựng quan hệ đối tác" },
                    { icon: "🎯", name: "Hoạch định chiến lược đa kênh", desc: "Lập kế hoạch tiếp thị tổng thể từ kênh Online đến Offline (Omnichannel)" },
                    { icon: "📈", name: "Tư duy nhạy bén thương mại", desc: "Nhanh nhạy nắm bắt xu hướng thị trường và tâm lý tiêu dùng mới" }
                ]
            },
            harshRealities: [
                { icon: "🌊", title: "Bằng cấp dễ bão hòa nếu thiếu kinh nghiệm thực chiến", desc: "Cử nhân kinh tế tốt nghiệp rất đông; nhà tuyển dụng chỉ ưu tiên ứng viên có kinh nghiệm thực chiến." },
                { icon: "🎯", title: "Áp lực chỉ tiêu doanh số (KPI) đè nặng mỗi tháng", desc: "Áp lực chỉ tiêu doanh số (KPI) đè nặng; mỗi tháng đều bắt đầu lại từ con số 0 với mục tiêu mới." },
                { icon: "⚡", title: "Môi trường biến động, đào thải nhanh", desc: "Thuật toán quảng cáo đổi liên tục; chiến dịch thành công hôm nay có thể lỗi thời ngay ngày mai." }
            ],
            salary: {
                entry: "7 – 12 Triệu / tháng",
                experienced: "25 – 45 Triệu / tháng",
                multiplier: "×3.5",
                note: "Tham khảo: Trưởng phòng Marketing (CMO) hoặc Giám đốc Kinh doanh có hoa hồng doanh số không giới hạn.",
                entryBarPercent: 30,
                expBarPercent: 85
            },
            closingQuestion: "Điểm Tiếng Anh hoặc Toán của bạn có đạt từ 7.5 trở lên để tự tin đọc tài liệu thị trường quốc tế không?"
        },

        "Tài chính - Ngân hàng & Kế toán - Kiểm toán": {
            id: "tc_kt",
            name: "Tài chính - Ngân hàng & Kế toán - Kiểm toán",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất (60% chỉ tiêu)", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên khối Tài chính", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Nhiều trường xét tuyển", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Khối kinh tế ưu tiên", isPopular: true },
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Toán học & Tư duy số liệu chuẩn xác — Đòi hỏi sự tỉ mỉ tuyệt đối với số liệu, phòng ngừa rủi ro pháp lý.",
            coreSubjectAlert: {
                subject: "Toán học & Tính cẩn trọng với số liệu",
                reason: "Báo cáo tài chính yêu cầu chính xác 100%. Tính cách hấp tấp, sợ bảng tính Excel sẽ rất áp lực khi làm việc."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: HV Tài chính, HV Ngân hàng, NEU là top đầu; cân nhắc ĐH Thương mại mức điểm an toàn hơn.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Nhiều trường xét chứng chỉ nghề quốc tế (ACCA, CFA) hoặc IELTS để cộng điểm ưu tiên."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Kinh tế học", desc: "Toán cao cấp, Kinh tế vi mô/vĩ mô, Nguyên lý kế toán căn bản." },
                    { year: "Năm 2", stage: "Cơ sở ngành & Thuế", desc: "Kế toán tài chính, Luật thuế, Thị trường tài chính, Tài chính doanh nghiệp." },
                    { year: "Năm 3", stage: "Chuyên sâu & Kiểm toán", desc: "Kiểm toán căn bản, Thẩm định giá, Định giá chứng khoán, Phần mềm kế toán MISA/SAP." },
                    { year: "Năm 4", stage: "Thực tập & Khóa luận", desc: "Thực tập tại công ty kiểm toán Big 4 hoặc ngân hàng, Hoàn thiện khóa luận." }
                ],
                plainExplanation: "Quản trị sức khỏe tiền tệ doanh nghiệp: ghi nhận dòng tiền, lập báo cáo tài chính và thẩm định rủi ro đầu tư.",
                tools: ["Excel Advanced", "MISA", "SAP ERP", "PowerBI", "Bloomberg Terminal", "SPSS", "Python tài chính"],
                skills: [
                    { icon: "🔢", name: "Đọc hiểu Báo cáo tài chính", desc: "Phân tích cấu trúc bảng cân đối kế toán, báo cáo lãi lỗ và lưu chuyển tiền tệ" },
                    { icon: "⚖️", name: "Am hiểu chuẩn mực & Luật thuế", desc: "Nắm vững hệ thống chuẩn mực kế toán VAS/IFRS và chính sách thuế hiện hành" },
                    { icon: "🛡️", name: "Quản trị rủi ro dòng tiền", desc: "Đánh giá khả năng thanh khoản, đo lường rủi ro tín dụng và phòng ngừa tỷ giá" },
                    { icon: "📈", name: "Mô hình hóa tài chính (Financial Modeling)", desc: "Xây dựng kịch bản tài chính dự báo doanh thu và dòng tiền chiết khấu (DCF)" }
                ]
            },
            harshRealities: [
                { icon: "📅", title: "Mùa kiểm toán & Báo cáo cuối năm làm việc 14–16 tiếng/ngày", desc: "Mùa kiểm toán và báo cáo tài chính cuối năm (tháng 12–4) thường xuyên làm việc 12–15 tiếng/ngày." },
                { icon: "⚖️", title: "Rủi ro pháp lý & Trách nhiệm bồi hoàn lớn", desc: "Ký duyệt sai chứng từ hoặc báo cáo kiểm toán có thể bị truy cứu trách nhiệm pháp lý và bồi thường." },
                { icon: "🔁", title: "Công việc dễ đơn điệu, áp lực chính xác 100%", desc: "Hàng ngày phải đối chiếu từng dòng chứng từ, hóa đơn; tính chất công việc lặp đi lặp lại đòi hỏi tính kiên nhẫn cao độ." }
            ],
            salary: {
                entry: "8 – 13 Triệu / tháng",
                experienced: "28 – 45 Triệu / tháng",
                multiplier: "×3.2",
                note: "Tham khảo: Chuyên gia có chứng chỉ CFA/ACCA làm tại các quỹ đầu tư quốc tế nhận mức lương hàng nghìn USD.",
                entryBarPercent: 32,
                expBarPercent: 88
            },
            closingQuestion: "Điểm Toán và độ cẩn trọng với số liệu của bạn có tự tin đạt trên 7.5 để tránh mọi sai sót kế toán không?"
        },

        "Y khoa / Dược học & Khoa học sức khỏe": {
            id: "y_duoc",
            name: "Y khoa / Dược học & Khoa học sức khỏe",
            combos: [
                { code: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Tổ hợp truyền thống số 1", isPrimary: true },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Xét tuyển ngành Dược / Y sinh", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Một số trường công lập", isPrimary: false },
                { code: "B08", subjects: "Toán · Sinh học · Tiếng Anh", tag: "Chương trình tiên tiến", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Tổ hợp cốt lõi", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Ngành Dược / Y sinh", isPopular: false },
                { combo: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Sinh học & Hóa học — Khối lượng kiến thức bệnh học, giải phẫu khổng lồ. Cần khả năng tự học bền bỉ nhiều năm.",
            coreSubjectAlert: {
                subject: "Sinh học & Hóa học (Giải phẫu & Dược lý)",
                reason: "Hàng nghìn trang giáo trình giải phẫu, dược lý và sinh lý bệnh. Bắt buộc có trí nhớ tốt và sự kiên trì phi thường."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH Y Hà Nội, Y Dược TPHCM lấy 27.5–28.5đ; Y Hải Phòng, Y Thái Bình vừa tầm hơn.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Một số trường ưu tiên xét tuyển chứng chỉ tiếng Anh (IELTS từ 6.5 trở lên) kết hợp điểm khối B00."
            },
            curriculum: {
                duration: "6 NĂM (Bác sĩ) / 5 NĂM (Dược sĩ)",
                timeline: [
                    { year: "Năm 1-2", stage: "Đại cương & Giải phẫu cơ bản", desc: "Giải phẫu học thực hành, Sinh lý học, Hóa sinh, Vi sinh - Ký sinh trùng." },
                    { year: "Năm 3", stage: "Tiền lâm sàng & Bệnh học", desc: "Triệu chứng học, Dược lý học, Đi lâm sàng bệnh viện buổi sáng, học lý thuyết buổi chiều." },
                    { year: "Năm 4-5", stage: "Lâm sàng chuyên khoa", desc: "Nội khoa, Ngoại khoa, Sản khoa, Nhi khoa; Trực đêm cấp cứu tại bệnh viện." },
                    { year: "Năm 6", stage: "Thực tập tốt nghiệp", desc: "Thực tập toàn diện tại các viện tuyến đầu, Thi tốt nghiệp lâm sàng & Lý thuyết quốc gia." }
                ],
                plainExplanation: "Đào tạo thầy thuốc chữa bệnh: giải phẫu cơ thể, chẩn đoán triệu chứng, xét nghiệm và lên phác đồ điều trị.",
                tools: ["Ống nghe y tế", "Hệ thống Bệnh án điện tử (EMR)", "Mô hình phẫu thuật 3D", "Dược thư Quốc gia", "Máy đo điện tim ECG", "Phần mềm chẩn đoán PACS"],
                skills: [
                    { icon: "🩺", name: "Khám lâm sàng & Chẩn đoán", desc: "Quan sát, thăm khám tỉ mỉ và tổng hợp triệu chứng để đưa ra kết luận bệnh chính xác" },
                    { icon: "🧠", name: "Trí nhớ siêu đẳng & Xử lý áp lực", desc: "Ghi nhớ hàng chục nghìn thuật ngữ y khoa và giữ bình tĩnh tuyệt đối trong phòng cấp cứu" },
                    { icon: "❤️", name: "Y đức & Giao tiếp người bệnh", desc: "Lắng nghe, thấu cảm và giải thích nhẹ nhàng, rõ ràng cho bệnh nhân và thân nhân" },
                    { icon: "🔬", name: "Cập nhật Y học thực chứng (EBM)", desc: "Liên tục đọc các thử nghiệm lâm sàng và phác đồ mới của Bộ Y tế và WHO" }
                ]
            },
            harshRealities: [
                { icon: "⏳", title: "Thời gian đào tạo dài nhất & Khởi đầu muộn", desc: "Đào tạo dài nhất: 6 năm đại học + 18 tháng thực hành lấy CCHN + 3 năm nội trú trước khi có thu nhập tốt." },
                { icon: "🩸", title: "Áp lực trực đêm thâu đêm & Sinh mạng con người", desc: "Trực cấp cứu 24/7 thâu đêm, đối diện ranh giới sinh tử và áp lực nặng nề từ phía người nhà bệnh nhân." },
                { icon: "📉", title: "Thu nhập khởi điểm thấp so với công sức bỏ ra", desc: "Lương bác sĩ mới ra trường tại viện công chỉ 6–9 triệu; cần 8–10 năm phấn đấu để có thu nhập vững vàng." }
            ],
            salary: {
                entry: "7 – 11 Triệu / tháng",
                experienced: "35 – 70 Triệu / tháng",
                multiplier: "×4.5",
                note: "Tham khảo: Bác sĩ có CCHN làm viện quốc tế hoặc mở phòng khám riêng có thể đạt 50–90+ triệu/tháng.",
                entryBarPercent: 28,
                expBarPercent: 92
            },
            closingQuestion: "Học lực Sinh - Hóa của bạn hiện có đủ sức đạt 25-28 điểm để theo học khối ngành Y Dược không?"
        },

        "Điều dưỡng & Kỹ thuật Y sinh": {
            id: "dieu_duong",
            name: "Điều dưỡng & Kỹ thuật Y sinh",
            combos: [
                { code: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Phổ biến nhất", isPrimary: true },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Kỹ thuật y sinh", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Một số trường", isPrimary: false },
                { code: "B08", subjects: "Toán · Sinh học · Tiếng Anh", tag: "Điều dưỡng quốc tế", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Sinh học & Tinh thần kiên nhẫn — Công việc gắn liền trực tiếp với bệnh nhân và hệ thống máy theo dõi sinh hiệu.",
            coreSubjectAlert: {
                subject: "Sinh học & Tinh thần phụng sự",
                reason: "Chăm sóc bệnh nhân cần nền tảng sinh lý tốt cùng đức tính cẩn trọng, kiên nhẫn và chịu khó trước mọi ca bệnh."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Điểm chuẩn ngành Điều dưỡng từ 19 – 23.5 điểm, dễ tiếp cận hơn nhiều so với Bác sĩ.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Nhiều chương trình Điều dưỡng liên kết làm việc tại Nhật Bản, Đức có học bổng ngoại ngữ."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Giải phẫu", desc: "Giải phẫu sinh lý, Vi sinh, Đạo đức y khoa, Giao tiếp trong y tế." },
                    { year: "Năm 2", stage: "Kỹ thuật điều dưỡng cơ bản", desc: "Quy trình chăm sóc, Tiêm truyền, Sơ cứu cấp cứu, Kiểm soát nhiễm khuẩn." },
                    { year: "Năm 3", stage: "Chăm sóc chuyên khoa", desc: "Điều dưỡng Nội - Ngoại - Sản - Nhi, Vận hành máy theo dõi bệnh nhân (Monitor)." },
                    { year: "Năm 4", stage: "Thực tập toàn diện", desc: "Thực tập trực ca tại các bệnh viện lớn, Hoàn thành báo cáo tốt nghiệp." }
                ],
                plainExplanation: "Trụ cột chăm sóc y tế: thực hiện y lệnh, theo dõi chỉ số sinh hiệu (mạch, huyết áp) và hỗ trợ hồi phục sức khỏe.",
                tools: ["Máy Monitor theo dõi sinh hiệu", "Bơm tiêm điện", "Máy thở", "Hệ thống quản lý điều dưỡng EMR", "Dụng cụ chăm sóc vết thương"],
                skills: [
                    { icon: "💉", name: "Thành thạo kỹ thuật tiêm truyền & sơ cứu", desc: "Thực hiện chính xác kỹ thuật điều dưỡng an toàn, không gây đau đớn cho bệnh nhân" },
                    { icon: "⏱️", name: "Nhạy bén nhận diện biến chứng", desc: "Phát hiện ngay lập tức các dấu hiệu suy hô hấp, sốc phản vệ để báo bác sĩ can thiệp" },
                    { icon: "🤝", name: "Tâm lý tiếp xúc & An ủi người bệnh", desc: "Giúp người bệnh và gia đình an tâm, hợp tác tích cực trong quá trình điều trị" },
                    { icon: "🌐", name: "Tiếng Đức / Tiếng Nhật (nếu đi xuất khẩu)", desc: "Mở ra cơ hội làm việc tại các nước phát triển với mức thu nhập hấp dẫn" }
                ]
            },
            harshRealities: [
                { icon: "🏃", title: "Áp lực thể lực rất lớn (Trực ca kíp 24/7)", desc: "Trực ca kíp 24/7, đi lại liên tục và nâng đỡ bệnh nhân nặng gây quá tải thể lực và đảo lộn giấc ngủ." },
                { icon: "☣️", title: "Nguy cơ lây nhiễm chéo & Phơi nhiễm nghề nghiệp", desc: "Tiếp xúc trực tiếp với dịch tiết, máu và nguồn lây nhiễm đòi hỏi kỷ luật phòng hộ y tế nghiêm ngặt." },
                { icon: "💬", title: "Áp lực tâm lý từ phía người nhà bệnh nhân", desc: "Thường xuyên chịu áp lực, bức xúc từ người nhà bệnh nhân trong phòng bệnh mà vẫn phải hòa nhã." }
            ],
            salary: {
                entry: "7 – 10 Triệu / tháng",
                experienced: "18 – 30 Triệu / tháng",
                multiplier: "×2.5",
                note: "Tham khảo: Điều dưỡng làm việc tại Nhật Bản hoặc Đức theo hợp đồng có thể đạt 40–65 triệu/tháng.",
                entryBarPercent: 28,
                expBarPercent: 75
            },
            closingQuestion: "Học lực môn Sinh học và sức bền học tập của bạn có đủ vững để hoàn thành chương trình Điều dưỡng không?"
        },

        "Kỹ thuật / Cơ điện tử & Tự động hóa": {
            id: "cd_tdh",
            name: "Kỹ thuật / Cơ điện tử & Tự động hóa",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất (70% chỉ tiêu)", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên khối Kỹ thuật", isPrimary: false },
                { code: "C01", subjects: "Toán · Vật lí · Ngữ văn", tag: "Một số trường kỹ thuật", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Cốt lõi khối Kỹ thuật", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên xét tuyển", isPopular: true },
                { combo: "C01", subjects: "Toán · Vật lí · Ngữ văn", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Vật lý & Toán ứng dụng — Môn học cốt lõi gồm Cơ học, Sức bền vật liệu, Lý thuyết điều khiển và Vi điều khiển.",
            coreSubjectAlert: {
                subject: "Vật lý (Cơ học & Điện học) & Toán",
                reason: "Chế tạo robot và dây chuyền cần hiểu sâu về cân bằng lực, truyền động cơ khí và giải thuật lập trình PLC."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH Bách Khoa lấy 26–27.5đ; Giao thông Vận tải, ĐH Công nghiệp điểm vừa tầm hơn.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Ưu tiên điểm thi Đánh giá tư duy (ĐHBK) hoặc ĐGNL ĐHQG với trọng số cao môn Toán - Lý."
            },
            curriculum: {
                duration: "4.5 – 5 NĂM (Kỹ sư)",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Toán - Lý", desc: "Toán cao cấp, Vật lý đại cương, Vẽ kỹ thuật, Nhập môn ngành Cơ điện tử." },
                    { year: "Năm 2", stage: "Cơ sở cơ học & Điện tử", desc: "Sức bền vật liệu, Nguyên lý máy, Mạch điện - Điện tử, Lập trình C cho vi điều khiển." },
                    { year: "Năm 3", stage: "Tự động hóa & Khí nén", desc: "Lập trình PLC, Hệ thống khí nén thủy lực, Cảm biến công nghiệp, Robot học." },
                    { year: "Năm 4-5", stage: "Đồ án & Thực tập nhà máy", desc: "Thiết kế dây chuyền SCADA/MES, Chế tạo tay máy robot, Thực tập tại nhà máy FDI." }
                ],
                plainExplanation: "Kết hợp cơ khí, điện tử và lập trình để chế tạo robot hàn tự động, băng chuyền và hệ thống nhà máy thông minh.",
                tools: ["AutoCAD", "SolidWorks", "Siemens TIA Portal", "MATLAB/Simulink", "Altium Designer", "LabVIEW", "Arduino/STM32"],
                skills: [
                    { icon: "⚙️", name: "Thiết kế mô hình 3D cơ khí", desc: "Mô phỏng động lực học và thiết kế chi tiết máy trên phần mềm SolidWorks" },
                    { icon: "⚡", name: "Lập trình PLC & Hệ thống SCADA", desc: "Viết logic điều khiển cho các bộ điều khiển công nghiệp Siemens, Mitsubishi, Omron" },
                    { icon: "🤖", name: "Tích hợp Robot công nghiệp", desc: "Lập trình đường đi và phối hợp hoạt động cho cánh tay robot trong dây chuyền" },
                    { icon: "🔧", name: "Chẩn đoán & Bảo trì sự cố", desc: "Đọc sơ đồ mạch điện và xử lý nhanh chóng các lỗi dừng máy trong nhà xưởng" }
                ]
            },
            harshRealities: [
                { icon: "🏭", title: "Môi trường làm việc tại nhà máy ồn ào, bụi bặm", desc: "Làm việc tại phân xưởng sản xuất tiếp xúc với tiếng ồn máy dập, dầu mỡ cơ khí và nhiệt độ cao." },
                { icon: "🚗", title: "Thường xuyên công tác xa hoặc làm việc ở KCN ngoại ô", desc: "Nhà máy lớn thường đặt ở KCN xa trung tâm thành phố (Bắc Ninh, Bình Dương, Hải Phòng, Đồng Nai)." },
                { icon: "⚠️", title: "Áp lực an toàn lao động & Rủi ro dừng dây chuyền", desc: "Sự cố dừng dây chuyền gây thiệt hại hàng trăm triệu mỗi giờ, tạo áp lực sửa chữa rất căng thẳng." }
            ],
            salary: {
                entry: "8 – 14 Triệu / tháng",
                experienced: "25 – 45 Triệu / tháng",
                multiplier: "×3.0",
                note: "Tham khảo: Kỹ sư tự động hóa làm tại các tập đoàn FDI (Samsung, LG, VinFast) có chế độ đãi ngộ rất tốt.",
                entryBarPercent: 32,
                expBarPercent: 86
            },
            closingQuestion: "Điểm Toán - Vật lý của bạn có đạt từ 7.5 trở lên để tự tin học Cơ điện tử và lập trình PLC không?"
        },

        "Điện - Điện tử & Năng lượng tái tạo": {
            id: "dien_dt",
            name: "Điện - Điện tử & Năng lượng tái tạo",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên khối Kỹ thuật", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số trường xét tuyển", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên khối Kỹ thuật", isPopular: true }
            ],
            coreSubjectWarning: "Vật lý (Điện học) & Toán giải tích — Môn cốt lõi gồm Mạch điện, Trường điện từ, Bán dẫn và Lưới điện thông minh.",
            coreSubjectAlert: {
                subject: "Vật lý (Điện học & Mạch điện) & Toán",
                reason: "Khái niệm dòng điện xoay chiều và sóng điện từ trừu tượng, đòi hỏi tư duy giải tích và tích phân vi phân tốt."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Bách Khoa, Điện lực, Sư phạm Kỹ thuật đào tạo mạnh với dải điểm rộng từ 20–26đ.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Lĩnh vực thiết kế vi mạch bán dẫn và năng lượng sạch đang có nhiều học bổng doanh nghiệp."
            },
            curriculum: {
                duration: "4.5 – 5 NĂM (Kỹ sư)",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Toán - Lý", desc: "Toán cao cấp, Vật lý đại cương (Phần Điện - Từ), Cơ sở kỹ thuật điện." },
                    { year: "Năm 2", stage: "Mạch điện & Điện tử cơ bản", desc: "Lý thuyết mạch điện, Kỹ thuật điện tử tương tự & số, Vi xử lý, An toàn điện." },
                    { year: "Năm 3", stage: "Hệ thống điện & Năng lượng xanh", desc: "Điện tử công suất, Hệ thống điện pin mặt trời & điện gió, Trạm biến áp, Lưới điện thông minh." },
                    { year: "Năm 4-5", stage: "Thiết kế & Tốt nghiệp", desc: "Thiết kế trạm điện/hệ thống điện công nghiệp, Thực tập tại EVN/doanh nghiệp năng lượng." }
                ],
                plainExplanation: "Làm chủ năng lượng: thiết kế trạm biến áp, truyền tải lưới điện, chế tạo vi mạch và phát triển điện mặt trời, gió.",
                tools: ["MATLAB", "ETAP", "Altium Designer", "PSCAD", "AutoCAD Electrical", "PVsyst (Năng lượng mặt trời)", "Multisim"],
                skills: [
                    { icon: "⚡", name: "Tính toán & Thiết kế lưới điện", desc: "Phân tích trào lưu công suất, ngắn mạch và bảo vệ rơ-le cho trạm biến áp" },
                    { icon: "☀️", name: "Thiết kế hệ thống Năng lượng xanh", desc: "Mô phỏng và tối ưu hiệu suất tấm pin năng lượng mặt trời và turbine gió" },
                    { icon: "🔌", name: "Thiết kế mạch in PCB & Bán dẫn", desc: "Vẽ và layout mạch điện tử công suất phục vụ thiết bị IoT và biến tần" },
                    { icon: "🛡️", name: "Quy chuẩn an toàn điện cao áp", desc: "Tuân thủ nghiêm ngặt quy trình cô lập nguồn và an toàn vận hành lưới điện" }
                ]
            },
            harshRealities: [
                { icon: "📚", title: "Khối lượng lý thuyết mạch cực kỳ trừu tượng", desc: "Lý thuyết giải tích mạch điện và trường điện từ rất trừu tượng, đòi hỏi tính toán toán học phức tạp." },
                { icon: "⚡", title: "Môi trường công trường trạm điện nhiều hiểm nguy", desc: "Làm việc tại công trường trạm điện cao áp hoặc cánh đồng điện gió ngoài trời nắng gió khắc nghiệt." },
                { icon: "⚠️", title: "Áp lực an toàn điện sinh mạng ở mức tối cao", desc: "Làm việc với lưới điện cao thế đòi hỏi kỷ luật an toàn tuyệt đối; sơ suất nhỏ có thể gây tai nạn." }
            ],
            salary: {
                entry: "8 – 14 Triệu / tháng",
                experienced: "26 – 45 Triệu / tháng",
                multiplier: "×3.0",
                note: "Tham khảo: Kỹ sư thiết kế vi mạch bán dẫn hoặc dự án điện gió ngoài khơi có thể đạt 40–70 triệu/tháng.",
                entryBarPercent: 32,
                expBarPercent: 86
            },
            closingQuestion: "Điểm môn Vật lý (phần Điện học) và Toán của bạn có đạt từ 7.5 trở lên để giải các bài toán mạch điện không?"
        },

        "Kiến trúc & Thiết kế nội thất": {
            id: "kt_nt",
            name: "Kiến trúc & Thiết kế nội thất",
            combos: [
                { code: "V00", subjects: "Toán · Vật lí · Vẽ mỹ thuật", tag: "Xét tuyển khối Kiến trúc", isPrimary: true },
                { code: "H00", subjects: "Ngữ văn · Hình họa · Bố cục màu", tag: "Khối năng khiếu mỹ thuật", isPrimary: false },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Một số trường xét tuyển", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Thiết kế nội thất mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "V00", subjects: "Toán · Vật lí · Vẽ mỹ thuật", tag: "Khối tuyển sinh chính", isPopular: true },
                { combo: "H00", subjects: "Ngữ văn · Hình họa · Bố cục màu", tag: "Khối năng khiếu", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Năng khiếu Hình họa & Vẽ mỹ thuật — Môn Vẽ thường nhân hệ số 2 và bắt buộc phải đạt điểm sàn năng khiếu >= 5.0.",
            coreSubjectAlert: {
                subject: "Vẽ mỹ thuật & Cảm nhận không gian 3D",
                reason: "Cần luyện thi vẽ chì tĩnh vật và bố cục không gian tại các lớp mỹ thuật chuyên nghiệp từ 6–12 tháng trước kỳ thi."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH Kiến trúc, ĐH Xây dựng top 1; cân nhắc Mỹ thuật Công nghiệp, Văn Lang vừa sức hơn.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Theo dõi kỹ lịch thi môn Năng khiếu Vẽ do chính trường tổ chức vào tháng 6 hoặc tháng 7."
            },
            curriculum: {
                duration: "5 NĂM (Kiến trúc sư) / 4 NĂM (Nội thất)",
                timeline: [
                    { year: "Năm 1", stage: "Mỹ thuật cơ bản & Hình khối", desc: "Hình họa vẽ chì, Bố cục tạo hình, Lịch sử kiến trúc thế giới, Cơ sở tạo hình kiến trúc." },
                    { year: "Năm 2", stage: "Đồ án kiến trúc nhà ở", desc: "Nguyên lý thiết kế nhà ở, Vật liệu xây dựng, Vẽ phối cảnh trên AutoCAD & SketchUp." },
                    { year: "Năm 3", stage: "Công trình công cộng & Nội thất", desc: "Thiết kế trường học, bảo tàng, Chiếu sáng nội thất, Dựng hình 3Ds Max & Render V-Ray." },
                    { year: "Năm 4-5", stage: "Đô thị & Đồ án tốt nghiệp", desc: "Quy hoạch đô thị, Cấu tạo kiến trúc chuyên sâu, Bảo vệ đồ án tốt nghiệp trước hội đồng." }
                ],
                plainExplanation: "Kiến tạo không gian sống: phối hợp tư duy thẩm mỹ và kết cấu kỹ thuật để thiết kế nhà ở, cao ốc và nội thất.",
                tools: ["AutoCAD", "SketchUp", "3Ds Max", "Revit BIM", "Photoshop", "Lumion / Enscape", "Corona Render"],
                skills: [
                    { icon: "✏️", name: "Tư duy không gian 3D & Phác thảo", desc: "Biến ý tưởng trong đầu thành các bản phác tay và mô hình hình khối nhanh chóng" },
                    { icon: "🏛️", name: "Bố cục mặt bằng công năng", desc: "Sắp xếp luồng di chuyển, thông gió tự nhiên và đón ánh sáng hợp lý cho ngôi nhà" },
                    { icon: "🖥️", name: "Làm chủ phần mềm đồ họa 3D", desc: "Render hình ảnh phối cảnh chân thực (Photorealistic) để khách hàng hình dung" },
                    { icon: "🪵", name: "Am hiểu vật liệu & Biện pháp thi công", desc: "Hiểu rõ tính chất gỗ, kính, bê tông, kim loại để bản vẽ có thể thi công thực tế" }
                ]
            },
            harshRealities: [
                { icon: "🌙", title: "Triền miên thức trắng đêm sửa đồ án", desc: "Triền miên thức trắng đêm tại xưởng trường để kịp tiến độ nộp và bảo vệ đồ án kiến trúc." },
                { icon: "🔄", title: "Khách hàng & Chủ đầu tư yêu cầu sửa đổi bản vẽ nhiều lần", desc: "Khách hàng yêu cầu sửa đổi phương án thiết kế nhiều lần vì sở thích cá nhân hoặc phong thủy." },
                { icon: "🤖", title: "Cạnh tranh gay gắt từ công cụ AI tạo sinh ảnh", desc: "Công cụ AI tạo ảnh (Midjourney) rất nhanh; kiến trúc sư phải am hiểu sâu cấu tạo và vật liệu." }
            ],
            salary: {
                entry: "8 – 13 Triệu / tháng",
                experienced: "28 – 55 Triệu / tháng",
                multiplier: "×3.5",
                note: "Tham khảo: Kiến trúc sư nhận thiết kế biệt thự, căn hộ hoặc làm công ty đa quốc gia có thu nhập rất cao.",
                entryBarPercent: 30,
                expBarPercent: 90
            },
            closingQuestion: "Năng khiếu Hình họa và tư duy Toán - Lý của bạn có tự tin đạt điểm sàn năng khiếu ngành Kiến trúc không?"
        },

        "Xây dựng & Quản lý dự án": {
            id: "xd_da",
            name: "Xây dựng & Quản lý dự án",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất (75% chỉ tiêu)", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Xét tuyển kỹ thuật", isPrimary: false },
                { code: "C01", subjects: "Toán · Vật lí · Ngữ văn", tag: "Một số trường xét tuyển", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Khối xét tuyển trọng tâm", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Toán & Vật lý cơ học — Nền tảng tính toán chịu lực: Sức bền vật liệu, Kết cấu bê tông cốt thép và Nền móng.",
            coreSubjectAlert: {
                subject: "Toán & Vật lý cơ học (Kết cấu công trình)",
                reason: "Mọi công trình cao tầng đều phải tính toán chính xác tải trọng gió, động đất để đảm bảo an toàn tuyệt đối."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH Xây dựng, Giao thông Vận tải điểm chuẩn từ 19–24 điểm, mức độ cạnh tranh vừa tầm.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Nhiều trường xét học bạ kết hợp phỏng vấn hoặc điểm thi ĐGNL với cơ hội trúng tuyển cao."
            },
            curriculum: {
                duration: "4.5 – 5 NĂM (Kỹ sư)",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Vẽ xây dựng", desc: "Toán cao cấp, Vật lý cơ học, Vẽ kỹ thuật xây dựng, Trắc địa thực địa." },
                    { year: "Năm 2", stage: "Cơ học công trình & Vật liệu", desc: "Sức bền vật liệu, Cơ học kết cấu, Vật liệu xây dựng, Địa chất công trình." },
                    { year: "Năm 3", stage: "Kết cấu Bê tông & Thép", desc: "Kết cấu bê tông cốt thép, Kết cấu thép, Nền móng công trình, Dự toán chi phí." },
                    { year: "Năm 4-5", stage: "Quản lý thi công & Tốt nghiệp", desc: "Tổ chức thi công, An toàn lao động, Quản lý dự án Primavera/MS Project, Bảo vệ đồ án." }
                ],
                plainExplanation: "Biến bản vẽ thành công trình thực: tính toán kết cấu thép bê tông, quản lý máy móc, nhân lực và tiến độ dự án.",
                tools: ["AutoCAD", "ETABS (Tính kết cấu)", "SAP2000", "Revit Structure", "MS Project", "Safe", "Phần mềm Dự toán G8"],
                skills: [
                    { icon: "🏗️", name: "Tính toán & Thẩm tra kết cấu", desc: "Mô hình hóa tải trọng và phân tích nội lực bằng phần mềm ETABS/SAP2000" },
                    { icon: "📋", name: "Bóc tách khối lượng & Lập dự toán", desc: "Tính toán chính xác số lượng thép, xi măng, nhân công và chi phí dự án" },
                    { icon: "👷", name: "Giám sát & Quản lý thi công hiện trường", desc: "Kiểm tra chất lượng cốt thép, đổ bê tông và đôn đốc công nhân đúng quy chuẩn" },
                    { icon: "📅", name: "Kiểm soát tiến độ & An toàn lao động (HSE)", desc: "Lập tiến độ thi công đường găng và đảm bảo không xảy ra tai nạn công trường" }
                ]
            },
            harshRealities: [
                { icon: "☀️", title: "Phơi nắng mưa theo chân công trình, xa gia đình", desc: "Phơi nắng mưa tại công trường xây dựng từ sớm đến tối, thường xuyên ăn ở tại lán trại xa nhà." },
                { icon: "💸", title: "Nợ đọng vốn, áp lực tiến độ bàn giao công trình", desc: "Áp lực chạy đua tiến độ bàn giao trước mùa mưa bão cùng rủi ro chủ đầu tư chậm giải ngân vốn." },
                { icon: "⚠️", title: "Rủi ro an toàn lao động tại công trường", desc: "Môi trường giàn giáo trên cao tiềm ẩn nguy cơ tai nạn nếu thiếu kỷ luật an toàn lao động." }
            ],
            salary: {
                entry: "8 – 13 Triệu / tháng",
                experienced: "25 – 45 Triệu / tháng",
                multiplier: "×3.0",
                note: "Tham khảo: Chỉ huy trưởng công trường tại các tổng thầu lớn (Coteccons, VinGroup) có thu nhập rất cao.",
                entryBarPercent: 30,
                expBarPercent: 86
            },
            closingQuestion: "Điểm Toán và Vật lý cơ học của bạn có đạt từ 7.0 trở lên để tính toán kết cấu công trình an toàn không?"
        },

        "Nông nghiệp công nghệ cao & Công nghệ thực phẩm": {
            id: "nn_tp",
            name: "Nông nghiệp công nghệ cao & Công nghệ thực phẩm",
            combos: [
                { code: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Phổ biến nhất (70% chỉ tiêu)", isPrimary: true },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Khối kỹ thuật thực phẩm", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false },
                { code: "B08", subjects: "Toán · Sinh học · Tiếng Anh", tag: "Một số trường xét tuyển", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Khối xét tuyển chính", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Hóa học & Sinh học — Hai môn nền tảng nghiên cứu vi sinh thực phẩm, công nghệ lên men và di truyền cây trồng.",
            coreSubjectAlert: {
                subject: "Hóa học & Sinh học vi sinh",
                reason: "Chế biến và bảo quản thực phẩm dựa hoàn toàn vào phản ứng sinh hóa và kiểm soát vi sinh vật gây hại."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Học viện Nông nghiệp, ĐH Bách Khoa, Nông Lâm TPHCM điểm chuẩn từ 18–24đ vừa sức.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Nhu cầu kỹ sư thực phẩm tại các tập đoàn lớn (Vinamilk, Masan, CP, Nestlé) luôn rất cao."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Hóa học đại cương", desc: "Hóa vô cơ, Hóa hữu cơ, Sinh học đại cương, Toán cao cấp." },
                    { year: "Năm 2", stage: "Hóa sinh & Vi sinh thực phẩm", desc: "Hóa sinh học thực phẩm, Vi sinh vật học, Quá trình & Thiết bị công nghệ thực phẩm." },
                    { year: "Năm 3", stage: "Công nghệ chế biến chuyên sâu", desc: "Công nghệ chế biến sữa, thịt, đồ hộp, đồ uống lên men, Hệ thống quản lý chất lượng HACCP/ISO 22000." },
                    { year: "Năm 4", stage: "R&D sản phẩm & Khóa luận", desc: "Phát triển sản phẩm mới (R&D), Đánh giá cảm quan thực phẩm, Thực tập tại nhà máy chế biến." }
                ],
                plainExplanation: "Sản xuất thực phẩm an toàn: từ canh tác nhà kính IoT đến đóng gói, chế biến đồ hộp và kiểm định xuất khẩu.",
                tools: ["Máy sắc ký lỏng HPLC", "Máy đo pH/độ nhớt", "Phần mềm quản lý chất lượng QA/QC", "Hệ thống tưới tự động IoT", "Thiết bị thanh trùng UHT"],
                skills: [
                    { icon: "🧪", name: "Kiểm nghiệm & Đảm bảo chất lượng (QA/QC)", desc: "Phân tích dư lượng thuốc bảo vệ thực vật, vi khuẩn E.coli và độc tố trong sản phẩm" },
                    { icon: "🍃", name: "Vận hành canh tác nhà kính IoT", desc: "Cài đặt thông số nhiệt độ, độ ẩm và dinh dưỡng thủy canh tự động bằng cảm biến" },
                    { icon: "🔬", name: "Nghiên cứu & Phát triển sản phẩm mới (R&D)", desc: "Sáng tạo công thức đồ uống, snack mới phù hợp với thị hiếu người tiêu dùng" },
                    { icon: "📜", name: "Am hiểu tiêu chuẩn an toàn quốc tế", desc: "Xây dựng quy trình đạt chuẩn VietGAP, GlobalGAP, HACCP để xuất khẩu sang EU, Mỹ" }
                ]
            },
            harshRealities: [
                { icon: "🧪", title: "Thời gian dài làm việc tại phòng thí nghiệm hoặc nhà kính", desc: "Làm việc nhiều giờ trong phòng thí nghiệm mùi hóa chất hoặc trong nhà kính nông nghiệp nhiệt độ cao." },
                { icon: "🌦️", title: "Phụ thuộc vào yếu tố thời tiết, dịch bệnh và mùa vụ", desc: "Các dự án trồng trọt có rủi ro bị bão lũ, thời tiết thất thường hoặc dịch hại gây thiệt hại mùa vụ." },
                { icon: "💬", title: "Định kiến xã hội về ngành nông nghiệp còn nặng", desc: "Nhiều người vẫn lầm tưởng học nông nghiệp là làm ruộng, dù thực tế làm việc với công nghệ cao." }
            ],
            salary: {
                entry: "7 – 11 Triệu / tháng",
                experienced: "22 – 38 Triệu / tháng",
                multiplier: "×2.8",
                note: "Tham khảo: Chuyên viên R&D hoặc Quản lý chất lượng tại tập đoàn đa quốc gia đạt 30–45 triệu/tháng.",
                entryBarPercent: 28,
                expBarPercent: 78
            },
            closingQuestion: "Học lực môn Hóa học và Sinh học của bạn có đạt từ 7.0 trở lên để làm chủ công nghệ thực phẩm không?"
        },

        "Môi trường & Khoa học bền vững": {
            id: "mt_bn",
            name: "Môi trường & Khoa học bền vững",
            combos: [
                { code: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Phổ biến nhất", isPrimary: true },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Kỹ thuật môi trường", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Quản lý môi trường", isPrimary: false },
                { code: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Một số trường xét tuyển", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Khối xét tuyển chính", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Sinh học & Địa lý — Nền tảng đánh giá tác động sinh thái, biến đổi khí hậu và công nghệ xử lý chất thải.",
            coreSubjectAlert: {
                subject: "Sinh học sinh thái & Hóa học môi trường",
                reason: "Hiểu rõ vòng tuần hoàn vật chất và quy chuẩn xả thải để thiết kế hệ thống xử lý nước và kiểm kê carbon."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH Khoa học Tự nhiên, ĐH Bách Khoa, Tài nguyên Môi trường điểm chuẩn từ 17–23đ.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Doanh nghiệp xuất khẩu bắt buộc tuân thủ tiêu chuẩn xanh (ESG), mở ra nhiều việc làm."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Sinh thái học", desc: "Hóa học đại cương, Sinh thái học căn bản, Khí tượng thủy văn, Bản đồ GIS." },
                    { year: "Năm 2", stage: "Hóa học môi trường & Phân tích", desc: "Hóa phân tích môi trường, Độc chất học, Vi sinh vật môi trường, Lấy mẫu hiện trường." },
                    { year: "Năm 3", stage: "Công nghệ xử lý chất thải", desc: "Kỹ thuật xử lý nước thải, Xử lý khí thải, Quản lý chất thải rắn, Báo cáo ĐTM (Đánh giá tác động)." },
                    { year: "Năm 4", stage: "Kinh tế tuần hoàn & Khóa luận", desc: "Tín chỉ carbon, Kiểm kê khí nhà kính, Tiêu chuẩn ESG, Thực tập tại các sở ban ngành hoặc doanh nghiệp." }
                ],
                plainExplanation: "Bác sĩ môi trường: thiết kế trạm xử lý nước thải, kiểm kê khí nhà kính và tư vấn giải pháp sản xuất xanh.",
                tools: ["ArcGIS / QGIS", "Máy đo khí đa chỉ tiêu", "Máy quang phổ hấp thụ nguyên tử AAS", "AutoCAD môi trường", "Phần mềm tính toán phát thải GHG"],
                skills: [
                    { icon: "💧", name: "Thiết kế trạm xử lý nước thải", desc: "Tính toán bể vi sinh hiếu khí - kỵ khí và quy trình lắng bùn hoạt tính" },
                    { icon: "🗺️", name: "Ứng dụng GIS lập bản đồ ô nhiễm", desc: "Mô phỏng sự lan truyền chất ô nhiễm trong không khí và nguồn nước ngầm" },
                    { icon: "📋", name: "Đánh giá tác động môi trường (ĐTM)", desc: "Khảo sát hiện trạng và viết báo cáo thẩm định môi trường cho các dự án xây dựng" },
                    { icon: "🌱", name: "Kiểm kê khí nhà kính & Báo cáo ESG", desc: "Đo lường dấu chân carbon (Carbon Footprint) để doanh nghiệp đạt chứng chỉ xuất khẩu xanh" }
                ]
            },
            harshRealities: [
                { icon: "📉", title: "Thị trường việc làm trong nước chưa rộng mở bằng khối kinh tế", desc: "Một số doanh nghiệp vừa và nhỏ chưa ưu tiên đầu tư ngân sách lớn cho xử lý môi trường." },
                { icon: "☣️", title: "Thường xuyên lấy mẫu hiện trường ở các khu vực ô nhiễm", desc: "Kỹ sư phải trực tiếp đi lấy mẫu tại các cống xả thải, bãi rác và kênh rạch ô nhiễm." },
                { icon: "✂️", title: "Rào cản ngân sách khi doanh nghiệp khó khăn", desc: "Khi kinh tế gặp khó khăn, chi phí dành cho các hoạt động môi trường dễ bị cắt giảm đầu tiên." }
            ],
            salary: {
                entry: "7 – 11 Triệu / tháng",
                experienced: "20 – 35 Triệu / tháng",
                multiplier: "×2.8",
                note: "Tham khảo: Chuyên gia tư vấn tín chỉ Carbon và quản lý ESG cho tập đoàn lớn nhận lương 35–55 triệu/tháng.",
                entryBarPercent: 28,
                expBarPercent: 76
            },
            closingQuestion: "Điểm Sinh học hoặc Hóa học của bạn có đạt từ 7.0 trở lên để nghiên cứu sinh thái và xử lý môi trường không?"
        },

        "Luật / Ngoại giao & Khoa học xã hội": {
            id: "luat_ng",
            name: "Luật / Ngoại giao & Khoa học xã hội",
            combos: [
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất (70% chỉ tiêu)", isPrimary: true },
                { code: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Khối xét tuyển truyền thống", isPrimary: false },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Luật thương mại quốc tế", isPrimary: false },
                { code: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Khối truyền thống", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Ngữ văn & Tư duy phản biện — Đòi hỏi khả năng đọc hiểu văn bản luật đồ sộ, diễn đạt logic không có kẽ hở.",
            coreSubjectAlert: {
                subject: "Ngữ văn & Tư duy ngôn ngữ logic",
                reason: "Một từ ngữ mơ hồ trong hợp đồng có thể gây tranh chấp kéo dài và thiệt hại tài chính rất lớn cho thân chủ."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH Luật Hà Nội, HV Ngoại giao điểm cao (26–28.5đ); Khoa Luật ĐHQG, ĐH Mở an toàn hơn.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Chú ý xét tuyển IELTS từ 6.5+ kết hợp học bạ trường chuyên."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Lý luận Nhà nước", desc: "Lý luận chung về Nhà nước & Pháp luật, Lịch sử nhà nước pháp luật, Triết học Mác - Lênin." },
                    { year: "Năm 2", stage: "Các ngành luật cơ bản", desc: "Luật Dân sự, Luật Hình sự, Luật Hành chính, Luật Đất đai, Tiếng Anh pháp lý." },
                    { year: "Năm 3", stage: "Luật kinh tế & Tố tụng", desc: "Luật Doanh nghiệp, Luật Thương mại quốc tế, Luật Tố tụng dân sự/hình sự, Kỹ năng soạn thảo hợp đồng." },
                    { year: "Năm 4", stage: "Thực hành phiên tòa & Thực tập", desc: "Tham gia diễn án phiên tòa giả định (Moot Court), Thực tập tại văn phòng luật sư hoặc tòa án." }
                ],
                plainExplanation: "Lá chắn pháp lý: am hiểu pháp luật, tư vấn phòng ngừa rủi ro hợp đồng và bảo vệ quyền lợi thân chủ trước tòa.",
                tools: ["Cơ sở dữ liệu Văn bản Pháp luật (Thư viện Pháp luật)", "Hệ thống Quản lý án điện tử", "Phần mềm so sánh hợp đồng", "LexisNexis"],
                skills: [
                    { icon: "⚖️", name: "Tư duy phản biện & Lập luận sắc bén", desc: "Phát hiện kẽ hở logic trong lời khai đối phương và viện dẫn điều luật chuẩn xác" },
                    { icon: "📝", name: "Kỹ năng soạn thảo hợp đồng & văn bản", desc: "Viết các điều khoản pháp lý chặt chẽ, lường trước mọi tình huống tranh chấp" },
                    { icon: "🗣️", name: "Tranh tụng & Hùng biện trước công chúng", desc: "Trình bày luận điểm tự tin, đĩnh đạc và thuyết phục hội đồng xét xử" },
                    { icon: "🔍", name: "Tra cứu & Giải thích áp dụng pháp luật", desc: "Cập nhật nhanh chóng hàng trăm nghị định, thông tư mới ban hành để tư vấn đúng" }
                ]
            },
            harshRealities: [
                { icon: "📖", title: "Học thuộc và cập nhật hàng trăm bộ luật biến đổi liên tục", desc: "Hệ thống văn bản luật pháp sửa đổi liên tục; ngừng đọc vài tháng là có thể áp dụng luật hết hiệu lực." },
                { icon: "⏳", title: "Cần thêm ít nhất 2 năm đào tạo tư pháp để có chứng chỉ hành nghề", desc: "Muốn làm luật sư cần thêm 1 năm học nghiệp vụ tư pháp + 1 năm tập sự + thi đỗ kỳ thi quốc gia." },
                { icon: "🧠", title: "Áp lực tâm lý nặng nề khi đối diện tranh chấp", desc: "Áp lực tâm lý nặng nề khi đối diện các vụ tranh chấp tài sản gay gắt hoặc án hình sự phức tạp." }
            ],
            salary: {
                entry: "7 – 12 Triệu / tháng",
                experienced: "25 – 50 Triệu / tháng",
                multiplier: "×3.5",
                note: "Tham khảo: Luật sư chuyên ngành M&A hoặc Trọng tài quốc tế tính phí tư vấn hàng trăm USD/giờ làm việc.",
                entryBarPercent: 30,
                expBarPercent: 88
            },
            closingQuestion: "Học lực môn Ngữ văn hoặc Tiếng Anh của bạn có đạt từ 7.5 trở lên để đọc hiểu và phân tích điều luật không?"
        },

        "Công an & Quân đội": {
            id: "ca_qd",
            name: "Công an & Quân đội",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Khối Kỹ thuật nghiệp vụ", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Xét tuyển rộng rãi", isPrimary: false },
                { code: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Nghiệp vụ An ninh - Cảnh sát", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số ngành đào tạo", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Khối Kỹ thuật nghiệp vụ", isPopular: true },
                { combo: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Nghiệp vụ Cảnh sát", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Một số ngành", isPopular: false }
            ],
            coreSubjectWarning: "Thể lực chuẩn & Kỷ luật tự giác — Yêu cầu chiều cao, thị lực, sức bền và vượt qua vòng thẩm tra lý lịch.",
            coreSubjectAlert: {
                subject: "Sức khỏe loại 1 & Kỷ luật thép",
                reason: "Kiểm tra thể lực khắt khe (chạy, co tay xà đơn) và thẩm tra lý lịch gia đình 3 đời đạt chuẩn chính trị."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: HV An ninh, HV Cảnh sát chỉ tiêu ít và điểm chuẩn top đầu cả nước (25–28đ).",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Bắt buộc đăng ký sơ tuyển tại Công an hoặc Ban Chỉ huy Quân sự huyện từ tháng 3–4."
            },
            curriculum: {
                duration: "4 – 5 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Huấn luyện tân binh & Điều lệnh", desc: "Điều lệnh đội ngũ, Bắn súng quân dụng, Bơi vũ trang, Võ thuật CAND/Quân đội." },
                    { year: "Năm 2", stage: "Kiến thức pháp luật & Nghiệp vụ cơ bản", desc: "Pháp luật đại cương, Lý luận nghiệp vụ, Bảo vệ an ninh quốc gia, Chiến thuật chiến đấu." },
                    { year: "Năm 3", stage: "Nghiệp vụ chuyên ngành", desc: "Trinh sát điều tra tội phạm, Kỹ thuật hình sự, Quản lý hành chính về trật tự xã hội." },
                    { year: "Năm 4-5", stage: "Thực tập đơn vị chiến đấu", desc: "Thực tập tại Công an các tỉnh/thành phố hoặc các quân đoàn, Hoàn thành đồ án tốt nghiệp." }
                ],
                plainExplanation: "Bảo vệ bình yên Tổ quốc: giữ vững trật tự an ninh xã hội, điều tra phá án tội phạm và sẵn sàng chiến đấu.",
                tools: ["Vũ khí quân dụng tiêu chuẩn", "Thiết bị giám sát an ninh", "Hệ thống trích xuất dữ liệu camera", "Phương tiện thông tin tác chiến liên lạc"],
                skills: [
                    { icon: "🥋", name: "Võ thuật tác chiến & Bắn súng chuẩn xác", desc: "Thành thạo các đòn thế khống chế đối tượng nguy hiểm và sử dụng vũ khí an toàn" },
                    { icon: "🧠", name: "Tư duy trinh sát & Phân tích tâm lý tội phạm", desc: "Thu thập manh mối, xâu chuỗi sự kiện và phán đoán hướng tẩu thoát của tội phạm" },
                    { icon: "🛡️", name: "Tuyệt đối phục tùng mệnh lệnh chỉ huy", desc: "Kỷ luật sắt đá, sẵn sàng lên đường nhận nhiệm vụ bất kể ngày đêm hay địa bàn nguy hiểm" },
                    { icon: "🤝", name: "Công tác dân vận & Gắn bó nhân dân", desc: "Thấu hiểu đời sống nhân dân, xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc" }
                ]
            },
            harshRealities: [
                { icon: "🎖️", title: "Kỷ luật quân ngũ nghiêm ngặt 24/7, hạn chế xuất cảnh", desc: "Sống trong môi trường doanh trại quân ngũ 24/7; phát ngôn và đi lại theo điều lệnh, hạn chế xuất cảnh." },
                { icon: "🎒", title: "Thường xuyên điều động công tác xa nhà theo lệnh phân công", desc: "Sau tốt nghiệp được phân công công tác theo nhu cầu của ngành, không được tự ý chọn nơi làm việc." },
                { icon: "⚠️", title: "Hiểm nguy, rủi ro trực tiếp khi thực hiện nhiệm vụ", desc: "Đối mặt trực tiếp với tội phạm nguy hiểm và tham gia cứu hộ bão lũ bất chấp hiểm nguy sinh mạng." }
            ],
            salary: {
                entry: "8 – 12 Triệu / tháng",
                experienced: "20 – 35 Triệu / tháng",
                multiplier: "×2.5",
                note: "Tham khảo: Lương chi trả theo cấp bậc hàm, thâm niên và phụ cấp trách nhiệm đặc thù lực lượng vũ trang.",
                entryBarPercent: 30,
                expBarPercent: 80
            },
            closingQuestion: "Thể lực và điểm các môn tổ hợp xét tuyển của bạn có tự tin vượt qua vòng sơ tuyển lực lượng vũ trang không?"
        },

        "Sư phạm & Quản lý giáo dục": {
            id: "sp_gd",
            name: "Sư phạm & Quản lý giáo dục",
            combos: [
                { code: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Sư phạm Xã hội", isPrimary: true },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Sư phạm Tự nhiên", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Sư phạm Ngoại ngữ / Tiểu học", isPrimary: false },
                { code: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Sư phạm Hóa - Sinh", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Sư phạm Tự nhiên", isPopular: true },
                { combo: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Sư phạm Xã hội", isPopular: false }
            ],
            coreSubjectWarning: "Môn chuyên ngành & Ngữ văn — Kiến thức môn học phải thật vững kết hợp khả năng truyền đạt lôi cuốn, dễ hiểu.",
            coreSubjectAlert: {
                subject: "Môn chuyên ngành & Kỹ năng sư phạm",
                reason: "Không chỉ giỏi chuyên môn mà cần am hiểu tâm lý học đường để dẫn dắt và tạo cảm hứng học tập cho học sinh."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH Sư phạm Hà Nội/TPHCM lấy 25–28đ; Sư phạm Huế, Thái Nguyên điểm chuẩn vừa sức hơn.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Sinh viên sư phạm được miễn học phí và hỗ trợ sinh hoạt phí 3.63 triệu/tháng (NĐ 116)."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Tâm lý học lứa tuổi", desc: "Tâm lý học sư phạm, Giáo dục học đại cương, Nhập môn chuyên ngành đào tạo." },
                    { year: "Năm 2", stage: "Kiến thức chuyên ngành sâu", desc: "Các học phần chuyên môn sâu môn học, Ứng dụng công nghệ thông tin trong dạy học." },
                    { year: "Năm 3", stage: "Phương pháp giảng dạy & Thực hành", desc: "Lý luận dạy học bộ môn, Thiết kế giáo án (Kế hoạch bài dạy), Tập giảng dạy thử nghiệm." },
                    { year: "Năm 4", stage: "Thực tập sư phạm tại trường phổ thông", desc: "Thực tập chủ nhiệm và giảng dạy thực tế tại trường THPT/THCS, Khóa luận tốt nghiệp." }
                ],
                plainExplanation: "Kỹ sư tâm hồn: trang bị kiến thức bộ môn, phương pháp giáo dục hiện đại và đồng hành phát triển nhân cách học trò.",
                tools: ["Canva for Education", "Kahoot! / Quizizz", "Google Classroom", "MS PowerPoint nâng cao", "Phần mềm mô phỏng thí nghiệm ảo"],
                skills: [
                    { icon: "🗣️", name: "Năng lực thuyết trình & Truyền cảm hứng", desc: "Truyền đạt kiến thức sinh động, hấp dẫn, thu hút sự tập trung của học trò" },
                    { icon: "📝", name: "Thiết kế giáo án đổi mới sáng tạo", desc: "Biến các bài học khô khan thành các hoạt động dự án, trò chơi tương tác thú vị" },
                    { icon: "❤️", name: "Thấu hiểu tâm lý lứa tuổi học sinh", desc: "Lắng nghe tâm tư, nhận diện sớm các vấn đề tâm lý học đường để kịp thời hỗ trợ" },
                    { icon: "💻", name: "Ứng dụng công nghệ số dạy học (EdTech)", desc: "Tích hợp công cụ trực tuyến, video bài giảng để mở rộng không gian học tập" }
                ]
            },
            harshRealities: [
                { icon: "📑", title: "Áp lực lớn từ phụ huynh, nhà trường và thi cử", desc: "Gánh vác kỳ vọng điểm số từ phụ huynh, thành tích thi đua nhà trường và đổi mới chương trình học." },
                { icon: "📉", title: "Mức lương ngạch viên chức khởi điểm khiêm tốn", desc: "Lương ngạch viên chức mới ra trường theo hệ số nhà nước chỉ khoảng 6–8 triệu/tháng." },
                { icon: "👁️", title: "Trách nhiệm mô phạm, hành vi bị soi xét khắt khe", desc: "Người thầy luôn phải chuẩn mực trong lời nói, tác phong và ứng xử cả trên mạng xã hội." }
            ],
            salary: {
                entry: "6 – 9 Triệu / tháng",
                experienced: "18 – 35 Triệu / tháng",
                multiplier: "×2.5",
                note: "Tham khảo: Giáo viên dạy trường quốc tế, tư thục chất lượng cao có thể đạt mức lương 25–40 triệu/tháng.",
                entryBarPercent: 25,
                expBarPercent: 75
            },
            closingQuestion: "Học lực môn chuyên ngành bạn muốn dạy (Toán, Văn, Anh...) hiện có đạt mức Giỏi (trên 8.0) không?"
        },

        "Tâm lý học & Dịch vụ tham vấn / Xã hội": {
            id: "tl_xh",
            name: "Tâm lý học & Dịch vụ tham vấn / Xã hội",
            combos: [
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất (70% chỉ tiêu)", isPrimary: true },
                { code: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Tâm lý lâm sàng", isPrimary: false },
                { code: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Một số trường xét tuyển", isPrimary: false },
                { code: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Tâm lý học đường", isPopular: false },
                { combo: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Ngữ văn & Sinh học thần kinh — Cần khả năng thấu cảm cảm xúc kết hợp hiểu biết cơ chế dẫn truyền thần kinh não.",
            coreSubjectAlert: {
                subject: "Ngữ văn (Thấu cảm) & Sinh học thần kinh",
                reason: "Lắng nghe không phán xét và phân tích các triệu chứng rối loạn lo âu, trầm cảm dựa trên cơ sở khoa học."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH KHXH&NV Hà Nội/TPHCM, ĐH Sư phạm điểm chuẩn dao động từ 24–27 điểm.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Nhu cầu chuyên viên tư vấn tâm lý học đường theo quy định Bộ GD&ĐT đang tăng cao."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Lịch sử tâm lý", desc: "Tâm lý học đại cương, Giải phẫu sinh lý thần kinh, Lịch sử các trường phái tâm lý." },
                    { year: "Năm 2", stage: "Tâm lý phát triển & Xã hội", desc: "Tâm lý học phát triển lứa tuổi, Tâm lý học xã hội, Tâm lý học nhân cách, Thống kê SPSS." },
                    { year: "Năm 3", stage: "Chẩn đoán & Trắc nghiệm tâm lý", desc: "Tâm bệnh học, Kỹ thuật trắc nghiệm tâm lý (WISC, WAIS, MMPI), Kỹ năng tham vấn cơ bản." },
                    { year: "Năm 4", stage: "Thực hành trị liệu & Khóa luận", desc: "Tham vấn tâm lý học đường/lâm sàng, Thực tập tại bệnh viện tâm thần hoặc trung tâm trị liệu." }
                ],
                plainExplanation: "Chữa lành tâm hồn: lắng nghe không phán xét, đánh giá sang chấn tâm lý và hỗ trợ thân chủ tìm lại cân bằng.",
                tools: ["Bộ trắc nghiệm WISC/WAIS", "Thang đo trầm cảm Beck/DASS-21", "Bộ bài trị liệu cảm xúc", "SPSS", "Mô hình phòng trị liệu cát"],
                skills: [
                    { icon: "👂", name: "Lắng nghe tích cực & Không phán xét", desc: "Tạo không gian an toàn tuyệt đối để thân chủ thoải mái bộc bạch mọi nỗi đau thầm kín" },
                    { icon: "🧠", name: "Đánh giá & Chẩn đoán tâm lý", desc: "Sử dụng các công cụ thang đo chuẩn quốc tế để nhận diện mức độ lo âu, trầm cảm" },
                    { icon: "💡", name: "Kỹ năng tham vấn & Liệu pháp CBT", desc: "Dẫn dắt thân chủ nhận diện nhận thức sai lệch và thay đổi hành vi tích cực hơn" },
                    { icon: "🛡️", name: "Kỷ luật bảo mật thông tin thân chủ", desc: "Tuân thủ nghiêm ngặt nguyên tắc đạo đức nghề nghiệp về giữ kín danh tính thân chủ" }
                ]
            },
            harshRealities: [
                { icon: "🌪️", title: "Ô nhiễm cảm xúc thứ cấp (Secondary Trauma)", desc: "Lắng nghe nhiều câu chuyện bi thương, trầm cảm của người khác dễ gây quá tải cảm xúc tiêu cực." },
                { icon: "📜", title: "Khung pháp lý cấp chứng chỉ hành nghề tại VN chưa hoàn thiện", desc: "Khung pháp lý cấp chứng chỉ hành nghề tâm lý trị liệu tại Việt Nam vẫn đang trong quá trình hoàn thiện." },
                { icon: "📉", title: "Khó xây dựng tệp khách hàng trả phí cao lúc mới ra trường", desc: "Cần thời gian dài tích lũy giờ thực hành có giám sát trước khi có tệp khách hàng trả phí ổn định." }
            ],
            salary: {
                entry: "7 – 11 Triệu / tháng",
                experienced: "22 – 40 Triệu / tháng",
                multiplier: "×2.8",
                note: "Tham khảo: Chuyên gia tư vấn tâm lý độc lập uy tín tính phí từ 500,000 – 1,500,000 đ/giờ tham vấn.",
                entryBarPercent: 28,
                expBarPercent: 78
            },
            closingQuestion: "Học lực môn Ngữ văn và khả năng thấu cảm ngôn từ của bạn có tự tin để theo đuổi ngành Tâm lý học không?"
        },

        "Truyền thông / Báo chí & Quan hệ công chúng (PR)": {
            id: "tt_pr",
            name: "Truyền thông / Báo chí & Quan hệ công chúng (PR)",
            combos: [
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất (75% chỉ tiêu)", isPrimary: true },
                { code: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Khối xét tuyển truyền thống", isPrimary: false },
                { code: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Nhiều trường KHXH&NV", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Khối truyền thống", isPopular: true },
                { combo: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Ngữ văn & Tiếng Anh — Sáng tạo ngôn từ sắc sảo, tư duy kể chuyện (Storytelling) và nhạy bén tin tức thời sự.",
            coreSubjectAlert: {
                subject: "Ngữ văn (Viết lách) & Tiếng Anh",
                reason: "Soạn thảo thông cáo báo chí và xử lý khủng hoảng truyền thông đòi hỏi khả năng làm chủ ngôn ngữ tinh tế."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Học viện Báo chí, ĐH KHXH&NV lấy 26–28.5đ; ĐH Thăng Long, FPT là phương án dự phòng.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Một số chuyên ngành Báo chí có tổ hợp thi năng khiếu Báo chí hoặc phỏng vấn portfolio sáng tạo."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Lý luận truyền thông", desc: "Lý thuyết truyền thông đại chúng, Xã hội học truyền thông, Nhập môn Báo chí & PR." },
                    { year: "Năm 2", stage: "Kỹ năng sáng tạo nội dung", desc: "Viết tin/bài báo, Kỹ thuật chụp ảnh báo chí, Biên tập video ngắn, Tổ chức họp báo." },
                    { year: "Năm 3", stage: "Chiến dịch PR & Quản trị khủng hoảng", desc: "Lập kế hoạch chiến dịch PR, Quan hệ với báo giới, Quản trị khủng hoảng truyền thông mạng xã hội." },
                    { year: "Năm 4", stage: "Thực tập Agency & Khóa luận", desc: "Thực tập tại cơ quan báo chí hoặc PR Agency, Hoàn thành đồ án chiến dịch truyền thông." }
                ],
                plainExplanation: "Định hình dòng chảy thông tin: kể câu chuyện truyền cảm hứng, xây dựng thương hiệu và quản trị khủng hoảng.",
                tools: ["CapCut / Premiere Pro", "Canva", "Social Listening Tools (Buzzmetrics, Younet)", "Mailchimp", "WordPress CMS"],
                skills: [
                    { icon: "✍️", name: "Sáng tạo nội dung & Copywriting", desc: "Viết thông điệp sắc sảo, bắt trúng tâm lý độc giả và tạo hiệu ứng lan truyền (viral)" },
                    { icon: "🎙️", name: "Quan hệ báo giới & Phát ngôn", desc: "Xây dựng mạng lưới quan hệ bền chặt với các nhà báo và cơ quan truyền thông" },
                    { icon: "🚨", name: "Quản trị khủng hoảng truyền thông", desc: "Bình tĩnh phản ứng nhanh, soạn thảo thông cáo chính xác để bảo vệ danh tiếng" },
                    { icon: "📊", name: "Đo lường dư luận (Social Listening)", desc: "Theo dõi chỉ số cảm xúc người dùng (Sentiment) và phân tích luồng thảo luận mạng xã hội" }
                ]
            },
            harshRealities: [
                { icon: "⚡", title: "Áp lực 'cháy bài', chạy sự kiện bất kể ngày đêm hay lễ tết", desc: "Sự kiện và tin tức diễn ra 24/7; người làm PR thường phải trực và chạy bài bất kể đêm muộn hay ngày lễ." },
                { icon: "🚨", title: "Khủng hoảng truyền thông ập đến bất ngờ, căng thẳng tinh thần", desc: "Một bài đăng sai sót có thể thổi bùng làn sóng tẩy chay dữ dội từ cộng đồng mạng chỉ sau vài giờ." },
                { icon: "🔄", title: "Xu hướng mạng xã hội đổi theo tuần, đòi hỏi liên tục đổi mới", desc: "Xu hướng mạng xã hội thay đổi liên tục; nếu ngừng sáng tạo sẽ rất nhanh chóng bị khán giả lãng quên." }
            ],
            salary: {
                entry: "8 – 13 Triệu / tháng",
                experienced: "25 – 48 Triệu / tháng",
                multiplier: "×3.2",
                note: "Tham khảo: Giám đốc truyền thông (PR Director) tại các tập đoàn lớn có mức đãi ngộ trên 50 triệu/tháng.",
                entryBarPercent: 30,
                expBarPercent: 88
            },
            closingQuestion: "Điểm môn Ngữ văn hoặc Tiếng Anh của bạn có đạt từ 7.5 trở lên để tự tin sáng tạo nội dung truyền thông không?"
        },

        "Thiết kế đồ họa / Mỹ thuật số & Đa phương tiện": {
            id: "tk_dh",
            name: "Thiết kế đồ họa / Mỹ thuật số & Đa phương tiện",
            combos: [
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Thiết kế đồ họa số", isPrimary: true },
                { code: "V00", subjects: "Toán · Vật lí · Vẽ mỹ thuật", tag: "Xét tuyển năng khiếu", isPrimary: false },
                { code: "H00", subjects: "Ngữ văn · Hình họa · Bố cục màu", tag: "Khối mỹ thuật", isPrimary: false },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Multimedia / UI-UX", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "H00", subjects: "Ngữ văn · Hình họa · Bố cục màu", tag: "Khối năng khiếu", isPopular: true },
                { combo: "V00", subjects: "Toán · Vật lí · Vẽ mỹ thuật", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Tư duy thị giác & Thẩm mỹ — Cảm thụ cái đẹp, nguyên lý cân bằng bố cục, phối màu và nghệ thuật chữ Typography.",
            coreSubjectAlert: {
                subject: "Tư duy thẩm mỹ & Bộ công cụ thiết kế số",
                reason: "Biến yêu cầu trừu tượng của khách hàng thành sản phẩm hình ảnh có giá trị thẩm mỹ và tính ứng dụng cao."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Mỹ thuật Công nghiệp, Kiến trúc, RMIT, FPT, Hoa Sen đều là cái nôi đào tạo uy tín.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Nhiều trường xét tuyển kết hợp điểm thi D01/A01 với Portfolio tự vẽ."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Mỹ thuật cơ bản & Nguyên lý thị giác", desc: "Hình họa chì, Bánh xe màu sắc, Bố cục thị giác, Nghệ thuật chữ (Typography)." },
                    { year: "Năm 2", stage: "Bộ công cụ Adobe & Thiết kế 2D", desc: "Thành thạo Photoshop, Illustrator, Thiết kế nhận diện thương hiệu (Logo, Bao bì)." },
                    { year: "Năm 3", stage: "Giao diện số UI/UX & Đa phương tiện", desc: "Thiết kế ứng dụng di động trên Figma, Kỹ xảo chuyển động After Effects, Dựng video." },
                    { year: "Năm 4", stage: "Xây dựng Portfolio & Tốt nghiệp", desc: "Xây dựng đồ án thương hiệu hoàn chỉnh, Thực tập tại Design Agency, Bảo vệ Portfolio." }
                ],
                plainExplanation: "Truyền tải thông điệp bằng hình ảnh: thiết kế logo nhận diện, bao bì, giao diện ứng dụng app và đồ họa 3D.",
                tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "After Effects", "Premiere Pro", "Blender 3D", "Wacom"],
                skills: [
                    { icon: "🎨", name: "Cảm thụ màu sắc & Typography", desc: "Phối hợp màu sắc hài hòa và phân cấp thị giác kiểu chữ dẫn dắt ánh nhìn" },
                    { icon: "📱", name: "Thiết kế giao diện UI/UX", desc: "Xây dựng trải nghiệm ứng dụng thông minh, thân thiện và đẹp mắt trên Figma" },
                    { icon: "🎬", name: "Đồ họa động (Motion Graphics)", desc: "Tạo chuyển động sinh động cho các yếu tố đồ họa trong video quảng cáo" },
                    { icon: "💡", name: "Xây dựng câu chuyện thương hiệu", desc: "Biến giá trị cốt lõi của doanh nghiệp thành bộ nhận diện hình ảnh độc bản" }
                ]
            },
            harshRealities: [
                { icon: "🔄", title: "Vòng lặp sửa file 'lần cuối n' đến kiệt sức", desc: "Rèn luyện sự kiên nhẫn khi ý tưởng tâm huyết bị khách hàng yêu cầu chỉnh sửa nhiều lần vì cảm tính." },
                { icon: "🔥", title: "Khủng hoảng cạn kiệt ý tưởng (Creative Burnout)", desc: "Sáng tạo liên tục theo hạn chót (deadline) khiến đầu óc dễ bị căng thẳng và cạn kiệt ý tưởng." },
                { icon: "🤖", title: "Áp lực cạnh tranh từ các công cụ AI tạo ảnh", desc: "Công cụ AI vẽ ảnh rất nhanh; nhà thiết kế phải nâng tầm tư duy chiến lược thương hiệu khác biệt." }
            ],
            salary: {
                entry: "8 – 14 Triệu / tháng",
                experienced: "25 – 45 Triệu / tháng",
                multiplier: "×3.0",
                note: "Tham khảo: Designer làm Freelance quốc tế hoặc Senior UI/UX Designer có thu nhập từ 35–55 triệu/tháng.",
                entryBarPercent: 32,
                expBarPercent: 86
            },
            closingQuestion: "Năng khiếu thẩm mỹ thị giác và điểm môn Văn/Anh của bạn có đạt từ 7.0 trở lên để theo ngành Thiết kế không?"
        },

        "Âm nhạc, Biểu diễn & Nghệ thuật sân khấu": {
            id: "am_nhac",
            name: "Âm nhạc, Biểu diễn & Nghệ thuật sân khấu",
            combos: [
                { code: "N00", subjects: "Ngữ văn · Năng khiếu Âm nhạc 1 · Năng khiếu Âm nhạc 2", tag: "Xét tuyển Nhạc viện", isPrimary: true },
                { code: "S00", subjects: "Ngữ văn · Năng khiếu Sân khấu 1 · Năng khiếu Sân khấu 2", tag: "Sân khấu Điện ảnh", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Quản lý văn hóa nghệ thuật", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "N00", subjects: "Ngữ văn · Năng khiếu Âm nhạc 1 · Năng khiếu Âm nhạc 2", tag: "Khối Nhạc viện", isPopular: true },
                { combo: "S00", subjects: "Ngữ văn · Năng khiếu Sân khấu 1 · Năng khiếu Sân khấu 2", tag: "Khối Sân khấu Điện ảnh", isPopular: true }
            ],
            coreSubjectWarning: "Năng khiếu chuyên biệt & Cảm thụ — Đòi hỏi năng khiếu bẩm sinh kết hợp khổ luyện thanh nhạc hoặc diễn xuất.",
            coreSubjectAlert: {
                subject: "Năng khiếu thẩm âm & Biểu cảm sân khấu",
                reason: "Môn thi năng khiếu có barem chấm điểm rất khắt khe, đòi hỏi kỹ thuật vững vàng và bản lĩnh sân khấu tốt."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Học viện Âm nhạc Quốc gia, ĐH Sân khấu Điện ảnh là cái nôi nghệ thuật hàng đầu.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Cần nộp hồ sơ đăng ký thi tuyển các vòng năng khiếu trực tiếp sớm từ tháng 4–5."
            },
            curriculum: {
                duration: "4 – 5 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Kỹ thuật cơ bản & Ký xướng âm", desc: "Ký xướng âm, Hòa âm căn bản, Kỹ thuật thanh nhạc/nhạc cụ cơ bản, Lịch sử âm nhạc." },
                    { year: "Năm 2", stage: "Phát triển kỹ năng biểu diễn", desc: "Thanh nhạc nâng cao, Kỹ xảo biểu cảm hình thể, Hòa tấu thính phòng, Tiếng nói sân khấu." },
                    { year: "Năm 3", stage: "Phong cách chuyên sâu & Sáng tác", desc: "Xử lý tác phẩm kinh điển, Sản xuất âm nhạc số (DAW), Diễn xuất trước ống kính." },
                    { year: "Năm 4-5", stage: "Chương trình báo cáo & Tốt nghiệp", desc: "Dựng vở diễn tốt nghiệp hoặc tổ chức Recital hòa nhạc độc tấu trước hội đồng giám khảo." }
                ],
                plainExplanation: "Thắp sáng cảm xúc con người: làm chủ kỹ thuật biểu diễn, sáng tác tác phẩm lay động và tỏa sáng trên sân khấu.",
                tools: ["FL Studio / Logic Pro", "Micro thu âm condenser", "Đàn Piano / Nhạc cụ chuyên ngành", "Bàn mixer âm thanh", "Ableton Live"],
                skills: [
                    { icon: "🎵", name: "Cảm âm tuyệt đối & Xử lý giai điệu", desc: "Thẩm âm chuẩn xác cao độ, nhịp phách và hòa thanh phức tạp" },
                    { icon: "🎭", name: "Biểu cảm thấu cảm & Nhập vai", desc: "Biến hóa nội tâm, hóa thân trọn vẹn vào tính cách nhân vật trên sân khấu" },
                    { icon: "🎛️", name: "Sản xuất âm nhạc số hiện đại", desc: "Phối khí, làm beat và thu âm chuyên nghiệp trên các phần mềm DAW" },
                    { icon: "✨", name: "Bản lĩnh sân khấu & Tự tin trước đám đông", desc: "Tỏa ra năng lượng cuốn hút và làm chủ tình huống trực tiếp trước hàng nghìn khán giả" }
                ]
            },
            harshRealities: [
                { icon: "🎲", title: "Xác suất đào thải khốc liệt, chỉ tỷ lệ nhỏ đạt đỉnh vinh quang", desc: "Độ cạnh tranh khốc liệt; hàng nghìn sinh viên tốt nghiệp nhưng chỉ số ít nghệ sĩ tạo dựng được tên tuổi." },
                { icon: "📉", title: "Thu nhập bấp bênh theo mùa show và hợp đồng", desc: "Thu nhập phụ thuộc vào hợp đồng biểu diễn ngắn hạn, mùa lễ hội nhiều show và mùa vắng show bấp bênh." },
                { icon: "🤕", title: "Tập luyện thể chất/thanh nhạc khắc nghiệt, nguy cơ chấn thương nghề", desc: "Luyện giọng dễ gây hạt xơ dây thanh; diễn viên và vũ công đối diện chấn thương khớp và dây chằng." }
            ],
            salary: {
                entry: "5 – 10 Triệu / tháng (Không cố định)",
                experienced: "20 – 60+ Triệu / tháng",
                multiplier: "×3.5",
                note: "Tham khảo: Thu nhập dao động lớn, từ vài triệu khi mới vào nghề đến hàng chục triệu mỗi show diễn.",
                entryBarPercent: 25,
                expBarPercent: 85
            },
            closingQuestion: "Năng khiếu thẩm âm và điểm môn Ngữ văn của bạn có tự tin để thi đỗ vào các trường Nghệ thuật không?"
        },

        "Thể thao & Khoa học vận động": {
            id: "tt_vd",
            name: "Thể thao & Khoa học vận động",
            combos: [
                { code: "T00", subjects: "Toán · Ngữ văn · Năng khiếu TDTT", tag: "Xét tuyển trường Thể thao", isPrimary: true },
                { code: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Y học thể thao", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Quản lý kinh doanh thể thao", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "T00", subjects: "Toán · Ngữ văn · Năng khiếu TDTT", tag: "Khối tuyển sinh chính", isPopular: true },
                { combo: "B00", subjects: "Toán · Hóa học · Sinh học", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Sinh học & Thể chất bền bỉ — Đòi hỏi tố chất thể lực tốt, sức bền tim mạch và tiếp thu kỹ thuật nhanh nhẹn.",
            coreSubjectAlert: {
                subject: "Thể lực đỉnh cao & Sinh lý vận động",
                reason: "Kiểm tra năng khiếu thể thao gồm chạy cự ly, bật cao và các bài test phản xạ vận động chuyên biệt."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ĐH TDTT Bắc Ninh, ĐH Sư phạm TDTT Hà Nội/TPHCM là trung tâm đào tạo hàng đầu.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Thí sinh đoạt huy chương giải quốc gia hoặc Hội khỏe Phù Đổng được ưu tiên tuyển thẳng."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Sinh lý thể thao", desc: "Giải phẫu học hệ vận động, Sinh lý học thể thao, Điền kinh cơ bản, Bơi lội." },
                    { year: "Năm 2", stage: "Nguyên lý huấn luyện & Dinh dưỡng", desc: "Lý luận và phương pháp giáo dục thể chất, Dinh dưỡng thể thao, Sơ cứu chấn thương." },
                    { year: "Năm 3", stage: "Chuyên sâu môn thể thao & Y học phục hồi", desc: "Huấn luyện chuyên sâu (Bóng đá/Bóng rổ/Cầu lông/Fitness), Phục hồi chức năng vận động." },
                    { year: "Năm 4", stage: "Thực tập huấn luyện & Tốt nghiệp", desc: "Thực tập huấn luyện tại các CLB thể thao hoặc trường học, Bảo vệ khóa luận tốt nghiệp." }
                ],
                plainExplanation: "Tối ưu hóa cơ thể: huấn luyện thể lực đỉnh cao, phục hồi chức năng và quản lý trung tâm thể thao.",
                tools: ["Đồng hồ bấm giờ thể thao", "Máy đo nhịp tim Polar", "Thiết bị phân tích cơ thể InBody", "Dây kháng lực & Tạ chuẩn Olympic", "Dụng cụ vật lý trị liệu"],
                skills: [
                    { icon: "🏋️", name: "Thiết kế giáo án huấn luyện thể lực", desc: "Xây dựng chu kỳ tập luyện khoa học (Periodization) giúp học viên tăng cơ, giảm mỡ" },
                    { icon: "🩹", name: "Xử lý & Phục hồi chấn thương thể thao", desc: "Băng bó ép cơ, chườm lạnh sơ cứu R.I.C.E và hướng dẫn bài tập phục hồi khớp" },
                    { icon: "🥗", name: "Tư vấn dinh dưỡng vận động", desc: "Tính toán lượng calo, macro (protein, carb, fat) phù hợp với cường độ tập luyện" },
                    { icon: "🏆", name: "Tâm lý học thể thao & Động viên thi đấu", desc: "Xây dựng ý chí thép và giải tỏa căng thẳng tâm lý cho vận động viên trước giờ thi" }
                ]
            },
            harshRealities: [
                { icon: "⏳", title: "Tuổi thọ nghề thi đấu ngắn (Thường giải nghệ trước tuổi 32)", desc: "Đỉnh cao phong độ thể thao chỉ kéo dài khoảng 8–10 năm; sau đó vận động viên phải sớm chuyển hướng sang làm huấn luyện viên hoặc kinh doanh." },
                { icon: "🩹", title: "Nguy cơ chấn thương mãn tính đeo bám suốt đời", desc: "Đứt dây chằng chéo, thoái hóa khớp gối hoặc thoát vị đĩa đệm do cường độ tập luyện quá tải là nỗi ám ảnh thường trực." },
                { icon: "🥇", title: "Thu nhập phụ thuộc trực tiếp vào thành tích huy chương", desc: "Chỉ những VĐV đạt huy chương quốc tế mới có tiền thưởng và tài trợ lớn; phần đông VĐV phong trào có thu nhập khiêm tốn." }
            ],
            salary: {
                entry: "7 – 10 Triệu / tháng",
                experienced: "20 – 40 Triệu / tháng",
                multiplier: "×2.5",
                note: "Chỉ để tham khảo: tùy phòng tập. PT thể hình kèm 1:1 uy tín có thể đạt 30–50 triệu/tháng.",
                entryBarPercent: 26,
                expBarPercent: 78
            },
            closingQuestion: "Tố chất thể lực đỉnh cao và điểm các môn văn hóa của bạn có đủ điều kiện trúng tuyển ngành Thể thao không?"
        },

        "Du lịch / Quản trị khách sạn & Dịch vụ F&B": {
            id: "dl_ks",
            name: "Du lịch / Quản trị khách sạn & Dịch vụ F&B",
            combos: [
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất (75% chỉ tiêu)", isPrimary: true },
                { code: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Du lịch văn hóa", isPrimary: false },
                { code: "D15", subjects: "Ngữ văn · Địa lí · Tiếng Anh", tag: "Địa lý du lịch", isPrimary: false },
                { code: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Hướng dẫn viên du lịch", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Một số trường", isPopular: false },
                { combo: "C00", subjects: "Ngữ văn · Lịch sử · Địa lí", tag: "Khối truyền thống", isPopular: false }
            ],
            coreSubjectWarning: "Tiếng Anh giao tiếp & Ngoại hình — Giao tiếp trôi chảy và phong thái mến khách là chìa khóa cốt lõi.",
            coreSubjectAlert: {
                subject: "Tiếng Anh giao tiếp & Sự mến khách (Hospitality)",
                reason: "Đòi hỏi phản xạ tiếng Anh tự nhiên và kỹ năng ứng biến khéo léo trước mọi tình huống của khách."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: NEU, HANU (25–26đ); ĐH Mở, ĐH Văn hóa (20–23đ) phù hợp nhiều mức điểm.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Ưu tiên trường có khách sạn thực hành 5 sao và thực tập hưởng lương quốc tế."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Địa lý du lịch", desc: "Địa lý du lịch Việt Nam & thế giới, Văn hóa ẩm thực, Tiếng Anh du lịch căn bản." },
                    { year: "Năm 2", stage: "Nghiệp vụ buồng phòng & Lễ tân", desc: "Nghiệp vụ tiền sảnh (Front Office), Quản trị buồng phòng (Housekeeping), Nghiệp vụ nhà hàng (F&B)." },
                    { year: "Năm 3", stage: "Quản trị lữ hành & Sự kiện", desc: "Thiết kế tour du lịch, Điều hành tour lữ hành, Tổ chức sự kiện MICE, Quản trị doanh thu khách sạn." },
                    { year: "Năm 4", stage: "Thực tập quản trị khách sạn", desc: "Thực tập quản lý tại các resort/khách sạn 4-5 sao quốc tế, Hoàn thành báo cáo tốt nghiệp." }
                ],
                plainExplanation: "Tạo trải nghiệm nghỉ dưỡng hoàn hảo, quản trị khách sạn 5 sao và điều hành tour du lịch lữ hành.",
                tools: ["Hệ thống đặt phòng Opera PMS / Fidelio", "Amadeus / Sabre (Hệ thống vé máy bay)", "POS nhà hàng", "MS Excel doanh thu", "TripAdvisor / OTA Platforms"],
                skills: [
                    { icon: "🛎️", name: "Nghiệp vụ lễ tân & Quản trị tiền sảnh", desc: "Thực hiện thủ tục check-in/out chuyên nghiệp và giải quyết khiếu nại khách hàng khéo léo" },
                    { icon: "🗺️", name: "Thiết kế & Thuyết minh tour du lịch", desc: "Xây dựng lịch trình tour hấp dẫn và thuyết minh truyền cảm về văn hóa lịch sử" },
                    { icon: "🍷", name: "Nghệ thuật ẩm thực & Rượu vang (Sommelier)", desc: "Am hiểu cách phối hợp món ăn với rượu vang và quy chuẩn phục vụ bàn tiệc quốc tế" },
                    { icon: "🌐", name: "Giao tiếp liên văn hóa & Ngoại ngữ 2", desc: "Tự tin giao tiếp bằng tiếng Anh, tiếng Trung hoặc tiếng Hàn với du khách quốc tế" }
                ]
            },
            harshRealities: [
                { icon: "🎉", title: "Đi làm khi người khác đi chơi (Lễ, Tết, cuối tuần)", desc: "Mùa cao điểm du lịch chính là lúc bạn phải làm việc cường độ cao nhất; hầu như không có ngày nghỉ lễ bên gia đình." },
                { icon: "🏃", title: "Đứng liên tục 8–10 tiếng & Áp lực chiều lòng khách khó tính", desc: "Áp lực thể lực lớn khi phải đứng suốt ca làm việc và luôn phải giữ nụ cười trên môi dù gặp khách hàng vô lý." },
                { icon: "🌊", title: "Dễ bị ảnh hưởng bởi biến động vĩ mô (Dịch bệnh, thiên tai)", desc: "Ngành du lịch là ngành đầu tiên chịu thiệt hại nặng nề khi có dịch bệnh, chiến tranh hoặc suy thoái kinh tế toàn cầu." }
            ],
            salary: {
                entry: "7 – 11 Triệu / tháng",
                experienced: "22 – 40 Triệu / tháng",
                multiplier: "×3.0",
                note: "Chỉ để tham khảo: Chưa tính tiền Tip/phí dịch vụ. Tổng quản lý 5 sao đạt 60–100 triệu/tháng.",
                entryBarPercent: 28,
                expBarPercent: 82
            },
            closingQuestion: "Khả năng giao tiếp Tiếng Anh của bạn hiện có đạt từ 7.0 hoặc tương đương IELTS 5.5+ để phục vụ du khách không?"
        },

        "Ngôn ngữ học & Biên phiên dịch quốc tế": {
            id: "nn_pd",
            name: "Ngôn ngữ học & Biên phiên dịch quốc tế",
            combos: [
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Phổ biến nhất (Môn Anh x2)", isPrimary: true },
                { code: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Nhiều trường ngoại ngữ", isPrimary: false },
                { code: "D15", subjects: "Ngữ văn · Địa lí · Tiếng Anh", tag: "Một số trường xét tuyển", isPrimary: false },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Khối xét tuyển mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Môn Ngoại ngữ nhân hệ số 2", isPopular: true },
                { combo: "D14", subjects: "Ngữ văn · Lịch sử · Tiếng Anh", tag: "Một số trường", isPopular: false },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Ngoại ngữ chuyên ngành — Môn Anh thường nhân hệ số 2, cần đầu vào tương đương IELTS 6.0+.",
            coreSubjectAlert: {
                subject: "Ngoại ngữ chuyên sâu & Vốn tiếng Việt giàu có",
                reason: "Phải giỏi cả ngoại ngữ lẫn tiếng mẹ đẻ, am hiểu sâu thành ngữ và văn cảnh văn hóa bản địa."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: ULIS, HANU điểm rất cao (26–28đ); ĐH Mở, Ngoại ngữ Đà Nẵng (22–24đ).",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Hầu hết các trường ưu tiên xét tuyển thẳng thí sinh có chứng chỉ IELTS từ 6.5 – 7.5 trở lên."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Ngôn ngữ cơ sở & Phát âm chuẩn", desc: "Ngữ âm - Âm vị học, Ngữ pháp chuyên sâu, Kỹ năng Nghe - Nói - Đọc - Viết học thuật." },
                    { year: "Năm 2", stage: "Văn hóa & Ngôn ngữ học đối chiếu", desc: "Đất nước học (Anh/Mỹ/Trung/Nhật), Ngữ nghĩa học, Dẫn luận ngôn ngữ học, Ngoại ngữ 2." },
                    { year: "Năm 3", stage: "Lý thuyết & Kỹ hành dịch thuật", desc: "Lý thuyết dịch thuật, Dịch văn bản kinh tế - thương mại, Dịch đuổi (Consecutive Interpreting)." },
                    { year: "Năm 4", stage: "Dịch cabin & Thực tập dịch thuật", desc: "Dịch song song (Simultaneous/Cabin), Dịch hội nghị quốc tế, Thực tập tại cơ quan ngoại giao/doanh nghiệp." }
                ],
                plainExplanation: "Cầu nối văn hóa toàn cầu: chuyển tải tư tưởng, dịch tài liệu chuyên sâu và dịch cabin hội nghị.",
                tools: ["Trados Studio (CAT Tool)", "MemoQ", "Grammarly Business", "DeepL Pro", "Tai nghe chống ồn chuyên dụng dịch Cabin"],
                skills: [
                    { icon: "🗣️", name: "Dịch cabin (Dịch song song) thần tốc", desc: "Dịch trực tiếp lời diễn giả nói trong cabin với độ trễ chỉ 2–3 giây" },
                    { icon: "📚", name: "Biên dịch tài liệu chuyên ngành sâu", desc: "Dịch chính xác thuật ngữ y tế, pháp lý, hàng hải mà không làm mất đi hàm ý gốc" },
                    { icon: "🌍", name: "Am hiểu sâu sắc văn hóa bản địa", desc: "Hiểu đúng tiếng lóng, lối nói ẩn dụ và sự khác biệt văn hóa để tránh dịch ngô nghê" },
                    { icon: "💻", name: "Ứng dụng công cụ CAT Tool & Hậu kiểm AI", desc: "Làm chủ bộ nhớ dịch thuật (Translation Memory) và chỉnh sửa bản dịch máy (MTPE)" }
                ]
            },
            harshRealities: [
                { icon: "🎧", title: "Áp lực dịch trực tiếp (Cabin) căng thẳng đến nghẹt thở", desc: "Bộ não phải nghe, xử lý ngôn ngữ và nói ra liên tục trong vài giây; một lỗi dịch sai có thể gây hiểu lầm ngoại giao nghiêm trọng." },
                { icon: "🤖", title: "Công cụ dịch máy (AI, DeepL, ChatGPT) đe dọa phân khúc cơ bản", desc: "Các công việc dịch tài liệu ngắn đơn giản đang bị AI thay thế; biên dịch viên buộc phải nâng cao chuyên môn y khoa, luật mới có việc làm giá trị cao." },
                { icon: "📖", title: "Bắt buộc am hiểu kiến thức chuyên ngành sâu", desc: "Muốn có thu nhập cao phải am hiểu tường tận kiến thức ngành hẹp (hợp đồng dầu khí, sở hữu trí tuệ, cơ khí chế tạo) chứ không chỉ biết từ vựng chung chung." }
            ],
            salary: {
                entry: "8 – 13 Triệu / tháng",
                experienced: "25 – 45 Triệu / tháng",
                multiplier: "×3.0",
                note: "Chỉ để tham khảo: tùy hội nghị. Phiên dịch viên cabin nhận thù lao từ $200 – $500 / ngày.",
                entryBarPercent: 30,
                expBarPercent: 86
            },
            closingQuestion: "Điểm môn Ngoại ngữ của bạn có thường đạt từ 8.5 trở lên để tự tin theo đuổi nghề dịch thuật chuyên nghiệp không?"
        },

        "Logistics & Quản trị chuỗi cung ứng": {
            id: "logistics",
            name: "Logistics & Quản trị chuỗi cung ứng",
            combos: [
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Phổ biến nhất (70% chỉ tiêu)", isPrimary: true },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Khối xét tuyển trọng tâm", isPrimary: false },
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Nhiều trường kỹ thuật", isPrimary: false },
                { code: "D07", subjects: "Toán · Hóa học · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Phổ biến nhất", isPopular: true },
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Ưu tiên khối Kinh tế", isPopular: true },
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Một số trường", isPopular: false }
            ],
            coreSubjectWarning: "Tiếng Anh & Toán tư duy — Bắt buộc nắm thuật ngữ Incoterms, chứng từ vận tải và thuật toán tuyến đường.",
            coreSubjectAlert: {
                subject: "Tiếng Anh thương mại & Toán tối ưu hóa",
                reason: "Giao dịch hãng tàu quốc tế bằng tiếng Anh; tư duy số học giúp tối ưu chi phí kho vận toàn cầu."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: FTU, NEU (26–27.5đ); ĐH Giao thông Vận tải, ĐH Hàng hải (22–25đ).",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Ưu tiên chứng chỉ ngoại ngữ IELTS và điểm thi ĐGNL ĐHQG để xét tuyển sớm."
            },
            curriculum: {
                duration: "4 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Kinh tế vận tải", desc: "Toán cao cấp, Kinh tế vi mô, Nhập môn Logistics & Chuỗi cung ứng, Địa lý vận tải." },
                    { year: "Năm 2", stage: "Nghiệp vụ Ngoại thương & Kho bãi", desc: "Quản trị kho hàng & tồn kho, Vận tải đa phương thức, Giao nhận hàng hóa quốc tế, Incoterms." },
                    { year: "Năm 3", stage: "Chuỗi cung ứng & Hải quan", desc: "Thủ tục khai báo Hải quan điện tử, Thu mua (Procurement), Quản trị chuỗi cung ứng toàn cầu, Phần mềm ERP." },
                    { year: "Năm 4", stage: "Thực tập hãng tàu & Cảng biển", desc: "Thực tập tại công ty Forwarder / Hãng tàu / Cảng biển ICD, Đồ án giải pháp chuỗi cung ứng." }
                ],
                plainExplanation: "Điều phối chuỗi cung ứng toàn cầu: quản trị kho bãi, thông quan và vận chuyển hàng hóa tối ưu.",
                tools: ["Phần mềm Khai hải quan ECUS5-VNACCS", "Hệ thống quản lý kho WMS", "Hệ thống quản lý vận tải TMS", "SAP ERP", "Excel Solver"],
                skills: [
                    { icon: "🚢", name: "Nghiệp vụ xuất nhập khẩu & Chứng từ", desc: "Soạn thảo và kiểm tra Vận đơn (Bill of Lading), Hóa đơn thương mại, C/O xuất xứ" },
                    { icon: "📦", name: "Quản trị tồn kho & Vận hành kho bãi", desc: "Tối ưu hóa diện tích xếp hàng trong kho và tính toán điểm đặt hàng lại (ROP)" },
                    { icon: "🤝", name: "Đàm phán cước tàu & Hãng vận chuyển", desc: "Thương lượng giá cước container với các hãng tàu Maersk, MSC, ONE để tối ưu chi phí" },
                    { icon: "🌐", name: "Xử lý sự cố logistics quốc tế", desc: "Giải quyết nhanh chóng các tình huống nghẽn cảng, thất lạc hàng hoặc trễ chuyến bay" }
                ]
            },
            harshRealities: [
                { icon: "🚢", title: "Áp lực tắc cảng, lệch tàu, hàng trễ giờ và khách khiếu nại", desc: "Chuỗi cung ứng toàn cầu rất dễ đứt gãy; tàu hoãn chuyến hoặc hải quan kiểm tra đột xuất khiến hàng bị chậm trễ gây stress tột độ." },
                { icon: "🌙", title: "Trực theo dõi đơn hàng xuyên đêm do lệch múi giờ quốc tế", desc: "Khi làm việc với đối tác châu Âu hoặc Mỹ, nhân viên xuất nhập khẩu thường xuyên phải kiểm tra email và giải quyết sự cố lúc nửa đêm." },
                { icon: "🏭", title: "Môi trường làm việc kho bãi/cảng nhiều áp lực thực tế", desc: "Vị trí hiện trường tại cảng biển hoặc kho ngoại quan đòi hỏi phơi nắng gió, kiểm tra container bụi bặm và đối mặt nhiều áp lực kiểm kê." }
            ],
            salary: {
                entry: "8 – 14 Triệu / tháng",
                experienced: "28 – 50 Triệu / tháng",
                multiplier: "×3.2",
                note: "Chỉ để tham khảo: tùy tập đoàn. Quản lý chuỗi cung ứng (Supply Chain Manager) đạt 60–100 triệu/tháng.",
                entryBarPercent: 32,
                expBarPercent: 88
            },
            closingQuestion: "Điểm môn Tiếng Anh và Toán của bạn có đạt từ 7.5 trở lên để đàm phán hợp đồng chuỗi cung ứng quốc tế không?"
        },

        "Hàng không & Hàng hải": {
            id: "hk_hh",
            name: "Hàng không & Hàng hải",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Kỹ thuật Hàng không/Hàng hải", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên khối Hàng không", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Quản lý hoạt động bay/Cảng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Khối Kỹ thuật trọng tâm", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên Hàng không", isPopular: true },
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Một số ngành", isPopular: false }
            ],
            coreSubjectWarning: "Sức khỏe loại 1 & Tiếng Anh ICAO — Đòi hỏi thị lực hoàn hảo, thể lực tim mạch và phản xạ tiếng Anh nhanh.",
            coreSubjectAlert: {
                subject: "Sức khỏe loại 1 & Tiếng Anh chuẩn ICAO",
                reason: "Tiêu chuẩn sức khỏe phi công/thuyền trưởng rất khắt khe; tiếng Anh bắt buộc để đàm thoại vô tuyến."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Học viện Hàng không, ĐH Hàng hải, ĐH Bách Khoa là các trường trọng điểm.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Đào tạo bay phi công cần chuẩn bị tài chính lớn hoặc ứng tuyển gói cadet hãng."
            },
            curriculum: {
                duration: "4 – 5 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Khí động lực học", desc: "Toán cao cấp, Vật lý, Khí động học đại cương, Luật hàng không/hàng hải quốc tế." },
                    { year: "Năm 2", stage: "Hệ thống máy bay & Dẫn đường", desc: "Kết cấu máy bay/tàu thủy, Thiết bị dẫn đường vô tuyến, Khí tượng hàng không/hàng hải." },
                    { year: "Năm 3", stage: "Quản lý bay & Buồng lái giả lập", desc: "Huấn luyện buồng lái mô phỏng (Simulator), Quy trình kiểm soát không lưu (ATC), Xử lý khẩn nguy." },
                    { year: "Năm 4-5", stage: "Thực hành bay/Đi biển & Bằng lái", desc: "Huấn luyện thực hành bay lấy chứng chỉ CPL/ATPL hoặc đi thực tập thực tế trên các tàu viễn dương." }
                ],
                plainExplanation: "Điều khiển tàu bay thương mại và tàu biển viễn dương kết nối giao thương các châu lục an toàn.",
                tools: ["Buồng lái mô phỏng bay (Full Flight Simulator)", "Hệ thống radar kiểm soát không lưu ATC", "Bản đồ hàng hải điện tử ECDIS", "Hệ thống định vị GPS/GLONASS"],
                skills: [
                    { icon: "✈️", name: "Làm chủ kỹ thuật bay & Điều hướng", desc: "Thao tác chính xác các hệ thống điện tử buồng lái và điều khiển máy bay trong mọi thời tiết" },
                    { icon: "🧠", name: "Bình tĩnh xử lý tình huống khẩn nguy", desc: "Xử lý chuẩn xác quy trình khi gặp sự cố động cơ, thời tiết xấu hoặc hỏng hóc thiết bị" },
                    { icon: "📻", name: "Liên lạc đối thoại chuẩn ICAO/IMO", desc: "Giao tiếp vô tuyến bằng tiếng Anh chuẩn xác, ngắn gọn, không gây hiểu lầm với đài kiểm soát" },
                    { icon: "🧭", name: "Định vị thiên văn & Khí tượng học", desc: "Đọc hiểu bản đồ mây radar thời tiết để chọn đường bay/tuyến hải trình êm ái, an toàn nhất" }
                ]
            },
            harshRealities: [
                { icon: "💰", title: "Chi phí đào tạo phi công rất cao (Hàng tỷ đồng)", desc: "Khóa học đào tạo thực hành bay lấy bằng phi công thương mại (CPL) đòi hỏi ngân sách đầu tư rất lớn từ phía gia đình." },
                { icon: "✈️", title: "Xa nhà dài ngày, lệch múi giờ, ảnh hưởng nhịp sinh học", desc: "Phi công và thuyền viên thường xuyên bay xuyên múi giờ, lênh đênh trên biển nhiều tháng liền xa cách gia đình và bạn bè." },
                { icon: "🩺", title: "Kiểm tra sức khỏe và thi sát hạch định kỳ cực kỳ nghiêm ngặt", desc: "Cứ mỗi 6–12 tháng đều phải kiểm tra lại sức khỏe và thi sát hạch buồng lái mô phỏng; nếu không đạt chuẩn sẽ bị đình chỉ bay ngay lập tức." }
            ],
            salary: {
                entry: "15 – 30 Triệu / tháng",
                experienced: "60 – 120+ Triệu / tháng",
                multiplier: "×3.5",
                note: "Chỉ để tham khảo: tùy hãng bay. Cơ trưởng bay thân rộng (A350/B787) có mức thu nhập 150–250+ triệu/tháng.",
                entryBarPercent: 45,
                expBarPercent: 98
            },
            closingQuestion: "Trình độ Tiếng Anh (chuẩn ICAO) và thể lực loại 1 của bạn có tự tin để vượt qua kỳ tuyển phi công không?"
        }
    };

    // Helper chuẩn hóa tìm kiếm ngành linh hoạt
    function normalizeStr(str) {
        if (!str) return '';
        return str.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replace(/[^a-z0-9]/g, ' ')
            .trim();
    }

    function getCareerInsight(careerName) {
        if (!careerName) {
            return getDefaultInsight('Chưa xác định');
        }

        // 1. Khớp chính xác theo key
        if (CAREER_INSIGHTS[careerName]) {
            return CAREER_INSIGHTS[careerName];
        }

        // 2. Khớp chuỗi mờ (fuzzy matching)
        const target = normalizeStr(careerName);
        for (const [key, data] of Object.entries(CAREER_INSIGHTS)) {
            const kNorm = normalizeStr(key);
            if (kNorm.includes(target) || target.includes(kNorm)) {
                return data;
            }
        }

        // 3. Khớp theo từ khóa đặc trưng
        if (target.includes('tin') || target.includes('phan mem') || target.includes('lap trinh') || target.includes('cntt') || target.includes('an toan thong tin')) {
            return CAREER_INSIGHTS["Công nghệ thông tin & Lập trình phần mềm"];
        }
        if (target.includes('khoa hoc may tinh') || target.includes('tri tue nhan tao') || target.includes('ai') || target.includes('du lieu')) {
            return CAREER_INSIGHTS["Khoa học máy tính & Trí tuệ nhân tạo (AI)"];
        }
        if (target.includes('kinh te') || target.includes('quan tri') || target.includes('marketing') || target.includes('kinh doanh') || target.includes('thuong mai')) {
            return CAREER_INSIGHTS["Kinh tế / Quản trị kinh doanh & Marketing"];
        }
        if (target.includes('tai chinh') || target.includes('ngan hang') || target.includes('ke toan') || target.includes('kiem toan')) {
            return CAREER_INSIGHTS["Tài chính - Ngân hàng & Kế toán - Kiểm toán"];
        }
        if (target.includes('y khoa') || target.includes('duoc') || target.includes('bac si') || target.includes('y te') || target.includes('suc khoe')) {
            return CAREER_INSIGHTS["Y khoa / Dược học & Khoa học sức khỏe"];
        }
        if (target.includes('dieu duong') || target.includes('y sinh')) {
            return CAREER_INSIGHTS["Điều dưỡng & Kỹ thuật Y sinh"];
        }
        if (target.includes('co dien tu') || target.includes('tu dong hoa') || target.includes('co khi') || target.includes('o to')) {
            return CAREER_INSIGHTS["Kỹ thuật / Cơ điện tử & Tự động hóa"];
        }
        if (target.includes('dien') || target.includes('dien tu') || target.includes('nang luong')) {
            return CAREER_INSIGHTS["Điện - Điện tử & Năng lượng tái tạo"];
        }
        if (target.includes('kien truc') || target.includes('noi that')) {
            return CAREER_INSIGHTS["Kiến trúc & Thiết kế nội thất"];
        }
        if (target.includes('xay dung') || target.includes('cau duong') || target.includes('du an')) {
            return CAREER_INSIGHTS["Xây dựng & Quản lý dự án"];
        }
        if (target.includes('nong nghiep') || target.includes('thuc pham')) {
            return CAREER_INSIGHTS["Nông nghiệp công nghệ cao & Công nghệ thực phẩm"];
        }
        if (target.includes('moi truong') || target.includes('sinh thai') || target.includes('ben vung')) {
            return CAREER_INSIGHTS["Môi trường & Khoa học bền vững"];
        }
        if (target.includes('luat') || target.includes('ngoai giao') || target.includes('xa hoi')) {
            return CAREER_INSIGHTS["Luật / Ngoại giao & Khoa học xã hội"];
        }
        if (target.includes('cong an') || target.includes('quan doi') || target.includes('canh sat') || target.includes('an ninh')) {
            return CAREER_INSIGHTS["Công an & Quân đội"];
        }
        if (target.includes('su pham') || target.includes('giao duc') || target.includes('giao vien')) {
            return CAREER_INSIGHTS["Sư phạm & Quản lý giáo dục"];
        }
        if (target.includes('tam ly') || target.includes('tham van')) {
            return CAREER_INSIGHTS["Tâm lý học & Dịch vụ tham vấn / Xã hội"];
        }
        if (target.includes('truyen thong') || target.includes('bao chi') || target.includes('pr')) {
            return CAREER_INSIGHTS["Truyền thông / Báo chí & Quan hệ công chúng (PR)"];
        }
        if (target.includes('thiet ke') || target.includes('do hoa') || target.includes('my thuat') || target.includes('multimedia')) {
            return CAREER_INSIGHTS["Thiết kế đồ họa / Mỹ thuật số & Đa phương tiện"];
        }
        if (target.includes('am nhac') || target.includes('bieu dien') || target.includes('nghe thuat') || target.includes('san khau')) {
            return CAREER_INSIGHTS["Âm nhạc, Biểu diễn & Nghệ thuật sân khấu"];
        }
        if (target.includes('the thao') || target.includes('van dong') || target.includes('the chat')) {
            return CAREER_INSIGHTS["Thể thao & Khoa học vận động"];
        }
        if (target.includes('du lich') || target.includes('khach san') || target.includes('am thuc') || target.includes('f&b')) {
            return CAREER_INSIGHTS["Du lịch / Quản trị khách sạn & Dịch vụ F&B"];
        }
        if (target.includes('ngon ngu') || target.includes('bien dich') || target.includes('phien dich')) {
            return CAREER_INSIGHTS["Ngôn ngữ học & Biên phiên dịch quốc tế"];
        }
        if (target.includes('logistics') || target.includes('chuoi cung ung') || target.includes('xuat nhap khau')) {
            return CAREER_INSIGHTS["Logistics & Quản trị chuỗi cung ứng"];
        }
        if (target.includes('hang khong') || target.includes('hang hai') || target.includes('phi cong') || target.includes('thuyen truong')) {
            return CAREER_INSIGHTS["Hàng không & Hàng hải"];
        }

        // 4. Trả về cấu trúc mặc định an toàn nếu không khớp
        return getDefaultInsight(careerName);
    }

    function getDefaultInsight(name) {
        return {
            id: "general",
            name: name || "Ngành đào tạo chuyên môn",
            combos: [
                { code: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất", isPrimary: true },
                { code: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên khối Kỹ thuật - Kinh tế", isPrimary: false },
                { code: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Tổ hợp mở rộng", isPrimary: false }
            ],
            admissionCombos: [
                { combo: "A00", subjects: "Toán · Vật lí · Hóa học", tag: "Phổ biến nhất", isPopular: true },
                { combo: "A01", subjects: "Toán · Vật lí · Tiếng Anh", tag: "Ưu tiên xét tuyển", isPopular: true },
                { combo: "D01", subjects: "Toán · Ngữ văn · Tiếng Anh", tag: "Tổ hợp mở rộng", isPopular: false }
            ],
            coreSubjectWarning: "Toán học & Ngoại ngữ — Nền tảng tư duy logic và công cụ hội nhập then chốt trong mọi ngành nghề.",
            coreSubjectAlert: {
                subject: "Toán học & Tiếng Anh",
                reason: "Cần nắm vững kiến thức căn bản của các môn thế mạnh để đáp ứng yêu cầu đào tạo chuyên môn tại giảng đường đại học."
            },
            schoolAdvice: {
                abilityFit: "Chọn trường VỪA SỨC MÌNH: Ưu tiên chọn trường có điểm chuẩn năm trước thấp hơn điểm thi thử 1.0–1.5đ.",
                admissionNotice: "Tra ĐỀ ÁN TUYỂN SINH: Mỗi trường mỗi khác về quy đổi ngoại ngữ, tiêu chí phụ và phân bổ phương thức xét."
            },
            curriculum: {
                duration: "4 – 5 NĂM",
                timeline: [
                    { year: "Năm 1", stage: "Đại cương & Nền tảng", desc: "Toán cao cấp, Nhập môn ngành, Kỹ năng học đại học và Tiếng Anh căn bản." },
                    { year: "Năm 2", stage: "Cơ sở chuyên môn & Công cụ", desc: "Nguyên lý chuyên ngành, Làm quen công cụ và phần mềm thực tế." },
                    { year: "Năm 3", stage: "Chuyên sâu & Đồ án thực chiến", desc: "Nghiên cứu ứng dụng bài toán thực tế, Thực hành đồ án môn học theo nhóm." },
                    { year: "Năm 4-5", stage: "Thực tập & Tốt nghiệp", desc: "Thực tập tại doanh nghiệp đối tác, Khóa luận tốt nghiệp và đi làm." }
                ],
                plainExplanation: "Trang bị kiến thức khoa học nền tảng, kỹ năng chuyên môn thực chiến và tham gia kỳ thực tập tại doanh nghiệp.",
                tools: ["Bộ công cụ số chuyên ngành", "Phần mềm mô phỏng", "Nền tảng quản lý dự án số"],
                skills: [
                    { icon: "🧩", name: "Tư duy phản biện & Giải quyết vấn đề", desc: "Phân tích và tìm kiếm giải pháp tối ưu cho các thách thức thực tế" },
                    { icon: "💻", name: "Ứng dụng công nghệ vào chuyên môn", desc: "Thành thạo công cụ số và phần mềm chuyên môn trong công việc" },
                    { icon: "🤝", name: "Kỹ năng làm việc nhóm & Thuyết trình", desc: "Giao tiếp rõ ràng, phối hợp hiệu quả và trình bày ý tưởng tự tin" },
                    { icon: "🌐", name: "Ngoại ngữ chuyên ngành vững vàng", desc: "Tự tin đọc hiểu tài liệu và giao tiếp trong môi trường quốc tế" }
                ]
            },
            harshRealities: [
                { icon: "⏰", title: "Áp lực chỉ tiêu & Tiến độ công việc", desc: "Phải làm quen với cường độ công việc cao và kỹ năng xử lý các sự cố phát sinh bất ngờ." },
                { icon: "📚", title: "Yêu cầu không ngừng tự học nâng cao tay nghề", desc: "Sự phát triển của công nghệ và AI đòi hỏi người đi làm phải liên tục cập nhật năng lực để không bị đào thải." },
                { icon: "⚖️", title: "Cân bằng giữa công việc và cuộc sống cá nhân", desc: "Đòi hỏi kỷ luật cá nhân cao để tránh bị kiệt sức (burnout) trong những năm đầu khởi nghiệp." }
            ],
            salary: {
                entry: "8 – 13 Triệu / tháng",
                experienced: "25 – 45 Triệu / tháng",
                multiplier: "×3.0",
                note: "Chỉ để tham khảo: tùy công ty và kỹ năng. Phụ thuộc vào năng lực thực chiến, ngoại ngữ và quy mô doanh nghiệp.",
                entryBarPercent: 30,
                expBarPercent: 85
            },
            closingQuestion: "Điểm các môn trong tổ hợp thế mạnh của bạn hiện tại có đạt từ 7.5 trở lên để an toàn xét tuyển không?"
        };
    }

    // Expose ra toàn cục window
    if (typeof window !== 'undefined') {
        window.CAREER_INSIGHTS_DATA = CAREER_INSIGHTS;
        window.getCareerInsight = getCareerInsight;
        window.CAREER_CONSULTATION_KB = CAREER_INSIGHTS; // Alias cho Chatbot
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            CAREER_INSIGHTS_DATA: CAREER_INSIGHTS,
            getCareerInsight: getCareerInsight
        };
    }
})();

