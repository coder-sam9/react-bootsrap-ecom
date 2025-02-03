import { Button, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderText from "./components/HeaderText";
import Products from "./components/Products";


function App() {
  const productsArr = [[

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ],[

      {
      
      title: 'Colors',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      
      },
      
      {
      
      title: 'Black and white',
      
      price: 50,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      
      },
      
      {
      
      title: 'Yellow and Black',
      
      price: 70,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      
      },
      
      {
      
      title: 'Blue Color',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      
      }
      
      ]]
    
    
    
    
  return (
    <Container fluid >
      <Header/>
      <HeaderText/>
      <Container className="w-50 text-center">

<Products productArr={productsArr[0]} heading={'Album1'}/>
<Products productArr={productsArr[1]} heading={'Album2'}/>
      </Container>
      <Container fluid className="text-center py-5">

{/* {productsArr.map(item=><Products productArr={item}/>)} */}
      <Button variant='secondary' className="text-info">
                  See the Cart
              </Button>
      </Container>
      <Footer/>
    </Container>
  );
}

export default App;
