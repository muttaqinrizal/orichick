import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplashScreen from './containers/splash-screen';
import LoginScreen from './containers/login-screen';
import BerandaScreen from './containers/beranda';
import {Switch, Route} from 'react-router-dom'
import CameraScreen from './containers/camera';
import DaftarStok from './containers/daftar-stok';
import PosScreen from './containers/pos';
import ProfileScreen from './containers/profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen}/>
      <Route path="/login" component={LoginScreen}/>
      <Route path="/beranda" component={BerandaScreen}/>
      <Route path="/camera" component={CameraScreen}/>
      <Route path="/daftar-stok" component={DaftarStok}/>
      <Route path="/pos" component={PosScreen}/>
      <Route path="/profile" component={ProfileScreen}/>
    </Switch>
  );
}

export default App;
