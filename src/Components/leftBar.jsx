import CardAnime from "./CardAnime";

const Leftbar = ({ data }) => {
  return (
    <div className="md:w-1/2  md:mx-2  bg-[#2e3d43] rounded-md  shadow shadow-white mx-4">
      {data.map((dat, index) => {
        return (
          <CardAnime
            key={index}
            title={dat.title}
            year={dat.year}
            image={dat.image}
          ></CardAnime>
        );
      })}
    </div>
  );
};

export default Leftbar;
