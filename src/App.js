import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppHeader } from './components/AppHeader/AppHeader';
import { ElementState } from "./context/new-elements/ElementState";
import { AppPage } from "./pages/AppPage";
import { Auth } from "./pages/Auth";
import { MainPage } from "./pages/MainPage";
import { ViewPage } from "./pages/ViewPage";

function App() {
  return (
    <BrowserRouter>
      <ElementState>
        <AppHeader />
        <Switch>
          <Route path={'/'} exact component={MainPage} />
          <Route path={'/Constructor'} component={AppPage} />
          <Route path={'/Viewing'} component={ViewPage} />
          <Route path={'/Login'} component={Auth} />
        </Switch>
      </ElementState>
    </BrowserRouter>
  );
}

export default App;
