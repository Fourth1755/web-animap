import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosError,
} from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080';

// 1. สร้าง Axios Instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:true
});

// 2. สร้าง Request Interceptor (ทำงานก่อนส่ง Request)
// 💎 นี่คือจุดที่สะดวกมากสำหรับใส่ 'Authorization' header
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // เช่น อ่าน Token จาก cookie หรือ local storage
    // const token = getAuthToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. สร้าง Response Interceptor (ทำงานหลังได้รับ Response)
// 💎 จัดการ Error ที่เดียว + ส่งเฉพาะ data กลับไป
apiClient.interceptors.response.use(
  (response) => {
    // Axios จะห่อข้อมูลกลับมาใน 'data'
    // เราส่งเฉพาะ response.data กลับไปให้ Service ใช้งานได้เลย
    return response.data;
  },
  (error: AxiosError) => {
    // จัดการ Error แบบรวมศูนย์
    if (error.response) {
      // Server ตอบกลับมาด้วย Error (เช่น 4xx, 5xx)
      console.error(`[API Error] Status: ${error.response.status}`);
      console.error('[API Error] Data:', error.response.data);
      // คุณอาจจะ redirect ไปหน้า login ถ้าเจอ 401 ที่นี่
      // if (error.response.status === 401) { ... }
    } else if (error.request) {
      // Request ถูกส่ง แต่ไม่ได้รับ Response (เช่น Network error)
      console.error('[API Error] No response:', error.request);
    } else {
      // Error อื่นๆ
      console.error('[API Error] Request setup:', error.message);
    }
    // ส่ง Error ต่อเพื่อให้ .catch() ที่ปลายทางทำงาน
    return Promise.reject(error);
  }
);

export default apiClient; // 👈 Export เป็น default