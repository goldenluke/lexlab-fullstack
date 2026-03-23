import LawViewer from './LawViewer';

export default function ViewerPage({ project, onEdit }) {

  return (
    <div className="space-y-4">

      <div className="flex justify-between">

        <div>
          <div className="text-xl font-bold">{project?.title}</div>
          <div className="text-xs opacity-60">
            {project?.category}
          </div>
        </div>

        <button onClick={onEdit} className="btn btn-primary">
          ✍️ Editar
        </button>

      </div>

      <LawViewer project={project} />

    </div>
  );
}
