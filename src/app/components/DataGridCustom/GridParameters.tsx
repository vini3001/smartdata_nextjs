import { useState, useEffect } from 'react'

import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridColDef,
} from '@mui/x-data-grid'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { CustomToolbar } from './style'

const sx = {
  height: 350,
  '& .MuiDataGrid-cell--editing': {
    backgroundColor: 'rgb(255,215,115, 0.19)',
    color: '#1a3e72',
    '& .MuiInputBase-root': {
      height: '100%',
    },
  },
  '& .Mui-error': {
    backgroundColor: (theme: any) => `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
    color: (theme: any) => theme.palette.error.main,
  },
}

const EditToolbar = (props: any) => {
  const { setRows, setRowModesModel } = props

  const handleClick = () => {
    const id = URL.createObjectURL(new Blob([])).slice(-36) // Unique ID for the new row
    setRows((oldRows: any) => [
      ...(Array.isArray(oldRows) ? oldRows : []),
      { id, chave: '', valor: '', isNew: true },
    ])
    setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'chave' },
    }))
  }

  return (
    <CustomToolbar>
      <Button color='primary' startIcon={<AddIcon />} onClick={handleClick}>
        Adicionar Parâmetro
      </Button>
    </CustomToolbar>
  )
}

const GridParameters = ({ liftMedia, setEditing, parametros }: any) => {
  const [rows, setRows] = useState([])
  const [rowModesModel, setRowModesModel] = useState({})

  useEffect(() => {
    setRows(parametros)
  }, [parametros])

  // Disable saving form if the grid is in edition mode
  useEffect(() => {
    if (Object.keys(rowModesModel).length) setEditing(true)
    else setEditing(false)
  }, [rowModesModel, setEditing])

  const handleRowEditStop = (params: any, event: any) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = (id: any) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id: any) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id: any) => () => {
    const newState = rows.filter(row => row.id !== id)
    setRows(newState)
    liftMedia(newState)
  }

  const handleCancelClick = (id: any) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })

    const editedRow = rows.find((row: any) => row.id === id)
    if (editedRow.isNew) {
      setRows(rows.filter((row: any) => row.id !== id))
    }
  }

  const processRowUpdate = (newRow: any) => {
    if (newRow.chave === '' || newRow.valor === '') return {}

    delete newRow.isNew
    const newState = rows.map((row: any) => (row.id === newRow.id ? newRow : row))
    setRows(newState)
    liftMedia(newState)

    return newRow
  }

  const handleRowModesModelChange = (newRowModesModel: any) => {
    setRowModesModel(newRowModesModel)
  }

  const columns: GridColDef[] = [
    {
      field: 'chave',
      headerName: 'Chave',
      width: 300,
      editable: true,
      preProcessEditCellProps: (params: any) => {
        const hasError = params.props.value.length < 1
        return { ...params.props, error: hasError }
      },
    },
    {
      field: 'valor',
      headerName: 'Valor',
      width: 1000,
      editable: true,
      preProcessEditCellProps: (params: any) => {
        const hasError = params.props.value.length < 1
        return { ...params.props, error: hasError }
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Ações',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }: any) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label='Salvar'
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label='Cancelar'
              className='textPrimary'
              onClick={handleCancelClick(id)}
              color='inherit'
            />,
          ]
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label='Editar'
            className='textPrimary'
            onClick={handleEditClick(id)}
            color='inherit'
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label='Apagar'
            onClick={handleDeleteClick(id)}
            color='inherit'
          />,
        ]
      },
    },
  ]

  return (
    <Box sx={{ ...sx }}>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode='row'
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={err => console.log(err)}
        slots={{ toolbar: EditToolbar }}
        slotProps={{ toolbar: { setRows, setRowModesModel } }}
        hideFooter
        showToolbar
      />
    </Box>
  )
}

export default GridParameters
