import logo_me from '../images/freshcart-logo.svg'
import { NavLink , Link, useNavigate } from 'react-router-dom';
import Login from './../Login/Login';
import Register from './../Register/Register';
import { useContext } from 'react';
import { AuthContextSend } from '../../Context/AuthContext';

export default function Navbar() {

  const navigate_me = useNavigate()
  const {AuthToken , setAuthToken } = useContext(AuthContextSend)

  function handlingLogout() {
    localStorage.removeItem("userToken")
    setAuthToken( null )
    navigate_me("/Login")

    
  }



    
  return (
    <>    
<nav className= " w-[98%] m-auto rounded-md mt-3 pt-2 bg-emerald-500 border-gray-200 dark:bg-gray-300">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to ="/Home">
      <img src={logo_me} className="h-8" alt="FreshCart" />
    </Link>
    <div className="flex items-center gap-4 md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse  ">
      {AuthToken ?<Link to={"/Cart"}>
       <i className="fa-solid fa-cart-shopping text-[27px] text-gray-700 "></i>  
       </Link>  : ""}
      { AuthToken? <span className='text-white cursor-pointer text-[20px] font-mono' onClick={handlingLogout}>Logout</span> : <>
        <Link to = "/Register" className='text-[20px] font-mono text-white' >
        Register        
      </Link>
      <Link to ="/Login"  className='text-[20px] font-mono  text-white'>
      Login
      </Link>
      </>  }
      <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    {AuthToken ? <>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-language">
      <ul className="flex flex-col font-medium p-4 md:p-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-300 md:dark:bg-gray-300 dark:border-gray-300">
        <li>
        <NavLink to="Home" className="block ms-1 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">Home</NavLink>
        </li>
        <li>
          <NavLink to="Cart" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">Cart</NavLink>
        </li>
        <li>
          <NavLink to="wishlist" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">wishlist</NavLink>
        </li>
        <li>
          <NavLink to="Products" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">Products</NavLink>
        </li>
        <li>
          <NavLink to="Categories" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">Categories</NavLink>
        </li>
        <li>
          <NavLink to="Brands" className="block me-1 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">Brands</NavLink>
        </li>
      </ul>
    </div>
    </> : "" }

  </div>
</nav>    
    </>
  )
}
