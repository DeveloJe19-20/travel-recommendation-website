//JAVASCRIPT CODE FROM HERE
        //Function that creates a recommendation card in HTML
        function createRecommendation(name, imagesource, description){
            return `
                <div class="recommendation-card">
                    <h2>${name}</h2>
                    <img src="${imagesource}">
                    <p>${description}</p>
                </div>
                `;
        }

        function clearResults() {
            document.getElementById('recommendation-container').innerHTML = "";
        }

        const clearButton = document.getElementById('clear-button');
        clearButton.addEventListener('click', clearResults );

        
        function clearRecommendations() {
            const container = document.getElementById("recommendation-container");
            container.innerHTML = "";
        }
              
        const apiUrl = "./travel_recommendation_api.json";
        const searchBar = document.getElementById("search-bar");
        const searchButton = document.getElementById('search-button');
        searchButton.addEventListener('click', function () {
                const initialUserInput = searchBar.value;
                const modifiedUserInput= initialUserInput.trim().toLowerCase();
                displayResults(modifiedUserInput);
              
                
        });

        function displayResults(userInput){
            fetch(apiUrl)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    //Handle and use the JSON data
                    if (userInput == "beach" || userInput == "beaches") {
                        clearRecommendations();
                        for (i = 0; i <= 1; i++) {
                            const name = data.beaches[i].name;
                            const imageUrl = data.beaches[i].imageUrl;
                            const description = data.beaches[i].description;
                            document.getElementById("site-intro").style.display = "none";
                            document.getElementById("results-section").style.display = "block";
                            document.getElementById("recommendation-container").innerHTML += createRecommendation(name, imageUrl, description);
                        }
                    }
                    else if (userInput == "temple" || userInput == "temples") {
                        clearRecommendations();
                        for (i = 0; i <= 1; i++) {
                            const name = data.temples[i].name;
                            const imageUrl = data.temples[i].imageUrl;
                            const description = data.temples[i].description;
                            document.getElementById("site-intro").style.display = "none";
                            document.getElementById("results-section").style.display = "block";
                            document.getElementById("recommendation-container").innerHTML += createRecommendation(name, imageUrl, description);
                        }

                    }
                    else if (userInput == "country" || userInput == "countries") {
                        clearRecommendations();
                        for (i = 0; i <= 2; i++) {
                            const country = data.countries[i];
                            for (j = 0; j <= 1; j++) {
                                const individual_city = country.cities[j]
                                const name = individual_city.name;
                                const imageUrl = individual_city.imageUrl;
                                const description = individual_city.description;
                                document.getElementById("site-intro").style.display = "none";
                                document.getElementById("results-section").style.display = "block";
                                document.getElementById("recommendation-container").innerHTML += createRecommendation(name, imageUrl, description);
                            }

                    }
                    }
                })
                .catch(error => {
                    //Handle any errors that occurred during the fetch
                    console.error('An error occurred:', error);
                });
        }

            

       
