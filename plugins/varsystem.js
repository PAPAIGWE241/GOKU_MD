const fs = require('fs');
const path = require('path');

// Path to the config.js file
const configPath = path.resolve(__dirname, 'config.js'); // Ensure the path to config.js is correct

// Check if the config.js file exists
if (!fs.existsSync(configPath)) {
    console.error("Error: config.js file not found!");
} else {
    let config = require(configPath);

    // Function to update the config file with new values
    function updateConfigFile(newConfig) {
        const fileContent = `module.exports = ${JSON.stringify(newConfig, null, 2)};`;
        fs.writeFileSync(configPath, fileContent, 'utf8');
    }

    // Command to list all variables in the config file (getvar)
    cmd(
        {
            pattern: "getvar",
            desc: "List all variables in the config file.",
            category: "admin",
            react: "📜",
            filename: __filename
        },
        async (conn, mek, m, { from, reply }) => {
            try {
                const variables = Object.keys(config)
                    .map(key => `${key}: ${config[key]}`)
                    .join('\n');
                reply(`Here are the variables in the config file:\n\n${variables}`);
            } catch (error) {
                reply(`Error fetching variables: ${error.message}`);
            }
        }
    );

    // Command to modify an existing variable in the config file (setvar)
    cmd(
        {
            pattern: "setvar",
            desc: "Modify an existing variable in the config file.",
            category: "admin",
            react: "✏️",
            filename: __filename
        },
        async (conn, mek, m, { from, body, reply }) => {
            try {
                const args = body.split(' ');
                if (args.length < 3) {
                    return reply("*Usage: .setvar VARIABLE_NAME NEW_VALUE*\nExample: .setvar AUTO_VIEW_STATUS true");
                }

                const [_, varName, newValue] = args;

                // Check if the variable exists in config.js
                if (!config.hasOwnProperty(varName)) {
                    return reply(`*Error:* The variable "${varName}" does not exist in config.js.`);
                }

                // Update the variable's value
                config[varName] = newValue === 'TRUE' ? true : newValue === 'FALSE' ? false : newValue;
                updateConfigFile(config);

                reply(`✅ The variable "${varName}" has been successfully modified. New value: ${config[varName]}`);
            } catch (error) {
                reply(`Error modifying the variable: ${error.message}`);
            }
        }
    );

    // Command to add a new variable to the config file (newvar)
    cmd(
        {
            pattern: "newvar",
            desc: "Add a new variable to the config file.",
            category: "admin",
            react: "➕",
            filename: __filename
        },
        async (conn, mek, m, { from, body, reply }) => {
            try {
                const args = body.split(' ');
                if (args.length < 3) {
                    return reply("*Usage: .newvar VARIABLE_NAME VALUE*\nExample: .newvar PREFIX true");
                }

                const [_, varName, value] = args;

                // Check if the variable already exists
                if (config.hasOwnProperty(varName)) {
                    return reply(`*Error:* The variable "${varName}" already exists in config.js.`);
                }

                // Add the new variable to the config
                config[varName] = value === 'TRUE' ? true : value === 'FALSE' ? false : value;
                updateConfigFile(config);

                reply(`✅ The variable "${varName}" has been successfully added. Value: ${config[varName]}`);
            } catch (error) {
                reply(`Error adding the variable: ${error.message}`);
            }
        }
    );
}