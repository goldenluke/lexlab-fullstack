import InstitutionalDashboard from '../components/InstitutionalDashboard';
import RealCongress from '../components/RealCongress';
import RealPartySimulation from '../components/RealPartySimulation';
import Leaderboard from '../components/Leaderboard';

export default function InstitutionalPage(){
  return (
    <div className="space-y-6">

      <InstitutionalDashboard />

      <div className="grid md:grid-cols-3 gap-4">
        <RealCongress />
        <RealPartySimulation />
        <Leaderboard />
      </div>

    </div>
  );
}
