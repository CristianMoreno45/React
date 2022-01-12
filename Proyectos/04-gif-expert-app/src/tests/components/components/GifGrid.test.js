import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../../components/GifGrid';

describe('Pruebas del componente < GifGrid />', () => {
    const component = <p></p>;
    const category = 'Goku';


    test('debe de mostrar el componente correctamente ', () => {
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

})
