import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";
import './App.css'


import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React JS', important: true, id: 1, isLike: true},
                {label: 'That is so good', important: false, id: 2, isLike: false},
                {label: 'I need a beak . . .', important: false, id: 3, isLike: false}
            ],
            status:'all',
            search:''
        }
        this.remove = this.remove.bind(this)
        this.addPost = this.addPost.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.changeStatus = this.changeStatus.bind(this)
        this.changeSearchBody = this.changeSearchBody.bind(this)

        this.maxId = 4
    }

    componentDidMount() {
        let data=localStorage.getItem('posts')
        console.log(data)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('posts',this.state)
    }

    remove(id) {
        this.setState({data: this.state.data.filter(item => item.id !== id)})
    }

    addPost(text) {
        let posts = this.state.data
        posts.push({label: text, important: false, id: this.maxId++, isLike: false})
        this.setState({data: posts})
    }

    onToggleLiked(id) {
        let posts = this.state.data
        posts.map(post => {
            if (post.id === id)
                post.isLike = !post.isLike
        })
        this.setState({data: posts})
    }

    onToggleImportant(id) {
        let posts = this.state.data
        posts.map(post => {
            if (post.id === id)
                post.important = !post.important
        })
        this.setState({data: posts})
    }

    changeSearchBody(e){
        this.setState({search:e.target.value})
    }

    changeStatus(status) {
        this.setState({status:status})
    }



    render() {
        const likedPostsCount = this.state.data.filter(item => item.isLike).length
        const postsCount = this.state.data.length
        const {data,search,status} = this.state
        return (
            <div>
                <div className={"app"}>
                    <AppHeader
                        liked={likedPostsCount}
                        posts={postsCount}
                    />
                    <div className={"search-panel d-flex"}>
                        <SearchPanel search={search} changeSearch={this.changeSearchBody}/>
                        <PostStatusFilter changeStatus={this.changeStatus}/>
                    </div>
                    <PostList
                        posts={status === 'all' ? data : data.filter(item => item.isLike)}
                        remove={this.remove}
                        onToggleLiked={this.onToggleLiked}
                        onToggleImportant={this.onToggleImportant}
                        search={search}
                    />
                    <PostAddForm addPost={this.addPost}/>
                </div>
            </div>
        );
    }
}

export default App;
