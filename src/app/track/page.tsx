
import { Stack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import TripMap from '../components/TripMap'


export default async function TrackTrip({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
    const {code} = await searchParams
  
    return (
      <Stack bg={'#fff'} h={'100vh'}>
        <Navbar />
        <Stack>
          {code ? <TripMap deliveryCode={code} /> : <p>Loading...</p>}
        </Stack>
      </Stack>
    )
  }