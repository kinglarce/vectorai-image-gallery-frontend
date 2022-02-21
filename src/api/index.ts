import axios from "axios"
import { Data } from "../interface"

const apiURL: string = process.env.REACT_APP_API_URL as string

export const getData = async (): Promise<Data[] | undefined> => {
  try {
    const { data } = await axios.get(`${apiURL}/bank`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const syncData = async (payload: Data[]): Promise<boolean | undefined> => {
  try {
    console.log('Sync data');
    await axios.post(`${apiURL}/bank`, payload);
    return true;
  } catch (error) {
    console.log(error)
  }
}