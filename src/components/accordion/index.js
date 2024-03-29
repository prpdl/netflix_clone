import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Header, Title, Frame, Item, Body } from './styles/accordion'

const ToggleContex = createContext(null);

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>

        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>
        {children}
    </Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>
        {children}
    </Frame>
}


Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <ToggleContex.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>
                {children}
            </Item>
        </ToggleContex.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const {toggleShow, setToggleShow} = useContext(ToggleContex);
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="close"/>
            ): (
                <img src="/images/icons/add.png" alt="Open"/>
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const {toggleShow} = useContext(ToggleContex);
    return (
        <Body className={toggleShow ? 'open' : 'close'} {...restProps}>
           {toggleShow ? <span> {children}</span>: null}
        </Body>
    )
}

