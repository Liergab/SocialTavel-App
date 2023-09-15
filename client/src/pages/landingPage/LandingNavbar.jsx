
import {Button} from '@material-tailwind/react'
import {Link} from 'react-router-dom'
import  Toggle  from '../../hooks/Toggle'
import {
    ArrowRightOnRectangleIcon,
    PencilSquareIcon,
} from '@heroicons/react/24/solid'

const LandingNavbar = () => {
    const[state,toggle ] = Toggle()
  return (
    <div className="py-4 md:flex  items-center justify-between border-b-2 border-b-blue-gray-400">
        <div className='flex item-center justify-between'>
            <Link to='/'>
                <h1 className='font-semibold text-xl'> <span className=': text-orange-700'>Travel </span>| <span className='text-blue-700'>Memories</span></h1>
            </Link>
            
            <div  className="md:hidden flex items-center" onClick={toggle}>
                  {state ? 
                  <span className='text-2xl'><ion-icon name="close"></ion-icon></span> :
                  <span className='text-2xl'><ion-icon name="menu"></ion-icon> </span>}
            </div>
        
        </div>
      <div className='hidden md:block'>
        <ul className='flex'>
            <Link to='/signin'>
              <li>
                <Button className='flex items-center' variant='text'>
                    <span className='text-base'> Sign In</span> 
                    <ArrowRightOnRectangleIcon className='w-4 font-bold'/>
                </Button>
              </li>
            </Link>
           <Link to='/signup'>
             <li>
                <Button className='flex items-center' variant='text'> 
                    <span className='text-base'>Sign Up</span>
                    <PencilSquareIcon className='w-4 font-bold'/>
                </Button>
             </li>
           </Link>
           
        </ul>
      </div>
      {/* // mobile size */}

      {state && 
        <div className='mt-4'>
          <ul className='flex flex-col space-y-2'>
              <Link to='/signin'>
                <li>
                  <Button className='flex items-center' variant='text'>
                      <span className='text-sm'> Sign In</span> 
                      <ArrowRightOnRectangleIcon className='w-4 font-semibold'/>
                  </Button>
                </li>
              </Link>
             <Link to='/signup'>
               <li>
                  <Button className='flex items-center' variant='text'> 
                      <span className='text-sm'>Sign Up</span>
                      <PencilSquareIcon className='w-4 font-semibold'/>
                  </Button>
               </li>
             </Link>
             
          </ul>
        </div>
      }

    </div>
  )
}

export default LandingNavbar
