import React from 'react';
import Tree from './Tree';
import { motion } from 'framer-motion';

export default function ForestBackground({
  levelArray = [0],
  windowWidth,
  showForest,
}) {
  const classDesktop =
    'd-flex flex-row justify-content-around align-items-center';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key='Forest'
      className={
        windowWidth < 825 ? 'd-flex align-items-center ' : classDesktop
      }
      style={{
        position: 'absolute',
        bottom: '0',
        overflow: 'hidden',
        zIndex: '0',
        width: windowWidth < 825 ? '100vw' : '100vw',
        height: '50vh',
      }}
    >
      {levelArray.map(i => {
        return <Tree number={i + 1} />;
      })}
    </motion.div>
  );
}
