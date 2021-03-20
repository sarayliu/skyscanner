import React from 'react'
import styled from 'styled-components'
import { useTable, useBlockLayout, useRowSelect } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-weight: bold;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build UI

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    toggleAllRowsSelected,
    prepareRow,
    state,
  } = useTable(
    {
      autoResetSelectedRows: false,
      columns,
      data,
    },
    useBlockLayout,
    useRowSelect
  )

  // Render the UI for table
  return (
    <>
      <div {...getTableProps()} className="table">
        <div className="thead">
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <div
                {...row.getRowProps({
                  onClick: e => {
                    toggleAllRowsSelected(false)
                    row.toggleRowSelected()
                    console.log('row: ' + row)
                    console.log(row)
                    console.log('state: ' + state)
                  {/*this.props.selectedRow(row)*/}
                    localStorage.setItem("myJson", row.original.PlaceId);
                  },
                  style: {
                    backgroundColor: row.isSelected ? 'green' : '',
                  },
                })}
                className="tr"
              >
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render('Cell')}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      {/*
      <pre>
        <code>
          {JSON.stringify(state, null, 2)}</code>
      </pre>
    */}
    </>
  )
}

function Places(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Airport ID',
        accessor: 'PlaceId',
      },
      {
        Header: 'Airport Name',
        accessor: 'PlaceName',
      },
      {
        Header: 'Country ID',
        accessor: 'CountryId',
      },
      {
        Header: 'Region ID',
        accessor: 'RegionId',
      },
      {
        Header: 'City ID',
        accessor: 'CityId',
      },
      {
        Header: 'Country Name',
        accessor: 'CountryName',
      },
    ],
    []
  )

  console.log('props: ' + props);
  console.log(props.places);

  const data = props.places;
  console.log('data: ' + data);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default Places