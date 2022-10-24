import { useLoaderData } from '@remix-run/react'
import {getEars} from '~/api/ear'

import ListadoEars from '../components/listado-ears'
 
export async function loader(){
    const ears = await getEars()
    return ears.data
}

export default function ears() {
    const ears = useLoaderData()
  return (
    <>
        <ListadoEars ears={ears} />
    </>
  )
}
