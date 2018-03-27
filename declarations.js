const root = document.getElementById('root');
const ul = document.getElementById('ul');
const medicines = document.getElementById('medicines');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

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

function showMedicines(array){
  removeGenerics();
  array.map(item => {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = item;
    medicines.appendChild(li);
  });

} // render list of generics

document.addEventListener('click', (e) => {
  if(e.target.className === 'card-body'){
    clearCardColor();
    e.target.style.backgroundColor = 'orange';
    let drug = e.target.textContent;
    let buttons = Array.from(document.querySelectorAll('li>button'));
    let result = buttons.filter((item) => {
      if(item.className === 'btn btn-success'){
        return item;
      }
    });
    let phGroup = result[0].textContent;
    let newArray = data[phGroup][drug].join(',').split(',');
    showMedicines(newArray);
  }
}); // click on inn

function removeGenerics() {
  let generics = document.querySelectorAll('#medicines>.list-group-item');
  let genericsArr = Array.from(generics);
  genericsArr.forEach(arr => {
    medicines.removeChild(arr);
  });
} // remove generics so we can add new ones

function clearCardColor(){
  let cards = document.querySelectorAll('.card-body');
  let cardsArr = Array.from(cards);
  cardsArr.forEach((card) => 
    card.style.backgroundColor = 'white'
  );
} // make card background white 

input.addEventListener('input', (e) => {
  e.preventDefault();
  let value = input.value.toUpperCase();
  filterNames(value);
  // input.value = '';
});

function filterNames(inputVal) {
  let cards = document.querySelectorAll('.card-body');
  let cardsArr = Array.from(cards);
  let newArr = cardsArr.map((card) => {
    if(card.textContent.toUpperCase().indexOf(inputVal)>-1){
      card.parentElement.style.display = '';
    } else {
      card.parentElement.style.display = 'none';
    }
  });
}




