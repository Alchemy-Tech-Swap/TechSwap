import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 5px;
  background: black;
  position: fixed;
  top: 0px;
  bottom: 20px;
  width: 100%;
  height: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const HeaderLink = styled.a`
  color: #fff;
  margin-bottom: 2px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: royalBlue;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 10px;
  color: #fff;
  margin-bottom: 5px;
  margin-top: -10px;
  font-weight: bold;
`;
