import './App.css';
import {FileStoragePage} from "./pages/FileStoragePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileStoragePage />}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
