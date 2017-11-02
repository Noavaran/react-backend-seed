import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SliderContainer extends React.Component{

    static propTypes = {
        dots: PropTypes.bool,
        infinite: PropTypes.bool,
        speed: PropTypes.number,
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number,
        customPaging: PropTypes.bool,
        items: PropTypes.array.isRequired
    };

    static defaultProps = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: false,
        items: []
    };

    state = {
        setting: {
            dots: this.props.dots,
            infinite: this.props.infinite,
            speed: this.props.speed,
            slidesToShow: this.props.slidesToShow,
            slidesToScroll: this.props.slidesToScroll
        }
    };

    // const settings = {
    //     customPaging: function(i) {
    //         return <a><img src={`${baseUrl}/abstract0${i+1}.jpg`}/></a>
    //     },
    //     dots: true,
    //     dotsClass: 'slick-dots slick-thumb',
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    renderBody = () => {
        if(this.props.items.length > 0) {
            return this.props.items.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.img} alt={item.id}/>
                    </div>
                )
            });
        } else {
            return null
        }
    };

    render() {
        console.log(this.state.setting);
        console.log(this.props.items);
        let setting = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <div style={{padding: 3, maxWidth: 960, margin: '0 auto'}}>
                <Slider {...setting}>
                    {this.renderBody()}
                </Slider>
            </div>
        )
    }
}