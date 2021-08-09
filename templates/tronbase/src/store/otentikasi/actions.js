import axios from "axios"

export async function getTokenAction (ctx, {username, password}) {
  const data = { username, password }

  return await axios.post(
    `${window.location.protocol}//${process.env.REST_HOST}/oten/api/token/`,
    data
  )
}

export async function refreshAccessToken(ctx, {refresh}) {
  const data = { refresh }

  return await axios.post(
    `${window.location.protocol}//${process.env.REST_HOST}/oten/api/token/refresh/`,
    data
  )
}

export async function checkUser(ctx, {token}) {
  return await axios.get(
    `${window.location.protocol}//${process.env.REST_HOST}/oten/api/check/`,
    {
      headers: {authorization: `Bearer ${token}`}
    }
  )
}
