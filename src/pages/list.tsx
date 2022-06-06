import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'


interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage:React.FC = () => {

    const [members, setMembers] = React.useState<MemberEntity[]>([])

    //! Carga de datos procedentes de la API
    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/lemoncode/members`)
            .then(response => response.json())
            .then(json => setMembers(json))
    })

    return (
        <>            
            <TableContainer component={Paper}>
                <Table aria-label='list table'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='right'>Avatar</TableCell>
                            <TableCell align='right'>ID</TableCell>
                            <TableCell align='right'>Name</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            members.map(member => (
                                <TableRow key={member.login}>
                                    <TableCell>
                                        <img src={member.avatar_url} style={{width:'2rem'}} />
                                    </TableCell>

                                    <TableCell align='right'>
                                        {member.id}
                                    </TableCell>

                                    <TableCell align='right'>
                                        <Link to={generatePath('/detail/:id', {id:member.login})}>
                                            {member.login}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>  
        </>
    )
}
