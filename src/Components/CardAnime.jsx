const CardAnime = ({ image, title, year }) => {
  return (
    <div
      className="flex  gap-5 shadow shadow-white  my-2
     md:p-2 text-white mx-2 "
    >
      <img className="md:w-10 w-12" src={image} alt="" />
      <div className=" ">
        <h1 className=" text-start font-bold">{title}</h1>
        <p className="">{year}</p>
      </div>
    </div>
  );
};

export default CardAnime;
