interface PersonId {
  name: string
  value: string
}

interface PersonLocation {
  street: string
  city: string
  state: string
  postcode: number
}

interface PersonLogin {
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface PersonName {
  first: string
  last: string
  title: string
}

interface PersonPicture {
  large: string
  medium: string
  thumbnail: string
}

interface Person {
  cell: string
  dob: string
  email: string
  gender: string
  id: PersonId
  location: PersonLocation
  login: PersonLogin
  name: PersonName
  nat: string
  phone: string
  picture: PersonPicture
  registered: string
}
