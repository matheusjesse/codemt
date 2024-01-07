import Card from '@/components/Card/indext';
import Header from '@/components/Header';
import { ContainerPage } from '@/styles/page';

export default function Home() {
  const urlPath = "/posts/githubconfig";
  return (
    <ContainerPage>
      <Header />
      <section>
        <h1>Tutoriais de Programação</h1>
        <p>Aqui você encontrará assuntos relacionados a <span className='highlight'>programação</span> de uma maneira <strong>fácil de entender</strong>. Temos dicas, truques, exemplos e tutoriais em profundidade <span className='highlight'>para ajudar você</span> a expandir seu conhecimento.</p>
        <hr/>
        <p>Então, dê uma olhada e aproveite para aprender. E fique ligado, porque sempre há novidades por aqui!</p>
      </section>
      <hr/>
      <section>
        <Card url={urlPath}/>
      </section>
    </ContainerPage>
  )
}
