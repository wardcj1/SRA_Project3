// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const nytSearchAPI = "3d6446c5bbce42a68429fb02c8ad0975";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (topic, startYr, endYr) => {

    console.log(location);

    // Query NYT by topic and start/end year and collect 5 results
    const queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&begin_date=" + startYr + "&end_date=" + endYr + "&api-key=" + nytSearchAPI;

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;