import { InferGetStaticPropsType, GetStaticProps } from "next"
import axios from "axios"
import Head from 'next/head'
import styled from 'styled-components'
import { GetUser } from '../../types/user'
import { useRef } from 'react'
import { loadUsers } from '../../lib/load-users'

export const getStaticProps: GetStaticProps<{ data: GetUser[] | null }> = async () => {
  const data = await loadUsers()
  return {
    props: { data },
  };
}

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {

  const data = props.data ?? [];

  const userNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleAddUser = async () => {

    const user_name = userNameRef.current?.value
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    const res = await axios.post("http://localhost:3000/api/user", {
      user_name,
      email,
      password
    })

    if (res.status !== 201) {
      alert("新增失敗")
    }

  }

  const handleDeleteUser = async () => {

    const user_name = userNameRef.current?.value
    const email = emailRef.current?.value

    const res = await axios.delete("http://localhost:3000/api/user", {
      data: {
        user_name,
        email,
      }
    })

    if (res.status !== 200) {
      alert("刪除失敗")
    }

  }

  const handleUpdateUser = async () => {

    const user_name = userNameRef.current?.value
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    const res = await axios.put("http://localhost:3000/api/user", {
      user_name,
      email,
      password
    })

    if (res.status !== 200) {
      alert("修改失敗")
    }

  }

  return (
    <>
      <Head>
        <title>首頁</title>
        <meta name="description" content="首頁敘述" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Test Website</Title>
      <Container>

        <DataContainer>
          {data?.map((item) => {
            return (
              <div key={item.user_id}>
                <p>{item.user_name}</p>
                <p>{item.email}</p>
                <p>{item.password}</p>
              </div>
            )
          })}
        </DataContainer>
        <InputsContainer>
          <Input type="text" placeholder='請輸入名稱' ref={userNameRef} />
          <Input type="text" placeholder='請輸入email' ref={emailRef} />
          <Input type="text" placeholder='請輸入password' ref={passwordRef} />
        </InputsContainer>
        <Button onClick={() => handleAddUser()}>
          新增帳號
        </Button>
        <Button onClick={() => handleDeleteUser()}>
          刪除帳號
        </Button>
        <Button onClick={() => handleUpdateUser()}>
          更新帳號
        </Button>
      </Container>

    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`

const DataContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
`