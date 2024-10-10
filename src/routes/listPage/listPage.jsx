import { listData } from '../../lib/venue_data_20';
import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/crad/Card';
import Map from '../../components/map/Map';

export default function listPage() {

    const data = listData;

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
        <Filter/>
        {data.map((item) => (  
            <Card key={item.id} item={item} />
        ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}
