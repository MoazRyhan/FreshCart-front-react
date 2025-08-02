
import axios from "axios";
import { useFormik } from "formik"
import {  Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContextSend } from "../../Context/AuthContext";
import "flowbite/dist/flowbite.min.js"
import { cartContextSend } from "../../Context/CartContext/CartContext";


export default function Login() {

const {setAuthToken} = useContext(AuthContextSend)
const { getUserCart } = useContext(cartContextSend)


  const navigateme = useNavigate()
  const [ haveError , sethaveError] = useState(null);
  const [ nothaveError , setnothaveError] = useState(false);
  const [isclicked, setisclicked] = useState(false)





  var user ={
    email: '',
    password:'',

  }
  




 

   async function  registerUsers(uservalue) {
    // try{
    //   const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", uservalue )
    //   console.log("yes" , data );
      
    // }
    // catch(roangData ){
    //    console.log(  "no ",roangData)
    // }

   
    setisclicked(true)

    const {resReg} =  axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", uservalue )
    .then( (res) => {
      // console.log("done" , res.data.token ,);
      // setnothaveError(res);

      setAuthToken(res.data.token)
      localStorage.setItem("userToken" , res.data.token )

      getUserCart();
      


      setnothaveError(true)

      setTimeout(() => {

        navigateme("/Home")

        setisclicked(false)
        

      }, 1500);
      
    } )
    .catch( (res) => {
      // console.log("no" , res);

       sethaveError(res.response.data.massage)

      setTimeout(() => {

        sethaveError(null)

        setisclicked(false)

      }, 1500);
      
    } )



    // console.log("hello from formik" , uservalue );

  }
  
  const registerFormik = useFormik({

    initialValues:user,


    onSubmit : registerUsers,




    validate: function (uservalid) {
      const errrors ={}




      if ( uservalid.email.includes("@") == false || uservalid.email.includes(".") == false ) {
        errrors.email = " invalid email ";
      }

      if ( uservalid.password.length < 6 || uservalid.password.length > 12  ) {
        errrors.password = "password must be from 6 to 12 character  "
        
      }
      // console.log(errors);
      

      return errrors
    }
  })

 






  return (
    <>
    
    <div className="h-screen  mb-28">

      { nothaveError ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        Welcome back
        </div>:"" }
 
      { haveError ? <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {haveError}
        </div>:"" }

      <h1 className="text-center text-emerald-600 mt-10 font-mono fa-2xl" >login Now</h1>

    <form onSubmit={registerFormik.handleSubmit} className="max-w-sm mx-auto mt-10">
    <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
      <input onBlur={registerFormik.handleBlur } value={registerFormik.values.email} onChange={registerFormik.handleChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 " placeholder="name@freshcart.com" required />
      { registerFormik.errors.email && registerFormik.touched.email ?<div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
    {registerFormik.errors.email}
  </div>
</div>  :"" }
    </div>
    <div className="mb-5">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
      <input onBlur={registerFormik.handleBlur} value={registerFormik.values.password} onChange={registerFormik.handleChange} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" required />
      { registerFormik.errors.password && registerFormik.touched.password ? <div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
    {registerFormik.errors.password}
  </div>
</div>   : "" }
    </div>
    <div className="flex items-start mb-5">
      <Link to={"/forgetpassword"}>
      <a  className="text-emerald-600 hover:underline dark:text-emerald-500">Forget The Password?</a>
      </Link> 
    </div>
    <div className="flex justify-evenly ">
    <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">    
      { isclicked == false ? "Login" : 
        <CirclesWithBar
        height="20"
        width="40"
        color="#fff"
        outerCircleColor="#fff"
        innerCircleColor="#fff"
        barColor="#fff"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
          />}
      </button>
      <Link to="/Register">
    <button type="button" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register</button>
      </Link>
    </div>
   </form>
    </div>
    </>
  )
}
