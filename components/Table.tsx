'use client'
import { incubateeData } from '@/types/types';
import { useParams, useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'
import TableShimmerLoader from './TableShimmerLoader';
import EmptyTable from './EmptyTable';
import moment from 'moment';


const Table = ({ data, loading }: { data: any, loading: boolean }) => {

    const [sortedResults, setSortedResults] = useState([] as any)
    const [domLoaded, setDomLoaded] = useState(false);
    const router = useRouter();



    const sortResults = () => {
        if (data.results) {
            console.log("results in table:::", data.results)
            const dataCopy: any[] = [...data.results]
            const newSortedResults = dataCopy.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            setSortedResults(newSortedResults)
        }
    }

    useEffect(() => {
        sortResults()
    }, [])

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (<>
        {
            domLoaded && (<div className='w-full bg-white rounded-lg p-[10px]'>
                <table className='w-full'>
                    <thead className='w-full bg-tableTopGray px-[10] border-b border-tableStroke '>
                        <tr className='w-full flex items-center px-2 justify-between'>
                            <th className='py-[16px] flex flex-1 text-head font-medium text-xs 2xl:text-sm ' >
                                Name
                            </th>
                            <th className='py-[16px] flex flex-1 text-head font-medium text-xs 2xl:text-sm ' >
                                LGA
                            </th>
                            <th className='py-[16px] flex flex-1 text-head font-medium text-xs 2xl:text-sm ' >
                                Phone Number
                            </th>
                            <th className='py-[16px] flex flex-1 justify-center text-head font-medium text-xs 2xl:text-sm ' >
                                Status
                            </th>
                            <th className='py-[16px] flex flex-1 justify-end text-head font-medium text-xs 2xl:text-sm ' >
                                Date Added
                            </th>
                        </tr>
                    </thead>


                    <tbody className={`flex flex-col gap-4 ${loading && 'animate-pulse w-full flex flex-col mt-4 px-4 mb-4'}`} >

                        {loading ? (<TableShimmerLoader />) : (
                            <>
                                {
                                    data && data.results ? sortedResults.map((item: any) => (
                                        <tr onClick={() => {
                                            router.push(`/dashboard/incubatees/${item?.id}`)
                                        }} key={item.id} className='w-full flex items-center px-2 justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer'>
                                            <td className='py-3 flex flex-1 text-head text-xs 2xl:text-sm'>
                                                {item.first_name}{" "}{item.last_name}
                                            </td>
                                            <td className='py-3 flex flex-1 text-head text-xs 2xl:text-sm'>
                                                {item.local_govt}
                                            </td>
                                            <td className='py-3 flex flex-1 text-head text-xs 2xl:text-sm'>
                                                {item.phone_number}
                                            </td>
                                            <td className={`flex flex-1 justify-center ${item.approved === true ? 'w-full flex items-center justify-center bg-successTrans10 py-1 rounded-lg text-success text-xs 2xl:text-sm ' : 'w-full flex items-center justify-center bg-error2Trans10 py-1 rounded-lg text-error2 text-xs 2xl:text-sm'} `}>
                                                {item.approved === true ? 'Approved' : 'Not Approved'}
                                            </td>
                                            <td className='py-3 flex flex-1 justify-end flex-col items-end'>
                                                <p className='text-head text-xs 2xl:text-sm ' >{moment(item.created_at).format("Do, MMM YYYY")}</p>
                                                <p className='text-head text-[8px] 2xl:text-[8px]' >at {moment(item.created_at).format("hh:mm a")}</p>
                                            </td>
                                        </tr>
                                    )) : (<EmptyTable text='Oops, No incubatees' subtext='Sorry, there are no incubatees currently' />)
                                }
                            </>
                        )}

                    </tbody>
                </table>
            </div>)
        }
    </>)
}
export default Table;