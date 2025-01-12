import { FaSearch } from 'react-icons/fa';

const ListOfCategory = ({ strCategory, strCategoryDescription, strCategoryThumb }) => {
    return (
        <div className="menu-category">
                <h3>{strCategory}</h3>
               
                <FaSearch className="icon-big " style={{marginLeft:'15rem'}} />


            <img src={strCategoryThumb} alt={strCategory} />
            <p>{strCategoryDescription.slice(0, 300)}...</p>


        </div>

    )
}

export default ListOfCategory