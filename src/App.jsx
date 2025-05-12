
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './components/Layout/Layout';
// import Home from './components/home/Home';
// import Cart from './components/cart/Cart';
// import Products from './components/products/Products';
// import Categories from './components/categories/Categories';
// import Brands from './components/brands/Brands';
// import Register from './components/Register/Register';
// import Login from './components/Login/Login';
// import AuthContext from './Context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import error from "../src/components/images/error.svg"
// import ProductDetails from './components/Productdetails/Productdetails';
// import { Toaster } from 'react-hot-toast';
// import CartContext from './Context/CartContext/CartContext';
// import Payment from './components/Payment/Payment';
// import ForgetP from './components/Login/ForgetP/ForgetP';
// import WishList from './components/WishList/WishList';
// import ResetP from './components/Login/ForgetP/ResetP';
// import WishListContext from './Context/WishListContext/WishListContext';






// const final_project = createBrowserRouter ( [
//   { path: '' , element: <Layout/> , children: [
//   { index:true , element:<ProtectedRoute>
//     <Home/>
//   </ProtectedRoute> },
//   { path: 'Register', element:<Register/> },
//   { path: 'Login', element:<Login/> },
//   { path:"home" , element:<ProtectedRoute>
//     <Home/>
//   </ProtectedRoute> },
//   { path:"cart" , element:<ProtectedRoute>
//     <Cart/>
//   </ProtectedRoute> },
//   { path: "products" , element:<ProtectedRoute>
//     <Products/>
//   </ProtectedRoute> },
//     { path: "productDetails/:id" , element:<ProtectedRoute>
//       <ProductDetails/>
//     </ProtectedRoute> },
//   { path:"categories" , element:<ProtectedRoute>
//     <Categories/>
//   </ProtectedRoute> },
//   { path:"brands" , element:<ProtectedRoute>
//     <Brands/>
//   </ProtectedRoute>},
//     { path:"Payment" , element:<ProtectedRoute>
//       <Payment/>
//     </ProtectedRoute>},
//     { path:"wishlist" , element:<ProtectedRoute>
//       <WishList/>
//     </ProtectedRoute>},
//      { path:"forgetpassword" ,element:<ForgetP/>},
//      { path:"resetpassword" ,element:<ResetP/>},
//   { path: "*" , element : <div> <img className='w-full h-screen p-2' src={error} alt="error " /> </div>},
//  ] } 

// ])

// export default function App() {

 
// //  const myQueryClient = new  QueryClient



//   return (
//     <>
//     <AuthContext>

//       <CartContext>

//         <WishListContext>


//       {/* <QueryClientProvider client={{myQueryClient }}> */}

//        <RouterProvider router={final_project}/>
//        <Toaster/>
    
//       {/* </QueryClientProvider> */}

//         </WishListContext>

//       </CartContext>


//     </AuthContext>

//     </>
//   )
// }

function App() {
  return <h1 style={{ color: 'red' }}>It Works!</h1>;
}

export default App;

