import React from 'react'
import "./Table.css"

const Table = ({ data, onDelete }) => {
  return (
    <table>
        <thead>
            <tr>
                <td>Population</td>
                <td>Year</td>
            </tr>
        </thead>

        <tbody>
            {data.map((value, index) => (
                <tr key={index} onClick={() => onDelete(index)}>
                    <td>{value.Population}</td>
                    <td>{value.Year}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table
