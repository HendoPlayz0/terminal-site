document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.querySelector('.terminal-content');
    const cursor = document.querySelector('.typing-animation');

    // Simple command handling
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = cursor.textContent;
            handleCommand(command);
        } else if (e.key === 'Backspace') {
            cursor.textContent = cursor.textContent.slice(0, -1);
        } else if (e.key.length === 1) {
            cursor.textContent += e.key;
        }
    });

    function handleCommand(command) {
        const commands = {
            'clear': () => {
                terminal.innerHTML = '';
            },
            'help': () => {
                window.location.reload();
            },
            'about': () => {
                window.location.href = 'about.html';
            },
            'projects': () => {
                window.location.href = 'projects.html';
            },
            'contact': () => {
                window.location.href = 'contact.html';
            }
        };

        if (commands[command]) {
            commands[command]();
        } else {
            addResponse(`Command not found: ${command}`);
        }
        cursor.textContent = '';
    }

    function addResponse(text) {
        const response = document.createElement('div');
        response.classList.add('command-line');
        response.innerHTML = `
            <span class="prompt">system:~$</span>
            <span>${text}</span>
        `;
        terminal.insertBefore(response, cursor.parentElement);
    }
});