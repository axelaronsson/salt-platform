import protypsStyles from '../styles/protips.module.css'
import NavHome from '../components/NavHome'

const protips = () => {
    return (
        <>
            <NavHome />
            <div className={protypsStyles.container}>
                <div className={protypsStyles.header}>
                    <h2>Protips</h2>
                    <p>Here are some useful topics you should be comfortable with before The Salt Programe starts</p>
                </div>
                <div className={protypsStyles.categories}>
                    <div className={protypsStyles.programmer}>
                        <h3>Working as a programmer</h3>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/mob-start">Mob programming</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/woodyMobTips">Woody Mob programming tips</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/">Test driven development TDD</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/imposterSyndrome">Imposter syndrome</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/scrumrituals">Scrum Rituals</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/planningAProject">Planning a project</a></li>

                        </ul>
                    </div>
                    <div className={protypsStyles.tools}>
                        <h3>Tooling</h3>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/vsliveshare.html">Visual Studio Live Share</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/saveyourfingers-1">Write shorter npm commands</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/saveyourfingers-2">Know Visual Studio Code shortcuts</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/dotfiles">Dotfiles on our computers</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/installDeveloperTools">Installing Developer Tools</a></li>
                        </ul>
                    </div>
                    <div className={protypsStyles.javascript}>
                        <h3>JavaScript</h3>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/passingFunctions">Callbacks I</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/callingBack">Callbacks II</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/makingPromises">Understanding promises</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/asyncOptions">Asynchronous code in JavaScript</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/arrowFunctions">Arrow functions</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/classes">Classes</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/ternary-operator">Ternary operator</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/failFast">Fail fast</a></li>
                        </ul>
                    </div>
                    <div className={protypsStyles.other}>
                        <h3>Other</h3>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/jsfs-boots">JavaScript Boots</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/mochareporters">Use a good reporter with mocha</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/failOnlyOneTest">Fail only one test</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/ReactDevServerProxy">React development server</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/howUseStateWorks">useState</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://appliedtechnology.github.io/protips/localStorage">Local Storage</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default protips
