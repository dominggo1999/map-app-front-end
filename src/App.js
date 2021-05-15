import Button from './components/shared/Button';
import Navbar from './components/shared/Navbar';
import './styles/main.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="center card">
        <Button>View On Map</Button>
        <Button className="btn-warning">Edit</Button>
        <Button className="btn-danger">Delete</Button>
      </div>
    </>
  );
};

export default App;
