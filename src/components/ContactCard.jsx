import React from 'react'
import {Button ,TableContainer,TableCell,TableBody} from '@material-ui/core'


export default function ContactCard(porps) {
    return (
        <>
            <TableContainer component={Paper} style={{'marginTop':'20px'}}>
                <Table className="" aria-label="simple table">
                    <TableBody>
                            <TableCell align="right">100</TableCell>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
