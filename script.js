let url = 'https://fakestoreapi.com/products';
const cards = document.querySelector('.cards')
const search = document.querySelector('input');

const clearBtn = document.getElementById('clear')
const alcoholicBtn = document.getElementById('alcoholic');
const nonAlcoholicBtn = document.getElementById('nonAlcoholic')

function fetchedData(){
    let promise = fetch(url)
    .then(promise=>promise.json())
    .then(data=>{
        console.log(data)
        data.forEach((card) => {


            const div  = document.createElement('div');
            div.className = `card`;
            cards.appendChild(div)
            const image =document.createElement('img');
            image.src = card.image
            image.className = 'image';
            div.appendChild(image);
            const title = document.createElement('div');
            title.className = 'title';
          })
        
    })}
fetchedData()
/*category
: 
"men's clothing"
description
: 
"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
id
: 
2
image
: 
"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
price
: 
22.3
rating
: 
{rate: 4.1, count: 259}
title
: 
"Mens Casual Premium Slim Fit T-Shirts "*/