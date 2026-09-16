import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentDate: string = new Date().toLocaleDateString();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header
          wardName="Lehi 3rd Ward"
          currentDate={currentDate}
        />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}