import React from 'react'

import './layout.css'


import Sidebar from '../sitebar/Sidebar'
import Routes from '../sitebar/Routes'


import { BrowserRouter, Route, Router} from 'react-router-dom'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                
                </div>

            )}/>
        </BrowserRouter>
    )
}

export default Layout
