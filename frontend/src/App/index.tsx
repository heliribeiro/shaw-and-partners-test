// styles
import { Container, Divider } from "./styles";

// containers
import { SectionDataSearch, SectionFile } from "../containers";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Container>
      <SectionFile />
      <Divider />
      <SectionDataSearch />
      <ToastContainer />
    </Container>
  );
}

export default App;
