export function getMetadataFromSlug(slug, section = "") {
  const titles = {
    about: {
      "about-us": "About Us",
      kolhapur: "About Kolhapur",
      vision: "Vision, Mission and Goals",
      chancellor: "Hon’ble Chancellor",
      vc: "Vice Chancellor",
      registrar: "Registrar Desk",
      "former-vcs": "Former Vice Chancellors",
    },
    academics: {
      home: "Academic Home",
      "vs-khandekar-museum": "V S Khandekar Memorial Museum",
      "programs-offered": "Programs Offered On Campus",
      departments: "Academic Departments",
      "centers-chairs": "Centers and Chairs",
      mou: "Memorandum of Understanding (MOUs)",
      "support-services": "Support Services",
    },
    // Add more sections as needed (e.g., admission, research)
  };

  const title = titles[section]?.[slug] || "Shivaji University";
  const fullTitle = `${title} - Shivaji University`;
  const description = `Explore ${title} at Shivaji University, Kolhapur.`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `https://university.walstarfinance.com/${section}/${slug}`,
      siteName: "Shivaji University",
      images: [
        {
          url: "https://university.walstarfinance.com/og-image.jpg", // 🔁 customize this
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["https://university.walstarfinance.com/og-image.jpg"],
    },
  };
}