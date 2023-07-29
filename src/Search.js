import { useState } from "react";

const DEFAULT_INPUT = "";

function Search(props) {
  const handleChange = props.handleChange;
  const handleSearch = props.handleSearch
  const [search, setSearch] = useState("");
  
  const change = (e) =>{
    setSearch(e)
    handleChange(e)
  }

  return (
    <div className="search">
      <div onClick={handleSearch} className="icon-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect opacity="0.01" width="32" height="32" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.08 21.2L27.6133 25.72C27.8657 25.9704 28.0077 26.3111 28.0077 26.6667C28.0077 27.0222 27.8657 27.363 27.6133 27.6133C27.363 27.8657 27.0222 28.0077 26.6667 28.0077C26.3111 28.0077 25.9704 27.8657 25.72 27.6133L21.2 23.08C19.3366 24.5426 17.0355 25.3363 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667C25.3363 17.0355 24.5426 19.3366 23.08 21.2ZM14.6667 6.66667C10.2484 6.66667 6.66667 10.2484 6.66667 14.6667C6.66667 19.0849 10.2484 22.6667 14.6667 22.6667C19.0849 22.6667 22.6667 19.0849 22.6667 14.6667C22.6667 10.2484 19.0849 6.66667 14.6667 6.66667Z"
            fill="white"
          />
        </svg>
      </div>
      <input
        value={search}
        onChange={(e) => change(e.target.value)}
        type="search"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
export default Search;
