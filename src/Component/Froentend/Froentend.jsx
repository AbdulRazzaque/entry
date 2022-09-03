import React from 'react'
import { Link } from 'react-router-dom';
const Froentend = () => {
  return (
    <div className="bg-[url('/src/images/camel.jpg')]  bg-cover w-screen h-[700px] ">
  <h1 className='text-center text-white text-4xl pt-10 font-bold'>THARB CAMEL HOSPITAL</h1>
<div className='flex  justify-center items-center h-96 '>
  <div className=' '>

{/* here start Button  */}
<div className='flex flex-col sm:flex-row justify-start items-center px-5 sm:px-0 py-5 space-y-5 sm:space-y-0 space-x-5'>

               <div className='border-2 border-black text-white border-white  hover:border-[#F7C9B2] hover:bg-[#9E0005] hover:text-white  px-5 sm:px-10 text-center py-2 '>
             
                <a className=" font-semibold text-md sm:text-lg tracking-widest uppercase ">
                
                <Link to="/Entry">Search Brucella Recods</Link>
                </a>
          
               </div>
               <div className='border-2 border-black text-white border-white hover:border-[#F7C9B2] hover:bg-[#9E0005] hover:text-white  px-5 sm:px-10 text-center py-2'>
             
                <a className=" font-semibold text-md sm:text-lg tracking-widest uppercase ">
                
                <Link to="/Entry">Data Entry Mode </Link>
                </a>
          
               </div>
               {/* <div className='border-2 border-black  hover:border-[#F7C9B2] hover:bg-[#9E0005] hover:text-white  px-5 sm:px-10 text-center py-2 '>
             
                <a className=" font-semibold text-md sm:text-lg tracking-widest uppercase ">
               
                <Link to="/List"> Search Grucella Project</Link>
                </a>
          
               </div> */}
            </div>

{/* first buttton end  */}

</div>
</div>
    </div>
  )
}

export default Froentend