import Entry from "./Component/Entry/Entry";
import Froentend from "./Component/Froentend/Froentend";
import List from "./Component/List/List";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Edit from "./Component/Edit/Edit";

function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route path="/" element={<Froentend />} />
      <Route path="Entry" element={<Entry />} />
      <Route path="List" element={<List />} />
      <Route path="edit/" element={<Edit/> } />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
