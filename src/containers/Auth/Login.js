import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLogin} from '../../services/userService';
import { userLoginSuccess } from '../../store/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            isShowPassword: false,
            errMessage:''
        }
    }
    handleOnChangeUserName = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event)=>{
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async ()=>{
        this.setState({
            errMessage:''
        })
        try{
            let data = await handleLogin(this.state.username, this.state.password);
            if(data && data.errCode !== 0){
                this.setState({
                    errMessage: data.message
                })
            }
            if(data && data.errCode === 0){
                this.props.userLoginSuccess(data.user)
                console.log("login succeeds")
            }
        }catch(error){
            if(error.response){
                if(error.response.data){
                    this.setState({errMessage:error.response.data.message})
                }
            }
            // console.log(e)
            
        }
        
    }
    handleShowHidePassword = () =>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <div className='login-background'>
                 <div className='login-container'>
                    <div className='login-content row'>
                         <div className='col-12 text-login'>Login</div>
                         <div className='col-12 form-group login-input'>
                              <label>Username:</label>
                              <input type='text' className='form-control' placeholder='Enter your username' value={this.state.username} onChange={(event) => this.handleOnChangeUserName(event)}/>
                         </div>
                         <div className='col-12 form-group login-input'>
                              <label>Password:</label>
                              <div className='custom-input-password'>
                              <input type={this.state.isShowPassword ? 'text' : 'password' } className='form-control' placeholder='Enter your password'value={this.state.password} onChange={(event) => this.handleOnChangePassword(event)}/>
                              <samp onClick = {()=>{this.handleShowHidePassword()}} >
                                  
                              <i class={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                              </samp>
                              </div>
                         </div>
                         <div className='col-12' style={{color:'red'}}>
                            {this.state.errMessage}
                         </div>
                         <div className='col-12' >
                              <button className='btn-login'onClick={()=> {this.handleLogin()}} >Login</button>
                         </div>
                         <div className='col-12'>
                              <samp className='forgot-password'>Forgot your password</samp>
                         </div>
                         <div className='col-12 text-center mt-3'>
                              <samp className='text-other'>Or login with</samp>
                         </div>
                         <div className='col-12 social-login'>
                         <i className="fab fa-google-plus-g gg"></i>
                         <i class="fab fa-facebook-f fb"></i>
                         </div>
                    </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
     language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess:(userInfo)=> dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
