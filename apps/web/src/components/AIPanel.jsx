import AIAdvancedPanel from '../components/AIAdvancedPanel';
import DebatePanel from '../components/DebatePanel';
import JustificationPanel from '../components/JustificationPanel';

export default function AIPanel({ editor }){

  return (
    <div className="space-y-4">

      <AIAdvancedPanel />

      <DebatePanel editor={editor} />

      <JustificationPanel editor={editor} />

    </div>
  );
}
