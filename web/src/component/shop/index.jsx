import axios from "axios";
import { useEffect, useState } from "react";



function Shop() {
  const [products, setProducts] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(true);
  const [cart , setCart]= useState(null);
 

  useEffect(() => {
    let getAllProducts = async () => {
      let response =await axios.get ("http://localhost:5000/products")
      // let response = await axios.get("https://crud--crud-app.herokuapp.com/products");
      setProducts(response.data.data.reverse());
    };
    getAllProducts();
  }, [toggleRefresh]);

//   let cartHandler = async (e) => {
//     e.preventDefault();


//     try {
//         let response = await
//             axios.post("http://localhost:5000/cart",
//                 {
//                     name: cart.name,
//                    price: cart.price,
//                     description: cart.description,
//                     code: cart.code,
//                 },
//                 {
//                     // withCredentials: true
//                 })
//         console.log("cart: ", response.data);

//         setToggleRefresh(!toggleRefresh);
//         setCart(null);


//     } catch (e) {
//         console.log("Error in api call: ", e);

//     }


// }
////////////////======================
let cartHandler = async (e) => {
      e.preventDefault();
  
  
      try {
          let response = await
              axios.post("http://localhost:5000/cart",
                  {
                      name: cart.name,
                     price: cart.price,
                      description: cart.description,
                      code: cart.code,
                  },
                  {
                      // withCredentials: true
                  })
          console.log("cart: ", response.data);
  
          setToggleRefresh(!toggleRefresh);
          setCart(null);
  
  
      } catch (e) {
          console.log("Error in api call: ", e);
  
      }
  
  
  }
/////////////////////=====================
  // const addToCart = async (e) => {
  //   e.preventDefault();

    
  //   // file input is for browser only, use fs to read file in nodejs client

  //   axios({
  //     method: "post",
  //     url: "http://localhost:5000/cart",
  //     //  url: "https://crud--crud-app.herokuapp.com/product",
  //     // withCredentials: true
  //   })
  //     .then((res) => {
  //       console.log(`upload Success` + res.data);
  //       document.querySelector("#message").innerHTML = res.data.message;
  //       setToggleRefresh(!toggleRefresh);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       document.querySelector("#message").innerHTML = err.res.data.message;
  //     });
  // };


  return (
    <>
    
    
    {(cart !== null) ? (< div >

<h1>
    update Cart
</h1>
<form onSubmit={cartHandler} >
    Name: <input type="text" disabled  value={cart.name} /> <br />
    Price: <input type="text"disabled  value={cart.price} /> <br />
    Description: <input type="text" disabled  value={cart.description} /> <br />
    Code: <input type="text"disabled   value={cart.code} /> <br />

    <button type="submit"> Proceed Cart </button>
</form>
</div>) : null}
  

       <div className="result">
        <div className="map1">
          {products.map((eachProduct) => (
            <div className="key1" key={eachProduct._id}>
              <div className="img1">
                <img className="pic" width='200px' src={eachProduct.profilePicture} alt="" />
              </div>
              <div className="detail">
                <p className="name1">{eachProduct.name}</p>
                <br />
                <div>{eachProduct.description}</div>
                <br />
              </div>
                <br />
                <div className="price">{eachProduct.price}</div>
                <br />
                <div>{eachProduct.code}</div>
                {/* <button onClick={() => { */}
                 <button onClick={() => { 
                setCart({
                    _id: eachProduct._id,
                    name: eachProduct?.name,
                    price: eachProduct?.price,
                    description: eachProduct?.description,
                    code: eachProduct?.code
                
                })
                
            }}>Add to Cart</button>
     
            </div>
          ))}
           
        </div>
      </div> 

   
    </>

  );
}
export default Shop;