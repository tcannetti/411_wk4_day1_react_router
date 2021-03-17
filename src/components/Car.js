import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip } from "@material-ui/core"

const Car = (props) => {
    let id = props.match.params.id;
    let car = cars.find(car => car.id == id);

    return (
        <Container maxWidth='sm' className="car-container">
            <Paper className='car-paper'>
                <h1>A specific car</h1>

            </Paper>
        </Container>
    )
}

export default Car