import { useNavigate, useLocation } from "react-router-dom"

export default function Items() {
    const navigate = useNavigate(); 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get('filter') || '';

    //creating item array which has array of objects
    const items = [
        { id: 1, category: 'react', name: 'React' },
        { id: 2, category: 'typescript', name: 'Typescript' },
        { id: 3, category: 'react', name: 'React Router Dom' },
    ];

    //when we select it should 
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        navigate(`/items?filter=${value}`)
    }
    //filteritems 
    const filteredItems = filter
        ? items.filter(item => item.category === filter)
        : items;

    return (
        <div>
            <h1>Item List</h1>
            <select onChange={handleFilterChange} value={filter}>
                <option value="">All</option>
                <option value="react">react</option>
                <option value="typescript">typescript</option>
            </select>
            <div>
                {
                    filteredItems.map((item)=>{
                        return <div key={item.id}>{item.name}</div>
                    })
                }
                <p>{queryParams}</p>
            </div>
        </div>
    )
}

