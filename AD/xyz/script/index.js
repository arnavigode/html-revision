// https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=JZRuOFpnWlSNQKkkrWu_kIrv0KCl-E2CoOwbY2EAQn0

const api = "JZRuOFpnWlSNQKkkrWu_kIrv0KCl-E2CoOwbY2EAQn0";
import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import {srchImg, append} from "./fetch.js"

let srch = (e) => {
  if (e.key === "Enter") {
    let value = document.getElementById("query").value;
    srchImg(api, value).then((data)=>{
        // console.log(data)
        let container = document.getElementById("container")
        container.innerHTML = null;
        append(data.results, container)
    });
  }
};

document.getElementById("query").addEventListener("keydown", srch);


let categories = document.getElementById("categories").children;

// console.log(categories)
function catSrch(){
    console.log(this.id)
    srchImg(api, this.id).then((data)=>{
        console.log(data)
        let container = document.getElementById("container")
        container.innerHTML = null;
        append(data.results, container)
    });
}
for(let el of categories){
    el.addEventListener("click", catSrch)
}

// h3 = {
//     id: "namture",

// }