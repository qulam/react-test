import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import './app.scss';

const tempArr = [{
    fName: "Joe",
    lName: "Bloggs",
    email: "example@example.com",
    age: 25,
    onlineStatus: true
}];

function App() {
    return (
        <div className="App">
            <Header/>
            <section className="main">
                <Headline
                    header="Posts"
                    desc="Click me to render posts!"
                    tempArr={tempArr}
                />
            </section>
        </div>
    );
}

export default App;
