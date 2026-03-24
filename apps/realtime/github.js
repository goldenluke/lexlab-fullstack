import axios from 'axios';
import 'dotenv/config';

const TOKEN = env.GITHUB_TOKEN;
const REPO = "goldenluke/lexlab-minutas"; // 🔥 ajuste se necessário

if (!TOKEN) {
  console.log("❌ GITHUB_TOKEN não definido");
}

export async function pushToGitHub(filePath, content){

  const url = `https://api.github.com/repos/${REPO}/contents/${filePath}`;

  const encoded = Buffer.from(content).toString('base64');

  try{

    // 🔍 verificar se já existe
    let sha = null;

    try{
      const existing = await axios.get(url,{
        headers:{ Authorization:`Bearer ${TOKEN}` }
      });
      sha = existing.data.sha;
    }catch{}

    // 🚀 criar ou atualizar
    const res = await axios.put(url,{
      message: "update minuta",
      content: encoded,
      sha // só vai se existir
    },{
      headers:{ Authorization:`Bearer ${TOKEN}` }
    });

    console.log("🐙 GitHub OK:", filePath);

  }catch(e){
    console.log("❌ GitHub erro:");
    console.log(e.response?.data || e.message);
  }
}
