import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const SignUp: React.FC = () => {
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
                Sign Up
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                style={{ marginBottom: '20px', width: '300px' }}
            />
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
                Sign Up
            </Button>
        </Box>
    );
};

export default SignUp;
