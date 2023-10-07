import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    </h1>

                    <p>
                        Experienced tech professional with 2 years of expertise in
                        developing web and desktop applications using C#, .NET Core, SQL
                        Server, and Sybase. Skilled in React.js, JavaScript, HTML/CSS, Web
                        API, Web services, and Git. Passionate about crafting efficient and
                        user-centric solutions.
                    </p>
                    <p>
                        Proven collaborator in cross-functional
                        teams, adept at problem-solving and staying current with emerging
                        technologies.
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>

    )
}

export default Skills
