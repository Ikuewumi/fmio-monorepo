import { Component, createMemo } from "solid-js";

interface Props {
    name: string
    change: number
    theme: string,
    followers: string | number
    platform: 'facebook' | 'twitter' | 'instagram' | 'youtube'
}


const LCard: Component<Props> = (props: Props) => {
    console.log(props);


    const derivedProps = createMemo(() => {
        const obj = {
            "clr": `hsl(${props.change >= 0 ? '163deg,72%,41%' : '356deg,69%,56%'}`,
            "change": `/images/icon-${props.change >= 0 ? 'up' : 'down'}.svg`,
            "img": `/images/icon-${props.platform}.svg`
        }

        return obj
    })


    return (
        <div class="lcard"
            style={{
                "--prop-theme-clr": props.theme,
                "--prop-clr-change": derivedProps().clr
            }}>
            <div class="name dflex">
                <img src={derivedProps().img} alt="facebook" />
                <span>{props.name}</span>
            </div>

            <div class="followers">
                <strong>{props.followers}</strong>
                <small>followers</small>
            </div>

            <div class="change dflex">
                <img src={derivedProps().change} alt="up" />
                {Math.abs(props.change)} Today
            </div>
        </div >
    )
}


export default LCard;
