import React from "react"

const CustomLine = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div
      style={{
        backgroundColor: '#eee',
        height: '50px',
        width: '100px',
        borderRadius: '8px',
        animation: 'loading 3s infinite',
        marginBottom: '10px'
      }}
    />

  </div>)


const Skeleton = () => {

  const lines = [];

  for (let i = 0; i < 10; i++) {
    lines.push(<CustomLine key={i} />);
  }
  return (
    <div style={{ margin: '15px' }}>
      {lines}
    </div>
  )
}

export default Skeleton

