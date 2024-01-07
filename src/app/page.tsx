import Card from '@/components/Card/indext';
import Header from '@/components/Header';
import { ContainerPage } from '@/styles/page';

export default function Home() {
  const urlPath = "/posts/githubconfig";
  const gitHubGuideText = "Como instalar o git no seu computador, criar chave SSH e linkar com sua conta no github."
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
      <section className='card-section'>
        <Card url={urlPath} title="Git Hub" tags={["git", "linux"]} text={gitHubGuideText}/>
      </section>
    </ContainerPage>
  )
}
