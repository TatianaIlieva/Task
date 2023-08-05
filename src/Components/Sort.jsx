export default function Sort({setSortName, setSortPrice}) {
    
    const sortBy = (event) => {
        if (event.target.value==="sortPrice") {
            setSortName("");
            setSortPrice("asc");
        } else
        if (event.target.value==="sortPriceRev") {
            setSortName("");
            setSortPrice("desc");
        } else
        if (event.target.value==="sortName") {
            setSortPrice("");
            setSortName("asc");
        } else
        if (event.target.value==="sortNameRev") {
            setSortPrice("");
            setSortName("desc");
        }
        else {
            setSortName("");
            setSortPrice("");
        }
    }

    return (
        <>
            <select className="sort" onChange={sortBy}>
                <option value="">Sort By:</option>
                <option value="sortName">Alphabetical a-z</option>
                <option value="sortNameRev">Alphabetical z-a</option>
                <option value="sortPrice">Price ascending</option>
                <option value="sortPriceRev">Price descending</option>
            </select>
        </>
    )
}