//Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

async function awaitCall() {
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("This is  API Data");
            }, 1500);
        });
    };

    try {
        const data = await fetchData();
        console.log("Data from API:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

awaitCall();
