const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../user.json");

//Utility function to read JSON data from a file
const readDataFromFile = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const tiffanyRoute = (req, res) => {
    try {
        const professionals = readDataFromFile();
        res.json(professionals[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error reading data' });
    }
};

module.exports = {
    tiffanyRoute
}