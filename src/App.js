import "./App.css";
import Test from "./components/Test";
import Function from "./components/Function";
import ClassDemo from "./components/ClassDemo";
import Weather from "./components/Weather";
import Person from "./components/Person";
import RefDemo from "./components/RefDemo";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <Test />
      <Login />
      <RefDemo />
      <Function />
      <ClassDemo/>
      <Weather />
        <Person name="Morgan" email="morgan_liew@qqq.com"/>
        <Person name="Amy" email="Amy@gmail.com"/>
    </div>
  );
}


