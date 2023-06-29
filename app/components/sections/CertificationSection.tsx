import config from '@/app/config'
import React from 'react'
import CertificationCard from '../CertificationCard'

function CertificationSection() {
    return (
        <section className='w-[100vw] flex  justify-center mt-[200px] mb-[100px]'>
            <div className='max-w-[1570px] tablet:w-[100%] mobile:w-[100%]'>
                <div className='mb-[60px] text-[40px] text-white font-bold ml-[15px]'><span className='text-green'>.</span>certifications</div>

                {config.certifications.map((item, idx) => {
                    return <CertificationCard
                        rowReverse={idx % 2 === 0}
                        key={item.title}
                        src={item.src}
                        href={item.href}
                        title={item.title}
                        details={item.details}
                    />
                })}
            </div>
        </section>
    )
}

export default CertificationSection