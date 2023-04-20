export const OptionsMenu = () => {
  const options = [
    { title: 'Option 1', description: 'Lorem ipsum.' },
    { title: 'Option 2', description: 'Lorem ipsum.' },
    { title: 'Option 3', description: 'Lorem ipsum.' },
  ]
  return (
    <div>
      <div className="subtitles row mt-5 text-center">
        {options.map((option, index) => (
          <div className="col-12 col-md-3" key={index}>
            <h2>{option.title}</h2>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
