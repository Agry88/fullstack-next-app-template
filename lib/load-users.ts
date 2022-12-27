import { GetUser } from '../types/user';
import axios from 'axios';

export async function loadUsers(): Promise<GetUser[] | null> {
  const data: GetUser[] = await axios.get<GetUser[]>('http://localhost:3000/api/user')
    .then(res => {
      return res.data
    })
  return data
}