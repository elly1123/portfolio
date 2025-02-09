import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ThankYouSection = () => {
  return (
    <section className="relative h-screen w-full bg-gray-50">
      {/* 배경 이미지 - 마블 패턴 */}
      <Image
        src="/assets/images/end_background.png"
        alt="Marble Background"
        fill
        className="absolute inset-0 object-cover opacity-50"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* 콘텐츠 */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-black">
        <motion.h1
          className="text-6xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thank You!
        </motion.h1>

        {/* <motion.h2
          className="text-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        
        </motion.h2> */}

        <motion.p
          className="text-center text-gray-600 max-w-2xl mb-12 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          끊임없이 변화하는 세상 속에서, 저는 새로운 트렌드를 탐구하고,
          <br /> 데이터와 창의성을 결합하여 더 나은 콘텐츠를 만드는 것을 목표로
          합니다.
          <br />
          <br />
          함께 새로운 가능성을 발견하고, 더 나은 콘텐츠 경험을 만들어가길
          기대합니다!
          <br /> 🚀 Let’s think, create, and grow together. 😊
        </motion.p>

        {/* 링크 버튼들 */}
        <motion.div
          className="flex gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            target="_blank"
            href="https://form.typeform.com/to/WWKFArz6"
            className="border-b-2 border-black pb-1 hover:opacity-70 hover:text-black transition-opacity duration-300 text-gray-600 "
          >
            Feedback
          </Link>
        </motion.div>

        {/* 카피라이트 */}
        <motion.div
          className="absolute bottom-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Copyright 2025. Jung Da Eun all rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
