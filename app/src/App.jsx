import './global.css'
import styles from './components/App.module.css'
import {Header} from './components/Header.jsx'
import {Sidebar} from './components/Sidebar.jsx'
import {Post} from './components/Post.jsx'

export function App() {
  // author: { avatar_url: '', name: '', role: ''}
  // publishedAt: Date
  // content: string

  const posts = [
    {
      id: 1,
      author:
        {
          avatarUrl: 'https://github.com/felipprodrigues.png',
          name: 'Felipe Rodrigues',
          role: 'Web Dev'
        }
      ,
      content: [
        {
          type: 'paragraph', content: 'Fala galera'
        },
        {
          type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return'
        },
        {
          type: 'link',
          content: 'jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2023-05-23 20:00:00')
    },
    {
      id: 2,
      author:
        {
          avatarUrl: 'https://github.com/wesbos.png',
          name: 'Wes Bos',
          role: 'Fullstack Dev'
        },
      content: [
        {
          type: 'paragraph', content: 'Fala galera'
        },
        {
          type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return'
        },
        {
          type: 'link',
          content: 'jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2023-05-10 20:00:00')
    },

  ]

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={`${post.id}`}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}


