export function getUser(){
  return JSON.parse(localStorage.getItem('user') || '{}');
}

export function getToken(){
  return getUser()?.token || '';
}

// 🔥 FUNÇÃO QUE TODO SISTEMA USA
export async function fetchWithAuth(url, options = {}){

  const token = getToken();

  const headers = {
    ...(options.headers || {}),
    Authorization: token,
    'Content-Type': 'application/json'
  };

  const res = await fetch(url, {
    ...options,
    headers
  });

  if(res.status === 401){
    console.warn("Não autenticado");
  }

  return res;
}
