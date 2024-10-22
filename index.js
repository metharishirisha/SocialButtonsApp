const Button = props => {
  const {name, heading} = props
  return <h1>{heading}</h1>
  return <button>{name}</button>
}

const element = (
  <div className='bgContainer'>
    
      <Button name='Comment' />
      <Button name='Like' />
      <Button name='Share' />
  
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
