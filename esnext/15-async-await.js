async function fetchPerson(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("All done.");
  }
}

// fetchPerson(1).then((body) => console.log(body));

function fetchPeople(...ids) {
  return Promise.all(ids.map(fetchPerson));
}

fetchPeople(1, 2, 3).then(console.log);
