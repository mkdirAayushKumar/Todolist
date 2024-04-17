let input = document.querySelector("input");
input.setAttribute("placeholder","Enter the tasks here");

let btn = document.getElementById("addItem");
let ul = document.querySelector("ul");

btn.addEventListener("click",() =>{
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.classList.add(".delete");
    delBtn.innerText = "Delete Item"
    let addItem = input.value;
    if(addItem == ""){
        alert("Please Enter a value");
    }
    li.setAttribute("class","liClass");
    if(input.value != ""){
        li.innerText = input.value+"  ";
        ul.append(li);
        li.appendChild(delBtn);
        delBtn.addEventListener("click",()=>{
            console.log("Delete was pressed")
            delBtn.parentElement.remove();
        })
        input.value = "";
    }

    let delBtns = document.getElementsByClassName(".delete");
    console.log(delBtns);
})




