import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';


const ListOfCategory = ({ strCategory, strCategoryDescription, strCategoryThumb }) => {
    const navigate = useNavigate(); 
    const { getScrollPosition } = useGlobalContext();

    const goToCategory = (category) => {
        getScrollPosition(window.pageXOffset);
        navigate(`/menu/${category}`); 
    };

    return (
        <div className="menu-category">
            <div onClick={() => goToCategory(strCategory)}>
                <h3>{strCategory}</h3>

              

                <FaSearch className="icon-big" style={{ marginLeft: '15rem' }} />

                <img src={strCategoryThumb} alt={strCategory} />
                <p>{strCategoryDescription.slice(0, 300)}...</p>
            </div>
        </div>
    );
};

export default ListOfCategory;
