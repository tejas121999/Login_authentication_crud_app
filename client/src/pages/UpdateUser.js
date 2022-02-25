import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByIdAction, updateUserByIDAction } from '../redux/Action/postAction';
import { Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function EditUser(props) {
    let navigate = useHistory()
    const classes = useStyles();
    let dispatch = useDispatch();

    const { user } = useSelector(state => state.data)
    console.log("update", user)

    const [state, setState] = useState({
        name: '',
        street: '',
        email: '',
        phone: ''
    })

    const [error, setError] = useState('')

    let { _id } = useParams()

    const { name, street, email, phone } = state;

    useEffect(() => {
        dispatch(getUserByIdAction(_id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user])

    const onInputChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }



    const handleSubmait = (e) => {

        e.preventDefault();
        if (!name || !street || !email || !phone) {
            setError('please input all the field')
        } else {
            dispatch(updateUserByIDAction(state, _id, navigate))
            // navigate('/')
            setError('')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    update state
                </Typography>
                {error && <h3 style={{ color: 'red' }}>{error}</h3>}
                <form className={classes.form} noValidate onSubmit={handleSubmait}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name='name'
                        value={name}
                        autoComplete="name"
                        autoFocus
                        onChange={onInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name='street'
                        value={street}
                        label="Address"
                        type="street"
                        id="street"
                        autoComplete="current-street"
                        onChange={onInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name='email'
                        value={email}
                        label="Email"
                        type="email"
                        id="email"
                        autoComplete="current-street"
                        onChange={onInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name='phone'
                        value={phone}
                        label="Contact"
                        type="phone"
                        id="phone"
                        autoComplete="current-phone"
                        onChange={onInputChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        update state
                    </Button>
                </form>
            </div>

        </Container>
    );
}