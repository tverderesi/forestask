import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideInView = ({
  children,
  threshold = 0.5,
  triggerOnce = true,
  variants = {},
}) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  });

  const defaultVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const childVariants = { ...defaultVariants, ...variants };

  return (
    <motion.div
      ref={ref}
      variants={childVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default SlideInView;
