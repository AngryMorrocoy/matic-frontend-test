import Anchor from '@atoms/Anchor';
import Button from '@atoms/Button/';
import Heading from '@atoms/Heading/';
import OrdinaryText from '@atoms/OrdinaryText';
import logo from './assets/easybank-logo.svg';

function App() {
  console.log(logo);
  return (
    <>
      <img src={logo} alt="" />
      <Heading type="h1">Next Generation digital banking</Heading>
      <Heading type="h2">Next Generation digital banking</Heading>
      <Heading type="h3">Next Generation digital banking</Heading>
      <Heading type="h4">Next Generation digital banking</Heading>
      <Heading type="h5">Next Generation digital banking</Heading>
      <Heading type="h6">Next Generation digital banking</Heading>

      <Button>Request Invite</Button>

      <OrdinaryText size="normal">Texto ordinario jiji</OrdinaryText>
      <OrdinaryText size="small">Texto ordinario jiji</OrdinaryText>
      <OrdinaryText size="tiny">Texto ordinario jiji</OrdinaryText>
      <OrdinaryText size="diminute">Texto ordinario jiji</OrdinaryText>

      <Anchor href="#" color="gray">
        This is an anchor
      </Anchor>
      <div style={{ backgroundColor: 'darkgray' }}>
        <Anchor href="#" color="white">
          This is an anchor
        </Anchor>
      </div>
    </>
  );
}

export default App;
