const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "pinterest",
    desc: "Fetch random Pinterest images based on a search query.",
    category: "fun",
    react: "📌",
    filename: __filename
},
async (conn, mek, m, { from, reply, text }) => {
    try {
        // Vérification de la présence d'un terme de recherche
        if (!text) {
            return reply("Please provide a search query! Example: *!pinterest nature*");
        }

        // URL de l'API Pinterest avec le paramètre de recherche
        const apiUrl = `https://api.vhtear.com/pinterest?query=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Validation de la réponse de l'API
        if (data && data.results && data.results.length > 0) {
            // Sélectionner jusqu'à 4 images (ou moins si moins d'images sont disponibles)
            const imagesToSend = data.results.slice(0, 4);

            // Envoi des images
            for (const image of imagesToSend) {
                await conn.sendMessage(from, {
                    image: { url: image.image }, // URL de l'image Pinterest
                    caption: `Here is an image from your search: *${text}* 📌`,
                }, { quoted: mek });
            }
        } else {
            reply("No results found for your search query. Try with different keywords.");
        }
    } catch (e) {
        // Gestion détaillée des erreurs
        if (e.response) {
            // Erreur renvoyée par l'API (ex. : 404, 500)
            reply(`API Error: ${e.response.status} - ${e.response.data?.message || 'No message provided by the server'}`);
        } else if (e.request) {
            // Erreur réseau : pas de réponse du serveur
            reply(
                "Network Error: The API server is not responding. Possible reasons:\n" +
                "- The server may be down or temporarily unavailable.\n" +
                "- There may be an issue with your internet connection.\n\n" +
                "Please check your internet connection and try again later."
            );
        } else {
            // Autre erreur
            reply(`Unexpected Error: ${e.message}`);
        }
    }
});
