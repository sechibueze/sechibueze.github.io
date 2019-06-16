let contactLinks = document.querySelectorAll(".contact-link");
let bannerCTA = document.querySelector("#banner-cta");
let aboutSection = document.querySelector("#about-section");
let talkToMe = document.querySelector("#talk-to-me");
contactLinks.forEach(contactLink => {
  contactLink.addEventListener("click", smoothRide, false);
});
bannerCTA.addEventListener("click", smoothRide, false);

function smoothRide(e) {
  if (window.scrollTo) {
    e.preventDefault();
    console.log("scrolled...", e.target.id);
    window.scrollTo({
      behavior: "smooth",
      top: getLocation(e)
    });
  }
}

function getLocation(evt) {
  //Decide location
  if (evt.target.id === "banner-cta") {
    return aboutSection.offsetTop;
  }

  return talkToMe.offsetTop;
}
