const imageContainer = document.querySelector(".image-container");
const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const logoUploadButton = document.getElementById("logo-upload-button");
const logoUploadInput = document.createElement("input");

logoUploadInput.setAttribute("type", "file");
logoUploadInput.setAttribute("accept", ".jpg,.png");
logoUploadInput.style.display = "none";
document.body.style.backgroundColor = "#C5E0DC";
logoUploadButton.style.backgroundColor = "#0000FF";
  // const imageInput = document.getElementById("logo-upload-input")
const imageButton = document.getElementById("logo-upload-button")

function showLoader() {
  loaderContainer.style.opacity = "1";
}

function hideLoader() {
  loaderContainer.style.opacity = "0";
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  const fileName = file.name;
  const clippedText = fileName.slice(0,15);
  const finalText = clippedText.concat(".....");
  const maxSizeInBytes = 5 * 1024 * 1024;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  imageButton.textContent = finalText;
  console.log(finalText);
  if (file.size > maxSizeInBytes) {
    alert("Please upload a file with size less than 5MB");
    location.reload();
    return;
  }
  reader.onloadend = () => {
    const uploadedLogo = document.getElementById("uploaded-logo");
    uploadedLogo.onload = () => {
      uploadedLogo.style.display = "block";
      umbrellaImage.style.zIndex = "-1";
    };
    uploadedLogo.src = reader.result;
  };
}

logoUploadButton.addEventListener("click", () => {
  logoUploadInput.click();
});

logoUploadInput.addEventListener("change", handleLogoUpload);

blueThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#C5E0DC";
    logoUploadButton.style.backgroundColor = "#0000FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Blue.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2500);
  });
});

yellowThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F7E09E";
    logoUploadButton.style.backgroundColor = "#FFA500";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Yello.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});

pinkThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F4C4C4";
    logoUploadButton.style.backgroundColor = "#FF00FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Pink.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});
