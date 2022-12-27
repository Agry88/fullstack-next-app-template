import { GetUser } from '../../types/user';
import axios from 'axios';

export async function loadUsers(): Promise<GetUser[] | null> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';
  const data: GetUser[] = await axios.get<GetUser[]>(`${backendUrl}/api/user`)
    .then(res => {
      return res.data
    })
  return data
}