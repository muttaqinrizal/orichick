import React, {Component} from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import Selfie from '../../assets/selfie.png'
import CameraIcon from '@material-ui/icons/CameraAlt'

class CameraScreen extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <Container maxWidth="xs" style={{padding: 0,}}>
                <div style={{backgroundColor:'#F55F44', height:24}}></div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center',}}>
                    <img src={Selfie} style={{marginTop:132}}/>
                    <div style={{textAlign:'center'}}>
                        <Typography style={{fontSize:20}}>Ayo Selfie!</Typography>
                        <Typography style={{color:'rgba(41, 47, 54, 0.5)'}}>Silahkan selfie dengan gerobak daganganmu sebagai bukti gerobakmu buka.</Typography>
                    </div>
                    <Button variant="outlined" style={{
                        background:'#4ECDC4',
                        color:'white',
                        width:230,
                        marginTop:20,
                        boxShadow:'0px 5px 30px rgba(41, 47, 54, 0.1)'
                    }}><CameraIcon/></Button>
                </div>
            </Container>
        </React.Fragment> );
    }
}
 
export default CameraScreen;