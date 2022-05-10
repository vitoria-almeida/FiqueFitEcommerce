fetch(`http://localhost:5000/products`)
    .then(res => {
        return res.json()  
    })
    .then(data => {
        let getData = '';
        data.map((item) => {
            getData+= `
                <div id="productCard">
                    <div><img src="${item.image}"/></div>
                    <h3>${item.name.toUpperCase()}</h3>
                    <p>R$ ${item.price}</p>
                    <span>até ${item.installment[0]}x de R$${item.installment[1]}</span>
                    <button>COMPRAR</button>
                </div>
            `
        })

        document.getElementById('centerContent').innerHTML = getData

    })
    .catch(err => {
        console.log(err)
    })




   


    






