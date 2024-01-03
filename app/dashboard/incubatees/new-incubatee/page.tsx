'use client'
import { DropDownFade, InputFade } from '@/components/Input'
import SoftTable from '@/components/SoftTable'
import { AddSquare, CloseSquare } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const states = [
    {id: 1, name: "Ogun"},
    {id: 2, name: "Oyo"},
    {id: 3, name: "Lagos"},
    {id: 4, name: "Osun"},
    {id: 5, name: "Abia"},
    {id: 6, name: "Rivers"},
    {id: 7, name: "Enugu"},
    {id: 8, name: "Imo"},
    {id: 9, name: "Kano"},
    {id: 10, name: "Kogi"},
    {id: 11, name: "Nassarawa"},
    {id: 12, name: "Gombe"},
]

const local = [
    {id: 1, name: "Ogun"},
    {id: 2, name: "Oyo"},
    {id: 3, name: "Lagos"},
    {id: 4, name: "Osun"},
    {id: 5, name: "Abia"},
    {id: 6, name: "Rivers"},
    {id: 7, name: "Enugu"},
    {id: 8, name: "Imo"},
    {id: 9, name: "Kano"},
    {id: 10, name: "Kogi"},
    {id: 11, name: "Nassarawa"},
    {id: 12, name: "Gombe"},
]

const roles = [
    {id: 1, name: "Farmer"},
    {id: 2, name: "Buyer"},
    {id: 3, name: "Input Dealer"},
    {id: 4, name: "Incubatee"},
    {id: 5, name: "Agent"},
]

const page = () => {

    return (
        <div className="w-full">
            <div className="dash-container">
                <div className='w-[73%] max-w-[833px] bg-white p-10 mt-5 mb-[3rem]'>

                    {/* TOP WITH TITLE AND CLOSE BUTTON */}
                    <div className='w-full flex items-center justify-between border-b border-someBorderGray pb-5 mb-5' >
                        <h2>Add New Incubatee</h2>
                        <Link href='/dashboard/incubatees' ><CloseSquare variant='Bold' size='30' className='text-sidebarTxt cursor-pointer hover:text-sidebarTxtHover active:text-sidebarTxtActive transition duration-200' /></Link>
                    </div>

                    {/* FORM AND BUTTON */}
                    <div className='w-full ' >
                        <form className=' w-full flex items-start flex-col gap-4 '>
                            <InputFade type='text' label='Name' placeholder='Please Enter Your Name' />
                            <InputFade type='email' label='Email Address' placeholder='Please Enter Your Email' />
                            <InputFade type='number' label='Phone Number' placeholder='Please Enter Your Phone Number' />
                            <DropDownFade type='text' data={states} label='State' placeholder='Please Select State' />
                            <DropDownFade type='text' data={local} label='Local Government Area' placeholder='Please Select LGA' />
                            <DropDownFade type='text' data={roles} label='Role' placeholder='Please Select Your Role' />
                            <button className='transition duration-200 rounded-[6px] bg-primary1 hover:bg-primary active:bg-primary1 flex items-center justify-center relative gap-3 py-2 px-8'>
                                <p className='text-white text-xs 2xl:text-sm ' >Add New</p>
                            </button>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default page