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
