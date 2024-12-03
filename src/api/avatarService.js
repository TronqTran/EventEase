import axios from "axios";

const URL_BASE = 'http://localhost:8521/KLTN-SERVER-2024/api/v1';

/**
 * Cập nhật avatar cho người dùng.
 * @param {File} file - Tệp ảnh đại diện cần cập nhật.
 * @returns {Promise} - Promise chứa kết quả của yêu cầu.
 */
export const updateAvatar = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // Thêm tệp vào FormData

    try {
        const response = await axios.post(`${URL_BASE}/avatars/saveOrUpdate`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Trả về dữ liệu phản hồi từ server
    } catch (error) {
        console.error("Error updating avatar:", error);
        throw error; // Ném lỗi để xử lý ở nơi gọi
    }
};