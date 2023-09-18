/* eslint-disable react/no-unknown-property */
import Navbar from "../../components/Hompage/Navbar"
import {Avatar, Input, Button,Typography} from '@material-tailwind/react'
import { GetUser } from "../../hooks/Api"
import {PencilIcon} from '@heroicons/react/24/solid'
import image from '../../assets/images/imgs.png'
import ProfilePost from "../../components/Hompage/ProfilePost"


const ProfilePage = () => {
  const {data, isLoading} = GetUser()

  if(isLoading) return <h1>Loading...</h1>
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col gap-10">
      <Navbar/>
      <div className="flex item-center  place-content-center gap-20">
        <div className="flex-1 ">
         <div className="flex flex-col bg-blue-gray-50 rounded-md">
          <img
              className="h-96 w-full rounded-lg object-cover object-center p-4 "
              src={`http://localhost:5001/image/${data?.name}`}
              alt="nature image"
            />
            <h1 className="text-center  text-gray-600 font-semibold">{data?.username}</h1>
            <Typography as="caption" variant="small" className="mt-2 text-center font-normal text-gray-600 pt-4">
            Profile Picture
            </Typography>
            <Typography as="caption" variant="small" className="mt-2 text-center font-normal  text-gray-600 p-4">
            Friend List
            </Typography>
         </div>
        </div>
        <div className="flex-1 space-y-10   p-4">
          <div className="flex flex-col  p-2 bg-blue-gray-50  rounded-md">
            <div className="flex  space-x-2 border-2 border-b-black p-2">
              <Avatar  src={`http://localhost:5001/image/${data?.name}`}/>
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
           <ProfilePost/>
           <ProfilePost/>
           <ProfilePost/>
          </div>
        </div>
        <div className="h-[calc(100vh-80px)] flex-1 flex items-center place-content-center">right widget</div>
      </div>
    </div>
  )
}

export default ProfilePage
