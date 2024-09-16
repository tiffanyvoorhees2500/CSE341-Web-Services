const tiffanyRoute = (req, res) => {
res.send("Tiffany Voorhees");
};

const scottRoute = (req, res) => {
        res.send("Scott Voorhees");
};

const isaacRoute = (req, res) => {
res.send("Isaac Voorhees");
};

module.exports = {
    tiffanyRoute,
    scottRoute,
    isaacRoute
}