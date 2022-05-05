fetch(`http://localhost:5000/products`)
    .then(res => {
        return res.json()  
    })
    .then(data => {
        let data1 = '';
        data.map((item) => {
            data1+= `
                <h1>${item.name}</h1>
                <span id="span">${item.price}</span>
            `
        })

        document.getElementById('main').innerHTML = data1

    })
    .catch(err => {
        console.log(err)
    })

    






