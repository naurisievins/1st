//Switch tabs
function openTab(titleID,contentID,elmnt,color) {
  var i, title, content, navbut;
  title = document.getElementsByClassName("title");
  for (i = 0; i < title.length; i++) {
    title[i].style.display = "none";
  }
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  navbut = document.getElementsByClassName("navbut");
  for (i = 0; i < navbut.length; i++) {
    navbut[i].style.backgroundColor = "";
    navbut[i].style.color = "rgb(219, 210, 210)";
  }
  document.getElementById(titleID).style.display = "block";
  document.getElementById(contentID).style.display = "block";
  //elmnt.style.color = "grey";
  elmnt.style.backgroundColor = color;

  if (document.getElementById("donateTitle").style.display == "block") {
    document.getElementById("doncard").style.display = "none";
    elmnt.style.backgroundColor = "";
  }
  else {
    document.getElementById("doncard").style.display = "block";
  }
}
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();



// Dropdown
function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn2')) {
      var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
    }
}


//Copy donation address to clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
const button = document.getElementById('addbtn')
button.addEventListener("click", () => {
  button.innerText = 'Copied!'
  setTimeout(() => {
    button.innerText = 'Copy Address'
  }, 3000)
});

