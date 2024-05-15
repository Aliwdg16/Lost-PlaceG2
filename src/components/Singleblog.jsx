import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    <div>Singleblog</div>
  )
}

export default Singleblog;