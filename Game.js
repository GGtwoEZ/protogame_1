document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const game = document.getElementById('game');
    const step = 50; // Size of each step
    
    document.addEventListener('keydown', (event) => {
    const key = event.key;
    const playerRect = player.getBoundingClientRect();
    const gameRect = game.getBoundingClientRect();
    
    switch (key) {
    case 'ArrowUp':
    if (playerRect.top > gameRect.top) {
    player.style.top = playerRect.top - step + 'px';
    }
    break;
    case 'ArrowDown':
    if (playerRect.bottom < gameRect.bottom) {
    player.style.top = playerRect.top + step + 'px';
    }
    break;
    case 'ArrowLeft':
    if (playerRect.left > gameRect.left) {
    player.style.left = playerRect.left - step + 'px';
    }
    break;
    case 'ArrowRight':
    if (playerRect.right < gameRect.right) {
    player.style.left = playerRect.left + step + 'px';
    }
    break;
    }
    });
    });
    
    