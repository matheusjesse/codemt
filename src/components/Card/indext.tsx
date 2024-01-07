import { CardContainer } from "./style";

export default function Card() {
    return(
        <CardContainer>
            <div className="title-card">
                <h1>GitHub</h1>
            </div>
            <div className="tags-container">
                <span className="tags">Git</span>
                <span className="tags">Linux</span>
            </div>
            <div className="innercard">
                <p className="card-text">Lorem ipsum dolor sitlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam ipsam esse nemo maiores incidunt tempore ducimus error accusamus dolores non, tempora illo ipsum sunt, eveniet id ab praesentium rerum., amet consectetur adipisicing elit. Molestiae obcaecati ipsa</p>
                <span className="link-guide">continuar lendo</span>
            </div>
        </CardContainer>
    )
}