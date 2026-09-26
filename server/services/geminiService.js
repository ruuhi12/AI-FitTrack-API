const generateAIResponse = async (prompt) => {
    try {
        const text = prompt.toLowerCase();

        let recommendation = "";

        // Muscle building
        if (
            text.includes("build muscle") ||
            text.includes("muscle") ||
            text.includes("gain")
        ) {
            recommendation = `
Fitness Recommendation:

Goal: Build Muscle

Workout Plan:
- 5 minutes warm-up
- 3 sets of squats
- 3 sets of push-ups
- 3 sets of lunges
- 3 sets of glute bridges
- 3 sets of plank
- 5 minutes cool-down

Nutrition:
- Eat enough protein
- Include eggs, chicken, fish, milk, beans and nuts
- Drink plenty of water
- Eat balanced meals throughout the day

For beginners, start slowly and increase intensity gradually.
`;
        }

        // Weight loss
        else if (
            text.includes("weight loss") ||
            text.includes("lose weight") ||
            text.includes("fat loss")
        ) {
            recommendation = `
Fitness Recommendation:

Goal: Weight Loss

Workout Plan:
- 5 minutes warm-up
- 20 minutes brisk walking
- 3 sets of squats
- 3 sets of lunges
- 3 sets of jumping jacks
- 10 minutes stretching

Nutrition:
- Eat more vegetables and fruits
- Choose protein-rich foods
- Reduce sugary drinks and processed foods
- Drink plenty of water

Start gradually and maintain consistency.
`;
        }

        // General fitness
        else {
            recommendation = `
Fitness Recommendation:

Workout Plan:
- 5 minutes warm-up
- 3 sets of squats
- 3 sets of push-ups
- 3 sets of lunges
- 3 sets of plank
- 10 minutes walking
- 5 minutes cool-down

Nutrition:
- Eat a balanced diet
- Include protein, vegetables and fruits
- Drink enough water
- Get adequate sleep

Stay consistent and increase your workout intensity gradually.
`;
        }

        return recommendation;

    } catch (error) {
        console.error("Fitness Recommendation Error:", error.message);
        throw new Error("Failed to generate fitness recommendation");
    }
};

module.exports = {
    generateAIResponse
};