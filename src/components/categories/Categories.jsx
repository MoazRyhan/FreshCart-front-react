
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from './../Loader';



export default function Brands() {

  const [All_categories, setAll_categories] = useState(null)



  async function display_categories() {
    
    const { data } =  axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    .then( (res) => {
      // console.log("res",res.data.data);
      setAll_categories( res.data.data)
      
    } )
    .catch( (res) => {
      console.log("res",res);
      
    } )
  }

  useEffect(() => {
    
    display_categories();
   
  }, [])
  




  
  return (
    <>
    {All_categories? <div className="flex flex-wrap   justify-center items-center w-[90%] m-auto mt-10 mb-10 ">
    {All_categories.map( (cate) => <div key={cate._id} className="md:w-1/5 m-5 border-gray-300 border-solid border-[1px] rounded-md hover:shadow-emerald-600 hover:shadow-2xl  ">
      <img className="w-full h-60" src={ cate.image} alt={cate.name} />
      <h2 className="text-center mt-4 mb-4" >{cate.name}</h2>
      </div>  ) }
    </div> : <Loader/>
}


    </>
  )
}

