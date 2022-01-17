import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeFooter extends Component {
    
    render() {
        
        return (
            <div className='home-footer'>
               <p> &copy; 2022 By Thái Nguyễn. <a target='_blank' href='https://www.facebook.com/hthai99'> <i class="fab fa-facebook-square"> 
                 </i> &#8594;  Click here &#8592; </a> </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux: (language) =>dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
