import {Link} from 'react-router-dom'

import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo2.png'

const Navbar = () => {
    return (
        <Stack
            direction = {{xs:'column', sm: 'row', md: 'row', lg: 'row' }}

            justifyContent='space-around'
            sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} 
            px='20px'
        >
            <Link to='/'>
                <img src={Logo} alt='logo' style={{ width:'220px' , height:'auto', margin:'0 10px'}} />
            </Link>
            <Stack
                direction='row'
                gap='20px'
                fontSize='24px'
                alignItems='flex-end'
                margin='0 10px'
            >
                <Link to='/' style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}}  >Home</Link>
                <a href="#exercises" style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
            </Stack>

        </Stack>
    )
}

export default Navbar