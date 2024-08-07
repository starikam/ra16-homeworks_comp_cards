
import './App.css'
import RenderCard from './components/RenderCard'
import img from './assets/test 5.jpeg'



const cardList = [
  {title : "Соображения высшего порядка, а также новая модель организационной деятельности требует от нас системного анализа модели развития." , image : img},
  {title : "Практический опыт показывает, что социально-экономическое развитие влечет за собой процесс..."}
]


function App() {

  return (
    <RenderCard list = {cardList}


      />
  )
  
}
export default App
