import Axios from "axios";

const config = {
  YOUR_API_KEY: "AIzaSyCijn6Tc_hThdgnIkHhUwlN2mMUm8uaW2g",
  method: "get",
  url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${YOUR_API_KEY}`,
  headers: {},
};

Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

export default Axios;
