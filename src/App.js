import './App.css';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';
import Counter from "./components/Counter";
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

const  App = () => {
  return (
    <div className="App">
      <Counter render={(count, incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}/>
      <Counter render={(count, incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount}/>)}/>
      
      <ClickCounterTwo/>
      <HoverCounterTwo age={25}/>

    </div>
  );
}

export default App;
