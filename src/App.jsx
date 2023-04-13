import { register } from "swiper/element/bundle";
import "./App.css";
import { TaskList } from "./components/containers/TaskList";


function App() {

  register();
  
  return (
    <div className="container-fluid my-5">   
      <TaskList/>
    </div>
  );
}

export default App;
