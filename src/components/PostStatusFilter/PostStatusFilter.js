const PostStatusFilter = (props) => {
    const {changeStatus}=props
    return (
        <div className={"btn-group"}>
            <button
                className={"btn btn-info"}
                onClick={()=>changeStatus('all')}
            >All</button>
            <button
                className={"btn btn-outline-secondary"}
                onClick={()=>changeStatus('liked')}
            >Liked</button>
        </div>
    )
}

export default PostStatusFilter