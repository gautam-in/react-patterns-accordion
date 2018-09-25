import React from 'react';

const AccordionContent = ({data, isOpen}) => isOpen ? <p className="accordion__content">{data}</p> : null

export default AccordionContent;