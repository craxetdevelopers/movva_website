'use client'

import { Stack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'next/navigation'
import TripMap from '../components/TripMap'


const TrackTrip = () => {
    const searchParams = useSearchParams()
    const deliveryCode = searchParams?.get("code") ?? null
  return (
    <Stack bg={'#fff'} h={'100vh'}>
        <Navbar />
        <Stack>
            {deliveryCode ? <TripMap deliveryCode={deliveryCode}/> : <p>Loading...</p>}
        </Stack>
    </Stack>
  )
}

export default TrackTrip