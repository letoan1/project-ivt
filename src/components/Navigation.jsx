import React, { useState } from 'react'
import {
    ShoppingOutlined,
    BarChartOutlined,
    OrderedListOutlined,
    ShoppingCartOutlined,
    SettingOutlined,
    UserOutlined,
    AppstoreTwoTone,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../constants/Router';

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation()
  const { Sider } = Layout;
  
  return (
    <Sider style={{
      overflow: 'auto',
      minHeight: 'calc(100vh - 64px)',
    }}
      width={250}
      breakpoint="lg"
      collapsedWidth="60"
      onBreakpoint={(broken) => {
        if(broken) {
          setCollapsed(true)
        } else { setCollapsed(false)}
      }}
    >
      <div className="logo"
          style={{
              height: '65px',
              lineHeight: '65px',
              margin: '4px 0 8px',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 'bold',
              borderBottom: '2px solid #fff',
              padding: '0 16px 0 24px'
          }}
      >
          <AppstoreTwoTone 
              style={{
                  fontSize: '20px',
                  margin: '2px'
              }}
          /> 
          <span className={`${collapsed?'__hide-element':'__show-element'}`}>PERFUME WORLD</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={[
          {
            key: ROUTES.DASHBOARD.path,
            icon: <BarChartOutlined />,
            label: <Link to={ROUTES.DASHBOARD.path}>Dashboard</Link>,
          },
          {
            key: ROUTES.BRAND.path,
            icon: <OrderedListOutlined />,
            label: 'Brand',
            children: [
              {
                  key: ROUTES.BRAND.sub_path.dior,
                  label: <Link to={ROUTES.BRAND.sub_path.dior}>Dior</Link>,
              },
              {
                  key: ROUTES.BRAND.sub_path.chanel,
                  label: <Link to={ROUTES.BRAND.sub_path.chanel}>Chanel</Link>,
              },
              {
                  key: ROUTES.BRAND.sub_path.gucci,
                  label: <Link to={ROUTES.BRAND.sub_path.gucci}>Gucci</Link>,
              },
              {
                  key: ROUTES.BRAND.sub_path.prada,
                  label: <Link to={ROUTES.BRAND.sub_path.prada}>Prada</Link>,
              },
              {
                  key: ROUTES.BRAND.sub_path.ysl,
                  label: <Link to={ROUTES.BRAND.sub_path.ysl}>Yves Saint Laurent</Link>,
              },
              {
                  key: ROUTES.BRAND.sub_path.versace,
                  label: <Link to={ROUTES.BRAND.sub_path.versace}>Versace</Link>,
              },
              {
                  key: ROUTES.BRAND.sub_path.other,
                  label: <Link to={ROUTES.BRAND.sub_path.other}>Other...</Link>,
              },
            ],
          },
          {
            key: ROUTES.PRODUCT.path,
            icon: <ShoppingOutlined />,
            label: <Link to={ROUTES.PRODUCT.path}>Products</Link>,
          },
          {
            key: ROUTES.ORDER.path,
            icon: <ShoppingCartOutlined />,
            label: <Link to={ROUTES.ORDER.path}>Order Management</Link>,
          },
          {
            key: ROUTES.USER.path,
            icon: <UserOutlined />,
            label: <Link to={ROUTES.USER.path}>Users</Link>,
          },
          {
            key: ROUTES.SETTING.path,
            icon: <SettingOutlined />,
            label: <Link to={ROUTES.SETTING.path}>Setting</Link>,
          },
        ]}
      />
    </Sider>
  )
}

export default Navigation