import React from 'react';
const AccordionTitle = ({heading, subHeading, toggle, isOpen, id}) => {
    const accordionClass = 'accordion__title' + (isOpen ? '' : ' accordion__title--collapse')
    return (
        <div className={accordionClass} onClick={() => toggle(id)}>
            <h3 className="accordion__heading">{heading}</h3>
            {subHeading ? <div className="accordion__subheading">{subHeading}</div> : null }
        </div>
    )
};

export default AccordionTitle;