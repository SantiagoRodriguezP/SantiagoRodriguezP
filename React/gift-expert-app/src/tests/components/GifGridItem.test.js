import React from 'react'
import {shallow } from 'enzyme'
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'Titulo';
    const url = 'https://localhost';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    test('Debe mostrar el componente ', () => {
      

      // expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un parrafo con el titulo ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('Debe tener la img igual a la URL y alt de los props ', () => {
        const img = wrapper.find('img');
        console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
     //   expect(img.prop('src')).toBe(title);
    })
    
    test('debe tener animate_fadeIn ', () => {
        const div = wrapper.find('div');
      const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
})
