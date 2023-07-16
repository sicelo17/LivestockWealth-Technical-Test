import axios from "axios";

const subscribe = async (formData) => {
    try {
      const response = await axios.post(
        'https://subscriber-server-service.onrender.com/',
        formData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error subscribing:', error);
      throw error;
    }
  };
  
  export default subscribe; 