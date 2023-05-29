import { Post } from './Post.jsx'
import './global.css'
import styles from './components/App.module.css'
import {Header} from './components/Header.jsx'
import {Sidebar} from './components/Sidebar.jsx'

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author="Felipe Rodrigues"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
          <Post
            author="Jorge Cabron"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />

        </main>
      </div>

    </div>
  )
}


