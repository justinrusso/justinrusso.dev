import { motion } from "framer-motion";

const IndexPage = () => (
  <motion.div
    className="page-card-wrapper"
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ y: "-100%" }}
    transition={{ duration: 2 }}
  >
    <div className="lg:rounded-t-lg overflow-hidden shadow-lg min-w-full min-h-screen dark:bg-gray-900">
      <div className="px-16 py-12">
        <h2 className="font-bold text-3xl mb-2 border-solid border-b-2 border-gray-900 dark:border-gray-700">
          Home
        </h2>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  </motion.div>
);

export default IndexPage;
