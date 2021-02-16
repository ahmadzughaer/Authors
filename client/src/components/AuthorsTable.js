import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"

export default props => {
    const [authors, setAuthors] = useState([])
    const getAuthorId = author => {
        return `/${author._id}`
    }
    const editAuthorUrl = author_id => {
        return `${author_id}/edit`
    }

    useEffect( () => {
        axios.get("http://localhost:8000/api/author")
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    })
    const navigateToNewRoute = () => {
        navigate("/new");
    }
        const deleteAuthor = (authId) => {
            axios.delete('http://localhost:8000/api/author/' + authId)
                .then(res => {
                    console.log(res);
                })
        }
    
    return(
        <div className="container">
            {
                authors.length > 0 &&
                    authors.map((item, index)=> {
                        return <div key={index}>{item.name}
                        <button onClick={(e)=>{deleteAuthor(item._id)}}>
                                Delete
                        </button>
                        <button><Link to={ getAuthorId(item) }>Edit</Link></button></div>
                        
                    
                    })
            }
            <input type="button" value="Add New Author" onClick={navigateToNewRoute}/>
        </div>
    )

}

