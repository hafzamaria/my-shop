import axios from "axios";
import { useEffect, useState } from "react";
// import "./index.css";

function Cart() {
  const [Name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [code, setCode] = useState("");
  const [carts, setCarts] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(true);

  //////////////======editproduct=========
  let [editProduct, setEditProduct] = useState(null);////
  let [loading, setLoading] = useState(false);
  
//////////////======editproduct=========

  useEffect(() => {
    let getAllCarts = async () => {
      let response =await axios.get ("http://localhost:5000/carts")
      // let response = await axios.get("https://crud--crud-app.herokuapp.com/products");
      setCarts(response.data.data.reverse());
    };
    getAllCarts();
  }, [toggleRefresh]);



  return (
    <>
      
 

  

     <div className="result">
        <div className="map1">
          {carts.map((eachCart) => (
            <div className="key1" key={eachCart._id}>
              <div className="img1">
                {" "}
                <img className="pic" width='200px' src={eachCart.profilePicture} alt="" />
              </div>
              <div className="detail">
                <p className="name1">{eachCart.name}</p>
                <br />
                <div>{eachCart.description}</div>
                <br />
              </div>
                <br />
                <div className="price">{eachCart.Price}</div>
                <br />
                <div>{eachCart.code}</div>
                <button onClick={() => { 
                eachCart({
                    _id: eachCart._id,
                    name: eachCart?.name,
                    price: eachCart?.price,
                    description: eachCart?.description,
                    code: eachCart?.code
                
                })
                
            }}>checkOut</button>
            </div>
          ))}
        </div>
      </div> 

   





    </>
  );
}

export default Cart;
