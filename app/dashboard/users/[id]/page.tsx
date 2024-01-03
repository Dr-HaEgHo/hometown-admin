import Table from '@/components/Table'
import { AddSquare, ArrowLeft, DocumentDownload, EthereumClassic } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {

    return (
        <div className='w-full py-[20px]' >
            <div className="dash-container">
                <div className="w-full">


                    {/* TOP BAR  */}
                    <div className='w-full flex items-center py-4 px-5 justify-between relative bg-white mb-8' >
                        {/* LEFT */}
                        <div className='flex flex-col items-start gap-1' >
                            <Link href='/dashboard/users' ><div className='flex items-center gap-4 hovers p-[2px]  rounded-md ' >
                                <ArrowLeft size='18' className='text-smallHeadTxt' />
                                <p className='text-smallHeadTxt text-xs 2xl:text-sm ' >back</p>
                            </div></Link>
                            <div className='flex items-center gap-4' >
                                <h2 className='text-bigHeadTxt font-bold text-sm 2xl:text-base '>Akpan Mariam</h2>
                                <div className='bg-incuTxt rounded-full px-2 py-[1px]' >
                                    <p className='text-xs 2xl:text-sm text-head' >Farmer</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className='flex items-center gap-3'>
                            {/* Icon */}
                            <Link href={'/dashboard/incubatees/new-incubatee'} >
                                <button className='transition duration-200 rounded-[6px] bg-primary1 hover:bg-primary active:bg-primary1 flex items-center justify-center relative gap-3 py-2 px-4'>
                                    <EthereumClassic variant='Bold' color='white' size='18' />
                                    <p className='text-white text-xs 2xl:text-sm ' >Assign to LGA</p>
                                </button>
                            </Link>

                            {/* Icon */}
                            <Link href={'/dashboard/incubatees/new-incubatee'} >
                                <button className='transition duration-200 rounded-[6px] bg-primary1 hover:bg-primary active:bg-primary1 flex items-center justify-center relative gap-3 py-2 px-4'>
                                    <DocumentDownload color='white' size='18' />
                                    <p className='text-white text-xs 2xl:text-sm ' >Download</p>
                                </button>
                            </Link>
                            <button className='transition duration-200 w-5 h-5 rounded bg-noteIconBtn hover:sidebarTxtHover active:bg-sidebarTxtActive overflow-hidden '>
                                <Image
                                    src={require('../../../../assets/icons/dropicon.png')}
                                    alt="hometownadmin.com"
                                    className='w-full'
                                />
                            </button>

                        </div>
                    </div>


                    {/* FORM */}
                    <div className='w-[54%] max-w-[548px] bg-white border-lg rounded-lg p-3 flex flex-col gap-4' >
                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >First Name</h5>
                            <p className='text-someGray text-xs 2xl:text-sm' >John</p>
                        </div>
                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Last Name</h5>
                            <p className='text-someGray text-xs 2xl:text-sm' >Doe</p>
                        </div>
                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Email Address</h5>
                            <p className='text-someGray text-xs 2xl:text-sm' >John_doe@gmail.com</p>
                        </div>
                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Phone Number</h5>
                            <p className='text-someGray text-xs 2xl:text-sm' >+234 812 345 6789</p>
                        </div>
                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >State</h5>
                            <p className='text-someGray text-xs 2xl:text-sm' >Delta State</p>
                        </div>
                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Local Government</h5>
                            <p className='text-someGray text-xs 2xl:text-sm' >Bomadi LG</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default page