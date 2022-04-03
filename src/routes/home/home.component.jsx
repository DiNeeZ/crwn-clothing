import Directory from '../../components/directory/directory.component'
import categories from '../../categories.json'
import './home.styles.scss'

const Home = () => {
  return (
    <section className='home'>
      <Directory categories={categories} />
    </section>
  )
}

export default Home