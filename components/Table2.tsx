'use client'
import { incubateeData } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

const Table2 = ({ data }: { data: any }) => {

    const router = useRouter()

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
                        <th className='py-[16px] flex flex-1 justify-center' >
                            <h6 className='text-head font-medium text-xs 2xl:text-sm ' >Title</h6>
                        </th>
                        <th className='py-[16px] flex flex-1 justify-end' >
                            <h6 className='text-head font-medium text-xs 2xl:text-sm ' >Date Added</h6>
                        </th>

                    </tr>
                </thead>
                <tbody className='flex flex-col gap-4' >
                    {data?.map((item: any) => (
                        <tr onClick={() => {
                            router.push(`/dashboard/users/${item?.id}`)
                        }}
                            key={item.id} className='w-full flex items-center px-2 justify-between pt-2 hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer'>
                            <td className='py-3 flex flex-1'>
                                <p className='text-head text-xs 2xl:text-sm ' >{item.name}</p>
                            </td>
                            <td className='py-3 flex flex-1'>
                                <p className='text-head text-xs 2xl:text-sm ' >{item.LGA}</p>
                            </td>
                            <td className='py-3 flex flex-1'>
                                <p className='text-head text-xs 2xl:text-sm ' >+{item.phoneNunmber}</p>
                            </td>
                            <td className='py-3 flex flex-1 justify-center'>
                                {item.status === 'Active' && (<div className='w-full flex items-center justify-center bg-successTrans10 py-1 rounded-lg' > <p className='text-success text-xs 2xl:text-sm ' >{item.status}</p></div>) }
                                {item.status === 'Inactive' && (<div className='w-full flex items-center justify-center bg-error2Trans10 py-1 rounded-lg' > <p className='text-error2 text-xs 2xl:text-sm ' >{item.status}</p></div>) }
                            </td>
                            <td className='py-3 flex flex-1 justify-center '>
                                <p className='text-head text-xs 2xl:text-sm ' >{item.title}</p>
                            </td>
                            <td className='py-3 flex flex-1 justify-end'>
                                <div className='flex flex-col items-end'>
                                    <p className='text-head text-xs 2xl:text-sm ' >{item.date}</p>
                                    <span className='text-head text-[8px] 2xl:text-[8px]' >at {item.time}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table2;