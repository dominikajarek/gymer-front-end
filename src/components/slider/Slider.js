import React, { Component } from 'react';
import SliderController from "./SliderController";
import Slide from "./Slide";

import '../../styles/slider.css';

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = { current: 0 }
        this.handlePreviousClick = this.handlePreviousClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleSlideClick = this.handleSlideClick.bind(this)
    }

    handlePreviousClick() {
        const previous = this.state.current - 1

        this.setState({
            current: (previous < 0)
                ? this.props.slides.length - 1
                : previous
        })
    }

    handleNextClick() {
        const next = this.state.current + 1;

        this.setState({
            current: (next === this.props.slides.length)
                ? 0
                : next
        })
    }

    handleSlideClick(index) {
        if (this.state.current !== index) {
            this.setState({
                current: index
            })
        }
    }

    render() {
        const { current } = this.state
        const { slides, heading } = this.props
        const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
        const wrapperTransform = {
            'transform': `translateX(-${current * (100 / slides.length)}%)`
        }

        return (
            <div className='slider' aria-labelledby={headingId}>
                <ul className="slider__wrapper" style={wrapperTransform}>

                    {slides.map(slide => {
                        return (
                            <Slide
                                key={slide.index}
                                slide={slide}
                                current={current}
                                handleSlideClick={this.handleSlideClick}
                            />
                        )
                    })}
                </ul>

                <div className="slider__controls">
                    <SliderController
                        type="previous"
                        title="Go to previous slide"
                        handleClick={this.handlePreviousClick}
                    />

                    <SliderController
                        type="next"
                        title="Go to next slide"
                        handleClick={this.handleNextClick}
                    />
                </div>
            </div>
        )
    }
}

export default Slider;