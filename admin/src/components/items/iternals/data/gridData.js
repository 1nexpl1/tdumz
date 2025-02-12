import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { fetchItems, fetchOneType, fetchTypes } from '../../../../http/ItemAPI';


export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}


function getData(){
  let items = []
  fetchItems().then(data => data.rows.map(el => {
    fetchOneType(el.chapterId).then(data => items.push({id: el.id, title: el.title, chapterId: data.name}))
  }
    ))
}

export const columns = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
    minWidth: 80,
  },

  { field: 'title', headerName: 'Название товара', flex: 1.5, minWidth: 200 },
  { field: 'chapterId', headerName: 'Раздел', flex: 1.5, minWidth: 200 },

  {
    field: 'eventCount',
    headerName: 'Описание',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'viewsPerUser',
    headerName: 'Картинки',
    headerAlign: 'left',
    align: 'left',
    flex: 3,
    minWidth: 120,
  },
];

export const rows = getData()

