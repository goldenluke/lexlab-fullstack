import { GoogleLogin } from '@react-oauth/google';

export default function Login({ onLogin }){

  async function handleSuccess(res){

    const r = await fetch('http://localhost:1234/auth/google',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ token: res.credential })
    });

    const user = await r.json();

    localStorage.setItem('user', JSON.stringify(user));

    onLogin(user);
  }

  return (
    <div className="p-6">
      <h2>Entrar no LexLab</h2>

      <GoogleLogin
        onSuccess={handleSuccess}
        onError={()=>alert("Erro no login")}
      />
    </div>
  );
}
