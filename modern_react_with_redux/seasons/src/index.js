import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>console.log(position), //success callback
            (err)=>console.log(err) //failed callback
        );
        return <div>dHi there!</div>
    }

}

ReactDOM.render(<App/>, document.querySelector("#root"));