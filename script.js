//About Section - Event of showing and hidding tabs

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// Download CV button 


//Portfolio Section -Mix it Up- Filter animation 

let mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500
    }
}); //Not Working, check it later

// Portfolio Modal Pop Up animation
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay= document.querySelector(".modal-overlay");

zoom_icons.forEach(icn => icn.addEventListener("click", () => {
    prt_section.classList.add("open")
}));
modal_overlay.addEventListener("click",() => prt_section.classList.remove("open")
);
// terminar isso dps, vídeo parou no minuto 1:36:05, entender de ondem estao vindo esses prt_section, zoom_icons, modal_overlay.