import "./App.css";
import Test from "./components/Test";
import Function from "./components/Function";
import ClassDemo from "./components/ClassDemo";
import Weather from "./components/Weather";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Test />
      <Function />
      <ClassDemo/>
      <Weather />
        <Person name="Morgan" email="morgan_liew@qq.com"/>
        <Person name="Amy" email="Amy@gmail.com"/>
    </div>
  );
}

export default App;
