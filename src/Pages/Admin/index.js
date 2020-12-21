import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../../Components/Header/header'

import {useFirebase} from '../../Context/firebase/FirebaseContext';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

function AdminScreen() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const history = useHistory();
    const classes = useStyles();
    const {getAllMovies, removeMovie} = useFirebase();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllMovies();
            setData(res);
            setLoading(false);
        };
        fetchData();
    }, []);

    // display a loader if u want to
    return loading ? null : (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <Header/>
                <h1 style={{textAlign: 'center'}}>Admin panelė</h1>
                <button
                    onClick={() => history.push(`/admin/add`)}
                    style={{marginLeft: '300px', fontSize: '22px', borderWidth: '2px', marginBottom: '10px'}}
                >Prideti filmą
                </button>
                <br/>
                <button
                    onClick={() => history.push(`/admin/ban`)}
                    style={{marginLeft: '300px', fontSize: '22px', borderWidth: '2px', marginBottom: '10px'}}
                >Blokuoti/Atblokuoti/Užtildyti vartotojus
                </button>
                {/* Hero unit */}
                <Container className={classes.cardGrid} maxWidth='md'>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {data.map((item, index) => (
                            <Grid item key={item.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={item.poster}
                                        title='img'
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5' component='h2'>
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'
                                                onClick={() => history.push(`/admin/edit`)}
                                        >
                                            Redaguoti
                                        </Button>
                                        <Button
                                            size='small'
                                            color='primary'
                                            onClick={() => removeMovie(item.id)}
                                        >
                                            Panaikinti
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* End footer */}
        </React.Fragment>
    );
}

export default AdminScreen;