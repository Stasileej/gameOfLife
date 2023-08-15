import { CSSProperties } from 'react';
import lifeGameConfig from '../config/lifeGameConfig.json';

type Props = {
  row: number[];
};

const rowStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};

export const Row: React.FC<Props> = ({ row }) => {
  const { dimensions } = lifeGameConfig;

  function getSize(): number {
    return Math.min(window.innerWidth, window.innerHeight) / dimensions - 2;
  }

  function getStyle(cellValue: number): CSSProperties {
    const size = getSize();
    return {
      width: size,
      height: size,
      border: '1px solid #41414a',
      borderRadius: '45%',
      backgroundColor: cellValue ? '#d3724f' : '#545462',
    };
  }

  function getDivs() {
    return row.map((value, index) => <div style={getStyle(value)} key={index}></div>);
  }

  return <div style={rowStyle}>{getDivs()}</div>;
};
