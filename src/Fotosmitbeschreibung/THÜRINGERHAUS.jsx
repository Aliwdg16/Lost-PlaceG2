import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentCard } from "../components/ContentCard";

const THÜRINGERHAUS = () => {
  const data = [
    {
      imgelink:
        "https://coola.irrgang.eu/wp-content/gallery/thueringer-haus/Thueringer-Haus-6-von-6.jpg",
    },
    {
      imgelink:
        "https://coola.irrgang.eu/wp-content/gallery/thueringer-haus/Thueringer-Haus-2-von-6.jpg",
    },
    {
      imgelink:
        "https://coola.irrgang.eu/wp-content/gallery/thueringer-haus/Thueringer-Haus-3-von-6.jpg",
    },
    {
      imgelink:
        "https://coola.irrgang.eu/wp-content/gallery/thueringer-haus/Thueringer-Haus-4-von-6.jpg",
    },
    {
      imgelink:
        "https://coola.irrgang.eu/wp-content/gallery/thueringer-haus/Thueringer-Haus-1-von-6.jpg",
    },
  ];

  const [active, setActive] = useState(
    "https://coola.irrgang.eu/wp-content/gallery/thueringer-haus/Thueringer-Haus-5-von-6.jpg"
  );


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
        Im Jahre 1813 wurde die Gaststätte “Schilling” (heute “Thüringer Haus”) erbaut. 
          Schilling war der Name des Erbauers. Das Haus diente zeitweise als
          Chausseegeldhaus. Denn nachdem die Chausseen gebaut worden waren,
          wurden auf durchfahrende Geschirre und getriebenes Vieh Wegegeld
          erhoben. Leider wird sie seit Jahren nicht mehr genutzt und ist dem
          Verfall preisgegeben. Quelle: www.truegleben.de
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
