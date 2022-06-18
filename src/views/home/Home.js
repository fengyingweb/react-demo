import React from 'react';
import {Outlet, Link, NavLink, useNavigate} from 'react-router-dom'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout

function Home() {
  let navigate = useNavigate(); // 编程方式导航
  const goToDemo2 = ()=> {
    navigate('/demo2?id=456')
  }
  return (
    <Layout>
      <Header>
        <span className="header-title">首页</span>
        <Link className="link-item" to="/demo1/123">to demo1</Link>
        <span className="link-item" to="/demo2?id=456" onClick={goToDemo2}>to demo2</span>
      </Header>
      <Layout>
        <Sider className="sider">
          <div><NavLink className={({ isActive })=>{return isActive ? 'active-link' : 'link-item'}} to="/reactPage">to reactPage</NavLink></div>
          <div><NavLink className={({ isActive })=>{return isActive ? 'active-link' : 'link-item'}} to="/vuePage">to vuePage</NavLink></div>
        </Sider>
        <Content>
          {/*嵌套路由是需要使用 Outlet 导出子路由*/}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
