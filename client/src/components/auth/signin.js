import React from 'react';
import { reduxForm } from 'redux-form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class Signin extends React.Component {
    handleFormSubmit({email, password}) {
        console.log(email, password);
    }

    render(){
       const { handleSubmit, fields: { email, password } } = this.props;

       return(
           <form onSubmit={this.handleFormSubmit.bind(this)}>
               <FormGroup controlId="email">
                   <ControlLabel>Email:</ControlLabel>
                   <FormControl type="email"/>
               </FormGroup>
               <FormGroup controlId="password">
                   <ControlLabel>Password:</ControlLabel>
                   <FormControl type="password"/>
               </FormGroup>
               <Button bsStyle="primary" type="submit" >
                   Sign in
               </Button>
           </form>
       );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);