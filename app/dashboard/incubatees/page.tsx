'use client'
import Table from '@/components/Table'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getAllIncubatees } from '@/store/incubatees/incuActions'
import { AddSquare } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

// const incuees = [
//     { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, status: "Active", date: "12 July 2023", time: "2:30 am" },
//     { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, status: "Inactive", date: "12 July 2023", time: "2:30 am" },
//     { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, status: "Active", date: "12 July 2023", time: "2:30 am" },
//     { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, status: "Active", date: "12 July 2023", time: "2:30 am" },
//     { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, status: "Inactive", date: "12 July 2023", time: "2:30 am" },
//     { id: 1, name: "Akpan Mariam", LGA: "Bomadi North", phoneNunmber: 2348123456789, status: "Active", date: "12 July 2023", time: "2:30 am" },
// ]

const Page = () => {

    const dispatch = useAppDispatch();
    const router = useRouter()

    const [loading, setLoading] = useState(false)


    const incubatees = useAppSelector((state) => state.incubatees.incubatees);
    const isLoading = useAppSelector((state) => state.incubatees.loading);
    
    useEffect(() => {
        dispatch(getAllIncubatees())
    }, [])

    useEffect(() => {
        if (isLoading === true) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [isLoading]);
    

    return (
        <div className='w-full py-[20px]' >
            <div className="dash-container">
                <div className="w-full">

                    
                    {/* TOP BAR  */}
                    <div className='w-full flex items-center py-4 px-5 justify-between relative bg-white' >
                        {/* LEFT */}
                        <div className='flex flex-col items-start gap-1' >
                            <div className='flex items-center gap-4' >
                                <h2 className='text-bigHeadTxt font-semibold text-sm 2xl:text-base '>Incubatees</h2>
                                <div className='bg-incuTxt rounded-full px-2 py-[1px]' >
                                    <p className='text-xs 2xl:text-sm text-head' >234</p>
                                </div>
                            </div>
                            <p className='text-smallHeadTxt text-xs 2xl:text-sm ' >Keep track of all registered incubatees</p>
                        </div>

                        {/* RIGHT */}
                        <div className='flex items-center gap-3'>
                            {/* Icon */}
                            <Link href={'/dashboard/incubatees/new-incubatee'} >
                                <button className='transition duration-200 rounded-[6px] bg-primary1 hover:bg-primary active:bg-primary1 flex items-center justify-center relative gap-3 py-2 px-4'>
                                    <AddSquare variant='Bold' color='white' size='18' />
                                    <p className='text-white text-xs 2xl:text-sm ' >Add New</p>
                                </button>
                            </Link>
                            {/* <button className='transition duration-200 w-5 h-5 rounded bg-noteIconBtn hover:sidebarTxtHover active:bg-sidebarTxtActive overflow-hidden '>
                                <Image
                                    src={require('../../../assets/icons/dropicon.png')}
                                    alt="hometownadmin.com"
                                    className='w-full'
                                />
                            </button> */}

                        </div>
                    </div>



                    {/* TABLE */}
                    <div className='w-full mt-5'>
                        <Table loading={loading} data={incubatees} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Page