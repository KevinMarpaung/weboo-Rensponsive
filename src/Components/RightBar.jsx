import React from "react";

const animesData = [
  {
    mal_id: 21,
    title: "One Piece",
    year: 1999,
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    score: 8.71,
    synopsis:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.",
  },
];
export default function RightBar() {
  return (
    <div
      className=" md:w-1/2 mt-5 md:mt-0 mx-4 md:mx-2 
     bg-[#2e3d43] rounded-md   text-white shadow shadow-white "
    >
      {animesData.map((anime) => {
        return (
          <>
            <div className="">
              <div className="md:flex">
                <img
                  className="w-40  rounded-md m-auto md:m-0 "
                  src={anime.image}
                  alt=""
                />
                <div className="mx-2 my-2">
                  <p className="font-bold">{anime.title}</p>
                  <div className="flex gap-2">
                    <p>{anime.year} •</p>
                    <p>{anime.score}</p>
                  </div>
                </div>
              </div>
              <p className="italic  md:px-10 px-2 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, similique nostrum odio fugit assumenda quae vel
                inventore facilis perferendis nisi, minima ipsam
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}
