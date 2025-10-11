// Item.tsx
import React from 'react';

const itemStyle: React.CSSProperties = {
  border: '1px solid rgba(0,0,0,0.1)',
  padding: '16px',
  margin: '8px 0',
  background: 'white',
  borderRadius: '5px',
  cursor: 'grab',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  color:'black',
};

interface ItemProps {
  id: string;
}

export const Item = ({ id }: ItemProps) => {
  return <div style={itemStyle}>Item {id}</div>;
};