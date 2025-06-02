import AboutLayout from "@/components/AboutLayout";
import { getMetadataFromSlug } from "@/utils/metadata";
import { notFound } from "next/navigation";

// Sidebar items for Academics
const sidebarItems = [
  { label: "Academic Home", href: "/academics/home" },
  { label: "V S Khandekar Memorial Museum", href: "/academics/vs-khandekar-museum" },
  { label: "List of programs offered on campus", href: "/academics/programs-offered" },
  { label: "Academic Departments", href: "/academics/departments" },
  { label: "Centers and Chairs", href: "/academics/centers-chairs" },
  { label: "Memorandum of Understanding (MOU's)", href: "/academics/mou" },
  { label: "Support Services", href: "/academics/support-services" },
];


// Programs Offered HTML content
const programsOfferedHtml = {
  content: `
    <section class="space-y-6">
      <h2 class="text-2xl font-bold text-cyan-700">List of Programs Offered on Campus</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse border border-gray-300">
          <thead class="bg-cyan-500 text-white">
            <tr>
              <th class="px-4 py-2 border border-gray-300">Sr. No.</th>
              <th class="px-4 py-2 border border-gray-300">Name of the Programs</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">1</td>
              <td class="px-4 py-2 border border-gray-300">M.B.A. - Master of Business Administration Business Management</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border border-gray-300">2</td>
              <td class="px-4 py-2 border border-gray-300">M.C.A. - Master of Computer Applications Commerce</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">3</td>
              <td class="px-4 py-2 border border-gray-300">M.Com. - Master of Commerce Commerce and Management</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border border-gray-300">4</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Economics</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">5</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts English</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border border-gray-300">6</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts M.A in Russian</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">7</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Hindi</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border border-gray-300">8</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Language Technology</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">9</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts History</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border border-gray-300">10</td>
              <td class="px-4 py-2 border border-gray-300">L.L.M. - Master of Law or Laws Law</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">11</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Marathi</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border border-gray-300">12</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Political Science</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">13</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Psychology</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border border-gray-300">14</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Sociology</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 border border-gray-300">15</td>
              <td class="px-4 py-2 border border-gray-300">M.A. - Master of Arts Women's Studies</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
};



// Academics text-based content
const academicsData = {
  home: {
    title: "Academic Home",
    content: "Welcome to the Academic Home page. Here you'll find general academic information and updates."
  },
  "vs-khandekar-museum": {
    title: "V S Khandekar Memorial Museum",
    content: "Details about the V S Khandekar Memorial Museum and its contributions to education and literature."
  },
  "programs-offered": {
    title: "List of Programs Offered on Campus",
    content: "Explore the diverse range of academic programs and courses offered across various faculties."
  },
  departments: {
    title: "Academic Departments",
    content: "Information about the different academic departments, faculty members, and their areas of expertise."
  },
  "centers-chairs": {
    title: "Centers and Chairs",
    content: "Learn about the academic and research centers and chairs operating under the university."
  },
  mou: {
    title: "Memorandum of Understanding (MOU's)",
    content: "A list of MoUs signed with national and international institutions for collaboration and partnership."
  },
  "support-services": {
    title: "Support Services",
    content: "Details of academic and administrative support services available to students and faculty."
  }
};

export async  function generateMetadata({ params }) {
  const slug = params.slug?.[0] || "";
  return getMetadataFromSlug(slug, "academics");
}

export default async  function AcademicsPage({ params }) {
    const slug = params.slug?.[0];

    // Special case for Kolhapur
    if (slug === "programs-offered") {
        return (
            <AboutLayout sidebarItems={sidebarItems}>
                <div className="max-w-4xl">
                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: programsOfferedHtml.content }}
                    />
                </div>
            </AboutLayout>
        );
    }

    // Other pages
    const data = academicsData[slug];
    if (!data) notFound();

    return (
        <AboutLayout sidebarItems={sidebarItems}>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-semibold mb-4 text-cyan-800">{data.title}</h1>
                <p className="text-gray-700 whitespace-pre-line">{data.content}</p>
            </div>
        </AboutLayout>
    );
}
