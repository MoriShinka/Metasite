// Content Loader - Load and manage content data

let contentData = {
    profile: null,
    works: [],
    blog: [],
    thoughts: [],
    social: []
};

export async function loadContent() {
    try {
        // Load all content files
        const [profile, works, blog, thoughts, social] = await Promise.all([
            loadJSON('/content/profile.json'),
            loadJSON('/content/works.json'),
            loadJSON('/content/blog.json'),
            loadJSON('/content/thoughts.json'),
            loadJSON('/content/social.json')
        ]);

        contentData = { profile, works, blog, thoughts, social };

        // Populate content
        populateThoughts();

        return contentData;
    } catch (error) {
        console.warn('Failed to load content, using defaults:', error);
        return contentData;
    }
}

async function loadJSON(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        return await response.json();
    } catch (error) {
        console.warn(`Could not load ${path}:`, error);
        return getDefaultContent(path);
    }
}

function populateThoughts() {
    const thoughtsList = document.getElementById('thoughtsList');
    if (!thoughtsList || !contentData.thoughts?.length) return;

    thoughtsList.innerHTML = contentData.thoughts.map(thought => `
    <article class="thought-item">
      <p class="thought-text">${thought.text}</p>
      <div class="thought-meta">
        <span>${thought.date}</span>
        ${thought.tags ? `<span>•</span><span>${thought.tags.join(', ')}</span>` : ''}
      </div>
    </article>
  `).join('');
}

function getDefaultContent(path) {
    if (path.includes('thoughts')) {
        return [
            {
                text: 'AI产品的核心不是技术有多先进，而是能否真正解决用户的实际问题。技术是手段，用户价值才是目的。',
                date: '2024-12-15',
                tags: ['产品思考', 'AI']
            },
            {
                text: '做LLM产品最大的挑战是管理用户预期。用户往往高估AI的能力，又低估使用AI的学习成本。',
                date: '2024-12-10',
                tags: ['LLM', '用户体验']
            },
            {
                text: 'Agent系统的设计关键在于明确边界。一个好的Agent应该知道自己能做什么，更重要的是知道自己不能做什么。',
                date: '2024-12-05',
                tags: ['Agent', '系统设计']
            },
            {
                text: '数据驱动不等于数据至上。数据可以告诉我们发生了什么，但无法告诉我们应该做什么。产品决策需要数据+洞察+判断。',
                date: '2024-11-28',
                tags: ['数据分析', '产品决策']
            },
            {
                text: '好的产品文档不是写给自己看的，而是写给三个月后的自己和新加入的团队成员看的。清晰的文档是团队协作的基础。',
                date: '2024-11-20',
                tags: ['团队协作', '文档']
            }
        ];
    }

    if (path.includes('social')) {
        return [
            { platform: '小红书', handle: '@yourhandle', url: '#' },
            { platform: 'Instagram', handle: '@yourhandle', url: '#' },
            { platform: 'LinkedIn', handle: 'Your Name', url: '#' }
        ];
    }

    return [];
}

export function getContent() {
    return contentData;
}
