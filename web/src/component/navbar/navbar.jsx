import { Link } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import { GlobalContext } from "../context";

const NavBar = () => {
  let { state, dispatch } = useContext(GlobalContext);
  return (

    <nav className="nav">
    <div className="h1">
    <h1 className="navhead">TheEShop</h1>
    </div>
    {/* <div className='userName'>
      {state?.user?.firstName} {state?.user?.lastName}</div> */}
    <div className="userName">
    <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/signup">Signup</Link>
            </li>

            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            
          </ul>
    </div>
  </nav>

   
  );
};
export default NavBar;
 