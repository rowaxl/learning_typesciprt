import { Router, Request, Response } from 'express'

export interface RequestWithBody extends Request {
  body: { [key:string]: string | undefined }
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <div>
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  </div>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if (!email || !password)
  {
    res.status(403).send('You need to POST /login with email and password')
    return
  }

  if (email === 'some@email.com' && password === 'password') {
    // set loggined flag into session
    req.session = { loggedIn: true }
    // redirect to /
    res.redirect('/')
  } else {
    res.status(422).send('Invalid email or password')
  }
})

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <h1>You are logged in</h1>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <h1>You have to login</h1>
        <a href="/login">Login</a>
      </div>
    `)
  }
})

export { router }