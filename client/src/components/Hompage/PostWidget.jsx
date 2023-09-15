import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Avatar
  } from "@material-tailwind/react";
  import Tokyo from '../../assets/images/Tokyo.jpg'
  import  Toggle  from "../../hooks/Toggle";
  import { GetUser } from "../../hooks/Api";

const PostWidget = () => {
  const {data} = GetUser()

  const [state, toggle] = Toggle()
  return (
    <div>
         <Card className="w-96 bg-blue-gray-50 ">
                
                <CardHeader floated={false} className="h-60 bg-blue-gray-50 space-y-2">
                 <div className="flex  items-center space-x-4">
                    <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="cursor-pointer p-0.5"
                    src={`http://localhost:5001/image/${data?.name}`}/>
                    <div className="flex items-center: gap-40">
                    <span className="text-sm font-semibold">{data?.username}</span>
                     <h1 className="flex items-center" onClick={toggle}>
                        {state ? <ion-icon name="person-add-outline"></ion-icon> : <ion-icon name="remove-circle-outline"></ion-icon>}
                     </h1>
                    </div>
                </div>
                <div>
                     <span>Random message About Post</span>
                </div>
                  <img src={Tokyo} alt="profile-picture" className="rounded-md" />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Tokyo
                  </Typography>
                  <Typography color="blue-gray" className="font-medium" textGradient>
                    Posted: <span>September 3</span>
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <i className="fab fa-facebook" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <i className="fab fa-twitter" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <i className="fab fa-instagram" />
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
    </div>
  )
}

export default PostWidget
