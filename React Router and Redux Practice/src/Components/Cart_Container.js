import Cart from "./Cart"
import products from "../Components/products.json";

const Cart_Container = () => {

  return (
    <div className="flex flex-wrap justify-center" >
      {/* <Cart/> */}
      {products.map((val)=>(
        <Cart key={val.id} img={val.image} name = {val.productName} price = {val.price}/>
      ))}
    </div>
  )
}

export default Cart_Container
