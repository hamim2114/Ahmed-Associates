import React from 'react'
import About from '../components/about/About'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

const AboutPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['about'],
    queryFn: () => axiosReq.get('/about/').then(res => res.data)
  });
  return (
    <div>
      <About aboutLoading={isLoading} aboutError={error} aboutData={data}/>
    </div>
  )
}

export default AboutPage