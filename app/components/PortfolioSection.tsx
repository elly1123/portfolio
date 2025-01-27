import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: '프로젝트 1',
      description: '프로젝트 설명입니다.',
      image: '/path/to/image1.jpg',
    },
    {
      id: 2,
      title: '프로젝트 2',
      description: '프로젝트 설명입니다.',
      image: '/path/to/image2.jpg',
    },
    // 더 많은 프로젝트 추가 가능
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen p-8 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioSection;
