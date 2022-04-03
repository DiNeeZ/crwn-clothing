import Directory from './components/directory/directory.component'
import categories from './categories.json'

const App = () => {

  return (
    <div className='app'>
      <Directory categories={categories}/>
    </div>
  )
}

export default App
