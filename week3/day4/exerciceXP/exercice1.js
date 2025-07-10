const head = document.querySelector('h1');
console.log(head.textContent);

const article = document.querySelector('article');
const paragraphs = article.getElementsByTagName('p');
const lastParagraph = paragraphs[paragraphs.length - 1];

article.removeChild(lastParagraph);
//console.log(article.textContent);

const head2 = document.querySelector('h2');
head2.addEventListener('click', function () {
  head2.style.backgroundColor = 'red';
});


const head3 = document.querySelector('h3');
head3.addEventListener('click', function () {
  head3.style.display = 'none';
});

const button = document.getElementById('button');

button.addEventListener('click', function () {
  const paragraphs = document.querySelectorAll('article p');
  paragraphs.forEach(p => {
    p.style.fontWeight = 'bold';
  });
});

const heading = document.querySelector('h1');
heading.addEventListener('mouseover', function () {
  const randomSize = Math.floor(Math.random() * 101); 
  heading.style.fontSize = randomSize + 'px';
});

const secondParagraph = document.querySelectorAll('article p')[1];
secondParagraph.addEventListener('mouseover', function () {
  secondParagraph.classList.add('fade-out');
});


