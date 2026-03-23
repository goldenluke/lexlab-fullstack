// Rastro de Autenticação e Comunicação LexLab

export const getAuthSession = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('lexlab_auth') === 'true';
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('lexlab_auth');
    window.location.reload();
  }
};

/**
 * Função fetchWithAuth: Centraliza chamadas para a API do Digital Twin
 * com suporte a tratamento de erros e contexto de autenticação.
 */
export const fetchWithAuth = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...(options.headers || {}),
    },
  };

  try {
    const response = await fetch(url, mergedOptions);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Rastro de erro na fetchWithAuth:", error);
    throw error;
  }
};
