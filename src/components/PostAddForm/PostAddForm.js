import './PostAddForm.css'


import React, {Component} from 'react';

class PostAddForm extends Component {
    constructor() {
        super();
        this.state={
            text:''
        }
        this.textHandler=this.textHandler.bind(this)
    }

    textHandler(e){
        this.setState({text:e.target.value})
    }

    render() {
        const{addPost}= this.props
        const{text}=this.state
        return (
            <div className={"bottom-panel d-flex"}>
                <input
                    className={"form-control new-post-label"}
                    type={"text"}
                    placeholder={"What are you thinking about ?"}
                    value={text}
                    onChange={this.textHandler}
                />
                <button type={"submit"}
                        className={"btn btn-outline-secondary"}
                        onClick={()=> {
                            addPost(this.state.text)
                            this.setState({text:''})
                        }}>
                    Add post
                </button>
            </div>
        );
    }
}

export default PostAddForm;
