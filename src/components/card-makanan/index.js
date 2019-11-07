import React from 'react'
import paket1 from '../../assets/makanan1.png'
import {Container, Typography} from '@material-ui/core'

function CardMakanan (props){
    console.log(props);
    
    return(
        <React.Fragment>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom: 10,}}>
                    <div style={{display:'flex'}}>
                        <img src={props.gambar} style={{width:56, height:56}}/>
                        <div style={{display:'flex', flexDirection:'column', marginLeft: 10,}}>
                            <Typography style={{fontSize:16}}>{props.paket}</Typography>
                            <Typography style={{color:'rgba(41, 47, 54, 0.5)'}}>{props.detail}</Typography>
                            <Typography style={{color:'#4ECDC4'}}>{props.harga}</Typography>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', color:'#FF6B6B'}}>
                        <Typography style={{fontSize:26}}>{props.stok}</Typography>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default CardMakanan