import Form from './components/Form';
import InstructionsModal from './components/InstructionsModal';
import Navbar from './components/Navbar';
import ReportsList from './components/ReportsList';
import Map from './components/Map';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flex h-screen'>
        <ReportsList />
        <Map />
        <InstructionsModal />
        <Form />
      </div>
    </div>
  );
}

export default App;
