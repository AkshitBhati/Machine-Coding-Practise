import { useState } from "react"

const App = () => {
  const [page, setPage] = useState<number>(1)

  const count = 50

  let element = []

  for (let i=0; i<count; i++){
    element.push(<div key={i}>{i + 1}</div>)
  }
   
  const handlePage = (pageNum:number) => {
    setPage(pageNum)
  }

  const totalPages = count / 10
  return (
    <>
      <div>{element.slice(page * 10 - 10, page * 10)}</div>
      {totalPages && (
        <div>
          {page > 1 && <span onClick={() => handlePage(page - 1)}>prev</span>}
          {[...Array(totalPages)].map((_, i) => (
            <span onClick={() => handlePage(i)}>{i + 1}</span>
          ))}
          {page < totalPages && <span onClick={() => handlePage(page + 1)}>next</span>}
        </div>
      )}
    </>
  )
}

export default App