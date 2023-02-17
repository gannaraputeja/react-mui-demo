import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import ImageCollage from "../components/ImageCollage";
import Accordion from "../components/Accordion"
import Modal from "../components/Modal"

const Tour = () => {
    return <Container sx={{width: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the workd in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
            height={325} width={600}/>
            <ImageCollage/>
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                Frequently asked questions
            </Typography>
            <Accordion/>
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <Modal />
            </BottomNavigation>
        </Paper>
    </Container>
}

export default Tour
