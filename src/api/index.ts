import axios from "axios";

export const api = {
  fetch: async (url: string, id?: string) => {
    const response = await axios.get(url, {
      params: {
        id
      }
    })
    return response.data
  }
}