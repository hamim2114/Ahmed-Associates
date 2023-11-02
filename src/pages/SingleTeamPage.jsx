import { Link, useParams } from 'react-router-dom';
import './SingleTeamPage.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import parser from 'html-react-parser';
import { FaUser, FaTag } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Directions, Email, Phone, Place } from '@mui/icons-material';

const SingleTeamPage = () => {
  const { id } = useParams();
  const { isLoading, error, data: team } = useQuery({
    queryKey: ['single team'],
    queryFn: () => axiosReq.get(`/team/${id}`).then(res => res.data)
  });

  return (
    <div className='team-single-page'>
      <div className="wrapper">
        {
          isLoading ? 'Loading..' : error ? 'Something went wrong!' :
            !team ? <h2 style={{ padding: '5rem', color: 'gray' }}>Not Found!</h2> :
              <>
                <Stack direction={{xs: 'column', md: 'row'}} gap={{xs: '0', md: 10}} alignItems='center'>
                  <Avatar src={team?.img} sx={{ width: {xs: '120px', md: '180px'}, height: {xs: '120px', md: '180px'} }} />
                  <Stack sx={{ maxWidth: '500px',mt: {xs: '20px',md: '0'} }}>
                    <Typography sx={{fontSize: {xs: '20px', md: '25px'}, fontWeight: 'bold', color: '#6597F7' }}>{team.name}</Typography>
                    <Typography>{team.title}</Typography>
                    <hr style={{ maxWidth: '400px', opacity: '.4', marginTop: '5px' }} />
                    <Stack mt={2} gap={1}>
                      {team.phone && <Stack direction='row' alignItems='center' gap={2}><Phone sx={{ color: '#6597F7' }} /> {team.phone}</Stack>}
                      {team.email && <Stack direction='row' alignItems='center' gap={2}><Email sx={{ color: '#6597F7' }} /> {team.email}</Stack>}
                      {team.location && <Stack direction='row' alignItems='center' gap={2}><Place sx={{ color: '#6597F7' }} /> {team.location}</Stack>}
                    </Stack>
                  </Stack>
                </Stack>
                <Box sx={{
                  mt: 6
                }}>
                  {parser(team.desc)}
                </Box>
              </>
        }

      </div>

    </div>
  )
}

export default SingleTeamPage