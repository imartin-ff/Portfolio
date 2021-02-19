$(document).ready(function(){
  // document.getElementsByClassName("skills__bar");
  var sBars = document.querySelectorAll(".skills__bar");
  sBars.forEach(function(item){
    if(item.hasAttribute("data-percent")){
      item.style.width = item.dataset.percent + "%";
    }
  })
})
