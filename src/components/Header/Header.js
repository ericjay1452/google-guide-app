import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { InputBase, Typography, ToolBar, Box} from '@mui/material'
import { BsSearch} from "react-icons/bs"

const Header = () => {
  return (
    <div className='relative block w-full p-3 h-15'>

        <div className='flex justify-between items-center relative w-inherit mr-4'>
        <Typography variant = "h7" className='
        relative block text-white font-semibold'>Google Guide App</Typography>

        <Box className = "flex relative">
           <div className='block relative text-white text-sm'>
            <p>Tired of going the same Place ?</p>
           </div>

           {/* <Autocomplete> */}
            <div className='relative bg-white flex px-6 ml-2'>
               <div>
                  <BsSearch className='absolute right-2 top-2'/>
               </div>
               <InputBase placeholder='Enter your Search ...' color='black'/>
            </div>
           {/* </Autocomplete> */}

        </Box>

        </div>
    </div>
  )
}

export default Header