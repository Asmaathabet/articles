 

const getData = () => {
    return (dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(json => {
            dispatch ({ type: "DATA_LOADED", payload: json });
          });
    }
  }

  export default getData; 

