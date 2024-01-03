import Table2 from '@/components/Table2'
import { AddSquare, ArrowDown2 } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

const users = [
    { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, title: "Farmer", status: "Active", date: "12 July 2023", time: "2:30 am" },
    { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, title: "buyer", status: "Inactive", date: "12 July 2023", time: "2:30 am" },
    { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, title: "Farmer", status: "Active", date: "12 July 2023", time: "2:30 am" },
    { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, title: "Farmer", status: "Active", date: "12 July 2023", time: "2:30 am" },
    { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, title: "input Dealer", status: "Inactive", date: "12 July 2023", time: "2:30 am" },
    { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, title: "buyer", status: "Active", date: "12 July 2023", time: "2:30 am" },
]

const page = () => {
    return (
        <div className='w-full py-[20px]' >
            <div className="dash-container">
                <div className="w-full">


                    {/* TOP BAR  */}
                    <div className='w-full flex items-center py-4 px-5 justify-between relative bg-white' >
                        {/* LEFT */}
                        <div className='flex flex-col items-start gap-1' >
                            <div className='flex items-center gap-4' >
                                <div className='flex items-center gap-1 px-1 border border-sidebarTxtHover transition duration-200 rounded cursor-pointer hover:bg-sidebarTxtHover active:bg-sidebarTxtActive' >
                                    <h2 className='text-bigHeadTxt font-semibold text-sm 2xl:text-base '>All</h2>
                                    <ArrowDown2 className='text-bigHeadTxt ' size='18' />
                                </div>
                                <div className='bg-incuTxt rounded-full px-2 py-[1px]' >
                                    <p className='text-xs 2xl:text-sm text-head' >2440</p>
                                </div>
                            </div>
                            <p className='text-smallHeadTxt text-xs 2xl:text-sm ' >Keep track of all registered incubatees</p>
                        </div>

                        {/* RIGHT */}
                        <div className='flex items-center gap-3'>
                            {/* Icon */}
                            {/* <button className='transition duration-200 rounded-[6px] bg-primary1 hover:bg-primary active:bg-primary1 flex items-center justify-center relative gap-3 py-2 px-4'>
                                <AddSquare variant='Bold' color='white' size='18' />
                                <p className='text-white text-xs 2xl:text-sm ' >Add New</p>
                            </button> */}
                            <button className='transition duration-200 w-5 h-5 rounded bg-noteIconBtn hover:sidebarTxtHover active:bg-sidebarTxtActive overflow-hidden '>
                                <Image
                                    src={require('../../../assets/icons/dropicon.png')}
                                    alt="hometownadmin.com"
                                    className='w-full'
                                />
                            </button>

                        </div>
                    </div>



                    {/* TABLE */}
                    <div className='w-full mt-5'>
                        <Table2 data={users} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default page