import React, { useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './CustomTable.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

export const CustomTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    state,
    setGlobalFilter,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter,
    useSortBy, 
    usePagination
  )

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(
                column.Header==='Comercio'? column.getSortByToggleProps():
                column.Header==='CUIT'? column.getSortByToggleProps():
                column.Header==='Activo'? column.getSortByToggleProps():'')}>
                  {column.render('Header')}
                  {column.Header === 'Comercio'?
                  <span>{column.isSorted ? column.isSortedDesc ? '  🔽': '  🔼': '  ⏸'}</span>:
                  column.Header === 'CUIT'?
                  <span>{column.isSorted ? column.isSortedDesc ? '  🔽': '  🔼': '  ⏸'}</span>:
                  column.Header === 'Activo'?
                  <span>{column.isSorted ? column.isSortedDesc ? '  🔽': '  🔼': '  ⏸'}</span>:''
                  }
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
      <span>
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
      <span>
          | Ir a la página:{' '}
          <input
            data-testid="Go to page input"
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
   
        <button data-testid="First page" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button name='Anterior' onClick={() => previousPage()} disabled={!canPreviousPage}>
          Anterior
        </button>{' '}
        <button name='Siguiente' onClick={() => nextPage()} disabled={!canNextPage}>
          Siguiente
        </button>{' '}
        <button data-testid="Final page" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <select
          data-testid="Select items per page"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option data-testid="Select options" key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}