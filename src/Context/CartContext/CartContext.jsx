import axios from 'axios';
import React, {createContext, useEffect, useState } from 'react'



export const cartContextSend = createContext()

export default function CartContext({children}) {
    
    
  const [TheAllProducts, setTheAllProducts] = useState(null)
  const [TheNumberOfCartItems, setTheNumberOfCartItems] = useState(0)
  const [TheCartTotalPrice, setTheCartTotalPrice] = useState(0)
  const [ TheCartId , setTheCartId] = useState(null)

  function handlingUiOrder() {
    setTheAllProducts(null);
    setTheNumberOfCartItems(0);
    setTheCartTotalPrice(0);
    setTheCartId(null);


    
  }


  const headers = {token: localStorage.getItem('userToken')}

  async function addCartItems(id) {
     return axios.post("https://ecommerce.routemisr.com/api/v1/cart",
     {"productId":id },{
     headers,}
     )
   .then( (res) => {
    //  console.log("yes", res);

    //  setTheAllProducts( res.data.data.products) ;
    //  setTheNumberOfCartItems(res.data.numOfCartItems);
    //  setTheCartTotalPrice(res.data.data.totalCartPrice);

    //  to solve the problem of need to refresh to git the added data now instand of 
    getUserCart();

     return true
     
   } )
   .catch( (error) => {
     console.log("no", error);

     return false
     
   } )
   
 }


 async function getUserCart() {
     axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
    headers,})
    .then( (res) => {
        // console.log("yes" , res);
        setTheAllProducts( res.data.data.products) ;
        setTheNumberOfCartItems(res.data.numOfCartItems);
        setTheCartTotalPrice(res.data.data.totalCartPrice);
        setTheCartId( res.data.data._id);
   
        
    } )
    .catch( (error) => {
        console.log("no" , error);
        
    } )

    
 }

 async function UpdateCartItem(id , newCount) {
  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    "count": newCount
},{headers})
.then( (res) => {
  // console.log("yes",res);
  setTheAllProducts( res.data.data.products) ;
  setTheNumberOfCartItems(res.data.numOfCartItems);
  setTheCartTotalPrice(res.data.data.totalCartPrice);
  
} )
.catch( (error) => {
  console.log("no",error);
  
} )
  
 }


 async function deleteItem(id) {
   return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers})
  .then( (res) => {
    // console.log("yes" , res);
    setTheAllProducts( res.data.data.products) ;
    setTheNumberOfCartItems(res.data.numOfCartItems);
    setTheCartTotalPrice(res.data.data.totalCartPrice);


    return true

    
  }  )
  .catch( (error) => {
    console.log("no" , error);

    return false
    
  }  )
  
 }

 
 
 async function clearCart( ) {
   
   return axios.delete("https://ecommerce.routemisr.com/api/v1/cart" , {headers})
   .then( (res) => {
     // console.log("yes" , res);
     setTheAllProducts( res.data.data?.products) ;
     setTheNumberOfCartItems(res.data?.numOfCartItems);
     setTheCartTotalPrice(res.data.data?.totalCartPrice);
  
     
     
     return true
     
     
    }  )
    .catch( (error) => {
      console.log("no" , error);
      
      return false
      
    } )
    
    
  }
  
  useEffect(() => {
   getUserCart();
 
 
  }, [])

  






  return (
    <>
    <cartContextSend.Provider value={{ addCartItems , getUserCart, UpdateCartItem, deleteItem , clearCart , handlingUiOrder , TheAllProducts , TheNumberOfCartItems , TheCartTotalPrice, TheCartId }}>

       {children}

    </cartContextSend.Provider>


    </>
  )
}
