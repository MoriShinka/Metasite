// Language Manager - Bilingual Support

const LANG_KEY = 'preferred_language';
const SUPPORTED_LANGS = ['zh', 'en'];
const DEFAULT_LANG = 'zh';

// Content translations
const translations = {
    zh: {
        // Navigation
        nav_intro: '个人介绍',
        nav_works: '作品展示',
        nav_blog: '媒体关联',

        // Brand
        brand_title: 'Product Manager',

        // Intro Section
        intro_title: '个人介绍',
        intro_content: `彭誉（Yuki），世界经济论坛全球杰出青年，毕业于北京大学光华管理学院与中国人民大学商学院。她曾获北京市优秀毕业生、北大五四奖学金、国家奖学金、北京大学优秀学生干部等荣誉，并长期在校园与公共参与中承担组织与领导角色：主办北大美学集市、光华新年晚会、人大校歌赛等大型活动；担任光华网球队队长期间，带领新成立的队伍一年内跻身校内三强。对她而言，优秀并非偶然，而是持续自我驱动下的秩序与行动力。

她将"全球化"视为一条贯穿成长的主线。入选北大—巴政"全球治理人才塑造力提升项目"后，Yuki 前往巴黎参访 UNESCO 总部，并在巴黎政治学院课堂中聆听前 UNESCO 总干事伊琳娜·博科娃女士分享其职业历程与地缘政治实践。这段经历让她真正理解：国际视野并非观光式见闻，而是面对差异时的包容、谦逊与主动选择。此后她积极申请世界经济论坛全球杰出青年，并在施瓦布教授来北大演讲期间主动交流，将对国际议题的热情延伸为持续的公共参与。

在校外，她发起公益项目「SheShapes Impact」，聚焦国际组织与社会企业方向的职业路径与影响力；组织「全球好物市集」与青年发展论坛，围绕"一带一路"倡议下中国青年"走出去"与"引进来"展开讨论。她相信全球化的意义不止于"看见世界"，更在于让世界看见中国——理解规则，更要参与塑造规则。

职业选择上，她曾在咨询、PE/VC 与初创公司多线探索，获得 MBB 战略咨询顾问 offer。出于对科技前沿的长期好奇，她最终选择加入全球前五手机硬件公司 OPPO，任 CEO 办公室助理，参与用户调研与创始人日常会议体系，沉淀对战略、产品与品牌的第一手理解，并获评公司优秀校招生。2025 年中旬，她转向 AI 产品经理方向，开始聚焦视觉与记忆的"压缩"——让世界更高效地被感知、被存储与被调用。

她相信，真正的产品不是功能堆砌，而是价值观的外化；真正的国际化也不是地理跨度，而是心智上的开放与连接。未来，她希望在全球化与 AI 交汇的浪潮中持续探索，用产品降低跨文化、跨信息结构的沟通成本，让个人与组织在更大的世界里拥有更清晰的目标、更稳健的行动与更自由的选择。`,

        // CTA
        cta_email: 'Email',
        cta_resume: 'Resume',
        cta_wechat: 'WeChat'
    },

    en: {
        // Navigation
        nav_intro: 'About',
        nav_works: 'Works',
        nav_blog: 'Media',

        // Brand
        brand_title: 'Product Manager',

        // Intro Section
        intro_title: 'About',
        intro_content: `Holding the title of World Economic Forum Global Shaper, Yuki Peng (彭誉) graduated from Guanghua School of Management (GSM), Peking University (PKU), and the School of Business, Renmin University of China (RUC). She has been recognized with multiple honors including Beijing Outstanding Graduate, the Peking University May Fourth Scholarship (Top Award), the National Scholarship, and the Peking University Excellent Student Leader Award. For Yuki, excellence is never an accidental outcome—it is a lifestyle built on consistent self-motivation, structured execution, and the ability to create impact across academics, leadership, and public engagement.

Throughout her university years, she has been a builder and organizer at heart. As Assistant Secretary General at PKU's Art Troupe Secretariat and Director of Arts & Culture at the Student Union of RUC, she led and produced multiple large-scale cultural events, including the Peking University Aesthetics Market, the Guanghua New Year Gala, and the Renmin University Anthem Competition. Beyond the stage, she also served as Captain of the Guanghua Tennis Team, where she led a newly established team to rise into the university's top 3 within one year. Across these experiences, Yuki has remained driven by one principle: transforming limited resources into collective momentum through leadership, clarity, and execution.

At Peking University, Yuki embraced globalization as a central theme of her personal and professional development. She was selected for the PKU–Sciences Po Global Governance Leadership Program, through which she visited UNESCO Headquarters in Paris. In a class at Sciences Po, she listened to former UNESCO Director-General Irina Bokova share her career journey navigating geopolitical complexities within UNESCO. This experience reshaped Yuki's understanding of what a "global mindset" truly means: not tourism-level exposure, but the humility to engage differences, the openness to uncertainty, and the agency to make proactive choices. Inspired by this perspective, she applied to become a World Economic Forum Global Shaper and later proactively engaged with Professor Klaus Schwab (Chairman of World Economic Forum) during his lecture at Peking University—continuing her commitment to global dialogue and public initiatives.

Outside campus, Yuki turned global awareness into real-world action. She initiated "SheShapes Impact," a public interest project focused on career development and pathways in international organizations and social enterprises. She also organized the "Global Specialty Bazaar" to share and connect cultures through curated international products, and hosted youth forums discussing China's "going global" and "bringing in" strategies under the Belt and Road Initiative. To Yuki, globalization is not only about seeing the world—it is about helping the world better understand China's practices, perspectives, and contributions. In her view, global competence is practical wisdom: understanding the rules of the world, and developing the ability to participate in shaping them.

With a strong finance background, Yuki has actively explored diverse career paths across strategy consulting, PE/VC, and startups—building first-hand understanding of strategy, organizational dynamics, and growth mechanisms. She received an offer as a Consultant from Bain & Company. However, driven by long-term curiosity toward frontier technologies, she engaged in volunteering with Ladies Who Tech and ultimately chose to enter the Consumer electronics and AI hardware industry.

After graduation, Yuki joined OPPO, one of the world's top-five smartphone hardware companies, working as an Assistant in the CEO Office. She participated in User Research and Executive-level meetings, gaining close-range exposure to how business strategy, product roadmaps, marketing, and brand narratives are shaped in a global technology company. She was also recognized as an Outstanding Graduate Hire. In mid-2025, she transitioned into an AI Product Manager role, focusing on the "compression of vision and memory"—how complex realities can be sensed, stored, retrieved, and leveraged more efficiently, and how AI can help individuals and organizations build structured, transferable cognition.

Yuki believes truly great products are not feature collections, but the externalization of values. Likewise, true globalization is not measured by geography, but by an open, connected mindset. Looking forward, she aims to continue exploring at the intersection of globalization and AI—building products that reduce cross-cultural and cross-structural communication costs, and enabling people and organizations to navigate a broader world with clearer goals, stronger execution, and greater freedom of choice.

Daily, Yuki is also a creative explorer: she has hosted major events at both Renmin University and Peking University, served as a host for OPPO Gala, and performed in multiple theatre productions as part of university drama groups—maintaining an energetic balance between analytical rigor and expressive creativity.`,

        // CTA
        cta_email: 'Email',
        cta_resume: 'Resume',
        cta_wechat: 'WeChat'
    }
};

// Detect user's preferred language
function detectLanguage() {
    // Check localStorage first
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) {
        return saved;
    }

    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        return 'zh';
    }

    return DEFAULT_LANG;
}

// Get current language
export function getCurrentLanguage() {
    return document.documentElement.getAttribute('lang') || detectLanguage();
}

// Set language
export function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
        console.warn(`Unsupported language: ${lang}`);
        return;
    }

    // Save preference
    localStorage.setItem(LANG_KEY, lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update all translatable elements
    updateContent(lang);

    // Update language toggle button
    updateLanguageToggle(lang);
}

// Update content based on language
function updateContent(lang) {
    const t = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            // Preserve line breaks for content
            if (key.includes('content')) {
                el.innerHTML = t[key].replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>');
            } else {
                el.textContent = t[key];
            }
        }
    });
}

// Update language toggle button state
function updateLanguageToggle(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize language system
export function initLanguage() {
    const currentLang = detectLanguage();
    setLanguage(currentLang);

    // Setup language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    console.log(`✅ Language initialized: ${currentLang}`);
}
