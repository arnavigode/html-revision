var studentList = document.querySelector("#students");

var next = 1;
function scrollList() {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement("p");
    item.innerText = "Masai Student " + next++;
    studentList.appendChild(item);
  }
}

studentList.addEventListener("scroll", function () {
  if (
    studentList.scrollTop + studentList.clientHeight >=
    studentList.scrollHeight
  ) {
    scrollList();
  }
});
scrollList();
