export const registerUser = async (userData: any) => {
    try {
      const response = await fetch('http://seu-backend.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Extrai o objeto de erro do corpo da resposta
        throw new Error(errorData.message || 'Erro ao cadastrar usuário');
      }
  
      const data = await response.json();
      return data; // Você pode retornar qualquer dado retornado pelo backend, se necessário
    } catch (error) {
        // throw new Error(error.message);
    }
  };