import React from 'react'
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import parser from 'html-react-parser';
import './PracticeAreaPage.scss'
import { axiosReq } from '../utils/axiosReq';

const practiceAreasPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['practice'],
    queryFn: () => axiosReq.get('/practice/').then(res => res.data)
  });

  return (
    <div className="practice">
      <div className="wrapper">
        {
          isLoading ? 'Loading..' : error ? 'Something went wrong!' :
            <>
              <div className="top">
                <h1>{data[0]?.title}</h1>
              </div>
              <div className="bottom">
                {parser(data[0].body)}
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default practiceAreasPage