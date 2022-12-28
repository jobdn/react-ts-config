import type { JestConfigWithTsJest } from 'ts-jest';

export const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
