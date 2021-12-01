import { useCallback, useEffect, useState } from 'react';

const useWindowWidth = (screensize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);
    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerWidth < screensize);
    }, [screensize]);
    useEffect(() => {
        console.log('useEffect call ');
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize]);
    return onSmallScreen;
};
export default useWindowWidth;
