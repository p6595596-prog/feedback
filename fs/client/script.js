let projects = [
  {name:"Neural Synthesizer v4", admin:"Admin A"},
  {name:"Quantum Stream Filter", admin:"Admin B"},
  {name:"Ghost Protocol Shield", admin:"Admin C"}
];

let currentProject = "";
let rating = 0;

function loadProjects(){
  let container = document.getElementById("projectContainer");
  if(!container) return;

  container.innerHTML = "";

  projects.forEach(p=>{
    let card = document.createElement("div");
    card.className = "client-card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Admin: ${p.admin}</p>
      <button onclick="openPopup('${p.name}')">Add Feedback</button>
    `;

    container.appendChild(card);
  });
}

function openPopup(project){
  currentProject = project;
  document.getElementById("popup").style.display = "flex";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

function rate(val){
  rating = val;
  let stars = document.querySelectorAll("#stars span");

  stars.forEach((s,i)=>{
    if(i < val) s.classList.add("active");
    else s.classList.remove("active");
  });
}

function submitFeedback(){
  let text = document.getElementById("feedbackInput").value;

  if(text===""){
    alert("Enter feedback");
    return;
  }

  alert("Feedback submitted!");

  document.getElementById("feedbackInput").value="";
  rating=0;
  closePopup();
}

loadProjects();