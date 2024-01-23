"use client";
import Chart from "@/components/Chart";
import NotificationCard from "@/components/NotificationCard";
import { clearLoginSuccess } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { getDashCounts } from "@/store/dashboard/dashActions";
import Loader from "@/components/Loader";

const data = [
  {
    id: 1,
    title: "Farmers",
    population: 1209,
    color: "rgba(253, 240, 176, 0.6)",
    icons: require("../../assets/icons/farmerbox.png"),
  },
  {
    id: 2,
    title: "Buyers (Off-takers)",
    population: 6500,
    color: "#D7FFE9",
    icons: require("../../assets/icons/buyerbox.png"),
  },
  {
    id: 3,
    title: "Input Dealers ",
    population: 894,
    color: "#FFD0E5",
    icons: require("../../assets/icons/inputdealerbox.png"),
  },
  {
    id: 4,
    title: "Incubatees",
    population: 300,
    color: "#C6E7F9",
    icons: require("../../assets/icons/incubateesbox.png"),
  },
];

const notifications = [
  {
    id: 1,
    title: "24 Pending Requests",
    desc: "24 new users are waiting for approval 24 new users are waiting for approval 24 new users are waiting for approval",
    time: "2 hours ago",
    icon: "",
  },
  {
    id: 2,
    title: "24 Pending Requests",
    desc: "24 new users are waiting for approval 24 new users are waiting for approval 24 new users are waiting for approval",
    time: "2 hours ago",
    icon: "",
  },
  {
    id: 3,
    title: "24 Pending Requests",
    desc: "24 new users are waiting for approval 24 new users are waiting for approval 24 new users are waiting for approval",
    time: "2 hours ago",
    icon: "",
  },
  {
    id: 4,
    title: "24 Pending Requests",
    desc: "24 new users are waiting for approval 24 new users are waiting for approval 24 new users are waiting for approval",
    time: "2 hours ago",
    icon: "",
  },
  {
    id: 5,
    title: "24 Pending Requests",
    desc: "24 new users are waiting for approval 24 new users are waiting for approval 24 new users are waiting for approval",
    time: "2 hours ago",
    icon: "",
  },
  {
    id: 6,
    title: "24 Pending Requests",
    desc: "24 new users are waiting for approval 24 new users are waiting for approval 24 new users are waiting for approval",
    time: "2 hours ago",
    icon: "",
  },
];

const AnalyticsCard = ({ item }: { item: any }) => {
  const isLoading = useAppSelector((state) => state.dash.loading);
  const counts = useAppSelector((state) => state.dash.counts);

  const [loading, setLoading]: [loading: boolean, setLoading: Function] =
    useState(false);

  useEffect(() => {
    if (isLoading === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);

  return (
    <div
      className={`w-[25%] aspect-square rounded-[10px] shadow flex flex-col items-center justify-center`}
      style={{
        backgroundColor: item.color,
      }}
    >
      {/* ICON */}
      <div className="w-[28%] aspect-square flex items-center justify-center shadow rounded-full mb-2">
        <Image src={item.icons} alt="hometownadmin.com" className="w-[40%]" />
      </div>
      <p className="text-[10px] 2xl:text-xs text-primary">{item.title}</p>
      <span className="text-[30px] 2xl:text-xs text-primary font-semibold">
        {loading === true ? (
          <Loader />
        ) : counts ? (
          <>
            {item.id === 1 &&
              new Intl.NumberFormat("NG", {}).format(
                counts?.total_farmers ? counts.total_farmers : 0
              )}
            {item.id === 2 &&
              new Intl.NumberFormat("NG", {}).format(
                counts?.total_customers ? counts.total_customers : 0
              )}
            {item.id === 3 &&
              new Intl.NumberFormat("NG", {}).format(
                counts?.total_input_dealers ? counts.total_input_dealers : 0
              )}
            {item.id === 4 &&
              new Intl.NumberFormat("NG", {}).format(
                counts?.total_agents ? counts.total_agents : 0
              )}
          </>
        ) : (
          0
        )}
      </span>
    </div>
  );
};

const Page = () => {
  // const router = useRouter()

  // const token = useAppSelector((state) => state.auth.accesstoken)

  // useEffect(() => {
  //   if (token !== "") {
  //     router.push('/dashboard')
  //   }
  // }, [])

  const dispatch = useAppDispatch();

  const handleGetDashCounts = () => {
    dispatch(getDashCounts());
  };

  useEffect(() => {
    handleGetDashCounts();
  }, []);

  return (
    <div className="w-full py-[20px]">
      <div className="dash-container">
        <div className="w-full flex items-start justify-between relative">
          {/* ANALYTICS */}
          <div className="w-[63%] sticky top-0">
            {/* ANALYTICS BOXES */}
            <div className="w-full flex items-center gap-2 mb-5">
              {data?.map((item) => (
                <AnalyticsCard key={item.id} item={item} />
              ))}
            </div>

            {/* CHARTS */}

            <div className="w-full flex items-stretch bg-white rounded-2xl p-6 ">
              {/* KEYS  */}
              <div className="w-[43%] flex flex-col items-start justify-between">
                {/* TOP */}
                <div className="w-full">
                  <h4 className="text-head text-[18px] 2xl:text-[20px] font-semibold">
                    Chart per %
                  </h4>
                  <div className="w-full flex items-center gap-4">
                    <div className="w-2 h-2 rounded full bg-chartBlue" />
                    <p className="text-head text-sm 2xl:text-base font-medium">
                      Products
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-4">
                    <div className="w-2 h-2 rounded full bg-chartGreen" />
                    <p className="text-head text-sm 2xl:text-base font-medium">
                      Services
                    </p>
                  </div>
                </div>

                {/* BOTTOM */}
                <div>
                  <p className="text-head text-xs">
                    In the past 1 month, products have been ordered more than
                    services
                  </p>
                </div>
              </div>

              {/* CHART  */}
              <div className="w-[57%] aspect-square flex items-center justify-center">
                <Chart />
              </div>
            </div>
          </div>

          {/* NOTIFICATIONS */}
          <div className="w-[34%]">
            <div className="bg-white rounded-2xl p-3 2xl:p-4">
              <h2 className="text-base text-head font-semibold">
                Notifications
              </h2>
              {notifications.map((item) => (
                <NotificationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;