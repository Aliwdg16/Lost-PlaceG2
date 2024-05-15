import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { SpinnerDiamond } from 'spinners-react';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

function Singleblog() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(`${post?.foto1.fields.file.url}`);
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

  return (
    <div className='container mx-auto mt-10 p-5'>
      <h1 className='text-3xl font-bold mb-2'>{post?.titleOfPlace}</h1>
      <img
         src={post?.foto1.fields.file.url}
        alt={post?.titleOfPlace}
        className='w-full h-auto'
      />
      <p className='mt-4'>{post?.singleblog}</p>
      <Link
                to={`/`}
                className='flex justify-center my-5  items-center gap-2'
              >
                <button className='mt-5'>HOME</button>
              </Link>
    </div>
  );
}

export default Singleblog;