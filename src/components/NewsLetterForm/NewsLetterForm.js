import React, { Component } from 'react';
import './NewsLetterForm.css';
class NewsLetterForm extends Component {
    submitFormHandler(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className="NewsLetterForm">
                <div className="NewsLetterForm__header">
                    <span className = "NewsLetterForm__title">Newsletter</span>
                    <p className="NewsLetterForm__desc reset-pad reset-mg">Join Thousand of Other <br /> people subscribe to our news</p>
                </div>
                <form onSubmit={this.submitFormHandler}>
                    <div>
                        <label htmlFor="newsletter__email-txt" className = "accessible-hide">Insert Mail</label>
                        <input  id = "newsletter__email-txt" name = "newsletter__email-txt"className = "appereance" type="text" placeholder="Insert Email" />
                    </div>
                    <div>
                        <button className = "NewsLetterForm__submit appereance" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default NewsLetterForm;