import React, {Component} from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import Logo from '../../assets/logo.png'

class LoginScreen extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <Container maxWidth="xs" style={styles.containerStyle}>
                <div style={styles.displayStyle}>
                    <img src={Logo}/>
                    <form>
                        <TextField label="username" variant="outlined" fullWidth margin="normal"></TextField>
                        <TextField label="password" type="password" variant="outlined" fullWidth margin="normal"></TextField>
                    </form>
                    <Button variant="contained" style={styles.btnStyle}>Masuk</Button>
                </div>
            </Container>
        </React.Fragment> );
    }
}

const styles = {
    btnStyle:{
        background:'#FF6B6B',
        width: 230,
        color:'white',
        textTransform:'capitalize',
        marginTop: 30,
    },
    displayStyle:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }
}
 
export default LoginScreen