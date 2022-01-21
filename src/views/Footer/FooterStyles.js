import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 5px;
  background: black;
  position: fixed;
  top: 866px;
  bottom: 20px;
  width: 100%;
  height: 10px;
  // @media (max-width: 1000px) {
  //   padding: 50px 80px;
  // }
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
  // margin-left: 1px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: 6px;
  margin-left: 15px;
  margin-right: 15px;

  // @media (max-width: 1000px) {
  //   grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  // }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 2px;
  font-size: 16px;
  text-decoration: none;
  // font-weight: bold;

  &:hover {
    color: royalBlue;
    transition: 200ms ease-in;
  }
  font-size: 90%;
`;

export const Heading = styled.p`
  font-size: 10px;
  color: #fff;
  margin-bottom: 5px;
  margin-top: -12px;
  font-weight: bold;
`;
