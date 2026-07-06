import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { defaultSiteMetadata, medicalClinicSchema } from "@/lib/site-metadata";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = defaultSiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalClinicSchema),
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
