import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppHeader } from './components/AppHeader';
import { AppPage } from "./pages/AppPage";
import { MainPage } from "./pages/MainPage";
import { ViewPage } from "./pages/ViewPage";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route path={'/'} exact component={MainPage} />
        <Route path={'/Constructor'} component={AppPage} />
        <Route path={'/Viewing'} component={ViewPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
