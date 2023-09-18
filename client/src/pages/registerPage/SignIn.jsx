/* eslint-disable react/no-unescaped-entities */
import FormStracture from "../../components/FormStracture";
import LandingNavbar from "../landingPage/LandingNavbar";
import { Button, Input,Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';yup
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { LoginInUser } from "../../hooks/Api";
import toast from "react-hot-toast";


const SignIn = () => { 

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const loginUser = useMutation({
    mutationFn:LoginInUser,
    onSuccess: () => {
      navigate('/home')
      toast.success(`Successfully login`)
      queryClient.invalidateQueries({ queryKey: ['userData'] })
    }
  })

  const Schema = yup.object().shape({
    email:yup.string().email().required('Email is Required!'),
    password:yup.string().required('Password is required!').min(8).max(12)
  })

  const {register, handleSubmit,reset,formState, formState:{errors}, formState:{isSubmitSuccessful}} = useForm({
    resolver:yupResolver(Schema)
  })

  const onSubmit = async(data) => {
    try {
      await loginUser.mutateAsync(data);
      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error)
    }
   

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
           <Input label="Email" type="text" name="email" {...register('email') } 
                      containerProps={{ className: "min-w-[72px]" }}/>
           {errors.email && <span className=": text-red-700 text-sm">{errors.email.message}</span>}
           <Input label="Password" type="password" {...register('password')}  
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
