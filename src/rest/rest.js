const asyncPostCall = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
      // your expected POST request payload goes here
              title: "My post title",
              body: "My post content."
            })
          });
          const data = await response.json();
      // enter you logic when the fetch is successful
          console.log(data);
        } catch(error) {
      // enter your logic for when there is an error (ex. error toast)

          console.log(error)
          } 
    }

asyncPostCall();

