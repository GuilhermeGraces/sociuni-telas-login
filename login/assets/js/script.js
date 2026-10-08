function showHide() {
    const icon = document.querySelector('.icon');
    const input = document.getElementById('password');

    input.type = input.type === 'password' ? 'text' : 'password';
    icon.classList.toggle('is-active');
}