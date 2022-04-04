import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'
import SignIn from './routes/sign-in/sign-in.component'

const Shop = () => {
  return <h1 style={{ fontWeight: 500 }}>I am the Shop page</h1>
}

const App = () => {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
