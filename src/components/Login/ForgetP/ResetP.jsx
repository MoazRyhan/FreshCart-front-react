import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";



const userReset = {
  resetCode: "",
}


export default function ResetP() {

  const navigate = useNavigate()



  async function sendResetPassword( values ) {

      // console.log(values);
      

  
      await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{
        "resetCode":values.resetCode
    } )
      .then( (res) => {
        console.log("yes" , res);

        navigate("/Login")
  
  
        
      }  )
      .catch( (error) => {
        console.log("no" , error);
        
      }  )
      
    }

  

const ResetPFormik = useFormik({

  initialValues: userReset,
  onSubmit:sendResetPassword,




});



return (
  <>
   <form onSubmit={ ResetPFormik.handleSubmit} className="max-w-sm h-screen mx-auto p-10">
   <div className="mb-5">
          <label htmlFor="rp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          reset your account password
          </label>
          <input
            onBlur={ ResetPFormik.handleBlur}
            value={ ResetPFormik.values.resetCode}
            onChange={ ResetPFormik.handleChange}
            type="tel"
            id="rp"
            name="Email" // Corrected the name to "Email" to match the initialValues
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="resetCode"
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


  
  
  </>
)
}
