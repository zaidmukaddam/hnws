export const baseUrl =
  process.env.NODE_ENV === "production" ? "https://hnws.ctrlalt.fun" : "";

export const defaultSEO = {
  title: "hnws",
  description: "hnws - A cleaner frontend for reading hackernews",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "hnws",
    images: [
      {
        url: `${baseUrl}/img/og/hn.png`,
        alt: "hnws",
      },
    ],
  },
  twitter: {
    handle: "@zaidmukaddam",
    site: "@zaidmukaddam",
    cardType: "summary_large_image",
  },
};
