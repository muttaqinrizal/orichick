import React, {Component} from 'react';
import {Container, Typography} from '@material-ui/core'
import Logo from '../../assets/logo.png'
import {Redirect} from 'react-router-dom'

class SplashScreen extends Component {
    state = { 
        redirect : false
    }

     componentDidMount(){
         setTimeout(()=>this.setState({
                 redirect: true
             }),2000
         )
     }
    render() { 
        if(this.state.redirect){
            return <Redirect to="/login"/>
        }
        return ( 
    
        <React.Fragment>
            <Container maxWidth="xs" style={styles.containerStyle}>
                <div style={styles.logoStyle}>
                    <img src={Logo}/>
                    <Typography>Ayam Goreng Masya Allah</Typography>
                </div>
            </Container>
        </React.Fragment> );
    }
}

const styles ={
    containerStyle:{
        background:'linear-gradient(28.71deg, #FF6B6B 0%, #FFE66D 222.83%)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
    logoStyle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white'
    }
}
 
export default SplashScreen