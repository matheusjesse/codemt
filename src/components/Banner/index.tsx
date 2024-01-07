import { BannerContainer } from './style'

interface propInterface  {
    title: string;
    subtitle: string;
}

export default function Banner({title, subtitle}: propInterface) {
    return(
        <BannerContainer>
            <h1 className='banner-title'>{title}</h1>
            <h2 className='banner-sub-title'>{subtitle}</h2>
        </BannerContainer>
    )
}