import { ReactNode } from 'react';
import { Row } from './Row';

type Props = {
  matrix: number[][];
};

const matrixStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

export const Matrix: React.FC<Props> = ({ matrix }) => {
  function getRows(): ReactNode {
    return matrix.map((row, index) => <Row row={row} key={index} />);
  }

  return <div style={matrixStyle}>{getRows()}</div>;
};
