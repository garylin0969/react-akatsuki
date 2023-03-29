import { useEffect, useRef } from 'react';

type TimeoutHandler = ReturnType<typeof setTimeout>;

const useTimeout = (callback: () => void, delay: number): (() => void) => {
    const timeoutRef = useRef<TimeoutHandler>();

    useEffect(() => {
        timeoutRef.current = setTimeout(callback, delay);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [callback, delay]);

    return () => {
        clearTimeout(timeoutRef.current);
    };
};

export default useTimeout;
