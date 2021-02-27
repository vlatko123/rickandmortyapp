import React from "react";
import '../Components/SearchBar.css';

const SearchBar = ({searchElement,inputHandler }) => {

    const onChangeHandler =(e) => {
        inputHandler(e)
    }

  return (
    <div className="search-bar-background">
      <form>
        <input type="search" placeholder="Search charachter" value={searchElement} onChange={onChangeHandler} />
      </form>
    </div>
  );
};

export default SearchBar;
