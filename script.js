const getcarousel = async ()=>{
    try{
        const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/slider");
        document.getElementById('carousel').innerHTML=response.data
        .map(
            (slide)=>
            `
              <div class="carousel-item active">
                <img src="${slide.imageUrl}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
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