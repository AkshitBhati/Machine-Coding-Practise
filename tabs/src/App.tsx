import { useState } from "react"

const App = () => {
  const [currentTab ,setCurrentTab] = useState<number>(1)

  const nextTab = (num:number) => {
    setCurrentTab(num)
  }
  return <div>
    <div >
      <button style={{padding:"5px 10px", backgroundColor: currentTab === 1 ? "blue" : "", color:currentTab === 1 ? "#fff" : "#000"}} onClick={() => nextTab(1)}>Tab 1</button>
      <button style={{padding:"5px 10px", backgroundColor: currentTab === 2 ? "blue" : "", color:currentTab === 2 ? "#fff" : "#000"}} onClick={() => nextTab(2)}>Tab 2</button>
    </div>
    {currentTab === 1 && (
      <>
        <h1 >Tab 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores totam ut beatae nam sequi necessitatibus autem at unde eos voluptas cumque officia obcaecati consequatur voluptates, ab rerum voluptatem neque.</p>
      </>
    )}
    {currentTab === 2 && (
      <>
        <h1 >Tab 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores totam ut beatae nam sequi necessitatibus autem at unde eos voluptas cumque officia obcaecati consequatur voluptates, ab rerum voluptatem neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium esse autem debitis. Numquam, vel non fugiat sed necessitatibus autem deleniti architecto earum eos obcaecati consequatur! Iusto dicta architecto cupiditate.</p>
      </>
    )}
  </div>
}

export default App