// Works Manager - Project Display and Filtering

import { trackEvent } from './analytics.js';

let projects = [];
let activeFilter = 'all';

export function initWorksManager() {
    loadProjects();
    initFilters();
    initProjectModal();
}

async function loadProjects() {
    try {
        const response = await fetch('/content/works.json');
        projects = await response.json();
        renderProjects();
    } catch (error) {
        console.error('Failed to load projects:', error);
        // Use fallback sample data
        projects = getSampleProjects();
        renderProjects();
    }
}

function renderProjects() {
    const grid = document.getElementById('worksGrid');
    if (!grid) return;

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => {
            if (activeFilter === 'featured') return p.featured;
            return p.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());
        });

    grid.innerHTML = filteredProjects.map(project => `
    <article class="project-card" data-project-id="${project.id}">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
      </div>
      <div class="project-meta">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-info">
        <span>${project.role}</span>
        <span>•</span>
        <span>${project.period}</span>
      </div>
    </article>
  `).join('');

    // Add click handlers
    grid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            openProjectDetail(projectId);
        });
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active filter
            activeFilter = filter;

            // Update button states
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Re-render projects
            renderProjects();

            // Track analytics
            trackEvent('project_filter', { filter });
        });
    });
}

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalClose');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectDetail);
    }

    modal?.querySelector('.modal-overlay')?.addEventListener('click', closeProjectDetail);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeProjectDetail();
        }
    });
}

function openProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    if (!modal || !modalBody) return;

    // Render project details
    modalBody.innerHTML = `
    <div class="project-detail">
      <div class="project-detail-header">
        <h2 class="project-title">${project.title}</h2>
        <p class="project-summary">${project.summary}</p>
        <div class="project-meta">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-info">
          <span>${project.role}</span>
          <span>•</span>
          <span>${project.period}</span>
        </div>
      </div>
      
      ${project.caseStudy ? `
        <div class="case-study">
          ${project.caseStudy.background ? `
            <section class="case-section">
              <h3>项目背景</h3>
              <p>${project.caseStudy.background}</p>
            </section>
          ` : ''}
          
          ${project.caseStudy.problem ? `
            <section class="case-section">
              <h3>用户痛点</h3>
              <p>${project.caseStudy.problem}</p>
            </section>
          ` : ''}
          
          ${project.caseStudy.solution ? `
            <section class="case-section">
              <h3>解决方案</h3>
              <p>${project.caseStudy.solution}</p>
            </section>
          ` : ''}
          
          ${project.caseStudy.contribution ? `
            <section class="case-section">
              <h3>核心贡献</h3>
              <p>${project.caseStudy.contribution}</p>
            </section>
          ` : ''}
          
          ${project.caseStudy.results ? `
            <section class="case-section">
              <h3>成果与指标</h3>
              <p>${project.caseStudy.results}</p>
            </section>
          ` : ''}
          
          ${project.caseStudy.lessons ? `
            <section class="case-section">
              <h3>经验总结</h3>
              <p>${project.caseStudy.lessons}</p>
            </section>
          ` : ''}
        </div>
      ` : ''}
    </div>
  `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update URL
    history.pushState({ projectId }, '', `/works/${project.slug || projectId}`);

    // Track analytics
    trackEvent('project_open', { project: project.slug || projectId });
}

function closeProjectDetail() {
    const modal = document.getElementById('projectModal');
    modal?.classList.remove('active');
    document.body.style.overflow = '';

    // Restore URL
    history.pushState(null, '', '/#works');
}

// Sample projects data
function getSampleProjects() {
    return [
        {
            id: 'project-1',
            slug: 'ai-assistant-platform',
            title: 'AI智能助手平台',
            summary: '基于LLM的企业级智能助手，提升团队协作效率300%',
            tags: ['LLM', 'Agent', 'ToB'],
            role: 'PM Lead',
            period: '2024 Q1-Q3',
            featured: true,
            caseStudy: {
                background: '企业内部知识分散，员工查找信息效率低下，重复性问题消耗大量人力成本。',
                problem: '传统知识库检索准确率低，无法理解自然语言查询，缺乏上下文理解能力。',
                solution: '构建基于RAG架构的智能助手，整合企业知识库，支持多轮对话和上下文理解。实现智能路由、知识图谱增强和实时学习机制。',
                contribution: '主导产品从0到1设计，定义核心功能和交互流程。协调AI团队、工程团队和设计团队，推动MVP快速上线。',
                results: '上线3个月内，日活用户达到5000+，问题解决率85%，平均响应时间<2秒，员工满意度4.5/5。',
                lessons: 'LLM产品的关键在于准确理解用户意图和提供可靠答案。需要持续优化prompt工程和建立反馈机制。'
            }
        },
        {
            id: 'project-2',
            slug: 'content-generation-tool',
            title: 'AI内容生成工具',
            summary: '帮助创作者快速生成高质量内容的AI写作助手',
            tags: ['LLM', 'Growth'],
            role: 'PM',
            period: '2024 Q2-Q4',
            featured: true,
            caseStudy: {
                background: '内容创作者面临灵感枯竭、写作效率低的问题，市场需要智能化的创作辅助工具。',
                problem: '现有工具生成内容质量参差不齐，缺乏个性化和品牌调性，无法满足专业创作需求。',
                solution: '开发多场景内容生成工具，支持文章、社媒文案、营销素材等。引入风格迁移和品牌语料训练，确保输出符合用户调性。',
                contribution: '设计产品功能架构和用户流程，建立内容质量评估体系。推动增长策略，实现用户快速增长。',
                results: '月活用户突破10万，付费转化率12%，用户平均使用时长35分钟，NPS评分68。',
                lessons: 'AI工具的价值在于提升效率而非完全替代人工。需要在自动化和可控性之间找到平衡。'
            }
        },
        {
            id: 'project-3',
            slug: 'data-analysis-agent',
            title: '数据分析Agent系统',
            summary: '自动化数据分析和洞察生成的智能Agent',
            tags: ['Agent', 'RAG', 'ToB'],
            role: 'PM',
            period: '2023 Q4-2024 Q2',
            featured: false,
            caseStudy: {
                background: '业务团队需要快速获取数据洞察，但缺乏数据分析能力，依赖数据团队响应慢。',
                problem: '数据分析门槛高，SQL编写复杂，可视化工具学习成本大，无法满足即时分析需求。',
                solution: '构建智能数据分析Agent，支持自然语言查询，自动生成SQL和可视化图表。集成多数据源，提供智能推荐和异常检测。',
                contribution: '定义Agent能力边界和交互模式，设计多轮对话流程。建立数据安全和权限管理机制。',
                results: '分析效率提升5倍，业务团队自助分析率达70%，数据团队工作量减少40%。',
                lessons: 'Agent系统需要明确的任务边界和容错机制。用户信任需要通过透明的推理过程建立。'
            }
        }
    ];
}
