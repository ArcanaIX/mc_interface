export const fetchApi = async () => {
    const response = await fetch("http://192.168.1.24:3001/start");
}

export const command = async (command) => {
    console.log("COMMAND: " + command);
    const response = await fetch("http://192.168.1.24:3001/command?command="+command);
    const data = await response.text();
    return data
}

export const player = async () => {
    const response = await fetch("http://192.168.1.24:3001/players");
    const data = await response.json();
    return data;
}