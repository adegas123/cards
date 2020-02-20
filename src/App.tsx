import * as React from "react";

import CardContainer from "./containers/CardContainer";
import { MainStyledComponent } from "./style";
import { Container } from "./components/Commons/style";

export class App extends React.Component {
  render() {
    return (
      <MainStyledComponent>
        <Container>
          <h1>Anheuser-Busch Inbev - Code Challenge</h1>
        </Container>
        
        <CardContainer />
      </MainStyledComponent>
    );
  }
};
