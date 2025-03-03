"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import AboutAdmin from "@/app/components/admin/Aboutadmin";
import Uploadslider from "@/app/components/admin/Uploadslider";

function DashboardPage() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  React.useEffect(() => {
    // console.log(cookies)
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/protected");
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          toast.error(
            "Oturumunuz zaman aşımına uğradı lütfen tekrar giriş yapınız."
          );
          router.push("/admin/login");
        }
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval);
  }, [router]);

  const handleSignOut = () => {
    // console.log('Cookies before removing:', cookies);
    removeCookie("token", { path: "/" });
    // console.log('Cookies after removing:', cookies);
    toast.success("Çıkış başarılı.");
    setTimeout(() => {
      location.href = "/admin/login";
    }, 1000); // Adding a delay to ensure the toast message is shown before redirection
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-row justify-between max-2xl p-20">
        <h1 className="flex flex-col">
          <span className="uppercase tracking-wide text-xl font-bold">Burritodekadas</span> 
         Admin Panel</h1>
        <button onClick={handleSignOut} className="p-2 bg-red-400 text-center rounded">
          Güvenli Çıkış
        </button>
      </div>

      <AboutAdmin />

      <div className="p-20">
          <Uploadslider />
      </div>
    </div>
  );
}

export default DashboardPage;
