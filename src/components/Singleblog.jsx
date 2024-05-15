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
    <div className='container mx-auto mt-10 p-5 flex flex-col justify-center items-center'>
    
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-col justify-around items-center p-4'>
      <h1 className='text-3xl font-bold mb-2'>{post?.titleOfPlace}</h1>
        <img
          src={post?.pictureOfPlace.fields.file.url}
          alt={post?.titleOfPlace}
          className='max-h-xl max-w-xl m-4 p-4'
        /></div>
        <p className='m-4 p-4 border border-black'>{post?.singleblog}</p>
      </div>
        
      <div className='flex flex-wrap '>
        <img  src={post?.foto1.fields.file.url} alt='pictureOfPlace' className='w-80 h-80 border rounded border-black m-4'/>
        <img src={post?.foto2.fields.file.url} alt='pictureOfPlace' className='w-80 h-80 border rounded border-black m-4'/>
        <img src={post?.foto3.fields.file.url} alt='pictureOfPlace' className='w-80 h-80 border rounded border-black m-4'/>
        <img src={post?.foto4.fields.file.url} alt='pictureOfPlace' className='w-80 h-80 border rounded border-black m-4'/>
        <img src={post?.foto1.fields.file.url} alt='pictureOfPlace' className='w-80 h-80 border rounded border-black m-4'/>  
      </div>
    </div>
  );
}

export default Singleblog;