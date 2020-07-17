import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  main {
    flex: 1;
  }
`;

export default Layout;
