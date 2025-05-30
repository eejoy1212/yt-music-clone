import React from 'react'

import { ReactNode } from 'react';
import Logo from './elements/Logo'
import Navigator from './elements/Navigator';
const Sidebar = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-row h-full'>
            <nav className='w-[240px] border-r-[1px] border-neutral-500'>
                <div className='p-[24px]'>
                    <Logo/>
                </div>
                <div>
                    <Navigator/>
                </div>
            </nav>
            
            <div className='flex-1'> {children}</div>
        </div>
    )
}

export default Sidebar