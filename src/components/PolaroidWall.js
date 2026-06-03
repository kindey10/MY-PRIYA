
import React from "react";
import { motion } from "framer-motion";
import "./PolaroidWall.css";


const getRandomRotation = () => Math.random() * 100 - 18;
const getRandomMargin = () => Math.random() * 100 - 60;


const PolaroidWall = () => {
  const photos = [
    { id: 1, img: "/images/photo1.jpg", date: "MY FAVROURITE GIRL", message: "I love that smile, steady and true, A light that warms, a friend like you. Through every storm, through every mile, The world feels right—I love that smile." },
    { id: 2, img: "/images/photo2.jpg", date: "I MISS YOU", message: "I miss you more than words can say, Wish you were here, not far away. Till we meet and laugh once more, You're the friend I miss and adore." },
    { id: 3, img: "/images/photo3.jpg", date: "I LOVE YOU", message: "I love you, beautiful, so pure, so true, Through every storm, I stand with you. No need for words, you always know, You’re the brightest light I’ll ever know." },
    { id: 4, img: "/images/photo4.jpg", date: "HAPPY BIRTHDAY", message: "Happy birthday, Priyaaaaa, Through every moment, you help me mend. Your laughter, your light, your kindness too, Today’s for you, I celebrate you!" },
    { id: 5, img: "/images/photo5.jpg", date: "BE HAPPY", message: "Be happy, priyuuuuuu, keep shining bright, Your joy turns darkness into light. Through every storm, through every mile, You lift the world—just with your smile." },
    { id: 6, img: "/images/photo6.jpg", date: "CHUTKU", message: "A moment frozen, pure and bright, Her laughter, her joy, her shining light. A childhood spark, a memory true, A glimpse of all the love she grew." },
    { id: 7, img: "/images/photo7.jpg", date: "I LOVE THAT SMILE", message: "That smile—so carefree, so bright, A spark of laughter, pure delight. A glimpse of joy in days gone by, A golden light that won’t run dry." },
    { id: 8, img: "/images/photo8.jpg", date: "FOREVER GLOWING", message: "Forever glowing, soft and true, A light that shines in all you do. Through every smile, through every day, Your warmth and grace will never fade." },
    { id: 9, img: "/images/photo9.jpg", date: "RADIATING HAPPINESS", message: "A glow so pure, a joy so true, A light that brightens all you do. With every laugh, with every cheer, Happiness shines when you are near." },
    { id: 10, img: "/images/photo10.jpg", date: "ONE OF A KIND", message: "One of a kind, a heart so rare, A light so warm, beyond compare. Through every smile, through every phase, You bring a glow that never fades." },
    { id: 11, img: "/images/photo11.jpg", date: "PATAKKA", message: "Patakka—bright, bold, a spark so free, Lighting up the world with energy. A fire within, a spirit so wild, A heart that shines, forever styled." },
    { id: 12, img: "/images/photo12.jpg", date: "JUsT UFFF", message: "Just Ufff—no words can say, A vibe so strong, it lights the way. Bold and bright, a spark so rare, A heart that shines beyond compare." },
    { id: 13, img: "/images/photo13.jpg", date: "MY DESI GIRL", message: "Meri desi girl, ekdum bindass, Nazarein teek na paaye, sabke dil ke paas. Adaayein mast, swag pura high, Jidhar bhi chale, wahan mehfil sajaye!" },
    { id: 14, img: "/images/photo14.jpg", date: "HAPPINESS ALL AROUND", message: "Happiness all around, full of cheer, Smiles and laughter, far and near. Dhol beats loud, hearts so light, Life’s a celebration, shining bright!" },
    { id: 15, img: "/images/photo15.jpg", date: "QUEEN OF MY DREAMS", message: "Queen of my dreams, bold and bright, A fearless soul, a shining light. Her style, her grace, her endless spark, She rules the world, leaves her mark." },
    { id: 16, img: "/images/photo16.jpg", date: "I LOVE YOU", message: "21 today, the world is yours, A time to dream, to open doors. Laugh a little, dance a lot, Make this year your best, I love you lots!" },

  ];


  return (
    <div className="background">
      <motion.div
        className="polaroid-wall"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="polaroid"
            style={{
              transform: `rotate(${getRandomRotation()}deg)`,
              margin: `${getRandomMargin()}px ${getRandomMargin()}px`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="polaroid-inner">
              {/* Front Side - Image & Date */}
              <div className="polaroid-front">
                <img src={photo.img} alt="Polaroid" />
                <p>{photo.date}</p>
              </div>


              {/* Back Side - Message */}
              <div className="polaroid-back">
                <p>{photo.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default PolaroidWall;