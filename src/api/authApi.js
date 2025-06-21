import axiosInstance from './axiosConfig';

// API endpoints cho authentication
const authApi = {
    // API đăng nhập
    login: async (email, password) => {
    try {
      const res = await axiosInstance.post('/auth/login', { email, password });
      console.log("✅ Login response:", res);
      return res;
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
      throw err;
    }
  },

    // API đăng ký
    register: (userData) => {
        return axiosInstance.post('/auth/register', userData);
    },

    // API xác thực token
    verifyToken: () => {
        return axiosInstance.get('/auth/verify');
    },

    // API đổi mật khẩu
    changePassword: (oldPassword, newPassword) => {
        return axiosInstance.post('/auth/change-password', {
            oldPassword,
            newPassword
        });
    },

    // API quên mật khẩu
    forgotPassword: (email) => {
        return axiosInstance.post('/auth/forgot-password', { email });
    },

    // API đặt lại mật khẩu
    resetPassword: (token, newPassword) => {
        return axiosInstance.post('/auth/reset-password', {
            token,
            newPassword
        });
    }
};

export default authApi; 