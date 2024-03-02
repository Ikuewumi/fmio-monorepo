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
    bg: "linear-gradient(hsl(37deg 97% 70%), hsl(329deg 70% 58%))"
  },


  {
    name: "youtube",
    clr: "hsl(348deg 97% 39%)"
  }
] as const



type Social = typeof socialSvgs[number]["name"]


interface LargeCardProps {
  title: Social
  name: string
  number: number | string
  followers?: "subscribers"
  change: number
}


interface SmallCardProps {
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
    <div class="lcard">
      <h2 class="sr-only">{obj().name} Followers</h2>
      
      <div class="lcard-social">
      	<svg viewBox="0 0 24 24"><use href={`#${obj().name}`}></use></svg>
      	<strong>{props.name}</strong>
      </div>

      <div class="lcard-followers">
	<strong>{props.number}</strong>
	<span>followers</span>
      </div>

      <div class="lcard-change">
	<svg viewBox="0 0 8 4"><use href="#up"></use></svg>
	<span>{props.change} Today</span>
      </div>
    </div>

  )

}




export const Card = () => {

  return (
    <div class="card">
      <div class="card-event">
	<h3>Likes <span class="sr-only">on facebook</span></h3>
	<svg viewBox="0 0 24 24" role="presentation"><use href="#facebook"></use></svg>
      </div>
      <div class="card-numbers">
	<strong>400</strong>
	<div class="card-change">
	  <svg viewBox="0 0 8 4">
	    <title>+</title>
	    <use href="#up"></use>
	  </svg>
	  <span>303%</span>
	</div>
      </div>      



    </div>

  )


}
