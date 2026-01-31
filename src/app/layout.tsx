import Header from "@/components/Header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const jubble = localFont( {
  src: "../../public/fonts/jubble.otf",
  variable: "--font-jubble"
} );

const ztNature = localFont( {
  src: [
    {
      path: "../../public/fonts/ZTNature-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZTNature-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ztnature"
} );

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="fr" className={ `${ztNature.className} ${jubble.className}` }>
      <body className={ `${ztNature.variable} ${jubble.variable}` }>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
