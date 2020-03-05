import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, SignUp, SettingCategory } from '../containers';

const Router = a => {
  // 마운트 될 때 한번
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: authTypes.SET_LOADING,
  //       payload: { loading: false },
  //     });
  //   }, 5000);
  //   console.log('HOME_Mount');
  //   return () => {
  //     console.log('HOME_unMount');
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup/:type">
          <SignUp />
        </Route>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/setting" component={SettingCategory} />
        </Switch>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
