import { css } from "@emotion/react";

export const sideBarContainer = css`
    width: 260px;
    min-width: 260px;
    height: 100vh;
	background-color: rgb(35, 48, 68, 1.0);
`;

export const pageListContainer = css`

h5{
    font-weight: 500;
    margin: 0;
    color: rgb(238, 238, 238);
    opacity: 0.4;
    font-size: 0.75rem;
    padding: 15px 30px ;
}

div{
    h6{
        margin: 0;
        padding: 5px 30px 5px  50px;
        font-size: 0.875rem;
        color: #fff;
        font-weight: 500;
        opacity: 0.9;

        &:hover{
            transition: all 0.3s;
            background-color: rgb(0, 0, 0, 0.1);   
        }
    }

    ul{
        list-style: none;
    }
}
`;


export const sectionContainer = css`
    width: 100%;
	height: 100vh;
`;

