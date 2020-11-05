import './components/hello'
import Hello from "./components/hello";
import Toggle from "./components/toggle";

function App() {

    const onChange = (state) => {
        console.log(state);
    }

    return (
        <Toggle onChange={onChange}/>
    );
}

export default App;
