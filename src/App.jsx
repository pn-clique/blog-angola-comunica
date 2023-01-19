/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {Route, Routes} from 'react-router-dom';

/*------------------- Pages ---------------------*/
import Blog from "./pages/Blog";
import BlogView from "./pages/BlogView";
import Home from './pages/Home'



/*------------- CSS -------------*/
import './App.scss';

const App = () => (
    <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog_view" element={<BlogView />}/>
    </Routes>
);
export default App;