import axios from 'axios'
import * as cheerio from 'cheerio'

const fetchGitHub = async () => {
  // TODO: 型
  const response: any = await axios.get('https://github.com/hironomiu')
  const html = response.data
  const $ = cheerio.load(html)
  const data = $('.vcard-names')
  // TODO: 型
  data.map((_: any, element: any) => {
    const span = $(element).find('span')
    span.map((_: any, element: any) => {
      const name = $(element).text().trim()
      console.log(name)
    })
  })
}

fetchGitHub()
