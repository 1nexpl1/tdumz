import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CustomizedDataGrid from './CustomizedDataGrid';
import CustomizedDataGridChapter from './CustomizedDataGridChapter';


export default function MainGrid({types, items}) {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Товары
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <CustomizedDataGridChapter types={types}/>
        </Grid>
        <Grid size={{ xs: 12, md:12 }}>
          <CustomizedDataGrid items={items} types={types}/>
        </Grid>
        
      </Grid>
    </Box>
  );
}
