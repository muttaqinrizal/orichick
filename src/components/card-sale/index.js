import React from 'react'
import { Typography } from '@material-ui/core'
import Plus from '../../assets/plus.png'
import Minus from '../../assets/minus.png'

function CardSale(props){
    return(
        <React.Fragment>
            <div style={{display:'flex', justifyContent:'space-between', background:'#FFE66D', borderRadius:6}}>
                <div style={{display:'flex'}}>
                    <div style={{
                        background:'#4ECDC4',
                        borderRadius:6,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        width:56,
                        height:56,
                        color:'white'
                    }}>
                        <Typography>{props.jumlah}</Typography>
                    </div>
                    <div style={{
                        marginLeft:15,
                        marginTop:4
                    }}>
                        <Typography>{props.paket}</Typography>
                        <Typography style={{color:'#4ECDC4'}}>{props.harga}</Typography>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src={Minus}/>
                    <img src={Plus}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardSale