import Image from "next/image"
import { CertificationCardType } from "../types"
import Link from "next/link"

function CertificationCard({
    src,
    title,
    details,
    href,
    rowReverse
}: CertificationCardType) {
    console.log(rowReverse)
    return (
        <>
            {/**Desktop */}
            <div className={`mobile:hidden desktop:flex w-[100vw] max-w-[1570px] flex justify-between gap-[60px] mx-[30px] my-[50px] ${rowReverse && 'flex-row-reverse'}`}>
                <div className='tablet:block desktop:hidden'>
                    <Image
                        className='rounded-[5px]'
                        src={src}
                        alt={title}
                        width={500}
                        height={400}
                    />
                </div>
                <div className='tablet:hidden desktop:block'>
                    <Image
                        className='rounded-[5px]'
                        src={src}
                        alt={title}
                        width={700}
                        height={400}
                    />
                </div>
                <div className='flex flex-col text-white min-w-[500px] tablet:w-[500px] desktop:w-[700px] gap-[10px]'>
                    <div className='text-[32px] font-bold'>{title}</div>
                    <div>{details}</div>
                    <Link href={href} target="_blank">
                        <i className="text-green text-[12px]">View</i>
                    </Link>
                </div>
            </div>
            {/**Mobile */}
            <div className='relative mobile:flex desktop:hidden text-white  w-[100%] items-center  max-w-[1570px] flex flex-col my-[100px]'>
                <Image
                    className='rounded-[5px]'
                    src={src}
                    alt={title}
                    width={270}
                    height={250}
                />
                <div className='flex flex-col mt-[15px] max-w-[270px] justify-center items-center gap-[10px]'>
                    <div className=' text-[16px] font-bold text-center'>{title}</div>
                    <div className='text-[14px] mt-[15px] text-center'>{details}</div>
                    <Link href={href} target="_blank">
                        <i className="text-green text-[12px] w-[100%]">View</i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CertificationCard