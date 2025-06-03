import AboutLayout from "@/components/AboutLayout";
import { getMetadataFromSlug } from "@/utils/metadata";
import Head from "next/head";
import { notFound } from "next/navigation";

// Sidebar items
const sidebarItems = [
    { label: "About us", href: "/about/about-us" },
    { label: "About Kolhapur", href: "/about/kolhapur" },
    { label: "Vision Mission Goals", href: "/about/vision" },
    { label: "Honorable Chancellor", href: "/about/chancellor" },
    { label: "Honorable Vice Chancellor", href: "/about/vc" },
    { label: "Registrar Desk", href: "/about/registrar" },
    { label: "Former Vice Chancellors", href: "/about/former-vcs" },
];

// Kolhapur HTML content
const kolhapurHtml = {
    content: `
    <section class="space-y-8">
      <div>
        <h2 class="text-2xl font-semibold text-cyan-700 mb-4">About Kolhapur City</h2>
        <p class="text-gray-700 mb-2">Kolhapur is famous for being a centre of Art, education, industry and sports, particularly wrestling. Here the wrestling is called as "Kusti" and wrestlers are known as "Malla". This wrestling match is played in the square clay ground which is known as "Akhada".</p>
        <p class="text-gray-700 mb-2">Similar to "The Operation Flood" project in Gujarat, in Kolhapur the "Warna Project" was started and till date is famous for huge amount of generation of milk and milk products which are transported to the all over of India.</p>
        <p class="text-gray-700 mb-2">Kolhapur comes under sugarcane belt and because of this people are very rich and live prosperous life.</p>
        <p class="text-gray-700 mb-2">Kolhapuri chappals are renowned for their durability and beauty of make.</p>
        <p class="text-gray-700 mb-2">“Kolhapuri Saaj” is a special type of necklace which is very popular with Maharashtrian Women. The 'saaj' is designed in all over Maharashtra but the Kolhapuri Saaj is very famous.</p>
        <p class="text-gray-700">It is an important centre of Marathi film industry. Kolhapur possesses historical as well as mythological importance. It is known as Dakshin kashi on account of its deity Mahalakshmi or Ambabai. The Ambabai temple was built by the Chalukya King Karnadeve in 634 AD. The Irwin Agricultural Museum of Kolhapur has some old Andhra coins. Bahubali, Jain Pilgrim centre, lies at a distance of 38 km from Kolhapur.</p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-purple-700 mb-4">Reaching Kolhapur City</h2>

        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-800">Air:</h3>
          <p class="text-gray-700">It is a one-hour journey from Bombay to Kolhapur by air. The Ujalaiwadi airport is 10 km away from Kolhapur Main City. One can also travel from Kolhapur to the nearest Airport Pune, which is 238-km away.</p>
        </div>
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-800">Rail:</h3>
          <p class="text-gray-700">Kolhapur has a railway station and it's an 11-hour journey from Mumbai or Bangalore to Kolhapur.</p>
        </div>
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-800">Road:</h3>
          <p class="text-gray-700">Kolhapur is about 450-km south of Mumbai and it's a ten to eleven hour journey from Mumbai or Bangalore to Kolhapur by road. Maharashtra State Transport Corporation (MSRTC) has regular service in this route with semi luxury and regular buses. Even private bus service is available to reach here from Mumbai, Pune, Goa, Solapur (also stops at Sholapur) and Bangalore.</p>
        </div>
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-800">Local Transport:</h3>
          <p class="text-gray-700">Auto-rickshaws are the most common mode of transport along with the bus service run by the municipal corporation. Taxis are available.</p>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-red-700 mb-4">Places of Tourist Interest</h2>

        <div class="mb-4">
          <h3 class="text-xl font-semibold">Maharaja's Palace</h3>
          <p class="text-gray-700">The maharaja's 'new' palace, completed in 1881, houses the Shahaji Chhatrapati Museum, one of the most bizarre collections of memorabilia in India...</p>
        </div>

        <div class="mb-4">
          <h3 class="text-xl font-semibold">Panhala Hill Station</h3>
          <p class="text-gray-700">It is a little-visited hill station 18km northwest of Kolhapur, and makes an interesting excursion from Kolhapur. The hilltop fort has a long and convoluted history...</p>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-green-700 mb-4">Prime Attractions</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <li>
            <img src="https://www.unishivaji.ac.in/uploads/suk/mahalaxmitemple.jpg" alt="Mahalaxmi Temple"
            class="w-full h-48 object-cover rounded-xl shadow-md" />
            <p class="mt-2 font-medium text-gray-800">Mahalaxmi Temple</p>
        </li>
        <li>
            <img src="https://www.unishivaji.ac.in/uploads/suk/townlhallmusium.jpg" alt="Town Hall"
            class="w-full h-48 object-cover rounded-xl shadow-md" />
            <p class="mt-2 font-medium text-gray-800">Town Hall</p>
        </li>
        <li>
            <img src="https://www.unishivaji.ac.in/uploads/suk/khasbagMaidan.jpg" alt="Khasbag Maidan / Akhada"
            class="w-full h-48 object-cover rounded-xl shadow-md" />
            <p class="mt-2 font-medium text-gray-800">Khasbag Maidan / Akhada</p>
        </li>
        <li>
            <img src="https://www.unishivaji.ac.in/uploads/suk/NewPalace.jpg" alt="New Palace"
            class="w-full h-48 object-cover rounded-xl shadow-md" />
            <p class="mt-2 font-medium text-gray-800">New Palace</p>
        </li>
        <li>
            <img src="https://www.unishivaji.ac.in/uploads/suk/ShaliniPalace.jpg" alt="Shalini Palace"
            class="w-full h-48 object-cover rounded-xl shadow-md" />
            <p class="mt-2 font-medium text-gray-800">Shalini Palace</p>
        </li>
        </ul>

      </div>

      <div>
        <h2 class="text-2xl font-semibold text-orange-700 mb-4">Excursions</h2>
        <ul class="list-disc list-inside text-gray-700">
          <li>Panhala Fort</li>
          <li>Vishalgad</li>
          <li>Bhudargad</li>
          <li>Paaragad</li>
          <li>Narasimha Wadi</li>
          <li>Bahubali Of Kumbhojgiri</li>
          <li>Khidrapur</li>
          <li>Dajipur Bison Sanctuary</li>
          <li>Amba</li>
          <li>Amboli</li>
          <li>Jotiba</li>
        </ul>
      </div>
    </section>
  `
};


// Other text-based content
const aboutData = {
    "about-us": {
        title: "About Us",
        content: "This is the about us page content.",
    },
    vision: {
        title: "Vision, Mission and Goals",
        content: "Our vision is to provide...",
    },
    chancellor: {
        title: "Hon’ble Chancellor",
        content: "Information about the Chancellor...",
    },
    vc: {
        title: "Vice Chancellor",
        content: "Vice Chancellor's message...",
    },
    registrar: {
        title: "Registrar Desk",
        content: "Message from Registrar...",
    },
    "former-vcs": {
        title: "Former Vice Chancellors",
        content: "List of former Vice Chancellors...",
    }
};

export async function generateMetadata({ params }) {
  const slug = params?.slug?.[0] || "";
  return getMetadataFromSlug(slug, "about");
}


export default async  function AboutPage({ params }) {
    console.log(params?.slug,'params?.slug');
    
    const slug = params?.slug?.[0];

    // Special case for Kolhapur
    if (slug === "kolhapur") {
        return (
            <>
                <AboutLayout sidebarItems={sidebarItems}>
                    <div className="max-w-4xl">
                        <div
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: kolhapurHtml.content }}
                        />
                    </div>
                </AboutLayout>
            </>
        );
    }

    // Other pages
    const data = aboutData[slug];
    if (!data) notFound();

    return (
        <>
            <AboutLayout sidebarItems={sidebarItems}>
                <div className="max-w-4xl">
                    <h1 className="text-3xl font-semibold mb-4 text-cyan-800">{data.title}</h1>
                    <p className="text-gray-700 whitespace-pre-line">{data.content}</p>
                </div>
            </AboutLayout>
        </>
    );
}
