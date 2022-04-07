var jobs = [];
const toddolist = "ToDoList";
 
function init() {
  if (localStorage.getItem(toddolist) == undefined) {
    localStorage.setItem(toddolist, JSON.stringify(jobs));
  } else {
    jobs = JSON.parse(localStorage.getItem(toddolist));
  }
} 
function updataJob() {
  let tbJob = document.querySelector("#task");
  let htmls = jobs.map(function (job, index) {
    return `
              <tr>
                  <td class="text" id = "idname_${index}">${job}</td>
                  <td class="center">
                       
                      <a style="text-decoration: none" class="output" href="javascript:;" onclick="editjob(${index})">
                      <i class="fas fa-edit"></i>
                      </a>
                      <a class="remove" href="javascript:;" onclick="remove(${index})">
                          <i class="fas fa-trash"></i>
                      </a>
                  </td>
              </tr>
              `;
  });

  tbJob.innerHTML = htmls.join("");
}
function editjob(index) {
 
  let todo = jobs[index];
   let str = `<input type="text" class="form-control" id="idtext" value = "${todo}">
   <button class="add" onclick="editToDo(${index})">Save</button>`;
   document.getElementById("idToDoList").innerHTML = str;
}
function editToDo(index){
  let valueText = document.getElementById("idtext").value;
  jobs[index] = valueText;

  let str = `<input type="text" class="form-control" id="idtext">
   <button class="add" onclick="addtodo()">Add</button>`;
   document.getElementById("idToDoList").innerHTML = str;

  updataJob();
}

function remove(index) {
  let confirmed = window.confirm("Are you sure to delete this job ?");
  if (confirmed) {
    jobs.splice(index, 1);
    updataJob();
    localStorage.setItem(toddolist, JSON.stringify(jobs));
  }
}
function dele(index) {
  let confirme = window.confirm("Are you sure to delete all ?");
  if (confirme) {
    jobs.splice(index, jobs.length);
    updataJob();
    localStorage.setItem(toddolist, JSON.stringify(jobs));
  }
}

function addtodo() {
  let namelist = document.querySelector("#idtext").value;
  if (namelist === "") {
    alert("Please enter job name !");
    return;
  }

  jobs.push(namelist);
  updataJob();
  localStorage.setItem(toddolist, JSON.stringify(jobs));
  document.querySelector("#idtext").value = "";
}

init();
updataJob();
