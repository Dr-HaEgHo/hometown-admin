"use client";
import {
  dropDownProps,
  dropDownPropsFade,
  emailInputProps,
  emailInputPropsFade,
  fileUploadProps,
  pwInputProps,
} from "@/types/types";
import {
  ArrowDown2,
  ArrowUp2,
  DocumentDownload,
  Eye,
  EyeSlash,
} from "iconsax-react";
import React, { FC, useReducer, useRef, useState } from "react";
import PhoneInput from 'react-phone-number-input'


const Input: FC<emailInputProps> = (props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="input-wrap">
      <label className="labels">{props.label && props.label}</label>
      <input
        onChange={handleInputChange}
        type="email"
        className="inputs"
        placeholder={props.placeholder && props.placeholder}
      />
    </div>
  );
};
export default Input;

export const InputFade: FC<emailInputPropsFade> = (props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value); 
  };

  return (
    <div className="input-wrap">
      <label className="labels">{props.label && props.label}</label>
      <input
        onChange={handleInputChange}
        type={props?.type}
        value={props.value}
        className="inputsfade !mb-0"
        placeholder={props.placeholder && props.placeholder}
      />
      {props.error && props.value.length > 0 ? <p className='text-[10px] text-error -mt-2' >{props?.error}</p> : null }
    </div>
  );
};

// export const PhoneInputHT: FC<emailInputPropsFade> = (props) => {
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     props.setValue(e.target.value);
//   };

//   return (
//     <div className="input-wrap">
//       <label className="labels">{props.label && props.label}</label>
//       <PhoneInput
//         placeholder="Enter phone number"
//         value={props?.value}
//         onChange={(e:React.ChangeEvent<HTMLInputElement>) => parseInt(e.target.value)} />
        
//       {props.error ? <p className='text-[10px] text-error -mt-2' >{props?.error}</p> : null }
//     </div>
//   );
// };

export const PasswordInput: FC<pwInputProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="input-wrap">
      <label className="labels">{props.label && props.label}</label>
      <div className="password-input">
        <input
          className="inputs  "
          type={isOpen === true ? "text" : "password"}
          onChange={handleInputChange}
          placeholder={props.placeholder && props.placeholder}
        />
        <div
          onClick={handleClick}
          className="absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons"
        >
          {isOpen === true ? (
            <EyeSlash variant="Bold" size="20" />
          ) : (
            <Eye variant="Bold" size="20" />
          )}
        </div>
      </div>
    </div>
  );
};

export const PasswordInputFade: FC<pwInputProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  return (
    <div className="input-wrap">
      <label className="labels">{props.label && props.label}</label>
      <div className="password-input">
        <input
          className="inputs  "
          type={isOpen === true ? "text" : "password"}
          placeholder={props.placeholder && props.placeholder}
        />
        <div
          onClick={handleClick}
          className="absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons"
        >
          {isOpen === true ? (
            <EyeSlash variant="Bold" size="20" />
          ) : (
            <Eye variant="Bold" size="20" />
          )}
        </div>
      </div>
    </div>
  );
};

export const DropDown: FC<pwInputProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  return (
    <div className="input-wrap">
      <label className="labels">{props.label && props.label}</label>
      <div className="password-input">
        <input
          className="inputs  "
          type={isOpen === true ? "text" : "password"}
          placeholder={props.placeholder && props.placeholder}
        />
        <div
          onClick={handleClick}
          className="absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons"
        >
          {isOpen === true ? (
            <EyeSlash variant="Bold" size="20" />
          ) : (
            <Eye variant="Bold" size="20" />
          )}
        </div>
      </div>
    </div>
  );
};

export const DropDownFade: FC<dropDownPropsFade> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue]: [value: string, setValue: any] = useState("");

  const pRef = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  const handleChange = () => {};

  const handleDropItem = (name: string | undefined) => {
    setValue(name);
    props.setValue(name);
    setIsOpen((prev) => (prev = !prev));
  };

  return (
    <div className="input-wrap">
      <label className="labels">{props.label && props.label}</label>
      <div className="password-input">
        <input
          onChange={handleChange}
          value={props.value}
          className="inputsfade  "
          type={props?.type}
          placeholder={props.placeholder && props.placeholder}
        />
        <div
          onClick={handleClick}
          className="absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons"
        >
          {isOpen === true ? (
            <ArrowUp2 variant="Bold" size="20" />
          ) : (
            <ArrowDown2 variant="Bold" size="20" />
          )}
        </div>

        <div
          style={{
            height: isOpen === true ? 150 : 0,
          }}
          className="transition duration-[1000ms] w-full rounded-md bg-white shadow absolute z-10 top-[120%] slim-scroll"
        >
          {props?.data.map((item:any, i:number) => (
            <p
              key={i}
              ref={pRef}
              onClick={() => handleDropItem(item.state || item)}
              className="transition duration-200 cursor-pointer p-2 text-[11px] 2xl:text-xs hover:bg-sidebarTxtHover active:bg-sidebarTxtActive"
            >
              {item.state && item.state}
              {!item.state && item}
            </p>
          ))}

          <div className="w-full h-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export const FileUpload: FC<fileUploadProps> = (props) => {

  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    props.setSelectedImage(e.target.files ? e.target.files[0] : null);
  };

  return (
    <div className="input-wrap">
      <label className="labels">{props.label && props.label}</label>
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
  );
};
