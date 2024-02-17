import Card from '@/components/Card/indext';
import Header from '@/components/Header';
import { ContainerPage } from '@/styles/page';

export default function Home() {
  const urlPathGitConfig = "/posts/githubconfig";
  const gitHubGuideText = "Como instalar o git no seu computador, criar chave SSH e linkar com sua conta no github."
  const urlPathNextStyledComponents = '/posts/nextstyledcomponents';
  const StyledGuideText = "Como Iniciar um projeto Next.js com Styled-Components e TypeScript"
  const urlPathBlazorTailwind = "/posts/blazortailwind";
  const blazortailwindText = "Como Iniciar um projeto Blazor e instalar o Tailwind"

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
        <Card url={urlPathGitConfig} title="Git Hub" tags={["git", "linux"]} text={gitHubGuideText}/>
        <Card url={urlPathNextStyledComponents} title="Styled-Components" tags={["Next.js", "Styled-Components", "TypeScript"]} text={StyledGuideText}/>
        <Card url={urlPathBlazorTailwind} title="Blazor" tags={["Blazor", "TailWind"]} text={blazortailwindText}/>
      </section>
    </ContainerPage>
  )
}
