/* It is a simulation of a call to an API to receive shopping cart or wish list items. */

/* const apiDirection = 'url';

export const getIten = async () => {
    const request = await fetch(apiDirection, {
        method: 'GET',
    });
    const response = await request.json();
    if (!request.ok) {
        throw new Error(response.message);
    }
    return response;
}; */
const imagePath = "'../../assets/image7.png'";
const getIten = {
    img: imagePath,
    name: 'New mac',
    price: '899.00',
};

export default getIten;
