import styled from 'styled-components';

export const StudentContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    .student-container {
        width: 90%;
        display: flex;
        margin: 0 auto;
        align-items: center;
    }

    .others-container {
       margin-left: 3rem;
    }

    .image-container {
       border: 0.1px dotted black;
       border-radius: 50%;
    }

    .plus {
        cursor:pointer;
        font-size: 40px;
        font-weight: 900;
        color: #A09FA1;
        background-color: white;
        border: 2px solid white;
    }

    .name {
        font-size: 30px;
        font-weight: 600;
        line-height: 2px;  
    }

    .rest {
        padding-left: 1rem;
    }

    
    .grades {
        padding-left: 1rem;
    }

    .preview {
        width: 70%;
        padding-left: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        color: black;
    }

    .tag {
        background-color: #EEEDEF;
        font-size: 20px;
        text-align: center;
    }

    .others {
        font-size: 13px;
        font-weight: 100;
        line-height: 9px;
    }

    img {
        width: 100%;
    }
`;