import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import Image from "next/image";
import Link from "next/link";

import image1 from "/public/image/Celso Pilati -0007.jpg";
import image2 from "/public/image/Celso Pilati -0016.jpg";
import image3 from "/public/image/Celso Pilati -0019.jpg";
import image4 from "/public/image/Celso Pilati -0041.jpg";

const images = [image1, image2, image3, image4];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Slider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      paginate(1); // Mude para a próxima imagem a cada 5 segundos
    }, 5000);

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="relative h-screen">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Garante que a imagem cubra completamente o contêiner
          }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <ul className="mt-8 flex flex-wrap justify-center gap-4">
              <li>
                <Link
                  className="text-white  transition hover:text-white/75 uppercase "
                  href="/projetos"
                >
                  PROJETOS
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75 uppercase"
                  href="/sobre"
                >
                  SOBRE
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75 uppercase"
                  href="/midia"
                >
                  MÍDIA
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75 uppercase"
                  href="/contato"
                >
                  CONTATO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
