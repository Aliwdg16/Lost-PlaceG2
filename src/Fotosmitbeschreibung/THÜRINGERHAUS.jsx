import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { SpinnerDiamond } from 'spinners-react';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const THÜRINGERHAUS = () => {

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setIsLoading(true);
    client
      .getEntry(id)
      .then((entry) => {
        setPost(entry.fields);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post', error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center mt-11'>
        <SpinnerDiamond
          size={50}
          thickness={100}
          speed={100}
          color='#36ad47'
          secondaryColor='rgba(0, 0, 0, 0.44)'
        />
        <div className='text-lg font-medium text-gray-500 ml-4'>Loading...</div>
      </div>
    );
  }



  const data = [
    {
      imgelink:
      `${post?.foto2.fields.file.url}`,
    },
    {
      imgelink:
      `${post?.foto3.fields.file.url}`,
    },
    {
      imgelink:
      `${post?.foto4.fields.file.url}`,
    },
    {
      imgelink:
      `${post?.foto5.fields.file.url}`,
    },
  ];

  const [active, setActive] = useState(
    `${post?.foto1.fields.file.url}`
  );

// post?.foto1.fields.file.url
  return (
   
    <div className="grid gap-4  ">
      <div className="flex justify-center mt-8 ">
        <img
          className="h-auto flex justify-center w-1/2 max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="flex flex-row  justify-center ">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer mx-10 rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
      <div className=" mt-8 w-full  bg-neutral-300  md:indent-3  text-gray-800">
        <p className="text-sm text-wrap text-left text-ellipsis m-10 mx-72 ">
      {post?.fields.singleblog}
        </p>
      </div>
      {/* homepage */}
      <Button variant="text" className="flex items-center gap-2" >
              Home Page
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
    </div>
  );
};
export default THÜRINGERHAUS;
