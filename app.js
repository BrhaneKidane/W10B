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

//adding text content to the first selected h1 with innerText property
document.querySelector("h1").innerText = "MENU OF ERITREAN FOODS & FRUITS";

//creating new tag(element) and adding before an element
let newElem = "<h2>Eritrean Foods</h2>";
let bran = document.querySelector(".unordered_list");
bran.insertAdjacentHTML("beforebegin", newElem);
document.querySelector("section h2").style.padding = "20px";

//adding a new nested tag(element)
let newUnordered_lst = "<ul><li>Toyotoa</li><li>Chevorlet</li></ul>";
bran.insertAdjacentHTML("afterend", newUnordered_lst);

//function which accepts string as argument representive css selector
function addes(css_selector){
    let elem = document.getElementsByClassName(css_selector);
    for (let i = 0; i < elem.length; i++){
        
        if (elem[i].innerHTML.length < 30){
            elem[i].innerHTML = "NOT ENOUGH";
        }
            
    }
}
addes("Erip")


//function which accepts array of string as argument representive css selectors
function addarry (eri){
    for (let i = 0; i < eri.length; i++){
        let arr = document.getElementsByClassName(eri[i]);
        
        for (let j = 0; j < arr.length; j++ ){
            if (arr[j].innerHTML == "happy"){      
                arr[j].insertAdjacentHTML("afterend", "<p>Happy tag above</p>");
            }
        }
}
}
 addarry(["eri-01", "eri-02"]) //calling the function with array of strings


 //array of object and injection of object to the page
const objArry = [
{
    username: "Huss",
    bio: "Huss was frick",
    profile_image_url: "./huss-image.jpg"
},
{
    username: "Bruss",
    bio: "Bruss was frick, darn and golly",
    profile_image_url: "./bruss-image.jpg"
},


{
    username: "Moss",
    bio: "Moss was frick",
    profile_image_url: "./moss-image.jpg"

}

]

//loop for injecting the username of each object to the page
for (let i = 0; i < objArry.length; i++){
    let x = document.getElementById("divom")
    let y = document.createElement('p')
    x.appendChild(y).innerHTML = objArry[i].username;
}

//loop for injecting the bio of each object with chosen word being masked to the page
for (let i = 0; i < objArry.length; i++){
    let x = document.getElementById("divom")
    let y = document.createElement('p')
    let rep = objArry[i].bio
    x.appendChild(y).innerHTML = rep.replace(/frick|darn|golly/g, "****")
    
    
}
//loop for injecting the profile image(including the proper widt & height) of each object to the page
for (let i = 0; i < objArry.length; i++){
    let x = document.getElementById("divom")
    let y = document.createElement('img')
    x.appendChild(y).src = objArry[i].profile_image_url;
    x.appendChild(y).style.width = "100%";
    x.appendChild(y).style.height = "800px";

}

document.querySelector("h1").innerText = "MENU OF ERITREAN FOODS & FRUITS";