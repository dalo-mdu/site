import { gql } from "@apollo/client"


export const LIST_EVENT = gql(`query {
  events {
    data {
      id
      attributes {
        info{
          shortinfo
          date
          name
          location
          organizer
          info
          cost
          endDate
        }
      }
    }
  }
}`)

export const LIST_SONG = gql(`query {
    songs {
        data {
            id
            attributes {
                SongInfo {
                    name
                    melody
                    melodyLink
                    text
                    note
                    writer
                }
            }
        }
    }
}`)
export const LIST_BOARD = gql(`query {
    boardMembers{
        data {
            id
            attributes {
                forename
                surname
                role
                nickname
            }
        }
    }
}`)




export const GET_ABOUT = gql(`query {
    about
    {
        data{
          attributes{
            mainContent
        }
        }
    }
}
`)
export const GET_FOOTER = gql(`query {
  footer {
    data {
      attributes {
        items {
          items {
            link
            title
          }
          title
        }
      }
    }
  }
}

`)