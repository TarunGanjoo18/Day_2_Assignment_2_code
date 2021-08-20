import './App.css';
import Card from './card';

function App() {


let details=[

{
  img : "https://cdn.pixabay.com/photo/2021/08/06/18/46/dog-6526980_960_720.jpg",
  heading :"Card_1",
  subtitle : "Hello this is the first card"
},
{
  img : "https://cdn.pixabay.com/photo/2021/07/23/03/13/harvesting-6486368_960_720.jpg",
  heading :"Card_1",
  subtitle : "Hello this is the first card"
},
{
  img : "https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png",
  heading :"Card_1",
  subtitle : "Hello this is the first card"
},
{
  img :  "https://cdn.pixabay.com/photo/2021/08/16/19/24/boat-6551183_960_720.jpg",
  heading :"Card_1",
  subtitle : "Hello this is the first card"
},
{
  img : "https://cdn.pixabay.com/photo/2021/05/08/09/08/sunset-6237951_960_720.jpg",
  heading :"Card_1",
  subtitle : "Hello this is the first card"
}

]


  return (
   <div className="container">
     {
       details.map((detail)=>(
         <Card img={detail.img} heading={detail.heading} subtitle={detail.subtitle}/>
       )

       )
     }
   </div>
  );
}

export default App;
