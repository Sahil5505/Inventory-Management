import { useGetDashboardMetricsQuery } from '@/state/api'
import React from 'react'


const CardPopularProducts = () => {

    const {data: DashboardMetrics, isLoading} = useGetDashboardMetricsQuery();


  return (
    <div className='row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16'>
        {isLoading ? (
            <div className='n-5'>Loading...</div>
        ) : (
            <>
            <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>
                Popular Product 
            </h3>
            </>
        )}

    </div>
  )
}

export default CardPopularProducts