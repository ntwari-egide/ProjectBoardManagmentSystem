import './App.css';
import Navigationbar from "./components/Navigationbar"
import ProjectBoard from "./components/ProjectBoard"
function App() {
  console.log('made changes');
  return (
    <div className="App">
      <Navigationbar />
      <ProjectBoard />
    </div>
  );
}

export default App;
