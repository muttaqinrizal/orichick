import React, {Component} from 'react'
import { Container, Typography, Button, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Logo from '../../assets/logo.png'
import Backdrop from '../../assets/backdrop.png'
import Pos from '../../assets/icons/pos.png'
import Analityc from '../../assets/icons/analityc.png'
import Profile from '../../assets/icons/profile.png'

class BerandaScreen extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <Container maxWidth="xs" style={{padding:0}}>
                <div style={{backgroundColor:'#F55F44', height:24}}></div>
                <div style={{backgroundColor:'#FF6B6B', padding: "17px 0px", display:'flex', justifyContent:'center', alignItems: 'center',}}>
                    <img src={Logo} style={{width:115, height:21}}/>
                </div>
                <div style={{backgroundImage:'url('+Backdrop+')', height:180, backgroundSize:'cover', display:'flex',  flexDirection:'column', alignItems: 'center', justifyContent:'center', color:'white'}}>
                    <Typography>OUTLET</Typography>
                    <Typography style={{fontSize:40}}>CEPOKO</Typography>
                    <Typography>abcd</Typography>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', marginTop:115, color:'rgba(41, 47, 54, 0.5)'}}>
                    <Typography>Hai Abdullah, sudah buka belum gerobaknya?</Typography>
                    <Typography>Yuk mulai jualan sekarang !</Typography>
                    <Button variant="contained" style={{
                        width:230,
                        background:'#4ECDC4',
                        color:'white',
                        textTransform:'capitalize',
                        marginTop:12,
                        fontSize:20
                    }}>Mulai Jualan</Button>
                </div>
                <div style={{
                    position:'fixed',
                    left:0,
                    bottom : 0,
                    width:'100%'
                }}>
                    <BottomNavigation showLabels>
                        <BottomNavigationAction label="POS" icon={<img src={Pos} style={{marginBottom:5}}/>}></BottomNavigationAction>
                        <BottomNavigationAction label="ANALITYC" icon={<img src={Analityc} style={{marginBottom:5}}/>}></BottomNavigationAction>
                        <BottomNavigationAction label="PROFILE" icon={<img src={Profile} style={{marginBottom:5}}/>}></BottomNavigationAction>
                    </BottomNavigation>
                </div>
            </Container>
        </React.Fragment> );
    }
}

const Styles ={}
 
export default BerandaScreen;