
type Translations = {
  [lang: string]: {
    [key:string]: string;
  }
}

export const translations: Translations = {
  en: {
    // App Shell
    app_title: "Corporate Responsibility Survey",
    footer_text: "This interactive component can be embedded into other applications.",
    
    // Username Step
    username_title: "Welcome to the Survey",
    username_prompt: "Please enter your anonymous name to begin.",
    username_placeholder: "e.g., Niva",
    start_survey_button: "Start Survey",

    // Survey Step
    comparing_within: "Comparing within '{{criterion}}'",
    comparing_main_criteria: "Comparing Main Dimensions",
    which_is_more_important_v2: "When comparing '{{item1}}' and '{{item2}}', please indicate which is more important.",
    how_much_more_important: "To what degree is '{{item}}' more important?",
    next_button: "Next",
    close_button: "Close",
    favoring: "Favoring",
    
    // Intensity Picker / Slider Labels
    intensity_label_1: "Equally Important",
    intensity_label_2: "Almost equally important",
    intensity_label_3: "Slightly more important",
    intensity_label_4: "Somewhat more importants",
    intensity_label_5: "Moderately more important",
    intensity_label_6: "Strongly more important",
    intensity_label_7: "Significantly more important",
    intensity_label_8: "Exceptionally more important",
    intensity_label_9: "Extremely More Important",

    // Results Step
    survey_complete_title: "Survey Complete!",
    survey_complete_subtitle: "Here is a summary of your comparison results.",
    results_for: "Showing results for: {{username}}",
    th_comparison: "Comparison",
    th_more_important: "More Important",
    th_intensity: "Intensity",
    saving_results: "Saving results to Google Sheets...",
    results_saved: "Results saved successfully!",
    results_error: "Could not save results. Please check the console.",
    thank_you_note: "Thank you for your participation. You may now close this window.",

    // --- CRITERIA CONTENT ---
    // --- Main Dimension 1: Operational Integrity ---
    "main_criterion_1": "Operational Integrity",
      // Sub-Criterion 1.1
      "mc1_sc1": "Employee Welfare and Working Conditions",
        "mc1_sc1_ex1": "The textile sector needs to make its job opportunities attractive. Just like in the automotive sector, it should create a desire for people to want to work there.",
        "mc1_sc1_ex2": "Social facilities such as nurseries and daycare centers for workers' children increase the sense of belonging, especially for female employees.",
        "mc1_sc1_ex3": "Various activities should be organized to improve and protect the mental and emotional health of employees, and a family atmosphere should be created in the company. It should make its employees feel that they are valued citizens.",
        "mc1_sc1_ex4": "Providing a fair working environment: fair wages and reasonable working hours.",
      // Sub-Criterion 1.2
      "mc1_sc2": "Product Quality and Consumer Value",
        "mc1_sc2_ex1": "By using quality materials, the lifespan of textile products should be improved. Products that deform after washing should not cause problems for customers.",
        "mc1_sc2_ex2": "The materials used should not be derived from animals; equivalent alternatives should be used.",
        "mc1_sc2_ex3": "Budgets allocated to advertising should be reduced and invested in quality instead.",
        "mc1_sc2_ex4": "Regarding customers, producing high-quality products, ensuring a reasonable price-to-value ratio, and manufacturing durable items should be the main responsibilities of companies.",
      // Sub-Criterion 1.3
      "mc1_sc3": "Resource Management and Production Efficiency",
        "mc1_sc3_ex1": "The product's sales channels must also be respectful of nature and people. Stores should be designed to be resource-efficient and thoughtful, and recycled materials should be preferred for boxes and packaging in online sales.",
        "mc1_sc3_ex2": "Innovative water-saving projects, such as rainwater harvesting, should be developed against the risk of water scarcity in the region.",
        "mc1_sc3_ex3": "Artificial intelligence should be utilized at every stage of textile production. With the help of technology, the burden on both humans and the environment should be reduced.",
        "mc1_sc3_ex4": "Investment should be made in production technologies that reduce recycling, water, and energy consumption.",
      // Sub-Criterion 1.4
      "mc1_sc4": "Ethical Governance and Business Integrity",
        "mc1_sc4_ex1": "No one believes in the tactic of raising prices and then lowering them for a 'discount' anymore. Real campaigns should be run.",
        "mc1_sc4_ex2": "Upholding integrity and ethical practices (i.e., when you copy a design, credit/compensation needs to be given to the original designer).",
        "mc1_sc4_ex3": "Advancement within the company should be based on the individual merits of employees, not through nepotism.",
        "mc1_sc4_ex4": "The marketing should actually reflect the product. No false claims.",
    
    // --- Main Dimension 2: Societal Alignment ---
    "main_criterion_2": "Societal Alignment",
      // Sub-Criterion 2.1
      "mc2_sc1": "Social Equity and Inclusion",
        "mc2_sc1_ex1": "Promote body positivity, diversity, and inclusion representing real people, not unrealistic beauty standards.",
        "mc2_sc1_ex2": "Employees should have the right to fair wages without discrimination or disability, and there should be equality in the workplace.",
        "mc2_sc1_ex3": "There should be no loss of rights due to pregnancy, parenthood, or family circumstances.",
        "mc2_sc1_ex4": "Supporting women and equal opportunities.",
      // Sub-Criterion 2.2
      "mc2_sc2": "Circular Economy and Anti-Consumption",
        "mc2_sc2_ex1": "High-quality, repairable, classic-style products should be produced; this way, the products are not affected by 'fast fashion'.",
        "mc2_sc2_ex2": "Possible reward program if customers send in their old clothes - discount for new products.",
        "mc2_sc2_ex3": "Establish a separate unit in the production center to make products from recycled materials",
        "mc2_sc2_ex4": "Production should be carried out with emphasis on recycling.",
      // Sub-Criterion 2.3
      "mc2_sc3": "Respect for Labor and Union Rights",
        "mc2_sc3_ex1": "Introduce unions to represent the working force",
        "mc2_sc3_ex2": "Complying with laws regarding employee rights, allowing union organization, and creating a corporate culture should be a core responsibility.",
        "mc2_sc3_ex3": "Practices such as OHS officers, unions, and sick leave should be implemented and regulated in accordance with EU standards.",
        "mc2_sc3_ex4": "Manufacturers must respect the legal and human rights of their employees. People should not be forced to work under harsh conditions for the sole purpose of profit.",
      // Sub-Criterion 2.4
      "mc2_sc4": "Public Image and Social Communication",
        "mc2_sc4_ex1": "Textile manufacturers must change their negative public perception. This begins with environmental responsibilities. Significant regulations must be implemented in the near future.",
        "mc2_sc4_ex2": "Social and environmental sensitivity should not be used as a marketing tool.",
        "mc2_sc4_ex3": "Advertising campaigns should be conducted to ensure that being local is perceived as a sign of privilege. Using celebrities as brand ambassadors who are unlikely to use the product or brand should be avoided.",
        "mc2_sc4_ex4": "Textile companies should take a leading role in social responsibility projects (e.g., clothing aid to child protection agencies, etc.).",

    // --- Main Dimension 3: Regulatory Compliance ---
    "main_criterion_3": "Regulatory Compliance",
      // Sub-Criterion 3.1
      "mc3_sc1": "Occupational Health and Safety Compliance",
        "mc3_sc1_ex1": "Occupational health should be a priority, and traceability should be ensured with a balance of conscience and quality.",
        "mc3_sc1_ex2": "Employing a workplace doctor regardless of the number of employees.",
        "mc3_sc1_ex3": "Conduct regular, proactive risk assessments within the scope of occupational health and safety.",
        "mc3_sc1_ex4": "Workers should be given regular occupational safety training and the necessary equipment for their safety should be provided.",
      // Sub-Criterion 3.2
      "mc3_sc2": "Environmental Compliance and Pollution Control",
        "mc3_sc2_ex1": "Pollution of waterways, in particular, affects the entire ecosystem in the water cycle. This impacts water quality, and therefore agricultural quality, leading to droughts that can eventually dry up rivers. Textile waste must not be discharged into waterways.",
        "mc3_sc2_ex2": "The microplastic output from textiles should be reduced.",
        "mc3_sc2_ex3": "The water consumption of factories and the extent to which chemicals like dyes mix with nature during production should be monitored, and more environmentally friendly criteria should be introduced.",
        "mc3_sc2_ex4": "Wastewater should not be released into nature without treatment.",
      // Sub-Criterion 3.3
      "mc3_sc3": "Product Standards and Certifications",
        "mc3_sc3_ex1": "The same size varies from brand to brand. This needs to be standardized.",
        "mc3_sc3_ex2": "Regulations should be made nationwide to determine size and production standards; they should be supported by regular inspections and high penalties.",
        "mc3_sc3_ex3": "Products that comply with ZDHC standards must be used.",
        "mc3_sc3_ex4": "Textile products should be produced by taking user health into consideration.",
      // Sub-Criterion 3.4
      "mc3_sc4": "Transparency, Auditing, and Reporting",
        "mc3_sc4_ex1": "Regular audits from a third-party company will ensure the industry meets working, governance, and legal standards.",
        "mc3_sc4_ex2": "A tracking system showing the entire flow of the product can be transparently embedded into product labels with a QR code, making it accessible to consumers and other stakeholders. This way, everyone knows what stages the product has gone through and consumes with awareness.",
        "mc3_sc4_ex3": "The company can employ its own internal auditor at the factory.",
        "mc3_sc4_ex4": "The company must be transparent and demonstrate this to everyone.",

    // --- Main Dimension 4: Stakeholder Collaboration ---
    "main_criterion_4": "Stakeholder Collaboration",
      // Sub-Criterion 4.1
      "mc4_sc1": "Local Community and Economic Partnership",
        "mc4_sc1_ex1": "Establishing a local football team in the city where they operate, or sponsoring an existing team, can help them gain sympathy in the local community.",
        "mc4_sc1_ex2": "Large companies should support the growth of small workshops that produce for them, rather than putting them out of business.",
        "mc4_sc1_ex3": "Implementing social projects that support local handicrafts and cultural heritage (e.g., the tradition of cotton craftsmanship).",
        "mc4_sc1_ex4": "In recruitment, priority should be given to candidates residing in local among those with similar qualifications.",
      // Sub-Criterion 4.2
      "mc4_sc2": "Stakeholder Dialogue and Feedback Mechanisms",
        "mc4_sc2_ex1": "Consumer satisfaction surveys should be conducted by going into the field.",
        "mc4_sc2_ex2": "While producing products, opinions can be obtained from the local people in the factory's area",
        "mc4_sc2_ex3": "Communicating regularly with employees, local communities, and stakeholders ensures that problems are recognized early and sustainable solutions are produced.",
        "mc4_sc2_ex4": "Contact with the customer should be ensured, and feedback and satisfaction should be taken into account.",
      // Sub-Criterion 4.3
      "mc4_sc3": "Partnerships for Innovation and Development",
        "mc4_sc3_ex1": "Collaboration with civil society organizations should be established for social awareness. Clothing is a basic need, and it is a social responsibility to support those in need.",
        "mc4_sc3_ex2": "Competition should be maintained in solidarity with companies operating in the same field. The creation of common values regarding employee rights should be ensured, etc.",
        "mc4_sc3_ex3": "Support should be provided for training qualified personnel for the sector by preparing protocols with the relevant departments of universities and vocational high schools.",
        "mc4_sc3_ex4": "Supporting sectoral education and providing support to design and fashion schools.",
      // Sub-Criterion 4.4
      "mc4_sc4": "Consumer and Public Empowerment",
        "mc4_sc4_ex1": "Washing and care instructions can also include environmentally friendly methods that save water and energy (e.g., washing at low temperatures, using natural detergents, etc.).",
        "mc4_sc4_ex2": "Promoting a culture of fashion and taste to show people that fashion can be sustainable and long-lasting. For example, holding master classes on combining clothes, teaching how to care for an item to make it last as long as possible.",
        "mc4_sc4_ex3": "All stakeholders should be regularly informed through training that supports social awareness about the sector.",
        "mc4_sc4_ex4": "Conducting informative studies for the correct use of products."
  },
  tr: {
    // App Shell
    app_title: "Kurumsal Sorumluluk Anketi",
    footer_text: "Bu etkileşimli bileşen, diğer uygulamalara yerleştirilebilir.",
    
    // Username Step
    username_title: "Ankete Hoş Geldiniz",
    username_prompt: "Lütfen başlamak için anonim adınızı girin.",
    username_placeholder: "örn. Niva",
    start_survey_button: "Ankete Başla",

    // Survey Step
    comparing_within: "'{{criterion}}' İçinde Karşılaştırma",
    comparing_main_criteria: "Ana Boyutları Karşılaştırma",
    which_is_more_important_v2: "'{{item1}}' ve '{{item2}}' karşılaştırıldığında, hangisinin daha önemli olduğunu belirtiniz.",
    how_much_more_important: "'{{item}}' ne derecede daha önemli?",
    next_button: "Sonraki",
    close_button: "Kapat",
    favoring: "Lehine",

    // Intensity Picker / Slider Labels
    intensity_label_1: "Eşit derecede önemli",
    intensity_label_2: "Neredeyse eşit derecede önemli",
    intensity_label_3: "Biraz daha önemli",
    intensity_label_4: "Daha fazla önemli",
    intensity_label_5: "Orta derecede önemli",
    intensity_label_6: "Belirgin derecede önemli",
    intensity_label_7: "Güçlü derecede önemli",
    intensity_label_8: "Olağanüstü şekilde daha önemli",
    intensity_label_9: "Aşırı derecede daha önemli",

    // Results Step
    survey_complete_title: "Anket Tamamlandı!",
    survey_complete_subtitle: "Karşılaştırma sonuçlarınızın bir özeti aşağıdadır.",
    results_for: "Sonuçlar gösteriliyor: {{username}}",
    th_comparison: "Karşılaştırma",
    th_more_important: "Daha Önemli",
    th_intensity: "Yoğunluk",
    saving_results: "Sonuçlar Google E-Tablolar'a kaydediliyor...",
    results_saved: "Sonuçlar başarıyla kaydedildi!",
    results_error: "Sonuçlar kaydedilemedi. Lütfen konsolu kontrol edin.",
    thank_you_note: "Katılımınız için teşekkür ederiz. Şimdi bu pencereyi kapatabilirsiniz.",
    
    // --- CRITERIA CONTENT ---
    // --- Main Dimension 1: Operasyonel Bütünlük ---
    "main_criterion_1": "Operasyonel Bütünlük",
      // Sub-Criterion 1.1
      "mc1_sc1": "Çalışan Refahı ve Çalışma Koşulları",
        "mc1_sc1_ex1": "Tekstil sektörünün çalışma olanaklarını cazip hale getirmesi gerekir. Tıpkı otomotiv sektöründe olduğu gibi, insanların orada çalışma isteği duyması sağlanmalı.",
        "mc1_sc1_ex2": "İşçilerin çocukları için kreş ve gündüz bakım evi gibi sosyal imkanlar, özellikle kadın çalışanların aidiyet hissini arttırır.",
        "mc1_sc1_ex3": "Şirkette çalışanların akıl ve ruh sağlığını geliştirmeleri ve korumaları için çeşitli etkinlikler düzenlenmeli, şirkette aile ortamı oluşturulmalıdır. Çalışanlarına değerli bir vatandaş olduğunu hissettirmelidir.",
        "mc1_sc1_ex4": "Adil çalışma ortamı sağlama: adil ücret ve makul çalışma saatleri.",
      // Sub-Criterion 1.2
      "mc1_sc2": "Ürün Kalitesi ve Tüketici Değeri",
        "mc1_sc2_ex1": "Kaliteli malzemeler kullanılarak tekstil ürünlerinin kullanım ömürleri göz önünde bulundurulmalı. Yıkama sonrası deforme olan ürünler müşterileri mağdur etmemeli.",
        "mc1_sc2_ex2": "Kullanılan malzemeler hayvansal kaynaklı olmamalı, onlara eşdeğer alternatifler kullanılmalıdır.",
        "mc1_sc2_ex3": "Reklamlara ayrılan bütçeler azaltılmalı, onun yerine kaliteye yatırılmalıdır.",
        "mc1_sc2_ex4": "Müşterilere ilişkin ise kaliteli ürünler üretilmesi, fiyat-değer oranının makul olması ve dayanıklı ürünler üretilmesi firmaların ana sorumlulukları olmalıdır.",
      // Sub-Criterion 1.3
      "mc1_sc3": "Kaynak Yönetimi ve Üretim Verimliliği",
        "mc1_sc3_ex1": "Ürünün satış kanalları da doğaya saygılı ve insana uyumlu olmalıdır. Mağazalar tasarruflu ve özenle tasarlanmalı, online satışlarda ise kutu ve paketlemede geri dönüştürülmüş ürünler tercih edilmelidir.",
        "mc1_sc3_ex2": "Bölgedeki su kıtlığı riskine karşı, yağmur suyu hasadı gibi yenilikçi su tasarrufu projeleri geliştirmeli.",
        "mc1_sc3_ex3": "Tekstil üretiminin her aşamasında yapay zekadan faydalanılmalıdır. Teknoloji yardımı ile insan yükü ve doğa yükü azaltılmalıdır.",
        "mc1_sc3_ex4": "Geri dönüşüm, su ve enerji tüketimini azaltacak üretim teknolojilerine yatırım yapılmalı.",
      // Sub-Criterion 1.4
      "mc1_sc4": "Etik Yönetişim ve İş Ahlakı",
        "mc1_sc4_ex1": "Fiyatları arttırıp sonra 'indirim' diye düşürme taktiğine artık kimse inanmıyor. Gerçek kampanyalar yapılmalı.",
        "mc1_sc4_ex2": "Dürüstlük ve etik uygulamaları korumak (yani, bir tasarımı kopyaladığınızda, orijinal tasarımcıya kredi/tazminat verilmesi gerekir).",
        "mc1_sc4_ex3": "Şirket içinde yükselme, torpil yoluyla değil, çalışanların bireysel liyakatlerine göre olmalıdır.",
        "mc1_sc4_ex4": "Pazarlama, ürünü doğru bir şekilde yansıtmalıdır. Gerçeğe aykırı veya yanıltıcı iddialarda bulunulmamalıdır.",
    
    // --- Main Dimension 2: Toplumla Uyumluluk ---
    "main_criterion_2": "Toplumla Uyumluluk",
      // Sub-Criterion 2.1
      "mc2_sc1": "Sosyal Adalet ve Kapsayıcılık",
        "mc2_sc1_ex1": "Gerçekçi olmayan güzellik standartlarını değil, gerçek insanları temsil eden beden olumlamasını, çeşitliliği ve kapsayıcılığı teşvik edilmeli.",
        "mc2_sc1_ex2": "Ayrımcılık veya engellilik durumu ayrımı yapılmadan çalışanlar adil ücret alma hakkına sahip olmalı, iş yerinde eşitlik olmalı.",
        "mc2_sc1_ex3": "Hamilelik, ebeveynlik veya aile durumları nedeniyle hak kaybı yaşanmamalı.",
        "mc2_sc1_ex4": "Kadınları ve fırsat eşitliğini desteklemek.",
      // Sub-Criterion 2.2
      "mc2_sc2": "Döngüsel Ekonomi ve Tüketim Karşıtlığı",
        "mc2_sc2_ex1": "Yüksek kalitede, tamir edilebilen, klasik tarzda ürünler üretilmeli; bu şekilde ürünler 'hızlı moda'dan etkilenmez.",
        "mc2_sc2_ex2": "Müşterilerin eski kıyafetlerini göndermeleri halinde ödül programı uygulanabilir - yeni ürünlerde indirim gibi.",
        "mc2_sc2_ex3": "Geri dönüştürülmüş malzemelerden ürünler yapmak için üretim merkezinde ayrı bir birim daha kurmalı.",
        "mc2_sc2_ex4": "Geri dönüşüme önem vererek üretim yapılmalıdır.",
      // Sub-Criterion 2.3
      "mc2_sc3": "Emek ve Sendika Haklarına Saygı",
        "mc2_sc3_ex1": "İşçi gücünü temsil etmek için sendikalar teşvik edilmeli.",
        "mc2_sc3_ex2": "Çalışan haklarında yasalara uymak, sendikal örgütlenmeye izin vermek ve kurumsal bir kültür oluşturmak esas bir sorumluluk olmalıdır.",
        "mc2_sc3_ex3": "İSG görevlileri, sendikalar, hastalık izinleri gibi uygulamalar hayata geçirilmeli ve AB standartlarına uygun şekilde düzenlenmeli.",
        "mc2_sc3_ex4": "Üreticiler çalışanlarının yasal ve insani haklarını gözetmelidir. Fazla kar amacı ile zor şartlarda insanlar çalıştırılmamalıdır.",
      // Sub-Criterion 2.4
      "mc2_sc4": "Kamu İmajı ve Sosyal İletişim",
        "mc2_sc4_ex1": "Tekstil üreticileri toplumdaki negatif izlenimi değiştirmelidir. Bu da doğaya olan sorumluluklarla başlayacaktır. Yakın gelecekte ciddi düzenlemeler yapılmalıdır.",
        "mc2_sc4_ex2": "Toplumsal ve çevreye karşı duyarlılığın bir pazarlama aracı olarak kullanılmaması gerekir.",
        "mc2_sc4_ex3": "Yerelliğin bir ayrıcalık göstergesi olarak algılanmasını sağlayacak reklam kampanyaları yapılmalı. O ürünü veya markayı kullanmayacağı bariz olan kişilerin reklam yüzü olmasından kaçınılmalı.",
        "mc2_sc4_ex4": "Sosyal sorumluluk projelerinde tekstil şirketleri ön plana çıkmalı (örneğin Çocuk Esirgeme Kurumu'na giyecek yardımı vb.).",

    // --- Main Dimension 3: Mevzuata Uygunluk ---
    "main_criterion_3": "Mevzuata Uygunluk",
      // Sub-Criterion 3.1
      "mc3_sc1": "İş Sağlığı ve Güvenliği Uyumu",
        "mc3_sc1_ex1": "İş sağlığı öncelikli olmalı, vicdan ve kalite dengesi ile izlenebilirlik sağlanmalıdır.",
        "mc3_sc1_ex2": "Herhangi bir çalışan sayısı kriteri olmaksızın iş yeri hekimi çalıştırmak.",
        "mc3_sc1_ex3": "İş sağlığı ve güvenliği kapsamında düzenli, proaktif risk değerlendirmeleri yapmalı.",
        "mc3_sc1_ex4": "İşçilere düzenli olarak iş güvenliği eğitimi verilmeli, güvenlikleri için gerekli ekipmanlar temin edilmelidir.",
      // Sub-Criterion 3.2
      "mc3_sc2": "Çevresel Uyum ve Kirlilik Kontrolü",
        "mc3_sc2_ex1": "Özellikle su yollarının kirletilmesi, su döngüsünde yer alan tüm ekosistemi etkilemektedir. Bu durum su kalitesini, dolayısıyla tarım kalitesini etkiler ve zamanla nehirlerin kurumasına kadar giden kuraklığa sebep olur. Tekstil atıkları su yollarına atılmamalıdır.",
        "mc3_sc2_ex2": "Tekstildeki mikroplastik çıktısı azaltılmalı.",
        "mc3_sc2_ex3": "Üretim aşamasında fabrikaların su tüketimi ve boya gibi kimyasalların doğaya ne kadar karıştığı denetlenmeli ve daha çevreci kriterler getirilmelidir.",
        "mc3_sc2_ex4": "Atık suların arıtılmadan doğaya salınmaması gerekir.",
      // Sub-Criterion 3.3
      "mc3_sc3": "Ürün Standartları ve Sertifikalar",
        "mc3_sc3_ex1": "Aynı beden markadan markaya farklılık gösteriyor. Bunun standartlaştırılması gerekir.",
        "mc3_sc3_ex2": "Beden ve üretim standartlarının belirlenmesi için ülke genelinde düzenlemeler yapılmalı; düzenli denetimler ve yüksek cezalarla desteklenmeli.",
        "mc3_sc3_ex3": "ZDHC standartlarına uygun ürün kullanılmalı.",
        "mc3_sc3_ex4": "Tekstilde üretilen ürünlerin kullanıcı sağlığı göz önüne alınarak üretilmesi.",
      // Sub-Criterion 3.4
      "mc3_sc4": "Şeffaflık, Denetim ve Raporlama",
        "mc3_sc4_ex1": "Üçüncü taraf bir şirket tarafından yapılan düzenli denetimler, sektörün çalışma, yönetim ve yasal standartlara uymasını sağlayacaktır.",
        "mc3_sc4_ex2": "Ürünün bütün akışını gösteren bir takip sistemi, şeffaf biçimde ürünlerin etiketlerine QR kod ile işlenip tüketici ve diğer paydaşların erişimine açılabilir. Bu sayede herkes ürünün hangi aşamalardan geçtiğini bilir ve bilinçle tüketir.",
        "mc3_sc4_ex3": "Firma, fabrikada kendi iç denetçisini çalıştırabilir.",
        "mc3_sc4_ex4": "Şirketin şeffaf olması ve bunu herkese göstermesi gerekir.",

    // --- Main Dimension 4: Paydaşlarla İş Birliği ---
    "main_criterion_4": "Paydaşlarla İş Birliği",
      // Sub-Criterion 4.1
      "mc4_sc1": "Yerel Toplum ve Ekonomik Ortaklık",
        "mc4_sc1_ex1": "Faaliyet gösterilen şehirde yerel bir futbol takımı kurmaları veya halihazırdaki takıma sponsor olmaları, yerel toplumdaki sempatiyi kazanmalarını sağlayabilir.",
        "mc4_sc1_ex2": "Büyük firmalar kendilerine üretim yapan küçük atölyeleri yok etmek yerine büyümelerini desteklemelidir.",
        "mc4_sc1_ex3": "Yerel el sanatlarını ve kültürel mirası (örneğin pamuk işçiliği geleneği) destekleyen sosyal projeler yapmalıdır.",
        "mc4_sc1_ex4": "İşe alımlarda, benzer niteliklere sahip adaylar arasından yerelde ikamet edenlere öncelik vermeli.",
      // Sub-Criterion 4.2
      "mc4_sc2": "Paydaş Diyaloğu ve Geri Bildirim Mekanizmaları",
        "mc4_sc2_ex1": "Sahaya çıkılarak tüketiciye memnuniyet anketleri yapılmalı.",
        "mc4_sc2_ex2": "Ürünler üretilirken fabrikanın olduğu bölgedeki halktan fikir alınabilir.",
        "mc4_sc2_ex3": "Çalışanlar, yerel topluluklar ve paydaşlarla düzenli iletişim kurmak, sorunların erken fark edilmesini ve sürdürülebilir çözümler üretilmesini sağlar.",
        "mc4_sc2_ex4": "Müşteri ile irtibat sağlanmalı, geri bildirim ve memnuniyet dikkate alınmalıdır.",
      // Sub-Criterion 4.3
      "mc4_sc3": "Yenilik ve Kalkınma İçin Ortaklıklar",
        "mc4_sc3_ex1": "Toplumsal bilinçlendirme için sivil toplum örgütleriyle iş birliği yapılmalıdır. Giyinme zorunlu bir ihtiyaçtır ve sosyal sorumluluk olarak ihtiyaç sahiplerine destek olmaları gerekir.",
        "mc4_sc3_ex2": "Aynı alanda faaliyet gösteren firmalarla dayanışma halinde rekabet sürdürülmeli. Çalışan hakları konusunda ortak değerler yaratılması sağlanmalı vb.",
        "mc4_sc3_ex3": "Üniversiteler ve meslek liselerinin ilgili bölümleriyle protokoller hazırlayarak sektöre kalifiye eleman yetiştirilmesi konusunda destek olunmalı.",
        "mc4_sc3_ex4": "Sektörel eğitimi desteklemeli, tasarım ve moda okullarına destek vermelidir.",
      // Sub-Criterion 4.4
      "mc4_sc4": "Tüketici ve Kamu Katılımı",
        "mc4_sc4_ex1": "Yıkama ve bakım talimatları, su ve enerji tasarrufu sağlayan çevreye duyarlı yöntemleri de kapsayabilir (Örneğin, düşük sıcaklıkta yıkama, doğal deterjan kullanımı vb.).",
        "mc4_sc4_ex2": "Modanın ekolojik ve uzun ömürlü olabileceğini göstermek için moda ve zevk kültürünü teşvik etmek. Örneğin, kıyafetleri birleştirme üzerine atölyeler düzenlemek, bir eşyaya daha uzun süre dayanması için nasıl bakılacağını öğretmek.",
        "mc4_sc4_ex3": "Sektör hakkında toplumsal bilinci destekleyici eğitimler ile tüm paydaşlar düzenli olarak bilgilendirilmeli.",
        "mc4_sc4_ex4": "Ürünlerin doğru kullanımı için bilgilendirici çalışmalar yapılmalı."
  }
}
