import { gql } from "@apollo/client"


export const LIST_EXAMS = gql(`query {
  exams {
    data {
      id
      attributes {
        course {
          data {
            attributes {
              name
              code
            }
          }
        }
        exam {
          data {
            attributes {
              url
            }
          }
        }
        solution {
          data {
            attributes {
              url
            }
          }
        }
        examDate
      }
    }
  }
}`)

export const LIST_EVENT = gql(`query {
  events  (pagination: { limit: 100 }){
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
          tz
        }
      }
    }
  }
}`)

export const LIST_SONG = gql(`query {
    songs (pagination: { limit: 100 }) {
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
    boardMembers (pagination: { limit: 100 }){
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