import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';



const Section = ({ title, description, img, leftbtn, rightbtn }) => {
    return (
        <Wrap img={img}>
            <Fade>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Button>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftbtn}
                        </LeftButton>
                        {rightbtn && <RightButton>
                            {rightbtn}
                        </RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src='/images/down-arrow.svg' />
            </Button>
        </Wrap>
    )
}

let Wrap = styled.div`
width: 100vw;
height: 100vh;
/* background-image: url('/images/model-s.jpg'); */
background-image:${props => `url('/images/${props.img}')`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
`

let ItemText = styled.div`
padding-top: 10vh;
text-align: center;
`

let Button = styled.div``


let ButtonGroup = styled.div`
margin-bottom:30px;
display:flex;
@media (max-width:768px){
    flex-direction: column;
}
`



let LeftButton = styled.div`
background-color:rgba(21,26,32,0.8);
height: 40px;
width:256px;
color: white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
text-transform:uppercase;
font-size:12px;
opacity:0.85;
cursor:pointer;
margin:8px;
`



let RightButton = styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`



let DownArrow = styled.img`
margin-top:20px;
overflow:hidden;
height:40px;
animation: UpAndDown 2s linear infinite;

`

export default Section
