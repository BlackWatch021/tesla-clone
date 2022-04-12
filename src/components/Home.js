import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                img='model-s.jpg'
                leftbtn='Custom Order'
                rightbtn='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                img='model-3.jpg'
                leftbtn='Custom Order'
                rightbtn='Existing Inventory'

            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                img='model-x.jpg'
                leftbtn='Custom Order'
                rightbtn='Existing Inventory'

            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                img='model-y.jpg'
                leftbtn='Custom Order'
                rightbtn='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels'
                description='Money-back guarantee'
                img='solar-panel.jpg'
                leftbtn='Order Now'
                rightbtn='Learn More'
            />


            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof'
                img='solar-roof.jpg'
                leftbtn='Order Now'
                rightbtn='Learn More'
            />
            <Section
                title='Accessories'
                img='accessories.jpg'
                leftbtn='Shop Now'
            />

        </Container>
    )
}

let Container = styled.div`
 height: 100%;
`

export default Home



// [
//     {
//         "id": 0,
//         "title": "Model S",
//         "description": "Order Online for Touchless Delivery",
//         "image": "model-s.jpg",
//         "range": "390",
//         "time": "1.99",
//         "topSpeed": "200",
//         "peakPower": "1,020"
//     },
//     {
//         "id": 1,
//         "title": "Model 3",
//         "description": "Order Online for Touchless Delivery",
//         "image": "model-3.jpg",
//         "range": "400",
//         "time": "2.99",
//         "topSpeed": "180",
//         "peakPower": "900"
//     },
//     {
//         "id": 2,
//         "title": "Model X",
//         "description": "Order Online for Touchless Delivery",
//         "image": "model-x.jpg",
//         "range": "350",
//         "time": "1.55",
//         "topSpeed": "150",
//         "peakPower": "1,130"
//     },
//     {
//         "id": 3,
//         "title": "Model Y",
//         "description": "Order Online for Touchless Delivery",
//         "image": "model-y.jpg",
//         "range": "410",
//         "time": "2.05",
//         "topSpeed": "190",
//         "peakPower": "1,040"
//     }
// ]