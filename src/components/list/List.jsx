import { locationList } from '../../lib/venue_data_20';
import Card from '../locationCard/Card'
import './list.scss';

export default function List() {
  return (
    <div className='list'>
      {locationList.map((item) => (
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

