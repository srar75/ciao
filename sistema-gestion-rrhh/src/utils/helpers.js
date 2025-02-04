// helpers.js

export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
}

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

export function calculateAge(birthDate) {
    const ageDiff = Date.now() - new Date(birthDate).getTime();
    return Math.floor(ageDiff / (1000 * 3600 * 24 * 365.25));
}