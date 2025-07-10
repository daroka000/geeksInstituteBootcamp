function sayHello() {
    alert("Hello World");
  };
  
  setTimeout(sayHello, 2000);
  //partie II
function addParagraph() {
    const container = document.getElementById("container");
  
    const p = document.createElement("p");
    p.textContent = "Hello World";
  
    container.appendChild(p);
  };
  setTimeout(addParagraph, 2000);
  
  function setInterval() {
    
  };

  //partie III
function addParagraph() {
    const container = document.getElementById("container");

    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    const totalParagraphs = container.getElementsByTagName("p").length;
  
    if (totalParagraphs >= 5) {
      clearInterval(intervalId);
    }
  };
  const intervalId = setInterval(addParagraph, 2000);
  