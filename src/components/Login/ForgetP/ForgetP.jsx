import axios from "axios";
import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";





const userForget = {
    email: "",
  }

export default function ForgetP() {

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()



    async function sendForgetPassword( values ) {

        // console.log(values);
        

        setIsLoading(true); 
        await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
            "email":values.Email
        }  )
        .then( (res) => {
          console.log("yes" , res);

          navigate("/resetpassword")
    
    
          
        }  )
        .catch( (error) => {
          console.log("no" , error);

          setIsLoading(false); 
          
        }  )
        
      }

    

  const ForgetPFormik = useFormik({

    initialValues: userForget,
    onSubmit:sendForgetPassword,




  });



  return (
    <div className="max-w-sm w-full h-screen mx-auto p-10">
      {isLoading ? ( <Loader/> ) : (

        <form onSubmit={ForgetPFormik.handleSubmit} className="w-full">
          <div className="mb-5">
            <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Please enter your verification code
            </label>
            <input
              onBlur={ForgetPFormik.handleBlur}
              value={ForgetPFormik.values.Email}
              onChange={ForgetPFormik.handleChange}
              type="email"
              id="Email"
              name="Email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5 flex justify-center items-center">
            <button
              type="submit"
              className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Verify
            </button>
          </div>
        </form>
      )}
    </div>
  );
}