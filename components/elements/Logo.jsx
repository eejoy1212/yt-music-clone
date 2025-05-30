"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import IconButton from './IconButton'

const Logo = () => {
  const {push}=useRouter()
  const onClickLogo=()=>{
    push("/")
  }
  const onClickMenu=()=>{

  }
  return (
    <section className='flex flex-row items-center gap-3'>
      <IconButton icon={<RxHamburgerMenu/>}/>
      <div className='cursor-pointer' onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} width={100} height={30} />
      </div>
      </section>
  )
}

export default Logo