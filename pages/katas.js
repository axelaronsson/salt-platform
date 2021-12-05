import NavHome from '../components/NavHome'
import FizzBuzz from '../components/FizzBuzz'
import Prime from '../components/Prime'
import Roman from '../components/Roman'
import katasStyle from '../styles/katas.module.css'
const katas = () => {
    return (
        <>
        <NavHome />
        <div className={katasStyle.container}>
          <FizzBuzz />
          <Prime />
          <Roman />  
        </div>
        </>
    )
}

export default katas
