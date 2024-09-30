import { useEffect, useState } from "react";


export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const checkScreenSize = () => {
        console.log(window.innerWidth);
        setIsMobile((window.innerWidth < 900))
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return isMobile;
}