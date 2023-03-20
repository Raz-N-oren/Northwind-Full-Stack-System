import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import BackspaceIcon from '@mui/icons-material/Backspace';
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">

            <form>

                <Typography variant="h4">
                    Contact Us &nbsp;
                    <CallIcon color="primary" fontSize="medium" />
                </Typography>

                <TextField label="Name" variant="outlined" className="TextBox" />
                <TextField label="Email" variant="outlined" className="TextBox" />
                <TextField label="Message" variant="outlined" className="TextBox" />

                <FormControlLabel label="Send me promotional emails" control={<Checkbox />}></FormControlLabel>

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" startIcon={<SendIcon />}>Send</Button>
                    <Button color="error" type="reset" startIcon={<BackspaceIcon />}>Clear</Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default ContactUs;
