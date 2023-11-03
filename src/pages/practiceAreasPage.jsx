import React from 'react'
import { useQuery } from '@tanstack/react-query';
import parser from 'html-react-parser';
import './PracticeAreaPage.scss'
import { axiosReq } from '../utils/axiosReq';
import { Avatar, Box, Stack, Typography } from '@mui/material';

const practiceAreasPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['legal-services'],
    queryFn: () => axiosReq.get('/legalServices/').then(res => res.data)
  });

  return (
    <div className="practice">
      <div className="wrapper">
          <div className="h1">AREAS OF LEGAL SERVICES</div>
        {
          isLoading ? 'Loading..' : error ? 'Something went wrong!' :
            <Stack direction={'row'} gap={6} flexWrap={'wrap'} justifyContent={'center'} mt={5}>
              {
                data.map((data, i) => (
                  <Stack sx={{
                    maxWidth: '300px',
                    mb: 4
                  }}>
                    <Avatar sx={{alignSelf: 'center',mb: 2, width: '80px', height: '80px', opacity: '.7'}} variant="square" src={data.img} />
                    <Typography variant='h5' sx={{fontSize: '30px', textAlign: 'center', mb: 2}}>{data.title}</Typography>
                    <Typography sx={{color: 'gray'}}>{parser(data.body)}</Typography>
                  </Stack>
                ))
              }
            </Stack>
        }
      </div>
    </div>
  )
}

export default practiceAreasPage