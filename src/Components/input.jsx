const Input = ({ data }) => {
  return (
    <div className=" flex flex-col  ">
      <input
        className=" text-white w-1/2 flex m-auto rounded-md shadow border border-white p-2 bg-[#165073] "
        type="text"
        placeholder="Anime Apa Yang Ingin Anda Cari?"
      />

      <p className="text-center my-1 text-white">Found {data.length} result</p>
    </div>
  );
};

export default Input;
