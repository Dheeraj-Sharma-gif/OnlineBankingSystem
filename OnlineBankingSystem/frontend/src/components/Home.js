import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <h1 className="text-white text-5xl font-bold mb-4">Welcome to Spark Bank</h1>
      <p className="text-white text-xl">Manage your finances safely and securely.</p>
    </motion.div>
  );
}

export default Home;
