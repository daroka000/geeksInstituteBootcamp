function calculateVolume(event) {
    event.preventDefault(); 
  
    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");
  
    const radius = parseFloat(radiusInput.value);
    if (isNaN(radius) || radius <= 0) {
      volumeInput.value = "Invalid radius";
      return;
    }
  
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2);
  }

  window.onload = function () {
    const form = document.getElementById("MyForm");
    form.addEventListener("submit", calculateVolume);
  };
  