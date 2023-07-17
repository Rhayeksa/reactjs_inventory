import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar";

const RemoveById = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar />
            <h1>Remove Item with ID : {id}</h1>
        </div>
    )
}

export { RemoveById };