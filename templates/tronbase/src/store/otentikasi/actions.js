import axios from "axios"

export async function getTokenAction (ctx, {username, password}) {
  const data = { username, password }

  return await axios.post(
    `${window.location.protocol}//${process.env.REST_HOST}/oten/api/token/`,
    data
  )
}
