import React from "react"
import styled from "styled-components"
import Circles from "../animations/Circles"

export default function CourseCard(){
    return(
        <Wrapper className="courseCard">
            <AnimationWrapper>
                <Circles/>
            </AnimationWrapper>
            <Illustration src="../images/illustrations/illustration-1.png"
            alt="illustrations"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position:relative;
    max-width:360px;
    display:grid;
    width:100%;
    height:480px;
    background: linear-gradient(180deg, #ff8570 0%, #f9504a 100%);
    border-radius:20px;
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25);
    justify-content: center;
    align-content: center;
`

const AnimationWrapper = styled.div`
    position:absolute;
    width:360px;
    overflow:hidden;
    padding-top: 30px;
    mix-blend-mode: overlay;
`

const Illustration = styled.img`
    width:300px;
`