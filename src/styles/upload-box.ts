import styled from 'styled-components';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import theme from '../theme';

type DropZoneProps = {
  isDragActive: boolean;
  hasFile: boolean;
};

export const DropZone = styled.div<DropZoneProps>`
  margin: 50px auto;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border: ${({ isDragActive, hasFile }) =>
    isDragActive || hasFile ? `2px solid ${theme.palette.secondary.main}` : `2px dashed ${theme.palette.primary.main}`};
`;

export const CloudUpload = styled(CloudUploadOutlinedIcon)`
  font-size: 6em;
`;

export const CloudDone = styled(CloudDoneOutlinedIcon)`
  font-size: 6em;
`;
