import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import * as classes from './login.styles'
import { AuthContext } from '../core/auth'


export const LoginPage:React.FC = () => {

    const navigate = useNavigate()

    //! Guardar en el estado el valor de username y de la clave
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { setUserInfo } = React.useContext(AuthContext)

    const handleNavigation = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if(username==='admin' && password==='test') {
            setUserInfo(username)
            navigate('/list')
        } else {
            alert('User/Password not valid.....')
        }

    }

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader title='Login'/>

                <CardContent>
                    <form onSubmit={handleNavigation}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <TextField 
                                label='Name'
                                margin='normal'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />

                            <TextField
                                label='Password'
                                type='password'
                                margin='normal'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <Button type='submit' variant='contained' color='primary'>
                                Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>  
        </div>                  
    )
}
