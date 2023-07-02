export const loaderCart = async ({params, request}) => {
    const response = await fetch(`http://localhost:8000/api/cart/${params.username}/`
    ).then((response) => response.json())
    return response
}