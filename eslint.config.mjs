import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // any 타입 허용
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            any: false, // any 사용을 경고하지 않도록 설정
          },
          extendDefaults: true,
        },
      ],
    },
  },
];

export default eslintConfig;
