import axios from 'axios'

async function fetchCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        const countryList = document.getElementById('country-list');
        let countries = data;

        function displayCountries() {

            countryList.innerHTML = '';

            countries.forEach(({ name, flag, population, region }) => {
                const li = document.createElement('li');
                li.textContent = `${flag} ${name.common} | Population: ${population} | Region: ${region}`;
                switch (region) {
                    case 'Africa':
                        li.classList.add('Africa');
                        break;
                    case 'Americas':
                        li.classList.add('Americas');
                        break;
                    case 'Asia':
                        li.classList.add('Asia');
                        break;
                    case 'Europe':
                        li.classList.add('Europe');
                        break;
                    case 'Oceania':
                        li.classList.add('Oceania');
                        break;
                    case 'Antarctica':
                        li.classList.add('Antarctica');
                        break;
                    default:
                        break;
                }
                countryList.appendChild(li);
            });
        }

        displayCountries();

        const sortName = document.getElementById('sort-name');
        sortName.addEventListener('click', () => {
            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
            displayCountries();
        });

        const sortPopulation = document.getElementById('sort-population');
        sortPopulation.addEventListener('click', () => {
            countries.sort((a, b) => a.population - b.population);
            displayCountries();
        });


        const sortRegion = document.getElementById('sort-region');
        sortRegion.addEventListener('click', () => {
            countries.sort((a, b) => a.region.localeCompare(b.region));
            displayCountries();
        });
    } catch (error) {
        console.error(error);
    }
}

void fetchCountries()