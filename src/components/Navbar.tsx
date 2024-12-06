import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed" style={{ background: '#fff', color: '#000' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    style={{ color: '#ff69b4', cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => navigate('/')}
                >
                    MALCHA
                </Typography>
                <div>
                    <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                    <Button color="inherit" 
                            onClick={() => navigate('/signup')}>Sign Up</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
