import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value: value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    test('NO debe activar las funciones del submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el SetCategories y limpiar la caja de texto ', () => {
        const value = 'Bugs';
        wrapper.find('input').simulate('change', { target: { value: value } });
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect( wrapper.find('input').text().trim()).toBe('');
        
    })
    

})
