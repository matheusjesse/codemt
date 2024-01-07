import { Container } from "./style";

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (    
    <Container>
      {children}
    </Container>
      
  )
}