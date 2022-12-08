import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Button from './Button';

const Header = () => {




    return (

        <div className='w-full absolute left-0 right-0 top-0 mx-auto bg-white shadow-md px-4 xl:px-16 lg:px-16 md:px-14 sm:px-4 mb-8 py-3 z-50'>
            <div className=' flex items-center justify-between'>
                <div className='flex  items-center justify-around md:float-right'>
                    <Image
                        alt="logo"
                        width={80}
                        height={80}
                        className="block"
                        src="/logo.svg"
                    />

                    <Link href="/">
                        <div className='font-normal lg:text-xl md:text-base text-sm text-black xl:mr-24 lg:mr-12 mr-4'>
                            خانه
                        </div>
                    </Link>
                    <Link href="/">
                        <div className='font-normal lg:text-xl md:text-base text-sm text-black xl:mr-24 lg:mr-12 mr-4'>
                            محصولات
                        </div>
                    </Link>
                    <Link href="/">
                        <div className='font-normal lg:text-xl md:text-base text-sm text-black xl:mr-24 lg:mr-12 mr-4'>
                            خدمات
                        </div>
                    </Link>
                    <Link href="/blog">

                        <span className='relative font-normal lg:text-xl md:text-base text-sm text-greenwb xl:mr-24 lg:mr-12 mr-4'>
                            وبلاگ

                            <span className='h-1 absolute xl:bottom-[-2.2rem] bottom-[-2.5rem] bg-greenwb w-24  block left-0 -right-7'></span>
                        </span>


                    </Link>
                </div>
                <div className=' float-left'>
                    <div className='flex items-center justify-items-center'>
                        <Link href="/">
                            <div>

                                <Button variant="primary"  >ورود</Button>
                            </div>

                            

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header