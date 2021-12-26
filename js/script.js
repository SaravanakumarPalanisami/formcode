

let onformSubmit = document.getElementById("btn");
onformSubmit.addEventListener("click", (event)=>{
    let firstName =document.getElementById("FirstName");
let lastName =document.getElementById("lastName");
let Address = document.getElementById("address");
let Pincode=document.getElementById("pincode");
let gender = document.getElementById("gender");
let foodChoice= document.getElementById("foodchoice");
let state = document.getElementById("state");
let country = document.getElementById("country");
const nameTable = document.getElementById('nameTable');
    // let tableBody = document.getElementById("table-body");
    
   let tr=document.createElement("tr");
   let td1=document.createElement("td");
   let td2=document.createElement("td");
   let td3=document.createElement("td");
   let td4=document.createElement("td");
   let td5=document.createElement("td");
   let td6=document.createElement("td");
   let td7=document.createElement("td");
   let td8=document.createElement("td");
   let tableBody=document.createElement("tbody");

    // tableRow += `<tr>
    // <td>${firstName.value}</td>
    // <td>${lastName.value}</td>
    // <td>${Address.value}</td>
    // <td>${Pincode.value}</td>
    // <td>${gender.value}</td>
    // <td>${foodChoice.value}</td>
    // <td>${state.value}</td>
    // <td>${country.value}</td>
    // </tr>\n`;
    // tableBody.append(tableRow);

    td1.innerText=firstName;
    td2.innerText=lastName;
    td3.innerText=Address;
    td4.innerText=pincode;
    td5.innerText=gender;
    td6.innerText=foodChoice;
    td7.innerText=state;
    td8.innerText=country;

    tr.appendChild(td1,td2,td3,td4,td5,td6,td7,td8);
    tableBody.appendChild(tr);
    nameTable.appendChild(tableBody);

   let formclear= document.getElementById("formsubmit");
   formclear=formclear.reset();
    
    

});


