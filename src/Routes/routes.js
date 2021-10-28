import React from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import {Auth,Chat} from 'Pages'

const  Routes = () => {
    return (
        <>
        <Switch>
            <Route exact path='/' component={Auth}/>
            <Route exact path='/chat' component={Chat}/>
        </Switch>
            
        </>
    )
}

export default  Routes; 
