const fs = require('fs');
const path = require('path');

const CONFIG = {
  name: "M. Arulmurugan",
  regNo: "24MIC0121",
  subject: "FrontEnd Web Development Lab",
  courseCode: "CSE2004 / SWE1002",
  institution: "Vellore Institute of Technology (VIT)",
  campus: "Vellore Campus, Tamil Nadu",
  email: "arulmohandasarulmurugan@gmail.com",
  phone: "+91 98765 43210"
};

const tasks = [];

// =========================================================================
// SECTION 5: HTML Forms, Input Types Practice (Q20 - Q24)
// =========================================================================

// Q20: Employee Registration web page using HTML5
tasks.push({
  id: "task-20",
  number: 20,
  sectionId: 5,
  sectionName: "HTML Forms & Input Types Practice",
  title: "Employee Registration Form (HTML5)",
  constraint: "HTML5 Form Controls & Input Types",
  requirements: [
    "Employee Name (text), Employee ID (text), Email (email), Mobile (tel)",
    "Date of Birth (date), Gender (radio: Male, Female, Other)",
    "Department dropdown (select), Skills (checkboxes)",
    "Date of Joining (date), Address (textarea)",
    "Submit and Reset buttons"
  ],
  fileName: "task-20.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee Registration Web Page</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 30px; color: #1e293b; }
    .form-container { max-width: 650px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px rgba(0,0,0,0.06); }
    h2 { color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0; }
    .form-group { margin-bottom: 16px; }
    label { display: block; font-weight: 600; margin-bottom: 5px; font-size: 14px; }
    input[type="text"], input[type="email"], input[type="tel"], input[type="date"], select, textarea {
      width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none;
    }
    input:focus, select:focus, textarea:focus { border-color: #2563eb; }
    .radio-group, .checkbox-group { display: flex; gap: 18px; margin-top: 4px; font-size: 14px; }
    .radio-group label, .checkbox-group label { font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 5px; }
    .btn-row { display: flex; gap: 12px; margin-top: 24px; }
    .btn-submit { background-color: #2563eb; color: white; border: none; padding: 10px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-reset { background-color: #64748b; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-submit:hover { background-color: #1d4ed8; }
    .btn-reset:hover { background-color: #475569; }
  </style>
</head>
<body>

  <div class="form-container">
    <h2>Employee Registration Form</h2>
    <p style="font-size: 13px; color: #64748b; margin-top: -5px; margin-bottom: 20px;">
      Registered by HR Portal &bull; Lab Student: <strong>${CONFIG.name}</strong> (${CONFIG.regNo})
    </p>

    <form action="#" method="post">
      
      <div class="form-group">
        <label for="empName">Employee Name:</label>
        <input type="text" id="empName" name="empName" placeholder="e.g. M. Arulmurugan" required>
      </div>

      <div class="form-group">
        <label for="empId">Employee ID:</label>
        <input type="text" id="empId" name="empId" placeholder="e.g. EMP-24MIC0121" required>
      </div>

      <div class="form-group">
        <label for="empEmail">Email Address:</label>
        <input type="email" id="empEmail" name="empEmail" placeholder="employee@company.com" required>
      </div>

      <div class="form-group">
        <label for="empMobile">Mobile Number:</label>
        <input type="tel" id="empMobile" name="empMobile" pattern="[0-9]{10}" placeholder="10-digit mobile number" required>
      </div>

      <div class="form-group">
        <label for="empDob">Date of Birth:</label>
        <input type="date" id="empDob" name="empDob" required>
      </div>

      <div class="form-group">
        <label>Gender:</label>
        <div class="radio-group">
          <label><input type="radio" name="gender" value="Male" required> Male</label>
          <label><input type="radio" name="gender" value="Female"> Female</label>
          <label><input type="radio" name="gender" value="Other"> Other</label>
        </div>
      </div>

      <div class="form-group">
        <label for="empDept">Department:</label>
        <select id="empDept" name="empDept" required>
          <option value="">-- Select Department --</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Software Development">Software Development</option>
          <option value="Cloud Architecture">Cloud Architecture</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Human Resources">Human Resources</option>
        </select>
      </div>

      <div class="form-group">
        <label>Technical Skills:</label>
        <div class="checkbox-group">
          <label><input type="checkbox" name="skills" value="HTML5"> HTML5</label>
          <label><input type="checkbox" name="skills" value="CSS3"> CSS3</label>
          <label><input type="checkbox" name="skills" value="JavaScript"> JavaScript</label>
          <label><input type="checkbox" name="skills" value="Python"> Python</label>
        </div>
      </div>

      <div class="form-group">
        <label for="empDoj">Date of Joining:</label>
        <input type="date" id="empDoj" name="empDoj" required>
      </div>

      <div class="form-group">
        <label for="empAddress">Residential Address:</label>
        <textarea id="empAddress" name="empAddress" rows="3" placeholder="Enter complete address..." required></textarea>
      </div>

      <div class="btn-row">
        <button type="submit" class="btn-submit">Submit Registration</button>
        <button type="reset" class="btn-reset">Reset Form</button>
      </div>

    </form>
  </div>

</body>
</html>`
});

// Q21: Student Login page using HTML5 with <audio> playback
tasks.push({
  id: "task-21",
  number: 21,
  sectionId: 5,
  sectionName: "HTML Forms & Input Types Practice",
  title: "Student Login Page with Audio Instructions",
  constraint: "HTML5 Validation + Real <audio> Playback Element",
  requirements: [
    "Login form with Username or Email Address, Password",
    "Remember Me (checkbox), User Role (radio: Student / Faculty)",
    "'Forgot Password' and 'Create New Account' hyperlinks",
    "HTML5 input types and validation attributes",
    "<audio> element with playback controls explaining login instructions",
    "Login and Clear buttons"
  ],
  fileName: "task-21.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Login Page - HTML5</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 30px; color: #1e293b; }
    .login-card { max-width: 440px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    h2 { color: #1e40af; text-align: center; margin-top: 0; }
    .audio-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px; margin-bottom: 20px; text-align: center; }
    .audio-box p { font-size: 13px; color: #166534; font-weight: bold; margin: 0 0 8px 0; }
    audio { width: 100%; height: 36px; }
    .form-group { margin-bottom: 16px; }
    label { display: block; font-weight: 600; font-size: 13px; margin-bottom: 5px; }
    input[type="text"], input[type="password"] {
      width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none;
    }
    input:focus { border-color: #2563eb; }
    .role-group { display: flex; gap: 20px; margin: 6px 0; font-size: 14px; }
    .role-group label { font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 6px; }
    .remember-row { display: flex; align-items: center; justify-content: space-between; font-size: 13px; margin: 15px 0; }
    .remember-row label { font-weight: normal; display: flex; align-items: center; gap: 6px; margin: 0; cursor: pointer; }
    .remember-row a { color: #2563eb; text-decoration: none; font-weight: 600; }
    .btn-row { display: flex; gap: 10px; margin-top: 20px; }
    .btn-login { flex: 1; background-color: #2563eb; color: white; border: none; padding: 11px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-clear { flex: 1; background-color: #64748b; color: white; border: none; padding: 11px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-login:hover { background-color: #1d4ed8; }
    .btn-clear:hover { background-color: #475569; }
    .create-link { text-align: center; margin-top: 20px; font-size: 13px; }
    .create-link a { color: #2563eb; font-weight: bold; text-decoration: none; }
  </style>
</head>
<body>

  <div class="login-card">
    <h2>Student Portal Login</h2>
    <p style="text-align: center; font-size: 12px; color: #64748b; margin-top: -5px; margin-bottom: 15px;">
      VIT Academic Cloud &bull; ${CONFIG.name} (${CONFIG.regNo})
    </p>

    <!-- Embedded Audio Element with Playback Controls -->
    <div class="audio-box">
      <p>&#128266; Listen to Login Instructions:</p>
      <audio controls>
        <source src="/assets/media/instructions.wav" type="audio/wav">
        Your browser does not support the audio element.
      </audio>
    </div>

    <form action="#" method="post">
      
      <div class="form-group">
        <label for="username">Username or Email Address:</label>
        <input type="text" id="username" name="username" placeholder="e.g. 24mic0121 or student@vit.ac.in" required minlength="4">
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter secure password" required minlength="6">
      </div>

      <div class="form-group">
        <label>User Role:</label>
        <div class="role-group">
          <label><input type="radio" name="role" value="Student" checked required> Student</label>
          <label><input type="radio" name="role" value="Faculty"> Faculty</label>
        </div>
      </div>

      <div class="remember-row">
        <label><input type="checkbox" name="remember"> Remember Me</label>
        <a href="#forgot">Forgot Password?</a>
      </div>

      <div class="btn-row">
        <button type="submit" class="btn-login">Login</button>
        <button type="reset" class="btn-clear">Clear</button>
      </div>

      <div class="create-link">
        Don't have an account? <a href="#register">Create New Account</a>
      </div>

    </form>
  </div>

</body>
</html>`
});

// Q22: National Technical Symposium Registration Portal using HTML5 & Media
tasks.push({
  id: "task-22",
  number: 22,
  sectionId: 5,
  sectionName: "HTML Forms & Input Types Practice",
  title: "National Technical Symposium Registration Portal",
  constraint: "HTML5 Media (Video & Audio) + Form Validation Attributes",
  requirements: [
    "Participant Name, Register Number, College Name, Email ID, Mobile Number",
    "Date of Birth (date input), Gender (radio), Department (dropdown)",
    "Technical Skills (checkboxes), Upload Student ID Card (file input), Event Date (date input)",
    "Submit and Reset buttons",
    "Embedded introductory promotional <video> with controls",
    "Audio welcome message with controls",
    "Validation attributes: required, pattern, minlength, maxlength, placeholder"
  ],
  fileName: "task-22.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>National Technical Symposium Registration</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; color: #f8fafc; margin: 25px; line-height: 1.5; }
    .container { max-width: 750px; margin: 0 auto; background-color: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h1 { color: #38bdf8; text-align: center; margin-top: 0; font-size: 26px; }
    .symp-subtitle { text-align: center; color: #94a3b8; font-size: 14px; margin-bottom: 25px; }
    .media-card { background: #0b1329; border: 1px solid #334155; border-radius: 8px; padding: 18px; margin-bottom: 25px; text-align: center; }
    .media-card h3 { color: #f472b6; margin-top: 0; font-size: 16px; margin-bottom: 12px; }
    video { max-width: 100%; border-radius: 6px; border: 1px solid #475569; background: #000; }
    audio { width: 100%; margin-top: 10px; }
    .form-group { margin-bottom: 16px; }
    label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #cbd5e1; }
    input[type="text"], input[type="email"], input[type="tel"], input[type="date"], select, input[type="file"] {
      width: 100%; padding: 10px 12px; border: 1px solid #475569; border-radius: 6px; background-color: #0f172a; color: #f8fafc; font-size: 14px; box-sizing: border-box; outline: none;
    }
    input:focus, select:focus { border-color: #38bdf8; }
    .radio-row, .check-row { display: flex; gap: 20px; font-size: 14px; margin-top: 5px; flex-wrap: wrap; }
    .radio-row label, .check-row label { font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 6px; }
    .btn-row { display: flex; gap: 15px; margin-top: 25px; }
    .btn-submit { flex: 2; background-color: #0284c7; color: white; border: none; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 15px; }
    .btn-reset { flex: 1; background-color: #475569; color: white; border: none; padding: 12px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 15px; }
    .btn-submit:hover { background-color: #0369a1; }
    .btn-reset:hover { background-color: #334155; }
  </style>
</head>
<body>

  <div class="container">
    <h1>National Technical Symposium 2026</h1>
    <div class="symp-subtitle">
      VIT Annual TechFest &bull; Coordinator: <strong>${CONFIG.name}</strong> (${CONFIG.regNo})
    </div>

    <!-- Media Section: Promotional Video & Audio Welcome Message -->
    <div class="media-card">
      <h3>&#127916; Introductory Promotional Video</h3>
      <video controls poster="/assets/media/symposium_poster.svg" width="600" height="300">
        <source src="/assets/media/symposium_promo.mp4" type="video/mp4">
        <source src="/assets/media/symposium_promo.webm" type="video/webm">
        Your browser does not support video playback.
      </video>

      <h3 style="margin-top: 20px; color: #38bdf8;">&#127911; Audio Welcome Message</h3>
      <audio controls>
        <source src="/assets/media/welcome.wav" type="audio/wav">
        Your browser does not support the audio element.
      </audio>
    </div>

    <!-- Registration Form with full validation -->
    <form action="#" method="post" enctype="multipart/form-data">
      
      <div class="form-group">
        <label for="pName">Participant Full Name:</label>
        <input type="text" id="pName" name="pName" placeholder="Enter full name" required minlength="3" maxlength="50" pattern="[A-Za-z\\s]+">
      </div>

      <div class="form-group">
        <label for="pReg">College Register Number:</label>
        <input type="text" id="pReg" name="pReg" placeholder="e.g. 24MIC0121" required minlength="5" maxlength="15">
      </div>

      <div class="form-group">
        <label for="pCollege">College / Institution Name:</label>
        <input type="text" id="pCollege" name="pCollege" placeholder="e.g. Vellore Institute of Technology" required minlength="3">
      </div>

      <div class="form-group">
        <label for="pEmail">Official Email ID:</label>
        <input type="email" id="pEmail" name="pEmail" placeholder="participant@institution.edu" required>
      </div>

      <div class="form-group">
        <label for="pMobile">Mobile Number:</label>
        <input type="tel" id="pMobile" name="pMobile" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>
      </div>

      <div class="form-group">
        <label for="pDob">Date of Birth:</label>
        <input type="date" id="pDob" name="pDob" required>
      </div>

      <div class="form-group">
        <label>Gender:</label>
        <div class="radio-row">
          <label><input type="radio" name="gender" value="Male" required> Male</label>
          <label><input type="radio" name="gender" value="Female"> Female</label>
          <label><input type="radio" name="gender" value="Other"> Other</label>
        </div>
      </div>

      <div class="form-group">
        <label for="pDept">Department:</label>
        <select id="pDept" name="pDept" required>
          <option value="">-- Choose Department --</option>
          <option value="Computer Science & Engineering">Computer Science & Engineering</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics & Communication">Electronics & Communication</option>
          <option value="Electrical & Electronics">Electrical & Electronics</option>
        </select>
      </div>

      <div class="form-group">
        <label>Technical Skills / Interests:</label>
        <div class="check-row">
          <label><input type="checkbox" name="skills" value="Web Dev"> Web Development</label>
          <label><input type="checkbox" name="skills" value="AI/ML"> Artificial Intelligence</label>
          <label><input type="checkbox" name="skills" value="CyberSecurity"> Cyber Security</label>
          <label><input type="checkbox" name="skills" value="Cloud"> Cloud Computing</label>
        </div>
      </div>

      <div class="form-group">
        <label for="pIdCard">Upload Student ID Card (PDF / JPG / PNG):</label>
        <input type="file" id="pIdCard" name="pIdCard" accept=".pdf, .jpg, .jpeg, .png" required>
      </div>

      <div class="form-group">
        <label for="pEventDate">Event Participation Date:</label>
        <input type="date" id="pEventDate" name="pEventDate" value="2026-11-15" required>
      </div>

      <div class="btn-row">
        <button type="submit" class="btn-submit">Submit Symposium Registration</button>
        <button type="reset" class="btn-reset">Reset</button>
      </div>

    </form>
  </div>

</body>
</html>`
});

// Q23: Patient Registration Form using HTML5 and CSS3 with ALL 20 inputs
tasks.push({
  id: "task-23",
  number: 23,
  sectionId: 5,
  sectionName: "HTML Forms & Input Types Practice",
  title: "Patient Registration Form (All 20 HTML5 Inputs)",
  constraint: "ALL 20 Specified Inputs + CSS3 Box Model, Gradient, Grid/Flexbox",
  requirements: [
    "1 Patient Name (text), 2 Email (email), 3 Password (password), 4 Contact Number (tel)",
    "5 Age (number), 6 Date of Birth (date), 7 Appointment Time (time), 8 Date & Time (datetime-local)",
    "9 Personal Website/Reference (url), 10 Search Doctor (search), 11 Consultation Theme (color)",
    "12 Medical Record Upload (file), 13 Pain Level (range), 14 Gender (radio), 15 Allergies (checkbox)",
    "16 Blood Group (select), 17 Address (textarea), 18 Hidden Patient ID (hidden)",
    "19 Submit and Reset buttons, 20 Image Button (type=image) for payment",
    "CSS: gradient background, box model, rounded corners, shadows, Flexbox/Grid"
  ],
  fileName: "task-23.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Comprehensive Patient Registration Form - 20 Input Types</title>
  <style>
    body {
      margin: 0;
      padding: 30px 15px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0c4a6e 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-wrapper {
      max-width: 860px;
      width: 100%;
      background: #ffffff;
      border-radius: 16px;
      padding: 35px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    }

    .form-header {
      text-align: center;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 15px;
      margin-bottom: 25px;
    }

    .form-header h2 {
      margin: 0;
      color: #0369a1;
      font-size: 26px;
    }

    .form-header p {
      margin: 5px 0 0 0;
      color: #64748b;
      font-size: 13px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      gap: 18px 24px;
    }

    .field-box {
      display: flex;
      flex-direction: column;
    }

    .field-box.full-width {
      grid-column: 1 / -1;
    }

    label {
      font-size: 13px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 5px;
    }

    .input-control {
      padding: 9px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      background: #f8fafc;
    }

    .input-control:focus {
      border-color: #0284c7;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
    }

    .color-picker {
      height: 42px;
      padding: 3px 6px;
      cursor: pointer;
    }

    .range-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .radio-group, .checkbox-group {
      display: flex;
      gap: 15px;
      padding-top: 6px;
      font-size: 14px;
    }

    .radio-group label, .checkbox-group label {
      font-weight: normal;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .actions-section {
      grid-column: 1 / -1;
      margin-top: 25px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
    }

    .btn-submit-std {
      background-color: #0284c7;
      color: #fff;
      border: none;
      padding: 10px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }

    .btn-reset-std {
      background-color: #64748b;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }

    .image-btn-box {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .image-btn-box span {
      font-size: 12px;
      font-weight: bold;
      color: #0f766e;
    }

    input[type="image"] {
      cursor: pointer;
      border-radius: 6px;
      transition: transform 0.2s;
    }

    input[type="image"]:hover {
      transform: scale(1.03);
    }
  </style>
</head>
<body>

  <div class="form-wrapper">
    <div class="form-header">
      <h2>Comprehensive Patient Registration Portal</h2>
      <p>Demonstrating All 20 HTML5 Input Types &bull; Student: <strong>${CONFIG.name}</strong> (${CONFIG.regNo})</p>
    </div>

    <form action="#" method="post" enctype="multipart/form-data">
      
      <!-- 18. Hidden Patient ID -->
      <input type="hidden" name="patientId" value="PT-24MIC0121-789">

      <div class="grid-container">

        <!-- 1. Patient Name (text) -->
        <div class="field-box">
          <label for="pName">1. Patient Name (text):</label>
          <input type="text" id="pName" name="patientName" class="input-control" placeholder="e.g. M. Arulmurugan" required>
        </div>

        <!-- 2. Email (email) -->
        <div class="field-box">
          <label for="pEmail">2. Email Address (email):</label>
          <input type="email" id="pEmail" name="patientEmail" class="input-control" placeholder="patient@healthcare.org" required>
        </div>

        <!-- 3. Password (password) -->
        <div class="field-box">
          <label for="pPass">3. Portal Password (password):</label>
          <input type="password" id="pPass" name="patientPass" class="input-control" placeholder="Create secure password" required minlength="6">
        </div>

        <!-- 4. Contact Number (tel) -->
        <div class="field-box">
          <label for="pTel">4. Contact Number (tel):</label>
          <input type="tel" id="pTel" name="patientTel" class="input-control" placeholder="10-digit number" pattern="[0-9]{10}" required>
        </div>

        <!-- 5. Age (number) -->
        <div class="field-box">
          <label for="pAge">5. Age (number):</label>
          <input type="number" id="pAge" name="patientAge" class="input-control" min="1" max="120" placeholder="e.g. 21" required>
        </div>

        <!-- 6. Date of Birth (date) -->
        <div class="field-box">
          <label for="pDob">6. Date of Birth (date):</label>
          <input type="date" id="pDob" name="patientDob" class="input-control" required>
        </div>

        <!-- 7. Appointment Time (time) -->
        <div class="field-box">
          <label for="pTime">7. Appointment Time (time):</label>
          <input type="time" id="pTime" name="patientTime" class="input-control" required>
        </div>

        <!-- 8. Appointment Date & Time (datetime-local) -->
        <div class="field-box">
          <label for="pDt">8. Full Slot (datetime-local):</label>
          <input type="datetime-local" id="pDt" name="patientDateTime" class="input-control" required>
        </div>

        <!-- 9. Personal Website/Reference (url) -->
        <div class="field-box">
          <label for="pUrl">9. Personal / Health Record Link (url):</label>
          <input type="url" id="pUrl" name="patientUrl" class="input-control" placeholder="https://example.com/record">
        </div>

        <!-- 10. Search Doctor (search) -->
        <div class="field-box">
          <label for="pDoc">10. Search Doctor (search):</label>
          <input type="search" id="pDoc" name="searchDoctor" class="input-control" placeholder="Type doctor name or specialty">
        </div>

        <!-- 11. Consultation Color Theme (color) -->
        <div class="field-box">
          <label for="pColor">11. Consultation Card Theme (color):</label>
          <input type="color" id="pColor" name="themeColor" value="#0284c7" class="input-control color-picker">
        </div>

        <!-- 12. Medical Record Upload (file) -->
        <div class="field-box">
          <label for="pFile">12. Upload Previous Record (file):</label>
          <input type="file" id="pFile" name="patientReport" class="input-control" accept=".pdf, .png, .jpg">
        </div>

        <!-- 13. Pain Level (range) -->
        <div class="field-box">
          <label for="pPain">13. Current Pain Level (range 1 to 10):</label>
          <div class="range-wrapper">
            <input type="range" id="pPain" name="painLevel" min="1" max="10" value="3" oninput="document.getElementById('painVal').textContent = this.value" style="flex: 1;">
            <span id="painVal" style="font-weight: bold; color: #0284c7; width: 24px;">3</span>
          </div>
        </div>

        <!-- 14. Gender (radio) -->
        <div class="field-box">
          <label>14. Gender (radio):</label>
          <div class="radio-group">
            <label><input type="radio" name="gender" value="Male" required> Male</label>
            <label><input type="radio" name="gender" value="Female"> Female</label>
            <label><input type="radio" name="gender" value="Other"> Other</label>
          </div>
        </div>

        <!-- 15. Known Allergies (checkbox) -->
        <div class="field-box">
          <label>15. Known Allergies (checkbox):</label>
          <div class="checkbox-group">
            <label><input type="checkbox" name="allergies" value="Penicillin"> Penicillin</label>
            <label><input type="checkbox" name="allergies" value="Peanuts"> Peanuts</label>
            <label><input type="checkbox" name="allergies" value="Pollen"> Pollen</label>
          </div>
        </div>

        <!-- 16. Blood Group (select) -->
        <div class="field-box">
          <label for="pBlood">16. Blood Group (select):</label>
          <select id="pBlood" name="bloodGroup" class="input-control" required>
            <option value="">-- Select Blood Group --</option>
            <option value="A+">A +ve</option>
            <option value="A-">A -ve</option>
            <option value="B+">B +ve</option>
            <option value="B-">B -ve</option>
            <option value="O+">O +ve</option>
            <option value="O-">O -ve</option>
            <option value="AB+">AB +ve</option>
            <option value="AB-">AB -ve</option>
          </select>
        </div>

        <!-- 17. Address (textarea) -->
        <div class="field-box full-width">
          <label for="pAddress">17. Residential Address (textarea):</label>
          <textarea id="pAddress" name="patientAddress" rows="3" class="input-control" placeholder="Enter house no, street, locality, city and pincode..." required></textarea>
        </div>

      </div>

      <!-- 19 & 20: Submit, Reset and Image Button for Payment -->
      <div class="actions-section">
        <div>
          <!-- 19. Submit and Reset buttons -->
          <button type="submit" class="btn-submit-std">19. Submit Form</button>
          <button type="reset" class="btn-reset-std">Reset Form</button>
        </div>

        <div class="image-btn-box">
          <span>20. Image Button for Payment:</span>
          <!-- 20. Image Button -->
          <input type="image" src="/assets/img/pay_now_btn.svg" alt="Pay Online Now" width="160" height="44">
        </div>
      </div>

    </form>
  </div>

</body>
</html>`
});

// Q24: Shopping Cart Checkout and Payment using HTML5 & CSS3 in separate steps
tasks.push({
  id: "task-24",
  number: 24,
  sectionId: 5,
  sectionName: "HTML Forms & Input Types Practice",
  title: "Shopping Cart Multi-Step Checkout (Parts A, B, C)",
  constraint: "Multi-Step Form Layout (Part A Delivery, Part B Payment, Part C Cart Summary)",
  requirements: [
    "Part A Customer & Delivery: Customer Name, Email, Mobile, Address, City, State, PIN Code, Delivery Date",
    "Part B Payment: Payment Method radios, Card Holder Name, Card Number, Expiry Date (month), CVV, UPI ID, Terms checkbox",
    "Part C Cart Summary: Product Name, Quantity, Price, Total Amount, Place Order and Cancel buttons",
    "Interactive tabs/links navigating between steps with CSS styling"
  ],
  fileName: "task-24.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shopping Cart Checkout - Multi-Step</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 30px; color: #1e293b; }
    .checkout-container { max-width: 720px; margin: 0 auto; background: white; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden; }
    
    .checkout-header { background: #1e3a8a; color: white; padding: 20px 25px; text-align: center; }
    .checkout-header h2 { margin: 0; font-size: 22px; }
    
    /* Step navigation tabs */
    .step-nav { display: flex; background: #e2e8f0; border-bottom: 1px solid #cbd5e1; }
    .step-tab { flex: 1; text-align: center; padding: 12px; font-size: 14px; font-weight: 600; color: #64748b; cursor: pointer; text-decoration: none; border-bottom: 3px solid transparent; }
    .step-tab.active { background: white; color: #1e40af; border-bottom-color: #2563eb; }
    
    .step-content { padding: 30px; display: none; }
    .step-content.active { display: block; }
    
    .form-group { margin-bottom: 16px; }
    label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 5px; }
    input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], input[type="month"], input[type="password"], select, textarea {
      width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none;
    }
    input:focus, select:focus, textarea:focus { border-color: #2563eb; }
    
    .two-col { display: flex; gap: 15px; }
    .two-col .form-group { flex: 1; }
    
    .radio-pill-group { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 6px; }
    .radio-pill-group label { background: #f8fafc; border: 1px solid #cbd5e1; padding: 8px 14px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 6px; font-weight: 500; }
    
    /* Summary Table */
    .summary-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    .summary-table th, .summary-table td { border: 1px solid #e2e8f0; padding: 10px 12px; text-align: left; }
    .summary-table th { background: #f8fafc; color: #0f172a; }
    .summary-total { font-size: 18px; font-weight: bold; color: #1e3a8a; }
    
    .btn-nav-row { display: flex; justify-content: space-between; margin-top: 25px; }
    .btn-action { background: #2563eb; color: white; border: none; padding: 10px 22px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-action:hover { background: #1d4ed8; }
    .btn-cancel { background: #ef4444; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-cancel:hover { background: #dc2626; }
    .btn-back { background: #64748b; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>

  <div class="checkout-container">
    <div class="checkout-header">
      <h2>Shopping Cart Checkout &amp; Payment Portal</h2>
      <p style="font-size: 12px; color: #93c5fd; margin-top: 4px;">Student: ${CONFIG.name} (${CONFIG.regNo})</p>
    </div>

    <!-- Step Navigation Links -->
    <div class="step-nav">
      <a href="javascript:void(0)" class="step-tab active" id="tabA" onclick="showStep('stepA', 'tabA')">Part A: Customer &amp; Delivery</a>
      <a href="javascript:void(0)" class="step-tab" id="tabB" onclick="showStep('stepB', 'tabB')">Part B: Payment</a>
      <a href="javascript:void(0)" class="step-tab" id="tabC" onclick="showStep('stepC', 'tabC')">Part C: Cart Summary</a>
    </div>

    <!-- Part A: Customer & Delivery Details -->
    <div class="step-content active" id="stepA">
      <h3 style="color: #1e3a8a; margin-top: 0;">Part A: Delivery Information</h3>
      
      <div class="two-col">
        <div class="form-group">
          <label>Customer Name (text):</label>
          <input type="text" id="custName" value="${CONFIG.name}" required>
        </div>
        <div class="form-group">
          <label>Email Address (email):</label>
          <input type="email" id="custEmail" value="${CONFIG.email}" required>
        </div>
      </div>

      <div class="two-col">
        <div class="form-group">
          <label>Mobile Number (tel):</label>
          <input type="tel" id="custTel" value="9876543210" required>
        </div>
        <div class="form-group">
          <label>Delivery Date (date):</label>
          <input type="date" id="delDate" value="2026-11-05" required>
        </div>
      </div>

      <div class="form-group">
        <label>Delivery Address (textarea):</label>
        <textarea id="delAddress" rows="2" required>VIT University Campus, Technology Tower, Katpadi</textarea>
      </div>

      <div class="two-col">
        <div class="form-group">
          <label>City (text):</label>
          <input type="text" id="custCity" value="Vellore" required>
        </div>
        <div class="form-group">
          <label>State (select):</label>
          <select id="custState" required>
            <option selected>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Maharashtra</option>
          </select>
        </div>
        <div class="form-group">
          <label>PIN Code (number):</label>
          <input type="number" id="custPin" value="632014" required>
        </div>
      </div>

      <div class="btn-nav-row" style="justify-content: flex-end;">
        <button type="button" class="btn-action" onclick="showStep('stepB', 'tabB')">Proceed to Payment &rarr;</button>
      </div>
    </div>

    <!-- Part B: Payment Details -->
    <div class="step-content" id="stepB">
      <h3 style="color: #1e3a8a; margin-top: 0;">Part B: Secure Payment Method</h3>

      <div class="form-group">
        <label>Payment Method (radios):</label>
        <div class="radio-pill-group">
          <label><input type="radio" name="payMethod" value="Credit Card" checked> Credit Card</label>
          <label><input type="radio" name="payMethod" value="Debit Card"> Debit Card</label>
          <label><input type="radio" name="payMethod" value="UPI"> UPI</label>
          <label><input type="radio" name="payMethod" value="Net Banking"> Net Banking</label>
          <label><input type="radio" name="payMethod" value="Cash on Delivery"> Cash on Delivery</label>
        </div>
      </div>

      <div class="two-col">
        <div class="form-group">
          <label>Card Holder Name (text):</label>
          <input type="text" placeholder="Name on card" value="${CONFIG.name}">
        </div>
        <div class="form-group">
          <label>Card Number (text):</label>
          <input type="text" placeholder="4532 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 8921" value="4532 9821 7731 8921">
        </div>
      </div>

      <div class="two-col">
        <div class="form-group">
          <label>Expiry Date (month):</label>
          <input type="month" value="2028-12">
        </div>
        <div class="form-group">
          <label>CVV (password):</label>
          <input type="password" maxlength="4" placeholder="***" value="789">
        </div>
        <div class="form-group">
          <label>UPI ID (text):</label>
          <input type="text" placeholder="username@okhdfcbank" value="arulmurugan@upi">
        </div>
      </div>

      <div class="form-group" style="margin-top: 15px;">
        <label style="font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" checked required> I agree to the Terms and Conditions of service
        </label>
      </div>

      <div class="btn-nav-row">
        <button type="button" class="btn-back" onclick="showStep('stepA', 'tabA')">&larr; Back to Delivery</button>
        <button type="button" class="btn-action" onclick="showStep('stepC', 'tabC')">Review Order Summary &rarr;</button>
      </div>
    </div>

    <!-- Part C: Cart Summary -->
    <div class="step-content" id="stepC">
      <h3 style="color: #1e3a8a; margin-top: 0;">Part C: Cart Summary &amp; Final Confirmation</h3>

      <table class="summary-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SonicPro Wireless ANC Headphones</td>
            <td>1</td>
            <td>₹4,999.00</td>
            <td>₹4,999.00</td>
          </tr>
          <tr>
            <td>Type-C Braided Fast Charge Cable</td>
            <td>2</td>
            <td>₹450.00</td>
            <td>₹900.00</td>
          </tr>
          <tr>
            <td>Standard Express Delivery</td>
            <td>1</td>
            <td>₹0.00</td>
            <td>Free</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td colspan="3" align="right" class="summary-total">Grand Total:</td>
            <td class="summary-total">₹5,899.00</td>
          </tr>
        </tbody>
      </table>

      <div id="orderStatus" style="display: none; background: #ecfdf5; border: 1px solid #10b981; color: #065f46; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; font-weight: bold;">
        &#10004; Order Placed Successfully! Order ID: #ORD-2026-VIT-${CONFIG.regNo}
      </div>

      <div class="btn-nav-row">
        <button type="button" class="btn-back" onclick="showStep('stepB', 'tabB')">&larr; Edit Payment</button>
        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn-cancel" onclick="if(confirm('Cancel current order?')) location.reload();">Cancel</button>
          <button type="button" class="btn-action" style="background: #16a34a;" onclick="document.getElementById('orderStatus').style.display='block';">Place Order</button>
        </div>
      </div>
    </div>

  </div>

  <script>
    function showStep(stepId, tabId) {
      document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.step-tab').forEach(el => el.classList.remove('active'));
      document.getElementById(stepId).classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }
  </script>

</body>
</html>`
});

// =========================================================================
// SECTION 6: JavaScript Practice 1, Validation (Q25 - Q28)
// =========================================================================

// Q25: Apply JavaScript to Q20 (Employee Registration) - formatted table
tasks.push({
  id: "task-25",
  number: 25,
  sectionId: 6,
  sectionName: "JavaScript Practice 1: Validation",
  title: "Employee Registration Validation & Table Display",
  constraint: "JavaScript empty field validation + formatted HTML result TABLE",
  requirements: [
    "Check whether all fields from Q20 are empty or not",
    "Display all the entered values in a formatted TABLE",
    "Professional CSS styling for form and output table",
    "Validation error alerts and confirmation"
  ],
  fileName: "task-25.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Q25: Employee Registration JS Table Output</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; margin: 30px; color: #1e293b; }
    .container { max-width: 750px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    h2 { color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px; }
    .full-width { grid-column: span 2; }
    label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px; }
    input[type="text"], input[type="email"], input[type="tel"], input[type="date"], select, textarea {
      width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none;
    }
    .btn-submit { background: #2563eb; color: white; border: none; padding: 10px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-submit:hover { background: #1d4ed8; }
    
    /* Result Table Styling */
    #outputContainer { margin-top: 30px; display: none; }
    .result-table { width: 100%; border-collapse: collapse; margin-top: 12px; background: white; }
    .result-table th, .result-table td { border: 1px solid #cbd5e1; padding: 10px 14px; text-align: left; font-size: 14px; }
    .result-table th { background: #1e40af; color: white; width: 35%; }
    .error-msg { color: #dc2626; background: #fee2e2; border: 1px solid #fca5a5; padding: 10px; border-radius: 6px; margin-bottom: 15px; display: none; font-weight: bold; }
  </style>
</head>
<body>

  <div class="container">
    <h2>Q25: Employee Registration (JavaScript Table Verification)</h2>
    <p style="font-size: 13px; color: #64748b;">Author: ${CONFIG.name} (${CONFIG.regNo})</p>

    <div id="errorAlert" class="error-msg"></div>

    <form id="empForm" onsubmit="validateAndDisplayTable(event)">
      <div class="form-grid">
        <div>
          <label>Employee Name:</label>
          <input type="text" id="empName" placeholder="M. Arulmurugan">
        </div>
        <div>
          <label>Employee ID:</label>
          <input type="text" id="empId" placeholder="EMP-24MIC0121">
        </div>
        <div>
          <label>Email Address:</label>
          <input type="email" id="empEmail" placeholder="employee@vit.ac.in">
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="tel" id="empMobile" placeholder="9876543210">
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" id="empDob">
        </div>
        <div>
          <label>Date of Joining:</label>
          <input type="date" id="empDoj">
        </div>
        <div>
          <label>Gender:</label>
          <select id="empGender">
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Department:</label>
          <select id="empDept">
            <option value="">-- Select Department --</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Software Systems">Software Systems</option>
          </select>
        </div>
        <div class="full-width">
          <label>Residential Address:</label>
          <textarea id="empAddress" rows="2" placeholder="Full address..."></textarea>
        </div>
      </div>

      <button type="submit" class="btn-submit">Validate &amp; Generate Table</button>
    </form>

    <!-- Output Section with formatted TABLE -->
    <div id="outputContainer">
      <h3 style="color: #059669; border-bottom: 2px solid #10b981; padding-bottom: 6px;">
        &#10004; Formatted Employee Record Table
      </h3>
      <table class="result-table">
        <tbody id="tableBody"></tbody>
      </table>
    </div>
  </div>

  <script>
    function validateAndDisplayTable(e) {
      e.preventDefault();
      const errorDiv = document.getElementById('errorAlert');
      const outputDiv = document.getElementById('outputContainer');
      errorDiv.style.display = 'none';

      const fields = [
        { label: "Employee Name", value: document.getElementById('empName').value.trim() },
        { label: "Employee ID", value: document.getElementById('empId').value.trim() },
        { label: "Email Address", value: document.getElementById('empEmail').value.trim() },
        { label: "Mobile Number", value: document.getElementById('empMobile').value.trim() },
        { label: "Date of Birth", value: document.getElementById('empDob').value },
        { label: "Date of Joining", value: document.getElementById('empDoj').value },
        { label: "Gender", value: document.getElementById('empGender').value },
        { label: "Department", value: document.getElementById('empDept').value },
        { label: "Address", value: document.getElementById('empAddress').value.trim() }
      ];

      for (let f of fields) {
        if (!f.value) {
          errorDiv.textContent = "Error: Please fill in the '" + f.label + "' field. No fields can be empty!";
          errorDiv.style.display = 'block';
          outputDiv.style.display = 'none';
          return;
        }
      }

      // Build formatted table
      let html = '';
      fields.forEach(f => {
        html += '<tr><th>' + f.label + '</th><td>' + f.value + '</td></tr>';
      });

      document.getElementById('tableBody').innerHTML = html;
      outputDiv.style.display = 'block';
    }
  </script>

</body>
</html>`
});

// Q26: Apply JavaScript to Q21 (Student Login) - errors NEAR TEXT BOX in RED
tasks.push({
  id: "task-26",
  number: 26,
  sectionId: 6,
  sectionName: "JavaScript Practice 1: Validation",
  title: "Student Login Validation (Inline Red Errors & Output Div)",
  constraint: "Empty field check + Inline RED error near text box + Output <div>",
  requirements: [
    "Check empty fields for Username and Password",
    "Display error NEAR THE TEXT BOX in RED color",
    "Display successful output in an output <div>",
    "HTML5 input types and Student / Faculty role check"
  ],
  fileName: "task-26.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Q26: Student Login JS Validation</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; margin: 30px; color: #1e293b; }
    .card { max-width: 440px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    h2 { color: #1e40af; text-align: center; margin-top: 0; }
    .form-group { margin-bottom: 16px; position: relative; }
    label { display: block; font-weight: 600; font-size: 13px; margin-bottom: 4px; }
    input[type="text"], input[type="password"] {
      width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none;
    }
    input.invalid-input { border-color: #dc2626; background: #fff5f5; }
    /* RED ERROR MESSAGE NEAR THE TEXT BOX */
    .field-error { color: #dc2626; font-size: 12px; font-weight: bold; margin-top: 4px; display: none; }
    .btn-login { width: 100%; background: #2563eb; color: white; border: none; padding: 11px; border-radius: 6px; font-weight: bold; cursor: pointer; margin-top: 10px; }
    .btn-login:hover { background: #1d4ed8; }
    
    /* Result Output DIV */
    #outputDiv { margin-top: 20px; padding: 15px; border-radius: 6px; display: none; }
    .success-out { background: #ecfdf5; border: 1px solid #10b981; color: #065f46; }
  </style>
</head>
<body>

  <div class="card">
    <h2>Student Login Validation</h2>
    <p style="text-align: center; font-size: 12px; color: #64748b; margin-top: -5px; margin-bottom: 20px;">
      Student: ${CONFIG.name} (${CONFIG.regNo})
    </p>

    <form id="loginForm" onsubmit="handleLoginSubmit(event)">
      
      <div class="form-group">
        <label for="userBox">Username or Email Address:</label>
        <input type="text" id="userBox" placeholder="Enter username or email">
        <!-- Error message near the box in red -->
        <div id="userError" class="field-error">&#9888; Username / Email cannot be empty!</div>
      </div>

      <div class="form-group">
        <label for="passBox">Password:</label>
        <input type="password" id="passBox" placeholder="Enter password">
        <!-- Error message near the box in red -->
        <div id="passError" class="field-error">&#9888; Password cannot be empty!</div>
      </div>

      <div class="form-group">
        <label>User Role:</label>
        <div style="display: flex; gap: 18px; font-size: 14px;">
          <label style="font-weight: normal;"><input type="radio" name="role" value="Student" checked> Student</label>
          <label style="font-weight: normal;"><input type="radio" name="role" value="Faculty"> Faculty</label>
        </div>
      </div>

      <button type="submit" class="btn-login">Login</button>
    </form>

    <!-- Output DIV displaying results -->
    <div id="outputDiv" class="success-out"></div>
  </div>

  <script>
    function handleLoginSubmit(e) {
      e.preventDefault();
      const userBox = document.getElementById('userBox');
      const passBox = document.getElementById('passBox');
      const userErr = document.getElementById('userError');
      const passErr = document.getElementById('passError');
      const outDiv = document.getElementById('outputDiv');

      let isValid = true;

      // Validate Username
      if (!userBox.value.trim()) {
        userBox.classList.add('invalid-input');
        userErr.style.display = 'block';
        isValid = false;
      } else {
        userBox.classList.remove('invalid-input');
        userErr.style.display = 'none';
      }

      // Validate Password
      if (!passBox.value.trim()) {
        passBox.classList.add('invalid-input');
        passErr.style.display = 'block';
        isValid = false;
      } else {
        passBox.classList.remove('invalid-input');
        passErr.style.display = 'none';
      }

      // Display in output <div>
      if (isValid) {
        const role = document.querySelector('input[name="role"]:checked').value;
        outDiv.style.display = 'block';
        outDiv.innerHTML = '<strong>&#10004; Login Successful!</strong><br>' +
          'Welcome back, <strong>' + userBox.value.trim() + '</strong><br>' +
          'Role: ' + role + '<br>' +
          'Timestamp: ' + new Date().toLocaleTimeString();
      } else {
        outDiv.style.display = 'none';
      }
    }
  </script>

</body>
</html>`
});

// Q27: Student Registration Form using HTML and JS with Regular Expressions
tasks.push({
  id: "task-27",
  number: 27,
  sectionId: 6,
  sectionName: "JavaScript Practice 1: Validation",
  title: "Student Registration Form with Regular Expressions",
  constraint: "Regex Validation (Name alphabets/spaces only, valid email, gender, skills)",
  requirements: [
    "Inputs: Student Name (text), Email ID (text), Gender (radio: Male, Female, Other), Skills (checkboxes: HTML, CSS, JavaScript)",
    "Validate name with Regex: only alphabets and spaces (/^[A-Za-z\\s]+$/)",
    "Validate email format with Regex (/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)",
    "Verify one gender selected and at least one skill selected",
    "Show error message below respective field",
    "On success display 'Registration Successful'"
  ],
  fileName: "task-27.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Registration - Regular Expression Validation</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; margin: 30px; color: #1e293b; }
    .card { max-width: 520px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    h2 { color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0; }
    .form-group { margin-bottom: 18px; }
    label { display: block; font-weight: 600; font-size: 13px; margin-bottom: 5px; }
    input[type="text"] { width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none; }
    .error-text { color: #dc2626; font-size: 12px; font-weight: bold; margin-top: 4px; display: none; }
    .radio-row, .check-row { display: flex; gap: 18px; font-size: 14px; margin-top: 5px; }
    .radio-row label, .check-row label { font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 5px; }
    .btn-submit { background: #2563eb; color: white; border: none; padding: 11px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; font-size: 15px; }
    .btn-submit:hover { background: #1d4ed8; }
    .success-alert { display: none; background: #ecfdf5; border: 2px solid #10b981; color: #065f46; padding: 15px; border-radius: 8px; text-align: center; font-size: 16px; font-weight: bold; margin-top: 20px; }
  </style>
</head>
<body>

  <div class="card">
    <h2>Student Registration Form</h2>
    <p style="font-size: 12px; color: #64748b; margin-top: -5px; margin-bottom: 20px;">
      Regex Validation Suite &bull; Developer: <strong>${CONFIG.name}</strong> (${CONFIG.regNo})
    </p>

    <form id="regForm" onsubmit="validateStudentForm(event)">
      
      <!-- Student Name -->
      <div class="form-group">
        <label for="stuName">Student Name:</label>
        <input type="text" id="stuName" placeholder="e.g. M Arulmurugan">
        <div id="nameError" class="error-text">&#9888; Name must contain only alphabets and spaces!</div>
      </div>

      <!-- Email ID -->
      <div class="form-group">
        <label for="stuEmail">Email ID:</label>
        <input type="text" id="stuEmail" placeholder="e.g. arul@vit.ac.in">
        <div id="emailError" class="error-text">&#9888; Please enter a valid email address!</div>
      </div>

      <!-- Gender -->
      <div class="form-group">
        <label>Gender:</label>
        <div class="radio-row">
          <label><input type="radio" name="gender" value="Male"> Male</label>
          <label><input type="radio" name="gender" value="Female"> Female</label>
          <label><input type="radio" name="gender" value="Other"> Other</label>
        </div>
        <div id="genderError" class="error-text">&#9888; Please select your gender!</div>
      </div>

      <!-- Skills -->
      <div class="form-group">
        <label>Skills:</label>
        <div class="check-row">
          <label><input type="checkbox" name="skill" value="HTML"> HTML</label>
          <label><input type="checkbox" name="skill" value="CSS"> CSS</label>
          <label><input type="checkbox" name="skill" value="JavaScript"> JavaScript</label>
        </div>
        <div id="skillError" class="error-text">&#9888; Please select at least one skill!</div>
      </div>

      <button type="submit" class="btn-submit">Register Student</button>
    </form>

    <div id="successBox" class="success-alert">
      &#10004; Registration Successful!
    </div>
  </div>

  <script>
    function validateStudentForm(e) {
      e.preventDefault();
      let valid = true;

      const nameVal = document.getElementById('stuName').value.trim();
      const emailVal = document.getElementById('stuEmail').value.trim();
      const genderChecked = document.querySelector('input[name="gender"]:checked');
      const skillsChecked = document.querySelectorAll('input[name="skill"]:checked');

      // 1. Name: only alphabets and spaces
      const nameRegex = /^[A-Za-z\\s]+$/;
      if (!nameVal || !nameRegex.test(nameVal)) {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('nameError').style.display = 'none';
      }

      // 2. Email Regex
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('emailError').style.display = 'none';
      }

      // 3. Gender
      if (!genderChecked) {
        document.getElementById('genderError').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('genderError').style.display = 'none';
      }

      // 4. Skills (at least one)
      if (skillsChecked.length === 0) {
        document.getElementById('skillError').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('skillError').style.display = 'none';
      }

      const successBox = document.getElementById('successBox');
      if (valid) {
        successBox.style.display = 'block';
      } else {
        successBox.style.display = 'none';
      }
    }
  </script>

</body>
</html>`
});

// Q28: Course Registration Form using HTML and JS (Multi-select languages)
tasks.push({
  id: "task-28",
  number: 28,
  sectionId: 6,
  sectionName: "JavaScript Practice 1: Validation",
  title: "Course Registration Form (Regex + Multi-Select Box)",
  constraint: "Regex Validation for Name + Multi-select List Box + Details Display",
  requirements: [
    "Student Name textbox",
    "Department dropdown (CSE, IT, ECE, EEE)",
    "Multi-select list box of Programming Languages (Java, Python, JavaScript, C++)",
    "Validate name with regular expression (alphabets and spaces only)",
    "Display entered details after successful validation"
  ],
  fileName: "task-28.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Course Registration Form</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; margin: 30px; color: #1e293b; }
    .card { max-width: 540px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    h2 { color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0; }
    .form-group { margin-bottom: 18px; }
    label { display: block; font-weight: 600; font-size: 13px; margin-bottom: 5px; }
    input[type="text"], select { width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; outline: none; }
    select[multiple] { height: 110px; padding: 6px; }
    .error-text { color: #dc2626; font-size: 12px; font-weight: bold; margin-top: 4px; display: none; }
    .btn-submit { background: #2563eb; color: white; border: none; padding: 11px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; width: 100%; font-size: 15px; }
    .btn-submit:hover { background: #1d4ed8; }
    .summary-card { margin-top: 25px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 18px; display: none; }
  </style>
</head>
<body>

  <div class="card">
    <h2>Course Registration Form</h2>
    <p style="font-size: 12px; color: #64748b; margin-top: -5px; margin-bottom: 20px;">
      Student: <strong>${CONFIG.name}</strong> (${CONFIG.regNo}) &bull; VIT University
    </p>

    <form id="courseForm" onsubmit="handleCourseSubmit(event)">
      
      <div class="form-group">
        <label for="cName">Student Name:</label>
        <input type="text" id="cName" placeholder="Enter student name">
        <div id="cNameError" class="error-text">&#9888; Student name must contain only alphabets and spaces!</div>
      </div>

      <div class="form-group">
        <label for="cDept">Department:</label>
        <select id="cDept">
          <option value="">-- Choose Department --</option>
          <option value="CSE">CSE (Computer Science &amp; Engineering)</option>
          <option value="IT">IT (Information Technology)</option>
          <option value="ECE">ECE (Electronics &amp; Communication)</option>
          <option value="EEE">EEE (Electrical &amp; Electronics)</option>
        </select>
        <div id="cDeptError" class="error-text">&#9888; Please select a department!</div>
      </div>

      <div class="form-group">
        <label for="cLang">Programming Languages (Hold Ctrl / Cmd to select multiple):</label>
        <select id="cLang" multiple>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="C++">C++</option>
        </select>
        <div id="cLangError" class="error-text">&#9888; Please select at least one programming language!</div>
      </div>

      <button type="submit" class="btn-submit">Submit Course Registration</button>
    </form>

    <div id="courseSummary" class="summary-card">
      <h3 style="color: #1e40af; margin-top: 0;">&#10004; Registration Details Summary</h3>
      <div id="summaryContent" style="font-size: 14px; line-height: 1.8;"></div>
    </div>
  </div>

  <script>
    function handleCourseSubmit(e) {
      e.preventDefault();
      let valid = true;

      const nameVal = document.getElementById('cName').value.trim();
      const deptVal = document.getElementById('cDept').value;
      const langSelect = document.getElementById('cLang');
      const selectedLangs = Array.from(langSelect.selectedOptions).map(opt => opt.value);

      // Regex validation for student name (alphabets and spaces only)
      const nameRegex = /^[A-Za-z\\s]+$/;
      if (!nameVal || !nameRegex.test(nameVal)) {
        document.getElementById('cNameError').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('cNameError').style.display = 'none';
      }

      if (!deptVal) {
        document.getElementById('cDeptError').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('cDeptError').style.display = 'none';
      }

      if (selectedLangs.length === 0) {
        document.getElementById('cLangError').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('cLangError').style.display = 'none';
      }

      const summaryCard = document.getElementById('courseSummary');
      const summaryContent = document.getElementById('summaryContent');

      if (valid) {
        summaryContent.innerHTML = '<strong>Student Name:</strong> ' + nameVal + '<br>' +
          '<strong>Department:</strong> ' + deptVal + '<br>' +
          '<strong>Selected Languages:</strong> ' + selectedLangs.join(', ') + '<br>' +
          '<strong>Status:</strong> Approved &amp; Enrolled in Spring 2026';
        summaryCard.style.display = 'block';
      } else {
        summaryCard.style.display = 'none';
      }
    }
  </script>

</body>
</html>`
});

// =========================================================================
// SECTION 7: JavaScript Mouse Event Handling (Q29 - Q33)
// =========================================================================

// Q29: Colored box that changes background color when clicked
tasks.push({
  id: "task-29",
  number: 29,
  sectionId: 7,
  sectionName: "JavaScript Mouse Event Handling",
  title: "Click-to-Change Color Box with Mouse Hover Text",
  constraint: "Mouse Events: onclick (color change), onmouseover, onmouseout",
  requirements: [
    "A colored box that changes its background color when clicked",
    "When mouse moves over the box, display 'Mouse is over the box' below it",
    "Mouse leave restores info",
    "Multiple alternating colors on click"
  ],
  fileName: "task-29.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Q29: Mouse Event Color Box</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; text-align: center; padding: 40px 20px; color: #1e293b; }
    .wrapper { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    h2 { color: #1e40af; margin-top: 0; }
    
    #colorBox {
      width: 220px;
      height: 220px;
      margin: 25px auto;
      background-color: #3b82f6;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0 8px 16px rgba(0,0,0,0.15);
      transition: transform 0.2s, background-color 0.3s;
      user-select: none;
    }
    #colorBox:hover { transform: scale(1.05); }

    #statusMessage {
      min-height: 28px;
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      margin-top: 15px;
    }
  </style>
</head>
<body>

  <div class="wrapper">
    <h2>Interactive Color Box</h2>
    <p style="font-size: 13px; color: #64748b;">Click to cycle color &bull; Hover to detect cursor</p>

    <div id="colorBox" onclick="changeBoxColor()" onmouseover="showHoverText()" onmouseout="hideHoverText()">
      Click Me!
    </div>

    <div id="statusMessage">Hover your mouse over the box above.</div>

    <div style="margin-top: 25px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
      Student: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q29 Mouse Events
    </div>
  </div>

  <script>
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'];
    let colorIndex = 0;

    function changeBoxColor() {
      colorIndex = (colorIndex + 1) % colors.length;
      document.getElementById('colorBox').style.backgroundColor = colors[colorIndex];
    }

    function showHoverText() {
      document.getElementById('statusMessage').textContent = "Mouse is over the box";
      document.getElementById('statusMessage').style.color = "#2563eb";
    }

    function hideHoverText() {
      document.getElementById('statusMessage').textContent = "Hover your mouse over the box above.";
      document.getElementById('statusMessage').style.color = "#0f172a";
    }
  </script>

</body>
</html>`
});

// Q30: Interactive product card
tasks.push({
  id: "task-30",
  number: 30,
  sectionId: 7,
  sectionName: "JavaScript Mouse Event Handling",
  title: "Interactive Product Card with Details Toggle",
  constraint: "Mouse events: onmouseover, onmouseleave on image; onclick on button",
  requirements: [
    "Moving mouse over the product image changes its appearance and displays additional product info",
    "Mouse leave restores original appearance",
    "Mouse click on 'View Details' button displays product price and availability"
  ],
  fileName: "task-30.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Product Card</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f1f5f9; margin: 30px; display: flex; justify-content: center; align-items: center; min-height: 80vh; }
    .product-card {
      width: 320px;
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid #cbd5e1;
      padding: 20px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.08);
      text-align: center;
      transition: all 0.3s;
    }
    
    .img-wrapper {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      cursor: pointer;
    }

    #productImg {
      width: 100%;
      height: 200px;
      display: block;
      transition: transform 0.3s, filter 0.3s;
    }

    /* Hover appearance change */
    .img-wrapper.hovered #productImg {
      transform: scale(1.08);
      filter: brightness(0.9);
    }

    #extraInfo {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(15, 23, 42, 0.9);
      color: white;
      padding: 8px;
      font-size: 12px;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    .img-wrapper.hovered #extraInfo {
      transform: translateY(0);
    }

    h3 { margin: 15px 0 5px 0; color: #0f172a; font-size: 18px; }
    .category { color: #64748b; font-size: 12px; margin-bottom: 12px; }

    .btn-details {
      background: #2563eb;
      color: white;
      border: none;
      padding: 9px 20px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-details:hover { background: #1d4ed8; }

    #detailsBox {
      display: none;
      margin-top: 15px;
      background: #ecfdf5;
      border: 1px solid #10b981;
      padding: 10px;
      border-radius: 8px;
      font-size: 13px;
      color: #065f46;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <div class="product-card">
    <div class="img-wrapper" id="imgWrapper" onmouseenter="onImgEnter()" onmouseleave="onImgLeave()">
      <img id="productImg" src="/assets/img/product_headphone.svg" alt="SonicPro Headphones">
      <div id="extraInfo">&#9733; 40mm Neodymium Drivers &bull; 40-hr Battery Life &bull; ANC</div>
    </div>

    <h3>SonicPro ANC Headphones</h3>
    <div class="category">Audio &bull; Wireless Series</div>

    <button class="btn-details" onclick="toggleDetails()">View Details</button>

    <div id="detailsBox">
      <strong>Price:</strong> ₹4,999 (Inclusive of all taxes)<br>
      <strong>Availability:</strong> In Stock (14 Units at Vellore Warehouse)
    </div>

    <div style="margin-top: 15px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px;">
      Task 30 &bull; ${CONFIG.name} (${CONFIG.regNo})
    </div>
  </div>

  <script>
    function onImgEnter() {
      document.getElementById('imgWrapper').classList.add('hovered');
    }

    function onImgLeave() {
      document.getElementById('imgWrapper').classList.remove('hovered');
    }

    function toggleDetails() {
      const box = document.getElementById('detailsBox');
      box.style.display = (box.style.display === 'block') ? 'none' : 'block';
    }
  </script>

</body>
</html>`
});

// Q31: Interactive traffic signal
tasks.push({
  id: "task-31",
  number: 31,
  sectionId: 7,
  sectionName: "JavaScript Mouse Event Handling",
  title: "Interactive Traffic Signal with Hover Highlighting",
  constraint: "Mouseover / Mouseleave on individual signal lights (Red, Yellow, Green)",
  requirements: [
    "Interactive traffic signal (Red, Yellow, Green)",
    "Hovering over Red highlights it and shows 'STOP'",
    "Hovering over Yellow highlights it and shows 'READY'",
    "Hovering over Green highlights it and shows 'GO'",
    "Mouse leave restores original appearance"
  ],
  fileName: "task-31.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Traffic Signal</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 40px 20px; }
    .signal-pole {
      width: 140px;
      background: #1e293b;
      border: 4px solid #334155;
      border-radius: 40px;
      padding: 25px 0;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.6);
    }

    .light {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.25;
      transition: opacity 0.3s, box-shadow 0.3s, transform 0.2s;
    }

    .light.red { background-color: #ef4444; }
    .light.yellow { background-color: #eab308; }
    .light.green { background-color: #22c55e; }

    .light.active.red { opacity: 1; box-shadow: 0 0 30px #ef4444; transform: scale(1.1); }
    .light.active.yellow { opacity: 1; box-shadow: 0 0 30px #eab308; transform: scale(1.1); }
    .light.active.green { opacity: 1; box-shadow: 0 0 30px #22c55e; transform: scale(1.1); }

    #signalLabel {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 2px;
      min-height: 40px;
      margin-top: 15px;
    }
  </style>
</head>
<body>

  <h1>Interactive Traffic Signal</h1>
  <p style="color: #94a3b8; font-size: 14px;">Hover your mouse over each signal light to view status</p>

  <div class="signal-pole">
    <div id="redLight" class="light red" onmouseover="activateLight('red', 'STOP', '#ef4444')" onmouseout="resetLights()"></div>
    <div id="yellowLight" class="light yellow" onmouseover="activateLight('yellow', 'READY', '#eab308')" onmouseout="resetLights()"></div>
    <div id="greenLight" class="light green" onmouseover="activateLight('green', 'GO', '#22c55e')" onmouseout="resetLights()"></div>
  </div>

  <div id="signalLabel">HOVER ON A LIGHT</div>

  <p style="font-size: 12px; color: #64748b; margin-top: 30px;">Student: ${CONFIG.name} (${CONFIG.regNo})</p>

  <script>
    function activateLight(color, text, textColor) {
      resetLights();
      document.getElementById(color + 'Light').classList.add('active');
      const label = document.getElementById('signalLabel');
      label.textContent = text;
      label.style.color = textColor;
    }

    function resetLights() {
      document.querySelectorAll('.light').forEach(l => l.classList.remove('active'));
      const label = document.getElementById('signalLabel');
      label.textContent = 'HOVER ON A LIGHT';
      label.style.color = '#94a3b8';
    }
  </script>

</body>
</html>`
});

// Q32: Interactive weather status display
tasks.push({
  id: "task-32",
  number: 32,
  sectionId: 7,
  sectionName: "JavaScript Mouse Event Handling",
  title: "Interactive Weather Status Display (3 Panels)",
  constraint: "Three interactive weather cards with mouseover/mouseleave feedback",
  requirements: [
    "Three weather panels: Sunny, Cloudy, Rainy",
    "On mouse over Sunny highlight panel and show 'Perfect Day!'",
    "On mouse over Cloudy highlight panel and show 'Cloudy Weather'",
    "On mouse over Rainy highlight panel and show 'Carry an Umbrella!'",
    "Mouse leave restores original appearance"
  ],
  fileName: "task-32.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Weather Status Display</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; color: #1e293b; text-align: center; padding: 40px 20px; }
    h2 { color: #1e40af; margin-top: 0; }
    .panel-container { display: flex; justify-content: center; gap: 20px; max-width: 800px; margin: 30px auto; flex-wrap: wrap; }
    
    .weather-card {
      flex: 1 1 200px;
      background: white;
      border: 2px solid #cbd5e1;
      border-radius: 14px;
      padding: 30px 20px;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    .weather-icon { font-size: 48px; margin-bottom: 12px; }
    .weather-title { font-size: 20px; font-weight: bold; margin-bottom: 8px; }
    .weather-advice { font-size: 14px; font-weight: 700; min-height: 20px; color: #64748b; }

    /* Highlight states on mouse over */
    .weather-card.hover-sunny {
      border-color: #f59e0b;
      background: #fffbeb;
      transform: translateY(-8px);
      box-shadow: 0 10px 20px rgba(245, 158, 11, 0.2);
    }
    .weather-card.hover-cloudy {
      border-color: #64748b;
      background: #f1f5f9;
      transform: translateY(-8px);
      box-shadow: 0 10px 20px rgba(100, 116, 139, 0.2);
    }
    .weather-card.hover-rainy {
      border-color: #0284c7;
      background: #f0f9ff;
      transform: translateY(-8px);
      box-shadow: 0 10px 20px rgba(2, 132, 199, 0.2);
    }
  </style>
</head>
<body>

  <h2>Live Weather Advisory</h2>
  <p style="color: #64748b; font-size: 14px;">Hover over any atmospheric panel for personalized tips</p>

  <div class="panel-container">
    
    <!-- Sunny Panel -->
    <div class="weather-card" id="cardSunny" onmouseover="handleWeatherOver('cardSunny', 'hover-sunny', 'advSunny', 'Perfect Day!', '#d97706')" onmouseout="handleWeatherOut('cardSunny', 'hover-sunny', 'advSunny')">
      <div class="weather-icon">&#9728;&#65039;</div>
      <div class="weather-title">Sunny</div>
      <div class="weather-advice" id="advSunny">32&deg;C &bull; Clear Skies</div>
    </div>

    <!-- Cloudy Panel -->
    <div class="weather-card" id="cardCloudy" onmouseover="handleWeatherOver('cardCloudy', 'hover-cloudy', 'advCloudy', 'Cloudy Weather', '#475569')" onmouseout="handleWeatherOut('cardCloudy', 'hover-cloudy', 'advCloudy')">
      <div class="weather-icon">&#9729;&#65039;</div>
      <div class="weather-title">Cloudy</div>
      <div class="weather-advice" id="advCloudy">26&deg;C &bull; Overcast</div>
    </div>

    <!-- Rainy Panel -->
    <div class="weather-card" id="cardRainy" onmouseover="handleWeatherOver('cardRainy', 'hover-rainy', 'advRainy', 'Carry an Umbrella!', '#0369a1')" onmouseout="handleWeatherOut('cardRainy', 'hover-rainy', 'advRainy')">
      <div class="weather-icon">&#127783;&#65039;</div>
      <div class="weather-title">Rainy</div>
      <div class="weather-advice" id="advRainy">22&deg;C &bull; Precipitation</div>
    </div>

  </div>

  <p style="font-size: 13px; color: #94a3b8; margin-top: 30px;">Student: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q32 Weather Events</p>

  <script>
    const defaults = {
      advSunny: "32°C • Clear Skies",
      advCloudy: "26°C • Overcast",
      advRainy: "22°C • Precipitation"
    };

    function handleWeatherOver(cardId, className, textId, message, color) {
      document.getElementById(cardId).classList.add(className);
      const textEl = document.getElementById(textId);
      textEl.textContent = message;
      textEl.style.color = color;
    }

    function handleWeatherOut(cardId, className, textId) {
      document.getElementById(cardId).classList.remove(className);
      const textEl = document.getElementById(textId);
      textEl.textContent = defaults[textId];
      textEl.style.color = '#64748b';
    }
  </script>

</body>
</html>`
});

// Q33: On mouse over a button, change page text to "Welcome to VIT!"
tasks.push({
  id: "task-33",
  number: 33,
  sectionId: 7,
  sectionName: "JavaScript Mouse Event Handling",
  title: "Button Hover Greeting ('Welcome to VIT!')",
  constraint: "Mouseover and mouseleave event listeners on a button element",
  requirements: [
    "On mouse over a button, change page text to 'Welcome to VIT!'",
    "Restore original text when mouse leaves",
    "Clear visual feedback and student attribution"
  ],
  fileName: "task-33.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Button Hover Greeting</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; text-align: center; padding: 50px 20px; color: #1e293b; }
    .card { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 16px; border: 1px solid #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    
    #pageText {
      font-size: 32px;
      font-weight: 800;
      color: #1e40af;
      margin: 25px 0;
      min-height: 48px;
      transition: color 0.2s;
    }

    .btn-hover {
      background: #2563eb;
      color: white;
      border: none;
      padding: 14px 32px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
      transition: all 0.2s;
    }

    .btn-hover:hover {
      background: #1d4ed8;
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(37, 99, 235, 0.4);
    }
  </style>
</head>
<body>

  <div class="card">
    <p style="color: #64748b; font-size: 14px; margin-top: 0;">Hover your cursor over the button below:</p>

    <!-- Page Text Target -->
    <div id="pageText">Explore Institutional Campus</div>

    <button id="vitBtn" class="btn-hover" onmouseover="greetVIT()" onmouseout="restoreGreeting()">
      Hover Over Me
    </button>

    <div style="margin-top: 35px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px;">
      Student: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q33 Mouseover Demo
    </div>
  </div>

  <script>
    const originalText = "Explore Institutional Campus";

    function greetVIT() {
      const el = document.getElementById('pageText');
      el.textContent = "Welcome to VIT!";
      el.style.color = "#059669";
    }

    function restoreGreeting() {
      const el = document.getElementById('pageText');
      el.textContent = originalText;
      el.style.color = "#1e40af";
    }
  </script>

</body>
</html>`
});

// =========================================================================
// SECTION 8: JavaScript Keyboard Event Handling (Q34 - Q39)
// =========================================================================

// Q34: Student Search page with a text input
tasks.push({
  id: "task-34",
  number: 34,
  sectionId: 8,
  sectionName: "JavaScript Keyboard Event Handling",
  title: "Student Search Input (Key Display, Enter & Escape)",
  constraint: "Keyboard Event Handling: onkeydown / onkeyup for Enter and Escape",
  requirements: [
    "Text input for student search",
    "Display the key pressed below the input box",
    "Enter key shows 'Searching for student…'",
    "Escape key clears the input field and the message"
  ],
  fileName: "task-34.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Search Keyboard Events</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; margin: 30px; color: #1e293b; text-align: center; }
    .card { max-width: 500px; margin: 0 auto; background: white; padding: 35px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    h2 { color: #1e40af; margin-top: 0; }
    
    input[type="text"] {
      width: 100%;
      padding: 12px 16px;
      font-size: 15px;
      border: 2px solid #cbd5e1;
      border-radius: 8px;
      box-sizing: border-box;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="text"]:focus { border-color: #2563eb; }

    .indicator-box { margin-top: 20px; font-size: 14px; color: #64748b; }
    .key-badge { background: #e0e7ff; color: #3730a3; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-family: monospace; }
    
    #searchStatus {
      margin-top: 15px;
      font-size: 16px;
      font-weight: 700;
      color: #0284c7;
      min-height: 24px;
    }
  </style>
</head>
<body>

  <div class="card">
    <h2>Student Search Portal</h2>
    <p style="font-size: 13px; color: #64748b; margin-top: -5px; margin-bottom: 20px;">
      Type to inspect key events &bull; Press <strong>Enter</strong> to search &bull; Press <strong>Escape</strong> to clear
    </p>

    <input type="text" id="searchInput" placeholder="Type student name or reg number..." onkeydown="handleSearchKey(event)">

    <div class="indicator-box">
      Last Key Pressed: <span id="keyDisplay" class="key-badge">None</span>
    </div>

    <div id="searchStatus"></div>

    <div style="margin-top: 25px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
      Student: ${CONFIG.name} (${CONFIG.regNo})
    </div>
  </div>

  <script>
    function handleSearchKey(e) {
      document.getElementById('keyDisplay').textContent = e.key;
      const status = document.getElementById('searchStatus');

      if (e.key === 'Enter') {
        status.textContent = "Searching for student…";
        status.style.color = "#059669";
      } else if (e.key === 'Escape') {
        document.getElementById('searchInput').value = "";
        status.textContent = "Search cleared.";
        status.style.color = "#dc2626";
        document.getElementById('keyDisplay').textContent = "Escape";
      } else {
        status.textContent = "";
      }
    }
  </script>

</body>
</html>`
});

// Q35: ATM PIN entry screen
tasks.push({
  id: "task-35",
  number: 35,
  sectionId: 8,
  sectionName: "JavaScript Keyboard Event Handling",
  title: "ATM PIN Entry Screen (Numeric Only & Key Events)",
  constraint: "Keyboard Event Handling: disallow non-numeric keys, show warning, Enter submits",
  requirements: [
    "Allow only numbers in the PIN field (0-9)",
    "Show 'PIN Entry Started' when a key is pressed",
    "Enter shows 'PIN Submitted Successfully'",
    "Show a warning message if a non-numeric key is entered"
  ],
  fileName: "task-35.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ATM PIN Entry Screen</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 40px 20px; }
    .atm-terminal { max-width: 420px; margin: 0 auto; background: #1e293b; border: 2px solid #334155; border-radius: 16px; padding: 35px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    h2 { color: #38bdf8; margin-top: 0; font-size: 22px; }
    
    .pin-input {
      width: 220px;
      letter-spacing: 14px;
      font-size: 28px;
      text-align: center;
      padding: 10px;
      border: 2px solid #475569;
      border-radius: 8px;
      background: #0f172a;
      color: #38bdf8;
      outline: none;
      box-sizing: border-box;
      margin: 15px auto;
      display: block;
    }
    .pin-input:focus { border-color: #38bdf8; }

    #atmStatus { min-height: 24px; font-size: 14px; font-weight: bold; margin-top: 15px; color: #94a3b8; }
    #atmWarning { min-height: 20px; font-size: 13px; font-weight: bold; color: #ef4444; margin-top: 6px; }
  </style>
</head>
<body>

  <div class="atm-terminal">
    <h2>VIT Secure ATM Terminal</h2>
    <p style="font-size: 12px; color: #94a3b8;">Enter 4-Digit Security PIN &bull; Press Enter to Submit</p>

    <input type="password" id="pinField" class="pin-input" maxlength="4" placeholder="••••" onkeydown="handleAtmKey(event)">

    <div id="atmStatus">Please enter your 4-digit numeric PIN.</div>
    <div id="atmWarning"></div>

    <div style="margin-top: 25px; font-size: 11px; color: #64748b; border-top: 1px solid #334155; padding-top: 10px;">
      Cardholder: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q35 ATM Validation
    </div>
  </div>

  <script>
    let entryStarted = false;

    function handleAtmKey(e) {
      const warning = document.getElementById('atmWarning');
      const status = document.getElementById('atmStatus');
      warning.textContent = "";

      // Allowed navigation keys
      if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
        return;
      }

      // Enter key submits PIN
      if (e.key === 'Enter') {
        const pin = document.getElementById('pinField').value;
        if (pin.length === 4) {
          status.textContent = "PIN Submitted Successfully";
          status.style.color = "#22c55e";
          warning.textContent = "";
        } else {
          warning.textContent = "Warning: PIN must be exactly 4 digits!";
        }
        return;
      }

      // Allow only numbers
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        warning.textContent = "Warning: Only numbers are allowed in PIN field!";
        return;
      }

      // First valid numeric key entry
      if (!entryStarted) {
        entryStarted = true;
        status.textContent = "PIN Entry Started";
        status.style.color = "#38bdf8";
      }
    }
  </script>

</body>
</html>`
});

// Q36: Product Search input using an appropriate keyboard event
tasks.push({
  id: "task-36",
  number: 36,
  sectionId: 8,
  sectionName: "JavaScript Keyboard Event Handling",
  title: "Live Product Search (Dynamic Color Change & Result Message)",
  constraint: "Keyboard Event Handling: oninput / onkeyup + dynamic background styling",
  requirements: [
    "Display the typed text below the input box",
    "Change the input background color when user starts typing",
    "Enter shows 'Searching for: [entered text]'",
    "Style the input and result message with CSS"
  ],
  fileName: "task-36.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Search Keyboard Events</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; margin: 30px; color: #1e293b; text-align: center; }
    .card { max-width: 520px; margin: 0 auto; background: white; padding: 35px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    h2 { color: #1e40af; margin-top: 0; }
    
    #productInput {
      width: 100%;
      padding: 12px 16px;
      font-size: 15px;
      border: 2px solid #cbd5e1;
      border-radius: 8px;
      box-sizing: border-box;
      outline: none;
      background-color: #ffffff;
      transition: background-color 0.25s, border-color 0.25s;
    }

    /* Live Typed Output Box */
    .typed-preview {
      margin-top: 18px;
      padding: 12px;
      background: #f1f5f9;
      border-radius: 6px;
      font-size: 14px;
      color: #334155;
      text-align: left;
    }

    #searchFeedback {
      margin-top: 18px;
      font-size: 16px;
      font-weight: bold;
      color: #059669;
      min-height: 24px;
    }
  </style>
</head>
<body>

  <div class="card">
    <h2>Product Search Engine</h2>
    <p style="font-size: 13px; color: #64748b; margin-top: -5px; margin-bottom: 20px;">
      Input changes color while typing &bull; Press <strong>Enter</strong> to execute search
    </p>

    <input type="text" id="productInput" placeholder="Start typing product name..." oninput="handleTyping()" onkeydown="handleEnterSearch(event)">

    <div class="typed-preview">
      <strong>Live Typed Text:</strong> <span id="typedDisplay" style="color: #2563eb;">(Waiting for input...)</span>
    </div>

    <div id="searchFeedback"></div>

    <div style="margin-top: 25px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
      Student: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q36 Keyboard Events
    </div>
  </div>

  <script>
    function handleTyping() {
      const input = document.getElementById('productInput');
      const val = input.value;
      const display = document.getElementById('typedDisplay');

      if (val.length > 0) {
        input.style.backgroundColor = "#e0f2fe"; // Changed background when typing starts
        input.style.borderColor = "#0284c7";
        display.textContent = val;
      } else {
        input.style.backgroundColor = "#ffffff";
        input.style.borderColor = "#cbd5e1";
        display.textContent = "(Waiting for input...)";
        document.getElementById('searchFeedback').textContent = "";
      }
    }

    function handleEnterSearch(e) {
      if (e.key === 'Enter') {
        const val = document.getElementById('productInput').value.trim();
        if (val) {
          document.getElementById('searchFeedback').textContent = "Searching for: " + val;
        }
      }
    }
  </script>

</body>
</html>`
});

// Q37: Online Exam Question Interface
tasks.push({
  id: "task-37",
  number: 37,
  sectionId: 8,
  sectionName: "JavaScript Keyboard Event Handling",
  title: "Online Exam Question Interface (Click, Enter & Submit)",
  constraint: "Click selects answer + Enter submits + Mouseover highlights button",
  requirements: [
    "Mouse click selects an answer option and highlights it",
    "Enter key submits the selected answer",
    "Shows 'Answer Submitted Successfully'",
    "Mouse over highlights the Submit button"
  ],
  fileName: "task-37.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Online Exam Question Interface</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8fafc; margin: 30px; color: #1e293b; }
    .exam-box { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.06); }
    .exam-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 20px; }
    .exam-header h3 { margin: 0; color: #1e40af; }
    .q-number { background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 13px; }

    .question-text { font-size: 17px; font-weight: 600; line-height: 1.5; margin-bottom: 20px; color: #0f172a; }

    .options-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px; }
    .option-item {
      padding: 12px 18px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      cursor: pointer;
      font-size: 15px;
      transition: all 0.2s;
      user-select: none;
    }
    .option-item:hover { background: #f1f5f9; border-color: #cbd5e1; }
    .option-item.selected {
      background: #eff6ff;
      border-color: #2563eb;
      color: #1d4ed8;
      font-weight: bold;
      box-shadow: 0 2px 4px rgba(37,99,235,0.15);
    }

    #btnSubmitExam {
      background: #2563eb;
      color: white;
      border: none;
      padding: 12px 28px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s, transform 0.1s;
    }
    #btnSubmitExam.btn-highlight {
      background: #15803d !important;
      transform: scale(1.03);
    }

    #examStatus {
      margin-top: 20px;
      padding: 12px;
      border-radius: 6px;
      font-weight: bold;
      display: none;
    }
    .status-success { background: #ecfdf5; border: 1px solid #10b981; color: #065f46; }
    .status-warn { background: #fffbeb; border: 1px solid #f59e0b; color: #b45309; }
  </style>
</head>
<body onkeydown="handleExamKey(event)">

  <div class="exam-box">
    <div class="exam-header">
      <h3>VIT Online Assessment 2026</h3>
      <span class="q-number">Question 1 of 1</span>
    </div>

    <div class="question-text">
      Which HTML5 element is used to specify a footer for a document or section?
    </div>

    <div class="options-list">
      <div class="option-item" onclick="selectOption(this, 'A')">A. &lt;bottom&gt;</div>
      <div class="option-item" onclick="selectOption(this, 'B')">B. &lt;footer&gt;</div>
      <div class="option-item" onclick="selectOption(this, 'C')">C. &lt;section-footer&gt;</div>
      <div class="option-item" onclick="selectOption(this, 'D')">D. &lt;foot&gt;</div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center;">
      <button id="btnSubmitExam" onclick="submitAnswer()" onmouseover="this.classList.add('btn-highlight')" onmouseout="this.classList.remove('btn-highlight')">
        Submit Answer (Enter)
      </button>
      <span style="font-size: 12px; color: #64748b;">Press <strong>Enter</strong> to submit</span>
    </div>

    <div id="examStatus"></div>

    <div style="margin-top: 25px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
      Candidate: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q37 Exam Interface
    </div>
  </div>

  <script>
    let selectedAnswer = null;

    function selectOption(el, ans) {
      document.querySelectorAll('.option-item').forEach(item => item.classList.remove('selected'));
      el.classList.add('selected');
      selectedAnswer = ans;
    }

    function submitAnswer() {
      const status = document.getElementById('examStatus');
      if (selectedAnswer) {
        status.className = "status-success";
        status.textContent = "Answer Submitted Successfully! Selected: Option " + selectedAnswer;
        status.style.display = "block";
      } else {
        status.className = "status-warn";
        status.textContent = "Please select an answer option first!";
        status.style.display = "block";
      }
    }

    function handleExamKey(e) {
      if (e.key === 'Enter') {
        submitAnswer();
      }
    }
  </script>

</body>
</html>`
});

// Q38: Campus image viewer using the keydown event
tasks.push({
  id: "task-38",
  number: 38,
  sectionId: 8,
  sectionName: "JavaScript Keyboard Event Handling",
  title: "Campus Image Viewer (Arrow Keys & Enter Selection)",
  constraint: "Keyboard Event Handling: Right Arrow (next), Left Arrow (prev), Enter (select)",
  requirements: [
    "Campus image viewer using keydown event",
    "Right Arrow = next campus image",
    "Left Arrow = previous image",
    "Enter = display 'Image Selected' below the image",
    "Interactive UI buttons and active image indicator"
  ],
  fileName: "task-38.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Campus Image Viewer</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 35px 20px; }
    .gallery-box { max-width: 660px; margin: 0 auto; background: #1e293b; padding: 25px; border-radius: 14px; border: 1px solid #334155; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h2 { color: #38bdf8; margin-top: 0; }
    
    .img-display-frame {
      width: 100%;
      height: 340px;
      border-radius: 8px;
      overflow: hidden;
      margin: 15px 0;
      border: 2px solid #475569;
      background: #000;
    }
    .img-display-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }

    .nav-hint { font-size: 13px; color: #94a3b8; margin-top: 10px; }
    .key-tag { background: #334155; color: #f8fafc; padding: 3px 8px; border-radius: 4px; font-family: monospace; }

    #selectionBanner {
      min-height: 28px;
      font-size: 18px;
      font-weight: 800;
      color: #22c55e;
      margin-top: 15px;
    }
  </style>
</head>
<body onkeydown="handleCampusKeys(event)">

  <div class="gallery-box">
    <h2>VIT Campus Interactive Image Viewer</h2>
    <p style="font-size: 13px; color: #94a3b8;">Use Keyboard: &larr; Left Arrow &bull; &rarr; Right Arrow &bull; Enter to Select</p>

    <div class="img-display-frame">
      <img id="campusImg" src="/assets/img/campus1.svg" alt="Campus View">
    </div>

    <div id="campusTitle" style="font-size: 17px; font-weight: bold; color: #f8fafc;">
      1. Academic Central Block &ndash; VIT Campus
    </div>

    <div class="nav-hint">
      Press <span class="key-tag">&larr;</span> Prev &bull; <span class="key-tag">&rarr;</span> Next &bull; <span class="key-tag">Enter</span> Select
    </div>

    <div id="selectionBanner"></div>

    <div style="margin-top: 20px; font-size: 12px; color: #64748b; border-top: 1px solid #334155; padding-top: 10px;">
      Student: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q38 Campus Viewer
    </div>
  </div>

  <script>
    const campusImages = [
      { src: "/assets/img/campus1.svg", title: "1. Academic Central Block – VIT Campus" },
      { src: "/assets/img/campus2.svg", title: "2. Central Library & Amphitheatre – VIT Campus" },
      { src: "/assets/img/campus3.svg", title: "3. Technology Innovation Tower – VIT Campus" }
    ];
    let currentIndex = 0;

    function updateImage() {
      document.getElementById('campusImg').src = campusImages[currentIndex].src;
      document.getElementById('campusTitle').textContent = campusImages[currentIndex].title;
      document.getElementById('selectionBanner').textContent = "";
    }

    function handleCampusKeys(e) {
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % campusImages.length;
        updateImage();
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + campusImages.length) % campusImages.length;
        updateImage();
      } else if (e.key === 'Enter') {
        document.getElementById('selectionBanner').textContent = "Image Selected";
      }
    }
  </script>

</body>
</html>`
});

// Q39: Travel Photo Gallery with keyboard event handling (N, P, Spacebar)
tasks.push({
  id: "task-39",
  number: 39,
  sectionId: 8,
  sectionName: "JavaScript Keyboard Event Handling",
  title: "Travel Photo Gallery (N=Next, P=Prev, Spacebar=Name)",
  constraint: "Keyboard Event Handling: 'N' or 'n' (next), 'P' or 'p' (prev), ' ' (spacebar name)",
  requirements: [
    "Press N = next destination",
    "Press P = previous destination",
    "Spacebar = display the name of the current destination below the image",
    "Keyboard event handling"
  ],
  fileName: "task-39.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Travel Photo Gallery Keyboard Controls</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 35px 20px; }
    .gallery-card { max-width: 600px; margin: 0 auto; background: #1e293b; padding: 25px; border-radius: 14px; border: 1px solid #334155; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h2 { color: #38bdf8; margin-top: 0; }
    
    .img-box { width: 100%; height: 320px; border-radius: 8px; overflow: hidden; margin: 15px 0; border: 2px solid #475569; }
    .img-box img { width: 100%; height: 100%; object-fit: cover; display: block; }

    .keys-guide { display: flex; justify-content: center; gap: 15px; margin-top: 15px; font-size: 13px; color: #cbd5e1; }
    .key-btn { background: #334155; padding: 5px 12px; border-radius: 6px; font-family: monospace; font-weight: bold; color: #38bdf8; }

    #destNameDisplay {
      min-height: 30px;
      font-size: 20px;
      font-weight: 800;
      color: #38bdf8;
      margin-top: 20px;
      letter-spacing: 0.5px;
    }
  </style>
</head>
<body onkeydown="handleGalleryKeys(event)">

  <div class="gallery-card">
    <h2>Global Travel Photo Gallery</h2>
    <p style="font-size: 13px; color: #94a3b8;">Control gallery with your keyboard:</p>

    <div class="img-box">
      <img id="galleryImg" src="/assets/img/dest_paris.svg" alt="Destination Photo">
    </div>

    <div class="keys-guide">
      <div>Press <span class="key-btn">N</span> for Next</div>
      <div>Press <span class="key-btn">P</span> for Previous</div>
      <div>Press <span class="key-btn">Spacebar</span> for Name</div>
    </div>

    <div id="destNameDisplay">Press Spacebar to Reveal Destination Name</div>

    <div style="margin-top: 25px; font-size: 12px; color: #64748b; border-top: 1px solid #334155; padding-top: 10px;">
      Student: ${CONFIG.name} (${CONFIG.regNo}) &bull; Q39 Keyboard Navigation
    </div>
  </div>

  <script>
    const destinations = [
      { name: "Paris, France", img: "/assets/img/dest_paris.svg" },
      { name: "Kyoto, Japan", img: "/assets/img/dest_kyoto.svg" },
      { name: "Grand Canyon, USA", img: "/assets/img/dest_canyon.svg" },
      { name: "Swiss Alps, Switzerland", img: "/assets/img/dest_swiss.svg" }
    ];
    let destIndex = 0;

    function renderDestImage() {
      document.getElementById('galleryImg').src = destinations[destIndex].img;
      document.getElementById('destNameDisplay').textContent = "Press Spacebar to Reveal Destination Name";
      document.getElementById('destNameDisplay').style.color = "#94a3b8";
    }

    function handleGalleryKeys(e) {
      if (e.key === 'n' || e.key === 'N') {
        destIndex = (destIndex + 1) % destinations.length;
        renderDestImage();
      } else if (e.key === 'p' || e.key === 'P') {
        destIndex = (destIndex - 1 + destinations.length) % destinations.length;
        renderDestImage();
      } else if (e.key === ' ') {
        e.preventDefault(); // Prevent page scroll on spacebar
        const nameEl = document.getElementById('destNameDisplay');
        nameEl.textContent = "Destination: " + destinations[destIndex].name;
        nameEl.style.color = "#38bdf8";
      }
    }
  </script>

</body>
</html>`
});

// =========================================================================
// SECTION 9: Bootstrap Basics Practice (Q40 - Q41)
// =========================================================================

// Q40: College Event webpage using HTML, CSS and Bootstrap (CDN Link)
tasks.push({
  id: "task-40",
  number: 40,
  sectionId: 9,
  sectionName: "Bootstrap Basics Practice",
  title: "College Event Webpage (Bootstrap 5 CDN Link)",
  constraint: "BOOTSTRAP 5 CDN LINK ONLY (https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/...)",
  requirements: [
    "Header 'College Events 2026'",
    "Bootstrap navigation bar with Home, Events, Gallery, Contact",
    "Main section with a heading and short description",
    "Bootstrap-styled button 'View Events'",
    "Footer '© 2026 College Events'",
    "CSS for basic spacing, font size and background colors",
    "STRICT: Uses Bootstrap CDN Link"
  ],
  fileName: "task-40.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>College Events 2026 - Bootstrap CDN</title>
  
  <!-- STRICT CONSTRAINT: BOOTSTRAP CDN LINK -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <style>
    body { background-color: #f8f9fa; font-family: 'Segoe UI', system-ui, sans-serif; }
    .hero-section { background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%); color: white; padding: 80px 20px; border-radius: 0 0 30px 30px; }
    .event-card { transition: transform 0.2s, box-shadow 0.2s; }
    .event-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
    footer { background-color: #212529; color: #adb5bd; padding: 25px 0; margin-top: 60px; }
  </style>
</head>
<body>

  <!-- Bootstrap Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-primary" href="#home">College Events 2026</a>
      <div class="navbar-nav ms-auto gap-3">
        <a class="nav-link active" href="#home">Home</a>
        <a class="nav-link" href="#events">Events</a>
        <a class="nav-link" href="#gallery">Gallery</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Main Section -->
  <section class="hero-section text-center shadow">
    <div class="container">
      <h1 class="display-4 fw-bold mb-3">College Events 2026</h1>
      <p class="lead max-w-700 mx-auto mb-4" style="max-width: 650px;">
        Join us for an electrifying season of inter-college cultural showcases, national technical hackathons, 
        sports championships, and leadership summits at VIT.
      </p>
      <!-- Bootstrap-Styled Button -->
      <a href="#events" class="btn btn-warning btn-lg fw-bold px-4 py-2 shadow-sm">View Events</a>
    </div>
  </section>

  <!-- Events Showcase -->
  <main class="container my-5" id="events">
    <div class="row g-4 text-center">
      <div class="col-md-4">
        <div class="card event-card h-100 border-0 shadow-sm p-4">
          <div class="card-body">
            <h5 class="card-title text-primary fw-bold">Riviera Cultural Fest</h5>
            <p class="card-text text-muted">Asia's premier international collegiate cultural carnival featuring music, dance, and literary debates.</p>
            <span class="badge bg-primary">Feb 18 - 21, 2026</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card event-card h-100 border-0 shadow-sm p-4">
          <div class="card-body">
            <h5 class="card-title text-success fw-bold">graVITas Tech Fest</h5>
            <p class="card-text text-muted">Annual technological extravaganza celebrating cutting-edge robotics, AI marathons, and design sprints.</p>
            <span class="badge bg-success">Sep 24 - 27, 2026</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card event-card h-100 border-0 shadow-sm p-4">
          <div class="card-body">
            <h5 class="card-title text-danger fw-bold">National Sports League</h5>
            <p class="card-text text-muted">Inter-institutional athletics, football, basketball, and badminton championships across modern sports arenas.</p>
            <span class="badge bg-danger">Dec 05 - 08, 2026</span>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="text-center">
    <div class="container">
      <p class="mb-1">&copy; 2026 College Events &bull; All Rights Reserved</p>
      <small class="text-secondary">Designed by ${CONFIG.name} (${CONFIG.regNo}) using Bootstrap 5 CDN</small>
    </div>
  </footer>

</body>
</html>`
});

// Q41: Responsive User Authentication webpage using LOCAL Bootstrap file
tasks.push({
  id: "task-41",
  number: 41,
  sectionId: 9,
  sectionName: "Bootstrap Basics Practice",
  title: "Responsive User Authentication (Local Bootstrap Downloaded Files)",
  constraint: "LOCAL DOWNLOADED BOOTSTRAP FILES ONLY (/assets/bootstrap/bootstrap.min.css & js - NOT CDN)",
  requirements: [
    "Uses the layout structure from Q40 (navbar and footer)",
    "Login box: Username/Email, Password, Login button",
    "Registration box: Full Name, Email, Password, Confirm Password, Register button",
    "Bootstrap classes for layout and form components with custom CSS alignment",
    "STRICT: Uses downloaded local Bootstrap files: /assets/bootstrap/bootstrap.min.css & bootstrap.bundle.min.js (NOT CDN)"
  ],
  fileName: "task-41.html",
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Authentication - Local Bootstrap</title>

  <!-- STRICT CONSTRAINT: LOCAL DOWNLOADED BOOTSTRAP FILES (NOT CDN) -->
  <link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css">

  <style>
    body { background-color: #f1f5f9; min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between; }
    .auth-container { max-width: 1000px; margin: 40px auto; width: 100%; padding: 0 15px; }
    .auth-card {
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
      overflow: hidden;
      height: 100%;
    }
    .auth-card-header {
      background: #f8fafc;
      padding: 18px 24px;
      border-bottom: 1px solid #e2e8f0;
    }
    .auth-card-body { padding: 25px; }
    footer { background-color: #212529; color: #adb5bd; padding: 20px 0; }
  </style>
</head>
<body>

  <!-- Navigation bar from Q40 -->
  <nav class="navbar navbar-dark bg-dark py-3 shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand text-primary fw-bold" href="#">College Events 2026</a>
      <div class="navbar-nav d-flex flex-row gap-3">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Events</a>
        <a class="nav-link active" href="#">Portal Auth</a>
      </div>
    </div>
  </nav>

  <!-- Main Content: Login Box and Registration Box side by side using Bootstrap Grid -->
  <main class="auth-container">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-dark">Portal Authentication</h2>
      <p class="text-muted">Local Bootstrap 5.3 &bull; M. Arulmurugan (${CONFIG.regNo})</p>
    </div>

    <div class="row g-4">
      
      <!-- Box 1: Login Box -->
      <div class="col-md-5">
        <div class="auth-card">
          <div class="auth-card-header">
            <h4 class="m-0 text-primary fw-bold">Sign In to Account</h4>
            <small class="text-muted">Enter credentials to access portal</small>
          </div>
          <div class="auth-card-body">
            <form onsubmit="event.preventDefault(); alert('Login submitted successfully!');">
              <div class="mb-3">
                <label class="form-label" for="loginUser">Username / Email Address</label>
                <input type="text" class="form-control" id="loginUser" placeholder="24MIC0121 or user@vit.ac.in" required>
              </div>

              <div class="mb-3">
                <label class="form-label" for="loginPass">Password</label>
                <input type="password" class="form-control" id="loginPass" placeholder="Enter password" required>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="rememberMe">
                <label class="form-check-label text-muted" for="rememberMe" style="font-size: 14px;">
                  Remember this device
                </label>
              </div>

              <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">Login</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Box 2: Registration Box -->
      <div class="col-md-7">
        <div class="auth-card">
          <div class="auth-card-header">
            <h4 class="m-0 text-success fw-bold">Create New Account</h4>
            <small class="text-muted">Register for student event passes</small>
          </div>
          <div class="auth-card-body">
            <form onsubmit="event.preventDefault(); alert('Account registration successful!');">
              <div class="mb-3">
                <label class="form-label" for="regName">Full Name</label>
                <input type="text" class="form-control" id="regName" placeholder="M. Arulmurugan" required>
              </div>

              <div class="mb-3">
                <label class="form-label" for="regEmail">Email Address</label>
                <input type="email" class="form-control" id="regEmail" placeholder="student@vit.ac.in" required>
              </div>

              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label class="form-label" for="regPass">Password</label>
                  <input type="password" class="form-control" id="regPass" placeholder="Create password" required minlength="6">
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="regConfPass">Confirm Password</label>
                  <input type="password" class="form-control" id="regConfPass" placeholder="Re-enter password" required minlength="6">
                </div>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="regTerms" required>
                <label class="form-check-label text-muted" for="regTerms" style="font-size: 14px;">
                  I agree to the code of conduct and event policies
                </label>
              </div>

              <button type="submit" class="btn btn-success w-100 py-2 fw-bold">Register Account</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- Footer from Q40 -->
  <footer class="text-center">
    <div class="container">
      <p class="mb-1">&copy; 2026 College Events &bull; All Rights Reserved</p>
      <small class="text-secondary">Auth Portal &bull; Styled with Local Bootstrap: /assets/bootstrap/bootstrap.min.css</small>
    </div>
  </footer>

  <!-- STRICT LOCAL BOOTSTRAP BUNDLE JS -->
  <script src="/assets/bootstrap/bootstrap.bundle.min.js"></script>

</body>
</html>`
});

console.log("Section 5 - 9 tasks compiled (" + tasks.length + " tasks)");
fs.writeFileSync('scripts/tasks_part2.json', JSON.stringify(tasks, null, 2));
