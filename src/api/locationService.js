import axios from 'axios';

const URL_BASE = 'http://localhost:8521/KLTN-SERVER-2024/api/v1';

/**
 * Fetch all locations.
 * @returns {Promise} - Promise containing the location data.
 */
export const fetchLocations = async () => {
  try {
    const response = await axios.get(`${URL_BASE}/locations`);
    return response.data; // Return the location data
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error; // Throw error to be handled by the caller
  }
};

/**
 * Post a new location to the server.
 * @param {string} token - Authentication token.
 * @param {Object} location - The location to post.
 * @returns {Promise} - Promise containing the response data.
 * @throws {Error} - Throws an error if the request fails.
 */
export const postLocation = async (token, location) => {
  try {
    const response = await axios.post(`${URL_BASE}/locations`, location, {
      headers: {
        'Authorization': `Bearer ${token}`, // Add the token here
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error posting location:", error);
    throw error; // Throw error to be handled by the caller
  }
};

/**
 * Upload location image to the server.
 * @param {String} locationId - The location ID.
 * @param {File} file - The image file to upload.
 * @returns {Promise} - Promise containing the response data.
 */
export const uploadLocationImage = async (locationId, file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${URL_BASE}/locations/upload-image/${locationId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error uploading location image:", error);
    throw error; // Throw error to be handled by the caller
  }
};