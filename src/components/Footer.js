import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-2.png';

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems='center'  flexWrap="wrap" px="40px" pt="24px">
                <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
            </Stack>
            <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px"  textAlign="center" pb="20px">Made with ❤️ by Sr Andrii</Typography>
        </Box>
    )
}

export default Footer