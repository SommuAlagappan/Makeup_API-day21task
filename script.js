
const makeup = async() => {
try{
var product_type = document.getElementById("product_type").value
console.log(product_type)

   const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`)
   const data = await res.json()

   console.log(data)


//Cards

   var productCards = document.getElementById("productCardsNew")
   productCardsNew.innerHTML= `<div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[1].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[1].id}</p>
         <p class="card-text"><b>Brand: </b>${data[1].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[1].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[1].description}</p>
         <a href= ${data[1].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
     </div>
   </div>
  </div>
  </div>
  
  <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[2].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[2].id}</p>
         <p class="card-text"><b>Brand: </b>${data[2].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[2].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[2].description}</p>
         <a href= ${data[2].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>

 <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[3].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[3].id}</p>
         <p class="card-text"><b>Brand: </b>${data[3].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[3].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[3].description}</p>
         <a href= ${data[3].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>

 <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[4].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[4].id}</p>
         <p class="card-text"><b>Brand: </b>${data[4].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[4].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[4].description}</p>
         <a href= ${data[4].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>

 <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[5].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[5].id}</p>
         <p class="card-text"><b>Brand: </b>${data[5].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[5].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[5].description}</p>
         <a href= ${data[5].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>

 <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[6].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[6].id}</p>
         <p class="card-text"><b>Brand: </b>${data[6].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[6].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[6].description}</p>
         <a href= ${data[6].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
     </div>
   </div>
  </div>
  </div>

  <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[7].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[7].id}</p>
         <p class="card-text"><b>Brand: </b>${data[7].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[7].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[7].description}</p>
         <a href= ${data[7].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>

 <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[8].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[8].id}</p>
         <p class="card-text"><b>Brand: </b>${data[8].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[8].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[8].description}</p>
         <a href= ${data[8].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>

 <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[9].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[9].id}</p>
         <p class="card-text"><b>Brand: </b>${data[9].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[9].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[9].description}</p>
         <a href= ${data[9].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>

 <div class="card mb-3 mx-auto" style="max-width: 800px">
   <div class="row g-0 mt-5">
     <div class="col-md-4">
       <img src="${data[10].api_featured_image}" class="img-fluid rounded-start">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h2 class="card-title text-capitalize">${product_type}</h2>
         <p class="card-text"><b>Id no: </b>${data[10].id}</p>
         <p class="card-text"><b>Brand: </b>${data[10].brand}</p>
         <p class="card-text"><b>Price: $</b>${data[10].price}</p>
         <p class="card-text"><b>Product Description: </b>${data[10].description}</p>
         <a href= ${data[10].product_link} target="_blank" class="btn btn-outline-dark"><b>Click to buy</b></a>
  
   </div>
  </div>
  </div>
 </div>`
}
catch(err) {
  console.log(err)
  alert("Search string is not correct")
  }
}

//Assigning submit button with an addeventlistener with event-click and a callback function(makeup)
var submitButton = document.querySelector(".submitButton")
submitButton.addEventListener("click", makeup)









   