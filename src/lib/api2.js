// async getkeywordsibm() {
// 	console.log('get');
// 	const response = await fetch('https://servetwit.mybluemix.net/search/trump');
// 	if (!response.ok) throw new Error('Ocurrió un error al obtener los posts');
// 	const jsonBody = await response.json();

// 	const { payload } = jsonBody.data;

// 	console.log(payload);

// 	return payload;
// }

// async searchTwits() {
//   const response = await fetch('search/tweets')
//   .then((response)=>{
//     console.log(response)
//   }
//   )
//   const jsonBody = await response.json()

//   const { searchtwits } = jsonBody.data

//   if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

//   return searchtwits
// },

// export default {
// 	async getTwits() {
// 		// console.log('get')
// 		const response = await fetch(`https://servetwit.mybluemix.net/resumenes`);
// 		if (!response.ok) throw new Error('Ocurrió un error al obtener los posts');
// 		const jsonBody = await response.json();

// 		return jsonBody;

// 		// console.log(statuses[0].full_text);
// 		// console.log(statuses[1].full_text);n
// 	}
// };
