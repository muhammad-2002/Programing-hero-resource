import Footer from "@/Components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorPro">
      
      <body className={inter.className}>

      <AuthProvider>
      {/* <Navbar></Navbar> */}
      {children}
      <Footer></Footer>
      </AuthProvider>
 
      </body>
      
    </html>
  );
}
