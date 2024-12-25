const fetchData = async (url:string, method:string = "GET", json:any=null) => {
    try {
        const options: RequestInit = { 
            method,
            headers: {
                "Content-Type": "application/json", // Default header for JSON requests
            }
        };

        if (json && ["POST", "PUT", "PATCH"].includes(method.toUpperCase())) {
            options.body = JSON.stringify(json);
        }
        
        const response = await fetch(url, options);
        let result = await response.json();

        if (!response.ok) {
            
            return {
                status: response.status,
                error: result.message
            };
        }
        result["status"] = response.status;
        return result;

    } catch (err) {
        let result = {
            status: 501,
            error: err+""
        }

        return result;
    }
};

export default fetchData;