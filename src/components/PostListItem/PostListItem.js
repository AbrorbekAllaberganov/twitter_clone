import './PostListItem.css'

import React, {Component} from 'react';

class PostListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            important: props.important,
            isLike: props.isLike
        }
        // this.onImportant = this.onImportant.bind(this)
        // this.isLikeChange = this.isLikeChange.bind(this)
    }


    // onImportant() {
    //     this.setState((important) => ({important: !this.state.important}))
    // }
    //
    // isLikeChange() {
    //     this.setState({isLike: !this.state.isLike})
    // }

    render() {
        const {label, remove, onToggleLiked, onToggleImportant} = this.props
        let classNames = 'app-list-item d-flex justify-content-between'
        if (this.props.important) {
            classNames += ' important'
        }
        if (this.props.isLike) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
            <span
                onClick={onToggleLiked}
                className={"app-list-item-label"}>
                {label}
            </span>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <button
                        type={"button"}
                        className={"btn-star btn-sm"}
                        onClick={onToggleImportant}>
                        <i className={"fa fa-star"}></i>
                    </button>
                    <button
                        type={"button"}
                        className={"btn-trash btn-sm"}
                        onClick={remove}
                    >
                        <i className={"fa fa-trash"}></i>
                    </button>

                    <i className={"fa fa-heart"}></i>
                </div>
            </div>
        );
    }
}

export default PostListItem;
