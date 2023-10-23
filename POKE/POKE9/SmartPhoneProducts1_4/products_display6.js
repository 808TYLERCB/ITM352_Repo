
const store_name="Tyler";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");            

let hits= 0;
let spins=0;
let over_half=false;
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;

const products = [
    {
        brand: "HTC",
        price: 40.00,
        image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg"
    },
    {
        brand: "Apple",
        price: 75.00,
        image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg"
    },
    {
        brand: "Nokia",
        price: 35.00,
        image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg"
    },
    {
        brand: "Samsung",
        price: 45.00,
        image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg"
    },
    {
        brand: "Blackberry",
        price: 10.00,
        image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg"
    }
];

for (const product of products) {
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${product.brand}</h2>
        <p>${product.price}</p>
        <img src="${product.image}" />
    </section>`;
}


function changeClassName(element) {
    if (element.className=='item'){
        element.className = 'item rotate';
        spins=spins+1;
    }

    if(spins<2*hits&&hits<spins){
        over_half=true;
    } 

    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
    
}
function resetClassName(element) {
    if(element.className== 'item rotate'){
        hits=hits+=2;
        element.className='item';
    } else {
        changeClassName(element);
    }
    
    if(spins<2*hits&&hits<spins){
        over_half=true;
    
    }
 
    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}