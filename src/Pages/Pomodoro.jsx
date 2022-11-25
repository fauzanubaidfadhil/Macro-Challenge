import TimeManagement from '../Componentspomo/TimeManagement';
import Todolist from '../Componentspomo/Todolist';
import Navigation from '../Componentsberanda/Navbar';
import Content from '../Componentspomo/Content';
import '../css/background.css'


const Pomodoro = () => {
    return <>
    <section className='background'>
        <div>
        <Navigation />
        <Content />
        <TimeManagement />
        <Todolist />
        </div>
       
    </section>
           
    </>
}
 
export default Pomodoro;