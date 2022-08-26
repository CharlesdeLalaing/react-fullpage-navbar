import './demo.css';

import * as React    from 'react';
import ReactDOM from 'react-dom';

import { SectionsContainer, Section, Header, Footer } from '../index';

const app = document.querySelector('#app');
class Example extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        current: 0,
      }
    }

    render() {
        const options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true,
            scrollCallback: (states) => this.setState({current: states.activeSection})
        };

        const {current} = this.state

        return (
            <div>
                <Header>
                        <a href="/">
                            <img src="./img/logoHectorWhite.png" width="100px" height="100px"/>
                        </a> 
                        <div>
                        <a href="#sectionOne" className="opa">BIO</a>
                        <a href="#sectionTwo">PROJECTS</a>
                        <a href="#sectionThree">CONTACT</a>
                        </div>
                </Header>
                <Footer>
                    <a href="">INSTAGRAM</a>
                    <a href="">HECTOR.COM</a>
                    <a href="">LINKEDIN</a>
                </Footer>
                <SectionsContainer className="container" {...options} activeSection={current}>
                    <Section className="custom-section" verticalAlign="true" color="#000000">Page 1</Section>
                    <Section color="#000000">Page 2</Section>
                    <Section color="#000000">Page 3</Section>
                </SectionsContainer>

                <div className="btnGroup">
                    <button onClick={() => this.setState({current: current - 1})} disabled={current === 0}>pre</button>
                    <button onClick={() => this.setState({current: current + 1})} disabled={current === 2}>next</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Example/>, app);
