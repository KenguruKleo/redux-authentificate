import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import FieldInput from '../common/field_input';
import { singinUser } from '../../reducers/auth';

class Signin extends React.Component {
    handleFormSubmit({email, password}) {
        this.props.singinUser({email, password});
    }

    render(){
       const { handleSubmit } = this.props;

       return(
           <Panel>
               <h2>Sign in</h2>
               <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                   <FormGroup>
                       <ControlLabel>Email:</ControlLabel>
                       <Field name="email" component={FieldInput} type="email"/>
                   </FormGroup>
                   <FormGroup>
                       <ControlLabel>Password:</ControlLabel>
                       <Field name="password" component={FieldInput} type="password"/>
                   </FormGroup>
                   <Button bsStyle="primary" type="submit" >
                       Sign in
                   </Button>
               </form>
           </Panel>
       );
    }
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

Signin = connect( null,{ singinUser })(Signin);

export default Signin;