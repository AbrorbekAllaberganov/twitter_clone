import './AppHeader.css'

const AppHeader=(props)=>{
    const {liked,posts}=props
    return(
        <div className={"app-header d-flex"}>
            <h1>Abrorbek Allaberganov</h1>
            <h2>{posts} posts, like {liked}</h2>
        </div>
    )
}

export default AppHeader