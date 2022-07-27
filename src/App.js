import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Routes>
                  <Route
                      path="/login"
                      element={<Login />}
                  />
                  <Route
                      path="/thanks"
                      element={<ThankYou />}
                  />
                  <Route
                      path="/"
                      element={<Navigate exact from="/" to="/login" />}
                  />
              </Routes>
        </Router>
      </Provider>
  );
}

export default App;
