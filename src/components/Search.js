import React from 'react'

export default function Search({handleSearch,totalNotes,totalselectedNotes}) {
  return (
    <div className='recipe'>
    Total Recipes: {totalNotes}<br/>
    Searched recipes: {totalselectedNotes}<br/>
      Search
        <input
        type="text"
        id='search'
        onChange={(event)=>handleSearch(event.target.value)}
        ></input>
    </div>
  )
}
