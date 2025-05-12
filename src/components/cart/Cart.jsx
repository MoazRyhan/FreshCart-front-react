import { useContext } from "react"
import  { cartContextSend } from "../../Context/CartContext/CartContext";
import Loader from "../Loader";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


export default function Cart() {
const {  TheAllProducts ,UpdateCartItem , deleteItem  , clearCart ,TheNumberOfCartItems , TheCartTotalPrice} = useContext(cartContextSend);


function handlingUpdate(id , newCount) {

  UpdateCartItem(id , newCount);

}

async function handlingDelete(id){
   const isFlag = deleteItem(id);

  if (isFlag) {
    toast.success("Deleted success",{
      position:"top-center",
      duration: 1500 ,
    })
    
   }
   else{
    toast.error("Deleted failed",{
      position:"top-center",
      duration: 1500 ,

   })

}
}

function handlingClear() {

  const isFlag =  clearCart();

  if (isFlag) {
    toast.success("Deleted success",{
      position:"top-center",
      duration: 1500 ,
    })
    
   }
   else{
    toast.error("Deleted failed",{
      position:"top-center",
      duration: 1500 ,

   })

}
  
}





  


  return (
    <>
      {TheAllProducts ?
        <div className="w-[90%] m-auto mt-10 mb-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h2 className="text-black font-mono text-[20px] font-bold m-5 ms-3 mt-5" > You Have : <span className="text-emerald-500" > {TheNumberOfCartItems} </span> diff items </h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
            <tbody>
              {TheAllProducts.map((product) => (
                <tr
                  key={product._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={product.product.imageCover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt={product.product.title}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.product.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                      onClick={() => handlingUpdate(product.product._id , product.count-1)}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="tel"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={product.count}
                          required
                        />
                      </div>
                      <button
                      onClick={() => handlingUpdate(product.product._id , product.count+1)}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.price}
                  </td>
                  <td className="px-6 py-4">
                    <a
                    onClick={() =>handlingDelete(product.product._id)}
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            <h2 className="text-black  w-[100%] font-mono text-[20px] m-5 font-bold" > Total Price :<span className="text-emerald-500" > {TheCartTotalPrice} </span>EGP</h2> 
            </table>
      </div>
        <Link to={'/Payment'} >
        <button className="w-[100%] h-14 mt-4 text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Pay For Your Product</button>
        </Link>
        <button onClick={  () => handlingClear()} className=" w-[100%]  mt-4 h-14 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear The Cart</button> 
    </div>
        : (<Loader /> )}

    {/* <div className=" w-[90%]  h-screen m-auto mt-10 mb-10">          
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
        <th scope="col" className="px-16 py-3">
          Image
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
             </tr>
           </thead>
           {TheAllProducts ? 
           <tbody>
           {TheAllProducts.map( product => { <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.product.title} 
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
              <input type="tel" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product.count} required />
            </div>
            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price}
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
        </td>
               </tr>} ) } 
           </tbody>
           : <Loader/>}
          </table>
       </div>
       <div className="flex justify-center items-center">
       <button  className="w-[25%] me-5 mt-4 text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Pay Online</button>
       <button  className="w-[25%] mt-4 text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Order Cash</button>
       </div>
    </div> */}
    </>
  )
}
