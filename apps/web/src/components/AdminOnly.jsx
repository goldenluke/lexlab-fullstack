export default function AdminOnly({ user, children }) {
  if (user?.role !== 'admin') return null;
  return children;
}
