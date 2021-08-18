import {api} from "boot/axios"

export async function getTokenAction (ctx, {username, password}) {
  const data = { username, password }

  return await api.post(
    `${window.location.protocol}//${process.env.REST_HOST}/oten/api/token/`,
    data
  )
}

export async function refreshAccessToken(ctx, {refresh}) {
  const data = { refresh }

  return await api.post(
    `oten/api/token/refresh/`,
    data
  )
}

export async function checkUser(ctx, {token}) {
  return await api.get(
    `oten/api/check/`,
    {
      headers: {authorization: `Bearer ${token}`}
    }
  )
}
