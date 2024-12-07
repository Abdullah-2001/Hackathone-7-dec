import React from 'react'

const OfferTimer = ({
    days,
    hours,
    min,
    sec
}) => {
    return (
        <div className='countdown-container'>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className='flex items-center'>
                    <div className='day-container'>
                        <p className='title'>DAYS</p>
                        <div className='day'>
                            <p>{days < 10 ? "0" + days : days}</p>
                        </div>
                    </div>
                    <div className='text-[#E07575] text-[60px] mx-3'>:</div>
                    <div className='hour-container'>
                        <p className='title'>HOURS</p>
                        <div className='hour'>
                            <p>{hours < 10 ? "0" + hours : hours}</p>
                        </div>
                    </div>
                    <div className='text-[#E07575] text-[60px] mx-3'>:</div>
                    <div className='min-container'>
                        <p className='title'>MINS</p>
                        <div className='min'>
                            <p>{min < 10 ? "0" + min : min}</p>
                        </div>
                    </div>
                    <div className='text-[#E07575] text-[60px] mx-3'>:</div>
                    <div className='sec-container'>
                        <p className='title'>SEC</p>
                        <div className='sec'>
                            <p>{sec < 10 ? "0" + sec : sec}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferTimer;
