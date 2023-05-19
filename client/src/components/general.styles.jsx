import { styled } from "styled-components";
import PawTracerLogo from '../assets/paw-tracer.png';

export const PawTracer = styled.div`
    background-image: url(${PawTracerLogo});
    background-size: cover;
    height: ${(props)=>props.height};
    width: ${(props)=>props.width};
    transform: rotate(20deg);
`