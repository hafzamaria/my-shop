import axios from "axios";
import { useEffect, useState } from "react";



function Shop() {
  const [products, setProducts] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(true);
  const [form , setForm]= useState(null);
  const [product , setProduct]= useState(null);
  const [cart, setCart]= useState(null);
  useEffect(() => {
    let getAllProducts = async () => {
      let response =await axios.get ("http://localhost:5000/carts")
      // let response = await axios.get("https://crud--crud-app.herokuapp.com/products");
      setProducts(response.data.data.reverse());
    };
    getAllProducts();
  }, [toggleRefresh]);

////////////////======================
// let cartHandler = async (e) => {
//       e.preventDefault();
  
  
//       try {
//           let response = await
//               axios.post("http://localhost:5000/form",
//                   {
//                       name: form.name,
//                      email: form.email,
//                       address: form.address,
//                       contact: form.contact,
//                       city:form.city
//                   },
//                   {
//                       // withCredentials: true
//                   })
//           console.log("form: ", response.data);
  
//           setToggleRefresh(!toggleRefresh);
//           setForm(null);
  
  
//       } catch (e) {
//           console.log("Error in api call: ", e);
  
//       }
  
  
//   }

let cartHandler = async (e) => {
  e.preventDefault();


  try {
      let response = await
          axios.post("http://localhost:5000/form",
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
    {/* {(form !== null) ? (< div >

<h1>
    update Cart
</h1>
<form onSubmit={cartHandler} >
    Name: <input type="text" disabled  value={form.name} /> <br />
    Email: <input type="text"disabled  value={form.email} /> <br />
    Address: <input type="text" disabled  value={form.address} /> <br />
    Contact: <input type="text"disabled   value={form.contact} /> <br />
    City: <input type="text"disabled   value={form.city} /> <br />
    <button type="submit"> Submit </button>
</form>
</div>) : null} */}
  

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
                
            }}>Go to Chekout</button>
     
            </div>
          ))}
           
        </div>
      </div> 

   
    </>

  );
}
export default Shop;