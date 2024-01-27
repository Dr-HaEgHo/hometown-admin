'use client'
import { DropDownFade, FileUpload, InputFade } from '@/components/Input'
import SoftTable from '@/components/SoftTable'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addNewIncubatee } from '@/store/incubatees/incuActions'
import { clearNewUserSuccess } from '@/store/incubatees/incuSlice'
import { stat } from 'fs'
import { AddSquare, CloseSquare, DocumentDownload } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const states = [
    { id: 1, name: "Ogun" },
    { id: 2, name: "Oyo" },
    { id: 3, name: "Lagos" },
    { id: 4, name: "Osun" },
    { id: 5, name: "Abia" },
    { id: 6, name: "Rivers" },
    { id: 7, name: "Enugu" },
    { id: 8, name: "Imo" },
    { id: 9, name: "Kano" },
    { id: 10, name: "Kogi" },
    { id: 11, name: "Nassarawa" },
    { id: 12, name: "Gombe" },
]

const local = [
    { id: 1, name: "Ogun" },
    { id: 2, name: "Oyo" },
    { id: 3, name: "Lagos" },
    { id: 4, name: "Osun" },
    { id: 5, name: "Abia" },
    { id: 6, name: "Rivers" },
    { id: 7, name: "Enugu" },
    { id: 8, name: "Imo" },
    { id: 9, name: "Kano" },
    { id: 10, name: "Kogi" },
    { id: 11, name: "Nassarawa" },
    { id: 12, name: "Gombe" },
]

const roles = [
    { id: 1, name: "Farmer" },
    { id: 2, name: "Buyer" },
    { id: 3, name: "Input Dealer" },
    { id: 4, name: "Incubatee" },
    { id: 5, name: "Agent" },
]




const Page = () => {


    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.incubatees.loadingSingleUser)
    const isUserSuccess = useAppSelector(state => state.incubatees.newUserSuccess)


    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [state, setState] = useState("")
    const [lga, setLga] = useState("")
    const [base64Image, setBase64Image] = useState<string | null>(null);
    // const [formData, setFormData]: [formData: any, setFormData: Function] = useState()
    // const [role, setRole] = useState("")
    const [isFormButtonDisabled, setIsFormButtonDisabled] = useState(true);

    const [selectedImage, setSelectedImage]: [selectedImage: string, setSelectedImage: Function] = useState("");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(email);

    let newForm = new FormData();
    // let formData: any;



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        // console.log("files", e.target.files)
        if (e.target.files !== null) {
            setSelectedImage(e.target.files[0].name)
        }

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const result = reader.result as string;
                setBase64Image(result);
            };

            reader.readAsDataURL(file);
        }

    };



    const handleCreateNew = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(addNewIncubatee({
            firstName,
            lastName,
            email,
            phone,
            state,
            lga,
            base64Image
        }))

        // toast.success("Hello coders it was easy!");

    }

    // EMAIL AND PASSWORD FIELDS VALIDATION



    useEffect(() => {
        if (isUserSuccess === true) {
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhone(0)
            setState("")
            // toast.success("User Successfully added!")
            
            const successTimeOut = setTimeout(() => { 
                clearNewUserSuccess()
            }, 3000)

            clearTimeout(successTimeOut)
        } 
    }, [isUserSuccess]);


    useEffect(() => { 
        if (isLoading === true) {
                setLoading(true)
        } else {
            setLoading(false)
            }
    } , [isLoading])


    useEffect(() => {
        // console.log(selectedImage, "Email Valid");

        if (
            isValidEmail === true &&
            email !== "" &&
            firstName !== "" &&
            lastName !== "" &&
            phone !== 0 &&
            state !== "" &&
            selectedImage !== "" &&
            lga !== ""
        ) {
            setIsFormButtonDisabled(false);
        } else {
            setIsFormButtonDisabled(true);
        }
    }, [email, isValidEmail, firstName, lastName, email, selectedImage, phone, state, lga]);


    return (

        <div className="w-full">
            <div className="dash-container">
                <div className='w-[73%] max-w-[833px] bg-white p-10 mt-5 mb-[3rem]'>

                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {/* TOP WITH TITLE AND CLOSE BUTTON */}
                    <div className='w-full flex items-center justify-between border-b border-someBorderGray pb-5 mb-5' >
                        <h2>Add New Incubatee</h2>
                        <Link href='/dashboard/incubatees' ><CloseSquare variant='Bold' size='30' className='text-sidebarTxt cursor-pointer hover:text-sidebarTxtHover active:text-sidebarTxtActive transition duration-200' /></Link>
                    </div>

                    {/* FORM AND BUTTON */}
                    <div className='w-full ' >
                        <form className=' w-full flex items-start flex-col gap-4 '>
                            <InputFade value={ firstName} setValue={setFirstName} type='text' label='First Name' placeholder='Please Enter Your Name' />
                            <InputFade value={lastName } setValue={setLastName} type='text' label='Last Name' placeholder='Please Enter Your Name' />
                            <InputFade value={ email} setValue={setEmail} type='email' label='Email Address' placeholder='Please Enter Your Email' />
                            <InputFade value={ phone} setValue={setPhone} type='number' label='Phone Number' placeholder='Please Enter Your Phone Number' />
                            <DropDownFade value={ state} setValue={setState} type='text' data={states} label='State' placeholder='Please Select State' />
                            <DropDownFade value={ lga} setValue={setLga} type='text' data={local} label='Local Government Area' placeholder='Please Select LGA' />
                            {/* <DropDownFade setValue={setRole} type='text' data={roles} label='Role' placeholder='Please Select Your Role' /> */}

                            <div className="input-wrap">
                                <label className="labels">Upload Image</label>
                                <div className="w-full h-20 rounded bg-dashboardBg hover:opacity-90 active:opacity-100 transition duration-300">
                                    <div className="w-full h-full flex items-center justify-center flex-col gap-1">
                                        <DocumentDownload
                                            size="26"
                                            className="text-someGray"
                                            variant="Bold"
                                        />
                                        <p className="text-someGray text-[10px] text-center">
                                            Click or Drag to upload
                                        </p>
                                    </div>
                                    <input
                                        className="inputsfade "
                                        type="file"
                                        onChange={handleImageChange}
                                        style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "0px",
                                            width: "100%",
                                            height: "100%",
                                            background: "skyblue",
                                            opacity: "0",
                                            cursor: "pointer",
                                        }}
                                    />
                                </div>
                            </div>
                            {
                                selectedImage && <p className='text-black text-xs' >{selectedImage}</p>
                            }
                            <button disabled={isFormButtonDisabled}
                                onClick={handleCreateNew}
                                className='transition duration-200 rounded-[6px] bg-primary1 hover:bg-primary active:bg-primary1 flex items-center justify-center relative gap-3 py-2 px-8 disabled:bg-someGray'>
                                <p className='text-white text-xs 2xl:text-sm ' >{ loading === true ? 'Loading...' : 'Add New' }</p>
                            </button>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Page