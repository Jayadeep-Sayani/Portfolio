import { motion } from "../../node_modules/framer-motion";

const AnimatedGradientBorder = ({ children }) => {
  return (
    <motion.div
      className="p-1 rounded-lg overflow-hidden relative"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      style={{
        background: "linear-gradient(90deg,rgb(44, 91, 231),rgb(24, 222, 195),rgb(23, 201, 106))",
        backgroundSize: "200% 200%",
        padding: "4px",
        width: "250px"
      }}
    >
      {/* Inner content container */}
      <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
    </motion.div>
  );
};

export default AnimatedGradientBorder;
