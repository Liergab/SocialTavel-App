import {Link} from 'react-router-dom'
import Profile from './Profile'

 


const Navbar = () => {
  return (
    <div>
        <div className="py-4 md:flex  items-center justify-between border-b-2 border-b-blue-gray-400">
        <div className='flex item-center justify-between'>
            <Link to='/home'>
                <h1 className='font-semibold text-xl'> <span className=': text-orange-700'>Travel </span>| <span className='text-blue-700'>Memories</span></h1>
            </Link>
        </div>
                 <Profile/>   

    </div>
    </div>
  )
}

export default Navbar
