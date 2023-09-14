/* eslint-disable react/no-unescaped-entities */
import FormStracture from "../../components/FormStracture";
import LandingNavbar from "../landingPage/LandingNavbar";
import { Button, Input,Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';yup
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect } from "react";


const SignIn = () => {

  const Schema = yup.object().shape({
    email:yup.string().email().required('Email is Required!'),
    password:yup.string().required('Password is required!').min(8).max(12)
  })

  const {register, handleSubmit,reset,formState, formState:{errors}, formState:{isSubmitSuccessful}} = useForm({
    resolver:yupResolver(Schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }
   useEffect(() => {
    if(formState.isSubmitSuccessful){
      reset()
    }
   },[formState, isSubmitSuccessful,reset])

  return (
    <div className="h-screen">
      <LandingNavbar/>
      <div >
        <FormStracture>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 py-14">
           <span className="text-xl font-semibold mt-[-20px]">Sign in</span>
           <Input label="Email" type="text" name="email" {...register('email') }  maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}/>
           {errors.email && <span className=": text-red-700 text-sm">{errors.email.message}</span>}
           <Input label="Password" type="password" {...register('password')}  maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}/>
           {errors.password && <span className=": text-red-700 text-sm">{errors.password.message}</span>}
           <Button type="submit" >Sign in</Button>
           <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have account?{" "}
          <Link to='/signup'>
          <span className="font-semibold text-gray-900">
            Sign Up
          </span>
          </Link>
          
        </Typography>
         </form>
        </FormStracture>
      </div> 
    </div>
  )
}

export default SignIn
