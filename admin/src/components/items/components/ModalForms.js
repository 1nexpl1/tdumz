import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ModalText from './ModalText';
import './style/style.css'
import { useHover } from "@uidotdev/usehooks";


const ModalForms = ({ chapterId, setChapterId, setCurrentInfoEl, typesData, currentInfoEl, openInfo, setOpenInfo, title, setTitle, addInfo, info, changeInfo, removeInfo, addPhoto, photo, changePhoto, removePhoto, AddItem, handleClose }) => {


    const handleCloseInfo = () => setOpenInfo(false)
    const [ref, hovering] = useHover()

    const styleInfo = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '25px',
        boxShadow: 24,
        p: 4,
    };

    // const openWindow = () =>{
    //     addInfo()
    //     return(
    //         <>
    //         <ModalText i={i} openInfo={openInfo} handleCloseInfo={handleCloseInfo} changeInfo={changeInfo}/>
    //         </>
    //     )
    // }


    return (
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
            <Button onClick={addInfo} sx={{ marginRight: '20px', marginTop: '10px', marginBottom: '10px' }} variant="contained" color="success">
                Добавить раздел описания
            </Button>
            <table bordercolor='#fff' border='2' style={{ borderCollapse: 'collapse', padding: '14px 6px', width: '100%' }}>
                <tr style={{ border: '2px solid #fff' }}>
                    <th style={{ padding: '14px 15px' }}>Заголовок</th>
                    <th style={{ padding: '14px 15px' }}>Описание</th>
                </tr>
                {info.map(i =>
                    <tr
                        style={{ border: '2px solid #fff' }}
                        onClick={() => {
                            setCurrentInfoEl(i)
                            setOpenInfo(true)
                        }}>
                        <td style={{ padding: '14px 15px' }}>{i.title}</td>
                        <td style={{ padding: '14px 15px' }}><div style={{ fontFamily: 'Helvetica' }} dangerouslySetInnerHTML={{ __html: i.text }} /></td>
                    </tr>
                )}

            </table>
            <Box sx =  {{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                {photo.map(i =>
                    <>
                        {i.preview ?
                            <>
                                <img ref={ref} className='photo' src={i.preview} />
                            </>
                            :
                            <TextField
                                sx = {{marginTop: '10px', width: '100px'}}
                                value={i.title}
                                onChange={(e) => {
                                    changePhoto(e.target.files[0], URL.createObjectURL(e.target.files[0]), i.number)
                                }}
                                variant="standard"
                                type='file'
                                multiple
                            >
                            </TextField>
                        }
                    </>
                )}
                <button onClick={addPhoto} className='photoAddButton'>+</button>
            </Box>
            <Button sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success" onClick={AddItem}>
                Добавить
            </Button>
            <Button sx={{ marginRight: '20px', marginTop: '10px' }} onClick={handleClose} variant="outlined" color="error">
                Отмена
            </Button>
            <Modal
                open={openInfo}
                onClose={handleCloseInfo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleInfo}>
                    <TextField
                        onChange={(e) => changeInfo('title', e.target.value, currentInfoEl.number)}
                        sx={{ width: '40ch', marginBottom: '20px' }}
                        label="Заголовок"
                        variant="outlined"
                        value={currentInfoEl.title}
                    />
                    <ReactQuill
                        value={currentInfoEl.text}
                        onChange={(e) => changeInfo('text', e, currentInfoEl.number)}
                        placeholder='Введите описание свойства'
                        theme="snow"
                    />
                    <Button sx={{ marginRight: '20px', marginTop: '10px' }} variant="contained" color="success" onClick={handleCloseInfo}>
                        Сохранить
                    </Button>
                    <Button
                        sx={{ marginTop: '10px' }}
                        onClick={() => removeInfo(currentInfoEl.number)}
                        variant="outlined"
                        color="error"
                    >
                        Удалить
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default ModalForms