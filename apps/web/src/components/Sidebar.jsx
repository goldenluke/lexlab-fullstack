function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-[1.02] transition">

      <h2 className="font-semibold mb-3 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        {title}
      </h2>

      {children}
    </div>
  );
}

import PRPanel from './PRPanel.jsx';
import VersionTimeline from './VersionTimeline.jsx';
import ScorePanel from './ScorePanel.jsx';

export default function Sidebar({ onSelectVersion }) {
  return (
    <div className="space-y-4">

      <Card title="Histórico">
        <VersionTimeline onSelect={onSelectVersion} />
      </Card>

      <Card title="Score">
        <ScorePanel />
      </Card>

      <Card title="Pull Requests">
        <PRPanel />
      </Card>

    </div>
  );
}
