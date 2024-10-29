async function getCatFact() {
    const catApi = 'https://meowfacts.herokuapp.com/';
    try {
        const response = await fetch(catApi);
        const input = await response.json();
        document.getElementById('catFact').innerText = input.data;
    } catch (error) {
        console.error('Error fetching the cat fact:', error);
        document.getElementById('catFact').innerText = 'Meow! Could not fetch a fact at the moment.';
    }
}