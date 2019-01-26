import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const About = (props) => (
  <Layout>
    <Img fluid={props.data.image.childImageSharp.fluid} style={imageStyle} />
    <h2>Hi, I'm Nathan</h2>
      <p>
        I'd like to think that I'm a <em>developer</em>, <em>adventurer</em>, and <em>photographer</em> among other things, but realistically I'm just a guy with too many hobbies and too little time. I guess that would make me a <em>hobbyist</em>? Whatever the case, I get to spend time doing the things I love each and every day, and in the end, <em>that's</em> the important part.
      </p>
    <h4>Developer</h4>
      <p>
        I have always been a bit of a creative. From an early age playing with Legos and building bird houses in the garage, I wanted to do something that involved <em>making things</em>. The question was <em>what</em>? There are so many fascinating options in the maker space, that I never quite knew what field I wanted to go into. Architecture? Some kind of engineering? Design? I dabbled with a handful of possibilities, but could never seem to commit to focusing on one, fearing that I would choose the <em>wrong one</em>.
      </p>
      <p>
        On a not complete whim&mdash;may or may not have been some prodding from my parents&mdash;I took a coding class my Freshman year at the University of Washington. After a dive down the rabbit hole, I found out about the Informatics program spring quarter of my sophomore year. With Informatics, I learned I didn't have to choose just <em>one path</em>: I could learn about information architecture, how to engineer the systems to hold and deliver the information, and how to craft user interfaces that were both visually compelling and intuitive for the user to interact with the information. It was the perfect union of my passions.
      </p>
      <p>
        They say "Mom always knows best", and I think secretly my Mom always knew I would follow her footsteps in becoming a full-stack engineer. I'm sure I could have taken a much more direct route to this career path, but I am honestly glad I took a roundabout way of finding something that <em>excites me</em>. Sometimes you have to be patient and wait in order to fully appreciate the reward of the journey.
      </p>
      <p>
        The projects I feature on this site are not just my coding projects, but rather any project that has flexed my creative juices. 
      </p>
      <p>Check them out <Link to='/projects'>here</Link> </p>
    <h4>Adventurer</h4>
      <p>
        When both your parents families moved to Washington State because of a mountain (looking at you, Rainier), chances are you're going to end up spending <em>some</em> time outside. Sure enough, at just over two years old, my parents took me out into the snow and put some pieces of plastic on my feet that somewhat resembled cross-country skis. I grew older, the plastic skis turned into real skis, and the real skis turned into real long skis. 
      </p>
      <p>
        Of course in Washington, it's not like you can cross-country ski all year-round. But what you can do with enough rain-tolerance of course, is hike. As a family, that is exactly what we did. We tackled many of Washington's fire lookouts and went on a smattering of backpacking trips. The most memorable of which was a night on the Wonderland Trail: a 94 mile loop around Mount Rainier. We didn't go far, but for an impressionable 9 year old it was pure magic: I was hooked. While at the time I had absolutely no interest in <em>climbing</em> Mount Rainier, I knew one day I wanted to go around it. Of course people change, and while I still haven't climbed Rainier yet&mdash;hoping to change that this year&mdash;I have summited the rest of Washington's volcanoes, some more than once: clearly something <em>changed</em> in me.
      </p>
      <p>
        Freshman year of college, I started pulling on plastic&mdash;no, it's probably not what you think it is&mdash;I started gym climbing. For me, rock climbing was a bit of a gateway drug. Turned out I like getting high, in elevation that is. Not wanting to just go for it without having a good idea of how to stay safe outside, I decided to look into taking some courses with The Mountaineers, as both my parents are graduates of the Basic Alpine Climbing Course. Trying to balance college and climbing courses proved infeasible, until I found out about Intense Basic: a 9 day, compressed version of the regular basic course.
      </p>
      <p>
        Now, not even two years later, I am co-leading the same course that brought me so much, well on my way to finishing off the Intermediate Climbing Course, and have climbed more rock pitches and alpine peaks than I can count.
      </p>
      <p>Follow along on my adventures and ramblings <Link to='/journal'>here</Link> </p>
    <h4>Photographer</h4>
      <p>
        When you experience so many wild places, there generally comes a point in time where you want to start bringing home some evidence to show friends and family that you actually <em>sometimes</em> do cool things. The obvious choice to accomplish this, especially for a tech enthusiast like myself, is a digital camera. I purchased my first DSLR camera after my sophomore year of high school, and have found myself quite at home behind the viewfinder. 
      </p>
      <p>
        You take photos, you share them, people notice, and soon enough I found myself being asked if I ever did portraits. For whatever reason, even though I barely took any, I said yes. One thing led to another, and now I've done a handful of engagements, a wedding (yikes — don't worry, it went well, just...uhh...a tad stressful), and a bunch of portraits.
      </p>
      <p>
        As you explore around my site, most of the photos you will see are taken by me. Yes, there are obviously the few exceptions, but hey, friends make great tripods when you're in the Great Outdoors!
      </p>
      <p>Browse through my work <Link to='/photography'>here</Link> </p>
  </Layout>
)

export default About

export const aboutQuery = graphql`
  query {
    image: file(relativePath: { eq: "ski_2019.jpg" }) {
      ...fluidImage
    }
  }
`

const imageStyle = {
  maxWidth: "750px",
  margin: "0 auto"
}