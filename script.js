let percent = 0;
let target = 90;

let interval = setInterval(() => {
  if (percent >= target) clearInterval(interval);
  percent++;
  document.getElementById("progressCircle").innerText = percent + "%";
}, 20);
// PROJECT ARRAY
let projects = [
  "AI Chatbot",
  "Feedback System",
  "Dashboard UI",
  "E-commerce Platform"
];

let clients = [
  { name: "John", project: "AI Chatbot" },
  { name: "Priya", project: "Feedback System" },
  { name: "Arun", project: "Dashboard UI" },
  { name: "Sara", project: "E-commerce Platform" }
];

let feedbacks = [
  { client: "John", project: "AI Chatbot", msg: "UI is smooth" },
  { client: "Priya", project: "Feedback System", msg: "Easy to use" },
  { client: "Arun", project: "Dashboard UI", msg: "Looks modern" },
  { client: "Sara", project: "E-commerce Platform", msg: "Needs payment fix" }
];
// ADD PROJECT
function addProject() {
  let input = document.getElementById("projectInput");
  let name = input.value.trim();

  if (name === "") return;

  projects.push(name);
  displayProjects();

  input.value = "";
}

// DISPLAY PROJECTS
function displayProjects() {
  let list = document.getElementById("projectList");

  if (!list) return; // prevents error in home page

  list.innerHTML = "";

  projects.forEach((p, index) => {
    let row = document.createElement("div");
    row.className = "row";

    row.innerHTML = `
      <div>${p}</div>
      <button onclick="deleteProject(${index})">Delete</button>
    `;

    list.appendChild(row);
  });
}

// DELETE PROJECT
function deleteProject(index) {
  projects.splice(index, 1);
  displayProjects();
}

// AUTO LOAD
displayProjects();


function loadClients() {
  let container = document.getElementById("clientTable");

  if (!container) return;

  container.innerHTML = "";

  clients.forEach(c => {
    let row = document.createElement("div");
    row.className = "row";

    row.innerHTML = `
      <div>${c.name}</div>
      <div>${c.project}</div>
    `;

    container.appendChild(row);
  });
}

function loadFeedbacks() {
  let container = document.getElementById("feedbackList");

  if (!container) return;

  container.innerHTML = "";

  feedbacks.forEach(f => {
    let row = document.createElement("div");
    row.className = "row";

    row.innerHTML = `
      <div>${f.client}</div>
      <div>${f.project}</div>
      <div>${f.msg}</div>
    `;

    container.appendChild(row);
  });
}


displayProjects();
loadClients();
loadFeedbacks();
