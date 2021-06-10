import styled from 'styled-components';

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
    width: 400px;
    height: 10%;
    margin-top: 0;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
      0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
      0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  }
  img:hover {
    height: 10%;
    border: 3px solid #d5c4a1;
    border-radius: 50%;
    content: url('https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FB68_LOL_preset_proflowers-tile-wide-mv-new.jpeg?v=c6f5ef3a8cea47e7940aeea8ac6b6e3b');
  }
`;
