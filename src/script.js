fetch(`http://localhost:5000/products`)
    .then(res => {
        return res.json()  
    })
    .then(data => {
        let getData = '';
        data.map((item) => {
            getData+= `
                <h1>${item.name}</h1>
                <span id="span">${item.price}</span>
            `
        })

        // document.getElementById('main').innerHTML = getData

    })
    .catch(err => {
        console.log(err)
    })

    






