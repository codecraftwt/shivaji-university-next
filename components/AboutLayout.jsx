import Sidebar from "./Sidebar";

export default function AboutLayout({ sidebarItems, children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-cyan-700 text-white">
        <Sidebar items={sidebarItems} />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-4 sm:p-6 bg-white overflow-x-auto">
        {children}
      </main>
    </div>
  );
}
