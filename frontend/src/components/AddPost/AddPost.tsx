import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';

const AddPost = (props : any) => {
    return (
        <Dialog
            modal={false}
            onRequestClose={props.ownProps.closeModal}
            actions={([
            <RaisedButton key="addModalCancel" label="Cancel" onClick={props.ownProps.closeModal}/>,
            <RaisedButton key="addModalSubmit" label="Submit" primary={true}/>
            ])}
            open={props.openState}
            title="Adding a new post"
        >
            <TextField hintText="Enter Your Title" floatingLabelText="Title"/>
            <TextField hintText="Your Name" floatingLabelText="Author"/>
            <TextField
              hintText="Enter Your Message"
              floatingLabelText="Your Post"
              multiLine={true}
              rows={2}
            />
            <SelectField floatingLabelText="Category">
               <MenuItem value={null} primaryText="" />
               <MenuItem value={false} primaryText="No" />
               <MenuItem value={true} primaryText="Yes" />
             </SelectField>
        </Dialog>
    );
};

const mapStateToProps = (state : Object, ownProps: any) => {
    return{
        state: state,
        ownProps: ownProps
    };
};

export default connect(mapStateToProps)(AddPost);