import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/photos"
})

export const photosServer = {
    getPhotos(limit: number, pages: number) {
        return instance.get(`?_limit=${limit}&_page=${pages}`)
    },
    getPhoto(pages: string | undefined) {
        return instance.get(`/${pages}`)
    },
}