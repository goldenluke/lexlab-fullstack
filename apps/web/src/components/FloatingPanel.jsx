export default function FloatingPanel({visible, onClose, onSubmit}){

  if(!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

      <div className="bg-gray-900 p-4 rounded-lg w-96 shadow-lg">

        <h3 className="mb-2">💬 Novo Comentário</h3>

        <textarea
          id="comment-input"
          className="w-full p-2 bg-gray-800 rounded"
          placeholder="Digite seu comentário..."
        />

        <div className="flex justify-end gap-2 mt-3">
          <button onClick={onClose}>Cancelar</button>
          <button
            className="bg-blue-600 px-3 py-1 rounded"
            onClick={()=>{
              const text = document.getElementById('comment-input').value;
              onSubmit(text);
            }}
          >
            Salvar
          </button>
        </div>

      </div>

    </div>
  );
}
