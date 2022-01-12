import { GifGridItem } from '../../../components/GifGridItem'
import React from 'react'
import { shallow } from 'enzyme';

describe('Pruebas de Gif Grid Item', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe mostrar el componente correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un párrafo con el mismo valor de title ', () => {
        const p = wrapper.find('p');
        expect (p.text().trim()).toBe(title);
    });
    
    test('debe tener una imagen igual al url y un alt de los props con el valor del title ', () => {
        const img = wrapper.find('img');
        expect (img.prop('src')).toBe(url);
        expect (img.prop('alt')).toBe(title);
    });
    test('debe tener animate__fadeIn ', () => {
        const div = wrapper.find('div');
        expect (div.prop('className')).toContain('animate__fadeIn');
    });

});
