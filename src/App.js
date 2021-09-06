import "./App.css";
import Test from "./components/Test";
import Function from "./components/Function";
import ClassDemo from "./components/ClassDemo";
import Weather from "./components/Weather";
import Person from "./components/Person";
import RefDemo from "./components/RefDemo";
import Login from "./components/Login";
import Life from "./components/Life";

export default function App() {
  return (
    <div className="App">
      <Test />
      <Life/>
      <Login />
      <RefDemo />
      <Function />
      <ClassDemo/>
      <Weather />
        <Person name="Morgan" email="morgan_liew@qq.com"/>
        <Person name="Amy" email="Amy@gmail.com"/>
    </div>
  );
}


