import React from 'react'

const OfferTimer2 = ({
    days,
    hours,
    min,
    sec
}) => {
    return (
        <div className='countdown-container'>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className='flex items-center'>
                    <div className='day-container' style={{ backgroundColor: "white", width: "80px", height: "80px", borderRadius: "100%" }}>
                        <p className=''>{days < 10 ? "0" + days : days}</p>
                        <p>DAYS</p>
                    </div>
                    <div className='hour-container' style={{ backgroundColor: "white", width: "80px", height: "80px", borderRadius: "100%" }}>
                        <p>{hours < 10 ? "0" + hours : hours}</p>
                        <p>HOURS</p>
                    </div>
                    <div className='min-container' style={{ backgroundColor: "white", width: "80px", height: "80px", borderRadius: "100%" }}>
                        <p>{min < 10 ? "0" + min : min}</p>
                        <p>MINS</p>
                    </div>
                    <div className='sec-container' style={{ backgroundColor: "white", width: "80px", height: "80px", borderRadius: "100%" }}>
                        <p>{sec < 10 ? "0" + sec : sec}</p>
                        <p>SEC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferTimer2;
