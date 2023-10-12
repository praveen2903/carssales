import { useState } from 'react';
import data from '../data';
import {HiSearch} from 'react-icons/hi';
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'
import {GiChemicalTank} from 'react-icons/gi'
import {SlSpeedometer} from 'react-icons/sl'
import {IoMdSpeedometer} from 'react-icons/io'
function Home() {
    const[name,setName]=useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 6; // Number of products per page
    const totalPages = Math.ceil(data.cars?.length / perPage);
    const navigate=useNavigate();
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
        navigate(`/page/${selectedPage.selected + 1}`);
    };
    const currentProducts = data.cars?.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );
  return (
    <div className='bg-slate-200 shadow-2xl md:m-20 p-5 mx-auto'>
        <div className='flex flex-col md:flex-row items-center gap-8 shadow-lg pb-4 px-2 my-4 rounded-lg'>
            <div className='flex items-center bg-white border-2 border-gray-300 p-1 rounded-lg'>
                <input type='text' placeholder='Search...' className='outline-none' value={name} onChange={(e)=>setName(e.target.value)}/>
                <HiSearch/>
            </div>
            <select className='p-1 bg-slate-100'>
                <option value='Relevance'>Relevance</option>
            </select>
            <select className='p-1 bg-slate-100'>
                <option value='All brands'>All brands</option>
                <option value='New brands'>New</option>
            </select>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 pb-10'>
            {!name ? currentProducts && currentProducts.map((item)=>(
                <div key={item.id} className='w-fit flex flex-col gap-3 bg-slate-100'>
                    <img src={item.image} className='h-60 w-72 object-cover' alt='car'/>
                    <div className='flex justify-between p-2 '>
                        <h1 className='font-bold'>{item.name}</h1>
                        <h1 className='border-dotted border-2 border-blue-400 px-2 rounded-lg'>{item.year}</h1>
                    </div>
                    <div className='flex justify-start gap-10 px-8 items-center '>
                        <p className='flex items-center gap-1'><BsPeople color='blue'/>4 people</p>
                        <p className='flex items-center gap-1'><GiChemicalTank color='blue'/>Hybrid</p>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='flex items-center gap-1'><IoMdSpeedometer color='blue'/>6.1km/1-litre</p>
                        <p className='flex items-center gap-1'><SlSpeedometer color='blue'/>Automatic</p>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center shadow-lg p-4'>
                        <h1><span className='font-bold text-lg'>${item.price}</span>/month</h1>
                        <AiOutlineHeart  className='bg-slate-200 rounded-lg text-blue-400 p-1' size={25}/>
                        <button className='bg-blue-500 text-white rounded-lg px-2 py-1'>Rent now</button>
                    </div>
                </div>
            )):currentProducts && currentProducts.filter((item)=>item.name===name).map((item)=>(
                <div key={item.id} className='w-fit flex flex-col gap-3'>
                    <img src={item.image} className='h-60 w-72 object-cover' alt='car'/>
                    <div className='flex justify-between p-2 '>
                        <h1 className='font-bold'>{item.name}</h1>
                        <h1 className='border-dotted border-2 border-blue-400 px-2 rounded-lg'>{item.year}</h1>
                    </div>
                    <div className='flex justify-start gap-10 px-8 items-center '>
                        <p className='flex items-center gap-1'><BsPeople/>4 people</p>
                        <p className='flex items-center gap-1'><GiChemicalTank/>Hybrid</p>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='flex items-center gap-1'><IoMdSpeedometer/>6.1km/1-litre</p>
                        <p className='flex items-center gap-1'><SlSpeedometer/>Automatic</p>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center shadow-lg p-4'>
                        <h1><span className='font-bold text-lg'>${item.price}</span>/month</h1>
                        <AiOutlineHeart  className='bg-slate-200 rounded-lg text-blue-400 p-1' size={25}/>
                        <button className='bg-blue-500 text-white rounded-lg px-2 py-1'>Rent now</button>
                    </div>
                </div>
            ))}
        </div>
         <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="flex mt-4 justify-center"
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            activeClassName="text-primary"
            disabledClassName="text-gray-500 cursor-not-allowed"
            pageClassName="px-2 cursor-pointer"
            previousClassName="px-2 cursor-pointer"
            nextClassName="px-2 cursor-pointer"
            breakClassName="px-2"
        />    
    </div>
  )
}

export default Home