import { Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div style={{ marginLeft: '180px', marginTop: '80px', padding: '20px' }}>
            <Typography 
                variant="h3" 
                gutterBottom
                sx={{
                    background: 'linear-gradient(45deg, yellow, yellowgreen, green)',
                    backgroundClip: 'text',
                    color: 'yellowgreen',
                    textShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
                }}
            >
                Welcome to MALCHA World 🎄✨
            </Typography>
        </div>
    );
};

export default Home;
