import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Componentes
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Miguel Sanchez - Portfolio",
  description: "Desarrollador de software-web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Servicio de chat */}
      <script src="//code.tidio.co/opt7bt1krtbhm2f21t0aocf7qmyvouzp.js" async></script>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
        
      </body>
    </html>
  );
}
