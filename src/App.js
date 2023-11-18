import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import '../node_modules/react-toastify/dist/ReactToastify.css';
import "./global.css";
import Home from "./pages/Home/Home";
import routes from "./routes/Routes";
function App() {
  return (
    <>
      <Home />
      <Routes>
        {
          routes.map((item, index) => {
            return <Route key={index} path={item.PATH} element={item.ElEMENT} />
          })
        }
      </Routes>
    </>
  );
}

export default App;
