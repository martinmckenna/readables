import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import './addPost.css';
import {addPost} from '../../actions/postsAction';
const uuidv4 = require('uuid/v4');

class AddPost extends React.Component < any,
any > {
    state = {
        selectValue: 'Category',
        authorValue: '',
        bodyValue: '',
        titleValue: '',
        selectError: true
    };
    handleChange = (event : any) => {
        this.setState({selectValue: event.target.value, selectError: false});
    }
    handleType = (query : any, updatedState : string) => {
        this.setState({
            [updatedState]: query
                .target
                .value
                .trim()
        });
    }
    handleSubmit = () => {
        // form validation then finally form submission at the end. submit form with
        // UUID
        if (this.state.selectError === true) {
            alert('fill out a category!');
        } else if (this.state.authorValue.trim() === '') {
            alert('fill out an author!');
        } else if (this.state.bodyValue.trim() === '') {
            alert('fill out a message');
        } else if (this.state.titleValue.trim() === '') {
            alert('fill out a title!');
        } else {
            this
                .props
                .boundAddPost({
                    id: uuidv4(),
                    timestamp: Date.now(),
                    title: this.state.titleValue,
                    body: this.state.bodyValue,
                    author: this.state.authorValue,
                    category: this.state.selectValue
                });
            this
                .props
                .ownProps
                .closeModal();
        }
    }
    render() {
        return (
            <Dialog
                modal={false}
                onRequestClose={this.props.ownProps.closeModal}
                actions={([ < RaisedButton key = "addModalCancel" label = "Cancel" onClick = {
                    this.props.ownProps.closeModal
                } />, < RaisedButton key = "addModalSubmit" label = "Submit" onClick = {
                    this.handleSubmit
                }
                primary = {
                    true
                } />
            ])}
                open={this.props.openState}
                title="Adding a new post">
                <form className="addPostForm">
                    <label htmlFor="title">Title</label>
                    <input
                        onChange={(e) => this.handleType(e, 'titleValue')}
                        type="text"
                        name="title"
                        id="title"/>
                    <label htmlFor="author">Author</label>
                    <input
                        onChange={(e) => this.handleType(e, 'authorValue')}
                        type="text"
                        name="author"
                        id="author"/>
                    <label htmlFor="body">Body</label>
                    <textarea
                        onChange={(e) => this.handleType(e, 'bodyValue')}
                        name="body"
                        id="body"/>
                    <label htmlFor="category">Category</label>
                    <select
                        value={this.state.selectValue}
                        onChange={e => this.handleChange(e)}
                        name="category"
                        id="category">
                        <option value="Category" disabled={true}>Category</option>
                        {this
                            .props
                            .state
                            .categories
                            .map((category : any) => {
                                return <option key={category.name} value={category.name}>{category.name}</option>;
                            })}
                    </select>
                </form>
            </Dialog>
        );
    }

}

const mapStateToProps = (state : Object, ownProps : any) => {
    return {state: state, ownProps: ownProps};
};

const mapDispatchToProps = (dispatch : any) : any => {
    return {
        boundAddPost: (data : Object) => dispatch(addPost(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);