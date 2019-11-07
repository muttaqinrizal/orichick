import React, {Component} from 'react'
import { Container, Typography } from '@material-ui/core'
import Header from '../../assets/header.png'
import CardBarang from '../../components/card-barang';
import Makanan1 from '../../assets/makanan1.png'
import CardSale from '../../components/card-sale';

class PosScreen extends Component {
    state = { 
        makanan: [
            {
                gambar : Makanan1,
                paket : "Paket 1",
                harga : "11.000"
            },
            {
                gambar : Makanan1,
                paket : "Paket 2",
                harga : "15.000"
            },
            {
                gambar : Makanan1,
                paket : "Paket 3",
                harga : "19.000"
            },
        ]
     }
    render() { 
        return ( 
        <React.Fragment>
            <Container maxWidth="xs" style={{padding:0}}>
                <div style={{
                    backgroundImage: "url(" + Header +")",
                    height:175,
                    backgroundSize:'cover'
                }}>
                    <Typography style={{
                        paddingTop:35,
                        color:'white',
                        textAlign:'center'
                    }}>Pembelian Barang</Typography>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop: -80
                }}>
                    <div style={{
                        background:'white',
                        height:100,
                        boxShadow:'0px 5px 30px rgba(41, 47, 54, 0.1)',
                        borderRadius: 6,
                        width:'80%',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        color:'#FF6B6B'
                    }}>
                        <Typography>Biaya</Typography>
                        <Typography style={{fontSize:30}}>Rp 0</Typography>
                    </div>
                </div>
                <div style={{margin: '30px 20px'}}>
                    <Typography>Barang</Typography>
                    <hr style={{border :"0.5px solid rgba(41, 47, 54, 0.15)"}}></hr>

                    {
                        this.state.makanan.map(res => {
                            return(
                                <CardBarang gambar={res.gambar} paket={res.paket} harga={res.harga}/>
                            )
                        })
                    }


                    {/* <CardBarang gambar={Makanan1} paket="Paket 1" harga="10.000"/>
                    <CardBarang gambar={Makanan1} paket="Paket 2" harga="16.000"/>
                    <CardBarang gambar={Makanan1} paket="Paket 3" harga="9.000"/> */}
                    <CardSale jumlah="10" paket="Paket 6" harga="20.000"/>
                </div>
            </Container>
        </React.Fragment> );
    }
}
 
export default PosScreen;