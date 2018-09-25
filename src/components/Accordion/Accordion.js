import React, {Component} from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

class Accordion extends Component {
    state = {openAccordions: []}
    static Item = AccordionItem;
    toggle = (index) => {
        this.setState( (prevState) => {
            const newState = {};
            if(prevState.openAccordions.includes(index)) {
                newState.openAccordions = prevState.openAccordions.filter(id => id !== index);
            } else {
                newState.openAccordions = prevState.openAccordions.concat(index);
            }
            return newState;
        } );
    }
    render() {
        const {items} = this.props;
        return (
            <div className="accordion">
                {items.map( ({id, content, title}) => <Accordion.Item key={id} id={id} content={content} title={title} isOpen={this.state.openAccordions.includes(id)} toggle={this.toggle} />)}
            </div>
        )
    }
}
export default Accordion;