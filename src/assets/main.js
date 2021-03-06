const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCeO8Z33V7Gq87f5v184VQWA&part=snippet%2Cid&order=date&maxResults=4'; // Declaramos la URL de la API

const content = null || document.getElementById('content'); // Mandamos llamar el id de un elemento HTML y lo declaramos en una variable

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e82598b1dmsh0d96d26664bbf54p1476fcjsnb106245c9ade',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) => {   // Declaramos la funcion de fetch usando el asincrinismo
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};

(async () => {      // Declaramos una funcion autoejecutable
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>
        </div>`
        ).slice(0,4).join('')}`;

        content.innerHTML = view;
    } catch (error) { 
        console.log(error);
    }
})();