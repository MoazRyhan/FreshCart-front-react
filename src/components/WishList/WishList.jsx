import { useContext } from "react";
import { WishListContextSend } from "../../Context/WishListContext/WishListContext";
import Loader from "../Loader";
import { cartContextSend } from "../../Context/CartContext/CartContext";
import toast from "react-hot-toast";

export default function WishList() {
  const { TheList  } = useContext(WishListContextSend);
  const {addCartItems} = useContext(cartContextSend);



  


  async function  handlingAddProduct(_id) {

    const isFlag = await addCartItems(_id);
 
    if (isFlag) {
     toast.success("Add product success",{
       position:"top-center",
       duration: 1500 ,
     })
     
    }
    else{
     toast.error("Add product failed",{
       position:"top-center",
       duration: 1500 ,
 
    })  
 }
 
 
     
   }

  return (
    <>
      {TheList ? (
        <div>
          {TheList.map((itemList) => (
            <div
              key={itemList.id}
              className="w-[80%] h-auto flex justify-center items-end m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-5"
            >
              <div className="w-[50%] m-auto">
                <img
                  className="p-8 rounded-t-lg w-full"
                  src={itemList.imageCover}
                  alt={itemList.title}
                />
              </div>
              <div className="px-5 pb-5 w-full">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {itemList.category.name}
                </h5>
                <div className="flex items-center mb-5 mt-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${
                          i < itemList.ratingsAverage ? "text-yellow-200" : "text-gray-500"
                        }`}
                      ></i>
                    ))}
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {itemList.ratingsAverage}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {itemList.price} EGP
                  </span>
                  <button
                    onClick={() => handlingAddProduct(itemList.id)}
                    className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
