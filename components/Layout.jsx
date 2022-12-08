import React from 'react';
import Head from 'next/head';

import { Header } from './';


const Layout = ({ children }) => {
    return (
        <div className='relative pt-32 px-4 xl:px-16 lg:px-16 md:px-14 sm:px-4 pb-2'>
          
            <Header />
            {children}
        </div>
    )
}

export default Layout