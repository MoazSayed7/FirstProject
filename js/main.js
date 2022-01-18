// // Initialize and add the map
//function initMap() {
//    // The location of cairo
//    const cairo = { lat: 30.033333, lng: 31.233334 };
//    // The map, centered at cairo
//    const map = new google.maps.Map(document.getElementById("map"), {
//        zoom: 4,
//        center: cairo,
//    });
//    // The marker, positioned at cairo
//    const marker = new google.maps.Marker({
//        position: cairo,
//        map: map,
//    });
//}
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
// Smooth scrolling
//document.getElementById(navbar);
$("#navbar a, .btn").on("click", function (event) {

    if (this.hash !== "") {//Click
        event.preventDefault();//

        const hash = this.hash;
        //(selector).animate({styles},speed)
        $("html, body").animate({ scrollTop: $(hash).offset().top - 100 }, 1000);
    }
});


// navbar Opacity

window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.5;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});
