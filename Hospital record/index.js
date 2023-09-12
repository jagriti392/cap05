// fill in javascript code here
yFrom = addEventListener("submit", function(e){
    e.preventDefault();
     let name = document.getElementById("name").value;
     let employeeID = document.getElementById("employeeID").value;
     let department = document.getElementById("department").value;
     let expereince = document.getElementById("exp").value;
     let email = document.getElementById("email").value;
     let mobile = document.getElementById("mbl").value;
     let role;
     if(expereince > 5)
     {
         role = "Senior";
     }
     else if( expereince >=2 && expereince <= 5)
     {
         role = "Junior";
     }
     else
     {
         role  = "Fresher";
     }
     let tbody = document.querySelector("tbody");
     let row = document.createElement("tr");
     let data = [name, employeeID, department, expereince, email, mobile, role]
     data.forEach((ele)=>{
         let td = document.createElement("td");
         td.innerText = ele
         row.appendChild(td);
     })
     // Delete function
     let deleteTd = document.createElement("td");
     let deleteBtn = document.createElement("button");
     deleteBtn.innerText="Delete";
     deleteBtn.addEventListener("click",function(){
         tbody.removeChild(row);
     })
     deleteTd.appendChild(deleteBtn);
     row.appendChild(deleteTd);
     tbody.appendChild(row);
  })

