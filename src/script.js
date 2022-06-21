fetch(`http://localhost:5000/products`)
    .then(res => {
        return res.json()  
    })
    .then(data => {
        let getData = '';
        data.map((item) => {
            getData+= `
                    <div id="cardProduct">
                    <div id="productCard">
                        <div><img src="${item.image}"/></div>
                        <h3>${item.name.toUpperCase()}</h3>
                        <p>R$ ${item.price}</p>
                        <span>até ${item.installment[0]}x de R$${item.installment[1]}</span>
                        <button>COMPRAR</button>
                    </div>   
                    </div>           
                `
        })

        document.getElementById('centerContent').innerHTML = getData
    })
    .catch(err => {
        console.log(err)
    })


//filter accordion
const card = document.getElementsByClassName('formAside')

for (i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function(e){
        this.classList.toggle("active");        
    })
}


//load button 
let loadMore = document.querySelector('#loadButton')
let currentItem = 8;

loadMore.onclick = () => {
    let boxes = [...document.querySelectorAll('#cardProduct')]
    for (var i = currentItem; i < currentItem+4; i++) {
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 4

    if(currentItem >= boxes.length) {
        loadMore.style.display = 'none'
        document.getElementById('footer').style.margin = '50px 0px 0px'
    }  
}



   


    






