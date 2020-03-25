import React from "react"

interface IListItem {
    name: string
}

const ListItem = ({name}:IListItem) => {
    return (
        <a className="listItem" title={name} href={name}>
            <span>{name}</span>
        </a>
    )
}

export default ListItem