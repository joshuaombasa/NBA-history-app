const header = document.querySelector('h1')
header.textContent = 'This is our heading!'
const anotherParagraph = document.createElement('p')
anotherParagraph.textContent = 'This is another paragraph'

const container = document.querySelector('.container')
container.appendChild(anotherParagraph)
const paragraph2 = document.createElement('p')
paragraph2.textContent = 'The Lakers are one of the most successful teams in the history of the NBA, and have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history. The franchise began with the 1947 purchase of a disbanded team, the Detroit Gems of the National Basketball League (NBL).'

const bostonParagraph = document.createElement('p')
bostonParagraph.textContent = 'Boston Celtics, American professional basketball team based in Boston, Massachusetts. One of the most successful franchises in sports history, the Celtics won 11 of 13 National Basketball Association (NBA) championships from 1957 to 1969. Overall, they have won 17 NBA titles.'

const btn1 = document.getElementById('button1')
btn1.addEventListener('click', () => {
    container.appendChild(paragraph2);
    container.classList.add('backgroundLakers')
});

const btn2 = document.getElementById('button2')
btn2.addEventListener('click', () => {
    container.appendChild(bostonParagraph);
    container.classList.remove('backgroundLakers')
    container.classList.add('backgroundBoston')
});