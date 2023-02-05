import { useState } from "react";
import VideoList from "./component/VideoList";
import listVideo from "./data/data";

function App() {
  const [list, setList] = useState(listVideo);

  return (
    <div className="App">
      <VideoList list={list} />
    </div>
  );
}

export default App;
