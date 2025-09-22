const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error("Error in getReview controller:", error);
        // Send a generic server error message to the client
        res.status(500).send("An error occurred while processing your request.");
    }
}