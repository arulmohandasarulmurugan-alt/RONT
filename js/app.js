/**
 * FrontEnd Lab: 41 Tasks Mini Project
 * Application Engine & UI Controller
 * Author: M. Arulmurugan | Reg No: 24MIC0121
 */

(function () {
  'use strict';

  // State Management
  let currentTaskId = null;
  let activeTab = 'output'; // 'output' or 'code'
  let currentTheme = localStorage.getItem('frontend_lab_theme') || 'light';

  // DOM Elements
  const appHeader = document.querySelector('.app-header');
  const sidebar = document.getElementById('appSidebar');
  const sidebarNav = document.getElementById('sidebarNav');
  const sidebarSearch = document.getElementById('sidebarSearch');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');

  const homeView = document.getElementById('homeView');
  const taskView = document.getElementById('taskView');

  // Jump controls
  const jumpSelect = document.getElementById('jumpSelect');
  const jumpNumber = document.getElementById('jumpNumber');
  const jumpBtn = document.getElementById('jumpBtn');

  // Viewer controls
  const viewerBreadcrumb = document.getElementById('viewerBreadcrumb');
  const viewerTitle = document.getElementById('viewerTitle');
  const viewerConstraint = document.getElementById('viewerConstraint');
  const prevTaskBtn = document.getElementById('prevTaskBtn');
  const nextTaskBtn = document.getElementById('nextTaskBtn');
  const openNewTabBtn = document.getElementById('openNewTabBtn');
  const reloadIframeBtn = document.getElementById('reloadIframeBtn');

  // Panels
  const specDesc = document.getElementById('specDesc');
  const reqChecklist = document.getElementById('reqChecklist');
  const constraintCallout = document.getElementById('constraintCallout');
  const fileInfoBadge = document.getElementById('fileInfoBadge');

  const tabBtnOutput = document.getElementById('tabBtnOutput');
  const tabBtnCode = document.getElementById('tabBtnCode');
  const paneOutput = document.getElementById('paneOutput');
  const paneCode = document.getElementById('paneCode');
  const taskIframe = document.getElementById('taskIframe');
  const codeContent = document.getElementById('codeContent');
  const codeFileName = document.getElementById('codeFileName');
  const copyCodeBtn = document.getElementById('copyCodeBtn');

  // Home section grid
  const sectionsGrid = document.getElementById('sectionsGrid');

  // Initialize Application
  function init() {
    applyTheme(currentTheme);
    populateJumpSelect();
    renderSidebar();
    renderHomeSections();
    bindEvents();
    handleInitialRoute();
  }

  // Theme Management
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('frontend_lab_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' ? '&#9728;&#65039;' : '&#9790;&#65039;';
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // Populate Jump Select
  function populateJumpSelect() {
    if (!jumpSelect) return;
    jumpSelect.innerHTML = '<option value="">-- Jump to Task --</option>';
    window.TASKS.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `Task ${t.number}: ${t.title}`;
      jumpSelect.appendChild(opt);
    });
  }

  // Render Sidebar
  function renderSidebar(searchFilter = '') {
    if (!sidebarNav) return;
    sidebarNav.innerHTML = '';

    const filter = searchFilter.toLowerCase().trim();

    window.SECTIONS.forEach(sec => {
      const sectionTasks = window.TASKS.filter(t => t.sectionId === sec.id);
      
      const filteredTasks = sectionTasks.filter(t => {
        if (!filter) return true;
        const numMatch = t.number.toString() === filter || `task ${t.number}`.includes(filter) || `q${t.number}` === filter;
        const textMatch = t.title.toLowerCase().includes(filter) ||
                          t.constraint.toLowerCase().includes(filter) ||
                          t.requirements.some(r => r.toLowerCase().includes(filter));
        return numMatch || textMatch;
      });

      if (filter && filteredTasks.length === 0) return;

      const secContainer = document.createElement('div');
      secContainer.className = 'sidebar-section';

      const secHeader = document.createElement('div');
      secHeader.className = 'section-header';
      secHeader.innerHTML = `
        <span>${sec.icon} ${sec.title}</span>
        <span class="section-count">${filteredTasks.length}</span>
      `;

      const list = document.createElement('ul');
      list.className = 'task-list';

      filteredTasks.forEach(task => {
        const item = document.createElement('li');
        item.className = `task-item ${task.id === currentTaskId ? 'active' : ''}`;
        item.setAttribute('data-task-id', task.id);
        item.innerHTML = `
          <span class="task-badge-num">${task.number}</span>
          <span class="task-item-title" title="${escapeHtml(task.title)}">${task.title}</span>
        `;
        item.addEventListener('click', () => {
          navigateToTask(task.id);
          closeMobileSidebar();
        });
        list.appendChild(item);
      });

      secContainer.appendChild(secHeader);
      secContainer.appendChild(list);
      sidebarNav.appendChild(secContainer);
    });
  }

  // Render Home Sections Grid
  function renderHomeSections() {
    if (!sectionsGrid) return;
    sectionsGrid.innerHTML = '';

    window.SECTIONS.forEach(sec => {
      const card = document.createElement('div');
      card.className = 'section-card';
      const firstTask = window.TASKS.find(t => t.sectionId === sec.id);

      card.innerHTML = `
        <div>
          <div class="section-card-top">
            <span class="section-badge">${sec.range} &bull; ${sec.count} Tasks</span>
            <div class="section-card-icon">${sec.icon}</div>
          </div>
          <h3>${sec.title}</h3>
          <p>${sec.desc}</p>
        </div>
        <div class="section-card-footer">
          <span>Start Section</span>
          <span>&rarr;</span>
        </div>
      `;

      card.addEventListener('click', () => {
        if (firstTask) {
          navigateToTask(firstTask.id);
        }
      });

      sectionsGrid.appendChild(card);
    });
  }

  // Show Home View
  function showHome() {
    currentTaskId = null;
    history.replaceState(null, '', ' ');
    if (homeView) homeView.style.display = 'block';
    if (taskView) taskView.style.display = 'none';
    if (jumpSelect) jumpSelect.value = '';
    if (jumpNumber) jumpNumber.value = '';
    updateActiveSidebarItem();
  }

  // Show Specific Task
  function showTask(taskId) {
    const task = window.TASKS.find(t => t.id === taskId);
    if (!task) {
      showHome();
      return;
    }

    currentTaskId = task.id;
    localStorage.setItem('frontend_lab_last_task', task.id);

    // Update URL Hash without reload
    if (location.hash !== `#${task.id}`) {
      location.hash = `#${task.id}`;
    }

    if (homeView) homeView.style.display = 'none';
    if (taskView) taskView.style.display = 'flex';

    // Update Jump Controls
    if (jumpSelect) jumpSelect.value = task.id;
    if (jumpNumber) jumpNumber.value = task.number;

    // Update Topbar
    if (viewerBreadcrumb) {
      viewerBreadcrumb.innerHTML = `
        <span style="cursor: pointer; text-decoration: underline;" id="breadcrumbHome">Home</span>
        <span>&rsaquo;</span>
        <span>${task.sectionName}</span>
        <span>&rsaquo;</span>
        <strong>Task ${task.number}</strong>
      `;
      document.getElementById('breadcrumbHome')?.addEventListener('click', showHome);
    }

    if (viewerTitle) viewerTitle.textContent = `Task ${task.number}: ${task.title}`;
    if (viewerConstraint) {
      viewerConstraint.innerHTML = `&#9888; ${task.constraint}`;
    }

    // Update Prev / Next state
    const currentIndex = window.TASKS.findIndex(t => t.id === task.id);
    if (prevTaskBtn) {
      prevTaskBtn.disabled = currentIndex <= 0;
      prevTaskBtn.style.opacity = currentIndex <= 0 ? '0.4' : '1';
    }
    if (nextTaskBtn) {
      nextTaskBtn.disabled = currentIndex >= window.TASKS.length - 1;
      nextTaskBtn.style.opacity = currentIndex >= window.TASKS.length - 1 ? '0.4' : '1';
    }

    // Left Panel Details
    if (specDesc) {
      specDesc.textContent = `Task ${task.number} in ${task.sectionName}. All strict constraints and technical objectives must be respected.`;
    }

    if (reqChecklist) {
      reqChecklist.innerHTML = task.requirements.map(req => `
        <li class="req-item">
          <span class="req-check-icon">&#10004;</span>
          <span>${escapeHtml(req)}</span>
        </li>
      `).join('');
    }

    if (constraintCallout) {
      constraintCallout.innerHTML = `<strong>Constraint Enforced:</strong> ${escapeHtml(task.constraint)}`;
    }

    if (fileInfoBadge) {
      fileInfoBadge.textContent = `Source file: /tasks/${task.fileName || task.id + '.html'}`;
    }

    // Load Live Iframe Output
    loadIframe(task);

    // Load Code Content
    if (codeContent) {
      codeContent.textContent = task.code;
    }
    if (codeFileName) {
      codeFileName.textContent = task.fileName || `${task.id}.html`;
    }

    // Reset Tab
    switchTab(activeTab);

    // Update Sidebar active state
    updateActiveSidebarItem();
  }

  // Load Iframe with Standalone Task Code
  function loadIframe(task) {
    if (!taskIframe) return;
    
    // Clear and set srcdoc for perfect isolated execution
    taskIframe.srcdoc = task.code;
  }

  // Reload current iframe
  function reloadCurrentIframe() {
    if (!currentTaskId) return;
    const task = window.TASKS.find(t => t.id === currentTaskId);
    if (task) {
      loadIframe(task);
    }
  }

  // Open task in new tab
  function openCurrentTaskInNewTab() {
    if (!currentTaskId) return;
    const task = window.TASKS.find(t => t.id === currentTaskId);
    if (task) {
      const url = `tasks/${task.fileName || task.id + '.html'}`;
      window.open(url, '_blank');
    }
  }

  // Switch Tabs (Live Output vs View Code)
  function switchTab(tab) {
    activeTab = tab;
    if (tab === 'output') {
      tabBtnOutput?.classList.add('active');
      tabBtnCode?.classList.remove('active');
      paneOutput?.classList.add('active');
      paneCode?.classList.remove('active');
    } else {
      tabBtnCode?.classList.add('active');
      tabBtnOutput?.classList.remove('active');
      paneCode?.classList.add('active');
      paneOutput?.classList.remove('active');
    }
  }

  // Copy Code to Clipboard
  function copyCurrentCode() {
    if (!codeContent) return;
    navigator.clipboard.writeText(codeContent.textContent).then(() => {
      if (copyCodeBtn) {
        const originalHtml = copyCodeBtn.innerHTML;
        copyCodeBtn.innerHTML = '&#10004; Copied!';
        copyCodeBtn.style.background = '#10b981';
        setTimeout(() => {
          copyCodeBtn.innerHTML = originalHtml;
          copyCodeBtn.style.background = '';
        }, 2000);
      }
    }).catch(err => {
      console.error('Copy failed: ', err);
    });
  }

  // Update Active Sidebar Item
  function updateActiveSidebarItem() {
    document.querySelectorAll('.task-item').forEach(item => {
      if (item.getAttribute('data-task-id') === currentTaskId) {
        item.classList.add('active');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Navigation handlers
  function navigateToTask(taskId) {
    showTask(taskId);
  }

  function navigateStep(direction) {
    if (!currentTaskId) {
      if (direction > 0 && window.TASKS.length > 0) {
        navigateToTask(window.TASKS[0].id);
      }
      return;
    }
    const currentIndex = window.TASKS.findIndex(t => t.id === currentTaskId);
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < window.TASKS.length) {
      navigateToTask(window.TASKS[nextIndex].id);
    }
  }

  function handleJumpSubmit() {
    if (jumpNumber && jumpNumber.value) {
      const num = parseInt(jumpNumber.value, 10);
      const found = window.TASKS.find(t => t.number === num);
      if (found) {
        navigateToTask(found.id);
        return;
      }
    }
    if (jumpSelect && jumpSelect.value) {
      navigateToTask(jumpSelect.value);
    }
  }

  // Mobile sidebar controls
  function toggleMobileSidebar() {
    sidebar?.classList.toggle('open');
    sidebarOverlay?.classList.toggle('active');
  }

  function closeMobileSidebar() {
    sidebar?.classList.remove('open');
    sidebarOverlay?.classList.remove('active');
  }

  // Fullscreen toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Event Listeners
  function bindEvents() {
    // Brand click returns to Home
    document.querySelector('.header-brand')?.addEventListener('click', (e) => {
      e.preventDefault();
      showHome();
    });

    // Theme toggle
    themeToggleBtn?.addEventListener('click', toggleTheme);

    // Fullscreen
    fullscreenBtn?.addEventListener('click', toggleFullscreen);

    // Mobile menu toggle
    menuToggleBtn?.addEventListener('click', toggleMobileSidebar);
    sidebarOverlay?.addEventListener('click', closeMobileSidebar);

    // Jump controls
    jumpBtn?.addEventListener('click', handleJumpSubmit);
    jumpNumber?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleJumpSubmit();
    });
    jumpSelect?.addEventListener('change', () => {
      if (jumpSelect.value) navigateToTask(jumpSelect.value);
    });

    // Sidebar search
    sidebarSearch?.addEventListener('input', (e) => {
      renderSidebar(e.target.value);
    });

    // Viewer Navigation
    prevTaskBtn?.addEventListener('click', () => navigateStep(-1));
    nextTaskBtn?.addEventListener('click', () => navigateStep(1));
    reloadIframeBtn?.addEventListener('click', reloadCurrentIframe);
    openNewTabBtn?.addEventListener('click', openCurrentTaskInNewTab);

    // Tabs
    tabBtnOutput?.addEventListener('click', () => switchTab('output'));
    tabBtnCode?.addEventListener('click', () => switchTab('code'));
    copyCodeBtn?.addEventListener('click', copyCurrentCode);

    // Hash change event (Back/Forward browser buttons)
    window.addEventListener('hashchange', () => {
      const hash = location.hash.replace('#', '');
      if (hash && hash.startsWith('task-')) {
        showTask(hash);
      } else if (!hash) {
        showHome();
      }
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Ignore if typing inside input / textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        navigateStep(1);
      } else if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateStep(-1);
      } else if (e.altKey && (e.key === 'h' || e.key === 'H')) {
        e.preventDefault();
        showHome();
      }
    });
  }

  // Handle Initial Route
  function handleInitialRoute() {
    const hash = location.hash.replace('#', '');
    if (hash && hash.startsWith('task-')) {
      showTask(hash);
    } else {
      const lastTask = localStorage.getItem('frontend_lab_last_task');
      if (lastTask && window.TASKS.some(t => t.id === lastTask)) {
        showTask(lastTask);
      } else {
        showHome();
      }
    }
  }

  // HTML entity escaper
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
  }

  // Boot on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
