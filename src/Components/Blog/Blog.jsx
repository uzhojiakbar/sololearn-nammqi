import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { blogsData } from '../../Utils/blogData';
import { MdOutlineTimer } from "react-icons/md";
function Blog() {
    const [values, setValues] = useState('')
    console.log(values)
    const clearFunc = () => {
        setValues("")
    }


    return (
        <div className='lg:p-24 md:p-12 p-6'>
            <h1 className='text-3xl font-bold text-center'>Blog</h1>
            <div className='border lg:flex   gap-12 mt-20 justify-center'>

                <div className='border border-red-500 lg:w-[75%] w-full max-w-[900px] p-2 '>
                    <div className='flex  gap-8'>
                        <div className='w-[75%] relative'>
                            <h1 className='absolute top-[50%] translate-y-[-50%] text-3xl left-3'><CiSearch /></h1>
                            <input onChange={(e) => setValues(e.target.value)} value={values} type="text" className='border-2 w-full rounded-[8px] border-blue-500 pl-12 pr-12 h-[60px] text-2xl outline-none' placeholder='Search...' />
                            {values.length > 0 ? < span onClick={clearFunc} className='text-2xl cursor-pointer block absolute top-[50%] translate-y-[-50%] right-3'>< IoIosClose /></span> : ''}
                        </div>
                        <button className='border-2 border-blue-500 w-[25%]  py-2 rounded-[8px] text-xl font-bold text-blue-500'>Search</button>
                    </div>

                    <div className='mt-16 grid md:grid-cols-2 grid-cols-1 gap-6 '>
                        {blogsData?.map((item) => (
                            <div key={item.id} style={{ background: item.bgclolor }} className='p-6 flex flex-col items-start justify-end gap-3 text-white rounded-lg h-80'>
                                <button className={`${item.nabeBg} px-2 rounded-[5px] `}>{item.name}</button>
                                <h1 className='text-3xl font-semibold'>{item.title}</h1>
                                <div className='flex gap-3 items-center justify-center'>
                                    <MdOutlineTimer />
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='border border-blue-500 w-[25%]'>
                    <h1 className='text-[#2D3846] text-xl font-[600]'>
                        MOst populars blogspost
                    </h1>
                </div>
            </div>
        </div >
    )
}

export default Blog