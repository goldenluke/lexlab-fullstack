import axios from 'axios';

// ================= EMBEDDING =================
export async function embed(text){

  const r = await axios.post(
    'http://127.0.0.1:11434/api/embeddings',
    {
      model: 'nomic-embed-text',
      prompt: text
    }
  );

  return r.data.embedding;
}

// ================= SIMILARIDADE =================
export function cosine(a,b){

  let dot=0, na=0, nb=0;

  for(let i=0;i<a.length;i++){
    dot+=a[i]*b[i];
    na+=a[i]*a[i];
    nb+=b[i]*b[i];
  }

  return dot/(Math.sqrt(na)*Math.sqrt(nb));
}
