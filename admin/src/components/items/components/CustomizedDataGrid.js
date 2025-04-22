import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../iternals/data/gridData';
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { createItem, deleteOneItem, fetchItems, fetchOneType } from '../../../http/ItemAPI';
import { data } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ModalForms from './ModalForms';


export default function CustomizedDataGrid({ items, types }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  React.useEffect(() => {
    if (types.length != 0) {
      setTypesData(types.rows)
    }
  }, [types])

  const [title, setTitle] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [info, setInfo] = React.useState([])
  const [typesData, setTypesData] = React.useState([])
  const [chapterId, setChapterId] = React.useState(0)
  const [photo, setPhoto] = React.useState([])
  const [selectId, setSelectId] = React.useState([])
  const [flagSelectId, setFlagSelectId] = React.useState([])
  const [currentInfoEl, setCurrentInfoEl] = React.useState([])



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenInfo = () => setOpenInfo(true);

  const addInfo = () => {
    let num = Date.now()
    setInfo([...info, { title: '', text: '', number: num }])
    setCurrentInfoEl({ title: '', text: '', number: num })
    handleOpenInfo()
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
    setOpenInfo(false)
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    setCurrentInfoEl({ ...currentInfoEl, [key]: value })

  }


  const addPhoto = () => {
    setPhoto([...photo, { value: '', preview: '', number: Date.now() }])
  }
  const removePhoto = (number) => {
    setPhoto(photo.filter(i => i.number !== number))
  }
  const changePhoto = (value, preview, number) => {
    setPhoto(photo.map(i => i.number === number ? { ...i, 'value': value, 'preview': preview } : i))
  }

  const AddItem = () => {
    if (!title || info.length == 0 || photo.length == 0 || !chapterId) {
      alert('Не все поля заполненны')
    } else {

      let formData = new FormData()
      formData.append('title', title)
      formData.append('chapterId', chapterId)
      formData.append('description', JSON.stringify(info))
      for (let file of photo) {
        formData.append('image', file.value);
        console.log();

      }
      createItem(formData).then(data => {
        handleClose()
        setTitle('')
        setChapterId(0)
        setPhoto([])
        setInfo([])
      })
    }
  }

  const selectRow = (newRowSelectionModel) => {
    setSelectId(newRowSelectionModel)
    setFlagSelectId(newRowSelectionModel)
  }

  const DeleteItem = () => {
    selectId.length !== 0 ? deleteOneItem(selectId[0]).then(data => { setFlagSelectId([]) }) : alert('Не выбраны элементы для удаления!')
  }

  return (
    <Box>
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          selectRow(newRowSelectionModel);
        }}
        rowSelectionModel={flagSelectId}
        rows={items}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: 'outlined',
                size: 'small',
              },
              columnInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              operatorInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: 'outlined',
                  size: 'small',
                },
              },
            },
          },
        }}
      />
      <Button onClick={handleOpen} sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success">
        Добавить
      </Button>
      <Button onClick={DeleteItem} sx={{ marginTop: '10px' }} variant="outlined" color="error">
        Удалить
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalForms chapterId={chapterId} setChapterId={setChapterId} typesData={typesData} title={title} setTitle={setTitle} addInfo={addInfo} info={info} changeInfo={changeInfo} removeInfo={removeInfo} addPhoto={addPhoto} photo={photo} changePhoto={changePhoto} removePhoto={removePhoto} AddItem={AddItem} handleClose={handleClose} openInfo={openInfo} setOpenInfo={setOpenInfo} currentInfoEl={currentInfoEl} setCurrentInfoEl={setCurrentInfoEl} />
      </Modal>
      {/* <Modal
        open={openInfo}
        onClose={handleCloseInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          123
      </Modal> */}
    </Box>
  );
}
