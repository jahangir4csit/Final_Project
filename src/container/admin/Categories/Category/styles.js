import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    form: {
        margin: theme.spacing(3),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2),
        },
    },
}));