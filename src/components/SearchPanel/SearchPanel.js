import './SearchPanel.css'
const SearchPanel = (props) => {
    const {search,changeSearch}=props
    return (
        <input
            type={"text"}
            placeholder={"Search"}
            className={"form-control search-input"}
            value={search}
            onChange={changeSearch}
        />
    )
}
export default SearchPanel