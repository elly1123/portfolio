import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ThankYouSection = () => {
  return (
    <section className="relative h-screen w-full bg-gray-50">
      {/* 배경 이미지 - 마블 패턴 */}
      <Image
        src="/assets/images/thankyou_background.jpeg"
        alt="Marble Background"
        fill
        className="absolute inset-0 object-cover opacity-50"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* 콘텐츠 */}
      <div className="relative flex flex-col items-center justify-center h-full px-4">
        <motion.h1
          className="text-6xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thank You
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
          좋은 제품을 만들기 위해 지속가능한 성장을 이루어 나가고 있습니다.
          <br />
          저와의 여정을 함께 해주셔서 감사드립니다.
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
            href="https://form.typeform.com/to/Gt6BZmLj"
            className="border-b-2 border-black pb-1 hover:opacity-70 hover:text-black transition-opacity duration-300 text-gray-600 "
          >
            Feedback
          </Link>
          <Link
            target="_blank"
            href="https://debeletter.stibee.com"
            className="border-b-2 border-black pb-1 hover:opacity-70 hover:text-black transition-opacity duration-300 text-gray-600 "
          >
            Newsletter
          </Link>
        </motion.div>

        {/* 카피라이트 */}
        <motion.div
          className="absolute bottom-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Copyright 2025. Baek Kun Hee all rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
