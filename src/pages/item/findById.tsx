import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar";

const FindById = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar />
            <h1>Get Item with ID : {id}</h1>
        </div>
    )
}

export { FindById };
