import styled from 'styled-components'

const ListComponent = styled.li`
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 7px;
    cursor: pointer;
    img{
        width: 45px;
        height: 45px;

    }
    >div{
        width: 100%;
        position: relative;
        margin-left: 10px;
        .username{
            color: #1C202B;
            font-size: 16px;
            font-weight: 800;
            line-height: 20px;
        }
        .action{
            color: #5E6778;
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            margin: 0px 5px
        }
        .grupeName{
            color: #0A327B;
            font-weight: 800;
            
        }
        .post{
            color: #5E6778;
            font-size: 16px;
            font-weight: 800;
        }
        .time{
            color: #939CAD;
            font-size: 16px;
            font-weight: 500;
        }
        .userPhoto{
            position: absolute;
            right: 0px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
`;

export default ListComponent