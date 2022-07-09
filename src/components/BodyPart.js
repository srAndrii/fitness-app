import { Stack, Typography } from '@mui/material'

import { icons } from '../constants'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
 
    const body_part_name = item.split(' ').join('_')
    
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width:'270px',
                height: '280px',
                cursor: 'pointer',
                gap:'47px'   
            }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({top:1800, left:100, behavior:'smooth'})
            }}
        >
            {    // eslint-disable-next-line
                icons.map((img) => {
                    if (img.includes(body_part_name)) {
                        return <img key={item} src={img} alt="dumbbell" style={{ width: '140px', height: 'auto' }} />
                    }
                })}
            <Typography
                fontSize='24px'
                fontWeight='bold'
                color='#3a1212'
                textTransform='capitalize'
            >
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart