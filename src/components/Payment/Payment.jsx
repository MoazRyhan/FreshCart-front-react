import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from 'react';
import { cartContextSend } from "../../Context/CartContext/CartContext";
import Loader from './../Loader';
import { useEffect } from 'react';

const userData = {
  details: "",
  phone: "",
  city: "",
}
export default function Payment() {


  const { TheCartId ,  handlingUiOrder } = useContext(cartContextSend);
  const headers = {token: localStorage.getItem('userToken')}
  // console.log(TheCartId );
  const [IsFlag, setIsFlag] = useState(false);
  

  
  
  function sendCashOrder( values ) {


    const MainshippingAddress ={ 
      shippingAddress :values,
  
      }

    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${TheCartId}`, MainshippingAddress 
      ,{headers} )
    .then( (res) => {
      console.log("yes" , res);
      handlingUiOrder();


      
    }  )
    .catch( (error) => {
      console.log("no" , error);
      
    }  )
    
  }




    
  function sendOnlineOrder( values ) {


    const MainshippingAddress ={ 
      shippingAddress :values,
  
      }

  axios.post(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${TheCartId}`,
    MainshippingAddress,
    {
      headers,
      params: { url: "https://localhost:5173" }  // Corrected URL
    }
  )
    .then( (res) => {
      console.log("yes" , res);
      window.open(res.data.session.url ,"_self")
    
      
      
    }  )
    .catch( (error) => {
      console.log("no" , error);
      
    }  )
    
  }

  function WitchOrder(values) {

    if (IsFlag) {
      sendCashOrder(values);
      console.log("cash");
      

      
    }
    else{
      sendOnlineOrder(values);
      console.log("online");

    }
    
  }



  const paymentFormik = useFormik({


    initialValues: userData,
    onSubmit: WitchOrder,


  })


  return (
    <>
 <form onSubmit={ paymentFormik.handleSubmit} className="max-w-sm mx-auto p-10">
        <div className="mb-5">
          <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
          <input 
            onBlur={paymentFormik.handleBlur} 
            value={paymentFormik.values.details} 
            onChange={paymentFormik.handleChange} 
            type="text" 
            id="details" 
            name="details"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            placeholder="Street" 
            required 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
          <input 
            onBlur={paymentFormik.handleBlur} 
            value={paymentFormik.values.phone} 
            onChange={paymentFormik.handleChange} 
            type="tel" 
            id="phone" 
            name="phone"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" 
            placeholder="0111*******" 
            required 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
          <input 
            onBlur={paymentFormik.handleBlur} 
            value={paymentFormik.values.city} 
            onChange={paymentFormik.handleChange} 
            type="text" 
            id="city" 
            name="city"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
            placeholder="Cairo" 
            required 
          />
        </div>
        <div className="mb-5 flex justify-center items-center">
          <button 
            type="submit" 
            onClick={() => setIsFlag(true)} 
            className="text-white me-3 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Cash Order
          </button>
          <button 
            type="submit" 
            onClick={() => setIsFlag(false)} 
            className="text-white ms-3 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Online Order
          </button>
        </div>
      </form>



    </>
  )
}
