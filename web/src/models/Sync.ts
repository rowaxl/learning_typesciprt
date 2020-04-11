import axios, { AxiosResponse } from 'axios'

interface HasID {
  id?: number
}

export class Sync<T extends HasID> {
  constructor(public rootUrl: string) { }

  fetch(id: number): void {
    axios.get(`${this.rootUrl}/${id}}`)
      .then((res: AxiosResponse): void => {
        return res.data
      })
  }

  save(data: T): void {
    const { id } = data

    if (id) {
      axios.put(`${this.rootUrl}/${id}}`, data)
    } else {
      axios.post(this.rootUrl, data)
    }
  }
}
