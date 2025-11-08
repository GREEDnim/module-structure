// DSA Roadmap Application Logic

class RoadmapApp {
  constructor() {
    this.currentView = "landing";
    this.currentGroup = null;
    this.currentGroupId = null;
    this.currentModuleIndex = 0;
    this.modules = [];
    this.progress = {};
    this.sidebarOpen = false;

    this.init();
  }

  init() {
    this.loadProgress();
    this.render();
    this.setupEventListeners();
  }

  loadProgress() {
    if (this.currentGroup) {
      const saved = localStorage.getItem(`progress-${this.currentGroup}`);
      if (saved) {
        try {
          this.progress = JSON.parse(saved);
        } catch (e) {
          console.warn("Failed to parse saved progress");
          this.progress = {};
        }
      }
    }
  }

  saveProgress() {
    if (this.currentGroup) {
      localStorage.setItem(
        `progress-${this.currentGroup}`,
        JSON.stringify(this.progress)
      );
    }
  }

  selectGroup(groupName) {
    this.currentGroup = groupName;
    const groupData = GROUPS_DATA.groups[groupName];
    if (!groupData) return;

    this.currentGroupId = groupData.id;

    // Get modules for this group
    this.modules = MODULES_DATA.modules.filter((m) =>
      groupData.modules.includes(m.id)
    );

    // Add bonus module if exists
    if (groupData.bonus) {
      const bonusModule = BONUS_DATA.bonusModules.find(
        (b) => b.id === groupData.bonus
      );
      if (bonusModule) {
        this.modules.push(bonusModule);
      }
    }

    this.currentModuleIndex = 0;
    this.loadProgress();
    this.currentView = "group";
    this.render();
  }

  backToHome() {
    this.currentView = "landing";
    this.currentGroup = null;
    this.currentGroupId = null;
    this.modules = [];
    this.currentModuleIndex = 0;
    this.render();
  }

  selectModule(index) {
    this.currentModuleIndex = index;
    this.closeSidebar();
    this.render();
  }

  toggleLesson(path) {
    // Toggle the progress state
    this.progress[path] = !this.progress[path];
    this.saveProgress();

    // Update checkbox state immediately
    const checkbox = document.querySelector(`input[data-path="${path}"]`);
    if (checkbox) {
      checkbox.checked = this.progress[path];
    }

    // Update progress bar immediately
    this.updateProgressBar();
  }

  updateProgressBar() {
    const progressPercentage = this.calculateProgress();
    const progressFill = document.querySelector(".progress-bar-fill");
    const progressText = document.querySelector(".progress-text");

    if (progressFill && progressText) {
      progressFill.style.width = `${progressPercentage}%`;
      if (progressPercentage > 0) {
        progressFill.style.minWidth = "8px";
      } else {
        progressFill.style.minWidth = "0";
      }
      progressText.textContent = `${progressPercentage}% Complete`;
    }
  }

  calculateProgress() {
    let total = 0;
    let completed = 0;

    this.modules.forEach((module) => {
      if (module.chapters && module.chapters.length > 0) {
        module.chapters.forEach((chapter) => {
          if (chapter.lessons && chapter.lessons.length > 0) {
            chapter.lessons.forEach((_, lessonIndex) => {
              const path = `${module.id}/${chapter.id}/${lessonIndex}`;
              total++;
              if (this.progress[path] === true) {
                completed++;
              }
            });
          }
        });
      }
    });

    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }

  getGroupValue(field) {
    if (!field) return undefined;
    if (typeof field === "string") return field;
    return field[this.currentGroupId] || field["fresher"] || undefined;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (this.sidebarOpen) {
      sidebar?.classList.add("active");
      overlay?.classList.add("active");
    } else {
      sidebar?.classList.remove("active");
      overlay?.classList.remove("active");
    }
  }

  closeSidebar() {
    this.sidebarOpen = false;
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");
  }

  setupEventListeners() {
    document.getElementById("overlay").addEventListener("click", () => {
      this.closeSidebar();
    });
  }

  renderLandingPage() {
    const groupDescriptions = {
      ['FRESHER (6-12 LPA)']:
        "Crack entry level product based companies like ZOHO, FRESHWORKS, THOUGHTWORKS etc.",
      ['MAANG SDE1 (12-24 LPA)']: "Crack any TIRE-1 Product based company for SDE-1 Position. ",
      ['MAANG SDE2 (24+ LPA)']: "Crack any TIRE-1 Product based company for SDE-2 Position.",
    };

    return `
            <div class="landing-page">
                <div class="landing-content">
                    <div class="landing-header">
                        <h1>Land Your Dream Tech Job — Faster</h1>
                        <p class="landing-subtitle">Your personalized roadmap to coding excellence. Track your progress, master concepts, and ace your technical interviews.</p>
                    </div>
                    
                    <div class="landing-features">
                        <div class="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Track Your Progress</span>
                        </div>
                        <div class="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span>Structured Learning Path</span>
                        </div>
                        <div class="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                            <span>Interview Ready</span>
                        </div>
                    </div>

                    <h2 class="select-group-title">Choose Your Learning Path</h2>
                    <div class="group-cards">
                        ${Object.keys(GROUPS_DATA.groups)
                          .map(
                            (groupName) => `
                            <div class="group-card" onclick="app.selectGroup('${groupName}')">
                                <div class="card-badge">${GROUPS_DATA.groups[groupName].modules.length} Modules</div>
                                <h3>${groupName}</h3>
                                <p class="card-description">${groupDescriptions[groupName]}</p>
                                <div class="card-footer">
                                    <span class="card-link">Start Learning →</span>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
  }

  renderChapter(module, chapter, chapterIndex) {
    const chapterGoal = this.getGroupValue(chapter.goal);
    const currentPath = `${module.id}/${chapter.id}`;

    return `
            <details class="chapter-details" ${
              chapterIndex === 0 ? "open" : ""
            }>
                <summary>
                    <span>${chapter.title}</span>
                    ${
                      chapterGoal
                        ? `
                        <div class="tooltip-container">
                            <button type="button" class="icon-button" onclick="event.preventDefault(); event.stopPropagation();">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <div class="tooltip">${chapterGoal}</div>
                        </div>
                    `
                        : ""
                    }
                </summary>
                <div class="details-content">
                    ${
                      chapter.lessons
                        ? chapter.lessons
                            .map((lesson, lessonIndex) => {
                              const lessonPath = `${currentPath}/${lessonIndex}`;
                              const lessonMinRequirement = this.getGroupValue(
                                lesson.minRequirement
                              );
                              const isChecked =
                                this.progress[lessonPath] || false;

                              return `
                            <div class="lesson">
                                <div class="lesson-label" onclick="event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON' && app.toggleLesson('${lessonPath}')">
                                    <input type="checkbox" class="custom-checkbox" data-path="${lessonPath}" ${
                                isChecked ? "checked" : ""
                              } onchange="app.toggleLesson('${lessonPath}')">
                                    <div class="lesson-content">
                                        <span class="lesson-title">${
                                          lesson.title
                                        }</span>
                                    </div>
                                    ${
                                      lessonMinRequirement
                                        ? `
                                        <div class="tooltip-container">
                                            <button type="button" class="icon-button lesson-info" onclick="event.preventDefault(); event.stopPropagation();">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                            <div class="tooltip"><strong>Minimum Requirement:</strong><br>${lessonMinRequirement}</div>
                                        </div>
                                    `
                                        : ""
                                    }
                                </div>
                            </div>
                        `;
                            })
                            .join("")
                        : ""
                    }
                </div>
            </details>
        `;
  }

  renderModuleContent() {
    const module = this.modules[this.currentModuleIndex];
    if (!module) {
      return '<div class="empty-state">Select a module to view its contents</div>';
    }

    return `
            <div class="content-header">
                <h3>${module.title}</h3>
            </div>
            <div class="content-body">
                ${
                  module.chapters
                    ? module.chapters
                        .map((chapter, index) =>
                          this.renderChapter(module, chapter, index)
                        )
                        .join("")
                    : ""
                }
            </div>
        `;
  }

  renderGroupPage() {
    const progressPercentage = this.calculateProgress();

    return `
            <div class="container">
                <header>
                    <div class="header-top">
                        <div class="header-left">
                            <button class="btn btn-back" onclick="app.backToHome()">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <button class="btn menu-btn" onclick="app.toggleSidebar()">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5" />
                                </svg>
                            </button>
                            <h1>${this.currentGroup}</h1>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${progressPercentage}%; ${
      progressPercentage > 0 ? "min-width: 8px;" : ""
    }"></div>
                        <div class="progress-text">${progressPercentage}% Complete</div>
                    </div>
                </header>
                <main>
                    <aside class="sidebar" id="sidebar">
                        <div class="sidebar-header">
                            <h3>Modules</h3>
                        </div>
                        <ul class="module-list">
                            ${this.modules
                              .map(
                                (module, index) => `
                                <li class="module-item ${
                                  index === this.currentModuleIndex
                                    ? "active"
                                    : ""
                                }" 
                                    onclick="app.selectModule(${index})">
                                    ${module.title}
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                    </aside>
                    <section class="content">
                        ${this.renderModuleContent()}
                    </section>
                </main>
            </div>
        `;
  }

  render() {
    const app = document.getElementById("app");
    if (this.currentView === "landing") {
      app.innerHTML = this.renderLandingPage();
    } else if (this.currentView === "group") {
      app.innerHTML = this.renderGroupPage();
    }
  }
}

// Initialize the app
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new RoadmapApp();
});
