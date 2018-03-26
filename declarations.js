const root = document.getElementById('root');
const ul = document.getElementById('ul');


function createCard(inn){
  let card = document.createElement('div');
  card.classList.add('card');
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  cardBody.textContent = inn;
  card.appendChild(cardBody);
  root.appendChild(card);
} // create drug card elements

function createCategory(){
  Object.keys(data).map((item) => {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.onclick = clickHandler;
    button.textContent = item;
    li.appendChild(button);
    ul.appendChild(li);
  });
} // create ul with li

function clickHandler(){
  let buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(item => {
    if(item.className === 'btn btn-success'){
      item.classList.remove('btn-success');
      item.classList.add('btn-primary')
    }
  });
  this.classList.remove('btn-primary');
  this.classList.add('btn-success');
  let cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach(item => root.removeChild(item));
  let name = this.textContent;
  for(const [key, value] of Object.entries(data)){
    if(key === name){
      return groupFn(value);
    }
  }
} // button click handler

function groupFn(group){
  Object.keys(group).map(drug => {
    createCard(drug);
  });
} // create card with every medicine

document.addEventListener('click', (e) => {
  if(e.target.className === 'card-body'){
    console.log(e.target);
  }
});

function addHover(){
  
}