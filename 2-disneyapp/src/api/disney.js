const API_HOST = "http://192.168.104.79:300";

//http://192.168.104.79:300/peliculas/categoria/1
export async function getPokemonsApi() {
  try {
    const url = `${API_HOST}/peliculas`;
    console.log(url);
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;

  } catch (error) {
    throw error;
  }
}


