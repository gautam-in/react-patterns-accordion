import React, {Component} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

class AccordionItem extends Component {
    static Title = AccordionTitle
    static Content = AccordionContent
    render() {
        const {title, content, isOpen, toggle, id} = this.props;
        return (
            <div className="accordion__item">
                <AccordionItem.Title {...title} isOpen={isOpen} toggle={toggle} id={id} />
                <AccordionItem.Content data={content} isOpen={isOpen} />
            </div>
        )
    }
}
export default AccordionItem;