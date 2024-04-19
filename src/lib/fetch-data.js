export const fetchFixtures = async () => {
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a05d2b988msh776d918556695edp1ac6cejsn506127a62654',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};
