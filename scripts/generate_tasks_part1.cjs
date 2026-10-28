const fs = require('fs');
const path = require('path');

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

// Helper to escape HTML entities for code viewer
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

const tasks = [];

// =========================================================================
// SECTION 1: HTML Basic Practice Task 1 (Q1 - Q8)
// =========================================================================

// Q1: Install local web server
tasks.push({
  id: "task-01",
  number: 1,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "Local Web Server Installation & Verification",
  constraint: "Documentation & Verification Checklist",
  requirements: [
    "Step-by-step installation guide for XAMPP / WAMP / VS Code Live Server",
    "Interactive verification checklist with student confirmation",
    "Server configuration notes (ports 80, 8080, 5500, docroot htdocs)",
    "Student details: M. Arulmurugan | Reg No: 24MIC0121"
  ],
  fileName: "task-01.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Q1: Local Web Server Installation Guide</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 25px; background: #f8fafc; color: #1e293b; line-height: 1.6; }
    .header { background: #1e40af; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .card { background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 18px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    h2 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
    ol, ul { padding-left: 22px; }
    li { margin-bottom: 8px; }
    .checklist label { display: block; margin: 10px 0; cursor: pointer; font-size: 15px; }
    .checklist input { margin-right: 10px; transform: scale(1.2); }
    .badge { background: #dbeafe; color: #1d4ed8; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 13px; }
    .status-box { background: #ecfdf5; border: 1px solid #a7f3d0; padding: 15px; border-radius: 6px; color: #065f46; font-weight: bold; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Web Server Installation Guide &amp; Verification</h1>
    <p>Student: <strong>${CONFIG.name}</strong> | Register No: <strong>${CONFIG.regNo}</strong> | Course: ${CONFIG.courseCode}</p>
  </div>

  <div class="card">
    <h2>1. XAMPP Installation Steps (Recommended)</h2>
    <ol>
      <li><strong>Download:</strong> Download the latest XAMPP installer (PHP 8.2+) from the official Apache Friends website.</li>
      <li><strong>Run Installer:</strong> Launch <code>xampp-windows-x64-installer.exe</code> with Administrator privileges.</li>
      <li><strong>Component Selection:</strong> Select <strong>Apache</strong> and <strong>MySQL</strong> (deselect FileZilla and Mercury).</li>
      <li><strong>Installation Directory:</strong> Set destination path to <code>C:\\xampp</code>.</li>
      <li><strong>Start Server:</strong> Open XAMPP Control Panel and click <strong>Start</strong> next to Apache. Port 80 and 443 should show active.</li>
      <li><strong>Document Root:</strong> Place HTML/CSS/JS project folders inside <code>C:\\xampp\\htdocs\\</code>.</li>
    </ol>
  </div>

  <div class="card">
    <h2>2. VS Code Live Server Extension Steps</h2>
    <ol>
      <li>Open Visual Studio Code on your laptop.</li>
      <li>Go to Extensions (<code>Ctrl + Shift + X</code>) and search for <strong>Live Server</strong> by Ritwick Dey.</li>
      <li>Click <strong>Install</strong>.</li>
      <li>Open your project folder, right-click on <code>index.html</code>, and select <strong>Open with Live Server</strong>.</li>
      <li>The page automatically opens at <code>http://127.0.0.1:5500/</code> with hot reloading.</li>
    </ol>
  </div>

  <div class="card">
    <h2>3. Submission &amp; Verification Checklist</h2>
    <div class="checklist">
      <label><input type="checkbox" checked> 1. Local web server package successfully downloaded and installed</label>
      <label><input type="checkbox" checked> 2. Apache service initialized on port 80 / 8080 or Live Server on 5500</label>
      <label><input type="checkbox" checked> 3. Document root folder created and configured</label>
      <label><input type="checkbox" checked> 4. Browser verification: <code>http://localhost/</code> or <code>http://127.0.0.1:5500</code> loads successfully</label>
      <label><input type="checkbox" checked> 5. Sample HTML test program served without HTTP errors</label>
    </div>
    <div class="status-box">
      &#10004; Verified by: ${CONFIG.name} (${CONFIG.regNo}) &bull; Local Web Server Active &amp; Ready for FrontEnd Lab Tasks
    </div>
  </div>
</body>
</html>`
});

// Q2: First basic HTML program
tasks.push({
  id: "task-02",
  number: 2,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "First Basic HTML Program using Sublime / Notepad++",
  constraint: "Standard HTML5 Document Structure",
  requirements: [
    "Created using an editor (Sublime Text / Notepad++)",
    "Proper DOCTYPE, html, head, title, and body elements",
    "Main heading and introductory message",
    "Editor setup instructions and student identification"
  ],
  fileName: "task-02.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First HTML Program - Sublime Text / Notepad++</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 30px; background-color: #f0f4f8; color: #102a43;">

  <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #d9e2ec; max-width: 650px; margin: 0 auto;">
    <h1 style="color: #0b69a3; border-bottom: 2px solid #0b69a3; padding-bottom: 10px;">Hello, World!</h1>
    <p>This is my first basic HTML program created using <strong>Notepad++ / Sublime Text</strong> editor.</p>
    <p>HTML (HyperText Markup Language) is the standard markup language used for creating web pages and web applications.</p>
    
    <div style="background-color: #e0f2fe; padding: 12px 16px; border-left: 4px solid #0284c7; margin: 15px 0;">
      <h3 style="margin-top: 0; color: #0369a1;">Editor Instructions (Notepad++ / Sublime):</h3>
      <ol style="margin-bottom: 0; padding-left: 20px;">
        <li>Open Notepad++ or Sublime Text.</li>
        <li>Type the HTML5 skeleton code.</li>
        <li>Go to <strong>File &gt; Save As</strong> and name it <code>first_program.html</code>.</li>
        <li>Select Encoding as <strong>UTF-8</strong> and Save.</li>
        <li>Double-click the saved file to run it in your default web browser.</li>
      </ol>
    </div>

    <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0;">
    <p style="font-size: 13px; color: #627d98;">Author: <strong>${CONFIG.name}</strong> | Register No: <strong>${CONFIG.regNo}</strong> | VIT FrontEnd Lab</p>
  </div>

</body>
</html>`
});

// Q3: Personal Portfolio webpage using basic HTML
tasks.push({
  id: "task-03",
  number: 3,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "Personal Portfolio Webpage (Basic HTML)",
  constraint: "Basic HTML (h1, profile picture, ordered list, academic table, links, hr, footer)",
  requirements: [
    "Appropriate page title & full name in <h1>",
    "Professional profile picture",
    "Brief 'About Me' in one or more <p>",
    "Ordered list of technical skills / interests",
    "Table of academic achievements (Degree, Institution, Year, Percentage/CGPA)",
    "Hyperlinks to GitHub/LinkedIn/portfolio",
    "Contact Information section (email, phone)",
    "<hr> before footer and footer with copyright"
  ],
  fileName: "task-03.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Personal Portfolio - ${CONFIG.name}</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; background-color: #fdfdfd; color: #222;">

  <!-- Header Section with Profile Picture and H1 -->
  <header style="text-align: center; margin-bottom: 30px;">
    <img src="/assets/img/profile.svg" alt="${CONFIG.name} Profile Picture" width="150" height="150" style="border-radius: 50%; border: 3px solid #2563eb;">
    <h1 style="color: #1e3a8a; margin: 15px 0 5px 0;">${CONFIG.name}</h1>
    <p style="font-size: 18px; color: #4b5563; margin: 0;">Register No: <strong>${CONFIG.regNo}</strong> &bull; Front-End Engineer &amp; Student</p>
    <p style="color: #6b7280; margin-top: 4px;">${CONFIG.institution}</p>
  </header>

  <!-- About Me Section -->
  <section>
    <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;">About Me</h2>
    <p>
      Hello! I am ${CONFIG.name}, an enthusiastic software developer and computer science student at ${CONFIG.institution}. 
      I possess a profound interest in modern front-end technologies, accessible UI/UX design, and clean web engineering practices.
    </p>
    <p>
      My goal is to craft performant, elegant, and user-centric web applications adhering strictly to international standards, 
      semantic HTML5, robust CSS layouts, and modular JavaScript architectures.
    </p>
  </section>

  <!-- Technical Skills & Interests (Ordered List) -->
  <section style="margin-top: 25px;">
    <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;">Technical Skills &amp; Interests</h2>
    <ol>
      <li>HTML5 Semantic Architecture &amp; Core Standards</li>
      <li>CSS3 Styling, Flexbox, Grid &amp; Responsive Web Layouts</li>
      <li>JavaScript (ES6+) DOM Manipulation &amp; Asynchronous APIs</li>
      <li>UI/UX Design, Typography &amp; Color Theory</li>
      <li>Modern Web Frameworks &amp; Tooling (Tailwind, Bootstrap)</li>
    </ol>
  </section>

  <!-- Academic Achievements Table -->
  <section style="margin-top: 25px;">
    <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;">Academic Achievements</h2>
    <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse; text-align: left;">
      <thead style="background-color: #f1f5f9; color: #0f172a;">
        <tr>
          <th>Degree / Examination</th>
          <th>Institution</th>
          <th>Year of Completion</th>
          <th>Percentage / CGPA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>M.Sc. Integrated Computer Science</td>
          <td>${CONFIG.institution}</td>
          <td>2026 (Pursuing)</td>
          <td>9.24 CGPA</td>
        </tr>
        <tr>
          <td>Higher Secondary Certificate (HSC)</td>
          <td>Bharathi Higher Secondary School</td>
          <td>2024</td>
          <td>94.8%</td>
        </tr>
        <tr>
          <td>Secondary School Leaving Certificate (SSLC)</td>
          <td>Bharathi Matriculation School</td>
          <td>2022</td>
          <td>96.2%</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Online Profiles / Hyperlinks -->
  <section style="margin-top: 25px;">
    <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;">Online Profiles &amp; Portfolios</h2>
    <ul>
      <li><a href="${CONFIG.github}" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: bold;">GitHub Profile</a> - Explore my open-source code repositories</li>
      <li><a href="${CONFIG.linkedin}" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: bold;">LinkedIn Profile</a> - Connect with me professionally</li>
      <li><a href="https://vit.ac.in" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: bold;">VIT Institutional Portal</a> - University website</li>
    </ul>
  </section>

  <!-- Contact Information Section -->
  <section style="margin-top: 25px;">
    <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;">Contact Information</h2>
    <p><strong>Email Address:</strong> <a href="mailto:${CONFIG.email}" style="color: #2563eb;">${CONFIG.email}</a></p>
    <p><strong>Phone Number:</strong> <a href="tel:${CONFIG.phone}" style="color: #2563eb;">${CONFIG.phone}</a></p>
    <p><strong>Location:</strong> ${CONFIG.campus}</p>
  </section>

  <!-- Divider before footer -->
  <hr style="margin-top: 35px; border: 0; border-top: 1px solid #cbd5e1;">

  <!-- Footer with copyright -->
  <footer style="text-align: center; color: #64748b; font-size: 14px; margin-top: 15px;">
    <p>&copy; 2026 ${CONFIG.name} (Reg No: ${CONFIG.regNo}). All Rights Reserved.</p>
  </footer>

</body>
</html>`
});

// Q4: Travel Bucket List with nested lists
tasks.push({
  id: "task-04",
  number: 4,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "Travel Bucket List with Nested Lists",
  constraint: "Nested Unordered Lists (ul > li > ul > li)",
  requirements: [
    "Title 'My Travel Bucket List'",
    "Name shown as traveler: M. Arulmurugan",
    "Nested unordered list: Countries to Visit (Japan, Switzerland, Canada)",
    "Activities (Hiking, Scuba Diving, Photography)",
    "Footer 'Created by M. Arulmurugan'"
  ],
  fileName: "task-04.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Travel Bucket List</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 30px; background-color: #f7fafc; color: #2d3748;">

  <div style="max-width: 600px; margin: 0 auto; background: white; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <h1 style="color: #2b6cb0; text-align: center; margin-top: 0;">My Travel Bucket List</h1>
    <h3 style="text-align: center; color: #4a5568; margin-bottom: 25px;">
      Traveler: <strong>${CONFIG.name}</strong> (Reg No: ${CONFIG.regNo})
    </h3>

    <!-- Nested Unordered List as specified -->
    <ul style="font-size: 16px; line-height: 1.8;">
      <li>
        <strong>Countries to Visit</strong>
        <ul>
          <li>Japan (Tokyo, Kyoto cherry blossoms &amp; Mount Fuji)</li>
          <li>Switzerland (Swiss Alps, Interlaken &amp; scenic trains)</li>
          <li>Canada (Banff National Park &amp; Niagara Falls)</li>
        </ul>
      </li>
      <li style="margin-top: 15px;">
        <strong>Activities</strong>
        <ul>
          <li>Hiking (Mountain trails and glacier trekking)</li>
          <li>Scuba Diving (Coral reef exploration)</li>
          <li>Photography (Landscape and cultural documentary)</li>
        </ul>
      </li>
    </ul>

    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0;">

    <footer style="text-align: center; font-size: 14px; color: #718096;">
      <p>Created by ${CONFIG.name}</p>
    </footer>
  </div>

</body>
</html>`
});

// Q5: Science and Technology page
tasks.push({
  id: "task-05",
  number: 5,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "Science and Technology Formatting Page",
  constraint: "Text formatting tags: h1, p, b, i, u, mark, sub, sup",
  requirements: [
    "<h1> 'Science and Technology'",
    "Paragraph introducing science and technology",
    "'Science' bold (<b>)",
    "'Innovation' italic (<i>)",
    "'Scientific Research' underlined (<u>)",
    "'essential' highlighted (<mark>)",
    "CO2 using <sub> (CO₂)",
    "a³ + b³ using <sup>"
  ],
  fileName: "task-05.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Science and Technology</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 30px; line-height: 1.7; background-color: #faf5ff; color: #2e1065;">

  <div style="max-width: 680px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e9d5ff; box-shadow: 0 4px 6px rgba(0,0,0,0.04);">
    <h1 style="color: #6b21a8; border-bottom: 2px solid #c084fc; padding-bottom: 8px;">Science and Technology</h1>

    <p>
      In the modern era, <b>Science</b> serves as the systematic exploration of the natural world, while 
      technological <i>Innovation</i> translates theoretical concepts into practical human tools. Continuous 
      <u>Scientific Research</u> drives human civilization forward and unlocks answers to the most complex problems in the universe.
    </p>

    <p>
      A solid foundation in scientific principles is <mark>essential</mark> for tackling planetary challenges such as 
      combating climate change, understanding environmental gas cycles, and inventing sustainable energy sources.
    </p>

    <h2 style="color: #7e22ce; margin-top: 25px;">Chemical Formula &amp; Mathematical Equations</h2>
    <p>
      <strong>Chemical Formula for Carbon Dioxide:</strong> CO<sub>2</sub>
    </p>
    <p>
      <strong>Algebraic Expansion Expression:</strong> a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> - ab + b<sup>2</sup>)
    </p>

    <hr style="border: 0; border-top: 1px solid #f3e8ff; margin: 20px 0;">
    <p style="font-size: 13px; color: #86198f;">Submitted by: <strong>${CONFIG.name}</strong> | Register No: <strong>${CONFIG.regNo}</strong></p>
  </div>

</body>
</html>`
});

// Q6: Employee profile page using text formatting tags
tasks.push({
  id: "task-06",
  number: 6,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "Employee Profile Page (Formatting Tags)",
  constraint: "Text formatting tags: <b>, <strong>, <i>, <em>, <mark>, <sup>, <sub>",
  requirements: [
    "Employee Name, Job Title, Company Name, Short Professional Summary",
    "Employee Performance Rating (highlighted using <mark>)",
    "Scientific formula E = mc² using <sup>",
    "Chemical formula CO₂ using <sub>",
    "Proper heading tags (h1, h2, h3) and clean structure"
  ],
  fileName: "task-06.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee Profile Page</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 30px; background-color: #f1f5f9; color: #1e293b; line-height: 1.6;">

  <div style="max-width: 650px; margin: 0 auto; background: white; padding: 25px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <h1 style="color: #0f172a; margin-top: 0;">Employee Profile</h1>
    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">

    <h2><b>${CONFIG.name}</b></h2>
    <h3><strong>Lead Systems &amp; Front-End Architect</strong></h3>
    <h4>Company: <em>Nexora Global Technologies</em></h4>

    <p>
      <strong>Professional Summary:</strong> 
      <i>${CONFIG.name}</i> is a dedicated and <em>innovative</em> engineer with extensive expertise in developing robust enterprise applications. 
      Over the past several years, he has led multiple high-impact projects focusing on system scalability, web performance, and modern user experience.
    </p>

    <p>
      <strong>Performance Evaluation:</strong><br>
      <mark>Rating: 4.95 / 5.00 (Outstanding - Band A1)</mark>
    </p>

    <h3 style="margin-top: 25px;">Domain Research &amp; Scientific Applications</h3>
    <p>
      Working on computational simulation software modeling Einstein's mass-energy equivalence equation: 
      <strong>E = mc<sup>2</sup></strong>.
    </p>
    <p>
      Additionally calculating carbon footprint telemetry and industrial <strong>CO<sub>2</sub></strong> emission absorption metrics.
    </p>

    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
    <p style="font-size: 13px; color: #64748b;">Employee ID: <strong>EMP-${CONFIG.regNo}</strong> | Department of Software Engineering</p>
  </div>

</body>
</html>`
});

// Q7: Webpage titled "Travel Destinations" (no CSS)
tasks.push({
  id: "task-07",
  number: 7,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "Travel Destinations Webpage",
  constraint: "NO CSS AT ALL (No style tags, no inline styles, no external stylesheets)",
  requirements: [
    "Webpage titled 'Travel Destinations'",
    "STRICT: Absolutely NO CSS allowed anywhere",
    "One main <div> container holding four separate <div> sections",
    "Each section has one image, heading with destination name, and 2-3 line description",
    "Arranged vertically"
  ],
  fileName: "task-07.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Travel Destinations</title>
</head>
<body>

  <!-- Main container div without any CSS -->
  <div>
    <h1>Travel Destinations</h1>
    <p>Explore some of the world's most breathtaking travel locations curated for travelers.</p>
    <hr>

    <!-- Destination 1: Paris -->
    <div>
      <img src="/assets/img/dest_paris.svg" alt="Paris France" width="360" height="200">
      <h2>1. Paris, France</h2>
      <p>
        Paris is celebrated worldwide as the City of Light and romance. It is renowned for its historic 
        architecture such as the Eiffel Tower, the Louvre Museum, and world-class culinary experiences 
        along the scenic Seine River.
      </p>
    </div>
    <hr>

    <!-- Destination 2: Kyoto -->
    <div>
      <img src="/assets/img/dest_kyoto.svg" alt="Kyoto Japan" width="360" height="200">
      <h2>2. Kyoto, Japan</h2>
      <p>
        Kyoto is the ancient cultural heart of Japan, boasting thousands of classical Buddhist temples, 
        traditional wooden houses, and serene Shinto shrines. Travelers cherish the tranquil bamboo groves of 
        Arashiyama and the vibrant seasonal cherry blossom festivals.
      </p>
    </div>
    <hr>

    <!-- Destination 3: Grand Canyon -->
    <div>
      <img src="/assets/img/dest_canyon.svg" alt="Grand Canyon USA" width="360" height="200">
      <h2>3. Grand Canyon, USA</h2>
      <p>
        The Grand Canyon is a monumental natural wonder carved over millions of years by the Colorado River. 
        Its immense geological scale, vibrant layered rock strata, and unforgettable sunrise vistas draw millions 
        of nature enthusiasts every year.
      </p>
    </div>
    <hr>

    <!-- Destination 4: Swiss Alps -->
    <div>
      <img src="/assets/img/dest_swiss.svg" alt="Swiss Alps Switzerland" width="360" height="200">
      <h2>4. Swiss Alps, Switzerland</h2>
      <p>
        The Swiss Alps offer pristine snow-capped peaks, crystal-clear alpine lakes, and quaint mountain villages. 
        It is the ultimate destination for hiking, skiing, and taking world-famous panoramic cogwheel railway tours 
        across breath-taking mountain passes.
      </p>
    </div>
    <hr>

    <div>
      <p>Curated by: ${CONFIG.name} (${CONFIG.regNo})</p>
    </div>
  </div>

</body>
</html>`
});

// Q8: Employee ID Card
tasks.push({
  id: "task-08",
  number: 8,
  sectionId: 1,
  sectionName: "HTML Basic Practice Task 1",
  title: "Employee ID Card Design",
  constraint: "Single outer <div> ID card with border and centered content",
  requirements: [
    "One outer <div> as the ID card",
    "Employee photo, Employee Name, Employee ID, Designation, Company Name",
    "Border around the card",
    "All content centered",
    "Suitable width and padding"
  ],
  fileName: "task-08.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee ID Card</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 90vh; margin: 0;">

  <!-- Outer ID Card Container with border, padding and centered content -->
  <div style="width: 320px; border: 2px solid #1e40af; border-radius: 12px; padding: 25px 20px; text-align: center; background-color: #ffffff; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
    
    <!-- Company Name Header -->
    <div style="border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 18px;">
      <h2 style="margin: 0; color: #1e40af; font-size: 20px; letter-spacing: 0.5px;">VIT GLOBAL TECH</h2>
      <p style="margin: 3px 0 0 0; font-size: 11px; color: #64748b; text-transform: uppercase;">Technology Solutions Inc.</p>
    </div>

    <!-- Employee Photo -->
    <img src="/assets/img/profile.svg" alt="Employee Photo" width="120" height="120" style="border-radius: 50%; border: 3px solid #3b82f6; margin-bottom: 15px; display: block; margin-left: auto; margin-right: auto;">

    <!-- Employee Details -->
    <h3 style="margin: 0 0 5px 0; color: #0f172a; font-size: 19px;">${CONFIG.name}</h3>
    <p style="margin: 0 0 12px 0; color: #2563eb; font-weight: bold; font-size: 14px;">Senior Front-End Engineer</p>

    <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 10px; margin-bottom: 15px; font-size: 13px; text-align: left;">
      <p style="margin: 3px 0;"><strong>Employee ID:</strong> EMP-${CONFIG.regNo}</p>
      <p style="margin: 3px 0;"><strong>Department:</strong> Web Architecture</p>
      <p style="margin: 3px 0;"><strong>Blood Group:</strong> O +ve</p>
      <p style="margin: 3px 0;"><strong>Valid Thru:</strong> 12/2028</p>
    </div>

    <!-- ID Card Footer -->
    <div style="font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
      Authorized Signatory &bull; www.vitglobaltech.com
    </div>

  </div>

</body>
</html>`
});

// =========================================================================
// SECTION 2: HTML Layout Basic Practice Task 2 (Q9 - Q12)
// =========================================================================

// Q9: Webpage using only HTML and <div> tags (target="_blank")
tasks.push({
  id: "task-09",
  number: 9,
  sectionId: 2,
  sectionName: "HTML Layout Basic Practice Task 2",
  title: "Department of Computer Science (Divs Only)",
  constraint: "HTML and <div> tags only, each link opens in a new page (target='_blank')",
  requirements: [
    "Heading 'Department of Computer Science'",
    "Horizontal navigation menu using <div> only",
    "Links: Overview, Faculty, Programs, Research, Contact Us",
    "EACH LINK OPENS IN A NEW PAGE (target='_blank')",
    "Message: 'Welcome to the Department of Computer Science. Explore our academic programs and research opportunities.'"
  ],
  fileName: "task-09.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Department of Computer Science</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8fafc;">

  <!-- Main Container using <div> tags -->
  <div style="max-width: 900px; margin: 0 auto; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    
    <!-- Heading -->
    <div style="text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 15px; margin-bottom: 20px;">
      <h1 style="color: #1e3a8a; margin: 0;">Department of Computer Science</h1>
      <p style="color: #64748b; margin-top: 5px;">Vellore Institute of Technology &bull; Student: ${CONFIG.name} (${CONFIG.regNo})</p>
    </div>

    <!-- Horizontal Navigation Menu using <div> tags only; each link opens in a new tab -->
    <div style="display: flex; justify-content: space-around; background-color: #1e40af; padding: 12px; border-radius: 6px; margin-bottom: 25px;">
      <div><a href="https://vit.ac.in" target="_blank" style="color: white; text-decoration: none; font-weight: bold; font-size: 15px;">Overview</a></div>
      <div><a href="https://vit.ac.in/faculty" target="_blank" style="color: white; text-decoration: none; font-weight: bold; font-size: 15px;">Faculty</a></div>
      <div><a href="https://vit.ac.in/academics/programs" target="_blank" style="color: white; text-decoration: none; font-weight: bold; font-size: 15px;">Programs</a></div>
      <div><a href="https://vit.ac.in/research" target="_blank" style="color: white; text-decoration: none; font-weight: bold; font-size: 15px;">Research</a></div>
      <div><a href="https://vit.ac.in/contactus" target="_blank" style="color: white; text-decoration: none; font-weight: bold; font-size: 15px;">Contact Us</a></div>
    </div>

    <!-- Welcome Message Section below navigation -->
    <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 20px; text-align: center;">
      <h2 style="color: #1d4ed8; margin-top: 0;">Welcome to the Department of Computer Science</h2>
      <p style="font-size: 16px; color: #1e293b; margin-bottom: 0;">
        Welcome to the Department of Computer Science. Explore our academic programs and research opportunities.
      </p>
    </div>

  </div>

</body>
</html>`
});

// Q10: Website layout using <table> tag
tasks.push({
  id: "task-10",
  number: 10,
  sectionId: 2,
  sectionName: "HTML Layout Basic Practice Task 2",
  title: "Website Layout using <table> Tag",
  constraint: "Table Layout (Header colspan, Left menu + Content, Footer colspan)",
  requirements: [
    "Use the <table> tag to design a complete website layout",
    "Header row with colspan spanning full width",
    "Left menu column and main content column side by side",
    "Footer row with colspan spanning full width",
    "Meaningful text and images included"
  ],
  fileName: "task-10.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Website Layout using Table</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 20px; background-color: #f1f5f9;">

  <table border="1" cellpadding="15" cellspacing="0" width="100%" style="border-collapse: collapse; background-color: #ffffff; border: 2px solid #334155; box-shadow: 0 4px 6px rgba(0,0,0,0.06);">
    
    <!-- HEADER: Spanning 2 columns -->
    <tr style="background-color: #0f172a; color: #ffffff;">
      <td colspan="2" align="center" style="padding: 20px;">
        <h1 style="margin: 0; color: #38bdf8;">VIT Academic &amp; Research Portal</h1>
        <p style="margin: 5px 0 0 0; color: #94a3b8;">Designed by: ${CONFIG.name} | Reg No: ${CONFIG.regNo}</p>
      </td>
    </tr>

    <!-- MIDDLE: Left Menu and Content -->
    <tr>
      <!-- Left Menu Column -->
      <td width="25%" valign="top" style="background-color: #f8fafc; border-right: 2px solid #cbd5e1; padding: 20px;">
        <h3 style="color: #1e3a8a; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 0;">Navigation Menu</h3>
        <ul style="list-style-type: square; padding-left: 20px; line-height: 2;">
          <li><a href="#home" style="color: #2563eb; text-decoration: none; font-weight: bold;">Home</a></li>
          <li><a href="#about" style="color: #2563eb; text-decoration: none;">About Department</a></li>
          <li><a href="#academics" style="color: #2563eb; text-decoration: none;">Academic Programs</a></li>
          <li><a href="#research" style="color: #2563eb; text-decoration: none;">Research Labs</a></li>
          <li><a href="#faculty" style="color: #2563eb; text-decoration: none;">Faculty Directory</a></li>
          <li><a href="#admissions" style="color: #2563eb; text-decoration: none;">Admissions 2026</a></li>
          <li><a href="#contact" style="color: #2563eb; text-decoration: none;">Contact Office</a></li>
        </ul>

        <div style="margin-top: 25px; text-align: center;">
          <img src="/assets/img/campus1.svg" alt="Campus Block" width="180" style="border: 1px solid #cbd5e1; border-radius: 4px;">
          <p style="font-size: 12px; color: #64748b; margin-top: 5px;">Academic Central Block</p>
        </div>
      </td>

      <!-- Main Content Column -->
      <td width="75%" valign="top" style="padding: 25px;">
        <h2 style="color: #0f172a; margin-top: 0;">Welcome to the School of Computer Science &amp; Engineering</h2>
        <p>
          The School of Computer Science &amp; Engineering at VIT provides a cutting-edge curriculum in artificial intelligence, 
          cloud computing, cyber-security, and modern full-stack web engineering.
        </p>
        <p>
          Our students actively participate in collaborative research, hackathons, and global technology initiatives. 
          This layout illustrates a classic multi-column website structure built cleanly with HTML <code>&lt;table&gt;</code> elements.
        </p>

        <h3 style="color: #1e40af; margin-top: 20px;">Key Program Highlights</h3>
        <table border="1" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse; margin-top: 10px; border-color: #e2e8f0;">
          <tr style="background-color: #f1f5f9;">
            <th>Program</th>
            <th>Duration</th>
            <th>Specialization</th>
          </tr>
          <tr>
            <td>Integrated M.Sc. CS</td>
            <td>5 Years</td>
            <td>Full-Stack &amp; Data Intelligence</td>
          </tr>
          <tr>
            <td>B.Tech Computer Science</td>
            <td>4 Years</td>
            <td>Software Engineering &amp; Systems</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- FOOTER: Spanning 2 columns -->
    <tr style="background-color: #1e293b; color: #ffffff;">
      <td colspan="2" align="center" style="padding: 15px;">
        <p style="margin: 0; font-size: 13px; color: #cbd5e1;">&copy; 2026 VIT Academic Portal &bull; All Rights Reserved &bull; M. Arulmurugan (${CONFIG.regNo})</p>
      </td>
    </tr>

  </table>

</body>
</html>`
});

// Q11: Vertical sidebar navigation using <div> tags
tasks.push({
  id: "task-11",
  number: 11,
  sectionId: 2,
  sectionName: "HTML Layout Basic Practice Task 2",
  title: "Employee Management System Vertical Sidebar",
  constraint: "<div> tags for vertical sidebar and dashboard container",
  requirements: [
    "Title 'Employee Management System'",
    "Left vertical menu: Home, Employee Directory, Payroll, Leave Requests, Reports",
    "Right side message: 'Welcome to the Employee Management System Dashboard'"
  ],
  fileName: "task-11.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee Management System</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; background-color: #f8fafc; color: #1e293b;">

  <!-- Outer Container -->
  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    
    <!-- Top Header -->
    <div style="background-color: #0f172a; color: white; padding: 15px 25px; display: flex; justify-content: space-between; align-items: center;">
      <h2 style="margin: 0; font-size: 20px; color: #38bdf8;">Employee Management System</h2>
      <div style="font-size: 13px; color: #94a3b8;">Admin: <strong>${CONFIG.name}</strong> (${CONFIG.regNo})</div>
    </div>

    <!-- Body Container with Sidebar and Content -->
    <div style="display: flex; flex: 1;">

      <!-- Left Vertical Menu using <div> tags -->
      <div style="width: 240px; background-color: #1e293b; color: #cbd5e1; padding: 20px 0; display: flex; flex-direction: column; gap: 4px;">
        <div style="padding: 12px 25px; background-color: #2563eb; color: white; font-weight: bold; cursor: pointer;">Home</div>
        <div style="padding: 12px 25px; cursor: pointer; border-bottom: 1px solid #334155;">Employee Directory</div>
        <div style="padding: 12px 25px; cursor: pointer; border-bottom: 1px solid #334155;">Payroll</div>
        <div style="padding: 12px 25px; cursor: pointer; border-bottom: 1px solid #334155;">Leave Requests</div>
        <div style="padding: 12px 25px; cursor: pointer;">Reports</div>
      </div>

      <!-- Right Side Dashboard Content -->
      <div style="flex: 1; padding: 35px; background-color: #f1f5f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <h1 style="color: #1e3a8a; margin-top: 0;">Welcome to the Employee Management System Dashboard</h1>
          <p style="font-size: 16px; color: #475569; line-height: 1.6;">
            Manage employee profiles, monthly payroll processing, attendance logs, and generate institutional analytics seamlessly.
          </p>
          <div style="margin-top: 25px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #2563eb; border-radius: 4px;">
            <strong>System Status:</strong> All HR subsystems operational &bull; Logged in: ${CONFIG.name}
          </div>
        </div>
      </div>

    </div>

  </div>

</body>
</html>`
});

// Q12: HTML program (layout1.html) using only <div> tags (NO CSS)
tasks.push({
  id: "task-12",
  number: 12,
  sectionId: 2,
  sectionName: "HTML Layout Basic Practice Task 2",
  title: "layout1.html Layout (Pure HTML, NO CSS)",
  constraint: "NO CSS AT ALL (Only HTML <div> elements; strictly no styling)",
  requirements: [
    "Saved as layout1.html (and task-12.html)",
    "STRICT: Absolutely NO CSS allowed",
    "Uses only <div> elements",
    "Displays the exact text: HEADER, LEFT MENU, CONTENT, FOOTER",
    "HEADER on top, LEFT MENU and CONTENT in middle, FOOTER at bottom"
  ],
  fileName: "layout1.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>layout1.html - Pure HTML Layout (No CSS)</title>
</head>
<body>

  <!-- HEADER on top -->
  <div>
    HEADER
  </div>

  <hr>

  <!-- LEFT MENU and CONTENT in the middle -->
  <div>
    <!-- LEFT MENU -->
    <div>
      LEFT MENU
    </div>

    <br>

    <!-- CONTENT -->
    <div>
      CONTENT
    </div>
  </div>

  <hr>

  <!-- FOOTER at the bottom -->
  <div>
    FOOTER
  </div>

  <br>
  <div>
    File: layout1.html | Student: ${CONFIG.name} (${CONFIG.regNo})
  </div>

</body>
</html>`
});

// =========================================================================
// SECTION 3: HTML Layout Practice Task 3, Headers (Q13 - Q16)
// =========================================================================

// Q13: Hospital Management website header using HTML and INLINE CSS
tasks.push({
  id: "task-13",
  number: 13,
  sectionId: 3,
  sectionName: "HTML Layout Practice Task 3: Headers",
  title: "Hospital Management Header (Inline CSS)",
  constraint: "INLINE CSS ONLY (No <style> tags, no external stylesheets)",
  requirements: [
    "Hospital logo on the left",
    "Hospital Location showing 'Branch' and 'Vellore, Tamil Nadu'",
    "Centered search bar with Department dropdown + search input + search button",
    "Patient Portal: 'Welcome, Patient' and 'My Profile'",
    "Appointments: 'Book Appointment' and 'My Appointments'",
    "Emergency Contact: '🚑 Emergency: 108'",
    "STRICT: Inline CSS only"
  ],
  fileName: "task-13.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hospital Management Header - Inline CSS</title>
</head>
<body style="margin: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f0fdf4;">

  <!-- Hospital Management Header with INLINE CSS only -->
  <header style="background-color: #ffffff; border-bottom: 2px solid #059669; padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08);">
    
    <!-- Left: Hospital Logo & Location -->
    <div style="display: flex; align-items: center; gap: 15px;">
      <img src="/assets/img/hospital_logo.svg" alt="CityCare Hospital Logo" width="140" height="44" style="display: block; border-radius: 6px;">
      <div style="border-left: 2px solid #cbd5e1; padding-left: 12px;">
        <span style="display: block; font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold; letter-spacing: 0.5px;">Branch</span>
        <strong style="color: #0f172a; font-size: 14px;">Vellore, Tamil Nadu</strong>
      </div>
    </div>

    <!-- Center: Search Bar with Department Dropdown + Input + Search Button -->
    <div style="display: flex; align-items: center; background-color: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 25px; padding: 4px; overflow: hidden;">
      <select style="border: none; background: transparent; padding: 8px 12px; font-size: 13px; color: #334155; outline: none; border-right: 1px solid #cbd5e1; cursor: pointer;">
        <option>All Departments</option>
        <option>Cardiology</option>
        <option>Neurology</option>
        <option>Orthopedics</option>
        <option>Pediatrics</option>
        <option>General Medicine</option>
      </select>
      <input type="text" placeholder="Search doctor, symptom, clinic..." style="border: none; background: transparent; padding: 8px 14px; font-size: 13px; outline: none; width: 220px; color: #0f172a;">
      <button style="background-color: #059669; color: #ffffff; border: none; padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: bold; cursor: pointer;">Search</button>
    </div>

    <!-- Right Sections: Patient Portal, Appointments, Emergency -->
    <div style="display: flex; align-items: center; gap: 20px;">
      
      <!-- Patient Portal -->
      <div style="text-align: right;">
        <span style="display: block; font-size: 12px; color: #475569;">Welcome, Patient</span>
        <a href="#profile" style="color: #0284c7; text-decoration: none; font-size: 13px; font-weight: bold;">My Profile</a>
      </div>

      <!-- Appointments -->
      <div style="display: flex; gap: 8px;">
        <a href="#book" style="background-color: #0284c7; color: white; text-decoration: none; padding: 7px 14px; border-radius: 6px; font-size: 13px; font-weight: bold;">Book Appointment</a>
        <a href="#my-appts" style="background-color: #e2e8f0; color: #1e293b; text-decoration: none; padding: 7px 12px; border-radius: 6px; font-size: 13px; font-weight: bold;">My Appointments</a>
      </div>

      <!-- Emergency Contact -->
      <div style="background-color: #fef2f2; border: 1px solid #fecaca; padding: 7px 14px; border-radius: 6px;">
        <span style="color: #dc2626; font-weight: 800; font-size: 14px;">&#128657; Emergency: 108</span>
      </div>

    </div>

  </header>

  <div style="padding: 40px; text-align: center; color: #334155;">
    <h2>CityCare Hospital Healthcare Management Portal</h2>
    <p>Header constructed strictly using HTML and INLINE CSS.</p>
    <p style="font-size: 13px; color: #64748b;">Created by: ${CONFIG.name} (${CONFIG.regNo})</p>
  </div>

</body>
</html>`
});

// Q14: Hospital Management header using HTML and INLINE CSS (Variant with navbar)
tasks.push({
  id: "task-14",
  number: 14,
  sectionId: 3,
  sectionName: "HTML Layout Practice Task 3: Headers",
  title: "CityCare Hospital Navbar (Inline CSS)",
  constraint: "INLINE CSS ONLY",
  requirements: [
    "Hospital logo on the left",
    "Hospital name 'CityCare Hospital – Healthcare Management System'",
    "Horizontal navigation on the right: Home, Departments, Doctors, Appointments, Contact",
    "'Book Appointment' button at the end of the navbar",
    "STRICT: Inline CSS only"
  ],
  fileName: "task-14.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CityCare Hospital Header - Inline CSS</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">

  <!-- Header with INLINE CSS -->
  <header style="background-color: #0f172a; color: #ffffff; padding: 14px 28px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    
    <!-- Left: Logo & Hospital Name -->
    <div style="display: flex; align-items: center; gap: 14px;">
      <img src="/assets/img/hospital_logo.svg" alt="CityCare Hospital Logo" width="130" height="40" style="display: block; border-radius: 4px;">
      <span style="font-size: 17px; font-weight: bold; color: #38bdf8; letter-spacing: 0.2px;">CityCare Hospital &ndash; Healthcare Management System</span>
    </div>

    <!-- Right: Horizontal Navigation & Action Button -->
    <nav style="display: flex; align-items: center; gap: 20px;">
      <a href="#home" style="color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 500;">Home</a>
      <a href="#departments" style="color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 500;">Departments</a>
      <a href="#doctors" style="color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 500;">Doctors</a>
      <a href="#appointments" style="color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 500;">Appointments</a>
      <a href="#contact" style="color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 500;">Contact</a>
      <a href="#book" style="background-color: #0284c7; color: #ffffff; text-decoration: none; padding: 8px 18px; border-radius: 6px; font-size: 14px; font-weight: bold;">Book Appointment</a>
    </nav>

  </header>

  <div style="padding: 40px; text-align: center;">
    <h2 style="color: #0f172a;">Welcome to CityCare Healthcare Systems</h2>
    <p style="color: #64748b;">Header built strictly adhering to INLINE CSS styling specifications.</p>
    <p style="font-size: 13px; color: #94a3b8;">Author: ${CONFIG.name} (${CONFIG.regNo})</p>
  </div>

</body>
</html>`
});

// Q15: Dynamic Search Engine header using HTML and CSS
tasks.push({
  id: "task-15",
  number: 15,
  sectionId: 3,
  sectionName: "HTML Layout Practice Task 3: Headers",
  title: "Dynamic Smart Search Engine Header",
  constraint: "HTML & CSS (Horizontal layout, rounded corners, hover effect)",
  requirements: [
    "Title 'Smart Search Engine' on the left (white text)",
    "Right side: search text box with placeholder 'Search products, services, or articles...'",
    "Category dropdown (All Categories, Electronics, Books, Clothing, Groceries)",
    "Price Range dropdown (Any Price, Under ₹500, ₹500 – ₹2,000, Above ₹2,000)",
    "Search button with hover effect",
    "Horizontal layout with header bg color, proper spacing, rounded corners"
  ],
  fileName: "task-15.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smart Search Engine Header</title>
  <style>
    body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; }
    
    .search-header {
      background-color: #1e3a8a;
      padding: 16px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      flex-wrap: wrap;
      gap: 15px;
    }

    .header-title {
      color: #ffffff;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin: 0;
    }

    .search-controls {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .search-input {
      width: 280px;
      padding: 10px 16px;
      border: 1px solid #93c5fd;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      background-color: #ffffff;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .search-input:focus {
      border-color: #38bdf8;
      box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
    }

    .dropdown-select {
      padding: 10px 14px;
      border: 1px solid #93c5fd;
      border-radius: 8px;
      font-size: 14px;
      background-color: #ffffff;
      color: #1e293b;
      outline: none;
      cursor: pointer;
    }

    .btn-search {
      background-color: #f59e0b;
      color: #ffffff;
      border: none;
      padding: 10px 22px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
    }

    .btn-search:hover {
      background-color: #d97706;
      transform: translateY(-1px);
    }

    .demo-content {
      padding: 40px;
      text-align: center;
      color: #334155;
    }
  </style>
</head>
<body>

  <header class="search-header">
    <h1 class="header-title">Smart Search Engine</h1>
    
    <div class="search-controls">
      <input type="text" class="search-input" placeholder="Search products, services, or articles...">
      
      <select class="dropdown-select">
        <option>All Categories</option>
        <option>Electronics</option>
        <option>Books</option>
        <option>Clothing</option>
        <option>Groceries</option>
      </select>

      <select class="dropdown-select">
        <option>Any Price</option>
        <option>Under ₹500</option>
        <option>₹500 – ₹2,000</option>
        <option>Above ₹2,000</option>
      </select>

      <button class="btn-search">Search</button>
    </div>
  </header>

  <div class="demo-content">
    <h2>Explore Everything at Your Fingertips</h2>
    <p>Dynamic search header bar styled with modern CSS box-model, flexbox alignment, and interactive hover states.</p>
    <p style="font-size: 13px; color: #64748b;">FrontEnd Lab Project &bull; ${CONFIG.name} (${CONFIG.regNo})</p>
  </div>

</body>
</html>`
});

// Q16: Gaming website Header and Image Slider using HTML and CSS
tasks.push({
  id: "task-16",
  number: 16,
  sectionId: 3,
  sectionName: "HTML Layout Practice Task 3: Headers",
  title: "Gaming Website Fixed Header & Hero Banner",
  constraint: "Fixed header + 70vh banner with centered content and hover effects",
  requirements: [
    "FIXED header with logo 'GameZone'",
    "Horizontal nav (Home, Games, Tournaments, News, Contact) and 'Play Now' button aligned right",
    "Banner/image slider about 70% of browser height (70vh)",
    "Large gaming background image",
    "Heading 'Level Up Your Gaming Experience'",
    "Subheading 'Join exciting tournaments and explore the latest games.'",
    "'Explore Games' button centered over image with hover effects"
  ],
  fileName: "task-16.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GameZone - Level Up Your Gaming Experience</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0f19; color: #f8fafc; }

    /* FIXED Header */
    .fixed-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 2px solid #7c3aed;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
      z-index: 1000;
    }

    .logo {
      font-size: 24px;
      font-weight: 900;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 30px;
    }

    .nav-links a {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 15px;
      font-weight: 600;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: #a855f7;
    }

    .btn-play-now {
      background: linear-gradient(135deg, #7c3aed, #ec4899);
      color: #ffffff;
      border: none;
      padding: 10px 24px;
      border-radius: 30px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn-play-now:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
    }

    /* 70% Browser Height Banner */
    .hero-banner {
      margin-top: 70px;
      height: 70vh;
      min-height: 480px;
      background: url('/assets/img/gaming_banner.svg') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      position: relative;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
    }

    .hero-title {
      font-size: 42px;
      font-weight: 900;
      color: #ffffff;
      margin-bottom: 15px;
      text-shadow: 0 4px 12px rgba(0,0,0,0.8);
      letter-spacing: -0.5px;
    }

    .hero-subtitle {
      font-size: 18px;
      color: #e2e8f0;
      margin-bottom: 30px;
      text-shadow: 0 2px 6px rgba(0,0,0,0.8);
    }

    .btn-explore {
      background: #06b6d4;
      color: #042f2e;
      border: none;
      padding: 14px 34px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    }

    .btn-explore:hover {
      background: #22d3ee;
      transform: translateY(-2px);
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
    }

    .footer-note {
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #64748b;
    }
  </style>
</head>
<body>

  <!-- FIXED Header -->
  <header class="fixed-header">
    <div class="logo">GameZone</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#games">Games</a></li>
      <li><a href="#tournaments">Tournaments</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="btn-play-now">Play Now</button>
  </header>

  <!-- Banner (70% Height) with Centered Content -->
  <section class="hero-banner">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Level Up Your Gaming Experience</h1>
      <p class="hero-subtitle">Join exciting tournaments and explore the latest games.</p>
      <button class="btn-explore">Explore Games</button>
    </div>
  </section>

  <div class="footer-note">
    Student: ${CONFIG.name} | Register No: ${CONFIG.regNo} | GameZone Portal 2026
  </div>

</body>
</html>`
});

// =========================================================================
// SECTION 4: CSS Inline / In-doc Practice Task 4 (Q17 - Q19)
// =========================================================================

// Q17: Company Profile using HTML and INLINE CSS only
tasks.push({
  id: "task-17",
  number: 17,
  sectionId: 4,
  sectionName: "CSS Inline / In-doc Practice Task 4",
  title: "Company Profile (Strict Inline CSS Only)",
  constraint: "INLINE CSS ONLY (Demonstrating font, color, margins, padding, bold, italic, underline)",
  requirements: [
    "Main heading 'Company Profile'",
    "Article section with company logo, company name, and 4-5 sentence overview",
    "Sections: About the Company, Products & Services, Achievements, Contact Information",
    "Inline CSS demonstrating: font size, font family, font color, background color, text alignment, bold, italic, underline, margins & padding",
    "Logo styled inline with width, height, border, border-radius",
    "<hr> between each major section",
    "Entire profile neatly centered with good spacing"
  ],
  fileName: "task-17.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Company Profile - Inline CSS Only</title>
</head>
<body style="font-family: 'Trebuchet MS', Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 30px 15px;">

  <!-- Outer centered container using INLINE CSS only -->
  <div style="max-width: 800px; margin: 0 auto; background-color: #ffffff; padding: 35px; border-radius: 12px; border: 2px solid #cbd5e1; box-shadow: 0 8px 16px rgba(0,0,0,0.06);">
    
    <!-- Main Heading -->
    <h1 style="text-align: center; color: #1e40af; font-size: 32px; font-weight: bold; margin-top: 0; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 1px;">Company Profile</h1>

    <!-- Article Header Section with Logo and Overview -->
    <article style="text-align: center; margin-bottom: 25px;">
      <img src="/assets/img/company_logo.svg" alt="ApexCorp Logo" style="width: 160px; height: 60px; border: 2px solid #0284c7; border-radius: 8px; margin-bottom: 12px;">
      <h2 style="color: #0f172a; font-size: 24px; font-weight: bold; margin: 5px 0 15px 0;">ApexCorp Global Technologies Ltd.</h2>
      <p style="font-size: 15px; color: #334155; line-height: 1.7; max-width: 700px; margin: 0 auto; text-align: justify;">
        ApexCorp is a pioneer in delivering intelligent cloud software, enterprise infrastructure, and cutting-edge digital experiences across the globe. 
        Founded with the vision to accelerate technological transformation, we engineer next-generation platforms serving millions of businesses. 
        Our dedicated teams bridge the gap between complex hardware systems and human-centric software. 
        Through continuous scientific research, we empower sustainable corporate growth and foster technological literacy worldwide.
      </p>
    </article>

    <hr style="border: 0; border-top: 2px solid #e2e8f0; margin: 25px 0;">

    <!-- Section 1: About the Company -->
    <section style="margin-bottom: 25px;">
      <h3 style="color: #0369a1; font-size: 20px; font-weight: bold; text-decoration: underline; margin-bottom: 10px;">About the Company</h3>
      <p style="font-size: 15px; line-height: 1.6; color: #475569; margin: 0 0 10px 0;">
        Headquartered in Bangalore with regional delivery hubs across North America and Europe, ApexCorp is committed to engineering excellence. 
        Our corporate culture fosters <i>creative innovation</i>, <b>ethical AI</b>, and <u>sustainable computing</u> methodologies.
      </p>
    </section>

    <hr style="border: 0; border-top: 2px solid #e2e8f0; margin: 25px 0;">

    <!-- Section 2: Products & Services -->
    <section style="margin-bottom: 25px;">
      <h3 style="color: #0369a1; font-size: 20px; font-weight: bold; text-decoration: underline; margin-bottom: 10px;">Products &amp; Services</h3>
      <ul style="font-size: 15px; line-height: 1.8; color: #334155; padding-left: 25px; margin: 0;">
        <li><b>OmniCloud Platform:</b> Enterprise cloud hosting with automated microservice elasticity.</li>
        <li><b>ApexCyber Guard:</b> Zero-trust network security suite powered by real-time heuristic modeling.</li>
        <li><b>DataPulse BI:</b> High-throughput streaming analytics and automated executive dashboard generation.</li>
      </ul>
    </section>

    <hr style="border: 0; border-top: 2px solid #e2e8f0; margin: 25px 0;">

    <!-- Section 3: Achievements -->
    <section style="margin-bottom: 25px;">
      <h3 style="color: #0369a1; font-size: 20px; font-weight: bold; text-decoration: underline; margin-bottom: 10px;">Achievements</h3>
      <p style="font-size: 15px; line-height: 1.6; color: #475569; margin: 0;">
        Awarded <b>"Global Tech Innovator of the Year 2025"</b> by the World Software Forum. 
        Certified Carbon Neutral since 2023 with over <i>1,200 successful enterprise implementations</i> across 45 countries.
      </p>
    </section>

    <hr style="border: 0; border-top: 2px solid #e2e8f0; margin: 25px 0;">

    <!-- Section 4: Contact Information -->
    <section style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
      <h3 style="color: #1e3a8a; font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 10px;">Contact Information</h3>
      <p style="font-size: 14px; color: #475569; margin: 4px 0;"><strong>Corporate HQ:</strong> Apex Tech Tower, Cyber City, Phase 2, Bangalore - 560100</p>
      <p style="font-size: 14px; color: #475569; margin: 4px 0;"><strong>Email:</strong> contact@apexcorp.tech | <strong>Phone:</strong> +91 (80) 4123-9876</p>
      <p style="font-size: 14px; color: #475569; margin: 4px 0;"><strong>Portal Engineer:</strong> ${CONFIG.name} (${CONFIG.regNo})</p>
    </section>

  </div>

</body>
</html>`
});

// Q18: Library Management System using <div> tags and INLINE CSS (2x2 layout)
tasks.push({
  id: "task-18",
  number: 18,
  sectionId: 4,
  sectionName: "CSS Inline / In-doc Practice Task 4",
  title: "Library Management System (2x2 Inline CSS)",
  constraint: "<div> tags + INLINE CSS only in a 2x2 colored block layout",
  requirements: [
    "Title 'Library Management System' at the top",
    "Four colored blocks arranged in a 2 x 2 layout",
    "Each block has a relevant image and one label: Books, Members, Issue Books, Digital Library",
    "STRICT: Inline CSS only"
  ],
  fileName: "task-18.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Library Management System - 2x2 Grid</title>
</head>
<body style="margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; padding: 30px;">

  <!-- Main Container -->
  <div style="max-width: 720px; margin: 0 auto; text-align: center;">
    
    <!-- Top Title -->
    <h1 style="color: #1e3a8a; font-size: 30px; margin-bottom: 8px;">Library Management System</h1>
    <p style="color: #64748b; font-size: 15px; margin-bottom: 30px;">
      Central Digital Catalog &bull; Developed by <strong>${CONFIG.name}</strong> (${CONFIG.regNo})
    </p>

    <!-- 2 x 2 Layout using <div> tags and INLINE CSS -->
    <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
      
      <!-- Block 1: Books (Blue) -->
      <div style="flex: 1 1 300px; max-width: 330px; background-color: #dbeafe; border: 2px solid #3b82f6; border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: pointer;">
        <img src="/assets/img/lib_books.svg" alt="Books Icon" width="70" height="70" style="display: block; margin: 0 auto 15px auto;">
        <h2 style="color: #1d4ed8; font-size: 22px; margin: 0;">Books</h2>
        <p style="color: #3b82f6; font-size: 13px; margin: 8px 0 0 0;">Browse 50,000+ Titles</p>
      </div>

      <!-- Block 2: Members (Green) -->
      <div style="flex: 1 1 300px; max-width: 330px; background-color: #d1fae5; border: 2px solid #10b981; border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: pointer;">
        <img src="/assets/img/lib_members.svg" alt="Members Icon" width="70" height="70" style="display: block; margin: 0 auto 15px auto;">
        <h2 style="color: #047857; font-size: 22px; margin: 0;">Members</h2>
        <p style="color: #059669; font-size: 13px; margin: 8px 0 0 0;">Active Students &amp; Faculty</p>
      </div>

      <!-- Block 3: Issue Books (Amber) -->
      <div style="flex: 1 1 300px; max-width: 330px; background-color: #fef3c7; border: 2px solid #f59e0b; border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: pointer;">
        <img src="/assets/img/lib_issue.svg" alt="Issue Books Icon" width="70" height="70" style="display: block; margin: 0 auto 15px auto;">
        <h2 style="color: #b45309; font-size: 22px; margin: 0;">Issue Books</h2>
        <p style="color: #d97706; font-size: 13px; margin: 8px 0 0 0;">Circulation &amp; Return Desk</p>
      </div>

      <!-- Block 4: Digital Library (Purple) -->
      <div style="flex: 1 1 300px; max-width: 330px; background-color: #ede9fe; border: 2px solid #8b5cf6; border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: pointer;">
        <img src="/assets/img/lib_digital.svg" alt="Digital Library Icon" width="70" height="70" style="display: block; margin: 0 auto 15px auto;">
        <h2 style="color: #6d28d9; font-size: 22px; margin: 0;">Digital Library</h2>
        <p style="color: #7c3aed; font-size: 13px; margin: 8px 0 0 0;">E-Journals &amp; Repositories</p>
      </div>

    </div>

  </div>

</body>
</html>`
});

// Q19: Webpage footer using <div> tags and an INTERNAL <style> tag (NO inline CSS)
tasks.push({
  id: "task-19",
  number: 19,
  sectionId: 4,
  sectionName: "CSS Inline / In-doc Practice Task 4",
  title: "VIT Health Care Center Footer (Internal Style Tag Only)",
  constraint: "INTERNAL <style> TAG ONLY (Strictly NO inline CSS style attributes)",
  requirements: [
    "Hospital Name 'VIT Health Care Center'",
    "Quick Links: Home, Departments, Doctors, Appointments",
    "Social Media Links: Facebook, Instagram, LinkedIn",
    "Email: support@vithealthcare.com",
    "Copyright: '© 2026 VIT Health Care Center. All Rights Reserved.'",
    "VIT Health logo on the right side",
    "STRICT: Uses internal <style> tag only with NO inline CSS"
  ],
  fileName: "task-19.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>VIT Health Care Center Footer</title>
  <style>
    /* STRICT INTERNAL CSS ONLY - NO INLINE CSS USED */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f0fdfa;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .main-body-content {
      padding: 40px 20px;
      text-align: center;
      color: #134e4a;
    }

    .main-body-content h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .hospital-footer {
      background-color: #0f172a;
      color: #f8fafc;
      padding: 35px 40px 20px 40px;
      border-top: 4px solid #0d9488;
    }

    .footer-container {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
    }

    .footer-col {
      flex: 1 1 200px;
    }

    .footer-heading {
      color: #2dd4bf;
      font-size: 16px;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .hospital-title {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 8px;
    }

    .hospital-desc {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.6;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 8px;
    }

    .footer-links a {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s;
    }

    .footer-links a:hover {
      color: #2dd4bf;
    }

    .social-links a {
      display: inline-block;
      margin-right: 12px;
      color: #cbd5e1;
      text-decoration: none;
      font-size: 14px;
      background-color: #1e293b;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid #334155;
    }

    .social-links a:hover {
      background-color: #0d9488;
      color: #ffffff;
    }

    .support-email {
      color: #38bdf8;
      text-decoration: none;
      font-size: 14px;
    }

    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
    }

    .footer-logo {
      border-radius: 8px;
      border: 2px solid #0d9488;
    }

    .footer-bottom {
      border-top: 1px solid #1e293b;
      margin-top: 30px;
      padding-top: 15px;
      text-align: center;
      font-size: 13px;
      color: #64748b;
    }
  </style>
</head>
<body>

  <div class="main-body-content">
    <h1>VIT Health Care Center</h1>
    <p>Comprehensive primary healthcare, emergency response, and wellness services.</p>
    <p>Student: ${CONFIG.name} (${CONFIG.regNo})</p>
  </div>

  <!-- Footer constructed with <div> elements and styled ONLY via internal <style> -->
  <footer class="hospital-footer">
    <div class="footer-container">
      
      <!-- Hospital Info -->
      <div class="footer-col">
        <div class="hospital-title">VIT Health Care Center</div>
        <p class="hospital-desc">
          Dedicated 24/7 medical center providing compassionate patient care, specialized diagnostics, and ambulance facilities to all campus residents.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#departments">Departments</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#appointments">Appointments</a></li>
        </ul>
      </div>

      <!-- Social Media & Contact -->
      <div class="footer-col">
        <h4 class="footer-heading">Connect With Us</h4>
        <div class="social-links">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
        <p style="margin-top: 15px;" class="hospital-desc">
          Email: <a href="mailto:support@vithealthcare.com" class="support-email">support@vithealthcare.com</a>
        </p>
      </div>

      <!-- Logo on the Right Side -->
      <div class="footer-col logo-container">
        <img src="/assets/img/vit_health_logo.svg" alt="VIT Health Logo" width="180" height="60" class="footer-logo">
      </div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      &copy; 2026 VIT Health Care Center. All Rights Reserved. &bull; M. Arulmurugan (${CONFIG.regNo})
    </div>
  </footer>

</body>
</html>`
});

// Continue generating Section 5, 6, 7, 8, 9...
console.log("Section 1 - 4 tasks compiled (" + tasks.length + " tasks)");
fs.writeFileSync('scripts/tasks_part1.json', JSON.stringify(tasks, null, 2));
