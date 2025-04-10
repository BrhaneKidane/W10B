
//styling the head of the webpage
let heads = document.getElementById("heading");
heads.style.backgroundColor = 'black';
heads.style.color = "white";
heads.style.textAlign = "center";
heads.style.padding = "20px";
heads.style.borderRadius = "10px";

//styling the main section
let mains = document.querySelector("main");
mains.style.backgroundColor = "#20ba49";
mains.style.padding = "25px";
mains.style.marginTop = "30px";
mains.style.borderRadius = "15px";


let sect = document.querySelectorAll("section");
for (let i = 0; i < sect.length; i++){
    sect[i].style.backgroundColor = "red";
    sect[i].style.borderRadius = "15px"; 
}

//style the font color of the unordered list elements
let lst = document.getElementsByClassName("unordered_list")
for (let i = 0; i < lst.length; i++){
    lst[i].style.color = "white";
}

//styling the footer of the webpage
let foots = document.getElementById("footing");
foots.style.backgroundColor = "#703d25";
foots.style.padding = "40px";
foots.style.marginTop = "30px"
foots.style.borderRadius = "20px";

//adding or changing content to the contact list of the footer
let cont = document.querySelector(".ft .branch");
cont.innerText = "Branch address";

//creating new tag(element) and adding before an element
let newElem = "<h2>Eritrean Foods</h2>";
let bran = document.querySelector(".unordered_list");
bran.insertAdjacentHTML("beforebegin", newElem);
document.querySelector("section h2").style.padding = "20px";

//adding a new nested tag(element)
let newUnordered_lst = "<ul><li>Toyotoa</li><li>Chevorlet</li></ul>";
bran.insertAdjacentHTML("afterend", newUnordered_lst);

