import { useEffect, useState } from "react";

export const useHasScrolled = (threshold?: number) => {
    const scrolledThreshold = threshold || 200

    const [hasScrolled, setHasScrolled] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > scrolledThreshold) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { hasScrolled }
}