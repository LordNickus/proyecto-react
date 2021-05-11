import React from 'react'
import {withWidth, Typography, Hidden} from '@material-ui/core'


const Oculto = (props)=>{
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.withWidth}
            </Typography>
        </div>
    )
}

export default withWidth() (Oculto)