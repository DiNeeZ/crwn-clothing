import Directory from '../../components/directory/directory.component'
import categories from '../../categories.json'

const Home = () => {
  return (
    <section>
      <Directory categories={categories} />
    </section>
  )
}

export default Home