import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { AuthState } from "./context/auth/AuthState";
import { ElementState } from "./context/new-elements/ElementState";
import { AppPage } from "./pages/AppPage";
import { Auth } from "./pages/Auth";
import { MainPage } from "./pages/MainPage";
import { Profile } from "./pages/Profile";
import { ViewPage } from "./pages/ViewPage";

function App() {
  return (
    <AuthState>
      <ElementState>
        <BrowserRouter>
          <AppHeader />
          <Switch>
            <Route path={"/"} exact component={MainPage} />
            <Route path={"/Constructor"} component={AppPage} />
            <Route path={"/Viewing"} component={ViewPage} />
            <Route path={"/Login"} component={Auth} />
            <Route path={"/Profile"} component={Profile} />
          </Switch>
        </BrowserRouter>
      </ElementState>
    </AuthState>
  );
}

export default App;
