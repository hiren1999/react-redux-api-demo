import axios from 'axios';

const api = axios.create({
	baseURL: 'https://fakestoreapi.com/products',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const FetchAllProducts = async () => {
	return await api
		.get('/')
		.then((response) => response)
		.catch((err) => console.log(err));
};
