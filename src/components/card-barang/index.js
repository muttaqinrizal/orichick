import React from 'react'
import { Typography, Button } from '@material-ui/core'
import btnPlus from '../../assets/plus.png'

function CardBarang(props){
    return(
        <React.Fragment>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                margin:'20px 0px'
            }}>
                <div style={{display:'flex'}}>
                    <img src={props.gambar}/>
                    <div style={{marginLeft:15}}>
                        <Typography>{props.paket}</Typography>
                        <Typography style={{color:'#4ECDC4'}}>Rp {props.harga}</Typography>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={btnPlus}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardBarang