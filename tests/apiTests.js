import api from '../services/api';

async function testRegister() {
    try {
        const response = await api.post('/Auth/register', {
            userName: 'testuser',
            password: 'testpassword123'
        });
        console.log('Kayıt Başarılı:', response.data);
    } catch (error) {
        console.error('Kayıt Hatası:', error.response?.data || error.message);
    }
}

async function testLogin() {
    try {
        const response = await api.post('/Auth/login', {
            userName: 'testuser',
            password: 'testpassword123'
        });
        console.log('Giriş Başarılı:', response.data);
    } catch (error) {
        console.error('Giriş Hatası:', error.response?.data || error.message);
    }
}

// Test fonksiyonlarını çağırın
testRegister();
testLogin();
