import about from '~/../public/img/about.jpg'

export default function About() {
  return (
    <div className='about'>
        <div className='center'>
             <img src={about} alt="" />
             <p className='text-about'>  
                Nulla pretium condimentum felis, sit amet venenatis orci ullamcorper at. Aliquam vel suscipit ligula. 
                Donec vulputate turpis sit amet risus porta, id mollis dolor ullamcorper. Vivamus ornare sollicitudin 
                interdum. Sed pellentesque diam in leo aliquet, et gravida libero tempor. Duis diam libero, rhoncus mollis
                est eget, ullamcorper euismod ante. Aenean mattis aliquet ante, ac suscipit augue volutpat quis. Nullam 
                elit nisl, convallis in imperdiet ut, sollicitudin vitae ante. Mauris fringilla enim mi, ac feugiat magna 
                efficitur eget. Maecenas ullamcorper, purus vitae bibendum auctor, sem justo auctor massa, id imperdiet 
                risus mauris ut libero. Sed tempus neque et condimentum eleifend. Vestibulum suscipit odio a elit 
                interdum aliquet. Nam posuere maximus imperdiet. Mauris vitae scelerisque dui, non rutrum nibh. 
                Quisque porttitor ipsum nec est aliquet semper.
            </p>
        </div>        
    </div>
  )
}
