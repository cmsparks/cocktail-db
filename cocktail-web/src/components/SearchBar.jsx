function SearchBar(props) {
  return <input placeholder="Search for drinks" onChange={e => props.setSearch(e.target.value)}/>
}
export default SearchBar;
