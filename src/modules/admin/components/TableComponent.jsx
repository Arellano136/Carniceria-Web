import React from 'react';

const TableComponent = () => {
  // Example data
  const data = [
    {
      corte: 'Corte 1',
      cantidad: 5,
      total: 250,
      detalles: 'Detalles del corte 1',
    },
    {
      corte: 'Corte 2',
      cantidad: 3,
      total: 180,
      detalles: 'Detalles del corte 2',
    }
  ];

  return (
    <div className="table-container mt-4">
      <div className="grid grid-flow-col bg-red text-start rounded-t-lg text-white row table-head p-2">
        <div className="col-2">Corte</div>
        <div className="col-2">Cantidad</div>
        <div className="col-2">Total</div>
        <div className="col-6">Detalles</div>
      </div>
      <div className="table-body">
        {data.map((item, index) => (
          <div key={index} className="grid grid-flow-col text-start effect-shadow-td p-3 mt-1 mb-1">
            <div className="col-2 bg-light-800">{item.corte}</div>
            <div className="col-2">{item.cantidad}</div>
            <div className="col-2">{item.total}</div>
            <div className="col-6">{item.detalles}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;