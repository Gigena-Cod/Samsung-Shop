import { useParams } from "react-router-dom";
import GalleryComponent from "../components/GalleryComponent";

const DetailProduct = () => {
  let params = useParams();
  console.log(params);
  return (
    <div className="w-full detail__product">
      <div className="mx-auto max-w-screen-2xl product__container">
        {/* BANNER  */}
        <div className="flex items-center justify-between h-20 px-4 bg-black ">
          <span className="text-xl font-bold text-white price">
            50" UHD 4K Smart TV AU7000
          </span>

          <div className="flex items-center gap-12 font-bold text-white price__button">
            <span className="text-xl">$ 139.999</span>
            <div className="rounded-3xl text-sm px-5 bg-[#2189ff] hover:bg-[#006bea] flex items-center justify-center h-10 text-white  transition-all duration-300 ease-in-out cursor-pointer select-none button__buy">
              COMPRAR
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 product__main">
          <GalleryComponent />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
