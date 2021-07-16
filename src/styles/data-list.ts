import styled from 'styled-components';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export const DataContainer = styled.div`
  margin: 20px;
  height: 80vh;
`;

export const FirstAddDataButtonContainerCenter = styled.div`
  margin: auto;
  width: 30vw;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
  text-align: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  margin: 20px;
  font-size: 1rem;
`;

export const DataDeleteIcon = styled(DeleteOutlineOutlinedIcon)`
  color: red;
`;

export const DataEditIcon = styled(EditOutlinedIcon)`
  color: blue;
`;
