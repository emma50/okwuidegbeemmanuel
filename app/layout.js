import { Inter } from "next/font/google";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'
import "./globals.css";

import {CustomContext} from "./context";

// register Swiper custom elements
register();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Okwuidegbe Emmanuel",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CustomContext>
          {children}
        </CustomContext>
      </body>
    </html>
  );
}
