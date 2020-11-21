import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer'
import About from './pages/about'
import Gallery from './pages/gallery'
import Menu from './pages/menu'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/menu" exact component={Menu} />
            </Switch>
        <Footer />
        </BrowserRouter>
    )
}
export default Routes