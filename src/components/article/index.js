import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleComponent extends Component {

    render() {
        const {title, desc} = this.props;

        if(!title){
            return null;
        }

        return (
            <div data-test="articleComponent">
                <h1 data-test="articleComponentTitle">{title}</h1>
                <p data-test="articleComponentDesc">{desc}</p>
            </div>
        );
    }
}

ArticleComponent.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default ArticleComponent;