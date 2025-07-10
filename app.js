class AIToolsRenderer {
    constructor(data) {
        this.data = data;
    }

    renderStats() {
        const statsContainer = document.getElementById('stats-container');
        const { stats } = this.data;
        
        statsContainer.innerHTML = `
            <div class="stat">
                <span class="stat-number">${stats.totalTools}</span>
                <span class="stat-label">精选工具 | Premium Tools</span>
            </div>
            <div class="stat">
                <span class="stat-number">${stats.categories}</span>
                <span class="stat-label">分类领域 | Categories</span>
            </div>
            <div class="stat">
                <span class="stat-number">${stats.lastUpdated}</span>
                <span class="stat-label">最后更新 | Last Updated</span>
            </div>
        `;
    }

    renderToolCard(tool) {
        return `
            <li class="tool-card">
                <a href="${tool.url}" class="tool-link" rel="noopener">
                    <div class="tool-header">
                        <h3 class="tool-name">${tool.name}</h3>
                        <img src="${tool.favicon}" alt="${tool.name}" class="tool-favicon" onerror="this.style.display='none'">
                    </div>
                    <div class="tool-company">${tool.company}</div>
                    <div class="tool-nav">${tool.description}<br>${tool.descriptionEn}</div>
                    <div class="tool-description">${tool.details}<br>${tool.detailsEn}</div>
                </a>
            </li>
        `;
    }

    renderCategory(category) {
        const toolsHtml = category.tools.map(tool => this.renderToolCard(tool)).join('');
        
        return `
            <section class="category">
                <h2 class="category-title">${category.icon} ${category.title}</h2>
                <ul class="tools-grid">
                    ${toolsHtml}
                </ul>
            </section>
        `;
    }

    renderAll() {
        this.renderStats();
        
        const mainContent = document.getElementById('main-content');
        const categoriesHtml = this.data.categories.map(category => this.renderCategory(category)).join('');
        mainContent.innerHTML = categoriesHtml;

        // Add staggered animation delays
        document.querySelectorAll('.category').forEach((category, index) => {
            category.style.animationDelay = `${index * 0.1}s`;
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const renderer = new AIToolsRenderer(aiToolsData);
    renderer.renderAll();
});
