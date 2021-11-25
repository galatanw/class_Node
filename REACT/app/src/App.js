import './App.css';
import Car from './components/Car/Car';
import Movie from './components/movie/Movie';
class product{
  constructor(name,number,image){
    this.name=name;
    this.number=number;
    this.img=image;
  }
}
const car=new product('benz',20000,"https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg")
const movie=new product("titanic",1997,"https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645__340.jpg")
function App() {
  return (
    <div className="App">
      <Car car={car}/>
      <Movie movie={movie}/>
    </div>
  );
}

export default App;
