// var todoBox = document.getElementById("todobox")
// var task_form = document.getElementById("taskform")
// var task_input = document.getElementById("taskinput")
// task_form.addEventListener("submit", (ele) => {
//     ele.preventDefault();
// })

// function addTask() {
//     if (task_input.value === "") {
//         alert("please input something")

//     }
// // }
//     let createDiv;
//     let createInp;
//     let iconsDiv;
//     let createBold;
//     let editButton;
//     let deleteButton;
//     let updBtn;
//     createDiv = document.createElement("div")
//     createInp = document.createElement("input")
//     iconsDiv = document.createElement("div")
//     // iconsDiv.classList.add()
//     updBtn = document.createElement("button")
//     createBold = document.createElement("b")//ye samaj nhi aaya
//     editButton = document.createElement("i")
//     deleteButton = document.createElement("i")//ye samaj nhi aaya 

//     createInp.style.display = "none"
//     updBtn.style.display = "none"
//     updBtn.innerText = "update"
//     // updBtn.classList.add()
//     updBtn.setAttribute("onclick", "forUpd(this)")
//     // createDiv.classList.add("")
//     createInp.style.padding = "4px 10px"
//     // createBold.classList.add("")
//     // editButton.classList.add("")
//     editButton.setAttribute("onclick", "forEdit(this)")
//     // deleteButton.classList.add("")
//     deleteButton.setAttribute("onclick", "forDelete(this)")
//     createBold.innerHTML = task_input.value

//     todoBox.appendChild(createDiv)
//     createDiv.appendChild(createInp)
//     createDiv.appendChild(updBtn)
//     iconsDiv.appendChild(editButton)
//     createDiv.appendChild(createBold)
//     createDiv.appendChild(iconsDiv)
//     iconsDiv.appendChild(deleteButton)
//     task_input.value = ""

// }
//     function forDelete(ele) {
//         let parentDiv = ele.parentElement.parentElement
//         let boldElement = parentDiv.querySelector("b")
//         let inputElement = parentDiv.querySelector("input")
//         boldElement.innerHTML = ""
//         inputElement.value = ""
//         parentDiv.style.display = "none"
//     }
//     function forEdit(ele) {
//         let parentDiv = ele.parentElement.parentElement;
//         let boldElement = parentDiv.querySelector("b")
//         let inputElement = parentDiv.querySelector("input")
//         inputElement.value = boldElement.innerText
//         boldElement.innerText = ""

//         inputElement.style.display = "block"
//         updBtn.style.display = "block"
//     }
//     function forUpd(ele) {
//         let parentDiv = ele.parentElement;
//         // let boldElement = parentDiv.getElementsByTagName("b")
//         let inputElement = parentDiv.querySelector("input")
//         let updBtn = parentDiv.querySelector("button")
//         boldElement.innerHTML = inputElement.value;
//         inputElement.value = ""

//         inputElement.style.display = "none"
//         updBtn.style.display = "none"
//     }

// }














//  new code for todo list

// var taskInput = document.getElementById("taskinput")
// var taskButton = document.getElementById("taskbutton")

// function addTask() {
//     var content = document.getElementById("content")
//     var tasktext = taskInput.value
//     var createH3 = document.createElement("h3")
//     var editBtn = document.createElement("button")
//     editBtn.addEventListener("click", forEdit())
//     editBtn.innerText = "editbtn ."
//     var deleteBtn = document.createElement("button")
//     deleteBtn.innerText = "deletebtn"
//     // input.style.display = "none"
//     // updBtn.style.display = "none"
//     deleteBtn.addEventListener("click", forDelete())
//     createH3.innerHTML = tasktext
//     var input = document.createElement("input")
//     var updBtn = document.createElement("button")
//     updBtn.innerText = "Update"






//     console.log(createH3)
//     createH3.appendChild(input)
//     createH3.appendChild(updBtn)
//     content.appendChild(createH3)
//     createH3.appendChild(editBtn)
//     createH3.appendChild(deleteBtn)
// }







//     function forEdit() {


//         // var something=input.style.display="block"
//         // updBtn.style.display="block"
//     }


//     function forDelete() {

//         // content.removeChild(createH3)
//     }
// // }


// new code for todo list 

// let button = document.getElementsByClassName("add")

function addTask() {
   let input = document.querySelector("#taskinput")
   let addtask = document.querySelector(".tasks")
   if (input.value == "") {
      alert("please input a task!!")
      return;
   }
   else {
      var div = document.createElement(`div`)
      var para = document.createElement(`p`)
      para.innerText = input.value;
      addtask.appendChild(div)
      div.appendChild(para)

      var editBtn = document.createElement(`button`)
      editBtn.innerHTML = `Edit button`
      editBtn.setAttribute(`onclick`, `editbtn(this)`)
      div.append(editBtn)
      editBtn.classList.add(`taskbuttons`)
      var delBtn = document.createElement(`button`)
      delBtn.innerHTML = `delete button`
      delBtn.setAttribute(`onclick`, `deleteBtn(this)`)
      div.appendChild(delBtn)
      delBtn.className = `taskbuttons`
      input.value = ``

   }
}

function editbtn(editBtn) {
   var div = editBtn.parentElement;
   var siblingelement = editBtn.previousElementSibling;
   var editinput = document.createElement(`input`)
   editinput.setAttribute(`type`, `text`)
   editinput.value = siblingelement.innerText;
   editinput.className = `editinput`


   editBtn.className = `hide`
   siblingelement.className = `hide`
   editBtn.parentElement.prepend(editinput)
   var nextElement = editBtn.nextElementSibling;
   nextElement.className = `hide`

   var updatebtn = document.createElement(`button`)
   updatebtn.innerText = `update button`
   updatebtn.setAttribute(`onclick`, `updbtn(this)`)
   div.appendChild(updatebtn)
   updatebtn.classList.add(`taskbuttons`)


}



function deleteBtn(delBtn) {
   delBtn.parentElement.remove()
   // updatebtn.className=`hide`
   // updatebtn.className=`show`   
}

function updbtn(updateBtn) {
   var div = updateBtn.parentElement;
   var para = div.querySelector(`p`)
   var editinput = div.querySelector(`input[type="text"]`)
   var editBtn = div.querySelector(`button[onclick="editbtn(this)"]`)
   var delBtn = div.querySelector(`button[onclick="deleteBtn(this)"]`)


   para.innerText = editinput.value;

   para.className = ``
   editBtn.className = `taskbuttons`
   delBtn.className = `taskbuttons`

   div.removeChild(updateBtn)
   div.removeChild(editinput)
}
