import express from 'express';
import cors from 'cors';
import axios from 'axios';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'lexlab',
  database: 'lexlab'
});

const app = express();
app.use(cors());
app.use(express.json());


// ================= MUNICÍPIOS =================
app.get('/municipios', async (req,res)=>{
  const r = await pool.query("SELECT * FROM municipios LIMIT 5000");
  res.json(r.rows);
});


// ================= INDICADORES =================
app.get('/indicadores', async (req,res)=>{
  const { cod } = req.query;

  const r = await pool.query(
    "SELECT * FROM indicadores WHERE cod_ibge=$1",
    [cod]
  );

  res.json(r.rows);
});


// ================= IA TERRITORIAL =================
app.get('/ia-territorio', async (req,res)=>{

  const { cod } = req.query;

  try{

    const mun = await pool.query(
      "SELECT * FROM municipios WHERE cod_ibge=$1",
      [cod]
    );

    const ind = await pool.query(
      "SELECT * FROM indicadores WHERE cod_ibge=$1",
      [cod]
    );

    const contexto = `
Município: ${mun.rows[0]?.nome}
UF: ${mun.rows[0]?.uf}
População: ${mun.rows[0]?.populacao}

Indicadores:
${ind.rows.map(i=> i.indicador + ":" + i.valor).join("\n")}
`;

    const ia = await axios.post('http://localhost:11434/api/generate',{
      model:'llama3',
      prompt: `
Você é um especialista em políticas públicas.

Com base nos dados abaixo, sugira projetos de lei municipais:

${contexto}

Responda com:
- Problema identificado
- Proposta de lei
- Justificativa técnica
`,
      stream:false
    });

    res.json({ok:true, resposta: ia.data.response});

  }catch(e){
    res.json({erro:e.message});
  }

});


app.listen(1234,()=>console.log("🚀 TERRITÓRIO 1234"));
