const myform = document.querySelector("form");
const inpTak = document.queryElementById("task")
const prioritySelect = document.getElementById("priority");
let tbody = document.querySelector("tbody")
let AllTask =[];
myform.addEventListener("submit",function(e)
{
    e.preventDefault();
     Data=
    {
        input : inpTak.value,
        priority:prioritySelect.value
    }
    AllTask.push(Data);

    tbody.innerHTML = "";
    AllTask.map((ele)=>
    {
        const tr =document.createElement("tr");
        const td1 = document.createElement("td");
        const  td2= document.createElement("td");
        td1.innerText=ele.input;
        td2.innerText=ele.priority;
        tr.append(td1,td2)
        tbody.append(tr)

    })
})