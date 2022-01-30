// const container = document.querySelector(".postcontainer");
// function loadImages(numImages = 1) {
//   let i = 0;

//   while (i < numImages) {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((response) => response.json())
//       .then((data) => {
//         // const img = document.createElement("img");
//         const img = document.getElementById("img")
//         img.src = `${data.data.memes[4].url}`;
//         container.appendChild(img);
//       });
//     i++;
//   }
// }
// loadImages();

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY); //scrolled from top
//   console.log(window.innerHeight); //visible part of screen
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     loadImages();
//   }
// });
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.tenor.com/v1/random?q=MYQUERY&key=MYAPIKEY&limit=1",
//     "method": "GET"
//   }

//   $.ajax(settings).done(function (response) {
//     console.log(response);

//     var content = response.results.url;
//     $("#img").append(content);
//   });






const container = document.querySelector('.grid-scroll');
var page = 1; 
// default img
const loadImage = async () => {
    let res = await fetch(
      `https://api.unsplash.com/photos/?client_id=xcUUJf1lrIO_d5FCizTpQQZjBWL2Pa8Q8-aWSPiuzdQ&per_page=15&page=${page}`
    );
    let data = await res.json();
    showImage(data);
  };
  loadImage();
// info of default
function showImage(items) {
    items.forEach((item) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = item.urls.small;
      let title = document.createElement("p");
      title.innerText = item.description;
      title.style.color = "#ffffff";
      title.style.fontSize = "1.4vw";
      div.append(img, title);
      container.insertAdjacentElement("beforeend", div);
    });
  }
//timeout 
function showData(){
    setTimeout(()=>{
        page++;
        loadImage();
    }, 200)
}
window.addEventListener('scroll', ()=>{
    //default 
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if(scrollTop+clientHeight >= scrollHeight){
        showData()
    }

})
