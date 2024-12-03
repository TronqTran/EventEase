import React from 'react';
import './Slider.scss';

const Slider = ({ categories }) => {
    const scrollLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollBy({
            top: 0,
            left: -150, // Điều chỉnh giá trị này để thay đổi khoảng cách cuộn
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollBy({
            top: 0,
            left: 150, // Điều chỉnh giá trị này để thay đổi khoảng cách cuộn
            behavior: 'smooth'
        });
    };

    return (
        <div className="slider-container">
            <h2>Danh mục sự kiện</h2>
            <button className="button button-left" onClick={scrollLeft}>&#10094;</button>
            <div className="slider" id="slider">
                {categories.map((category, index) => (
                    <div className="slider-item" key={index}>
                        {category}
                    </div>
                ))}
            </div>
            <button className="button button-right" onClick={scrollRight}>&#10095;</button>
        </div>
    );
};

export default Slider;