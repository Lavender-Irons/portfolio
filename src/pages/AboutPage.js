import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title}/>
                <Content>
                    <p>I did not take the traditional path to programming. I pursued a bachelors in 
                        psychology and a masters in education. I use the skills gain from this
                        education and employment in development. </p>
                    <p>I am a full stack engineer with experience in Java, MySql, React, Node JS, Python,
                        JavaScript, HTML/CSS, Spring, PostgreSQL, and MongoDb.
                    </p>
                    <p>As a UX researcher, I have a solid understanding of analytics and the design
                        process as a whole, as well as dissecting individual's behaviors.
                    </p>
                </Content>
        </div>
    );

}



export default AboutPage;