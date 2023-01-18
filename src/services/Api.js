export const getDataFromApi = async (string) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e61d5ed65msh6e1fd3b3e86180ap10576cjsn6e517a01ff1e",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/search.json?q=${string}`,
    options
  );
  try {
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
