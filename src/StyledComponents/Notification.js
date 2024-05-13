import styled from "styled-components";

const Notification = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        color: #1C202B;
        font-weight: 800;
        font-size: 24px;
        span{
            width: 32px;
            height: 25px;
            background-color: #0A327B;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 5px;
            font-size: 16px;
        }
    }
    button{
        color: #5E6778;
        font-size: 16px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export default Notification
