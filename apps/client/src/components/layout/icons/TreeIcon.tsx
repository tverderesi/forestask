import { motion } from "framer-motion";

function TreeIcon({ treeNumber, ...props }) {
  const parent = {
    initial: {},
    animate: {
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };
  const tree = (i) => {
    return {
      initial: { opacity: 0, scale: 0.9, y: 0.01 },
      animate: {
        opacity: [0, 1, 1, 0],
        scale: [0.9, 1, 1, 0.9],
        y: [0.01, 0, 0, 0.01],

        transition: {
          bounce: 1,
          duration: 2,
          delay: i * 0.2 + 2 * treeNumber,
          repeat: Infinity,
          repeatDelay: 2,
          times: [0, 0.3, 0.8, 1],
        },
      },
    };
  };
  const ground = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };
  const trunk = {
    initial: { opacity: 0, y: 0.1 },
    animate: {
      opacity: [0, 1, 1, 0],
      y: [0.1, 0, 0, 0],

      transition: {
        type: "tween",
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2,
        times: [0, 0.2, 0.8, 1],
        delay: 0 + 2 * treeNumber,
      },
    },
  };
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="125"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      version="1.1"
      viewBox="0 0 100 116.493"
      xmlSpace="preserve"
      variants={parent}
      initial="initial"
      animate="animate"
      stroke="auto"
      {...props}
    >
      <g transform="matrix(.24 0 0 .24 -202.782 -424.625)">
        <g
          fill="none"
          stroke="auto"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0.063"
          transform="translate(781.65 1972.365) scale(282.01285)"
        >
          <motion.path
            stroke="auto"
            fillRule="nonzero"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            d="M.479.488L.31.724A.06.06 0 00.298.76c0 .017.005.031.017.043A.057.057 0 00.358.82.054.054 0 00.394.808L.661.602V.76a.06.06 0 00.017.043A.056.056 0 00.72.82.07.07 0 00.745.815.047.047 0 00.766.8L.842.715l.12-.136.122.138.074.083c.012.013.028.02.045.02a.057.057 0 00.043-.017.06.06 0 00.017-.043V.602l.267.206c.01.009.022.012.036.012.017 0 .031-.005.043-.017A.057.057 0 001.626.76a.06.06 0 00-.012-.036L1.446.488"
            clipRule="evenodd"
            display="inline"
            variants={tree(1)}
            initial="initial"
            animate="animate"
          ></motion.path>
          <motion.path
            stroke="auto"
            fillRule="nonzero"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            d="M1.084 1.001V.717M.842.715V1"
            clipRule="evenodd"
            display="inline"
            variants={trunk}
            initial="initial"
            animate="animate"
          ></motion.path>
          <motion.path
            stroke="auto"
            fillRule="nonzero"
            variants={tree(2)}
            initial="initial"
            animate="animate"
            d="M1.363.156l.191.267c.009.01.012.022.012.036A.053.053 0 011.55.5a.057.057 0 01-.043.017.062.062 0 01-.038-.012l-.35-.273-.099.248a.06.06 0 01-.022.027A.062.062 0 01.905.48L.807.232l-.35.273a.062.062 0 01-.039.012A.057.057 0 01.375.5.053.053 0 01.358.46C.358.445.362.433.37.423L.56.156.53.153A.057.057 0 01.505.144a.05.05 0 01-.02-.019.067.067 0 01-.006-.03C.479.085.484.073.492.06l.15-.21a.062.062 0 01-.03-.02A.064.064 0 01.6-.208c0-.005 0-.012.003-.019l.009-.017.301-.42a.055.055 0 01.02-.019.054.054 0 01.028-.007.05.05 0 01.028.007c.008.005.015.01.02.019l.302.42a.15.15 0 00.01.017.089.089 0 01.003.019.065.065 0 01-.012.036.05.05 0 01-.03.02l.149.21a.063.063 0 01.014.037c0 .012-.002.022-.007.03a.05.05 0 01-.019.018.154.154 0 01-.057.012z"
          ></motion.path>
          <motion.path
            stroke="auto"
            d="M.224.97h1.478"
            variants={ground}
            initial="initial"
            animate="animate"
          ></motion.path>
        </g>
      </g>
    </motion.svg>
  );
}

export default TreeIcon;
