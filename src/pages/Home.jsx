import Header from "../Components/Header";
import Input from "../Components/input";
import Leaftbar from "../Components/leftBar";
import RightBar from "../Components/RightBar";

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
  {
    mal_id: 20,
    title: "Naruto",
    year: 2002,
    image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    score: 8.71,
    synopsis:
      "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
  },
  {
    mal_id: 269,
    title: "Bleach",
    year: 2004,
    image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    score: 8.71,
    synopsis:
      "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
  },
  {
    mal_id: 31964,
    title: "Boku no Hero Academia",
    year: 2016,
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    score: 8.71,
    synopsis:
      'The appearance of "quirks", newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
  },
];
const Home = () => {
  return (
    <>
      <div className="bg-[#1c272c] md:h-screen">
        <div className="md:mx-60  ">
          <div className="p-2">
            <Header></Header>
          </div>
          <Input data={animesData}></Input>
          <div className="md:flex gap-4">
            <Leaftbar data={animesData}></Leaftbar>
            <RightBar></RightBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
