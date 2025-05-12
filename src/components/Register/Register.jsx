import axios, { Axios } from "axios";
import { useFormik } from "formik"
import { Await, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CirclesWithBar, ColorRing } from "react-loader-spinner";


export default function Register() {


  const navigateme = useNavigate()
  const [ haveError , sethaveError] = useState(null);
  const [ nothaveError , setnothaveError] = useState(false);
  const [isclicked, setisclicked] = useState(false)

  var user ={
    name: '',
    phone: '',
    email: '',
    password:'',
    rePassword:'',
  }
  





 

   function  registerUsers(uservalue) {
    // try{
    //   const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", uservalue )
    //   console.log("yes" , data );
      
    // }
    // catch(roangData ){
    //    console.log(  "no ",roangData)
    // }




   
    setisclicked(true)

    const {resReg} =  axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", uservalue )
    .then( (res) => {
      // console.log("yes" , res);
      // setnothaveError(res);

      setTimeout(() => {
        setnothaveError(false)
        navigateme("/Login")
        setisclicked(false)



      }, 3000);
      
    } )
    .catch( (res) => {
      // console.log("no" , res);

      sethaveError(res.response.data.message)

      setTimeout(() => {
        sethaveError(null)
        setisclicked(false)

        
      }, 3000);
      
    } )



    // console.log("hello from formik" , uservalue );

  }
  
  const registerFormik = useFormik({

    initialValues:user,


    onSubmit : registerUsers,




    validate: function (uservalid) {
      const errrors ={}
      const nameregex  = /^[A-Za-z]{4,10}$/gm
      const phoneregex = /^(20)?01[1250][0-9]{8}$/gm



      if ( nameregex.test(uservalid.name) == false ) {
        errrors.name = "name must start with capital letter and between 4 letters and 10 letters";
      }

      if ( phoneregex.test(uservalid.phone) == false ) {
        errrors.phone = "phone must start with 01 or 201 and the letters must be 11";
        
      }

      if ( uservalid.email.includes("@") == false || uservalid.email.includes(".") == false ) {
        errrors.email = " invalid email ";
      }

      if ( uservalid.password.length < 6 || uservalid.password.length > 12  ) {
        errrors.password = "password must be from 6 to 12 character  "
        
      }
      if (uservalid.rePassword !== uservalid.password ) {
        errrors.rePassword = "the password and the re password  must be match"
      }
      
      // console.log(errors);
      

      return errrors
    }
  })

 






  return (
    <>
    
    <div className="h-screen  mb-28">

      { nothaveError ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        Congratulation
        </div>:"" }
 
      { haveError ? <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {haveError}
        </div>:"" }

      <h1 className="text-center text-emerald-600 mt-10 font-mono fa-2xl" >Register Now</h1>
    <form onSubmit={registerFormik.handleSubmit} className="max-w-sm mx-auto mt-10">
    <div className="mb-5">
      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
      <input  onBlur={registerFormik.handleBlur} value={registerFormik.values.name} onChange={registerFormik.handleChange} type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="moaz" required />
      { registerFormik.errors.name && registerFormik.touched.name  ? <div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
    {registerFormik.errors.name}
  </div>
</div>
 : ""  }
    </div>
    <div className="mb-5">
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Your Phone</label>
      <input onBlur={registerFormik.handleBlur} value={registerFormik.values.phone} onChange={registerFormik.handleChange} type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 " placeholder="012********" required />
      { registerFormik.errors.phone && registerFormik.touched.phone  ? <div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
    {registerFormik.errors.phone}
  </div>
</div> : "" }
    </div>
    <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
      <input onBlur={registerFormik.handleBlur } value={registerFormik.values.email} onChange={registerFormik.handleChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 " placeholder="name@freshcart.com" required />
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
      <input onBlur={registerFormik.handleBlur} value={registerFormik.values.password} onChange={registerFormik.handleChange} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" required />
      { registerFormik.errors.password && registerFormik.touched.password ? <div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
    {registerFormik.errors.password}
  </div>
</div>   : "" }
    </div>
    <div className="mb-5"> 
       <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
      <input onBlur={ registerFormik.handleBlur} value={registerFormik.values.rePassword} onChange={registerFormik.handleChange} type="password" id="rePassword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 " required />
      { registerFormik.errors.rePassword && registerFormik.touched.rePassword ? <div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
    {registerFormik.errors.rePassword}
  </div>
</div>  :"" }
    </div>
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5 mt-2 mb-2">
        <input id="terms" type="checkbox"  defaultValue className="w-4 h-4 accent-emerald-600 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      </div>
      <label htmlFor="terms" className="ms-2 mt-2 mb-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-emerald-600 hover:underline dark:text-emerald-500">terms and conditions</a></label>
    </div>
    <div className="flex justify-evenly ">
    <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ms- ">
      
      { isclicked == false ? "Register" : 
        <CirclesWithBar
        height="30"
        width="60"
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

      <Link to="/Login">
    <button type="button" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
      </Link>
    </div>
   </form>
    </div>
    </>
  )
}
