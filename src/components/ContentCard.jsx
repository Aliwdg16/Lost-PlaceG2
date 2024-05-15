import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { SpinnerDiamond } from 'spinners-react';
import { Link } from 'react-router-dom';
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
        console.log(response.items);
        setEntries(response.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div className='flex mt-11 justify-center items-center'>
      <SpinnerDiamond
        size={50}
        thickness={100}
        speed={100}
        color='#36ad47'
        secondaryColor='rgba(0, 0, 0, 0.44)'
      />
    </div>
  ) : (
    <div className=' flex justify-center rounded-xl mx-10 flex-wrap  mt-6 '>
      {entries.map((entry) => {
        return (
          <Card
            key={entry.sys.id}
            className='mt-6 mr-5 w-80 h-auto min-h-fit hover:shadow-2xl  hover:scale-105  hover:list-outside transition-all transform duration-500'
          >
            <CardHeader
              shadow={false}
              floated={false}
              color='blue-gray'
              className='relative h-56'
            >
              <img
                src={entry.fields.pictureOfPlace.fields.file.url}
                alt={entry.fields.pictureOfPlace.fields.title}
                className='h-full w-full border-transparent rounded-md border-10 object-cover  hover:shadow-2xl  '
              />
            </CardHeader>
            <CardBody>
              <Typography variant='h4' color='blue-gray' className='mb-2'>
                {entry.fields.titleOfPlace}
              </Typography>
              <div className='bg-gray-100 p-4 rounded-lg'>
                <Typography
                  color='gray'
                  className='text-sm w-70 max-h-40 max-w-56  text-ellipsis  overflow-auto  md:indent-3  text-gray-800'
                >
                  {entry.fields.discriptionOfPlace}
                </Typography>
              </div>

              <Link
                to={`/places/${entry.sys.id}`}
                className='flex items-center gap-2'
              >
                <button className='mt-5 ...'>Read More</button>
              </Link>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}