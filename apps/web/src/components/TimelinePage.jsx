import TimelinePanel from './TimelinePanel';

export default function TimelinePage({ project }){
  if(!project) return <div>Selecione um projeto</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🕰️ Histórico</h2>
      <TimelinePanel project={project}/>
    </div>
  );
}
