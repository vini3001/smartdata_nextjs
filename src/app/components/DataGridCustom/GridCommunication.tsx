import { useState, useEffect } from 'react'

import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import { trpc } from '@/lib/trpc'

const sx = {
  height: 250,
  // width: '100%',
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
    const id = URL.createObjectURL(new Blob([])).slice(-36) // this number is only for table control
    setRows((oldRows: any) => [...oldRows, { id, mediaId: '', nome: '', valor: '', isNew: true }])
    setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'nome' },
    }))
  }

  return (
    <GridToolbarContainer>
      <Button color='primary' startIcon={<AddIcon />} onClick={handleClick}>
        Adicionar Meio de Comunicacao
      </Button>
    </GridToolbarContainer>
  )
}

const GriCommunication = ({ liftMedia, setEditing, meioPessoa }: any) => {
  const [rows, setRows] = useState([])
  const [rowModesModel, setRowModesModel] = useState({})

  const { data: meioComunicacao = [] } = trpc.people.medias.useQuery()

  useEffect(() => {
    setRows(meioPessoa)
  }, [meioPessoa])

  // disable saving form if the grid is in edition mode
  useEffect(() => {
    if (Object.keys(rowModesModel).length) setEditing(true)
    else setEditing(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowModesModel])

  const handleRowEditStop = (params: any, event: any) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = id => () => {
    const newState = rows.filter(row => row.id !== id)
    setRows(newState)
    liftMedia(newState) // lift up the state here
  }

  const handleCancelClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })

    const editedRow = rows.find(row => row.id === id)
    if (editedRow.isNew) {
      setRows(rows.filter(row => row.id !== id))
    }
  }

  const processRowUpdate = newRow => {
    if (newRow.nome === '' || newRow.valor === '') return {} // doesn't let save empty values

    delete newRow.isNew

    const newState = rows.map(row => {
      if (row.id === newRow.id) {
        const chooseMedia = meioComunicacao.find(m => m.nome === newRow.nome)
        newRow.mediaId = chooseMedia.id
        return newRow
      }
      return row
    })

    setRows(newState)
    liftMedia(newState) // lift up the state here

    return newRow
  }

  const handleRowModesModelChange = newRowModesModel => {
    setRowModesModel(newRowModesModel)
  }

  const columns = [
    {
      field: 'nome',
      headerName: 'Meio',
      width: 200,
      editable: true,
      type: 'singleSelect',
      valueOptions: meioComunicacao.map(m => m.nome),
      preProcessEditCellProps: params => {
        const hasError = params.props.value.length < 3
        return { ...params.props, error: hasError }
      },
    },
    {
      field: 'valor',
      headerName: 'Valor',
      width: 500,
      editable: true,
      valueFormatter: value =>
        value.replace(/^\(?([0-9]{2})\)?[-. ]?([0-9]?[0-9]{4})[-. ]?([0-9]{4})$/, '($1) $2-$3'),
      preProcessEditCellProps: params => {
        let hasError = false

        if (
          params.otherFieldsProps.nome.value.match('AMAZON|EMAIL|TEAMS') &&
          !params.props.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
        )
          hasError = true
          if (
            params.otherFieldsProps.nome.value === 'WHATSAPP' &&
            (params.props.value.replace(/\D/g, '').length < 10 || params.props.value.replace(/\D/g, '').length > 11)
        )
          hasError = true

        if (params.props.value.length < 3) hasError = true

        return { ...params.props, error: hasError }
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acoes',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label='Salvar'
              sx={{
                color: 'primary.main',
              }}
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
      />
    </Box>
  )
}

export default GriCommunication
