import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../iternals/data/gridData';
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { createItem, deleteOneItem, fetchItems, fetchOneType } from '../../../http/ItemAPI';
import { data } from 'react-router-dom';

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
  const [info, setInfo] = React.useState([])
  const [typesData, setTypesData] = React.useState([])
  const [chapterId, setChapterId] = React.useState(0)
  const [photo, setPhoto] = React.useState([])
  const [selectId, setSelectId] = React.useState([])
  const [flagSelectId, setFlagSelectId] = React.useState([])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addInfo = () => {
    setInfo([...info, { title: '', text: '', number: Date.now() }])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const addPhoto = () => {
    setPhoto([...photo, { value: '', number: Date.now() }])
  }
  const removePhoto = (number) => {
    setPhoto(photo.filter(i => i.number !== number))
  }
  const changePhoto = (key, value, number) => {
    setPhoto(photo.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  function stringify(obj) {
    const replacer = [];
    for (const key in obj) {
      replacer.push(key);
    }
    return JSON.stringify(obj, replacer);
  }

  const AddItem = () => {
    let formData = new FormData()
    formData.append('title', title)
    formData.append('chapterId', chapterId)
    formData.append('description', JSON.stringify(info))
    for (let file of photo) {
      formData.append('image', file.value);
    }
    createItem(formData).then(data => handleClose())
  }

  const selectRow = (newRowSelectionModel) => {
    setSelectId(newRowSelectionModel)
    setFlagSelectId(newRowSelectionModel)
  }

  const DeleteItem = () => {
    deleteOneItem(selectId[0]).then(data => { setFlagSelectId([]) })
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавление товара
          </Typography>
          <InputLabel id="demo-select-small-label">Раздел</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={chapterId}
            label="Age"
            onChange={(e) => setChapterId(e.target.value)}
          >
            {typesData.map(el =>
              <MenuItem value={el.id}>{el.name}</MenuItem>
            )}
          </Select>
          <TextField
            sx={{ width: '100%', marginTop: '20px' }}
            label="Название"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
                  sx={{ display: 'none' }}
                  value={i.title}
                  onChange={(e) => changePhoto('value', e.target.files[0], i.number)}
                  variant="standard"
                  type='file'
                  multiple
                >
                  <Button onClick={addPhoto} sx={{ display: 'block' }} variant="contained" color="success">
                    Добавить фото
                  </Button>
                </TextField>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Button variant="raised" component="span">
                    Upload
                  </Button>
                </label>
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
          <Button sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success" onClick={AddItem}>
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
