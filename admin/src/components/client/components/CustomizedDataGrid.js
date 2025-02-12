import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../iternals/data/gridData';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

export default function CustomizedDataGrid() {

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDesc, setOpenDesc] = React.useState(false);
  const handleOpenDesc = () => setOpenDesc(true);
  const handleCloseDesc = () => setOpenDesc(false);

  const [info, setInfo] = React.useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', text: '', number: Date.now() }])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const [photo, setPhoto] = React.useState([])

  const addPhoto = () =>{
    setPhoto([...photo, {value: '', number: Date.now() }])
  }
  const removePhoto = (number) => {
    setPhoto(photo.filter(i => i.number !== number))
  }
  const changePhoto = (key, value, number) => {
    setPhoto(photo.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  

  return (
    <Box>
      <DataGrid
        checkboxSelection
        rows={rows}
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
      <Button sx={{ marginTop: '10px' }} variant="outlined" color="error">
        Удалить
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавление товара
          </Typography>
          <TextField
            sx={{ width: '100%', marginTop: '20px' }}
            label="Название"
            variant="standard"
          />
          <Button onClick={addInfo} sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success">
            Добавить раздел описания
          </Button>

          {info.map(i =>
            <>
                <TextField
                  sx={{ width: '100%', marginTop: '30px' }}
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  label="Введите название свойства"
                  variant="standard"
                />
                <TextField
                  sx={{ width: '100%', marginTop: '20px' }}
                  value={i.description}
                  onChange={(e) => changeInfo('text', e.target.value, i.number)}
                  label="Введите описание свойства"
                  variant="standard"
                />
                <Button
                  sx={{ marginRight: '20px', marginTop: '10px' }}
                  onClick={() => removeInfo(i.number)}
                  variant="outlined"
                  color="error"
                >
                  Удалить
                </Button>
            </>
          )}

          <Box>

          <Button onClick={addPhoto} sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success">
            Добавить фото
          </Button>

          {photo.map(i =>
            <>
                <TextField
                  sx={{ width: '65%', marginTop: '20px', marginRight: '5%' }}
                  value={i.title}
                  onChange={(e) => changePhoto('value', e.target.files[0], i.number)}
                  variant="standard"                 
                  type='file'
                />
                <Button
                  sx={{ marginTop: '20px' }}
                  onClick={() => removePhoto(i.number)}
                  variant="outlined"
                  color="error"
                >
                  Удалить
                </Button>
            </>
          )}
          </Box>
          <Button sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success" >
            Добавить
          </Button>
          <Button sx={{ marginRight: '20px', marginTop: '10px' }} onClick={handleClose} variant="outlined" color="error">
            Отмена
          </Button>
          
        </Box>
      </Modal>
    </Box>
  );
}
