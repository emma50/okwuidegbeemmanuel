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
  title: {
    template: "%s | Okwuidegbe Emmanuel Portfolio",
    default: "Okwuidegbe Emmanuel Portfolio",
  },
  description: "Okwuidegbe Emmanuel is a passionate web developer with 4+ years of experience. He specializes in building cool things on the web.",
  keywords: "Okwuidegbe, Emmanuel, Portfolio, Software Engineer, Web Developer, Developer, Frontend Engineer, Frontend Developer",
  metadataBase: new URL('https://okwuidegbeemmanuel.vercel.app'),
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
