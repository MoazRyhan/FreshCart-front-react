import { Link } from 'react-router-dom'
import logo_me from '../images/freshcart-logo.svg'


export default function Footer() {




    
  return (
    <>
      

<footer className="bg-emerald-500 rounded-lg shadow  dark:text-gray-400 m-4">
  
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <h1 className='text-white font-mono font-bold fa-2x mb-2'>Get the FreshCart app</h1>
      <p className='text-white  fa-1x mb-2' > We will send you a link. open it on Your phone to download the app. </p>
      <div className='flex justify-center items-center'>
      <input type="email" id="email" aria-describedby="helper-text-explanation" className=" w-[85%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="name@FreshCart.com" />
      <button type="submit" className="w-[15%] ms-3 mt-2 text-white hover:text-white border border-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-500 dark:focus:ring-emerald-800">Send</button>
      </div>
        <div className="sm:flex sm:items-center sm:justify-between mt-10">
            <Link to={"/Products"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo_me} className="h-8" alt="FreshCart Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white  dark:text-gray-400 sm:mb-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">FreshCart™</a>. All Rights Reserved.</span>
    </div>
</footer>

    </>
  )
}
