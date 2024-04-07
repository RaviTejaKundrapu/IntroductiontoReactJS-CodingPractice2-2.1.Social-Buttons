const Button = props => {
  //  Write your code here.
  let {cssStyle, buttonText} = props

  return <button className={cssStyle}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='button-container'>
      <Button cssStyle='like-button-styles' buttonText='Like' />
      <Button cssStyle='comment-button-styles' buttonText='Comment' />
      <Button cssStyle='share-button-styles' buttonText='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
