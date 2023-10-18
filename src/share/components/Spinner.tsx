import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Spinner = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}

export default Spinner