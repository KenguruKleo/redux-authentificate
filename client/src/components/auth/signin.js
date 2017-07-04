import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import FieldInput from '../common/field_input';


class Signin extends React.Component {
    handleFormSubmit({email, password}) {
        console.log(email, password);
    }

    render(){
       const { handleSubmit, fields: { email, password } } = this.props;

       return(
           <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
               <FormGroup>
                   <ControlLabel>Email:</ControlLabel>
                   <Field name="email" component={FieldInput} type="email" value={email}/>
               </FormGroup>
               <FormGroup>
                   <ControlLabel>Password:</ControlLabel>
                   <FormControl {...password} type="password"/>
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