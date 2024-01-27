'use client'
import { incubateeData } from '@/types/types';
import { useParams, useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'
import TableShimmerLoader from './TableShimmerLoader';
import EmptyTable from './EmptyTable';
import moment from 'moment';


const Table = ({ data, loading }: { data: any, loading: boolean }) => {

    const [sortedResults, setSortedResults] = useState([] as any)
    const router = useRouter();

    const sortResults = () => {
        if (data.results) {
            console.log("results in table:::", data.results)
            const dataCopy: any[] = [...data.results]
            const newSortedResults = dataCopy.sort((a: any , b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            setSortedResults(newSortedResults)
        }
    }

    useEffect(() => {
        sortResults()
    }, [])


    return (
        <div className='w-full bg-white rounded-lg p-[10px]'>
            <table className='w-full'>
                <thead className='w-full bg-tableTopGray px-[10] border-b border-tableStroke '>
                    <tr className='w-full flex items-center px-2 justify-between'>
                        <th className='py-[16px] flex flex-1' >
                            <h6 className='text-head font-medium text-xs 2xl:text-sm ' >Name</h6>
                        </th>
                        <th className='py-[16px] flex flex-1' >
                            <h6 className='text-head font-medium text-xs 2xl:text-sm ' >LGA</h6>
                        </th>
                        <th className='py-[16px] flex flex-1' >
                            <h6 className='text-head font-medium text-xs 2xl:text-sm ' >Phone Number</h6>
                        </th>
                        <th className='py-[16px] flex flex-1 justify-center' >
                            <h6 className='text-head font-medium text-xs 2xl:text-sm ' >Status</h6>
                        </th>
                        <th className='py-[16px] flex flex-1 justify-end' >
                            <h6 className='text-head font-medium text-xs 2xl:text-sm ' >Date Added</h6>
                        </th>

                    </tr>
                </thead>
                
                    {loading ? (<TableShimmerLoader />) : (
                    <tbody className='flex flex-col gap-4' >
                            {
                                data && data.results ? sortedResults.map((item: any) => (
                                    <tr onClick={() => {
                                        router.push(`/dashboard/incubatees/${item?.id}`)
                                    }} key={item.id} className='w-full flex items-center px-2 justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer'>
                                        <td className='py-3 flex flex-1'>
                                            <p className='text-head text-xs 2xl:text-sm ' >{item.first_name}{" "}{item.last_name}</p>
                                        </td>
                                        <td className='py-3 flex flex-1'>
                                            <p className='text-head text-xs 2xl:text-sm ' >{item.local_govt}</p>
                                        </td>
                                        <td className='py-3 flex flex-1'>
                                            <p className='text-head text-xs 2xl:text-sm ' >+{item.phone_nunmber}</p>
                                        </td>
                                        <td className='py-3 flex flex-1 justify-center'>
                                            {item.approved === true ? (<div className='w-full flex items-center justify-center bg-successTrans10 py-1 rounded-lg' > <p className='text-success text-xs 2xl:text-sm ' >Approved</p></div>) : (<div className='w-full flex items-center justify-center bg-error2Trans10 py-1 rounded-lg' > <p className='text-error2 text-xs 2xl:text-sm ' >Not Approved</p></div>)}

                                        </td>
                                        <td className='py-3 flex flex-1 justify-end'>
                                            <div className='flex flex-col items-end'>
                                                <p className='text-head text-xs 2xl:text-sm ' >{moment(item.created_at).format("Do, MMM YYYY")}</p>
                                                <span className='text-head text-[8px] 2xl:text-[8px]' >at {moment(item.created_at).format("hh:mm a")}</span>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (<EmptyTable text='Oops, No incubatees' subtext='Sorry, there are no incubatees currently' />)
                            }
                    </tbody>
                    ) }
                
            </table>
        </div>

        
    )
}

export default Table;