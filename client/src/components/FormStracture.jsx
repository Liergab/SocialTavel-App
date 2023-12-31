/* eslint-disable react/prop-types */


const FormStracture = ({children}) => {
  return (
    <div className=" h-[calc(100vh-80px)] flex items-center place-content-center  ">
     <div className="h-auto md:w-3/12 w-4/5  bg-blue-gray-50  rounded-md 
                            border border-gray-100 shadow-md px-6 py-4">
        {children}
     </div>
     
    </div>
  )
}

export default FormStracture
