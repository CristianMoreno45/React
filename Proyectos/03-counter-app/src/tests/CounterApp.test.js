import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Prueba de <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });
    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 1990', () => {
        const wrapper = shallow(<CounterApp value={1990} />)
        const valorObtenido = Number(wrapper.find('h2').text());
        expect(valorObtenido).toBe(1990);
    });
    test('debe incrementar en uno el contador, al hacer click al botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const valorObtenido = Number(wrapper.find('h2').text());
        expect(valorObtenido).toBe(1);
    });

    test('debe decrementar en uno el contador, al hacer click al botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const valorObtenido = Number(wrapper.find('h2').text());
        expect(valorObtenido).toBe(-1);
    });

    test('debe resetear el contador, al hacer click al botón reset', () => {
        const wrapper = shallow(<CounterApp value={1990} />)
        wrapper.find('button').at(0).simulate('click'); // Sumar 1, 1991
        wrapper.find('button').at(0).simulate('click'); // Sumar 1, 1992
        wrapper.find('button').at(1).simulate('click'); // Reset 1, 1990
        const valorObtenido= Number(wrapper.find('h2').text());
        expect(valorObtenido).toBe(1990);
    });
});
