import React from 'react';

const Bascet = () => {
    return (
        <div>
            <h3>Корзина</h3>
            <h5>Товары в вашей корзине</h5>
            <table>
                <thead>
                    <tr>
                        <td>Продукт</td>
                        <td>Количество</td>
                        <td>Комментарий</td>
                        <td>Цена</td>
                        <td>К оплате</td>
                    </tr>
                </thead>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tfoot>
                    <tr>
                    <p>Итого</p>
                    <td>К оплате</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Bascet;