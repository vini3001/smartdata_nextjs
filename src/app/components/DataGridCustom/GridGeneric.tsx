import { useState, useEffect } from 'react'

import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridColDef
} from '@mui/x-data-grid'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import useConfirm from '../hooks/useConfirm'
import { CustomToolbar } from './style'
import { translateColumns } from './translateColumns'

const sx = {
  height: 400,
  '& .MuiDataGrid-root' : {
     borderRadius: '10px',
     '& .MuiTypography-root': {
        fontFamily: 'Oxygen',
        color: (theme: any) => `${theme.palette.mode === 'dark' ? 'white' : '#000000'}`
     },

     '& .MuiDataGrid-columnHeader': {
       color: (theme: any) => `${theme.palette.mode === 'dark' ? 'white' : '#000000'}`
     },
  },
  '& .MuiDataGrid-overlay': {
    backgroundColor: (theme: any) => `${theme.palette.mode === 'dark' ? '#272727' : 'white'}`
  },
  '& .MuiDataGrid-cell--editing': {
    backgroundColor: 'rgb(255,215,115, 0.19)',
    color: '#828DD4',
    '& .MuiInputBase-root': {
      height: '100%',
    },
  },
  '& .MuiDataGrid-cell': {
    backgroundColor: (theme: any) => `${theme.palette.mode === 'dark' ? '#272727' : 'white'}`,
    color: '#000000',
    '& .MuiInputBase-root': {
      height: '100%',
    },
  },
  '& .MuiDataGrid-filler':  {
    backgroundColor: (theme: any) => `${theme.palette.mode === 'dark' ? '#272727' : 'white'}`,
  },
  '& .Mui-error': {
    backgroundColor: (theme: any) => `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
    color: (theme: any) => theme.palette.error.main,
  },
}

const EditToolbar = (props: any) => {
  const { setRows, setRowModesModel } = props

  const handleClick = () => {
    const id = URL.createObjectURL(new Blob([])).slice(-36) // this number is only for table control
    setRows((oldRows: any) => [...oldRows, { id, name: '', isNew: true }])
    setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'type' },
    }))
  }

  return (
    <CustomToolbar>
      <Button startIcon={<AddIcon />} sx={{boxShadow: 2, color: 'white', borderRadius: '10px', paddingInline: '10px', letterSpacing: '2%', backgroundColor: '#6f7cd1'}} onClick={handleClick}>
        Adicionar
      </Button>
    </CustomToolbar>
  )
}

export default function GridGeneric({ data, actionUpsert, actionDelete }: any) {
  const [rows, setRows] = useState(data)
  const [rowModesModel, setRowModesModel] = useState({})

  useEffect(() => {
    if (data) setRows(data)
  }, [data])

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
    const newState = rows.filter((row: any) => row.id !== id)
    setRows(newState)

    // ######### send to server #########
    actionDelete({ id })
    // ##################################

    setIdDel(null)
  }
  const [idDel, setIdDel] = useState(null)
  const [toogle, popover] = useConfirm(handleDeleteClick(idDel))

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
    console.log(newRow)
    if (newRow.type === '') return {} // doesn't let save empty values
    
    actionUpsert({
      id: newRow.isNew ? 0 : newRow.id,
      name: newRow.name
    })

    return newRow
  }

  const handleRowModesModelChange = (newRowModesModel: any) => {
    setRowModesModel(newRowModesModel)
  }

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      editable: true,
      valueParser: (value: any) => {return value !== undefined ? value.substring(0, 100) : ''},
      preProcessEditCellProps: (params: any) => {
        const hasError = params.props.value.length < 3
        return { ...params.props, error: hasError }
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Ações',
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }: any) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label='Salvar'
              style={{
                color: '#828DD4',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label='Cancelar'
              className='textPrimary'
              onClick={handleCancelClick(id)}
              style={{
                color: '#6e6e6e',
              }}
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
            onClick={event => {
              setIdDel(id)
              toogle(event.target)
            }}
            color='inherit'
          />,
        ]
      },
    },
  ]

  return (
    <>
      {popover}

      <Box sx={{ ...sx }} >
        <DataGrid
          localeText={translateColumns}
          rows={rows}
          columns={columns}
          disableColumnResize
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
    </>
  )
}