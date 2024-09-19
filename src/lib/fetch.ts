const API_BASE_URL = 'http://localhost:5000';

export async function fetchGachaResult() {
    try {
        const result = await fetch(`${API_BASE_URL}/gacha`)
        const result_json = result.json()
        // console.log(result_json)
        return result_json
    } catch (error) {
        console.error(error)
        return
    }
}
