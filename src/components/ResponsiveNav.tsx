import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { AlignCenter } from 'lucide-react'
import LangChanger from './LangChanger'

type Props = {
    page: string
}

function ResponsiveNav({page}: Props) {
  return (
    <Dialog>
    <DialogTrigger><AlignCenter/></DialogTrigger>
    <DialogContent className='right-0 top-0 w-64 h-screen bg-mainLightBackground border-mainBackground flex flex-col justify-around'>
        <ul className='flex flex-col gap-5'>
            <a href={'/'} className={`${page==='home'?'bg-mainLightBackground/75':'text-stone-400 '}  font-bold px-3 py-1 rounded-md cursor-pointer transition duration-100 hover:text-main`}>Home</a>
            <a href={'/p2p'} className={`${page==='P2P'?'bg-mainLightBackground/75':'text-stone-400 '}  font-bold px-3 py-1 rounded-md cursor-pointer transition duration-100 hover:text-main`}>P2P</a>
            <a href={'/wallet'} className={`${page==='wallet'?'bg-mainLightBackground/75':'text-stone-400 '}  font-bold px-3 py-1 rounded-md cursor-pointer transition duration-100 hover:text-main`}>Wallet</a>
            <a href={'/academy'} className={`${page==='academy'?'bg-mainLightBackground/75':'text-stone-400 '}  font-bold px-3 py-1 rounded-md cursor-pointer transition duration-100 hover:text-main`}>Academy</a>
            <a href={'/b2b'} className={`${page==='B2B'?'bg-mainLightBackground/75':'text-stone-400 '}  font-bold px-3 py-1 rounded-md cursor-pointer transition duration-100 hover:text-main`}>B2B</a>
        </ul>
        <div className="flex flex-col gap-5">
            <LangChanger/>
            <button className='bg-white text-mainBackground rounded-full px-5 py-2 transition duration-100 hover:bg-main hover:text-stone-50'>Get Started</button>
        </div>
    </DialogContent>
    </Dialog>
  )
}

export default ResponsiveNav