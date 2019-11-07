import React, {Component} from 'react';
import {Container, Typography} from '@material-ui/core'
import CardMakanan from '../../components/card-makanan';
import paket1 from '../../assets/makanan1.png'

class DaftarStok extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <Container maxWidth="xs" style={{padding: 0}}>
                <div style={{background:'#FF6B6B', height:24}}></div>
                <div>
                    <Typography style={{
                        fontSize:30,
                        textAlign:'center',
                        margin: '25px 0px',
                    }}>Daftar Stok Hari ini</Typography>
                </div>
                <div style={{margin:'20px'}}> 
                    <div style={{display:'flex',justifyContent:'space-between', fontSize:18}}>
                        <Typography>Nama Produk</Typography>
                        <Typography>Stok</Typography>
                    </div>
                    <hr style={{border:'0.5px solid rgba(41, 47, 54, 0.15)'}}></hr>
                    <CardMakanan gambar={paket1} paket="Paket 1" detail="Nasi + Dada" harga="10.000" stok="20"/>
                    <CardMakanan gambar={paket1} paket="Paket 2" detail="Nasi + Sayap" harga="18.000" stok="6"/>
                    <CardMakanan gambar={paket1} paket="Paket 3" detail="Nasi + Paha" harga="19.000" stok="8"/>
                    <CardMakanan gambar={paket1} paket="Paket 4" detail="Nasi + Kepala" harga="7.000" stok="10"/>                  
                </div>
            </Container>
        </React.Fragment> );
    }
}
 
export default DaftarStok;