const { generateAIResponse } = require("../services/geminiService");

// Generate AI Fitness Recommendation
const getFitnessRecommendation = async (req, res) => {
    try {
        const { goal, fitnessLevel, workoutTime } = req.body;

        if (!goal || !fitnessLevel || !workoutTime) {
            return res.status(400).json({
                message: "Please provide goal, fitness level and workout time"
            });
        }

        const prompt = `
        Create a personalized fitness recommendation.

        Goal: ${goal}
        Fitness Level: ${fitnessLevel}
        Available Workout Time: ${workoutTime} minutes

        Provide:
        1. Recommended workout
        2. Exercises
        3. Sets and repetitions
        4. Rest time
        5. Simple fitness tips

        Keep the response beginner-friendly and concise.
        `;

        const recommendation = await generateAIResponse(prompt);

        res.json({
            message: "AI fitness recommendation generated successfully",
            recommendation
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to generate fitness recommendation",
            error: error.message
        });
    }
};

module.exports = {
    getFitnessRecommendation
};