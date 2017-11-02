import React, {Component} from 'react';
import {Progress} from '../../components/common';
import img1 from './pic1.jpg';
import img2 from './pic2.jpg';
import img3 from './pic3.jpg';
import img4 from './pic4.jpg';
import img6 from './pic6.jpg';
import SliderContainer from '../../components/Slider';

export default class ContentPage extends Component{

    state = {
        isLoading: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false, images: [
                {id: 11, img: img1},
                {id: 12, img: img2},
                {id: 13, img: img3},
                {id: 14, img: img4},
                {id: 16, img: img6}
            ]});
        }, 2000);
    }

    render() {
        if(this.state.isLoading) {
            return (
                <Progress/>
            )
        } else {
            return (
                <SliderContainer items={this.state.images} customPaging/>
            )
        }
    }
}