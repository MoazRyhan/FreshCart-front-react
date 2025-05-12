
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import Loader from './../Loader';
import { Link } from "react-router-dom";
import { cartContextSend } from "../../Context/CartContext/CartContext";
import toast from "react-hot-toast";
import { WishListContextSend } from "../../Context/WishListContext/WishListContext";



export default function Product() {

  
  const [All_products, setAll_products] = useState(null)
  
  const {addCartItems} = useContext(cartContextSend);
  
  const { addWishItems ,deleteWish ,toggleWishList } = useContext(WishListContextSend);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [wishListIds, setWishListIds] = useState([]);


  async function handleToggleWishlist(_id) {
    const isInWishlist = wishListIds.includes(_id); // Check if the item is in the wishlist
  
    if (isInWishlist) {
      // Item is already in wishlist, so we need to delete it
      const isDeleted = await deleteWish(_id);
      if (isDeleted) {
        toast.success("Removed from wishlist", {
          position: "top-center",
          duration: 1500,
        });
        // Remove from local state
        setWishListIds(prev => prev.filter(id => id !== _id));
      } else {
        toast.error("Failed to remove from wishlist", {
          position: "top-center",
          duration: 1500,
        });
      }
    } else {
      // Item is not in wishlist, so we need to add it
      const isAdded = await addWishItems(_id);
      if (isAdded) {
        toast.success("Added to wishlist", {
          position: "top-center",
          duration: 1500,
        });
        // Add to local state
        setWishListIds(prev => [...prev, _id]);
      } else {
        toast.error("Failed to add to wishlist", {
          position: "top-center",
          duration: 1500,
        });
      }
    }
  }
  



  async function handlingAddCart(_id) {

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

  async function handlingAddWishList(_id) {

    const isFlagWishAdd = await addWishItems(_id);
 
    if (isFlagWishAdd == true,"add" ) {
     toast.success("Add product to Wish List success",{
       position:"top-center",
       duration: 1500 ,
     })
     
    }
    else{
     toast.error("Add product to Wish List failed",{
       position:"top-center",
       duration: 1500 ,
 
    })  
 }



 }

 async function handlingDeleteWishList(_id) {

  const isFlagWishDelete = await deleteWish(_id);
 
  if (isFlagWishDelete == true,"delete") {
   toast.success("Delete product to Wish List success",{
     position:"top-center",
     duration: 1500 ,
   })
   
  }
  else{
   toast.error("Delete product to Wish List failed",{
     position:"top-center",
     duration: 1500 ,
 
  })  
 }
 
  
 }


 



  async function display_product() {
    
    const { data } =  axios.get("https://ecommerce.routemisr.com/api/v1/products")
    .then( (res) => {
      // console.log("res",res.data.data);
      setAll_products( res.data.data)
      
    } )
    .catch( (res) => {
      console.log("res",res);
      
    } )
  }





  useEffect(() => {
    
    display_product();
   
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = All_products.filter((product) =>
        product.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(All_products); // Reset to all products if search query is empty
    }
  }, [searchQuery, All_products]);
  


  return (
    <>
      <div className="w-[97%] m-auto mt-10 mb-10">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[87%] ms-24 p-2 mb-8 border border-gray-300 rounded-lg  focus:ring-emerald-500 focus:border-emerald-500" 
        />
        {filteredProducts ? (
          <div className="flex flex-wrap justify-center items-center gap-3">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="md:w-1/6 p-3 border border-solid border-gray-300 rounded-xl relative"
              >
                {/* <i
                  onClick={() => handlingDeleteWishList(product._id)}
                  className="fa-solid fa-heart text-[22px] text-gray-400 cursor-pointer absolute top-7 end-5"
                ></i>
                <i
                  onClick={() => handlingAddWishList(product._id)}
                  className="fa-solid fa-heart text-[22px] text-red-700 cursor-pointer absolute top-7 end-12"
                ></i> */}
<i
  onClick={() => handleToggleWishlist(product._id)}
  className={`fa-solid fa-heart text-[22px] cursor-pointer absolute top-7 end-5 ${
    wishListIds.includes(product._id) ? "text-red-700" : "text-gray-400"
  }`}
></i>
                <Link to={`/ProductDetails/${product._id}`}>
                  <img className="w-full" src={product.imageCover} alt={product.title} />
                  <h1 className="text-emerald-500 mt-1">{product.slug.split("-").slice(0, 1)}</h1>
                  <h2 className="mt-1 mb-1">
                    {product.description.split(" ").slice(0, 1).join(" ")}
                  </h2>
                  <div className="flex justify-between">
                    <h2>{product.price} EGP</h2>
                    <i className="fa-solid fa-star text-yellow-200">
                      <span className="text-gray-700 text-[13px]">
                        {product.ratingsAverage}
                      </span>
                    </i>
                  </div>
                </Link>
                <div className="flex justify-start mt-5">
                  <button
                    onClick={() => handlingAddCart(product._id)}
                    className="w-full text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

  


// return (
//   <>
//     {All_products ? <div className="flex flex-wrap justify-center items-center gap-3 w-[97%] m-auto mt-10 mb-10">


//       {All_products.map((product) => <div key={product._id} className="md:w-1/6 p-3 border border-solid border-gray-500 rounded-xl relative">
//       <i onClick={() => {handlingDeleteWishList(product._id) }} className="fa-solid fa-heart text-[22px] text-gray-400 cursor-pointer absolute top-7 end-5"></i>
//       <i onClick={() => {handlingAddWishList(product._id) }} className="fa-solid fa-heart text-[22px] text-red-700 cursor-pointer absolute top-7 end-12"></i>
//         <Link to={`/ProductDetails/${product._id}`}>
//         {/* <p>{product._id}</p> */}
//           <img className="w-full" src={product.imageCover} alt={product.tittle} />
//           <h1 className="text-emerald-500 mt-1" >{product.slug.split('-').slice(0, 1)}</h1>
//           <h2 className="mt-1 mb-1" >{product.description.split(' ').slice(0, 1).join(' ')}</h2>
//           <div className="flex justify-between  ">
//             <h2>{product.price}</h2>
//             <i className="fa-solid fa-star text-yellow-200"><span className="text-gray-700  text-[13px]" >{product.ratingsAverage}</span></i>
//           </div>
//         </Link>
//         <div className="flex justify-start mt-5 ">
//           <button onClick={() => handlingAddCart(product._id)} className=" w-full text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Add to cart</button>
//         </div>
//       </div>)}
//     </div> : <Loader />}


//   </>
// )