import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
import AR from '../assets/AR.png'
import EN from '../assets/EN.png'
function LangChanger() {
    const [lang, setlang] = React.useState("EN")
  return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild >
            <button className='border border-stone-500 text-stone-50 rounded-full px-3 py-2 flex gap-2 items-center transition duration-100 focus-within:outline-none hover:bg-main hover:text-stone-50'>
                <div className='w-5 h-5'>
                    <img src={lang==='AR'?AR.src:EN.src} alt={lang} width={50} height={50} className='rounded-full object-cover w-full h-full'/>
                </div>
                    {
                        lang
                    }
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Change Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={lang} onValueChange={setlang}>
            <DropdownMenuRadioItem value="EN">EN</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="AR">AR</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
        </DropdownMenu>  )
}

export default LangChanger