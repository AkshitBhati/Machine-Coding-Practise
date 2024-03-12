import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import "./App.css"
import Input from './components/Input'

const App = () => {
  const [originalData, setOriginalData] = useState([])
  const [fillteredData, setFilteredData] = useState([])
  const [searchData, setSearchData] = useState('')

  const fetchData = () => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(res => res.json())
    .then((data) => {
      setOriginalData(data.data)
      setFilteredData(data.data)
    })
  }

  const handleChange = (text) => {
    setSearchData(text)

    const filterData = fillteredData.filter((value) => value.Year.toString().includes(text) || value.Population.toString().includes(text))
    setOriginalData(filterData)
  }

  const deleteData = (index) => {
    setOriginalData((prevData) => prevData.filter((_, i) => i !== index));
  setFilteredData((prevData) => prevData.filter((_, i) => i !== index));
  }

  const handleReset = () => {
    fetchData()
  };


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='App'>
      <Input handleChange={handleChange} value={searchData} reset={handleReset}/>
      <Table data={originalData} onDelete={deleteData} />
    </div>
  )
}

export default App
