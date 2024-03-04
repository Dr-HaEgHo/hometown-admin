'use client'
import { incubateeData } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'
import EmptyTable from './EmptyTable';
import TableShimmerLoader from './TableShimmerLoader';
import moment from 'moment';

const Table2 = ({ data, loading }: { data: any, loading: boolean }) => {

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const router = useRouter()
    return (<>
        {
            domLoaded && (<div className='w-full bg-white rounded-lg p-[10px]'>
                <table className='w-full'>
                    <thead className='w-full bg-tableTopGray px-[10] border-b border-tableStroke '>
                        <tr className='w-full flex items-center px-2 justify-between'>
                            <th className='text-head font-medium text-xs 2xl:text-sm py-[16px] flex flex-1' >
                                Name
                            </th>
                            <th className='text-head font-medium text-xs 2xl:text-sm py-[16px] flex flex-1' >
                                LGA
                            </th>
                            <th className='text-head font-medium text-xs 2xl:text-sm py-[16px] flex flex-1' >
                                Phone Number
                            </th>
                            <th className='text-head font-medium text-xs 2xl:text-sm py-[16px] flex flex-1 justify-center' >
                                Status
                            </th>
                            <th className='text-head font-medium text-xs 2xl:text-sm py-[16px] flex flex-1 justify-center' >
                                Title
                            </th>
                            <th className='text-head font-medium text-xs 2xl:text-sm py-[16px] flex flex-1 justify-end' >
                                Date Added
                            </th>
                        </tr>
                    </thead>
                    <tbody className={`flex flex-col gap-4 ${loading && 'animate-pulse w-full flex flex-col mt-4 px-4 mb-4'}`} >

                        {loading ? (<TableShimmerLoader />) : (
                            <>
                                {
                                    data && data.results ? data.results.map((item: any) => (
                                        <tr onClick={() => {
                                            router.push(`/dashboard/users/${item?.id}`)
                                        }}
                                            key={item.id} className='w-full flex items-center px-2 justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer'>
                                            <td className='py-3 flex flex-1 text-head text-xs 2xl:text-sm '>
                                                {item.first_name} {item.last_name}
                                            </td>
                                            <td className='py-3 flex flex-1 text-head text-xs 2xl:text-sm '>
                                                {item.local_govt}
                                            </td>
                                            <td className='py-3 flex flex-1 text-head text-xs 2xl:text-sm'>
                                                {item.phone_number}
                                            </td>
                                            <td className={`flex flex-1 justify-center ${item.approved === true ? 'w-full flex items-center justify-center bg-successTrans10 py-1 rounded-lg text-success text-xs 2xl:text-sm ' : 'w-full flex items-center justify-center bg-error2Trans10 py-1 rounded-lg text-error2 text-xs 2xl:text-sm'} `}>
                                                {item.approved === true ? 'Approved' : 'Not Approved'}
                                            </td>
                                            <td className='py-3 flex flex-1 justify-center text-head text-xs 2xl:text-sm '>
                                                {item.user_type === "Input_dealer" ? "Input Dealer" : item.user_type}
                                            </td>
                                            <td className='py-3 flex flex-1 flex-col items-end justify-end'>
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
export default Table2;


