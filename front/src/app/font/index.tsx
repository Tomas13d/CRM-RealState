import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const CRMFontFamily = montserrat.style.fontFamily;
