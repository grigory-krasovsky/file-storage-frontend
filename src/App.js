import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout";
import {paths} from "./utils/constants";

function App() {
  return <Routes>
            <Route element={<Layout />}>
                {paths.map(path => <Route
                    path={path.to}
                    element={path.element}
                />)}
            </Route>
        </Routes>

}

export default App;
