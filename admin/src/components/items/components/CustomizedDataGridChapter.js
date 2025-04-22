import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../iternals/data/gridDataChapter';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { createType, deleteOneType } from '../../../http/ItemAPI';

export default function CustomizedDataGridChapter({ types }) {
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


    const [name, setName] = React.useState('')


    const AddChapter = () => {
        const formData = new FormData()
        formData.append('name', name)

        createType(formData).then(data => handleClose())
    }


    const [selectId, setSelectId] = React.useState([])
    const [flagSelectId, setFlagSelectId] = React.useState([])

    const selectRow = (newRowSelectionModel) => {
        setSelectId(newRowSelectionModel)
        setFlagSelectId(newRowSelectionModel)
    }

    const DeleteItem = () => {
        selectId.length !== 0 ? deleteOneType(selectId[0]).then(data => { setFlagSelectId([]) }) : alert('Не выбраны элементы для удаления!') 
        
    }

    return (
        <Box>
            <DataGrid
                checkboxSelection
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    selectRow(newRowSelectionModel);
                }}
                rowSelectionModel={flagSelectId}
                rows={types.rows}
                columns={columns}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
                initialState={{
                    pagination: { paginationModel: { pageSize: 20 } },
                }}
                pageSizeOptions={[10, 20, 50]}
                disableColumnResizey
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
                        Добавление раздела
                    </Typography>
                    <TextField
                        sx={{ width: '100%', marginTop: '20px' }}
                        label="Название"
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button onClick={AddChapter} sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success">
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
