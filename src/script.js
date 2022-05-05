fetch(`http://localhost:5000/products`)
.then(res => {
    return res.json()
})
.then(data => {
   console.log(data)
})