import { useState } from "react"

export default function EvenCounter() {
    const [evenNumb, evenCounter] = useState(2);

    const handleClick = () => {
        evenCounter(prev => prev + 2);
    }

    const myStyle = {
        width: "150px",
        height: "50px"
    }

    const textStyle = {
        fontSize: "40px"
    }

    return (
        <>
            <div className="box">
                <h1>Even Numbers</h1>
                <h2 style={textStyle}>{evenNumb}</h2>
                <button style={myStyle} onClick={handleClick}>Next Odd Number</button>
            </div>
        </>
    )
}