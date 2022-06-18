import React from 'react';

function UserGreeting(props) {
    return <h1>С возвращением!</h1>
}

function GuesGreeting(props) {
    return <h1>Войдите, пожалуйста.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    }
    return <GuesGreeting/>
}

export default Greeting;