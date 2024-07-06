import { timeStamp } from "console";
import { useParams, useNavigate, useLocation } from "react-router-dom";

type RouteParams = {
    id: string;
};

export default function Products() {
    const { id = '' } = useParams<RouteParams>(); // Default to an empty string if id is undefined
    const navigate = useNavigate();
    const location = useLocation();

    const validIds = ["1", "2", "3"];
    // const goToProduct =(id:string)=>{
    //     navigate(`/products/$id`, {state:{from:'home', timestamp:Date.now()}});
    // }

    if (!validIds.includes(id)) {
        return (
            <div>
                <h2>Product Not Found</h2>
                <p>The product ID "{id}" is not valid.</p>
                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Product details</h2>
            <p>Product id is - {id}</p>
            {/* <button onClick={()=> goToProduct('1')}>Go to Product1</button>
            <button onClick={()=> goToProduct('2')}>Go to Product2</button>
            <button onClick={()=> goToProduct('3')}>Go to Product3</button> */}
            <p>Search Params: {JSON.stringify(location.state)}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque deleniti alias veritatis ipsa, hic dolores tempora iusto quos harum placeat sunt esse voluptates non a, doloremque officia, ipsum error sit!</p>
        </div>
    );
}
