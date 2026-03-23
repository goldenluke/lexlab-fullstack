export default function Button({ children, onClick, variant="primary" }) {

  const base = "px-4 py-2 rounded-xl transition font-medium";

  const styles = {
    primary: "bg-black text-white hover:opacity-80",
    secondary: "bg-gray-200 dark:bg-gray-800 hover:opacity-80"
  };

  return (
    <button onClick={onClick} className={base + " " + styles[variant]}>
      {children}
    </button>
  );
}
