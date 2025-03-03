"use client";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function NavbarRenderer() {
    let path = usePathname();

    return !path.includes("admin") ? <Navbar /> : null;
}

export function FooterRenderer() {
    let path = usePathname();

    return !path.includes("admin") ? <Footer /> : null;
}