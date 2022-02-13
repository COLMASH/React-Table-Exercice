import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'ID',
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
    disableFilters: true,
  },
  {
    Header: 'Concepto2',
    accessor: 'Concepto2',
    disableFilters: true,
  },
  {
    Header: 'Concepto3',
    accessor: 'Concepto3',
    disableFilters: true,
  },
  {
    Header: 'Concepto4',
    accessor: 'Concepto4',
    disableFilters: true,
  },
  {
    Header: 'Concepto5',
    accessor: 'Concepto5',
    disableFilters: true,
  },
  {
    Header: 'Concepto6',
    accessor: 'Concepto6',
    disableFilters: true,
  },
  {
    Header: 'Balance actual',
    accessor: 'Balance actual',
    disableFilters: true,
  },
  {
    Header: 'Activo',
    accessor: 'Activo',
  },
  {
    Header: 'Ultima venta',
    accessor: 'Ultima venta',
    disableFilters: true,
    Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
      }
  }
]

