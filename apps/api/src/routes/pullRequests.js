import express from 'express';
const router = express.Router();

// Mock de banco de dados para PRs Legislativos
let pullRequests = [
  {
    id: 'PR-101',
    projectId: '1',
    title: 'Harmonização Art. 12 (LGPD)',
    description: 'Sugestão de alteração para adequação à Lei Geral de Proteção de Dados.',
    changes: 'Texto alterado para incluir o encarregado de dados conforme Art. 41.',
    status: 'open',
    author: 'Auditoria de IA'
  }
];

// Listar PRs de um projeto específico
router.get('/:projectId', (req, res) => {
  const projectPrs = pullRequests.filter(pr => pr.projectId === req.params.projectId);
  res.json(projectPrs);
});

// Endpoint de Aprovação (Merge)
router.post('/:id/merge', (req, res) => {
  const prIndex = pullRequests.findIndex(p => p.id === req.params.id);
  if (prIndex !== -1) {
    pullRequests[prIndex].status = 'merged';
    res.json({ 
      success: true, 
      message: 'Proposta fundida ao rastro digital.', 
      pr: pullRequests[prIndex] 
    });
  } else {
    res.status(404).json({ error: 'Proposta não encontrada' });
  }
});

export default router;
