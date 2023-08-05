import { useEffect, useState } from "react";
import { data } from "../data"
import { useParams } from "react-router-dom"
import Filter from "./Filter";
import Sort from "./Sort";

export default function Categories() {

    const {category} = useParams();

    const products = [];

    const [filterByGender, setFilterByGender] = useState([]);
    const [filterByColor, setFilterByColor] = useState([]);
    const [sortName, setSortName] = useState("");
    const [sortPrice, setSortPrice] = useState("");
    const [index, setIndex] = useState(8);
  
    data.filter(result => {
        if(filterByColor.length>0 || filterByGender.length>0){
            if(filterByColor.length>0 && filterByGender.length>0){                
                if (filterByGender.includes(result.Department) &&filterByColor.includes(result.Color)) {
                return result
                }
            }
            else {
                if (filterByGender.includes(result.Department)) {
                    return result;
                }
                if (filterByColor.includes(result.Color)) {
                    return result;
                }}
            }
        else {
            return result
        }
    }).map((element)=>{
        if(!category) {
            products.push(element);
        }
        if(element.Type===category) {
        return(
            products.push(element)   
        )}
    })

    useEffect(() => {
        if(category) {
            if(products.length > 0) {
                document.querySelector(".category-desc").innerHTML = "<span>" + category + "</span> - " + products[0].CategoryDescription;
            }
            else {
                document.querySelector(".category-desc").innerHTML = "";
            }
        }
        else {
            document.querySelector(".category-desc").innerHTML = "";
        }
    }, [category]);

    const loadMore = () => {
        setIndex(index + 8);
    }

    return (
        <div className="product-container">
            <div className="filter-box">
                <Filter filterByGender={filterByGender} setFilterByGender={setFilterByGender} filterByColor={filterByColor} setFilterByColor={setFilterByColor} />
            </div>
            <div className="items-container">
                <p className="category-desc"></p>
                <Sort setSortName={setSortName} setSortPrice={setSortPrice} />
                <p className="count">Number of products on page: {products.length}</p>
                <div className='items'>
                    {products.sort((a,b) => {
                        if(sortPrice.length > 1) {
                            return sortPrice === 'asc'?  (a.Price - b.Price): (b.Price - a.Price);
                        }
                        if(sortName.length > 1) {
                            if(sortName==="asc"){
                                if(a.Name < b.Name) return -1;
                                if(a.Name > b.Name) return 1;
                                return 0;
                            }
                            if(a.Name > b.Name) return -1;
                                if(a.Name < b.Name) return 1;
                                return 0;                    
                        }
                        }).slice(0,index).map((element)=>{
                        return(
                        <div className='item' key={element.id}>
                            <img src={element.Image} alt="Item"/>
                            <p className='name'>{element.Name}</p>
                            <p><strong>Description:</strong> {element.Description}</p>
                            <p className='price'><strong>Price: </strong> ${element.Price}</p>
                            <p className={"rating rating-"+element.Rating}><strong>Rating:</strong> </p>
                            <button onClick={(e) => {alert("Product added to cart");e.preventDefault()}}>Add to Cart</button>
                        </div>)
                        })}
                </div>
                <div className="load-more-box">
                    {index >= products.length ? "" : <button onClick={loadMore} type="button">Load More</button>}
                </div>
            </div>
        </div>
    )
}