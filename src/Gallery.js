import './App.css';
import {
    Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container
} from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import useStyles from "./styles"

const Gallery = () => {
    const {classes} = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (<>
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon className={classes.icon}/>
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                           image="https://source.unsplash.com/random"
                                           title="Image title"/>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="sm" color="primary">View</Button>
                                    <Button size="sm" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                Something here to give footer purpose!
            </Typography>
        </footer>
    </>);
}

export default Gallery;
