let main = document.querySelector('.main');
let homeBtn = document.querySelector('#homeBtn');
let cartBtn = document.querySelector('#cartBtn');

homeBtn.onclick = () => {
    if(main.children.length != items.length) {
        main.innerHTML = '';
        adding(items, main);
    };
}


let items = [
    {id: '01',  title: 'Item 1', description: 'description one', price: 10},
    {id: '02',  title: 'Item 2', description: 'two and three and four', price: 15.99},
    {id: '03',  title: 'Item 3', description: 'really good choice', price: 16.34},
    {id: '04',  title: 'Item 4', description: 'there was nothing peculiar about this', price: 17.99},
    {id: '05',  title: 'Item 5', description: 'blahblahblah', price: 20},
    {id: '06',  title: 'Item 6', description: 'unquestionable integrity', price: 9.99},
    {id: '07',  title: 'Item 7', description: 'These example sentences are selected automatically from various online news sources', price: 16.34},
    {id: '08',  title: 'Item 8', description: 'something that induces certainty or establishes validity', price: 17.99},
    {id: '09',  title: 'Item 9', description: 'to give a resistant quality to', price: 20},
    {id: '10',  title: 'Item 10', description: 'sometimes sugar or milk', price: 7.04},
    {id: '11',  title: 'Item 11', description: 'the earliest attestation of the term in print', price: 8},
    {id: '12',  title: 'Item 12', description: 'blahblahblah2', price: 5}    
];

let cartArr = [];

function itemElementMaker (obj) {
    let card = document.createElement('div');
    card.className = 'card col-sm-3';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    let title = document.createElement('h4');
    title.className = 'card-title';
    title.innerText = obj.title;

    let itemDesc = document.createElement('p');
    itemDesc.className = 'card-text';
    itemDesc.innerText = obj.description;

    let price = document.createElement('h4');
    price.className = 'price';
    price.innerText = obj.price + '$';

    let btn = document.createElement('button');
    btn.className = 'btn btn-light';
    btn.type = 'button';
    btn.innerText = 'Add To Cart';
    btn.onclick = () => cartArr.push(obj);

    cardBody.append(title, itemDesc, price, btn);
    card.append(cardBody);

    return card
}


function adding (arr, whereTo) {

    arr.forEach(element => {
        whereTo.append(itemElementMaker(element))
        console.log(element);
    });

}

adding(items, main);





