import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import clsx from "clsx";

import { Nunito, Nunito_Sans } from "next/font/google";

import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";
import { Providers } from "@/app/providers";
import { TrackingHeadScript } from "@phntms/next-gtm";

const body = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
  // console.log("settings page data", settings);

  const {
    data: { meta_title, meta_description, og_image },
  } = settings;

  return {
    title: meta_title || "Fallback Meta Title",
    description: meta_description || "Fallback description",
    openGraph: {
      images: [og_image?.url || "./fallback_image_path"],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const {
    data: { primary_color, secondary_color, gtm_id: GTM_ID },
  } = settings;
  return (
    <html lang="en">
      <body className={clsx(body.variable, display.variable)}>
        <Providers>
          <TrackingHeadScript id={GTM_ID || ""} isGTM={true} />
          <Header />
          {children}
          <Footer />
        </Providers>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
