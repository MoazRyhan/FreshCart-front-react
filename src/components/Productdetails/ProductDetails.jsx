import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from './../Loader';
import { cartContextSend } from "../../Context/CartContext/CartContext";
import toast from "react-hot-toast";



export default function ProductDetails() {

  const [TheProductDetails, setTheProductDetails] = useState(null);
  const { addCartItems } = useContext(cartContextSend);
  const { id } = useParams();


  async function handlingAddProduct(id) {

    const isFlag = await addCartItems(id);

    if (isFlag) {
      toast.success("Add product success", {
        position: "top-center",
        duration: 1500,
      })

    }
    else {
      toast.error("Add product failed", {
        position: "top-center",
        duration: 1500,

      })


    }
  }




  async function getProductDetails() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        // console.log("yes" , res);
        // console.log(res.data.data);
        setTheProductDetails(res.data.data);


      })
      .catch((error) => {
        console.log("no", error);

      })

  }


  useEffect(() => {
    getProductDetails();


  }, [])

  // const {data ,isError ,Error, isLoading } = useQuery({
  //     queryKey: ["productDetails",id],
  //     queryFn : getProductDetails,
  // })


  // if (isError) {
  //     return<>
  //     { toast.error(`${Error}`,
  //         {  position:"top-center"}
  //     )}
  //     </>

  // }

  // if (isLoading) {

  //    return <Loader/>

  // }

  // const ProDet = data.data.data





  return (
    <>

      {/* <div key={ProDet.id} className="w-[85%] flex justify-center items-end m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-5">
        <div className="w-[50%] m-auto">
          <img className="p-8 rounded-t-lg w-full" src={ProDet.imageCover} alt={ProDet.title} />
        </div>
        <div className="px-5 pb-5 w-full">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900  dark:text-white">{ProDet.category.name}</h5>
    <h5 className="text-l font-semibold tracking-tight text-gray-500  dark:text-white mt-5">{ProDet.description}</h5>
    <div className="flex items-center  mb-5 mt-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
      <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
      <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
      <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
      <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
      <i className="fa-solid fa-star text-gray-500-200"><span className="text-gray-700  text-[13px]" ></span></i>
       </div>
      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{ProDet.ratingsAverage}</span>
    </div>
    <div className="flex items-center justify-between w-full">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">{ProDet.price} EGP </span>
      <button  className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Add to cart</button>
    </div>
        </div>
    </div> */}
      {TheProductDetails ? <div>
        {<div key={TheProductDetails.id} className="w-[85%] flex justify-center items-end m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-5">
          <div className="w-[50%] m-auto">
            <img className="p-8 rounded-t-lg w-full" src={TheProductDetails.imageCover} alt={TheProductDetails.title} />
          </div>
          <div className="px-5 pb-5 w-full">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900  dark:text-white">{TheProductDetails.category.name}</h5>
            <h5 className="text-l font-semibold tracking-tight text-gray-500  dark:text-white mt-5">{TheProductDetails.description}</h5>
            <div className="flex items-center  mb-5 mt-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
                <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
                <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
                <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" ></span></i>
                <i className="fa-solid fa-star text-gray-500-200"><span className="text-gray-700  text-[13px]" ></span></i>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{TheProductDetails.ratingsAverage}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{TheProductDetails.price} EGP </span>
              <button onClick={() => handlingAddProduct(id)} className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Add to cart</button>
            </div>
          </div>
        </div>
        }
      </div> : <Loader />}



    </>
  )
}
