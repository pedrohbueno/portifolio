
  
  export default function Carousel() {
    const items = [
        'Elastic.png',
        'PowerBI.png',
        'node.png',
        'Excel1.png',
        'Excel2.png',
      ];
    return (
      <div className="row mx-5">
        {items.map((item, index) => (
          <div className="col-sm-3" key={index}>
            <div className="card">
              <img src={`/certificados/${item}`} alt={item} className="card-img-top" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  