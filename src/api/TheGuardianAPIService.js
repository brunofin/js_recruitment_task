export default class TheGuardianAPIService {
  API_KEY = '';
  BASE_URL = 'https://content.guardianapis.com'

  constructor() {
    if (!process.env.REACT_APP_THE_GUARDIAN_API_KEY) {
      console.warn(`Warning! No The Guardian API key found. Please define your API key on the .env file at the root directory of this project or as an OS environment variable, named 'REACT_APP_THE_GUARDIAN_API_KEY' and try again.`);
    } else {
      this.API_KEY = process.env.REACT_APP_THE_GUARDIAN_API_KEY;
    }
  }

  async search(q, section = '', page = 1) {
    const response = await fetch(`${this.BASE_URL}/search?api-key=${this.API_KEY}${q ? '&q=' + q : ''}${section ? '&section=' + section : ''}&page=${page}`);
    return await response.json();
  }

  async getSections() {
    const response = await fetch(`${this.BASE_URL}/sections?api-key=${this.API_KEY}`);
    const jsonResponse = await response.json();
    return jsonResponse.response.results.map(({ id: value, webTitle: label }) => {
      return {
        value,
        label
      }
    });
  }
}
