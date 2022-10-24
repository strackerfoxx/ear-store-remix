export async function getEars() {
    const respuesta = await fetch(`${process.env.API_URL}/ears?populate=imagen`)
    return await respuesta.json()
}
export async function getEar(id) {
    const respuesta = await fetch(`${process.env.API_URL}/ears?filters[id]=${id}&populate=imagen`)
    return await respuesta.json()
}
