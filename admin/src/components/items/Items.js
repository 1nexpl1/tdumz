import React, { useEffect, useState } from 'react'
import AppTheme from '../AppTheme/AppTheme'
import Header from './components/Header';
import SideMenu from './components/SideMenu'

import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from './theme/customizations';
import { Box, CssBaseline, Stack, alpha } from '@mui/material';
import MainGrid from './components/MainGrid';
import { fetchItems, fetchOneType, fetchTypes } from '../../http/ItemAPI';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};


const Items = (props) => {

    const [types, setTypes] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchTypes().then(data => setTypes(data))
        fetchItems().then(data => data.rows.map(el => {
            fetchOneType(el.chapterId).then(data => setItems((items)=>[...items, {id: el.id, title: el.title, chapterId: data.name}]))
          }
          ))
    }, [])
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <SideMenu />
                <Box
                    component="main"
                    sx={(theme) => ({
                        flexGrow: 1,
                        backgroundColor: theme.vars
                            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                            : alpha(theme.palette.background.default, 1),
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 5,
                            mt: { xs: 8, md: 0 },
                        }}
                    >
                        <Header />
                        <MainGrid types={types} items={items}/>
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    )
}

export default Items