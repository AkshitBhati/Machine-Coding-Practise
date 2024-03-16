import  { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState<number>(50);
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setCount((prevCount) => prevCount + 50);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let updatedElements: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      updatedElements.push(<div key={i}>{i + 1}</div>);
    }
    setElements(updatedElements);
  }, [count]);

  return <div>{elements}</div>;
};

export default App;
