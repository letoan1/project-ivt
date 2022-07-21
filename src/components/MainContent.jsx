import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom';
import { 
    PageDashboard,
    PageCategory,
    PageOrder,
    PageProduct,
    PageSetting,
    PageUser
} from '../Pages'
import { ROUTES } from '../constants/Router';

const { Content } = Layout;

const MainContent = () => {
  return (
    <Content
        style={{
            width: '100%',
            margin: 10,
            background: '#fff'
        }}
    >
        <Switch>
            <Route 
                exact={ROUTES.DASHBOARD.exact}
                path={ROUTES.DASHBOARD.path}
            >
                <PageDashboard />
            </Route>
            <Route 
                exact={ROUTES.BRAND.exact}
                path={`${ROUTES.BRAND.path}/:brand`}
            > 
                <PageCategory />
            </Route>
            <Route  
                exact={ROUTES.PRODUCT.exact}
                path={ROUTES.PRODUCT.path}
            >
                <PageProduct />
            </Route>
            <Route  
                exact={ROUTES.ORDER.exact}
                path={ROUTES.ORDER.path}
            >
                <PageOrder />
            </Route>
            <Route  
                exact={ROUTES.USER.exact}
                path={ROUTES.USER.path}
            >
                <PageUser />
            </Route>
            <Route  
                exact={ROUTES.SETTING.exact}
                path={ROUTES.SETTING.path}
            >
                <PageSetting />
            </Route>
        </Switch>
    </Content>
  )
}

export default MainContent