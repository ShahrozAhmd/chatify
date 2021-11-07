import React from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import {Auth,Chat} from 'Pages'
import { initialStates } from 'Context/state'
import { useStore } from 'Context/store'
const  Routes = () => {
    const {authState , dispatchAuth} = useStore();
    console.log(authState)
    return (
        <>
        <Switch>
            <Route  path='/' component={Auth}/>
            <Route exact path='/chat' component={Chat}/>
        </Switch>
            
        </>
    )
}

export default  Routes; 
