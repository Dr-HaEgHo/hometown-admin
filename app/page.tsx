"use client";
import Input, { PasswordInput } from "@/components/Input";
import { useAppSelector } from "@/store/hooks";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const roles = ["Farmers", "Buyers", "Agents", "Input Dealers"];

export default function Home() {
  const [content, setContent]: [count: string, setCount: Function] =
    useState("Farmers");
  const [count, setCount]: [count: number, setCount: Function] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount: number) => prevCount + 1);
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    if (count === roles.length) {
      setCount(0);
    }

    setContent(roles[count]);
  }, [count]);



  useEffect(() => {


    const timerId = setTimeout(() => {
      router.push("/login");
    }, 3000);


    return () => {
      clearTimeout(timerId)
    }

  }, []);

  return (
    <main className="w-full h-screen flex items-center justify-center ">
      <Head>
        <title>Test Title</title>
        <div className="flex flex-col items-center justify-center">
          <div className="h-[90px] w-[90px] flex items-center justify-center">
            <Image
              src={require("../assets/images/logo.png")}
              alt="hometown-admin.com"
              className="spinning-logo"
            />
          </div>

          <div className="w-[120px] h-[30px] relative overflow-hidden">
            <p className="swipe-right font-semibold"> {content}</p>
          </div>
        </div>
      </Head>
    </main>
  );
}
