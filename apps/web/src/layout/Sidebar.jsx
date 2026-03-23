export default function Sidebar() {

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-white dark:bg-gray-900 p-4">

      <div className="text-xl font-bold mb-6">
        LexLab
      </div>

      <nav className="space-y-2">

        <a href="/" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          📂 Minutas
        </a>

        <a href="/profile" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          👤 Perfil
        </a>

        <a href="/analytics" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          📊 Analytics
        </a>

      </nav>

    </aside>
  );
}
