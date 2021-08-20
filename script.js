const getcarousel = async ()=>{
    try{
        const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/slider");
        document.getElementById('carousel').innerHTML=response.data
        .map(
            (slide,i)=>
            
            `
              <div class="carousel-item active">
                <img src="${slide.imageUrl}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <p>${slide.sliderText}</p>
                </div>
              </div>           
            `
        )
        .join("");
        
    }catch (e) {
        console.log(`e`, e);
    }
};
getcarousel()

const getproducts =async ()=>{
    try{
        const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/productlist");
        document.getElementById('product').innerHTML=response.data.map(
            (product)=>
            `
            <div class="card" style="width: 18rem;">
            <img src="${product.prdImageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.prdname}</h5>
              <p class="card-text">${product.prdPrice}</p>
              
            </div>
            <button onclick="location.href='productdetail.html?id=${product.id}';" class="btn btn-primary">Add to cart</button>
          </div> 
            `
        )
        .join("");
    }catch(e){
        console.log(`e`,e);
    }
}
getproducts()

/* localStorage.setItem("productA",) */


var cartitem=[];
var imgd=document.getElementById('imgdetail')
var named=document.getElementById('namedetail')
var priced=document.getElementById('pricedetail')

document.getElementById('adddata').addEventListener('click',()=>{
  cartitem.push({img:imgd,name:named,price:priced})
})

console.log(cartitem)

var output = document.getElementById('cart')
let searchParams = new URLSearchParams(window.location.search).get("id");
console.log(searchParams);


 const getdetail =async ()=>{
    try{
        
        const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/productdetail");
        document.getElementById('cart').innerHTML=response.data
        .filter((x=> x.id == searchParams))
        .map(
        (detail)=>
    `
      <div class="row">
        <div class="col-3">
          <img src="${detail.cartitem.img}" id="img"> 
        </div>
        <div class="col-5">
          <p id="prdname">${detail.cartitem.name}</p>
          <p id="prdPrice">${detail.cartitem.price}</p>
       
       
        <div class="row">
          <div class="col-4">
            <p>size</p>
       <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Please Select
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#">S</a></li>
        <li><a class="dropdown-item" href="#">M</a></li>
        <li><a class="dropdown-item" href="#">L</a></li>
        <li><a class="dropdown-item" href="#">XL</a></li>
    </ul>
    </div>
          </div>
          <div class="col-4">
            <p>Quantity</p>
       <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Please Select
        </a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#">1</a></li>
        <li><a class="dropdown-item" href="#">2</a></li>
        <li><a class="dropdown-item" href="#">3</a></li>
        <li><a class="dropdown-item" href="#">4</a></li>
    </ul>
    </div>
          </div>
        </div>
    
   
    <button onclick="location.href='#';" class="btn btn-primary">Add to cart</button>

   
        </div>

      </div>
      
       
    `
)
.join("");
    }catch{
        console.log(`e`,e);
    }
}
getdetail() 