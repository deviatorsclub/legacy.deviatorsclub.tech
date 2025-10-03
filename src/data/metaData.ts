import { Metadata } from "next";

export const metaDataBase: Metadata = {
  title: "Deviators Club Legacy - Archive",
  description:
    "Legacy archive of Deviators Club. For current content, please visit the new website.",
  keywords:
    "legacy, archive, old version",
  authors: [{ name: "Deviators Club DCE" }],
  creator: "Deviators Club DCE",
  publisher: "Deviators Club DCE",
  metadataBase: new URL("https://legacy.deviatorsclub.tech"),
  alternates: {
    canonical: "https://deviatorsclub.tech",
  },
  openGraph: {
    title: "Deviators Club Legacy - Archive",
    description:
      "Legacy archive of Deviators Club. For current content, please visit the new website.",
    url: "https://legacy.deviatorsclub.tech",
    siteName: "Deviators Club DCE Legacy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deviators Club DCE Legacy Archive",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviators Club Legacy - Archive",
    description:
      "Legacy archive of Deviators Club. For current content, please visit the new website.",
    images: ["/og-image.jpg"],
    creator: "@deviatorsdce",
    site: "@deviatorsdce",
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      "max-video-preview": 0,
      "max-image-preview": "none",
      "max-snippet": 0,
    },
  },
};
