import React from 'react';
import '../styles/Home.scss';

function Home() {
    return (
        <div className="Home">
            <h1 style={{ textAlign: "center" }}>Developers Learn React</h1>
            <div className="quote">
                <p>" I was at a meetup a few weeks ago in Phoenix where a bunch of beginner programmers were getting together to learn React. I'm hoping to replicate that here in Calgary!</p>
                <p>I would say the prerequisites for the meetup is basic knowledge of programming. What conditional statements are, what loops are, objects, arrays, dictionaries, classes etcetera. If anyone is interested in joining this is something that can probably be learnt in 5-10 hours, depending on your current knowledge.</p>
                <p>We also have a mix of everyone from people brand new to programming to those currently working in the field.</p>
                <p>We're open to any ideas on how to structure the sessions. If you're a local company and you have space, food or something else you think would be useful, we'd love any kind of donation or sponsorship."</p>
                <p>Simon</p>
            </div>
            <div className="thoughts">
                <p style={{ fontStyle: "italic" }}>"That's how things started." A sage said. (lol)</p>
                <p>As a member of this group, I put this article written by Simon on the home page conventionally.</p>
                <p>Thank him for giving me such an excellent opportunity to learn new things and improve myself together. He also found a perfect meetup place for this group.</p>
                <p>I think we are still welcome anyone who is going to join us and grow together. Come and join us if you have willingness and passion, no more hesitate! </p>
                <p>Senjor</p>
            </div>
        </div>
    )
}

export default Home;