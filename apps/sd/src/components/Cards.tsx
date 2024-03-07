const socialSvgs = [

  {
    name: "facebook",
    clr: "hsl(208deg 92% 53%)"
  },


  {
    name: "twitter",
    clr: "hsl(203deg 89% 53%)"
  },


  {
    name: "instagram",
    clr: "hsl(329deg 70% 58%)",
    bg: "linear-gradient(90deg, hsl(37deg 97% 70%), hsl(329deg 70% 58%))"
  },


  {
    name: "youtube",
    clr: "hsl(348deg 97% 39%)"
  }
] as const


const getChangeInfo = (change:number) => {
  const svg = change > 0 ? '#up' : '#down';
  const clr = change > 0 ? 'var(--clr-green)' : 'var(--clr-red)';

  return {svg, clr}
}



type Social = typeof socialSvgs[number]["name"]


export interface LargeCardProps {
  title: Social
  name: string
  number: number | string
  followers?: "subscribers"
  change: number
}


export interface SmallCardProps {
  title: Social
  event: string
  number: number | string
  change: number
}


export const LargeCard = (props_: LargeCardProps) => {


  const props = mergeProps({
    title: "facebook",
    name: "@ryancarniato",
    number: "11k",
    followers: "followers",
    change: 99
  }, props_)

  const obj = () => socialSvgs.find(a => a.name===props.title)!;

  return (
    //@ts-ignore
    <div class="lcard" style={`--icon-clr: ${obj().clr}; --border-bg: ${obj()?.bg ?? obj().clr}`}>
      <h2 class="sr-only">{obj().name} Followers</h2>
      
      <div class="lcard-social" >
      	<svg viewBox="0 0 24 24"><use href={`#${obj().name}`}></use></svg>
      	<strong>{props.name}</strong>
      </div>

      <div class="lcard-followers">
	<strong>{props.number}</strong>
	<span>followers</span>
      </div>

      <div class="lcard-change" style={`--clr: ${getChangeInfo(props.change).clr};`}>
	<svg viewBox="0 0 8 4"><use href={getChangeInfo(props.change).svg}></use></svg>
	<span>{Math.abs(props.change)} Today</span>
      </div>
    </div>

  )

}




export const Card = (props_: SmallCardProps) => {

  const props = mergeProps({
    title: 'facebook',
    event: 'Likes',
    number: 87,
    change: 2257
  }, props_)

  const obj = () => socialSvgs.find(o => o.name === props.title)!;


  return (
    <div class="card" style={`--icon-clr: ${obj().clr};`}>
      <div class="card-event">
	<h3>{props.event} <span class="sr-only">on {props.title}</span></h3>
	<svg viewBox="0 0 24 24" role="presentation"><use href={`#${props.title}`}></use></svg>
      </div>
      <div class="card-numbers">
	<strong>{props.number}</strong>
	<div class="card-change" style={`--clr: ${getChangeInfo(props.change).clr};`}>
	  <svg viewBox="0 0 8 4"><use href={getChangeInfo(props.change).svg}></use></svg>
	  <span>{Math.abs(props.change)}%</span>
	</div>
      </div>      



    </div>

  )


}
