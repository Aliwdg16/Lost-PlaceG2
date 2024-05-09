import { createClient } from "contentful";
import React, { useEffect, useState } from "react";
import { SpinnerDiamond } from "spinners-react";
import { createRoot } from 'react-dom/client';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});


const Content = () => {
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

  if (isLoading) {
    <SpinnerDiamond
      className="container items-center"
      size={50}
      thickness={100}
      speed={100}
      color="#36ad47"
      secondaryColor="rgba(0, 0, 0, 0.44)"
    />;
  }

  return (
    <div className=" flex flex-wrap  mt-6 ">
      {entries.map((entry) => {
        return (
          <div
            className="block rounded-lg mx-4 text-left text-wrap  mb-5 w-48 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            key={entry.sys.id}
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img  // entry.fields.pictureOfPlace.fields.file.url
                src={entry.fields.pictureOfPlace}
                //entry.fields.pictureOfPlace.fields.title
                alt={entry.fields.titleOfPlace}
                width="50%"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {entry.fields.titleOfPlace}
              </h2>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {entry.fields.discriptionOfPlace}
              </p>
            </div>
          </div>















        );
      })}
    </div>
  );
};

export default Content;
