import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import useStyles from './styles';
import DataTable from './dataTable'; 

import {getCategories} from '../../../store/actions/categoryAction';

const Categories = () => {
    const classes = useStyles();
    const { loading, categories, error } = useSelector((state)=> state.categories);

        // Get Products
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getCategories());
        }, [dispatch])
       

    return(
        <div className={classes.root} >
            <Hidden only="xs">
                <Sidebar />
            </Hidden>
            <main className={classes.content}>
                <div className="appbarspace" />
                <Container maxWidth="lg">
                    <Grid container direction="column" spacing="3">
                        <Grid item xs={12}>
                            <Grid container direction="row" justify="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="h2" className="contentHeading">All Categories</Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                    variant="contained"
                                    className="createButton"
                                    component={Link} to="/admin/category/create"
                                    startIcon={<AddOutlinedIcon />}
                                    >
                                        Create Category
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            {categories ? <DataTable /> : 'Empty data' }
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
export default Categories;