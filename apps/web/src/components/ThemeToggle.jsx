import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  function toggle() {
    const html = document.documentElement;

    if (dark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    setDark(!dark);
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 text-sm border rounded bg-white dark:bg-gray-800"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
