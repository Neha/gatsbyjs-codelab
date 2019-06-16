import React from 'react';
import {Helmet} from "react-helmet";

const Metatag = (props) => {
    return (
        <Helmet  title={props.title}
            meta ={[
                { name: 'title', content: props.title },
                { name: 'description', content: props.description }
            ]}>
             <html lang="en" />
           
        </Helmet>
    )
}

export default Metatag;