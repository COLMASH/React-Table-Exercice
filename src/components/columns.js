import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'ID',
    disableFilters: true,
  },
  {
    Header: 'Comercio',
    accessor: 'Comercio',
  },
  {
    Header: 'CUIT',
    accessor: 'CUIT',
  },
  {
    Header: 'Concepto1',
    accessor: 'Concepto1',
  },
  {
    Header: 'Concepto2',
    accessor: 'Concepto2',
  },
  {
    Header: 'Concepto3',
    accessor: 'Concepto3',
  },
  {
    Header: 'Concepto4',
    accessor: 'Concepto4',
  },
  {
    Header: 'Concepto5',
    accessor: 'Concepto5',
  },
  {
    Header: 'Concepto6',
    accessor: 'Concepto6',
  },
  {
    Header: 'Balance Actual',
    accessor: 'Balance Actual',
  },
  {
    Header: 'Activo',
    accessor: 'Activo',
  },
  {
    Header: 'Ultima venta',
    accessor: 'Ultima venta',
    Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
      }
  }
]

