'use client'
import Table from '@/components/Table'
import TableShimmerLoader from '@/components/TableShimmerLoader'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getIncubateeById } from '@/store/incubatees/incuActions'
import { AddSquare, ArrowLeft, DocumentDownload, EthereumClassic } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Page = () => {


    const params = useParams()
    const dispatch = useAppDispatch();

    const agent = useAppSelector(state => state.incubatees.singleIncubatee)

    const [loading, setLoading] = useState(false)


    console.log(params.id, "the params id")

    useEffect(() => {
        dispatch(getIncubateeById({ agentId: params.id.toString() }))
    }, [])




    return (
        <div className='w-full py-[20px]' >
            <div className="dash-container">
                <div className="w-full">


                    {/* TOP BAR  */}

                    <div className='w-full flex items-center py-4 px-5 justify-between relative bg-white mb-8' >
                        {/* LEFT */}
                        <div className='flex flex-col items-start gap-1' >
                            <Link href='/dashboard/incubatees' ><div className='flex items-center gap-4 hovers p-[2px]  rounded-md ' >
                                <ArrowLeft size='18' className='text-smallHeadTxt' />
                                <p className='text-smallHeadTxt text-xs 2xl:text-sm ' >back</p>
                            </div></Link>
                            <div className='flex items-center gap-4' >
                                <h2 className='text-bigHeadTxt font-bold text-sm 2xl:text-base '>

                                    {
                                        loading === true ? 'Please wait...' : agent && agent.id ? agent.first_name : "Waiting..."
                                    }
                                </h2>

                                <div className='bg-incuTxt rounded-full px-2 py-[1px]' >
                                    <p className='text-xs 2xl:text-sm text-head' >
                                        {
                                            loading === true ? 'Please wait...' : agent && agent.id ? agent.user_type : "Waiting..."
                                        }
                                    </p>
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
                    <div className='w-[54%] max-w-[548px] bg-white rounded-lg p-3 ' >
                        {
                            loading === true ?


                                (<TableShimmerLoader />)

                                :


                                agent && agent.id ?


                                    (<div className='w-full flex flex-col gap-4' >
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >First Name</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >{agent.first_name}</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Last Name</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >{agent.last_name}</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Email Address</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >{agent.email}</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Phone Number</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >{agent.phone}</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >State</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >{agent.state} State</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Local Government</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >{agent.local_govt}</p>
                                        </div>
                                    </div>
                                    )


                                    :



                                    (<div className='w-full flex flex-col gap-4' >
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >First Name</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >waiting...</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Last Name</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >waiting...</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Email Address</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >waiting...</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Phone Number</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >waiting...</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >State</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >waiting...</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start border-b border-someOtherGrayBorder pb-[10px] gap-[10px]'>
                                            <h5 className='text-sm 2xl:text-base font-semibold text-head' >Local Government</h5>
                                            <p className='text-someGray text-xs 2xl:text-sm' >waiting...</p>
                                        </div>
                                    </div>)
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Page