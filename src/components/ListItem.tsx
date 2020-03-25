import React from "react"
import { Link } from "react-router-dom"

interface IListItem {
    name: string
}

const ListItem = ({name}:IListItem) => {
    return (
        <Link to={`/${name}`} className="listItem">
            <span>{name}</span>
        </Link>
    )
}

export default ListItem