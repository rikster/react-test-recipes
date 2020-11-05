import React, {Fragment} from 'react'
import Hello from "./components/hello";
import Toggle from "./components/toggle";
import Card from "./components/card";

const App = () => {

    const onChange = (state) => {
        console.log(state);
    }

    const onSelect = (choice) => {
        console.log(choice);
    }

    return (
        <Fragment>
            <Hello name={'Richard'}/>
            <Toggle onChange={onChange}/>
            <br/><br/>
            <Card onSelect={onSelect}/>
        </Fragment>
    );
}

export default App;
