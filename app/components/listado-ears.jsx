import Ear from './ear'

export default function ListadoEars({ears}) {
  return (
    <div>
        <div className='ears-grid'>
          {ears.map( ear => (
              <Ear ear={ear} />
          ) )}
        </div>
    </div>
  )
}
