import React, { Component } from 'react';

class Slide extends Component {
    constructor(props) {
        super(props)

        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.handleSlideClick = this.handleSlideClick.bind(this)
        this.imageLoaded = this.imageLoaded.bind(this)
        this.slide = React.createRef()
    }

    handleMouseMove(event) {
        const el = this.slide.current
        const r = el.getBoundingClientRect()

        el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
        el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
    }

    handleMouseLeave() {
        this.slide.current.style.setProperty('--x', 0)
        this.slide.current.style.setProperty('--y', 0)
    }

    handleSlideClick() {
        this.props.handleSlideClick(this.props.slide.index)
    }

    imageLoaded(event) {
        event.target.style.opacity = 1
    }

    render() {
        const { src, headline, index } = this.props.slide
        const current = this.props.current
        let classNames = 'slide'

        if (current === index) classNames += ' slide--current'
        else if (current - 1 === index) classNames += ' slide--previous'
        else if (current + 1 === index) classNames += ' slide--next'

        return (
            <li
                ref={this.slide}
                className={classNames}
                onClick={this.handleSlideClick}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="slide__image-wrapper">
                    <img
                        className="slide__image"
                        alt={headline}
                        src={src}
                        onLoad={this.imageLoaded}
                    />
                </div>
            </li>
        )
    }
}
export default Slide;