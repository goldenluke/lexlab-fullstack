export default function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-4 border border-gray-200 dark:border-gray-800">
      {children}
    </div>
  );
}
