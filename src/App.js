import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/App.css'
import Home from './views/home/Home.js'
import ReactPage from './views/home/ReactPage.js'
import VuePage from './views/home/VuePage.js'
import Demo1 from './views/demo1/Demo1.js'
import Demo2 from './views/demo2/Demo2.js'
import {Provider} from 'react-redux' // 引入提供
import store from './store/store.js'

const App = ()=> {
  return (
    <Provider store={store}>
      <div className="App-wrapper">
        <Router>
          <Routes>
            {/* 首页使用精确匹配 exact 首页嵌套路由*/}
            <Route path="/" exact element={<Home />}>
              {/* {索引路由是父路由的默认子路由} */}
              <Route index element={
                <main>
                  <p>Select an index</p>
                </main>} />
              <Route path="reactPage" element={<ReactPage />} />
              <Route path="vuePage" element={<VuePage />} />
            </Route>

            <Route path="demo1/:id" element={<Demo1 />} />
            <Route path="demo2" element={<Demo2 />} />
            
            <Route
              path="*"
              element={
                <main>
                  <h2>404 Not Found</h2>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
