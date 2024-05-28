//Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

async function awaitCall() {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = false;
                if (success) {
                    resolve("This is the API Data");
                } else {
                    reject("Failed to fetch data from the API");
                }
            }, 2000);
        });
    };

    try {
        const data = await fetchData();
        console.log("Data from API:", data);
    } catch (error) {
        console.error("Error:", error);
        console.log("Please try again after sometime!.");
    }
}

awaitCall();
