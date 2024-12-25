const fetchData = async (url:string) => {
    try {
        const response = await fetch(url, { method: "GET" });

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