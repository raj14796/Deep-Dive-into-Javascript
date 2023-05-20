import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
    const [value, setValue] = useState(0);
    const timerRef = useRef();
    const fn = useCallback(function (randomValue) {
        // console.log("randomValue  >>>>", randomValue);
        setValue(randomValue % 2);
    }, []);
    const throttleFn = useThrottle(fn, 2000);

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            const randomValue = Math.floor(Math.random() * 100);
            throttleFn(randomValue);
        }, 1000);
    }, []);

    const memoisedValue = useCustomMemo(() => {
        return value === 0 ? "even" : "odd";
    }, [value]);

    return (
        <div className="App">
            <h3>{memoisedValue}</h3>
        </div>
    );
}

const useCustomMemo = (cb, dependencies) => {
    // console.log("here >>>>");
    const [cachedValue, setCachedValue] = useState(null);
    const [prevDependency, setPrevDependency] = useState(null);
    if (!deepCompare(prevDependency, dependencies)) {
        setCachedValue(cb());
        setPrevDependency(dependencies);
    }
    return cachedValue;
};

const deepCompare = (obj1, obj2) => {
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (obj1 === undefined && obj2 === undefined) {
        return true;
    }
    if (obj1 === null && obj2 === null) {
        return true;
    }
    if (typeof obj1 === "string") {
        return obj1 === obj2;
    }
    if (typeof obj1 === "number") {
        return obj1 === obj2;
    }
    if (typeof obj1 === "object") {
        if (Array.isArray(obj1) && !Array.isArray(obj2)) {
            return false;
        }
        if (!Array.isArray(obj1) && Array.isArray(obj2)) {
            return false;
        }
        if (Array.isArray(obj1)) {
            for (let i = 0; i < obj1.length; i++) {
                if (!deepCompare(obj1[i], obj2[i])) {
                    return false;
                }
            }
        } else {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                return false;
            }
            for (let key in obj1) {
                if (!deepCompare(obj1[key], obj2[key])) {
                    return false;
                }
            }
        }
    }
    return true;
};

function useThrottle(fn, delay) {
    const flag = useRef(true);
    // let flag = true;
    // console.log("flag   >>>>", flag);
    return function (...args) {
        const context = this;
        if (flag.current) {
            fn.apply(context, args);
            flag.current = false;
            setTimeout(() => {
                flag.current = true;
            }, delay);
        }
    };
}
