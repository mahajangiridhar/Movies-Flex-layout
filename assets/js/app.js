let cl = console.log;

// <<<<<<<<<<<<<<<<=======================id selector===========================>>>>>>>>>>>>>
let table = document.getElementById("table")
cl(table)

let para = document.getElementById("para");
cl(para.innerText)
para.style.backgroundColor = "orange";

// let ulist = document.getElementById("ulist")
// cl(ulist.innerHTML)
// cl(ulist.innerText)

// <<<<<<<<<<<<<<<<<<<<=============class selectors=====================>>>>>>>>>>>>>>>>>>>>

let para1 = document.getElementsByClassName("para1");
cl(para1)
cl(para1.length)

para1 = Array.from(para1);
// para1.pop();

para1.forEach((ele => {
	ele.style.border = "2px solid black";
}))

cl(para1)

para1[1].style.backgroundColor = "orange";

// <<<<<<<<<<<<<<<<<<<==========================tag Selector=========================>>>>>>>>>>>>>>>>

let list = document.getElementsByTagName("ul")
cl(list)

cl(list[0].innerHTML)

list = Array.from(list)
// list.pop()

list.forEach(ele => {
	ele.style.border = "2px solid black";
})
cl(list)

// <<<<<<<<<<<=====================querySelector===============================>>>>>>>>>>>>>>>>>>

let ullist = document.querySelector(".skills")
cl(ullist.innerHTML)

ullist = ullist.style.listStyle = "none";

let advanceSkills = document.querySelector("#AdvanceSkills ol li")
cl(advanceSkills.innerHTML)
advanceSkills = document.querySelector("#AdvanceSkills ol li:last-child")
cl(advanceSkills.innerHTML)

// <<<<<<<<<<<=====================querySelectorAll===============================>>>>>>>>>>>>>>>>>>
let advanceSkills1 = document.querySelectorAll("#AdvanceSkills ol li")
cl(advanceSkills1)

let allList = Array.from(advanceSkills1)

allList.forEach(item => cl(item.innerHTML))