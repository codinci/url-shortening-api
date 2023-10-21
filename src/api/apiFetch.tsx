import axios, { AxiosResponse, AxiosError } from 'axios';

interface ResponseType {
  "references": "any" ,
  "link": "string",
  "id": "string",
  "long_url": "string",
  "archived": "boolean",
  "created_at": "string",
  "custom_bitlinks": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "deeplinks": [
    {
      "guid": "string",
      "bitlink": "string",
      "app_uri_path": "string",
      "install_url": "string",
      "app_guid": "string",
      "os": "string",
      "install_type": "string",
      "created": "string",
      "modified": "string",
      "brand_guid": "string"
    }
  ]
}

const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
const authToken = import.meta.env.VITE_ACCESS_TOKEN;

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
});

export const shortenUrl = async (longLink: string) => {
  try {
    const response:AxiosResponse<ResponseType> = await axiosInstance.post(apiUrl, {
      "long_url": `${longLink}`,
      "domain": "bit.ly",
      "group_guid": ""
    });

    const responseData: ResponseType = response.data;
    return responseData
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error('Request failed with status code:', axiosError.response.status);
      } else {
        console.error('Request failed:', axiosError.message);
      }
    } else {
      console.error('Non-Axios error:', error);
    }
  }
};



