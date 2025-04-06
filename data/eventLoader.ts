export const loader = async () => {
    try {
        const response = await fetch('/data/events.json'); // Adjust the path based on your server setup
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const eventsData = await response.json();
        return eventsData;
    } catch (error) {
        console.error("Error reading events file:", error);
        return [];
    }
};
