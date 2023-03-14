/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";

import { ActivityCard } from "../activityCard/AcitivityCard";
import AppContext from "../../context/AppContext";

import CardListTop from "./CardListTop";
import NoCards from "../activityCard/NoCards";

function CardList() {
  const { maxPages, cardsPerPage, page, direction } = useContext(AppContext);

  const cards = [
    {
      id: "c7e12578-243e-4c08-b33b-460c5b7d9880",
      title: "Portuguese Homework",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      subject: "Portuguese",
      type: "Homework",
      checked: true,
      xp: 82,
      deadline: new Date("2022-11-19T02:16:15.624Z"),
    },
  ];
  return (
    <div
      //prettier-ignore
      className={`flex flex-col ${page === maxPages ? `content-start` : `content-between`} h-[calc(100vh-4rem)] w-screen lg:w-[60vw] min-w-[350px] self-center absolute right-0 top-0 lg:py-8 lg:pl-[20vw] lg:pr-[5vw]   overflow-x-hidden`}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          className="sticky"
          initial={{ opacity: 0, x: direction * 200 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            x: -200 * direction,
            transition: { duration: 0.3 },
          }}
        >
          <CardListTop />
        </motion.div>

        {cards.length ? (
          cards.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 200 * direction }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.6 + 0.15 * (index % cardsPerPage),
                  },
                }}
                exit={{
                  opacity: 0,
                  x: -200 * direction,
                  transition: {
                    duration: 0.3,
                    delay: 0.15 * (index % cardsPerPage),
                  },
                }}
                className={page === maxPages ? `mb-3` : ""}
              >
                <ActivityCard item={item} />
                <NoCards />
              </motion.div>
            );
          })
        ) : (
          <motion.div
            key="nocards"
            initial={{ opacity: 0, x: 200 * direction }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              x: -200 * direction,
              transition: {
                duration: 0.3,
                delay: 0.15,
              },
            }}
          >
            <NoCards />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CardList;
