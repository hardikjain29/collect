const fetchData = async (url) => {
  try {
    const headers = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-Jsio-Token': '7cd0f8481f3fe0ab71f89c7f8ae0db25'
      }
    } // Needed because I'm using jsonServer to serve the JSON. Ideally Node layer would have also worked here. Chose this, because of simplcity
    const response = await fetch(url,headers);
    if (!response.ok) {
      throw new Error('Something failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data', error);
  }
}

export { fetchData };
