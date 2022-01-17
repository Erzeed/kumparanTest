
import React from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Provider} from 'react-redux'
import Dashboard from '../dashboard/dashboard';
import PostDetail from '../postDetail/postDetail';
import { store } from '../../../config/redux/redux'
import DetailPage from "../detailPage/detailPage";
import DetailPhoto from "../photoDetail/photoDetail";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/postDetail" component={PostDetail} />
            <Route path="/userDetail" component={DetailPage} />
            <Route path="/detailPhoto" component={DetailPhoto} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
