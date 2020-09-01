import React, { createContext, useEffect, useMemo } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { useInView } from "react-intersection-observer";
export const observerRefContext = createContext();

function App() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  //the same result if we use useMemo()
  // const providerValue = useMemo(() => ref, [ref]);
  useEffect(() => console.log(inView), [ref]);
  return (
    <div className="App">
      <Header inView={inView} />
      <observerRefContext.Provider value={ref}>
        <Main />
      </observerRefContext.Provider>
    </div>
  );
}

export default App;
