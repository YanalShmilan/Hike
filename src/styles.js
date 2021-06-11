import styled from "styled-components";

export const Hame = styled.div`
  text-align: center;
  font-family: Ink Free;
  h1 {
    font-family: Brush Script MT;
    /* color: dimgrey; */
  }
  img {
    grid-column: 1;
    grid-row: 1 / -1;
    align-self: center;
    width: 550px;
    height: 50%;
    margin-top: 0;
    border-radius: 10%;
    box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
      0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
      0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  }
  img:hover {
    height: 10%;
    border: 3px solid #5c623b;
    box-shadow: 0 0 20px #808952;
  }
`;
export const List = styled.div`
  /* text-align: center;*/
  font-family: Ink Free;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 450px;
  border: 1px solid #5c623b;
  margin: 10%;
  margin-left: 35%;
  box-shadow: 0 0 20px #808952;
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding: 10px;
  border-radius: 15px;
  background: linear-gradient(to top, rgb(178, 184, 131) 50%, white, 50%);
  background-size: 100% 200%;
  background-color: all 0.5s ease;

  p {
    font-family: Ink Free;
    font-size: 15px;
  }
  img {
    min-width: 200px;
    max-width: none;
    height: 200px;
  }
  &:hover {
    opacity: 0.75;
    background-position: #5c623b;
    color: #5c623b;
    border: none;
    box-shadow: 0 0 20px #707070;
  }
`;
