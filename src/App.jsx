
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Componets/Header';
import MyCard from './Componets/MyCard';
import FooterFluid from './Componets/Footer';


function App() {
const title = "Adopta un perrito" 
let InfoCard = [
{
  id:1,
  image:"https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/dog-2723082_1280.jpg?alt=media&token=644d5526-bc36-4e6f-9ae4-bfe278334237&_gl=1*1ytq9v8*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjAyMzQyOS4zLjAuMTY5NjAyMzQyOS42MC4wLjA.",
  name:'Boby',
  gender:'Macho',
  color: 'primary',
  description: 'Amoroso, tierno, juguetón, cuidado le encanta las pantuflas'  ,
},
{
  id:2,
  image:'https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/pexels-kishore-singh-4053533.jpg?alt=media&token=38642699-60be-41eb-8aee-5e309c35df06&_gl=1*1okg2zk*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjAyMzQyOS4zLjEuMTY5NjAyMzUzNy4zOS4wLjA.',
  name:'Tiana',
  gender:'Hembra',
  color : 'pink',
  description:'Temerosa, tierna, necesita mucho amor, le encanta el pollito '  ,
},
{
  id:3,
  image:'https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/pexels-anna-kapustina-3703787.jpg?alt=media&token=77f546df-e870-457b-9cd4-393b62164f55&_gl=1*dfnb2u*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjAyMzQyOS4zLjEuMTY5NjAyMzUxNi42MC4wLjA.',
  name:'Pedro',
  gender:'Macho',
  color: 'primary',
  description: 'Senior, necesita una casa calientita y una familia amorosa ' ,
},
{
  id:4,
  image:'https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/pexels-matteo-petralli-1828875.jpg?alt=media&token=8ecfdb43-75bd-438f-851b-e3b753a419ba&_gl=1*1cjqbvy*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjAyMzQyOS4zLjEuMTY5NjAyMzU1Ny4xOS4wLjA.',
  name:'Juana',
  gender:'Hembra',
  color: 'pink',
  description:'Un poco arisca pero ama los churus y los escondites chiquitos'  ,
},
{
  id:5,
  image:'https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/cat-2083492_1280.jpg?alt=media&token=e7365baf-d21b-43e9-8327-a88b2fdd066a&_gl=1*6nzx5s*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjAyMzQyOS4zLjEuMTY5NjAyMzY3NS40Ni4wLjA.',
  name:'Luna',
  gender:'Hembra',
  color:'pink',
  description: 'Juguetona, familiar, ama a los karencios ' ,
},
{
  id:6,
  image:'https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/cat-551554_1280.jpg?alt=media&token=af9f8e19-ab7c-4b87-9124-8ab436d863c5&_gl=1*1ipi4yo*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjAyMzQyOS4zLjEuMTY5NjAyMzY5Ny4yNC4wLjA.',
  name:'Feliz',
  gender:'Macho',
  color: 'primary',
  description: 'Regalon, ronroneo fuerte, ama casar tus pies',
},

]

  return (
    <div>
      <Header title= {title} />
      <div>
      <div className=' cards' id='card'>
      {InfoCard.map((data) => (
        <MyCard
          key={data.id}
          id={data.id}
          image={data.image}
          name={data.name}
          gender={data.gender}
          color = {data.color}
          description={data.description}
        />
      ))}
    </div>

      </div >
      <div id='footer'>   
         <FooterFluid/>
         </div>
      
        </div>
  );
}



export default App;
