const url = 'https://inspectbackend.herokuapp.com/todo';

let i=0;

async function loadTask() {
    let tableBodyContent = "";
    const { data: data} = await axios.get(url);
    
    data.forEach(user => {
        tableBodyContent += writeTaskRow(user);
        i++;
    });

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = tableBodyContent;
}

let selectedUserId = null;


function writeTaskRow (user) {
    const taskUpdate = encodeURIComponent(JSON.stringify(user));
    return `
    <tr id="row-${user._id}">
        <td>${i+1}</td>
        <td>${user.work}</td>
        <td>${user.status}</td>
        <td>${user.date}</td>
        <td>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#userModal" onclick="FormEdit('${taskUpdate}')">Edit</button>
            <button type="button" class="btn btn-danger" onclick="deleteTask('${user._id}')">Delete</button>
        </td>
    </tr>
        `;
}

function FormEdit(userPayload) {
    document.getElementById('submitbtn').innerHTML = "Update";    
    document.getElementById('staticBackdropLabel').innerHTML = "Edit Task";    
   const user = JSON.parse(decodeURIComponent(userPayload));
   
    document.getElementById('newtask').value = user.work;

    selectedUserId = user._id;
    

}

function submitForm() {
    if (!selectedUserId)
    saveUser();
    else 
    EditTask();
}

let date = new Date();
var ele = document.getElementsByName('Status');


async function saveUser() {
    
    for(j = 0; j < ele.length; j++) {
        if(ele[j].checked)
         var stat = ele[j].value;
    }
    const user = document.getElementById('newtask').value;

    const {data} = await axios.post(url, {user, stat, date});
    
    const task = {work: user, status: stat, date: data.date}
    
    const appendData = writeTaskRow(task);
    i++;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML += appendData;
 
    closeUserModal();
 }
 


async function EditTask() {
    const user = document.getElementById('newtask').value;

    await axios({
        method: 'put',
        url: 'https://inspectbackend.herokuapp.com/todo/' + selectedUserId,
        data: {work: user},
    });

    const work = document.querySelector('#row-'+ selectedUserId + " td:nth-child(2)");
    const status = document.querySelector('#row-'+ selectedUserId + " td:nth-child(3)");
    const Date = document.querySelector('#row-'+ selectedUserId + " td:nth-child(4)");
    const updatbtn = document.querySelector('#row-'+ selectedUserId + " td:nth-child(4) button:nth-child(1)");
    
    work.innerHTML = user;
    status.innerHTML = "To do";
    Date.innerHTML = date;
   
    closeUserModal();
}

function closeUserModal() {
    // const modalElement = getElementById('userModal');
    // const modal = bootstrap.Modal.getInstance(modalElement);
    // modal.hide();

    document.getElementById('newtask').value = "";
    for(j = 0; j < ele.length; j++) {
        if(ele[j].checked)
         ele[j].checked = false;
    }
    document.getElementById('submitbtn').innerHTML = "Save";    
    document.getElementById('staticBackdropLabel').innerHTML = "Add Task";    
    selectedUserId = null;
}

async function deleteTask(userid) {
    await axios.delete('https://inspectbackend.herokuapp.com/todo' + userid);

    const taskElement = document.getElementById('row-'+ userid);
    
    taskElement.remove(); 
}


loadTask();
