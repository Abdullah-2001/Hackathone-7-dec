import React, { useState } from 'react';

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const accordionData = [
        {
            question: 'Manage My Account',
            subMenus: ['My Profile', 'Address Book', 'My Payment Options'],
        },
        {
            question: 'My Orders',
            subMenus: ['My Profile', 'Address Book', 'My Payment Options'],
        },
        {
            question: 'My WishList',
            subMenus: ['My Profile', 'Address Book', 'My Payment Options'],
        },
    ];

    return (
        <div className="flex flex-col space-y-2">
            {accordionData.map((item, index) => (
                <div key={index}>
                    <p
                        onClick={() => toggleAccordion(index)}
                        className={`cursor-pointer text-left py-2 px-4 font-bold text-black'
                            }`}
                    >
                        {item.question}
                    </p>
                    {activeIndex === index && item.subMenus.map((menu, ind) => {
                        return (
                            <div
                                key={ind}
                                className={`hover:text-[#DB4444] hover:cursor-pointer pl-6 overflow-hidden text-sm text-slate-500 transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <div className="py-2">{menu}</div>
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
