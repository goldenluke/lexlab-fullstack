import Sidebar from './Sidebar';

export default function AppShell({ children }) {

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      <Sidebar />

      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {children}
      </main>

    </div>
  );
}
