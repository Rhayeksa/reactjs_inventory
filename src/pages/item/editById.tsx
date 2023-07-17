import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar";

const EditById = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar />
            <h1>Update Item with ID : {id}</h1>
        </div>
    )
}

export { EditById };