import { BrowserRouter, Switch } from "react-router-dom";

import { PrivateRoutes, PublicRoutes } from "./components/PriPubRoute";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./designs/fontawesome-pro-5.13.0-web/css/all.min.css";
import "./designs/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoutes path="/" exact component={Home} />
          <PublicRoutes path="/login" component={Login} />
          <PublicRoutes path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
