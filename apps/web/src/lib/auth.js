export async function fetchWithAuth(url, options = {}) {
  const token = (typeof localStorage !== 'undefined') ? localStorage.getItem('token') : null;
  const baseUrl = 'http://localhost:3001';

  const res = await fetch(baseUrl + url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    }
  });

  if (res.status === 401) {
    console.error("Não autorizado. Limpando sessão...");
    if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // window.location.reload(); 
    }
  }

  return res;
}
