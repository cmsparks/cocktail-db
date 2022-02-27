function SearchBar(props) {
  return <input className="search-bar" placeholder="Search for drinks" onChange={e => props.setSearch(e.target.value)}/>
}
export default SearchBar;
