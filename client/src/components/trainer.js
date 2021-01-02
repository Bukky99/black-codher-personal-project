import axios from "axios";

export default {
  getAll: async () => {
    const res = await axios.get(`/api/trainer`);
    return res.data || [];
  },
};
