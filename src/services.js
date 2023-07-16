const subscribe = async (formData) => {
    const response = await fetch(
        'https://subscriber-server-service.onrender.com/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        }
    )
    const data = await response.json()
    return data
}

export default subscribe