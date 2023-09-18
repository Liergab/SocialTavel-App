/* eslint-disable react/no-unknown-property */
import Navbar from "../../components/Hompage/Navbar";
import  {Input, Avatar,Button, Spinner} from '@material-tailwind/react';
import {PencilIcon} from '@heroicons/react/24/solid';
import PostWidget from "../../components/Hompage/PostWidget";
import image from '../../assets/images/imgs.png'
import { GetUser } from "../../hooks/Api";
import {Link} from 'react-router-dom'






const HomePage = () => {

  const {data, isError, isLoading} = GetUser()
  // if(isLoading) return <Spinner className="h-16 w-16 text-gray-900/50" />
  if(isError) return <h1>{isError.message}</h1>
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col gap-10">
      <Navbar/>
    {isLoading ? <Spinner color="blue" className="h-16 w-16 text-gray-900/50" /> :
      <div className="flex item-center  place-content-center">
        <div className="flex-1 ">
          <span>Username: {data?.username}</span> <br />
          <span>Email: {data?.email}</span>
        </div>
        <div className="flex-1 space-y-10  ">
          <div className="flex flex-col  p-2 bg-blue-gray-50  rounded-md">
            <div className="flex  space-x-2 border-2 border-b-black p-2">
              <Link to='/profile'>
                <Avatar  src={`http://localhost:5001/image/${data?.name}`}/>
              </Link>
              <Input size="lg" label="Post your  Travel  " icon={<PencilIcon/>} />
            </div>
            <div className="flex items-center justify-between">
              <label for="fileInput" className="flex items-start">
                <img src={image} alt="" className="w-14" /> 
              </label>
              <input type="file" id="fileInput"  className="hidden"/>
              <Button variant="text" size="sm">Post</Button>
            </div>
          </div>
          <div className="flex flex-col items-center place-content-center space-y-8">
           <PostWidget/>
           <PostWidget/>
           <PostWidget/>
          </div>
        </div>
        <div className="h-[calc(100vh-80px)] flex-1 flex items-center place-content-center">right widget</div>
      </div>}
    </div>
  )
}

export default HomePage
