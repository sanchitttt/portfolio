import Image from "next/image";
import Link from "next/link";

export function EmailIcon() {
    return <Image
        src='/email.svg'
        width={30}
        height={30}
        alt='Email: sanchittewari222@gmail.com'
    />
}

export function PhoneIcon() {
    return <Image
        src='/phone.svg'
        width={30}
        height={30}
        alt='Phone: 8376831238'
    />
}

export function LinkedinIcon({ size = 30 }: { size?: number }) {
    return <Link
        href='https://linkedin.com/in/sanchittewari'
        target="_blank"
    >
        <button className='hover:fill-green fill-white'>
            <svg
                width={size}
                height={size}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className='hover:fill-green fill-white'

            >
                <g strokeWidth={0} />
                <g strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M20 20h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V20H7V7h4v1.462s1.255-2.202 4.083-2.202C17.912 6.26 20 7.986 20 11.558V20ZM2.442 4.921A2.451 2.451 0 0 1 0 2.46 2.451 2.451 0 0 1 2.442 0a2.451 2.451 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461ZM0 20h5V7H0v13Z"
                    className='hover:fill-green fill-white transition'
                    fillRule="evenodd"
                />
            </svg>
        </button>
    </Link>
}

export function GithubIcon({ size = 30 }: { size?: number }) {
    return <Link
        href='https://github.com/sanchitttt'
        target="_blank"
    >
        <button>
            <svg
                width={size}
                height={size}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g strokeWidth={0} />
                <g strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
                    className='hover:fill-green fill-white transition'
                    fillRule="evenodd"
                />
            </svg>
        </button>
    </Link>
}
export function DownArrow() {
    return <Image
        src='/downArrow.svg'
        width={25}
        height={25}
        alt='Go down'
    />
}

export function ChevronTopRight() {
    return <Image
        src='/chevronTopRight.svg'
        width={20}
        height={20}
        alt='Download CV'
    />
}

export function GenericSkillIcon({
    src
}: {
    src: string
}) {
    return <Image
        className= 'mobile:mx-[25px] tablet:mx-[50px] grayscale hover:grayscale-0 transition'
        src={src}
        width={72}
        height={72}
        alt={src}
    />
}
