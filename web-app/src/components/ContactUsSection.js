import React from "react";
import styled from "styled-components";
import colours from "../styles/Colours";
import { ReactComponent as Illustration4 } from "../assets/images/Illustration4.svg";
import devices from "../styles/Devices";

const ContactUsSection = (props) => {


    return <ContactUsWrapper>
        <StyledContactUs>
            <LeftContainer>
                <h3>Feel like we've missed something?</h3>
                <p>Get in contact with us and we will do our best to support you with how you’re feeling.</p>
                <StyledButton onClick={()=>{
                    window.location.href="mailto:contact@lebanonreliefnetwork.org"
                }}>Contact Us</StyledButton>
            </LeftContainer>
            <RightContainer>
                <Illustration4 style={{height: "auto", width: "auto"}}/>
            </RightContainer>
        </StyledContactUs>
    </ContactUsWrapper>
}

const LeftContainer = styled.div`
    padding:  30px;
    flex-basis: 90%;
    @media (max-width: ${devices.mobile}) {
        padding-bottom: 0px
    }
`

const RightContainer = styled.div`
    display:flex;
    flex-basis: 10%;
    max-height:120px;
    max-width: 120px;
    align-self: center;
    margin-right: 30px;
    @media (max-width: ${devices.mobile}) {
        flex-direction: column;
        align-self: flex-end;
        margin-top: -40px;
        padding-bottom: 12px;
    }
`

const StyledContactUs = styled.div`
    width: 70%;
    background-color: ${colours.grey};
    //background-color: pink;
    display: flex;
    @media (max-width: ${devices.mobile}) {
        flex-direction: column;
        width: 100%;
        margin: 0px 12px;
    }

`;

const ContactUsWrapper = styled.div`
    margin: 29px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const StyledButton = styled.button`
    background: ${colours.darkBlue};
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.043);
    border-radius: 2px;
    border: none;

    :hover{
        background: ${colours.blue};
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 16px;

    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
`

export default ContactUsSection;