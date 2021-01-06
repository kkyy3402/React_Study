import logo from './logo.svg';
import Hello from "./TestDatas/Hello";
import PropsTest from "./TestDatas/PropsTest";
import Wrapper from "./TestDatas/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper isSpecial={true}>

      <PropsTest name="Hello"/>  

      </Wrapper>

      
      
    </div>
  );
}


export default App;
