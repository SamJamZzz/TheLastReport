import InstructionsModal from './components/InstructionsModal';
import Navbar from './components/Navbar';
import ReportsList from './components/ReportsList';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flex h-screen'>
        <ReportsList />
        <InstructionsModal />
        <div>asdasdasd</div>
      </div>
    </div>
  );
}

export default App;
