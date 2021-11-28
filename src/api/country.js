const apiDirection = 'https://countriesnow.space/api/v0.1';
const allCountrys = `${apiDirection}/countries/flag/images`;

export const getAllCountries = async () => {
    try {
        const request = await fetch(allCountrys, {
            method: 'GET',
        });
        const response = await request.json();
        if (!request.ok) {
            throw new Error(response.message);
        }
        return response;
    } catch (error) {
        console.log(error.message);
    }
};
