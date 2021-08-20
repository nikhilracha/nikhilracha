import React from "react"

const languages = ['JavaScript (ES6)', 'TypeScript', 'HTML', 'CSS/Sass', 'Python', 'SQL', 'R'];
const Frameworks = ['React', 'Ionic', 'Node', 'Wordpress', 'Jekyll'];
const tools = ['Bash', 'Git', 'Gulp', 'npm', 'Postman', 'Android Studio', 'Chrome DevTools'];



const Skills = ({ }) => {

    return (
        <>
            <section class="section skills">
                <div class="section__title">Skills</div>
                <div class="section__content">
                    <div class="skillz">
                        <div class="skillz__category">
                            <div class="skillz__category__label">Languages</div>
                            <ul>
                                {languages.map(language =>
                                    (
                                        <li class="skillz__category__item">{language}</li>
                                    ))}
                            </ul>
                        </div>
                        <div class="skillz__category">
                            <div class="skillz__category__label">Frameworks</div>
                            <ul>
                                {Frameworks.map(framework =>
                                    (
                                        <li class="skillz__category__item">{framework}</li>
                                    ))}
                            </ul>
                        </div>
                        <div class="skillz__category">
                            <div class="skillz__category__label">Tools</div>
                            <ul>
                                {tools.map(tool =>
                                    (
                                        <li class="skillz__category__item">{tool}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills