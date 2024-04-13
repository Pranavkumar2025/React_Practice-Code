// import './App.css';
// // import Counter from './Components/Counter';
// import CartContainer from './Components/Cart_Container';
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";

// function App() {

//   const cart = useSelector((store)=>store.mycart.items);
//   const [price,setPrice] = useState(0);

//   const totalPrice = ()=>{
//     let sum = 0;
//     cart.forEach(element => {
//       sum += element.price

//     });
//     setPrice(sum);
//   }
//   useEffect(()=>{
//     totalPrice();
//   },[cart]);
//   return (
//     <div>
//       <div  className='text-center text-[35px] bg-green-400 border rounded-lg'>
//       <h1>My FlipKart</h1>
//       <h2>Items : ({cart.length}) || Price: Rs {price}</h2>
//       </div>
//       <CartContainer/>
//       {/* <Counter/> */}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import CartContainer from "./Components/Cart_Container";
// import MyCartStore from "./Components/MyCartStore";

function App() {
  return (
    <div>
      <CartContainer />
    </div>
  );
}

export default App;
