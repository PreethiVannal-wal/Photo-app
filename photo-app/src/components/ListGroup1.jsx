import { ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';

const ListGroup1 = ({title,id}) => {

    return(

        <ListGroupItem
            action
            href="#"
            tag="a"
        >
            <Link to = {`/album/${id}`}>{title}</Link>
        </ListGroupItem>
    )
}
export default ListGroup1;
