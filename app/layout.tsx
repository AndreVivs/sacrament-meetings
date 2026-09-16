import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentDate: string = new Date().toLocaleDateString();

  return (
    <html lang="en">
      <body>
        <Header
          wardName="Lehi 3rd Ward"
          currentDate={currentDate}
        />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}