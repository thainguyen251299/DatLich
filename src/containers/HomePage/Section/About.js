import React, { Component } from 'react';
import { connect } from 'react-redux';


class About extends Component {
    

    render() {
        
        return (
            <div className='section-share section-about'>
               <div className='section-about-header'> 
                    Giới thiệu về website
               </div>
               <div className='section-about-content'>
                    <div className='content-left'>
                         <iframe width="100%" height="400px" 
                         src="https://www.youtube.com/embed/e9oxsf3NWMs" 
                         title="YouTube video player" 
                         frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture" 
                         allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                         <p>
                         Ngày mình còn là sinh viên, đi học tại giảng đường đại học, có rất nhiều câu hỏi mà các thầy cô không giúp mình trả lời được, ví dụ như "Để trở thành một lập trình viên website thì cần học những gì", hay một câu hỏi đơn giản hơn, "Học công nghệ thông tin, ra trường thường làm những gì ? "...
                         </p>
                    </div>
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
