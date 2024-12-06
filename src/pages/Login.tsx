import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#f9f9f9"
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Email"
                variant="outlined"
                style={{ marginBottom: '20px', width: '300px' }}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                style={{ marginBottom: '20px', width: '300px' }}
            />
            <Button
                variant="contained"
                color="primary"
                style={{ width: '300px' }}
            >
                Log In
            </Button>
        </Box>
    );
};

export default Login;
