/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import LandingNavbar from "../landingPage/LandingNavbar"
import FormStracture from "../../components/FormStracture"
import { Input,Button, Typography } from "@material-tailwind/react"
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useEffect } from "react"

const SignUp = () => {

    const{register, handleSubmit, reset,formState, formState:{isSubmitSuccessful}} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        
    }
    useEffect(() => {
        if( formState.isSubmitSuccessful){
            reset()
        }
    },[formState,isSubmitSuccessful,reset])
  return (
    <div>
        <LandingNavbar/>
      <div>
      <FormStracture>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 py-10">
           <span className="text-xl font-semibold mt-[-20px]">Sign Up</span>
           <Input label="Email" {...register('email')}  maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}/>

           <Input label="Username" {...register('username')}  maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}/>

           <Input label="Password" {...register('password')}  maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}/>

           <Input label="Confirm Password" {...register('confirmPassword')}  maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }} />

           <label className="text-gray-900 ">Set for Avatar: </label>
           <Input type="file" {...register('file')}  maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}/>
                      
           <Button type="submit">Sign Up</Button>
           <Typography color="gray" className="mt-4 text-center font-normal">
          Have already account?{" "}
          <Link to='/signin'>
          <span className="font-semibold text-gray-900">
            Sign In
          </span>
          </Link>
          
        </Typography>
         </form>
        </FormStracture>
      </div>
    </div>
  )
}

export default SignUp
