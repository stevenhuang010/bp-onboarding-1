import { useEffect, useState } from "react"

const Interval = () => {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCounter((counter) => {
            return counter + 1
          });
        }, 1000);
        return () => { 
            clearInterval(interval)
        };
    }, []);

    
    
    return (
        <div>
            {counter}
        </div>
    )
}

export default Interval