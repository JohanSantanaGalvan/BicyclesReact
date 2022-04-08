import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

function Main(){

  const navigate=useNavigate();

  const goToHelloWorld = () =>{
    navigate("/helloWorld");
  }

  return (
    <>
    <p>Mayichi 5 euros YA</p>
    <button onClick={goToHelloWorld}> Go to Hello World</button>
    <Footer></Footer>
    </>
  );
}

export default Main;