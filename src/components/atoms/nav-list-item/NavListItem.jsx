const ListItem = ({ anchorTxt, anchorHref }, props) => {

    return (

        <li {...props}>
            <a href={anchorHref}>
                {anchorTxt}
            </a>
        </li>
    )
}

export default ListItem

