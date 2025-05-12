

import Product from './../products/Products';
import static1 from "../images/blog-img-1.jpeg"
import static2 from "../images/blog-img-2.jpeg"
import CategoriesSlider from '../Sliders/CategoriesSlider';
import HomeSlider from './../Sliders/HomeSlider';

export default function Home() {

  return (
    <>

    <div className=' w-[87%] m-auto' >


      <div className='md:w-full flex mt-5 justify-center items-center'>
        <div className='w-[75%] h-[100%]'>
        <HomeSlider/>
        </div>
        <div className=' md:w-[25%] '>
        <img className='w-full md:h-[160px]' src={static1} alt="blog1"/>
        <img className='w-full md:h-[160px]' src={static2} alt="blog2" />
        </div>
      </div>
    <h1 className='font-mono font-bold fa-1x mt-7' > shop popular categories </h1>
    <CategoriesSlider/>
    <h1 className='font-mono font-bold fa-1x mt-10' > The Products </h1>
    </div>

    <Product/>



    </>
  )
}
