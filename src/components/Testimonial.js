import React from 'react';
import '../stylesheets/Testimonial.css';


class Testimonial extends React.Component {
    render () {
        return (
            <div className='testimonial-container'>
                <img className='testimonial-img' src={require(`../images/${this.props.image}-testimonial.png`)} alt='' />
                <div className='testimonial-text'>
                    <p className='name'><strong>{this.props.name}</strong> en {this.props.country}</p>
                    <p className='position'>{this.props.position} en <strong>{this.props.company}</strong></p>
                    <p className='review'>"{this.props.review}"</p>
                </div>
            </div>
        );
    }
}

export default Testimonial;
