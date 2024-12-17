export const fetchWords = async (count = 50) => {
    try {
        const response = await fetch(`http://192.168.2.2:5278/api/Word/random?count=${count}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.values;
    } catch (error) {
        console.error("Error fetching words:", error);
        throw error;
    }
};
