import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WishListContextSend = createContext();

export default function WishListContext({ children }) {
  const [TheList, setTheList] = useState(null);
  const headers = { token: localStorage.getItem("userToken") };

  async function addWishItems(id) {
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        { productId: id },
        { headers }
      );
    //   console.log("yes", res);
      return true;
    } catch (error) {
      console.log("no", error);
      return false;
    }
  }



   async function deleteWish(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers})

   .then( (res) => {
    //  console.log("yes" , res);
 
 
     ( true,"delete" )
   }  )
   .catch( (error) => {
     console.log("no" , error);
 
     ( false,"delete" )
     
   }  )
   
   
  }


  


  async function displayWishList() {
    try {
      const res = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers,
      });
    //   console.log("yes", res.data);
      setTheList(res.data.data);
    } catch (error) {
      console.log("no", error);
    }
  }

  useEffect(() => {
    displayWishList();
  }, []);

  return (
    <WishListContextSend.Provider value={{ addWishItems , deleteWish , TheList  }}>
      {children}
    </WishListContextSend.Provider>
  );
}
