import React, { useEffect, useMemo, useState } from "react";
import TableComponent from './components/TableComponent';
function SolicitudPedido() {

  return (
    <div className="m-12 xl:m-120">
      <div className='w-full effect-shadow-div pb-3 px-6 mt-4'>
        <p className='text-3xl font-extrabold text-center mb-6'> Solicitud de Pedido</p>
        <div class="grid  grid-cols-12 gap-4  mb-4">
          <div className='col-span-5'>
            <p className='text-lg font-bold'>Pedido</p>
            <p className=' text-sm font-medium'>Fecha de Solicitud:</p>
            <p className=' text-sm font-medium'>Fecha de entrega:</p>
            <p className=' text-sm font-medium'>Estado:</p>
          </div>
          <div className='col-span-5'>
            <p className='text-lg font-bold'>Cliente</p>
            <p className=' text-sm font-medium'>Nombre</p>
            <p className=' text-sm font-medium'>Teléfono:</p>
            <p className=' text-sm font-medium'>Dirección:</p>
          </div>
          <div className='col-span-2'>
            <p className='text-lg font-bold'>Monto a Pagar</p>
            <p className='text-5xl font-semibold text-center'>$240</p>
          </div>
        </div>

        <div className='w-3/5 mb-8' >
          <form class="">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecionar repartidor</label>
            <select id="countries" class="bg-gray border effect-shadow-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Seleccione...</option>
            </select>
          </form>
        </div>
        <div className='grid grid-flow-col justify-end gap-4'>
          <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red dark:focus:ring-red-900">Cancelar</button>
          <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red dark:focus:ring-red-900">Guardar</button>
        </div>
      </div>
      <div className=' mb-9'>
        <div class="table-container">
          <TableComponent
          />
        </div>
      </div>
    </div>

  )
}

export default SolicitudPedido