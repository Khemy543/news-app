import axios from 'axios';

const NewsAPI = {
    getNews : async () => {
        try {
            const response = await axios
            .get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=7IsRukW0YqdE6KtdTmnjufzONYsT98hw');

            if(response && response.data){
                return response;
            }
        } catch (error) {
            throw new Error(error.response)
        }
    }
}

export default NewsAPI;