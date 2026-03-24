// DESATIVADO PELO DEBUG LEXLAB
import fs from 'node:fs';
import path from 'node:path';

export async function GET() {
    const lawsDir = path.resolve('../../src/leis/src/projetos-leis');
    if (!fs.existsSync(lawsDir)) return new Response("[]", { status: 200 });

    const folders = fs.readdirSync(lawsDir).filter(f => fs.lstatSync(path.join(lawsDir, f)).isDirectory());
    const data = folders.map(f => {
        try {
            const cfg = JSON.parse(fs.readFileSync(path.join(lawsDir, f, 'config.json'), 'utf-8'));
            return { id: f, titulo: cfg.titulo, esfera: cfg.esfera };
        } catch { return null; }
    }).filter(Boolean);

    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}
