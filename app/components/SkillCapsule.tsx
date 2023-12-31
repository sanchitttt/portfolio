import React from 'react'

function SkillCapsule({ children, hoverEffect = true }: {
    children: React.ReactNode,
    hoverEffect?: boolean
}) {
    return (
        <div
            className={` tablet:px-[30px] mobile:px-[15px] mobile:py-[10px] tablet:py-[10px] rounded-full text-white inline-flex items-center justify-center border-[1px] border-[#fff] lowercase ${hoverEffect && 'hover:font-bold hover:text-black hover:bg-green'}`}
        >
            {children}
        </div>
    )
}

export default SkillCapsule