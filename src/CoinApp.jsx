import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppLayout from "./components/AppLayout";
import MainPage from "./components/main/MainPage";
import ModalProvider from "./ModalProvider";
import configureStore from "./store/configureStore";
import NotificationContainer from "./containers/NotificationContainer";
import NotFound from "./components/NotFound";
import RouterStateContainer from "./containers/RouterStateContainer";


class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer/>
        <ModalProvider>
          <AppLayout>
            <Switch>
            <Route path="/" exact render={()=><MainPage/>}/>
            {/* <Route path="*" component={NotFound}/> */}
            {/* 컴포넌트에 match 프로퍼티를 전달 하기위함 render를 쓰기위한 방법 */}
            <Route path="*" render={({match})=><NotFound match={match}/>}/>
            </Switch>
            
            <NotificationContainer/>
          </AppLayout>
        </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
