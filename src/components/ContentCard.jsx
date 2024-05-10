import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { SpinnerDiamond } from "spinners-react";
const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });
   
  export function ContentCard() {

    const [entries, setEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(true);
      client
        .getEntries()
        .then((response) => {
          console.log(response);
          setEntries(response.items);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }, []);




    
    return (
        isLoading?
        (<div className="flex mt-11 justify-center items-center">
        
        <SpinnerDiamond
           size={50}
           thickness={100}
           speed={100}
           color="#36ad47"
           secondaryColor="rgba(0, 0, 0, 0.44)"
         />
         </div>
         ) : (
            <div className=" flex mx-7 flex-wrap  mt-6 ">
         {entries.map((entry) => {
           return ( 
            <Card className="mt-6 mr-5 w-96">
        <CardHeader
          shadow={false}
          floated={false}
          color="blue-gray" className="relative h-56"
        >
          <img
          src={entry.fields.pictureOfPlace.fields.file.url}
          alt={entry.fields.pictureOfPlace.fields.title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
        
          <Typography variant="h4" color="blue-gray" className="mb-2">
          {entry.fields.titleOfPlace}
          </Typography>
          <div class="bg-gray-100 p-4 rounded-lg">
          
          <Typography color="gray" class="text-sm text-gray-800">
          {entry.fields.discriptionOfPlace}
          
          </Typography>
          </div>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
    
        </Card>
        
         )

})}
</div>
 ))}