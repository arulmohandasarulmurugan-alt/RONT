const fs = require('fs');
const path = require('path');

// Run part 1 and part 2 generators
require('./generate_tasks_part1.cjs');
require('./generate_tasks_part2.cjs');

const part1 = JSON.parse(fs.readFileSync('scripts/tasks_part1.json', 'utf8'));
const part2 = JSON.parse(fs.readFileSync('scripts/tasks_part2.json', 'utf8'));

const allTasks = [...part1, ...part2];
console.log(`Total tasks gathered: ${allTasks.length}`);

if (allTasks.length !== 41) {
  console.error(`Warning: Expected 41 tasks, got ${allTasks.length}`);
}

const CONFIG = {
  name: "M. Arulmurugan",
  regNo: "24MIC0121",
  subject: "FrontEnd Web Development Lab",
  courseCode: "CSE2004 / SWE1002",
  institution: "Vellore Institute of Technology (VIT)",
  campus: "Vellore Campus, Tamil Nadu",
  academicYear: "2025 - 2026",
  email: "arulmohandasarulmurugan@gmail.com",
  phone: "+91 98765 43210",
  github: "https://github.com/arulmurugan",
  linkedin: "https://linkedin.com/in/arulmurugan"
};

const SECTIONS = [
  { id: 1, title: "HTML Basic Practice Task 1", range: "Q1 - Q8", count: 8, icon: "📄", desc: "Core HTML document structure, text formatting, lists, tables, and div layout basics." },
  { id: 2, title: "HTML Layout Basic Practice Task 2", range: "Q9 - Q12", count: 4, icon: "📐", desc: "Layout techniques using table structure and pure <div> elements with zero CSS constraints." },
  { id: 3, title: "HTML Layout Practice Task 3: Headers", range: "Q13 - Q16", count: 4, icon: "🧭", desc: "Healthcare portals, dynamic search bars, and gaming hero sliders with inline and custom CSS." },
  { id: 4, title: "CSS Inline / In-doc Practice Task 4", range: "Q17 - Q19", count: 3, icon: "🎨", desc: "Strict CSS scoping: Inline CSS only vs internal <style> tag only with no inline rules." },
  { id: 5, title: "HTML Forms & Input Types Practice", range: "Q20 - Q24", count: 5, icon: "📝", desc: "Comprehensive HTML5 forms, 20 distinct input types, multi-step checkout, and audio/video media." },
  { id: 6, title: "JavaScript Practice 1: Validation", range: "Q25 - Q28", count: 4, icon: "🛡️", desc: "Client-side validation, regex pattern matching, inline error reporting, and dynamic result tables." },
  { id: 7, title: "JavaScript Mouse Event Handling", range: "Q29 - Q33", count: 5, icon: "🖱️", desc: "Interactive mouse events: click, mouseover, mouseleave on boxes, cards, signals, and banners." },
  { id: 8, title: "JavaScript Keyboard Event Handling", range: "Q34 - Q39", count: 6, icon: "⌨️", desc: "Key events (keydown, keyup, input): search triggers, ATM PIN security, arrow gallery, and exam hotkeys." },
  { id: 9, title: "Bootstrap Basics Practice", range: "Q40 - Q41", count: 2, icon: "🚀", desc: "Bootstrap 5.3 CDN integration vs local offline downloaded files for responsive authentication portals." }
];

// Write every task file into tasks/ and public/tasks/
for (const task of allTasks) {
  const code = task.code;
  const fileName = task.fileName || `${task.id}.html`;
  
  // Also standard id path (e.g. task-12.html even if fileName is layout1.html)
  fs.writeFileSync(path.join('tasks', `${task.id}.html`), code);
  fs.writeFileSync(path.join('public/tasks', `${task.id}.html`), code);
  
  // If specific fileName like layout1.html, write that as well
  if (fileName !== `${task.id}.html`) {
    fs.writeFileSync(path.join('tasks', fileName), code);
    fs.writeFileSync(path.join('public/tasks', fileName), code);
  }
}

// Write js/tasks.js and public/js/tasks.js
const tasksJsContent = `/**
 * FrontEnd Lab: 41 Tasks Mini Project
 * Author: ${CONFIG.name} | Reg No: ${CONFIG.regNo}
 * Data registry of all 41 FrontEnd lab tasks with full code, requirements & metadata
 */

const CONFIG = ${JSON.stringify(CONFIG, null, 2)};

const SECTIONS = ${JSON.stringify(SECTIONS, null, 2)};

const TASKS = ${JSON.stringify(allTasks, null, 2)};

if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
  window.SECTIONS = SECTIONS;
  window.TASKS = TASKS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, SECTIONS, TASKS };
}
`;

fs.writeFileSync('js/tasks.js', tasksJsContent);
fs.writeFileSync('public/js/tasks.js', tasksJsContent);

console.log("All 41 tasks and registry generated successfully!");
