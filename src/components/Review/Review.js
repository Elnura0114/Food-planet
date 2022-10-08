import React from 'react';
import reviews from "../../constants/reviews";
import ReviewElement from "./ReviewElem";
import style from './Review.module.css';

const Review = () => {
    const elements = reviews.map((item, id) => {
        return <ReviewElement
            key={id}
            img={item.img}
            name={item.name}
            text={item.text}
            date={item.date}
        />
    })

    return (
        <div>
            <h2 className={style.title}>Отзывы</h2>
            <div className={style.container}>
                {elements}
            </div>
        </div>

    );
};

export default Review;