"use client";

import { Logout, MenuBoard, People, Profile } from "iconsax-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Prompt from "./Prompt";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/auth/authSlice";
import Modal from "./Modal";
import { clearAssignSuccess, toggleAssignTabOpen } from "@/store/incubatees/incuSlice";
import { DropDownFade } from "./Input";
import { assignNewLga } from "@/store/incubatees/incuActions";
const NaijaStates = require('naija-state-local-government');

const Sidebar = () => {
  const location = usePathname();
  const router = useRouter();
  const param = useParams();
  const dispatch = useAppDispatch();


  const token = useAppSelector((state) => state.auth.accesstoken);
  const isAssignTabOpen = useAppSelector((state) => state.incubatees.isAssignTabOpen);
  const assignAgentLoading = useAppSelector((state) => state.incubatees.loadingAssignNewAgent);
  const isAssignSuccess = useAppSelector((state) => state.incubatees.assignSuccess);
  const [allStates, setAllStates] = useState<[]>([]);
  const [lgaList, setLgaList] = useState<[]>([])
  const [isFormButtonDisabled, setIsFormButtonDisabled] = useState(true);


  const [onlineStatus, setOnlineStatus] = useState("online");
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [state, setState] = useState<string>("")
  const [lga, setLga] = useState<string>("")
  const [assignLoading, setAssignLoading] = useState<boolean>(false)


  const [errorST, setErrorST] = useState<string>("")
  const [errorLG, setErrorLG] = useState<string>("")

  const sidebarLinks = [
    { id: 1, title: "Dashboard", route: "/dashboard" },
    {
      id: 1,
      title: "Incubatees",
      route: "/dashboard/incubatees",
      subRoutes: "/dashboard/incubatees/new-incubatee",
      subRoutes1: `/dashboard/incubatees/${param?.id}`,
    },
    {
      id: 1,
      title: "Users",
      route: "/dashboard/users",
      subRoutes1: `/dashboard/users/${param?.id}`,
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const handleCancel = () => {
    setLogoutOpen((prev: boolean) => (prev = !prev));
  };

  const handleAssignNewAgent = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(assignNewLga({
      assigned: lga,
      agentId: param?.id.toString()
    }))
  }

  console.log("the param", param.id)

  useEffect(() => {
    setAllStates(NaijaStates.all());
  }, [])

  useEffect(() => {
    if (isAssignSuccess) {
      router.push('/dashboard/incubatees')
    }

    setTimeout(() => {
      dispatch(clearAssignSuccess())
    }, 2000);

  }, [isAssignSuccess])

  useEffect(() => {
    if (assignAgentLoading) {
      setAssignLoading(true)
    } else {
      setAssignLoading(false)
    }
  }, [assignAgentLoading])


  useEffect(() => {
    allStates.length ? allStates.filter((item: any) => {
      if (item.state === state) {
        setLgaList(item.lgas)
      }
    }) : null

  }, [state])


  useEffect(() => {
    if (
      state !== "" &&
      lga !== ""
    ) {
      setIsFormButtonDisabled(false);
    } else if (assignAgentLoading) {
      setIsFormButtonDisabled(true);
    } else {
      setIsFormButtonDisabled(true)
    }
  }, [state, lga, assignAgentLoading])



  return (
    <div className="w-full h-full border-sidebarDiv border-r-[0.2px] bg-white ">
      <div className="h-full w-full slim-scroll flex flex-col justify-between">
        <Prompt
          title="Are you sure you want to logout ?"
          subtitle="You can always log back in at any time"
          action={handleLogout}
          action2={handleCancel}
          btn1="Logout"
          btn2="Cancel"
          isOpen={logoutOpen}
          setIsOpen={setLogoutOpen}
        />

        <Modal isOpen={isAssignTabOpen} setIsOpen={() => dispatch(toggleAssignTabOpen())} >
          <div className="w-full" >
            <form action="submit" className="w-full flex flex-col gap-2" >
              <DropDownFade value={state} error={errorST} setValue={setState} type='text' data={allStates} label='State' placeholder='Please Select State' />
              <DropDownFade value={lga} error={errorLG} setValue={setLga} type='text' data={lgaList} label='Local Government Area' placeholder='Please Select LGA' />
              <button className="buttons" disabled={isFormButtonDisabled} onClick={handleAssignNewAgent} >{assignLoading ? "Please wait..." : "Assign"}</button>
            </form>
          </div>
        </Modal>

        {/* TOP  */}
        <div className="w-full p-3 flex flex-col items-start">
          <div className="w-[42px] h-[42px] flex items-center justify-center ">
            <Image
              src={require("../assets/images/logo.png")}
              alt="hometownadmin.com"
              className="w-full"
            />
          </div>
          <h2 className="text-primary font-semibold text-[10px] 2xl:text-xs">
            HOMETOWN FARM MARKET
          </h2>
        </div>

        {/* LINKS SECTION */}
        <div className="w-full py-3 pl-3">
          {/* MAIN LINKS */}
          <p className="w-full py-1 border-sidebarTxt border-b text-sidebarTxt text-xs 2xl:text-sm">
            Main
          </p>

          <div className="w-full flex flex-col items-start gap-2 py-2">
            {sidebarLinks?.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  router.push(item.route);
                }}
                className={`w-full cursor-pointer transition duration-200 p-2 flex border-primary1 items-center gap-4 hover:bg-sidebarTxtHover active:bg-sidebarTxtActive`}
                style={{
                  color:
                    location === item.route ||
                      location === item.subRoutes ||
                      location === item.subRoutes1
                      ? "#103B1D"
                      : "#292D32",
                  backgroundColor:
                    location === item.route ||
                      location === item.subRoutes ||
                      location === item.subRoutes1
                      ? "rgba(82, 255, 134, 0.1)"
                      : "",
                  borderRightWidth:
                    location === item.route ||
                      location === item.subRoutes ||
                      location === item.subRoutes1
                      ? 4
                      : 0,
                }}
              >
                {item?.title === "Dashboard" && (
                  <Profile
                    variant="Bulk"
                    color={
                      item.route === location ||
                        location === item.subRoutes ||
                        location === item.subRoutes1
                        ? "#103B1D"
                        : "#292D32"
                    }
                  />
                )}
                {item?.title === "Incubatees" && (
                  <MenuBoard
                    variant="Bulk"
                    color={
                      item.route === location ||
                        location === item.subRoutes ||
                        location === item.subRoutes1
                        ? "#103B1D"
                        : "#292D32"
                    }
                  />
                )}
                {item?.title === "Users" && (
                  <People
                    variant="Bulk"
                    color={
                      item.route === location ||
                        location === item.subRoutes ||
                        location === item.subRoutes1
                        ? "#103B1D"
                        : "#292D32"
                    }
                  />
                )}
                <p
                  className={`text-xs 2xl:text-sm text-linkTxt font-${item.route === location ||
                      location === item.subRoutes ||
                      location === item.subRoutes1
                      ? "semibold"
                      : "normal"
                    }`}
                >
                  {item.title && item.title}
                </p>
              </div>
            ))}
          </div>

          {/* SYSTEM LINKS */}

          <p className="w-full py-1 border-sidebarTxt border-b text-sidebarTxt text-xs 2xl:text-sm">
            System
          </p>

          <div className="w-full flex flex-col items-start gap-2 py-3">
            <div
              onClick={() => {
                setLogoutOpen((prev: boolean) => (prev = true));
              }}
              className={`w-full cursor-pointer transition duration-200 p-2 flex border-primary1 items-center gap-4 hover:bg-sidebarTxtHover active:bg-sidebarTxtActive`}
            >
              <Logout color="#D92C20" />
              <p className={`text-xs 2xl:text-sm font-normal text-error`}>
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* USER DETAILS AND STATUS */}
        <div className="w-full p-3 border-sidebarTxt border-t flex items-center gap-4">
          {/* IMAGE */}
          <div className="w-[42px] h-[42px]  relative">
            <Image
              src={require("../assets/images/Avatar.png")}
              alt="hometownadmin.com"
              className="w-full rounded-full overflow-hidden"
            />
            <div
              className="w-[14px] h-[14px] rounded-full border-[2px] border-white z-10 absolute bottom-0 right-0"
              style={{
                backgroundColor: "green",
              }}
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-1 flex-col items-start gap-[2px]">
            <p className="text-xs 2xl:text-sm text-linkTxt">Joy Doe</p>
            <span className="text-[9px] 2xl:text-[11px] text-linkTxt">
              Admin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
