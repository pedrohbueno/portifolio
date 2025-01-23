
  
  export default function Carousel() {
    const items = [
        'elastic.png',
        'powerbi.png',
        'node.png',
        'excel1.png',
        'excel2.png',
      ];
    return (
      <div className="row mx-5">
        {items.map((item, index) => (
          <div className="col-sm-3" key={index}>
            <div className="card">
              <img src={`${item}`} alt={item}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
  