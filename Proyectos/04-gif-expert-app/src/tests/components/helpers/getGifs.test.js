import { getGifs } from "../../../helpers/getGifts";

describe('Pruebas para el componente getGifs', () => {
    test('debe traer 10 registros', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(10)
    });

    test('debe traer 0 registros, si no se envía la cataegoría', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
    });
})
