const apiDirection = 'https://countriesnow.space/api/v0.1';
const allCountrys = `${apiDirection}/countries/flag/unicode`;

export const getAllCountries = async () => {
    const request = await fetch(allCountrys, {
        method: 'GET',
    });
    const response = await request.json();
    if (!response.ok) {
        throw new Error(response.message);
    }
    return response;
};
