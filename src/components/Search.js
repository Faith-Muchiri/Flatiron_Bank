import React, {useState} from "react";

function Search({onSearch}) {
  const [search, setSearch] =useState("")

  function handleSearchChange(e){
    setSearch(e.target.value)
    onSearch(search)
  }

  return (
    <div className="ui large fluid icon input">
      <input
      value={search}
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
