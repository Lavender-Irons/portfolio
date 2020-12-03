import React from 'react';

import Card from '../components/Card';

import makeup from '../images/makeup.png';
import crafts from '../images/crafts.png';
import hire from '../images/hire.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Full Stack Website I Developed',
                    subTitle: 'Makeup Site',
                    imgSrc: makeup,
                    link: '#',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Case Study Using UX',
                    subTitle: 'UX Research',
                    imgSrc: crafts,
                    link: '#',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Resume',
                    subTitle: 'For Hire UX Researcher or Full Stack Developer',
                    imgSrc: hire,
                    link: '#',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        // spread operator
        let items = [...this.state.items];

        // if it is selected = false, not selected = true
        items[id].selected = items[id].selected ? false : true;

        // get all item, inside array, go to the one that has the same id
        // one item to be selected at one time, if not selected set false
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        // all the work above is here
        this.setState({
            items
        });
    }

        // method that maps through the items and create a card component
        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;