import React,{Component} from 'react'
import { Container, Typography } from '@material-ui/core';
import Header from '../../assets/header.png'
import Foto from '../../assets/foto.png'
import Location from '../../assets/icons/location.png'
import Outlet from '../../assets/icons/outlet.png'
import Phone from '../../assets/icons/phone.png'
import CardProfile from '../../components/card-profile';

class ProfileScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container maxWidth="xs" style={{padding:0}}>
                    <div style={{background:'#F55F44', height:24}}></div>
                    <div style={{
                        backgroundImage: "url("+ Header +")",
                        backgroundSize:'cover',
                        height:120
                    }}></div>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        marginTop:-80
                    }}>
                        <div style={{
                            background:'white',
                            borderRadius:6,
                            height:150,
                            width:'90%',
                            boxShadow:'0px 5px 30px rgba(41, 47, 54, 0.1)',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column'
                        }}>
                            <img src={Foto}/>
                            <Typography>Anggih Nur Hidayat</Typography>
                            <Typography style={{color:'rgba(41, 47, 54, 0.5)'}}>Sedang Buka</Typography>
                        </div>
                    </div>
                    <div>
                        <CardProfile label="Outlet" ikon={Outlet} konten="Cepoko | Semarang"/>
                        <CardProfile label="Alamat Outlet" ikon={Location} konten="Jl. Raya Manyaran-Gunungpati"/>
                        <CardProfile label="Nomor HP" ikon={Phone} konten="08965768782"/>
                    </div>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default ProfileScreen;