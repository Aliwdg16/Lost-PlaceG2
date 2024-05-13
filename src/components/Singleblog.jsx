import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singleblog = () => {
    const param= useParams()
    const id=param.id;
    const [blog, setBlog] = useState([]);
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
    
  return (
    <div>Singleblog</div>
  )
}

export default Singleblog