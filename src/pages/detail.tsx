import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


interface MemberDetailEntity {
    id: string;
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
}

const createDefaultMemberDetail = () => ({
    id: '',
    login: '',
    avatar_url: '',
    name: '',
    company: '',
    bio: ''
})

export const DetailPage:React.FC = () => {

    const [member, setMember] = React.useState<MemberDetailEntity>(createDefaultMemberDetail())

    const {id} = useParams()

    //! Carga de datos
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
            .then(response => response.json())
            .then(json => setMember(json))
    })

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        className='{classes.media}'
                        image={member.avatar_url}
                        title='Contemplative Reptile'
                    />

                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'> {member.name} </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'> {member.bio} </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Link to='/list'>
                        <Button size='small' color='primary'>
                            Back to List Page
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}