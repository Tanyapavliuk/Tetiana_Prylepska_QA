const data = {
    title: 'QA Tetiana Prylepska',
    description: 'The portfolio website for Tetiana Prylepska.',
    keywords: 'QA, portfolio',
    locale: 'en_EN',
    images: [
      {
        url: '/metadata/Og.jpg',
        width: 1200,
        height: 630,
        alt: 'QA Tetiana Prylepska',
      },
    ],
  };

  const { title, description, keywords, locale, images } = data;

  const BASE_URL = "https://tetiana-prylepska-qa.vercel.app";

  export const meta = {
    title: title,
    description: description,
    keywords: keywords,
    metadataBase: BASE_URL,
    alternates: {
      canonical: BASE_URL,
    },
    openGraph: {
      title: title,
      description: description,
      url: BASE_URL,
      siteName: title,
      locale: locale,
      type: 'website',
      images: images,
    },
    twitter: {
      title: title,
      description: description,
      card: 'summary_large_image',
      images: images,
    },
  };