const axios = require('axios')

module.exports = {
    async getRequest(url) {
        try {
            const response = await axios.get(url);
            console.log('==== Success response ===')
            console.log(response.data)
        } catch (e) {
            console.log('==== Error response ===')
            console.log(e)
        }
    },

    async postRequest(url, {data}) {
        try {
            if (data && data[0]) {
                data = JSON.parse(data)
            }
            const response = await axios.post(url, JSON.stringify(data), {
                headers: {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json"
                }
            });
            console.log('==== Success response ===')
            console.log(response.data)
        } catch (e) {
            console.log('==== Error response ===')
            console.log(e.message)
        }
    },

    async patchRequest(url, {data}) {
        try {
            if (data && data[0]) {
                data = JSON.parse(data)
            }
            const response = await axios.patch(url, JSON.stringify(data), {
                headers: {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json"
                }
            });
            console.log('==== Success response ===')
            console.log(response.data)
        } catch (e) {
            console.log('==== Error response ===')
            console.log(e)
        }
    },

    async deleteRequest(url) {
        try {
            const response = await axios.delete(url);
            console.log('==== Success response ===')
            console.log(response.data)
        } catch (e) {
            console.log('==== Error response ===')
            console.log(e)
        }
    },


}