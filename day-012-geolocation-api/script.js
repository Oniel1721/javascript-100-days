const SELECTORS = {
  button: "button",
  latitude: "#latitude",
  longitude: "#longitude",
};

const $button = document.querySelector(SELECTORS.button);
const $latitude = document.querySelector(SELECTORS.latitude);
const $longitude = document.querySelector(SELECTORS.longitude);

$button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        $latitude.textContent = position.coords.latitude;
        $longitude.textContent = position.coords.longitude;
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});
