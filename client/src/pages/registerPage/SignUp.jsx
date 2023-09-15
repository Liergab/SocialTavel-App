/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import LandingNavbar from "../landingPage/LandingNavbar"
import FormStracture from "../../components/FormStracture"
import { Input,Button, Typography } from "@material-tailwind/react"
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useEffect } from "react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { RegisterInUser } from "../../hooks/Api"

const SignUp = () => {
    const queryClient = useQueryClient()

    const registerUser = useMutation({
      mutationFn: RegisterInUser,
      onSuccess: () => {
        alert('success')
        queryClient.invalidateQueries({queryKey:['userData']})
      }
    })

    const Schema = yup.object().shape({
      username:yup.string().required('Username is Required!'),
      email: yup.string().email().required('Email is Required!'),
      password: yup.string().required('Password is Required!').min(8).max(12),
      confirmPassword:yup.string().oneOf([yup.ref('password'),null], 'Password does not match').required('Incorrect Password')
    })
    const{register, handleSubmit, reset,formState, formState:{isSubmitSuccessful}, formState:{errors}} = useForm({
      resolver:yupResolver(Schema)
    })

    const onSubmit = async(data) => {

        try {const formData = new FormData();
        formData.append('file', data.file[0]);
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('password', data.password);
   
           await registerUser.mutateAsync(formData)
          
        } catch (error) {
           alert(error.response.data.message);
        }
        
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
           <Input label="Email" {...register('email')} 
                      containerProps={{ className: "min-w-[72px]" }}/>
             {errors.email && <span className=": text-red-700 text-sm">{errors.email.message}</span>}
           <Input label="Username" {...register('username')}  
                      containerProps={{ className: "min-w-[72px]" }}/>
             {errors.username && <span className=": text-red-700 text-sm">{errors.username.message}</span>}
           <Input label="Password" {...register('password')} 
                      containerProps={{ className: "min-w-[72px]" }}/>
             {errors.password && <span className=": text-red-700 text-sm">{errors.password.message}</span>}
           <Input label="Confirm Password" {...register('confirmPassword')}
                      containerProps={{ className: "min-w-[72px]" }} />
             {errors.confirmPassword && <span className=": text-red-700 text-sm">{errors.confirmPassword.message}</span>}
           <label className="text-gray-900 ">Set for Avatar: </label>
           <Input type="file" name="file" {...register('file')}  
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
