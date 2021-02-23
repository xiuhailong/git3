import React, { Component } from 'react';
import {BrowserRouter as Router, Route,  Redirect }  from 'react-router-dom';
//BrowserRouter 理解为一个容器 一个对象 用来存放 Route Link
// Route 展示的视图  Link跳转
import Login from './pages/login/login2.js';
import Home from './pages/home/index.js';
class Routes extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/index" component={Home}></Route>
                    <Redirect from="*" to="/login" ></Redirect>

                </div>
            </Router>
        )
    }
}
export default Routes;
