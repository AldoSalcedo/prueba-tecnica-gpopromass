export const SelectionMenu = () => {
  const items = [
    {
      number: '1',
      title: 'Subtítulo 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      number: '2',
      title: 'Subtítulo 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        {items.map((item, index) => (
          <>
            <div
              className="col-12 col-md-auto d-flex align-items-center"
              key={index}
            >
              <div className="circle d-flex align-items-center justify-content-center">
                <span>{item.number}</span>
              </div>
            </div>
            <div className="col-12 col-md d-flex align-items-center">
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
