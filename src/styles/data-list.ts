import styled from 'styled-components';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export const Container = styled.div`
  margin: 20px;
  height: 80vh;
`;

export const ContainerCenter = styled.div`
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

export const Delete = styled(DeleteOutlineOutlinedIcon)`
  color: red;
`;

export const Edit = styled(EditOutlinedIcon)`
  color: blue;
`;
