import React from 'react'
import { Typography } from '@material-ui/core'

function CardProfile(props){
    return(
        <React.Fragment>
            <div style={{
                display:"flex",
                flexDirection:'column',
                margin: '5%'
            }}>
                <div>
                    <Typography>{props.label}</Typography>
                </div>
                <div style={{
                    background:'white',
                    borderRadius:6,
                    height:60,
                    boxShadow:'0px 2px 15px rgba(41, 47, 54, 0.1)',
                    display:'flex',
                    alignItems:'center',
                    paddingLeft:'5%'
                }}>
                    <div style={{marginRight:'2%'}}>
                        <img src={props.ikon}/>
                    </div>
                    <Typography>{props.konten}</Typography>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardProfile