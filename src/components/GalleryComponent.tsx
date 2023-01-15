import { useState } from "react";

const pictures = [
  "https://samsungar.vtexassets.com/arquivos/ids/180361-800-auto?width=800&height=auto&aspect=true",
  "https://samsungar.vtexassets.com/arquivos/ids/176326-800-auto?width=800&height=auto&aspect=true",
  "https://samsungar.vtexassets.com/arquivos/ids/176325-800-auto?width=800&height=auto&aspect=true",
  "https://samsungar.vtexassets.com/arquivos/ids/176327-800-auto?width=800&height=auto&aspect=true",
  "https://samsungar.vtexassets.com/arquivos/ids/176330-800-auto?width=800&height=auto&aspect=true",
  "https://samsungar.vtexassets.com/arquivos/ids/176328-800-auto?width=800&height=auto&aspect=true",
  "https://samsungar.vtexassets.com/arquivos/ids/176329-1200-auto?width=1200&height=auto&aspect=true",
];
const GalleryComponent = () => {
  const [selected, setSelected] = useState(pictures[0]);
  return (
    <div className="gallery__component">
      <div className="mb-5 image__selected">
        <img src={selected} alt="" />
      </div>
      <div className="flex w-full gap-6 overflow-x-auto snap-proximity snap-x pictures">
        {pictures.map((picture, index) => (
          <img
            className={`h-20 p-1  rounded cursor-pointer snap-start w-fit ${
              selected == picture ? "border-2 border-[#2189ff]" : "border"
            }`}
            key={index}
            src={picture}
            alt={`Picture ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
