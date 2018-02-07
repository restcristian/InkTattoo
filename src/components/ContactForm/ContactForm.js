import React, {Component} from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    submitHandler = (e) =>{
        e.preventDefault();
        alert('Thank You for your Message!');
    }
    render(){
        let classes = ['ContactForm'];
        if(this.props.className){
            classes.push(this.props.className);
        }

        return(
            <div className = {classes.join(' ')}>
                <form onSubmit = {this.submitHandler}>
                    <div>
                        <label htmlFor="ContactForm__fullName" className = "accessible-hide"> Full Name</label>
                        <input className = "appereance"type="text" name = "ContactForm__fullName" placeholder = "Full Name"/>
                    </div>
                    <div>
                        <label htmlFor="ContactForm__email" className = "accessible-hide"> Email</label>
                        <input className = "appereance"type="text" name = "ContactForm__email" placeholder = "Email"/>
                    </div>
                    <div>
                        <label htmlFor="ContactForm__message" className = "accessible-hide"> Message</label>
                        <textarea className = "appereance"type="text" name = "ContactForm__message" placeholder = "Message"/>
                    </div>
                    <button className = "ContactForm__submit-btn appereance"type = "submit">Message</button>
                </form>
            </div>
        );
    }
};

export default ContactForm;