import { Component, createMemo } from "solid-js";

interface Props {
    title: string
    platform: 'facebook' | 'twitter' | 'youtube' | 'instagram',
    followers: number | string
    change: number
}



const Card: Component<Props> = (props) => {
    const derivedProps = createMemo(() => {
        const obj = {
            "clr": `hsl(${props.change >= 0 ? '163deg,72%,41%' : '356deg,69%,56%'}`,
            "change": `/images/icon-${props.change >= 0 ? 'up' : 'down'}.svg`,
            "img": `/images/icon-${props.platform}.svg`
        }

        return obj
    })


    return (
        <div class="card"
            style={{ "--prop-clr-change": derivedProps().clr }}
        >
            <div class="f">
                <h3>{props.title}</h3>
                <img src={derivedProps().img} alt={props.platform} />
            </div>
            <div class="f">
                <strong>{props.followers}</strong>
                <div class="change">
                    <img src={derivedProps().change} alt="" />
                    <span>{Math.abs(props.change)}%</span>
                </div>
            </div>

        </div>
    )

}



export default Card
