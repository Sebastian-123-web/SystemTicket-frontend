
import { Link } from 'react-router-dom'


import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'

export const Back = () => {
  return (
      <Link to={-1} className='p-1 flex flex-row rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'>
          <Typography className='flex items-center text-[#9AAFC7]'>
              <ChevronLeftIcon className='w-5 h-5 mr-1' />
              Atras
          </Typography>
      </Link>
  )
}
