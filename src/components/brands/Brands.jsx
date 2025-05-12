
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from './../Loader';



export default function Brands() {

  const [All_Brands, setAll_Brands] = useState(null)



  async function display_Brands() {
    
    const { data } =  axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    .then( (res) => {
      // console.log("res",res.data.data);
      setAll_Brands( res.data.data)
      
    } )
    .catch( (res) => {
      console.log("res",res);
      
    } )
  }

  useEffect(() => {
    
    display_Brands();
   
  }, [])
  




  
  return (
    <>
    {All_Brands ? <div className="flex flex-wrap   justify-center items-center w-[90%] m-auto mt-10 mb-10">
    {All_Brands.map( (brand) => <div key={brand._id} className="md:w-1/5 p-3 border-gray-800 border-solid border-[1px] m-3 rounded-md">
      <img className="w-full" src={ brand.image} alt={brand.name} />
      <h2 className="text-center" >{brand.name}</h2>
      </div>  ) }
    </div> : <Loader/>
}


    </>
  )
}
