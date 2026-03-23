import ScorePoliticsPanel from '../components/ScorePoliticsPanel';
import PartyVote from '../components/PartyVote';
import Bicameral from '../components/Bicameral';
import RealCongress from '../components/RealCongress';

export default function PoliticsPanel({ editor }){

  return (
    <div className="space-y-4">

      <ScorePoliticsPanel editor={editor} />

      <Bicameral editor={editor} />

      <RealCongress editor={editor} />

      <PartyVote />

    </div>
  );
}
