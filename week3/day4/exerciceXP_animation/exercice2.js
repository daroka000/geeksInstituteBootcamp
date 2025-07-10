function myMove() {
    const box = document.getElementById("animate");
    const container = document.getElementById("container");
  
    let pos = 0;
    const maxRight = container.offsetWidth - box.offsetWidth;
  
    const interval = setInterval(() => {
      if (pos >= maxRight) {
        clearInterval(interval); 
      } else {
        pos++;
        box.style.left = pos + "px";
      }
    }, 1); 
  };
  