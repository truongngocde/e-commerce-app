import styled from 'styled-components';

// Navbar Componet
export const Container = styled.div`
    height: 60px;
`;
export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Left = styled.div`
    flex: 1;
    text-align: center;
`;
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;  
    justify-content: center;
`;
export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

export const Logo = styled.h1`
    font-weight: bold;
`;

export const SearchContainer = styled.div`
    height: 30px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-left: 25px;
`;
export const Input = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    &:focus {
        font-size: 18px;
    }
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;
`;
