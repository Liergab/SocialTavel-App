import LandingNavbar from "./LandingNavbar";
import lp from '../../assets/images/lp.png'



const LandingPage = () => {
  return (
    <div>
     <LandingNavbar/>
        <div className="h-[calc(100vh-80px)] md:flex items-center bg gap-4 space-y-20">
            <div className=" flex-1 mt-20 md:mt-0">
               <img src={lp} alt=""  className="w-5/5 md:w-4/5"/>
            </div>
            <div className="  flex-1 flex flex-col items-center place-content-center  md:mt-0 ">
              <div >
                <h1 className="text-2xl text-center md:text-4xl font-bold">Here, <span className=": text-orange-700">There</span> ,
                 and <span className="text-blue-700">EveryWhere</span></h1>
              </div>
              <div>
                <h1 className="text-sm md:text-base font-semibold text-center text-gray-600">Share your travel journey to eveyone using <span className=" underline">Travel Memories Social App</span></h1>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default LandingPage
