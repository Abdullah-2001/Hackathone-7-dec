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
                <div className='flex items-center gap-7'>
                    <div className='flex justify-center items-center flex-col w-[90px] h-[90px] rounded-full bg-white'>
                        <p className='text-[24px] font-bold m-0 p-0'>{days < 10 ? "0" + days : days}</p>
                        <p>DAYS</p>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[90px] h-[90px] rounded-full bg-white'>
                        <p className='text-[24px] font-bold m-0 p-0'>{hours < 10 ? "0" + hours : hours}</p>
                        <p>HOURS</p>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[90px] h-[90px] rounded-full bg-white'>
                        <p className='text-[24px] font-bold m-0 p-0'>{min < 10 ? "0" + min : min}</p>
                        <p>MINS</p>
                    </div>
                    <div className='flex justify-center items-center flex-col w-[90px] h-[90px] rounded-full bg-white'>
                        <p className='text-[24px] font-bold m-0 p-0'>{sec < 10 ? "0" + sec : sec}</p>
                        <p>SEC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferTimer2;
