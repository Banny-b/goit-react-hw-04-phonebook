import styled from '@emotion/styled';


export const List = styled.ul`
  margin-top: 20px;
  display: grid;
  gap: 15px;
`;

export const Elements = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameContacts = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px;
  font-size: 16px;
  border-radius: 3px;
  color: #ffffff;
  background: transparent;
  border: 0 solid;
  outline: 2px solid;
  outline-color: hsla(0, 0%, 100%, 0.5);
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.08);
  }
`;