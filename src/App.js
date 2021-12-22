import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BcgImages, Form, Header, List, Footer } from './components';

function App() {
  return (
    <Wrapper>
      <BcgImages />
      <div className="section-center">
        <Header />
        <Form />
        <List />
        <Footer />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  position: relative;

  .section-center {
    width: calc(100% - 48px);
    margin: 0 auto;
  }
`;

export default App;
