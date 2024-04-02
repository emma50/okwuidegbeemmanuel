import '@testing-library/jest-dom'
import {jest} from '@jest/globals'

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => children,
  SwiperSlide: ({ children }) => children,
}));

jest.mock('swiper/modules', () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: jest.fn(),
      push: jest.fn()
    };
  }
}));