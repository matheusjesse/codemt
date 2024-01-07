import Link from "next/link";
import { CardContainer } from "./style";
import React from "react";

interface CardProps {
    url: string;
    title: string;
    tags: string[];
    text: string;
}

export default function Card({url, title, tags, text}: CardProps) {
    return(
        <CardContainer>
            <div className="title-card">
                <h1>{title}</h1>
            </div>
            <div className="tags-container">
                {
                    tags.map((item, index) =>  
                        <span key={index} className="tags">{item}</span>
                    )
                }
            </div>
            <div className="innercard">
                <p className="card-text">{text}</p>
                <span className="link-guide"><Link href={url}>continuar lendo</Link></span>
            </div>
        </CardContainer>
    )
}