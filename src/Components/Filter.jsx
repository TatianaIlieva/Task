import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Filter({filterByGender, setFilterByGender, filterByColor, setFilterByColor}) {
    
    const location = useLocation();
    
    const genderFilter = (event) => {
        if (event.target.classList.contains('checked')) {
            setFilterByGender(filterByGender.filter(item => item !== event.target.value));
            event.target.classList.remove('checked');
        }        
        else {
            if (!filterByGender.includes(event.target.value)) {
                setFilterByGender(gender => [...gender, event.target.value]);
                event.target.classList.add('checked');
            }
        }
    }

    const colorFilter = (event) => {        
        if (event.target.classList.contains('checked')) {
            setFilterByColor(filterByColor.filter(item => item !== event.target.value));
            event.target.classList.remove('checked');
        }        
        else {
            if (!filterByColor.includes(event.target.value)) {
                setFilterByColor(gender => [...gender, event.target.value]);
                event.target.classList.add('checked');
            }
        }
    }
    
    useEffect(() => {
        const inputs = [...document.querySelectorAll("input")];
        inputs.forEach((a) => {
           a.classList.remove('checked');
        })
        setFilterByGender("");
        setFilterByColor("");
    }, [location])

    return (
        <>
            <h3>Filter By:</h3>
            <p><strong>Gender</strong></p>
            <form className="filter" onChange={genderFilter}>
                <div className="filter-check">
                    <input type="checkbox" id="women" value="Women's" />
                    <label htmlFor="women">Women's</label>
                </div>
                <div className="filter-check">
                    <input type="checkbox" id="men" value="Men's" />
                    <label htmlFor="men">Men's</label>
                </div>
            </form>

            <p><strong>Color</strong></p>
            <form className="filter" onChange={colorFilter}>
                <div className="filter-check">
                    <input type="checkbox" id="black" value="black"  />
                    <label htmlFor="black">Black</label>
                </div>
                <div className="filter-check">
                    <input type="checkbox" id="white" value="white" />
                    <label htmlFor="white">White</label>
                </div>
                <div className="filter-check">
                    <input type="checkbox" id="yellow" value="yellow" />
                    <label htmlFor="yellow">Yellow</label>
                </div>
                <div className="filter-check">
                    <input type="checkbox" id="green" value="green" />
                    <label htmlFor="green">Green</label>
                </div>
                <div className="filter-check">
                    <input type="checkbox" id="blue" value="blue" />
                    <label htmlFor="blue">Blue</label>
                </div>
                <div className="filter-check">
                    <input type="checkbox" id="gray" value="gray" />
                    <label htmlFor="gray">Gray</label>
                </div>
                <div className="filter-check">
                    <input type="checkbox" id="red" value="red" />
                    <label htmlFor="red">Red</label>
                </div>
            </form>
        </>
    )
}